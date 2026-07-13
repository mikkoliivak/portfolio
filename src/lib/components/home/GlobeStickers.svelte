<script lang="ts">
  import { onMount } from 'svelte';
  import createGlobe, { type Globe } from 'cobe';
  import type { GlobeMarker } from '$lib/data/globeMarkers';

  interface Props {
    markers: GlobeMarker[];
    class?: string;
    speed?: number;
  }

  let { markers, class: className = '', speed = 0.003 }: Props = $props();

  let canvasEl: HTMLCanvasElement | undefined = $state();
  let wrapperEls: (HTMLDivElement | undefined)[] = $state([]);

  let pointerInteracting: { x: number; y: number } | null = null;
  let dragOffset = { phi: 0, theta: 0 };
  let phiOffset = 0;
  let thetaOffset = 0;
  let isPaused = false;

  function handlePointerDown(e: PointerEvent) {
    pointerInteracting = { x: e.clientX, y: e.clientY };
    if (canvasEl) canvasEl.style.cursor = 'grabbing';
    isPaused = true;
  }

  function handlePointerUp() {
    if (pointerInteracting !== null) {
      phiOffset += dragOffset.phi;
      thetaOffset += dragOffset.theta;
      dragOffset = { phi: 0, theta: 0 };
    }
    pointerInteracting = null;
    if (canvasEl) canvasEl.style.cursor = 'grab';
    isPaused = false;
  }

  function handlePointerMove(e: PointerEvent) {
    if (pointerInteracting !== null) {
      dragOffset = {
        phi: (e.clientX - pointerInteracting.x) / 300,
        theta: (e.clientY - pointerInteracting.y) / 1000
      };
    }
  }

  // Mirrors cobe's own lat/lon -> screen projection (unit vector, then the
  // same phi/theta rotation cobe applies internally) so our DOM markers land
  // exactly on the rendered globe, and so we can detect when two pins are
  // about to occupy the same patch of screen.
  function projectMarker(location: [number, number], phi: number, theta: number) {
    const latRad = (location[0] * Math.PI) / 180;
    const lonRad = (location[1] * Math.PI) / 180 - Math.PI;
    const cosLat = Math.cos(latRad);

    const markerRadius = 0.8; // cobe's fixed marker-sphere radius (elevation 0)
    const x0 = -cosLat * Math.cos(lonRad) * markerRadius;
    const y0 = Math.sin(latRad) * markerRadius;
    const z0 = cosLat * Math.sin(lonRad) * markerRadius;

    const cosPhi = Math.cos(phi);
    const sinPhi = Math.sin(phi);
    const cosTheta = Math.cos(theta);
    const sinTheta = Math.sin(theta);

    const c = cosPhi * x0 + sinPhi * z0;
    const s = sinPhi * sinTheta * x0 + cosTheta * y0 - cosPhi * sinTheta * z0;
    const facingDot = -sinPhi * cosTheta * x0 + sinTheta * y0 + cosPhi * cosTheta * z0;
    // A small positive margin (rather than a bare >= 0) keeps polar pins like
    // Antarctica from flickering into view during ordinary auto-rotation —
    // they only reveal themselves once the globe is deliberately tilted.
    const visible = facingDot > 0.05;

    return { xNorm: (c + 1) / 2, yNorm: (-s + 1) / 2, visible };
  }

  function updateMarkerPositions(phi: number, theta: number) {
    if (!canvasEl) return;
    const width = canvasEl.clientWidth;
    const height = canvasEl.clientHeight;

    markers.forEach((m, index) => {
      const { xNorm, yNorm, visible } = projectMarker(m.location, phi, theta);
      const wrapper = wrapperEls[index];
      if (wrapper) {
        wrapper.style.transform = `translate(${xNorm * width}px, ${yNorm * height}px) translate(-50%, -50%)`;
        wrapper.style.opacity = visible ? '1' : '0';
      }
    });
  }

  onMount(() => {
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerup', handlePointerUp, { passive: true });

    let globe: Globe | null = null;
    let animationId = 0;
    let phi = 0;
    let resizeObserver: ResizeObserver | undefined;

    function init() {
      if (!canvasEl) return;
      const width = canvasEl.offsetWidth;
      if (width === 0 || globe) return;

      globe = createGlobe(canvasEl, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width,
        height: width,
        phi: 0,
        theta: 0.2,
        dark: 0,
        diffuse: 1.5,
        mapSamples: 16000,
        mapBrightness: 10,
        baseColor: [0.93, 0.93, 0.96],
        markerColor: [0, 0.45, 0.81],
        glowColor: [0.9, 0.88, 0.98],
        markerElevation: 0,
        markers: markers.map((m) => ({ location: m.location, size: 0.03 })),
        arcs: [],
        arcColor: [0.9, 0.4, 0.7],
        arcWidth: 0.5,
        arcHeight: 0.25,
        opacity: 0.7
      });

      function animate() {
        if (!isPaused) phi += speed;
        const phiTotal = phi + phiOffset + dragOffset.phi;
        const thetaTotal = 0.2 + thetaOffset + dragOffset.theta;
        globe!.update({ phi: phiTotal, theta: thetaTotal });
        updateMarkerPositions(phiTotal, thetaTotal);
        animationId = requestAnimationFrame(animate);
      }
      animate();
      setTimeout(() => {
        if (canvasEl) canvasEl.style.opacity = '1';
      });
    }

    if (canvasEl && canvasEl.offsetWidth > 0) {
      init();
    } else if (canvasEl) {
      resizeObserver = new ResizeObserver((entries) => {
        if (entries[0]?.contentRect.width > 0) {
          resizeObserver?.disconnect();
          init();
        }
      });
      resizeObserver.observe(canvasEl);
    }

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      if (animationId) cancelAnimationFrame(animationId);
      resizeObserver?.disconnect();
      globe?.destroy();
    };
  });
</script>

<div class="relative aspect-square select-none {className}">
  <svg width="0" height="0" style="position: absolute">
    <defs>
      <filter id="sticker-outline">
        <feMorphology in="SourceAlpha" result="Dilated" operator="dilate" radius="2" />
        <feFlood flood-color="#ffffff" result="OutlineColor" />
        <feComposite in="OutlineColor" in2="Dilated" operator="in" result="Outline" />
        <feMerge>
          <feMergeNode in="Outline" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  </svg>
  <canvas
    bind:this={canvasEl}
    onpointerdown={handlePointerDown}
    style="width: 100%; height: 100%; cursor: grab; opacity: 0; transition: opacity 1.2s ease; border-radius: 50%; touch-action: none;"
  ></canvas>
  {#each markers as m, i (m.id)}
    <div class="marker" bind:this={wrapperEls[i]}>
      <span class="sticker" style="--rot: {[-8, 6, -4, 10][i % 4]}deg;" role="img" aria-label={m.caption}>
        {m.sticker}
      </span>

      <div class="bubble {m.bubbleSide === 'left' ? 'bubble-left' : ''}">
        {m.caption}
      </div>
    </div>
  {/each}
</div>

<style>
  .marker {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.4s ease;
  }

  .sticker {
    display: block;
    font-size: 2rem;
    line-height: 1;
    transform: rotate(var(--rot, 0deg));
    filter: url(#sticker-outline) drop-shadow(0 2px 3px rgba(0, 0, 0, 0.3));
  }

  .bubble {
    position: absolute;
    bottom: calc(100% + 14px);
    right: 4px;
    width: max-content;
    max-width: 11rem;
    background: var(--accent, #0072ce);
    color: #fff;
    padding: 0.5rem 0.8rem;
    border-radius: 1rem 1rem 0.2rem 1rem;
    font-family: var(--font-body-family, sans-serif);
    font-size: 0.8rem;
    line-height: 1.3;
    text-align: left;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.35);
    z-index: 20;
  }

  .bubble::after {
    content: '';
    position: absolute;
    bottom: -7px;
    right: 0;
    width: 13px;
    height: 13px;
    background: var(--accent, #0072ce);
    clip-path: polygon(0 0, 100% 0, 100% 100%);
  }

  /* Mirror image of .bubble — opens to the left instead of the right, so its
     tail points the opposite way. Used to keep two nearby pins' bubbles from
     reaching toward each other. */
  .bubble-left {
    right: auto;
    left: 4px;
    border-radius: 1rem 1rem 1rem 0.2rem;
  }

  .bubble-left::after {
    right: auto;
    left: 0;
    clip-path: polygon(100% 0, 0 0, 0 100%);
  }
</style>
