<script>
  import Cloud1 from "$lib/components/cloud1.svelte";
  import Cloud2 from "$lib/components/cloud2.svelte";
  import Cloud3 from "$lib/components/cloud3.svelte";
  import Fog from "$lib/components/fog.svelte";
  import Schoolbuilding from "$lib/components/schoolbuilding.svelte";


  import { onMount } from "svelte";

  // cloud animation
  onMount(() => {
    document.querySelectorAll('.cloud').forEach(cloud => {
      cloud.style.left = `${Math.random() * 100}%`;
      cloud.style.top = `${Math.random() * 50}%`;
      cloud.style.scale = `${Math.random() * 1 + 0.5}`;
      cloud.style.transform = `scale(${Math.random() * 1 + 0.5})`;
      cloud.style.zIndex = Math.floor(Math.random() * 5);
      cloud.classList.add('move-cloud');
    });
  });
</script>

<a class="home-click" href="/members">Klik op de school om te beginnen</a>

<a href="/squad"> <Schoolbuilding />  </a>

<!-- i want a lot of clouds -->
<div class=cloud> <Cloud1 /> </div>
<div class=cloud> <Cloud2 /> </div>
<div class=cloud> <Cloud3 /> </div>

<Fog />

<style>
  :root {
    
    /* background-colors */
    --primary-bg-color: #2F2506;
    --secondary-bg-color: #6B5A24;

    /* colour-tone */
    --colour-tone-1: #740001;
    --colour-tone-1-dark: #470001;
    --colour-tone-1-light: #C3383A;

    --colour-tone-2: #D3A625;
    --colour-tone-2-light: #FDE08B;
    --colour-tone-2-dark: #7D6112;

    --colour-tone-3: #1A472A;
    --colour-tone-3-light: #52946A;
    --colour-tone-3-dark: #062210;

    --colour-tone-4: #170074;
    --colour-tone-4-light: #2701C2;
    --colour-tone-4-dark: #10004E;

    --colour-tone-5: #5D5D5D;
    --colour-tone-5-light: #A2A2A2;
    --colour-tone-5-dark: #2B2B2B;

    /* font-sizes */
    --h1-desktop: 96px;
    --h1-tablet: 72px;
    --h1-mobile: 60px;

    --h2-desktop: 60px;
    --h2-tablet: 54px;
    --h2-mobile: 48px;

    --h3-desktop: 48px;
    --h3-tablet: 42px;
    --h3-mobile: 36px;

    --p-desktop: 24px;
    --p-tablet: 20px;
    --p-mobile: 18px;
}

a {
    color: var(--colour-tone-2);
    text-decoration: none;
    animation: opacitychange 3s infinite;
  }
</style>
