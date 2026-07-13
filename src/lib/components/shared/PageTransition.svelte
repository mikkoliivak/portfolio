<script lang="ts">
  import type { Snippet } from 'svelte';
  import { fly } from 'svelte/transition';

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();
  let mounted = $state(false);

  $effect(() => {
    mounted = true;
  });
</script>

{#if mounted}
  <div in:fly={{ y: 20, duration: 500, opacity: 0 }}>
    {@render children()}
  </div>
{/if}
