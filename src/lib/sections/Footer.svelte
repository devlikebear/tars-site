<script lang="ts">
  import type { Translation } from '$lib/content';
  let { t }: { t: Translation } = $props();

  const year = new Date().getFullYear();
</script>

<footer>
  <div class="container-tars py-12">
    <div class="grid md:grid-cols-12 gap-8">
      <div class="md:col-span-5">
        <div class="flex items-center gap-2 mb-3">
          <span class="inline-flex w-7 h-7 items-center justify-center rounded-md bg-[var(--color-amber)]/15 text-[var(--color-amber-soft)] font-mono">T</span>
          <span class="font-display text-lg font-semibold">TARS</span>
        </div>
        <p class="text-sm text-[var(--color-text-secondary)] max-w-md leading-relaxed">{t.footer.tagline}</p>
      </div>

      <div class="md:col-span-2">
        <div class="label-mono mb-3">{t.footer.cols.project}</div>
        <ul class="space-y-2 text-sm">
          {#each t.footer.links.project as link}
            <li><a href={link.href} target="_blank" rel="noopener" class="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]">{link.label}</a></li>
          {/each}
        </ul>
      </div>

      <div class="md:col-span-2">
        <div class="label-mono mb-3">{t.footer.cols.extend}</div>
        <ul class="space-y-2 text-sm">
          {#each t.footer.links.extend as link}
            <li><a href={link.href} target="_blank" rel="noopener" class="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]">{link.label}</a></li>
          {/each}
        </ul>
      </div>

      <div class="md:col-span-3">
        <div class="label-mono mb-3">{t.footer.cols.operator}</div>
        <ul class="space-y-2 text-sm">
          {#each t.footer.links.operator as link}
            <li><a href={link.href} target="_blank" rel="noopener" class="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]">{link.label}</a></li>
          {/each}
        </ul>
      </div>
    </div>

    <div class="mt-12 pt-6 border-t border-[var(--color-border-subtle)] flex flex-wrap gap-4 items-center justify-between">
      <p class="text-xs text-[var(--color-text-tertiary)]">© {year} TARS · {@html t.footer.legal}</p>
      <p class="text-xs text-[var(--color-text-tertiary)] font-mono">tars.marvin-42.com</p>
    </div>
  </div>
</footer>
