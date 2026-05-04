<script lang="ts">
  const steps = [
    {
      label: '01',
      title: 'Clone & build',
      code: 'git clone https://github.com/devlikebear/tars.git\ncd tars\nmake build'
    },
    {
      label: '02',
      title: 'Initialize workspace',
      code: './bin/tars init'
    },
    {
      label: '03',
      title: 'Start the server',
      code: './bin/tars serve\n# console at http://127.0.0.1:43180/console'
    }
  ];
</script>

<section id="quickstart" class="border-b border-[var(--color-border-subtle)]">
  <div class="container-tars py-20 md:py-28">
    <div class="mb-12 max-w-2xl">
      <span class="label-mono mb-3 inline-block">// quickstart</span>
      <h2 class="text-3xl md:text-4xl font-display font-semibold tracking-tight mb-4">
        Three commands to a running agent.
      </h2>
      <p class="text-[var(--color-text-secondary)] leading-relaxed">
        Requires Go 1.22+ and Node 20+ (for the console build). On first launch, the wizard walks you through provider and tier configuration.
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-4">
      {#each steps as step}
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
