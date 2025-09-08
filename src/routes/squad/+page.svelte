<!--  Hier importeer ik de data die ik in +page.server.js heb opgehaald -->
<script>
    let { data } = $props();
    const members = data.members;
</script>

<h1>Overzichtspagina</h1>

<!-- Hier itereer ik met een loop door alle members heen -->
{#each members as member}
    <h2>
     <a href={`/${member.id}`}>{member.name}</a>
    </h2>
{/each}

