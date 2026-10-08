<script lang="ts">
  import type { Translation } from '$lib/content';
  let { t }: { t: Translation } = $props();

  let active = $state(0);
  const current = $derived(t.screenshots.shots[active]);

  // Play only when the visitor hasn't asked for reduced motion; an
  // unplayed <video> just shows its poster frame, so reduced motion needs
  // no separate static-image fallback markup. The `autoplay` attribute
  // only takes effect while the browser first parses the element, so a
  // state flip after mount wouldn't start playback — call .play() instead.
  let videoEl: HTMLVideoElement | undefined;
  $effect(() => {
    if (videoEl && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      void videoEl.play().catch(() => {});
    }
  });
</script>

<section id="screenshots" class="border-b border-[var(--color-border-subtle)]">
  <div class="container-tars py-20 md:py-28">
    <div class="mb-10 max-w-3xl">
      <span class="label-mono mb-3 inline-block">{t.screenshots.label}</span>
      <h2 class="mb-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
        {@html t.screenshots.heading.replace(/\n/g, '<br/>')}
      </h2>
      <p class="leading-relaxed text-[var(--color-text-secondary)]">{@html t.screenshots.sub}</p>
    </div>

    <div class="mb-5 flex flex-wrap gap-2" role="tablist" aria-label={t.screenshots.label}>
      {#each t.screenshots.shots as shot, i}
        <button
          type="button"
          role="tab"
          id={`shot-tab-${shot.id}`}
          aria-selected={active === i}
          aria-controls={`shot-panel-${shot.id}`}
          onclick={() => (active = i)}
          class="rounded-md border px-3 py-2 text-left text-sm transition-colors
            {active === i
            ? 'border-[var(--color-amber)]/50 bg-[var(--color-amber)]/10 text-[var(--color-text-primary)]'
            : 'border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] hover:border-[var(--color-border-default)] hover:text-[var(--color-text-primary)]'}"
        >
          <span class="font-display font-medium">{shot.name}</span>
          <span class="ml-2 font-mono text-[11px] text-[var(--color-text-ghost)]">{shot.path}</span>
        </button>
      {/each}
    </div>

    <div
      id={`shot-panel-${current.id}`}
      role="tabpanel"
      aria-labelledby={`shot-tab-${current.id}`}
      tabindex="0"
    >
      <figure class="m-0">
        <!-- Console screens are wide; on a phone the frame pans instead of shrinking to illegible. -->
        <div class="overflow-x-auto rounded-lg border border-[var(--color-border-subtle)]">
          <div
            class="relative w-full min-w-[44rem] overflow-hidden bg-[var(--color-surface-inset)]"
            style="aspect-ratio: 1400 / 900"
          >
            {#each t.screenshots.shots as shot, i}
              <img
                src={shot.src}
                alt={shot.alt}
                width="1400"
                height="900"
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding="async"
                class="absolute inset-0 h-full w-full object-cover transition-opacity duration-200
                  {active === i ? 'opacity-100' : 'pointer-events-none opacity-0'}"
              />
            {/each}
          </div>
        </div>
        <figcaption class="mt-4 max-w-3xl text-sm leading-relaxed text-[var(--color-text-secondary)]">
          {current.caption}
        </figcaption>
      </figure>
    </div>

    <p class="mt-8 text-sm text-[var(--color-text-tertiary)]">{t.screenshots.note}</p>

    <figure class="m-0 mt-10">
      <div class="overflow-x-auto rounded-lg border border-[var(--color-border-subtle)]">
        <div class="relative w-full min-w-[44rem] overflow-hidden bg-[var(--color-surface-inset)]" style="aspect-ratio: 1280 / 822">
          <!-- svelte-ignore a11y_media_has_caption -->
          <video
            bind:this={videoEl}
            class="absolute inset-0 h-full w-full object-cover"
            poster={t.screenshots.clip.poster}
            muted
            loop
            playsinline
            preload="metadata"
          >
            <source src={t.screenshots.clip.webm} type="video/webm" />
            <source src={t.screenshots.clip.src} type="video/mp4" />
          </video>
        </div>
      </div>
      <figcaption class="mt-4 max-w-3xl text-sm leading-relaxed text-[var(--color-text-secondary)]">
        {t.screenshots.clip.caption}
      </figcaption>
    </figure>
  </div>
</section>
