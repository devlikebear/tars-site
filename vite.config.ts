import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [tailwindcss(), sveltekit()],
  // `vite preview` resolves the default host to ::1 only on this kind of
  // setup, so a plain `http://127.0.0.1:<port>/` health check never
  // connects even though the server is up. Pin it to the IPv4 loopback so
  // local/CI scripts that probe 127.0.0.1 work without a --host flag.
  preview: { host: '127.0.0.1' }
});
