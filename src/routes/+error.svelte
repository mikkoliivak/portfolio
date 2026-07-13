<script lang="ts">
  import Container from '$lib/components/shared/Container.svelte';
</script>

<section class="flex min-h-screen items-center justify-center">
  <Container class="text-center">
    <p class="font-mono text-xs tracking-[0.2em] text-teal lowercase">No signal</p>
    <h1 class="mt-2 font-display text-6xl font-bold md:text-8xl">404</h1>
    <p class="mt-4 text-lg text-muted">This page doesn't exist.</p>
    <a
      href="/"
      class="mt-8 inline-flex items-center gap-2 font-mono text-xs tracking-wide text-muted lowercase transition-colors hover:text-foreground"
    >
      <span aria-hidden="true">&larr;</span>
      Back to home
    </a>
  </Container>
</section>
