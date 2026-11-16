<script lang="ts">
  import type { Translation } from '$lib/content';
  let { t }: { t: Translation } = $props();
</script>

<section id="mobile" class="border-b border-[var(--color-border-subtle)]">
  <div class="container-tars py-20 md:py-28">
    <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
      <div class="lg:col-span-5">
        <span class="label-mono mb-3 inline-block">{t.mobile.label}</span>
        <h2 class="mb-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
          {@html t.mobile.heading.replace(/\n/g, '<br/>')}
        </h2>
        <p class="mb-6 leading-relaxed text-[var(--color-text-secondary)]">{t.mobile.sub}</p>

        <ul class="mb-8 space-y-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
          {#each t.mobile.bullets as bullet}
            <li class="flex gap-3">
              <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-amber)]"></span>
              <span>{bullet}</span>
            </li>
          {/each}
        </ul>

        <a href={t.mobile.cta.href} target="_blank" rel="noopener" class="btn-primary">{t.mobile.cta.label}</a>
        <p class="mt-4 text-sm leading-relaxed text-[var(--color-text-tertiary)]">{t.mobile.note}</p>
      </div>

      <div class="lg:col-span-7">
        <div class="grid grid-cols-3 gap-3 md:gap-5">
          {#each t.mobile.shots as shot}
            <img
              src={shot.src}
              alt={shot.alt}
              width="540"
              height="1174"
              loading="lazy"
              class="h-auto w-full rounded-2xl border border-[var(--color-border-default)]"
            />
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>
