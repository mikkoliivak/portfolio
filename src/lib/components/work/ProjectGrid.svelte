<script lang="ts">
  import type { Project } from '$lib/types';
  import ProjectCard from '$lib/components/home/ProjectCard.svelte';
  import { scale } from 'svelte/transition';

  interface Props {
    projects: Project[];
  }

  let { projects }: Props = $props();
</script>

<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
  {#each projects as project, index (project.slug)}
    <div in:scale={{ start: 0.9, duration: 300, opacity: 0 }}>
      <ProjectCard {project} {index} />
    </div>
  {/each}
</div>
