<!-- Hier importeer ik de (member)data die ik in +page.server.js heb opgehaald -->
<script>
    let { data } = $props();
    const member = data.member;
</script>

<!-- Hier wordt de data van de opgehaalde member getoond --> 
    <h2>{member.name}</h2>
    <a href="/">Terug naar overzicht</a>