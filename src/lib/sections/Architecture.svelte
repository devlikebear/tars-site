<script lang="ts">
  import type { Translation } from '$lib/content';
  let { t }: { t: Translation } = $props();
</script>

<section id="architecture" class="border-b border-[var(--color-border-subtle)]">
  <div class="container-tars py-20 md:py-24">
    <div class="grid md:grid-cols-12 gap-10">
      <div class="md:col-span-4">
        <span class="label-mono mb-3 inline-block">{t.architecture.label}</span>
        <h2 class="text-3xl md:text-4xl font-display font-semibold tracking-tight">{@html t.architecture.heading.replace(/\n/g, '<br/>')}</h2>
      </div>
      <div class="md:col-span-8">
        <p class="text-[var(--color-text-secondary)] leading-relaxed mb-6">{@html t.architecture.body}</p>

        <div class="card font-mono text-xs leading-relaxed text-[var(--color-text-secondary)] overflow-x-auto">
<pre>┌─ cmd/tars (cobra) ──────────────────────────────────────┐
│ serve · service · init · doctor · status · cron · ...   │
└──────────────────────────┬──────────────────────────────┘
                           │
            ┌──────────────▼──────────────┐
            │  tarsserver (127.0.0.1:43180) │
            └──┬─────────┬──────────┬──────┘
               │         │          │
       ┌───────▼──┐ ┌────▼─────┐ ┌──▼─────────┐
       │  chat    │ │  pulse   │ │ reflection │
       │  agent   │ │ watchdog │ │  nightly   │
       └────┬─────┘ └────┬─────┘ └────┬───────┘
            │            │            │
       ┌────▼────────────▼────────────▼─┐
       │   memory · cron · ops · llm    │
       └────────────────────────────────┘</pre>
        </div>
      </div>
    </div>
  </div>
</section>
