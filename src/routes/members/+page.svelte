<!--  Hier importeer ik de data die ik in +page.server.js heb opgehaald -->
<script>
  let { data } = $props();
  const members = data.members;
</script>

<h1>Squadpage</h1>
<div class="student-flag"></div>

<!-- Hier itereer ik met een loop door alle members heen -->
<section class="book">
  <h2 class="book-title">Squad 2F</h2>
  <ul class="students">
    {#each members as member}
      <li class="student">
        <!-- <img
          src={member.avatar}
          class="student-img"
          alt="Avatar van {member.name}"
        /> -->
        <img src={`https://fdnd.directus.app/assets/${member.mugshot}`} alt={member.name} class="student-img"/>
        <a href={`/members/${member.id}`}>
          <h3 class="student-title">{member.name}</h3>
        </a>
      </li>
    {/each}
  </ul>
</section>

<style>
  /* :root {
    --text-color: black;
    --book-background: beige;
    --border-color: 1px solid black;
    --book-side: black;
  } */

  :root {
    --paper: #e8dcc0;
    --ink: #2a1c0f;
    --edge: #2f2213;
    --accent: #5d1212;
    --primary-bg-color:#2F2506;
  }

  .book {
    display: flex;
    /* flex-direction: row; */
    flex-direction: column;
    /* flex-wrap: wrap;
    /* justify-content: flex-start; */
    align-items: flex-start;
    /* width:100%;  */
    max-width: 1200px;
    /* max-width: 900px; */
    /* height: 300px; */
    border: 1px solid var(--edge);
    background: var(--paper);
    /* border-top-right-radius: 2% 15%;
    border-bottom-right-radius: 2% 15%; */
    border-left: 1rem solid var(--edge);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    margin: 0 auto;
    /* height: 100vw; */
    /* border-top-left-radius: 20%; */
    /* border-left: 10px solid black; */
    position: relative;
  }

  .book::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 1px;
    background: black;
    display: none;
  }

  @media (min-width: 800px) {
    .book::before {
      display: block;
    }
  }
  .book-title {
    /* align-self: center; */
    text-align: right;
    margin: 1em 1em;
  }

  .students {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: flex-start;
    padding: 0 50px;
  }

  /* .students {
    display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 20px 40px;
  } */

  .students a {
    text-decoration: none;
  }

  .student {
    /* width: 200px; */
    /* width: 45%; */
    /* width: 30%; */
    width: calc(50% - 20px);
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style-type: none;
    gap: 1em;
  }

  .student-img {
    object-fit: cover;
    width: 200px;
    height: 200px;
  }
</style>
