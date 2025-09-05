<!--  Hier importeer ik de data die ik in +page.server.js heb opgehaald -->
<script>
    let { data } = $props();
    const members = data.members;
</script>

<!-- Hier itereer ik met een loop door alle members heen -->
{#each members as member}
    <h2>{member.name}</h2>
{/each}