<section id="architecture" class="border-b border-[var(--color-border-subtle)]">
  <div class="container-tars py-20 md:py-24">
    <div class="grid md:grid-cols-12 gap-10">
      <div class="md:col-span-4">
        <span class="label-mono mb-3 inline-block">// architecture</span>
        <h2 class="text-3xl md:text-4xl font-display font-semibold tracking-tight">
          One binary,<br/>two registries.
        </h2>
      </div>
      <div class="md:col-span-8">
        <p class="text-[var(--color-text-secondary)] leading-relaxed mb-6">
          TARS isolates the chat tool surface from system internals. The user-facing registry can never call <code class="font-mono text-[var(--color-amber-soft)]">ops_</code>, <code class="font-mono text-[var(--color-amber-soft)]">pulse_</code>, or <code class="font-mono text-[var(--color-amber-soft)]">reflection_</code> tools — those are reserved for the runtime itself. Pulse uses narrow Go interfaces and only one LLM call. Reflection is fully deterministic.
        </p>

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
