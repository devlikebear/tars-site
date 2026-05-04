<script lang="ts">
  type Page = { name: string; path: string; body: string; group: 'Home' | 'Work' | 'Operate' | 'Setup' };

  const pages: Page[] = [
    {
      group: 'Home',
      name: 'Mission Control',
      path: '/console',
      body: 'Pulse, Reflection, plans, runtime runs, cron jobs, disk pressure, sessions, recommended setup actions — all on one screen.'
    },
    {
      group: 'Work',
      name: 'Chat',
      path: '/console/chat',
      body: 'Dockable panels: Sessions, Tasks, Health, Git Inspector, Skill Inbox, Cron, Prior Context. Message-level session forks. First-turn tier recommendation.'
    },
    {
      group: 'Work',
      name: 'Lineage',
      path: '/console/sessions/graph',
      body: 'Git-log–style tree of root and forked sessions. Fork point previews. Promote fork insights into Memory Inbox without mutating the parent.'
    },
    {
      group: 'Work',
      name: 'Memory',
      path: '/console/memory',
      body: 'Review-before-store inbox for reflection candidates. Edit stored knowledge inline. Compare Tool path vs Prefetch path recall.'
    },
    {
      group: 'Operate',
      name: 'Agent Runtime',
      path: '/console/agentruntime',
      body: 'List, tree, Gantt, and interactive Flow graph views. Replay scrubber, cost flow, file attention, git diff timeline, checkpoint restart.'
    },
    {
      group: 'Operate',
      name: 'Approvals',
      path: '/console/approvals',
      body: 'Risky cleanup plans and approved Git mutations gated before TARS applies them. Automation Audit log keeps every decision reviewable.'
    },
    {
      group: 'Operate',
      name: 'Analytics',
      path: '/console/analytics',
      body: 'Usage totals, daily token bars, model cost rows, tool/skill call counts. UTC day-bounded daily budget chip in the header.'
    },
    {
      group: 'Work',
      name: 'Extensions',
      path: '/console/extensions',
      body: 'Skill Creator and MCP Server Creator with sandbox tests. Hub installs surface trust signals (score, last update, passing tests, install count).'
    }
  ];

  const groupColor: Record<Page['group'], string> = {
    Home: 'text-[var(--color-amber-soft)]',
    Work: 'text-[var(--color-info)]',
    Operate: 'text-[var(--color-success)]',
    Setup: 'text-[var(--color-warning)]'
  };
</script>

<section id="console" class="border-b border-[var(--color-border-subtle)] bg-[var(--color-surface-inset)]/40">
  <div class="container-tars py-20 md:py-28">
    <div class="mb-14 max-w-3xl">
      <span class="label-mono mb-3 inline-block">// inside the console</span>
      <h2 class="text-3xl md:text-4xl font-display font-semibold tracking-tight mb-4">
        The console isn't a viewer.<br/>It's the cockpit.
      </h2>
      <p class="text-[var(--color-text-secondary)] leading-relaxed">
        Most local agent tools ship a CLI and call it done. TARS treats the browser console as a first-class surface — every page is a working tool, not a status read-out. Open <code class="font-mono text-[var(--color-amber-soft)]">127.0.0.1:43180/console</code> and these are some of the rooms you walk into:
      </p>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {#each pages as page}
        <div class="card flex flex-col gap-3">
          <div class="flex items-center justify-between">
            <span class={`font-mono text-xs ${groupColor[page.group]}`}>/{page.group.toLowerCase()}</span>
            <span class="font-mono text-[10px] text-[var(--color-text-ghost)]">{page.path}</span>
          </div>
          <h3 class="font-display text-lg font-semibold">{page.name}</h3>
          <p class="text-sm text-[var(--color-text-secondary)] leading-relaxed">{page.body}</p>
        </div>
      {/each}
    </div>

    <div class="mt-10 text-sm text-[var(--color-text-tertiary)]">
      Plus pages for Plans, System Prompt, Cron, Logs, Pulse, Reflection, and Settings — sidebar grouped under Home / Work / Operate / Setup.
    </div>
  </div>
</section>
