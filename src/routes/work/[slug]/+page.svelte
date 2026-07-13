<script lang="ts">
  import Container from '$lib/components/shared/Container.svelte';
  import PageTransition from '$lib/components/shared/PageTransition.svelte';
  import AnimatedSection from '$lib/components/shared/AnimatedSection.svelte';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
  const project = $derived(data.project);
</script>

<svelte:head>
  <meta name="description" content={project.description} />
</svelte:head>

<PageTransition>
  <section class="pt-32 pb-24">
    <Container class="max-w-4xl">
      <AnimatedSection>
        <a
          href="/work"
          class="mb-8 inline-flex items-center gap-2 font-mono text-xs tracking-wide text-muted lowercase transition-colors hover:text-foreground"
        >
          <span aria-hidden="true">&larr;</span>
          Back to Work
        </a>

        <h1 class="font-display text-4xl font-bold md:text-6xl">
          {project.title}
        </h1>

        <div class="mt-4 flex flex-wrap items-center gap-3">
          <span class="font-mono text-sm text-muted">{project.year}</span>
          {#if project.domain}
            <span
              class="rounded-full px-2 py-1 font-mono text-xs lowercase tracking-wide {project.domain ===
              'audio'
                ? 'bg-amber-tint text-amber'
                : 'bg-teal-tint text-teal'}"
            >
              {project.domain === 'audio' ? 'Audio / DSP' : 'Geospatial'}
            </span>
          {/if}
          <div class="flex flex-wrap gap-2">
            {#each project.tags as tag}
              <span class="rounded-full border border-border px-2 py-1 font-mono text-xs text-muted">
                {tag}
              </span>
            {/each}
          </div>
        </div>
      </AnimatedSection>

      {#if project.image}
        <AnimatedSection delay={0.1} class="mt-8">
          <div class="relative aspect-video overflow-hidden rounded-lg">
            <img
              src={project.image}
              alt={project.title}
              class="h-full w-full object-cover"
            />
          </div>
        </AnimatedSection>
      {/if}

      <AnimatedSection delay={0.2} class="mt-12">
        <div class="text-lg leading-relaxed text-muted">
          <p>{project.longDescription || project.description}</p>
        </div>
      </AnimatedSection>

      {#if project.liveUrl || project.githubUrl}
        <AnimatedSection delay={0.3} class="mt-12 flex gap-4">
          {#if project.liveUrl}
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 rounded-md bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85"
            >
              View Live
            </a>
          {/if}
          {#if project.githubUrl}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-foreground"
            >
              View Source
            </a>
          {/if}
        </AnimatedSection>
      {/if}
    </Container>
  </section>
</PageTransition>
