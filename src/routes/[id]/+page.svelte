<script>
  export let data;
</script>

<h1>Squadpage</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<ul>
    {#each members as member}
        <li>{member.members}
        </li>

        {/each}
</ul>