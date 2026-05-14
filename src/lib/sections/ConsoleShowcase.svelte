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

    <div class="mt-12 card flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
      <div class="md:flex-1">
        <span class="label-mono mb-2 inline-block">{t.console.pwa.label}</span>
        <h3 class="font-display text-xl font-semibold mb-2">{t.console.pwa.title}</h3>
        <p class="text-sm text-[var(--color-text-secondary)] leading-relaxed">{t.console.pwa.body}</p>
      </div>
      <div class="md:flex-1 flex flex-col gap-2">
        <ul class="text-sm text-[var(--color-text-secondary)] leading-relaxed list-disc pl-5 space-y-1">
          {#each t.console.pwa.bullets as bullet}
            <li>{bullet}</li>
          {/each}
        </ul>
        <a
          href={t.console.pwa.cta.href}
          target="_blank"
          rel="noopener"
          class="btn-secondary self-start mt-2"
        >
          {t.console.pwa.cta.label}
        </a>
      </div>
    </div>
  </div>
</section>
