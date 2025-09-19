<script>
  export let data;
  const squads = data.squads;
</script>

<h1>Overzichtspagina</h1>

<section class="bookshelf"> 
  {#each squads as squad}
    <div class="book">
      <input type="radio" name="page-{squad.id}" id="page-1-{squad.id}" checked />
      <label class="page cover" for="page-3-{squad.id}">
        <h2>{squad.name}</h2>
      </label>
      <label class="page cover" for="page-1-{squad.id}"></label>
      <input type="radio" name="page-{squad.id}" id="page-3-{squad.id}" />
      <label class="page" for="page-5-{squad.id}">
        <h4>Chapter 1.</h4>
        <p>There once was a story ... </p>
      </label>
      <label class="page" for="page-3-{squad.id}">
        <p>About the user opening this book ...</p>
      </label>
      <input type="radio" name="page-{squad.id}" id="page-5-{squad.id}" />
      <label class="page" for="page-7-{squad.id}">
        <p>Turning pages through the book ...</p>
      </label>
      <label class="page" for="page-5-{squad.id}">
        <p>To get to ...</p>
      </label>
      <input type="radio" name="page-{squad.id}" id="page-7-{squad.id}" />
      <label class="page" for="page-9-{squad.id}">
        <p>The end of this book to discover ...</p>
      </label>
      <label class="page" for="page-7-{squad.id}">
        <p>To see their squad by pressing on the glowing text.</p>
        <p>The end.</p>
      </label>
      <input type="radio" name="page-{squad.id}" id="page-9-{squad.id}" />
      <label class="page cover" for="page-11-{squad.id}"></label>
      <label class="page cover" for="page-9-{squad.id}">
          <a href={`/squad-overview/${squad.id}`}>{squad.name}</a>
      </label>
      <input type="radio" name="page-{squad.id}" id="page-11-{squad.id}" />
    </div>
  {/each}
</section>

<style>
  h1 {
    margin-left: 20px;
  }

  .bookshelf {
    justify-content: center; 
    align-items: flex-start; 
    width: fit-content;
    position: relative; 
  }

  .book {
    width: 900px;
    max-width: 305px;
    height: 250px;
    max-height: 40vw;
    position: relative;
    top: auto;   
    transform: none; 
    perspective: 1500px;
    user-select: none;
    display: inline-block;
    margin-left: 32px;
  }

  .page {
    width: 112px;
    height: 160px;
    padding: 20px;
    position: absolute;
    top: 1%;
    left: 50%;
    font-size: 16px;
    line-height: 18px;
    color: black;
    background-color: blanchedalmond;
    background-image: linear-gradient(to right, rgba(0,0,0,.15) 0%, rgba(0,0,0,0) 10%);
    transition: transform .5s;
    transform: rotateY(-180deg);
    backface-visibility: hidden;
    transform-style: preserve-3d;
    transform-origin: left center;
    z-index: 4;

    &:nth-of-type(2n) {
      left: 1px;
      background-image: linear-gradient(to left, rgba(0,0,0,.12) 0%, rgba(0,0,0,0) 10%);
      transform-origin: right center;
      transform: rotateY(0);

      &:not(.cover) {
        left: calc(1% + 1px);
      }
    }
  }

  h2 {
    text-align: center;
    font-size: 40px;
  }

  h4 + p::first-letter {
    font-size: 42px;
    float: left;
    height: 44px;
    line-height: 36px;
    vertical-align: baseline;
    margin-right: 6px;
    border-radius: 5px;
  }

  input[type=radio] {
    display: none;
  }

input:checked {
  & ~ .page {
    transform: rotateY(0);
  }
  & ~ .page:nth-of-type(2n) {
    transform: rotateY(180deg);
  }
  & ~ .page:nth-of-type(2n-1) {
    z-index: 3;
  }
  & ~ .page:nth-of-type(2n-1) ~ .page:nth-of-type(2n-1) {
    z-index: 1;
  }
  & + .page + .page + input + .page {
    z-index: 2 !important; 
  }
}

.cover {
  width: 115px;
  height: 164px;
  top: 0;
  border-radius: 0 3px 3px 0;
  background-color: maroon;

  h2 {
    color: #ec5757;
    text-align: center;
    text-shadow: -1px -1px 2px rgba(0,0,0,.5);
    margin-top: 50%;
    position: relative;

    &::after {    
      content: "";
      display: block;
      width: 60px;
      position: absolute;
      bottom: -20px;
      margin-left: -30px;
      left: 50%;
      border-top: 1px solid #ec5757;
      box-shadow: -1px -1px 2px rgba(0,0,0,.5);
    }
  }

    & + .cover {
    border-radius: 3px 0 0 3px;
  }

  &:first-of-type, &:last-of-type {
    background-image: none;

    &::before {
      content: "";
      width: calc(100% - 20px);
      height: calc(100% - 20px);
      border: 2px dashed rgba(0,0,0,.2);
      position: absolute;
      top: 9px;
      left: 9px;
    }
  }
}

a {
  color: #ec5757;
  text-decoration: none;
  font-size: 35px;
  align-self: center;
  position: relative;
  top: 40%; 
  left: 35%;
}

@media (max-width: 450px) {
  .bookshelf {
    flex-direction: column;
    align-items: center; 
  }
}
</style>