<script>
  export let data;
  const squad = data.squad;

  console.log('Squad data:', squad);
</script>

{#if squad}
  <h1>{squad.name}</h1>
  <!-- Add more squad details here if you want -->
{:else}
  <p>Squad not found.</p>
{/if}

<!-- <h1>{squad.name}</h1> -->