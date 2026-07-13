<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
    class?: string;
  }

  let { children, class: className = '' }: Props = $props();
</script>

<div class="mx-auto max-w-[1200px] px-6 md:px-8 {className}">
  {@render children()}
</div>
