<script lang="ts">
  import type { Translation } from '$lib/content';
  let { t }: { t: Translation } = $props();
</script>

<section class="relative overflow-hidden border-b border-[var(--color-border-subtle)]">
  <div class="absolute inset-0 -z-10">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-[var(--color-amber)]/10 blur-[120px]"></div>
  </div>

  <div class="container-tars py-24 md:py-32">
    <div class="max-w-3xl">
      <span class="label-mono mb-6 inline-block">{t.hero.label}</span>
      <h1 class="text-4xl md:text-6xl font-display font-semibold leading-tight tracking-tight mb-6">
        {t.hero.headlineA}<br/>
        {t.hero.headlinePre}<span class="text-[var(--color-amber-soft)]">{t.hero.headlineHighlight}</span>{t.hero.headlineB}
      </h1>
      <p class="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-10 max-w-2xl">
        {t.hero.sub}
      </p>
      <div class="flex flex-wrap gap-3">
        <a href="#quickstart" class="btn-primary">{t.hero.ctaPrimary}</a>
        <a href="https://github.com/devlikebear/tars" target="_blank" rel="noopener" class="btn-secondary">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
          {t.hero.ctaSecondary}
        </a>
      </div>

      <div class="mt-12 flex flex-wrap gap-6 text-sm text-[var(--color-text-tertiary)]">
        {#each t.hero.pills as pill}
          <span class="inline-flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-[var(--color-success)]"></span>
            {pill}
          </span>
        {/each}
      </div>
    </div>
  </div>
</section>
