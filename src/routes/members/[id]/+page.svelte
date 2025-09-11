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

<style>
    main {
    display: grid;
    place-items: center;
    background-color: rgb(255, 255, 255);
    padding: 2rem;
    min-height: 100vh;
    }

    img {
        width: 100%;
        aspect-ratio: 3/4;
        object-fit: cover;
        border-radius: .5em;
    }

    .book {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
    }
    .page {
        border: 6px solid rgb(52, 20, 6);
        border-radius: 1em;
        background-color: white;
        padding: 1em;
    }

    @media (min-width: 720px) {
        .book {
            grid-template-columns: 1fr 1fr;
             width: min(1000px, 95vw);
        }
    }
</style>