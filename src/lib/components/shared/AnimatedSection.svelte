<script lang="ts">
  import type { Snippet } from 'svelte';
  import { fly } from 'svelte/transition';

  interface Props {
    children: Snippet;
    class?: string;
    delay?: number;
  }

  let { children, class: className = '', delay = 0 }: Props = $props();

  let visible = $state(false);
  let el: HTMLDivElement | undefined = $state();

  $effect(() => {
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visible = true;
          observer.disconnect();
        }
      },
      { rootMargin: '-100px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  });
</script>

<div bind:this={el} class={className}>
  {#if visible}
    <div in:fly={{ y: 30, duration: 600, delay: delay * 1000, opacity: 0 }}>
      {@render children()}
    </div>
  {/if}
</div>
