<script lang="ts">
  import Container from '$lib/components/shared/Container.svelte';
</script>

<footer class="border-t border-border">
  <Container>
    <div class="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
      <div>
        <p class="font-display text-sm font-semibold">mikko liivak</p>
        <p class="mt-1 font-mono text-xs tracking-wide text-muted">
          Ithaca, NY &middot; &copy; {new Date().getFullYear()}
        </p>
      </div>
      <div class="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs tracking-[0.1em] lowercase">
        <a
          href="mailto:mll286@cornell.edu"
          class="text-muted transition-colors hover:text-foreground"
        >
          Email
        </a>
        <a
          href="https://github.com/mikkoliivak"
          target="_blank"
          rel="noopener noreferrer"
          class="text-muted transition-colors hover:text-foreground"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/mikkoliivak/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-muted transition-colors hover:text-foreground"
        >
          LinkedIn
        </a>
      </div>
    </div>
  </Container>
</footer>
