<script lang="ts">
  type Feature = { title: string; tag: string; body: string };

  const features: Feature[] = [
    {
      tag: 'agent_runtime',
      title: 'Sub-Agent Orchestration',
      body: 'Spawn read-only agents for research and planning. Per-task tier routing, allowlist policy, depth control. Parallel and compare modes.'
    },
    {
      tag: 'memory',
      title: 'Durable Memory',
      body: 'Markdown memory with semantic search via Gemini embeddings. Daily logs, reviewed experiences, nightly reflection — all auditable on disk.'
    },
    {
      tag: 'pulse',
      title: 'Pulse Watchdog',
      body: 'Runs every minute. Catches cron failures, stuck runs, disk pressure, telegram errors — escalates to a narrow LLM decision call only when needed.'
    },
    {
      tag: 'reflection',
      title: 'Nightly Reflection',
      body: 'Between 02:00–05:00 TARS extracts experiences from sessions, prunes empty ones, and grows the memory store. Deterministic Go, no LLM tool surface.'
    },
    {
      tag: 'cron',
      title: 'Scheduled Jobs',
      body: 'Tick-based scheduler at 30s resolution. Cron expressions plus @at one-time triggers. Per-job audit history, capped to keep state lean.'
    },
    {
      tag: 'llm_router',
      title: '3-Tier LLM Router',
      body: 'Heavy / standard / light tiers map to provider+model bundles. Roles bind to tiers, credentials live at provider level, env-var JSON overrides.'
    },
    {
      tag: 'extensions',
      title: 'Skills, Plugins, MCP',
      body: 'Skills are Markdown + companion CLI — only loaded when invoked, so the system prompt stays small. Plugins gated; MCP fully supported as a client.'
    },
    {
      tag: 'channels',
      title: 'Multi-Channel I/O',
      body: 'Beyond the console: Telegram bidirectional messaging, inbound webhooks, macOS Assistant popup, and a local API for scripts.'
    }
  ];
</script>

<section id="features" class="border-b border-[var(--color-border-subtle)]">
  <div class="container-tars py-20 md:py-28">
    <div class="mb-14 max-w-2xl">
      <span class="label-mono mb-3 inline-block">// runtime features</span>
      <h2 class="text-3xl md:text-4xl font-display font-semibold tracking-tight mb-4">
        Behind the console,<br/>a careful runtime.
      </h2>
      <p class="text-[var(--color-text-secondary)] leading-relaxed">
        TARS draws a hard line at what should be in the binary versus what should be a skill. The runtime stays small; the rest is opt-in.
      </p>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {#each features as feature}
        <div class="card flex flex-col gap-3">
          <span class="font-mono text-xs text-[var(--color-amber-soft)]">{feature.tag}</span>
          <h3 class="font-display text-lg font-semibold">{feature.title}</h3>
          <p class="text-sm text-[var(--color-text-secondary)] leading-relaxed">{feature.body}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
