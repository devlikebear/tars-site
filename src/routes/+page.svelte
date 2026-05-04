<script lang="ts">
  import Header from '$lib/sections/Header.svelte';
  import Hero from '$lib/sections/Hero.svelte';
  import Intro from '$lib/sections/Intro.svelte';
  import ConsoleShowcase from '$lib/sections/ConsoleShowcase.svelte';
  import Features from '$lib/sections/Features.svelte';
  import Comparison from '$lib/sections/Comparison.svelte';
  import Architecture from '$lib/sections/Architecture.svelte';
  import Quickstart from '$lib/sections/Quickstart.svelte';
  import Footer from '$lib/sections/Footer.svelte';
</script>

<svelte:head>
  <title>TARS — A local AI agent with a console worth opening</title>
</svelte:head>

<Header />
<main>
  <Hero />
  <Intro />
  <ConsoleShowcase />
  <Features />
  <Comparison />
  <Architecture />
  <Quickstart />
</main>
<Footer />
