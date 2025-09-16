<script>
	  import favicon from '$lib/assets/favicon.svg';
    import '$lib/assets/styles/style.css';
    import '$lib/assets/styles/home-style.css';
    import Scene from "$lib/components/style.svelte";
    let { children } = $props();
</script>


<svelte:head>
  <link rel="icon" type="image/svg+xml" href={favicon} />
  	<!-- harry potter font -->
  <link href="https://fonts.cdnfonts.com/css/harry-potter" rel="stylesheet">
  <!-- Yellowtail font -->
  <link href="https://fonts.cdnfonts.com/css/yellowtail" rel="stylesheet">
</svelte:head>


{@render children?.()}