<script lang="ts">
  // Renders a string with **term** spans as emphasized inline text —
  // matches how metrics are called out on the source resume.
  interface Props {
    text: string;
    class?: string;
  }

  let { text, class: className = '' }: Props = $props();

  const parts = $derived(text.split(/(\*\*[^*]+\*\*)/g));
</script>

<span class={className}>
  {#each parts as part}
    {#if part.startsWith('**') && part.endsWith('**')}
      <strong class="font-medium text-foreground">{part.slice(2, -2)}</strong>
    {:else}
      {part}
    {/if}
  {/each}
</span>
