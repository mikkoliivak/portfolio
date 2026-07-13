<script lang="ts">
  import { fade } from 'svelte/transition';

  interface Props {
    class?: string;
  }

  let { class: className = 'text-muted' }: Props = $props();

  let show = $state(false);

  $effect(() => {
    const timer = setTimeout(() => (show = true), 1500);
    return () => clearTimeout(timer);
  });
</script>

{#if show}
  <div
    in:fade={{ duration: 800 }}
    class="absolute bottom-8 left-1/2 -translate-x-1/2"
  >
    <div class="animate-bounce {className}">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        class="opacity-60"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </div>
  </div>
{/if}

<style>
  .animate-bounce {
    animation: bounce 1.5s ease-in-out infinite;
  }
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(8px); }
  }
</style>
