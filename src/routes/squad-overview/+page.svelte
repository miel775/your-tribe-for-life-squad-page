<!-- <script>
  let { data } = $props();
  const squads = data.squads;

  console.log(squads)
</script> -->

<script>
  export let data;
  const squads = data.squads;

  console.log(squads)
</script>

<h1>Overzichtspagina</h1>

{#each squads as squad}
  <p>
    <a href={`/squad-overview/${squad.id}`}>{squad.name}</a>
  </p>
{/each}

<style>
  body {
    background-color: coral;
  }
</style>