<script lang="ts">
  import Container from '$lib/components/shared/Container.svelte';
  import PageTransition from '$lib/components/shared/PageTransition.svelte';
  import AnimatedSection from '$lib/components/shared/AnimatedSection.svelte';
  import TabFilter from '$lib/components/work/TabFilter.svelte';
  import ProjectGrid from '$lib/components/work/ProjectGrid.svelte';
  import { getProjectsByCategory } from '$lib/data/projects';
  import type { TabItem, ProjectCategory } from '$lib/types';
  import { scale } from 'svelte/transition';

  const tabs: TabItem[] = [
    { id: 'all', label: 'Technical Projects', category: 'all' },
    { id: 'music', label: 'Music / Art', category: 'music' },
  ];

  let activeTab = $state('all');

  const filteredProjects = $derived(
    activeTab === 'music'
      ? [
          ...getProjectsByCategory('music' as ProjectCategory),
          ...getProjectsByCategory('art' as ProjectCategory),
        ]
      : getProjectsByCategory(activeTab as ProjectCategory | 'all')
  );
</script>

<PageTransition>
  <section class="pt-32 pb-24">
    <Container>
      <p class="mb-12 font-mono text-xs tracking-[0.2em] text-teal lowercase">Work</p>

      <div class="mb-12">
        <TabFilter
          {tabs}
          {activeTab}
          onTabChange={(id) => (activeTab = id)}
        />
      </div>

      {#if activeTab === 'music'}
        <div class="flex flex-col gap-6">
          {#each filteredProjects as project, index (project.slug)}
            <div in:scale={{ start: 0.9, duration: 300, opacity: 0 }}>
              <AnimatedSection delay={index * 0.1}>
                <article class="flex items-start gap-4 border-b border-border pb-6 last:border-b-0">
                  {#if project.image}
                    <div class="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-border bg-panel">
                      <img
                        src={project.image}
                        alt={project.title + ' cover'}
                        class="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  {:else}
                    <div class="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-md border border-border bg-panel">
                      <svg width="28" height="18" viewBox="0 0 40 24" fill="none" class="text-amber">
                        <path
                          d="M1 12h4l3-9 4 18 4-14 3 10 3-6 3 3h14"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  {/if}
                  <div class="flex-1">
                    <div class="flex items-baseline justify-between gap-3">
                      <h2 class="font-display text-lg font-semibold">{project.title}</h2>
                      <span class="font-mono text-xs text-muted">{project.year}</span>
                    </div>
                    <p class="mt-1 text-sm text-muted">{project.description}</p>
                    <div class="mt-2 flex flex-wrap gap-2 font-mono text-xs text-muted">
                      {#each project.tags as tag}
                        <span class="rounded-full border border-border px-2 py-0.5">
                          {tag}
                        </span>
                      {/each}
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            </div>
          {/each}
        </div>
      {:else}
        <ProjectGrid projects={filteredProjects} />
      {/if}
    </Container>
  </section>
</PageTransition>
