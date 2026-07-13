<script lang="ts">
  import Container from '$lib/components/shared/Container.svelte';
  import PageTransition from '$lib/components/shared/PageTransition.svelte';
  import AnimatedSection from '$lib/components/shared/AnimatedSection.svelte';
  import ExperienceTimeline from '$lib/components/about/ExperienceTimeline.svelte';
  import { experience, education, skills } from '$lib/data/experience';
</script>

<svelte:head>
  <meta
    name="description"
    content="Mikko Liivak — Cornell CS '27. Background, experience, and skills."
  />
</svelte:head>

<PageTransition>
  <section class="pt-32 pb-24">
    <Container class="max-w-3xl">
      <AnimatedSection>
        <p class="font-mono text-xs tracking-[0.2em] text-teal lowercase">About</p>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div class="mt-8 space-y-5 text-lg leading-relaxed text-muted">
          <p>
            I'm a CS student at Cornell, currently interning at OneStream
            Software. Alongside coursework, I work across two Cornell
            research groups, building geospatial tools for a datacenter
            acoustics study and a sensor pipeline for a water-recording
            drone, and previously served as a founding engineer at PARES AI,
            a YC-backed startup, working across the stack on a small team.
          </p>
          <p>
            I'm drawn to the creative side of engineering, and find that
            pull carries into the rest of my life: I produce house and UK
            garage music, climb and work at Cornell Outdoor Education, and
            backcountry ski across the US and Canada.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.15} class="mt-10">
        <div class="flex flex-wrap gap-x-6 gap-y-3 border-y border-border py-5 font-mono text-xs tracking-wide">
          <a href="mailto:mll286@cornell.edu" class="text-muted transition-colors hover:text-foreground">
            mll286@cornell.edu
          </a>
          <a href="https://github.com/mikkoliivak" target="_blank" rel="noopener noreferrer" class="text-muted transition-colors hover:text-foreground">
            GitHub &#8599;
          </a>
          <a href="https://www.linkedin.com/in/mikkoliivak/" target="_blank" rel="noopener noreferrer" class="text-muted transition-colors hover:text-foreground">
            LinkedIn &#8599;
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" class="text-teal transition-colors hover:text-foreground">
            Download Resume &#8595;
          </a>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2} class="mt-20">
        <p class="mb-10 font-mono text-xs tracking-[0.2em] text-teal lowercase">Experience</p>
        <ExperienceTimeline entries={experience} />
      </AnimatedSection>

      <AnimatedSection delay={0.1} class="mt-20">
        <p class="font-mono text-xs tracking-[0.2em] text-teal lowercase">Education</p>
        <div class="mt-6 rounded-lg border border-border bg-panel p-6 md:p-8">
          <div class="flex flex-wrap items-baseline justify-between gap-2">
            <h3 class="font-display text-xl font-semibold">{education.school}</h3>
            <span class="font-mono text-xs text-muted">{education.date}</span>
          </div>
          <p class="mt-1 text-sm text-muted">{education.degree} &middot; {education.location}</p>

          <div class="mt-6">
            <p class="font-mono text-[11px] tracking-[0.15em] text-muted lowercase">Coursework</p>
            <div class="mt-2 flex flex-wrap gap-2">
              {#each education.coursework as course}
                <span class="rounded-full border border-border px-3 py-1 text-sm">{course}</span>
              {/each}
            </div>
          </div>

          <div class="mt-6">
            <p class="font-mono text-[11px] tracking-[0.15em] text-muted lowercase">Activities</p>
            <ul class="mt-2 space-y-1 text-sm text-muted">
              {#each education.activities as activity}
                <li>{activity}</li>
              {/each}
            </ul>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.1} class="mt-20">
        <p class="font-mono text-xs tracking-[0.2em] text-teal lowercase">Skills</p>
        <h2 class="mt-2 mb-6 font-display text-2xl font-semibold md:text-3xl">
          Specification
        </h2>
        <dl class="border-t border-border">
          {#each Object.entries(skills) as [category, items]}
            <div class="grid grid-cols-1 gap-2 border-b border-border py-5 md:grid-cols-[200px_1fr] md:gap-6">
              <dt class="font-mono text-xs tracking-[0.15em] text-muted lowercase">{category}</dt>
              <dd class="flex flex-wrap gap-2">
                {#each items as item}
                  <span class="rounded-full border border-border px-3 py-1 text-sm transition-colors hover:border-foreground">
                    {item}
                  </span>
                {/each}
              </dd>
            </div>
          {/each}
        </dl>
      </AnimatedSection>
    </Container>
  </section>
</PageTransition>
