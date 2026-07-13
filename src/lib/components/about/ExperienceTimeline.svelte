<script lang="ts">
  import type { ExperienceEntry } from '$lib/data/experience';
  import Bullet from '$lib/components/shared/Bullet.svelte';
  import AnimatedSection from '$lib/components/shared/AnimatedSection.svelte';

  interface Props {
    entries: ExperienceEntry[];
  }

  let { entries }: Props = $props();
</script>

<div class="flex flex-col">
  {#each entries as entry, index}
    <AnimatedSection delay={index * 0.08}>
      <div class="grid grid-cols-[92px_1fr] gap-4 md:grid-cols-[140px_1fr] md:gap-10">
        <div class="pt-1">
          <p class="font-mono text-xs leading-tight text-muted">
            {entry.start}<br />&ndash; {entry.end}
          </p>
          {#if entry.current}
            <span
              class="mt-2 inline-flex items-center gap-1.5 font-mono text-[10px] tracking-wide text-teal lowercase"
            >
              <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-teal"></span>
              Current
            </span>
          {/if}
        </div>

        <div
          class="relative border-l border-border pl-6 {index === entries.length - 1
            ? 'pb-0'
            : 'pb-8'}"
        >
          <div class="absolute top-1.5 -left-[3.5px] h-[7px] w-[7px] rounded-full bg-foreground"></div>
          <h3 class="font-display text-lg font-semibold">{entry.role}</h3>
          <p class="mt-0.5 text-sm text-muted">{entry.org} &middot; {entry.location}</p>
          <ul class="mt-3 space-y-1">
            {#each entry.bullets as bullet}
              <li class="flex gap-2.5 text-sm leading-relaxed text-muted">
                <span class="mt-2 h-1 w-1 shrink-0 rounded-full bg-border"></span>
                <Bullet text={bullet} />
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </AnimatedSection>
  {/each}
</div>
