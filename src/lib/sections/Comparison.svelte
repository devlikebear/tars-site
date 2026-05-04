<script lang="ts">
  import type { Translation } from '$lib/content';
  let { t }: { t: Translation } = $props();
</script>

<section id="comparison" class="border-b border-[var(--color-border-subtle)]">
  <div class="container-tars py-20 md:py-28">
    <div class="mb-12 max-w-3xl">
      <span class="label-mono mb-3 inline-block">{t.comparison.label}</span>
      <h2 class="text-3xl md:text-4xl font-display font-semibold tracking-tight mb-4">{t.comparison.heading}</h2>
      <p class="text-[var(--color-text-secondary)] leading-relaxed">{@html t.comparison.sub}</p>
    </div>

    <div class="card overflow-x-auto p-0">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-[var(--color-border-default)]">
            <th class="text-left px-4 py-3 font-display font-medium text-[var(--color-text-tertiary)] text-xs uppercase tracking-wider">{t.comparison.headers.dimension}</th>
            <th class="text-left px-4 py-3 font-display font-medium text-[var(--color-text-tertiary)] text-xs uppercase tracking-wider">{t.comparison.headers.openclaw}</th>
            <th class="text-left px-4 py-3 font-display font-medium text-[var(--color-text-tertiary)] text-xs uppercase tracking-wider">{t.comparison.headers.hermes}</th>
            <th class="text-left px-4 py-3 font-display font-medium text-[var(--color-amber-soft)] text-xs uppercase tracking-wider">{t.comparison.headers.tars}</th>
          </tr>
        </thead>
        <tbody>
          {#each t.comparison.rows as row, i}
            <tr class={i < t.comparison.rows.length - 1 ? 'border-b border-[var(--color-border-subtle)]' : ''}>
              <td class="px-4 py-3 font-mono text-xs text-[var(--color-text-secondary)] align-top whitespace-nowrap">{row.dimension}</td>
              <td class="px-4 py-3 text-[var(--color-text-secondary)] align-top">{row.openclaw}</td>
              <td class="px-4 py-3 text-[var(--color-text-secondary)] align-top">{row.hermes}</td>
              <td class="px-4 py-3 text-[var(--color-text-primary)] align-top">{row.tars}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>

    <p class="mt-6 text-xs text-[var(--color-text-tertiary)] leading-relaxed">{t.comparison.footnote}</p>
  </div>
</section>
