<script lang="ts">
  import type { Translation } from '$lib/content';
  let { t }: { t: Translation } = $props();

  let activeId = $state<string>('brew');
  const active = $derived(t.quickstart.methods.find((m) => m.id === activeId) ?? t.quickstart.methods[0]);

  let runId = $state<string>('foreground');
  const activeRun = $derived(t.quickstart.runModes.find((m) => m.id === runId) ?? t.quickstart.runModes[0]);
</script>

<section id="quickstart" class="border-b border-[var(--color-border-subtle)]">
  <div class="container-tars py-20 md:py-28">
    <div class="mb-12 max-w-2xl">
      <span class="label-mono mb-3 inline-block">{t.quickstart.label}</span>
      <h2 class="text-3xl md:text-4xl font-display font-semibold tracking-tight mb-4">{t.quickstart.heading}</h2>
      <p class="text-[var(--color-text-secondary)] leading-relaxed">{t.quickstart.sub}</p>
    </div>

    <div class="card flex flex-col gap-4 mb-4">
      <div class="flex items-center gap-3 flex-wrap">
        <span class="font-mono text-xs text-[var(--color-amber-soft)]">01</span>
        <h3 class="font-display text-base font-semibold">{t.quickstart.installLabel}</h3>
        <div class="ml-auto flex flex-wrap gap-1 p-1 bg-[var(--color-surface-inset)] rounded-md border border-[var(--color-border-subtle)]">
          {#each t.quickstart.methods as method}
            <button
              type="button"
              class={`px-3 py-1 rounded text-xs font-display font-medium transition-colors ${
                activeId === method.id
                  ? 'bg-[var(--color-surface-elevated)] text-[var(--color-text-primary)]'
                  : 'text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)]'
              }`}
              onclick={() => (activeId = method.id)}
            >
              {method.label}
            </button>
          {/each}
        </div>
      </div>
      <p class="text-sm text-[var(--color-text-secondary)]">{active.note}</p>
      <pre class="font-mono text-xs text-[var(--color-text-primary)] bg-[var(--color-surface-inset)] border border-[var(--color-border-subtle)] rounded-md p-3 overflow-x-auto leading-relaxed">{active.code}</pre>
    </div>

    <div class="grid md:grid-cols-2 gap-4">
      <div class="card flex flex-col gap-3">
        <div class="flex items-center gap-3">
          <span class="font-mono text-xs text-[var(--color-amber-soft)]">{t.quickstart.initLabel}</span>
          <h3 class="font-display text-base font-semibold">{t.quickstart.initTitle}</h3>
        </div>
        <pre class="font-mono text-xs text-[var(--color-text-primary)] bg-[var(--color-surface-inset)] border border-[var(--color-border-subtle)] rounded-md p-3 overflow-x-auto leading-relaxed">tars init</pre>
      </div>

      <div class="card flex flex-col gap-3">
        <div class="flex items-center gap-3 flex-wrap">
          <span class="font-mono text-xs text-[var(--color-amber-soft)]">{t.quickstart.runLabel}</span>
          <h3 class="font-display text-base font-semibold">{t.quickstart.runTitle}</h3>
          <div class="ml-auto flex flex-wrap gap-1 p-1 bg-[var(--color-surface-inset)] rounded-md border border-[var(--color-border-subtle)]">
            {#each t.quickstart.runModes as mode}
              <button
                type="button"
                class={`px-2.5 py-1 rounded text-xs font-display font-medium transition-colors ${
                  runId === mode.id
                    ? 'bg-[var(--color-surface-elevated)] text-[var(--color-text-primary)]'
                    : 'text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)]'
                }`}
                onclick={() => (runId = mode.id)}
              >
                {mode.label}
              </button>
            {/each}
          </div>
        </div>
        <p class="text-sm text-[var(--color-text-secondary)]">{activeRun.note}</p>
        <pre class="font-mono text-xs text-[var(--color-text-primary)] bg-[var(--color-surface-inset)] border border-[var(--color-border-subtle)] rounded-md p-3 overflow-x-auto leading-relaxed">{activeRun.code}</pre>
      </div>
    </div>

    <div class="mt-10 flex flex-wrap gap-3">
      <a href="https://github.com/devlikebear/tars#quick-start" target="_blank" rel="noopener" class="btn-secondary">{t.quickstart.fullGuide}</a>
      <a href="https://github.com/devlikebear/tars-skills" target="_blank" rel="noopener" class="btn-secondary">{t.quickstart.browseSkills}</a>
    </div>
  </div>
</section>
