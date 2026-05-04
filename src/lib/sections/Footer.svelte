<script lang="ts">
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
        <p class="text-sm text-[var(--color-text-secondary)] max-w-md leading-relaxed">
          A self-hosted AI agent runtime. Practical, direct, built to work beside a human operator.
        </p>
      </div>

      <div class="md:col-span-2">
        <div class="label-mono mb-3">Project</div>
        <ul class="space-y-2 text-sm">
          <li><a href="https://github.com/devlikebear/tars" target="_blank" rel="noopener" class="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]">GitHub</a></li>
          <li><a href="https://github.com/devlikebear/tars/issues" target="_blank" rel="noopener" class="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]">Issues</a></li>
          <li><a href="https://github.com/devlikebear/tars/releases" target="_blank" rel="noopener" class="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]">Releases</a></li>
        </ul>
      </div>

      <div class="md:col-span-2">
        <div class="label-mono mb-3">Extend</div>
        <ul class="space-y-2 text-sm">
          <li><a href="https://github.com/devlikebear/tars-skills" target="_blank" rel="noopener" class="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]">Skills</a></li>
          <li><a href="https://github.com/devlikebear/tars#mcp-servers" target="_blank" rel="noopener" class="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]">MCP servers</a></li>
        </ul>
      </div>

      <div class="md:col-span-3">
        <div class="label-mono mb-3">Operator</div>
        <ul class="space-y-2 text-sm">
          <li><a href="https://marvin-42.com" target="_blank" rel="noopener" class="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]">marvin-42.com</a></li>
          <li><a href="https://insights.marvin-42.com" target="_blank" rel="noopener" class="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]">insights.marvin-42.com</a></li>
        </ul>
      </div>
    </div>

    <div class="mt-12 pt-6 border-t border-[var(--color-border-subtle)] flex flex-wrap gap-4 items-center justify-between">
      <p class="text-xs text-[var(--color-text-tertiary)]">
        © {year} TARS · MIT License · An homage to TARS from <em>Interstellar</em>; not affiliated with the film.
      </p>
      <p class="text-xs text-[var(--color-text-tertiary)] font-mono">
        tars.marvin-42.com
      </p>
    </div>
  </div>
</footer>
