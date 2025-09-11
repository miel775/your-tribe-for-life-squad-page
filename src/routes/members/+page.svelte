<!--  Hier importeer ik de data die ik in +page.server.js heb opgehaald -->
<script>
  let { data } = $props();
  const members = data.members;
</script>

<h1>Overzichtspagina</h1>
<div class="student-flag"></div>

<!-- Hier itereer ik met een loop door alle members heen -->
<section class="book">
  <h2 class="book-title">Squadpage</h2>
  {#each members as member}
    <ul class="students">
      <li class="student">
        <img
          src={member.avatar}
          class="student-img"
          alt="Avatar van {member.name}"
        />
        <a href={`/members/${member.id}`}>
            <h3 class="student-title">{member.name}</h3>  </a>
      </li>
    </ul>
  {/each}
</section>

<style>



</style>
