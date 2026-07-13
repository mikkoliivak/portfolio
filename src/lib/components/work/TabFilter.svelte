<script lang="ts">
  import type { TabItem } from '$lib/types';

  interface Props {
    tabs: TabItem[];
    activeTab: string;
    onTabChange: (tabId: string) => void;
  }

  let { tabs, activeTab, onTabChange }: Props = $props();
</script>

<div class="flex w-fit gap-1 rounded-lg border border-border bg-panel p-1">
  {#each tabs as tab}
    <button
      onclick={() => onTabChange(tab.id)}
      class="relative rounded-md px-4 py-2 font-mono text-xs tracking-wide lowercase transition-colors {activeTab ===
      tab.id
        ? 'text-foreground'
        : 'text-muted hover:text-foreground'}"
    >
      {#if activeTab === tab.id}
        <div
          class="absolute inset-0 rounded-md border border-foreground/15 bg-foreground/10 transition-all"
        ></div>
      {/if}
      <span class="relative z-10">{tab.label}</span>
    </button>
  {/each}
</div>
