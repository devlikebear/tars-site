<script lang="ts">
  import type { Translation } from '$lib/content';
  let { t }: { t: Translation } = $props();
</script>

<section id="features" class="border-b border-[var(--color-border-subtle)]">
  <div class="container-tars py-20 md:py-28">
    <div class="mb-14 max-w-2xl">
      <span class="label-mono mb-3 inline-block">{t.features.label}</span>
      <h2 class="text-3xl md:text-4xl font-display font-semibold tracking-tight mb-4">{@html t.features.heading.replace(/\n/g, '<br/>')}</h2>
      <p class="text-[var(--color-text-secondary)] leading-relaxed">{t.features.sub}</p>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {#each t.features.items as feature}
        <div class="card flex flex-col gap-3">
          <span class="font-mono text-xs text-[var(--color-amber-soft)]">{feature.tag}</span>
          <h3 class="font-display text-lg font-semibold">{feature.title}</h3>
          <p class="text-sm text-[var(--color-text-secondary)] leading-relaxed">{feature.body}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
