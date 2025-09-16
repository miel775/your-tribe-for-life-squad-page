<!--  Hier importeer ik de data die ik in +page.server.js heb opgehaald -->
<script>
  let { data } = $props();
  const members = data.members;
</script>

<section class="flag-wrapper">
<a href="/" class="student-flag"></a>
<h1 class="squad-title">Squad 2F</h1>
</section>

<!-- Hier itereer ik met een loop door alle members heen -->
<div class="book-wrapper">
<div class="book-background"></div>
<section class="book">
  <!-- <h2 class="book-title">Squad 2F</h2> -->
  <ul class="students">
    {#each members as member}
      <li class="student">
        <!-- <img
          src={member.avatar}
          class="student-img"
          alt="Avatar van {member.name}"
        /> -->
        <img
          src={`https://fdnd.directus.app/assets/${member.mugshot}`}
          alt={member.name}
          class="student-img"
        />
        <a href={`/members/${member.id}`}>
          <h3 class="student-title">{member.name}</h3>
        </a>
      </li>
    {/each}
  </ul>
</section>
</div>

<style>
  :root {
    --paper: #e8dcc0;
    --ink: #2a1c0f;
    --edge: #2f2213;
    --accent: #5d1212;
    --book-border: #5d3027;
    --side-border: #c0b09d;
    --primary-bg-color: #2f2506;
    --flag-color: #A80102;
  }

  .flag-wrapper {
    margin-top: 7em;
    padding-top: 2em;  
    margin-bottom: 1em;

  }

  .squad-title {
    /* position: relative; */
    text-align: center;
    position: absolute;
    top: 10px;
    left: 35%; 
    /* transform: translateY(-50%); */
    z-index: 3;
    margin: 20px;
}

  .student-flag {
    position: absolute;
    /* display: block; */
    background: var(--flag-color);
    height: 200px;
    top: 0px;
    left: 5%;
    /* margin-left: 20px; */
    /* transform: translateY(0px); */
    width: 100px;
    z-index: 3;
    /* margin-top: 5em; */
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
    /* width: 0px; */
  }

  .book-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 20px;
    max-width: 1200px;
  }

  .book-background {
    position: absolute;
    /* display: block; */
    top:0px;
    left:0;
    right: 0;
    bottom: 0;
    /* width: 100%;
    height: 100vh; */
    background: var(--book-border);
    border: 10px solid black;
    border-radius: 20px;
    z-index: 1 ;

  }

  .book {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* justify-content: center;
    align-items: center; */
    max-width: 1200px;
    border: 8px solid var(--edge);
    background: var(--paper);
    border-radius: 2px;
    border-left: 2em solid var(--side-border);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    margin: 0 auto;
    padding-top: 2em;
    position: relative;
    /* padding-top: 3em; */
    z-index: 2;
  }

  .book::before {
    content: "";
    position: absolute;
    top: 0px;
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

  .students {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: flex-start;
    padding: 0;
  }

  .students a {
    text-decoration: none;
  }

  .student {
    width: calc(50% - 20px);
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style-type: none;
    gap: 1em;
  }

  @media (max-width: 500px) {

    .book {
        border-left: 1em solid var(--side-border);
    }

    .student {
      width: 100%;
    }
  }

  .student-img {
    object-fit: cover;
    width: 200px;
    height: 200px;
  }
</style>
