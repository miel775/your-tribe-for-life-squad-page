<!--  Hier importeer ik de data die ik in +page.server.js heb opgehaald -->
<script>
  import ResponsiveImage from "$lib/components/ResponsiveImage.svelte";

  export let data;
  const members = data.members || [];
  console.log(data.members);

  const perPage = 6;
  const chunks = [];

  const baseUrl = "https://fdnd.directus.app/assets/";

  members.forEach((member) => {
    if (member.mugshot) {
      member.avifUrl = `${baseUrl}${member.mugshot}?width=400&format=avif`;
      member.webpUrl = `${baseUrl}${member.mugshot}?width=400&format=webp`;
      member.fallbackUrl = `${baseUrl}${member.mugshot}?width=400`;
    } else {
      member.avifUrl =
        member.webpUrl =
        member.fallbackUrl =
          "/images/cursor.png";
    }
  });
  //   members.forEach(member => {
  //     member.imageUrl = member.mugshot
  //       ? `${baseUrl}${member.mugshot}?width=400&format=webp`
  //       : "/images/cursor.png";
  //   });

  if (members.length > 0) {
    for (let i = 0; i < members.length; i += perPage) {
      const chunk = members.slice(i, i + perPage);
      if (chunk.length > 0) {
        chunks.push(chunk);
      }
    }
  }
</script>

<section class="flag-wrapper">
  <a href="/squad-overview" class="student-flag" aria-label="squadoverview"></a>
  <h1 class="squad-title" tabindex="0">Squad 2F</h1>
</section>

<!-- url={member.imageUrl} -->

<!-- Hier itereer ik met een loop door alle members heen -->
<div class="book-wrapper">
  <div class="book-background"></div>
  <section class="book">
    {#each chunks as slide}
      <ul class="students">
        {#each slide as member}
          <li class="student">
            <a href={`/members/${member.id}`}>
              <ResponsiveImage
                class="student-img"
                avifUrl={member.avifUrl}
                webpUrl={member.webpUrl}
                fallbackUrl={member.fallbackUrl}
                alt={member.name}
                width={200}
                height={200}
              />
              <h3 class="student-title">{member.name}</h3>
            </a>
          </li>
        {/each}
      </ul>
    {/each}
  </section>
</div>

<style>
  h1,
  h2 {
    font-family: "Harry Potter", sans-serif;
    font-weight: 700;
  }

  h3 {
    font-family: "Harry Potter", sans-serif;
  }

  p,
  a {
    font-family: "Yellowtail", sans-serif;
  }

  :root {
    --font-harry: 'Harry Potter', sans-serif;
    --font-yellowtail: 'Yellowtail', sans-serif;
    --paper: #e8dcc0;
    --ink: #2a1c0f;
    --edge: #2f2213;
    --accent: #5d1212;
    --book-border-one: #5d3027;
    --book-border-two: black;
    --side-border: #c0b09d;
    --flag-color: #a80102;
    --card-title-hover: brown;
    --card-title: black;

  }

  section {
    cursor:
      url("/images/cursor.png") 16 16,
      auto;
  }

  .flag-wrapper {
    margin-top: 7em;
    padding-top: 2em;
    margin-bottom: 3em;
  }

  .squad-title {
    position: relative;
    text-align: center;
    position: absolute;
    top: 10px;
    left: 38%;
    z-index: 3;
    margin: 5px;
    transition: transform 0.3s ease-in-out;
  }

  .squad-title:hover {
    transform: scale(1.2);
  }

  .student-flag {
    position: absolute;
    background: var(--flag-color);
    height: 200px;
    top: 0px;
    left: 5%;
    width: 100px;
    z-index: 3;
    transition: transform 0.3s ease-in-out;
  }

  .student-flag:hover {
    transform: scale(1.1);
  }

  .student-flag:focus {
    outline: 3px solid var(--accent);
    outline-offset: 4px;
  }

  .student-flag::before {
    border-top: 35px solid var(--flag-color);
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    content: "";
    height: 0;
    left: 0;
    position: absolute;
    bottom: -35px;
  }

  .book-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 20px;
    max-width: 990px;
    overflow: visible;
  }

  .book-background {
    position: absolute;
    top: 0px;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--book-border-one);
    border: 10px solid var(--book-border-two);
    border-radius: 20px;
    z-index: 1;
  }

  .book {
    display: flex;
    align-items: flex-start;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    background: var(--paper);
    border-radius: 8px;
    border-left: 2em solid var(--side-border);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    margin: 0 auto;
    padding-top: 2em;
    position: relative;
    z-index: 2;
    max-width: 900px;
    height: 100%;
  }

  .book::before {
    content: "";
    position: absolute;
    top: 0px;
    bottom: 0;
    left: 50%;
    width: 1px;
    height: 100%;
    background: black;
    display: none;
    z-index: 2;
  }

  @media (min-width: 800px) {
    .book::before {
      display: block;
    }

    .student-flag {
      transform: scale(1);
    }
  }

  .students {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    scroll-snap-align: start;
    gap: 20px;
    padding: 20px;
    flex: 0 0 100%;
  }

  .students a {
    text-decoration: none;
  }

  .student {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    gap: 1em;
  }

  a .student-title {
    text-align: center;
    color: var(--card-title);
    transition: transform 0.3s ease-in-out;
  }

  .student-title:hover {
    transform: scale(1.2);
    color: var(--card-title-hover);
  }

  @media (min-width: 375px) {
    .book {
      padding: 25px;
    }
  }

  @media (max-width: 500px) {
    .book {
      display: block;
      overflow-x: hidden;
      width: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-left: 1em solid var(--side-border);
      padding: 0;
    }

    .students {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 10px;
      padding: 10px;
    }

    .student {
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: center;
      align-items: center;
    }
  }
</style>
