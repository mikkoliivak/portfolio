<script lang="ts">
  import { fly } from 'svelte/transition';
  import ScrollIndicator from './ScrollIndicator.svelte';
  import GlobeStickers from './GlobeStickers.svelte';
  import { globeMarkers } from '$lib/data/globeMarkers';

  let mounted = $state(false);

  $effect(() => {
    mounted = true;
  });
</script>

<section class="relative flex min-h-screen items-center overflow-hidden pt-24">
  {#if mounted}
    <div
      class="relative z-10 mx-auto grid w-full max-w-[1200px] items-center gap-12 px-6 md:grid-cols-[1.1fr_0.9fr] md:px-8"
    >
      <div>
        <p
          in:fly={{ y: 16, duration: 500, delay: 50 }}
          class="font-mono text-xs tracking-[0.2em] text-teal lowercase"
        >
          Computer Science &middot; Cornell &rsquo;27
        </p>

        <h1
          in:fly={{ y: 24, duration: 600, delay: 150 }}
          class="mt-4 font-display text-6xl leading-[0.98] font-semibold tracking-tight text-foreground md:text-7xl lg:text-8xl"
        >
          mikko liivak
        </h1>

        <p
          in:fly={{ y: 24, duration: 600, delay: 280 }}
          class="mt-6 font-mono text-sm tracking-[0.1em] text-muted lowercase md:text-base"
        >
          software dev <span class="text-border">|</span> ai/ml <span class="text-border">|</span> backend
        </p>

        <div
          in:fly={{ y: 24, duration: 600, delay: 400 }}
          class="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="/work"
            class="inline-flex items-center gap-2 rounded-md border border-foreground/25 bg-foreground/10 px-5 py-3 text-sm font-medium text-foreground lowercase backdrop-blur-sm transition-colors hover:bg-foreground/20"
          >
            view work
            <span aria-hidden="true">&rarr;</span>
          </a>
          <a
            href="/about"
            class="inline-flex items-center gap-2 rounded-md border border-foreground/15 bg-foreground/5 px-5 py-3 text-sm font-medium text-foreground lowercase backdrop-blur-sm transition-colors hover:bg-foreground/15"
          >
            about / resume
          </a>
        </div>

        <p
          in:fly={{ y: 16, duration: 500, delay: 500 }}
          class="mt-12 font-mono text-[11px] tracking-[0.1em] text-muted lowercase"
        >
          Currently interning at OneStream Software
        </p>
      </div>

      <div
        in:fly={{ y: 24, duration: 700, delay: 300 }}
        class="mx-auto w-full max-w-md md:max-w-none md:translate-x-8 lg:translate-x-16"
      >
        <GlobeStickers markers={globeMarkers} class="w-full" />
      </div>
    </div>
  {/if}

  <ScrollIndicator />
</section>
