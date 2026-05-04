<script lang="ts">
  type Row = { dimension: string; openclaw: string; hermes: string; tars: string };

  const rows: Row[] = [
    {
      dimension: 'Language',
      openclaw: 'TypeScript',
      hermes: 'Python',
      tars: 'Go (single binary)'
    },
    {
      dimension: 'Primary UI',
      openclaw: 'CLI',
      hermes: 'CLI + API',
      tars: 'Browser console (CLI/Telegram/webhooks too)'
    },
    {
      dimension: 'Sub-agents',
      openclaw: 'ACP + subagent runtimes, Docker sandbox',
      hermes: 'ThreadPoolExecutor (max 3), ephemeral prompt',
      tars: 'Per-task model tier, allowlist policy, depth control'
    },
    {
      dimension: 'Model routing',
      openclaw: 'Per-agent model override',
      hermes: 'Per-child override, MoA (4 frontier models)',
      tars: '3-tier bundles (heavy/standard/light), role→tier mapping'
    },
    {
      dimension: 'Memory',
      openclaw: 'Session transcripts',
      hermes: 'Honcho/Holographic plugin hooks',
      tars: 'Markdown + semantic + review-before-store + nightly reflection'
    },
    {
      dimension: 'Background',
      openclaw: '—',
      hermes: '—',
      tars: 'Pulse watchdog (1-min) + nightly reflection batch'
    },
    {
      dimension: 'Scheduling',
      openclaw: '—',
      hermes: '—',
      tars: 'Session-bound cron + audit logs'
    },
    {
      dimension: 'Extensibility',
      openclaw: 'Built-in tools',
      hermes: 'Toolsets',
      tars: 'Skills + companion CLIs + gated plugins/MCP'
    }
  ];
</script>

<section id="comparison" class="border-b border-[var(--color-border-subtle)]">
  <div class="container-tars py-20 md:py-28">
    <div class="mb-12 max-w-3xl">
      <span class="label-mono mb-3 inline-block">// vs others</span>
      <h2 class="text-3xl md:text-4xl font-display font-semibold tracking-tight mb-4">
        How TARS differs.
      </h2>
      <p class="text-[var(--color-text-secondary)] leading-relaxed">
        Two excellent local agent projects in this space — <a href="https://openclaw.ai" target="_blank" rel="noopener" class="underline hover:text-[var(--color-text-primary)]">OpenClaw</a> and <a href="https://hermes-agent.nousresearch.com" target="_blank" rel="noopener" class="underline hover:text-[var(--color-text-primary)]">Hermes Agent</a>. Each has its own focus. Here's where TARS draws different lines.
      </p>
    </div>

    <div class="card overflow-x-auto p-0">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-[var(--color-border-default)]">
            <th class="text-left px-4 py-3 font-display font-medium text-[var(--color-text-tertiary)] text-xs uppercase tracking-wider">Dimension</th>
            <th class="text-left px-4 py-3 font-display font-medium text-[var(--color-text-tertiary)] text-xs uppercase tracking-wider">OpenClaw</th>
            <th class="text-left px-4 py-3 font-display font-medium text-[var(--color-text-tertiary)] text-xs uppercase tracking-wider">Hermes Agent</th>
            <th class="text-left px-4 py-3 font-display font-medium text-[var(--color-amber-soft)] text-xs uppercase tracking-wider">TARS</th>
          </tr>
        </thead>
        <tbody>
          {#each rows as row, i}
            <tr class={i < rows.length - 1 ? 'border-b border-[var(--color-border-subtle)]' : ''}>
              <td class="px-4 py-3 font-mono text-xs text-[var(--color-text-secondary)] align-top whitespace-nowrap">{row.dimension}</td>
              <td class="px-4 py-3 text-[var(--color-text-secondary)] align-top">{row.openclaw}</td>
              <td class="px-4 py-3 text-[var(--color-text-secondary)] align-top">{row.hermes}</td>
              <td class="px-4 py-3 text-[var(--color-text-primary)] align-top">{row.tars}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>

    <p class="mt-6 text-xs text-[var(--color-text-tertiary)] leading-relaxed">
      Comparison is from the TARS perspective and intentionally simplified. Read the source for each project to form your own view.
    </p>
  </div>
</section>
