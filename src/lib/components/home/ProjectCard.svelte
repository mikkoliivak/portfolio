<script lang="ts">
  import type { Project } from '$lib/types';
  import AnimatedSection from '$lib/components/shared/AnimatedSection.svelte';

  interface Props {
    project: Project;
    index: number;
  }

  let { project, index }: Props = $props();

  const domainLabel = $derived(project.domain === 'audio' ? 'Audio / DSP' : 'Geospatial');
</script>

<AnimatedSection delay={index * 0.1}>
  <a href="/work/{project.slug}" class="group block">
    <div
      class="relative mb-4 aspect-[16/10] overflow-hidden rounded-md border border-border bg-panel"
    >
      {#if project.image}
        <img
          src={project.image}
          alt={project.title}
          class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      {:else}
        <div
          class="flex h-full w-full flex-col items-center justify-center gap-3 transition-colors group-hover:bg-foreground/[0.02]"
        >
          {#if project.domain === 'audio'}
            <svg width="40" height="24" viewBox="0 0 40 24" fill="none" class="text-amber">
              <path
                d="M1 12h4l3-9 4 18 4-14 3 10 3-6 3 3h14"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          {:else if project.domain === 'geo'}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" class="text-teal">
              <circle cx="16" cy="16" r="4" stroke="currentColor" stroke-width="1.3" />
              <circle cx="16" cy="16" r="9" stroke="currentColor" stroke-width="1.3" opacity="0.6" />
              <circle cx="16" cy="16" r="14" stroke="currentColor" stroke-width="1.3" opacity="0.3" />
            </svg>
          {:else}
            <svg width="24" height="24" viewBox="0 0 18 18" fill="none" class="text-muted">
              <circle cx="9" cy="9" r="6.5" stroke="currentColor" stroke-width="1.3" />
              <path d="M9 0.5v4M9 13.5v4M0.5 9h4M13.5 9h4" stroke="currentColor" stroke-width="1.3" />
            </svg>
          {/if}
          <span class="font-mono text-[10px] tracking-[0.2em] text-muted lowercase">
            {project.slug}
          </span>
        </div>
      {/if}
    </div>

    <div class="space-y-2">
      <div class="flex items-center justify-between gap-3">
        <h3
          class="font-display text-xl font-medium transition-colors group-hover:text-teal"
        >
          {project.title}
        </h3>
        <span class="font-mono text-xs text-muted">{project.year}</span>
      </div>
      <p class="text-sm leading-relaxed text-muted">
        {project.description}
      </p>
      <div class="flex flex-wrap items-center gap-2 pt-1">
        {#if project.domain}
          <span
            class="rounded-full px-2 py-1 font-mono text-[11px] tracking-wide lowercase {project.domain ===
            'audio'
              ? 'bg-amber-tint text-amber'
              : 'bg-teal-tint text-teal'}"
          >
            {domainLabel}
          </span>
        {/if}
        {#each project.tags.slice(0, 3) as tag}
          <span
            class="rounded-full border border-border px-2 py-1 font-mono text-[11px] text-muted"
          >
            {tag}
          </span>
        {/each}
      </div>
    </div>
  </a>
</AnimatedSection>
