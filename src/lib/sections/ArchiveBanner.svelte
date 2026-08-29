<script lang="ts">
  import type { Translation } from '$lib/content';
  let { t }: { t: Translation } = $props();
</script>

<aside
  class="border-b border-[var(--color-warning)]/25 bg-[var(--color-warning)]/[0.06]"
  aria-label={t.archive.title}
>
  <div class="container-tars flex flex-col gap-3 py-4 md:flex-row md:items-baseline md:gap-6">
    <span
      class="label-mono shrink-0 rounded border border-[var(--color-warning)]/40 px-2 py-0.5 text-[var(--color-warning)]"
    >
      {t.archive.label}
    </span>
    <div class="min-w-0">
      <p class="font-display font-semibold text-[var(--color-text-primary)]">{t.archive.title}</p>
      <p class="mt-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">
        {t.archive.body}
        <a
          href={t.archive.cta.href}
          target="_blank"
          rel="noopener"
          class="whitespace-nowrap text-[var(--color-amber-soft)] underline underline-offset-2 hover:text-[var(--color-amber)]"
        >
          {t.archive.cta.label}
        </a>
      </p>
    </div>
  </div>
</aside>
