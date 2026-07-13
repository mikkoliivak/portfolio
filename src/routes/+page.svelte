<script lang="ts">
  import HeroSection from '$lib/components/home/HeroSection.svelte';
  import FeaturedProjects from '$lib/components/home/FeaturedProjects.svelte';
  import { getFeaturedProjects } from '$lib/data/projects';

  const featuredProjects = getFeaturedProjects();
</script>

<HeroSection />
<FeaturedProjects projects={featuredProjects} />
