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
      cloud.classList.add('move-cloud');
    });
  });
</script>

<a class="home-click" href="/members">Klik op de school om te beginnen</a>

<a href="/squad"> <Schoolbuilding />  </a>

<h1 class="title"> FDND </h1>

<!-- i want a lot of clouds -->
<div class=cloud> <Cloud1 /> </div>
<div class=cloud> <Cloud2 /> </div>
<div class=cloud> <Cloud3 /> </div>

<Fog />

<div class="ground"></div>


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

:global(body) {
    margin: 0;
    min-height: 100vh;
    overflow: hidden;
    background-color: var(--colour-tone-4);
}

.title {
    font-size: var(--h1-desktop);
    color: var(--colour-tone-2);
    text-align: center;
    margin: 0;
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    pointer-events: none;
    -webkit-text-stroke: 1px var(--colour-tone-2-dark);

    @media (max-width: 768px) {
        font-size: var(--h1-tablet);
    }
    @media (max-width: 480px) {
        font-size: var(--h1-mobile);
    }
}

.ground {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 150px;
    background-color: var(--colour-tone-5);
    z-index: -1;
}

a {
    color: var(--colour-tone-2);
    text-decoration: none;
    animation: opacitychange 3s infinite;
}

.home-click {
    color: var(--colour-tone-2);
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    pointer-events: none;
    -webkit-text-stroke: 1px var(--colour-tone-2-dark);

    @media (max-width: 768px) {
        font-size: var(--p-tablet);
    }

    @media (max-width: 480px) {
        font-size: var(--p-mobile);     
    }
}

.cloud {
    position: absolute;
    width: 400px;
    height: 200px;
    z-index: -1;
}

/* keyframes */
@keyframes opacitychange {
    0% { opacity: 1; }
    50% { opacity: 0.5; }
    100% { opacity: 1; }
}

@keyframes moveclouds {
    0% { transform: translateX(-250px); }
    100% { transform: translateX(100vw); }
}

@keyframes lightning {
    0% { opacity: 0; }
    4% { opacity: 0; }
    10% { opacity: 1; }
    15% { opacity: 0; }
    100% { opacity: 0; }
}

@keyframes upwards {
    0% { bottom: -500px; }
    100% { bottom: -450px; }
}
</style>
