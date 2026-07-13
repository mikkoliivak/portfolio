<script lang="ts">
  import type { Project } from '$lib/types';
  import ProjectCard from './ProjectCard.svelte';
  import Container from '$lib/components/shared/Container.svelte';
  import AnimatedSection from '$lib/components/shared/AnimatedSection.svelte';

  interface Props {
    projects: Project[];
  }

  let { projects }: Props = $props();
</script>

<section class="py-24 md:py-32">
  <Container>
    <AnimatedSection class="mb-16">
      <p class="font-mono text-xs tracking-[0.2em] text-teal lowercase">
        Selected Work
      </p>
      <h2 class="mt-2 font-display text-3xl font-semibold md:text-4xl">
        Featured builds
      </h2>
    </AnimatedSection>

    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
      {#each projects as project, index}
        <ProjectCard {project} {index} />
      {/each}
    </div>

    <AnimatedSection class="mt-16 text-center">
      <a
        href="/work"
        class="inline-flex items-center gap-2 font-mono text-xs tracking-[0.15em] text-muted lowercase transition-colors hover:text-foreground"
      >
        View all work
        <span aria-hidden="true">&rarr;</span>
      </a>
    </AnimatedSection>
  </Container>
</section>
