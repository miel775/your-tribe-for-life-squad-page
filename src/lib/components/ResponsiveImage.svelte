<script>

export let url = '';  
export let alt = ''; 
export let width = 200; 
export let height = 200; 
// export let sizes = '200px';

</script>

{#if url}
  <img
    src={url}
    alt={alt}
    width={width}
    height={height}
    loading="lazy"
  />
{/if}

