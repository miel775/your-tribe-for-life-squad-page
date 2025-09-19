<script>
  export let data;
  const squad = data.squad;
  const members = data.members;
</script>

{#if squad}
  <h1>{squad.name}</h1>
  <h2>Members</h2>
  <ul>
    {#each members as member}
      <li>
        <a href={`/person/${member.id}`}>{member.name}</a>
      </li>
    {/each}
  </ul>
{:else}
  <p>Squad not found.</p>
{/if}