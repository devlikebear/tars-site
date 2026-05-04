<script lang="ts">
  import Header from '$lib/sections/Header.svelte';
  import Hero from '$lib/sections/Hero.svelte';
  import Intro from '$lib/sections/Intro.svelte';
  import Features from '$lib/sections/Features.svelte';
  import Architecture from '$lib/sections/Architecture.svelte';
  import Quickstart from '$lib/sections/Quickstart.svelte';
  import Footer from '$lib/sections/Footer.svelte';
</script>

<svelte:head>
  <title>TARS — Self-hosted AI agent runtime</title>
</svelte:head>

<Header />
<main>
  <Hero />
  <Intro />
  <Features />
  <Architecture />
  <Quickstart />
</main>
<Footer />
