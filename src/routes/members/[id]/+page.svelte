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
        border: .3em solid #670f0f;
    }

    .book {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
    }

    .page {
        border: 6px solid rgb(52, 20, 6);
        border-radius: 1em;
        background: repeating-linear-gradient(0deg, transparent 0 22px, rgba(0, 0, 0, 0.262) 22px 23px),beige;
        padding: 1em;
         box-shadow: 0 0 0 6px #5a432a, inset 0 0 0 2px #1e140a;
    }

    @media (min-width: 720px) {
        main {
        perspective: 1000px;
        }
        .book {
            grid-template-columns: 1fr 1fr;
             width: min(1000px, 95vw);
             position: relative;
             transform-style: preserve-3d;
        }
        /* book cover */
        .book::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 12px;
        background: linear-gradient(#8a5e29, #4b361f);
        border-radius: .5em;
        }
        /* 3d effect book tilt */
        .left {
        transform: rotateY(-3deg);
        }
        .right {
        transform: rotateY(3deg);
        }
        .book:hover .left {
        transform: rotateY(-10deg);
        }
        .book:hover .right {
        transform: rotateY(10deg);
        }
}
</style>