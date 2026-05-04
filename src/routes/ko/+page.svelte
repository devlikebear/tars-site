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
  import { ko } from '$lib/content';

  const t = ko;
</script>

<svelte:head>
  <title>{t.pageTitle}</title>
  <meta name="description" content={t.metaDescription} />
  <meta property="og:title" content={t.pageTitle} />
  <meta property="og:description" content={t.metaDescription} />
  <meta property="og:locale" content="ko_KR" />
  <link rel="alternate" hreflang="en" href="https://tars.marvin-42.com/" />
  <link rel="alternate" hreflang="ko" href="https://tars.marvin-42.com/ko" />
</svelte:head>

<Header {t} />
<main>
  <Hero {t} />
  <Intro {t} />
  <ConsoleShowcase {t} />
  <Features {t} />
  <Comparison {t} />
  <Architecture {t} />
  <Quickstart {t} />
</main>
<Footer {t} />
