<script lang="ts">
  import type { Translation } from '$lib/content';
  let { t }: { t: Translation } = $props();
</script>

<section class="border-b border-[var(--color-border-subtle)]">
  <div class="container-tars py-20 md:py-24">
    <div class="grid md:grid-cols-12 gap-10">
      <div class="md:col-span-4">
        <span class="label-mono mb-3 inline-block">{t.intro.label}</span>
        <h2 class="text-3xl md:text-4xl font-display font-semibold tracking-tight">{@html t.intro.heading.replace(/\n/g, '<br/>')}</h2>
      </div>
      <div class="md:col-span-8 space-y-5 text-[var(--color-text-secondary)] text-base md:text-lg leading-relaxed">
        {#each t.intro.paragraphs as paragraph}
          <p>{@html paragraph}</p>
        {/each}
      </div>
    </div>
  </div>
</section>
