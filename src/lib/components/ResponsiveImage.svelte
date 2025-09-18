<script>
  export let url = "";
  export let avifUrl = "";
  export let webpUrl = "";
  export let fallbackUrl = "";
  export let alt = "";
  export let width = 200;
  export let height = 200;
</script>

{#if fallbackUrl}
  {#if avifUrl}<source srcset={avifUrl} type="image/avif" />{/if}
  {#if webpUrl}<source srcset={webpUrl} type="image/webp" />{/if}
  <img src={fallbackUrl} {alt} {width} {height} {...$$restProps} />
{/if}

<style>
  .student-img {
    display: inline-block;
    object-fit: cover;
    width: 200px;
    height: 200px;
    transition: transform 0.3s ease-in-out;
    cursor:
      url("/images/person.png") 16 16,
      auto;
    border-radius: 8px;
  }

  .student-img:hover {
    transform: scale(1.1);
  }
</style>
