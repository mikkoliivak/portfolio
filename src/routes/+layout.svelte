<script lang="ts">
  import '../app.css';
  import GridGlowBackground from '$lib/components/shared/GridGlowBackground.svelte';
  import Navbar from '$lib/components/layout/Navbar.svelte';
  import Footer from '$lib/components/layout/Footer.svelte';
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();
</script>

<svelte:head>
  <title>mikko liivak</title>
  <meta
    name="description"
    content="Portfolio of Mikko Liivak — Cornell CS '27. Software engineering across audio, geospatial, and systems work, plus music production."
  />
</svelte:head>

<div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
  <GridGlowBackground />
</div>
<Navbar />
<main>
  {@render children()}
</main>
<Footer />
