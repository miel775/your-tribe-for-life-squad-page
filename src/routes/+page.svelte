<script>
  export let data;
</script>

<h1>Squadpage</h1>

<ul>
  {#each data.squad as member}
    <li>{member.name}</li>
  {/each}
</ul>