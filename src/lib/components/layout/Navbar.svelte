<script lang="ts">
  import { page } from '$app/state';

  function isActive(href: string) {
    return (
      page.url.pathname === href || page.url.pathname.startsWith(href + '/')
    );
  }
</script>

<header class="fixed top-0 right-0 left-0 z-50">
  <div
    class="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4 md:px-8"
  >
    <a href="/" class="group flex items-center" aria-label="Home">
      <span class="font-display text-lg font-semibold tracking-tight">
        ml
      </span>
    </a>

    <nav class="flex items-center gap-6 md:gap-8">
      <a
        href="/about"
        class="font-mono text-[11px] tracking-[0.15em] lowercase transition-colors {isActive(
          '/about'
        )
          ? 'text-teal'
          : 'text-muted hover:text-foreground'}"
      >
        about
      </a>
      <a
        href="/work"
        class="font-mono text-[11px] tracking-[0.15em] lowercase transition-colors {isActive(
          '/work'
        )
          ? 'text-teal'
          : 'text-muted hover:text-foreground'}"
      >
        work
      </a>
    </nav>
  </div>
</header>
