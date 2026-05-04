<script lang="ts">
  type InstallMethod = {
    id: string;
    label: string;
    note: string;
    code: string;
  };

  const methods: InstallMethod[] = [
    {
      id: 'brew',
      label: 'Homebrew',
      note: 'macOS / Linux — pre-built binary with console',
      code: 'brew tap devlikebear/tap\nbrew install devlikebear/tap/tars'
    },
    {
      id: 'curl',
      label: 'curl',
      note: 'Linux / macOS one-liner — pre-built binary with console',
      code: 'curl -fsSL https://raw.githubusercontent.com/devlikebear/tars/main/install.sh | sh'
    },
    {
      id: 'source',
      label: 'From source',
      note: 'For development. Requires Go 1.25+ and Node 20+',
      code: 'git clone https://github.com/devlikebear/tars.git\ncd tars\nmake build'
    }
  ];

  let activeId = $state<string>('brew');
  const active = $derived(methods.find((m) => m.id === activeId) ?? methods[0]);

  const runSteps = [
    {
      label: '02',
      title: 'Initialize workspace',
      code: 'tars init'
    },
    {
      label: '03',
      title: 'Start the server',
      code: 'tars serve\n# console at http://127.0.0.1:43180/console'
    }
  ];
</script>

<section id="quickstart" class="border-b border-[var(--color-border-subtle)]">
  <div class="container-tars py-20 md:py-28">
    <div class="mb-12 max-w-2xl">
      <span class="label-mono mb-3 inline-block">// quickstart</span>
      <h2 class="text-3xl md:text-4xl font-display font-semibold tracking-tight mb-4">
        Three steps to a running agent.
      </h2>
      <p class="text-[var(--color-text-secondary)] leading-relaxed">
        On first launch, the wizard walks you through provider and tier configuration. The console boots in setup-only mode until an LLM is configured.
      </p>
    </div>

    <div class="card flex flex-col gap-4 mb-4">
      <div class="flex items-center gap-3 flex-wrap">
        <span class="font-mono text-xs text-[var(--color-amber-soft)]">01</span>
        <h3 class="font-display text-base font-semibold">Install</h3>
        <div class="ml-auto flex flex-wrap gap-1 p-1 bg-[var(--color-surface-inset)] rounded-md border border-[var(--color-border-subtle)]">
          {#each methods as method}
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
      {#each runSteps as step}
        <div class="card flex flex-col gap-3">
          <div class="flex items-center gap-3">
            <span class="font-mono text-xs text-[var(--color-amber-soft)]">{step.label}</span>
            <h3 class="font-display text-base font-semibold">{step.title}</h3>
          </div>
          <pre class="font-mono text-xs text-[var(--color-text-primary)] bg-[var(--color-surface-inset)] border border-[var(--color-border-subtle)] rounded-md p-3 overflow-x-auto leading-relaxed">{step.code}</pre>
        </div>
      {/each}
    </div>

    <div class="mt-10 flex flex-wrap gap-3">
      <a href="https://github.com/devlikebear/tars#quick-start" target="_blank" rel="noopener" class="btn-secondary">Full quickstart guide →</a>
      <a href="https://github.com/devlikebear/tars-skills" target="_blank" rel="noopener" class="btn-secondary">Browse skills →</a>
    </div>
  </div>
</section>
