<!-- Hier importeer ik de (member)data die ik in +page.server.js heb opgehaald -->
<script>
    let { data } = $props();
    const member = data.member;
</script>

<!-- Hier wordt de data van de opgehaalde member getoond --> 
<main>
    <div class="book">
        <article class="page left">
            <figure>
                <img src={`https://fdnd.directus.app/assets/${member.mugshot}`} alt={member.name}/>
            </figure>
        </article>

        <article class="page right">
            <h2>{member.name}</h2>
            <p>{member.bio}</p>
            <a href="/members">Terug naar overzicht</a>
        </article>
    </div>
</main>
