<script lang="ts">
  import type { Translation, ConsolePage } from '$lib/content';
  let { t }: { t: Translation } = $props();

  const groupColor: Record<ConsolePage['group'], string> = {
    Home: 'text-[var(--color-amber-soft)]',
    Work: 'text-[var(--color-info)]',
    Operate: 'text-[var(--color-success)]',
    Setup: 'text-[var(--color-warning)]'
  };
</script>

<section id="console" class="border-b border-[var(--color-border-subtle)] bg-[var(--color-surface-inset)]/40">
  <div class="container-tars py-20 md:py-28">
    <div class="mb-14 max-w-3xl">
      <span class="label-mono mb-3 inline-block">{t.console.label}</span>
      <h2 class="text-3xl md:text-4xl font-display font-semibold tracking-tight mb-4">{@html t.console.heading.replace(/\n/g, '<br/>')}</h2>
      <p class="text-[var(--color-text-secondary)] leading-relaxed">{@html t.console.sub}</p>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {#each t.console.pages as page}
        <div class="card flex flex-col gap-3">
          <div class="flex items-center justify-between">
            <span class={`font-mono text-xs ${groupColor[page.group]}`}>{page.groupLabel}</span>
            <span class="font-mono text-[10px] text-[var(--color-text-ghost)]">{page.path}</span>
          </div>
          <h3 class="font-display text-lg font-semibold">{page.name}</h3>
          <p class="text-sm text-[var(--color-text-secondary)] leading-relaxed">{page.body}</p>
        </div>
      {/each}
    </div>

    <div class="mt-10 text-sm text-[var(--color-text-tertiary)]">{t.console.plus}</div>
  </div>
</section>
