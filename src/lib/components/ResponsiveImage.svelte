<script>
        
export let url = '';  
export let avifUrl = '';
export let webpUrl = '';
export let fallbackUrl = '';
export let alt = ''; 
export let width = 200; 
export let height = 200; 

// console.log('AVIF:', avifUrl);
//   console.log('WebP:', webpUrl);
//   console.log('Fallback:', fallbackUrl)

</script>

{#if fallbackUrl}
{#if avifUrl}<source srcset={avifUrl} type="image/avif" />{/if}
{#if webpUrl}<source srcset={webpUrl} type="image/webp" />{/if}
<img src={fallbackUrl} alt={alt} width={width} height={height}   {...$$restProps} />
  <!-- <img
    src={url}
    alt={alt}
    width={width}
    height={height}
    loading="lazy"
    {...$$restProps}
  /> -->
{/if}


<style>
    .student-img {
    display: inline-block;
    object-fit: cover;
    width: 200px;
    height: 200px; 
    transition: transform 0.3s ease-in-out;
    cursor: url('/images/cursor.png') 16 16, auto; 
    border-radius: 8px;
  }

  .student-img:hover {
   transform: scale(1.1);
  }      
</style>