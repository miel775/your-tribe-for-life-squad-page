<script>
  export let data;
</script>

<h1>Squadpage</h1>

<ul>
  {#each data.squad as member}
    <li>
      <a href="/{member.id}">{member.name}</a>
      <img src="{member.avatar}" alt="{member.name}" width="100" />
    </li>
  {/each}
</ul>