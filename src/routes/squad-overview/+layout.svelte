<script>
	let { children } = $props();
</script>

<nav>
  <a href="/">Home pagina</a>
  <a href="/squad-overview">Overzichtspagina</a>  
</nav>

{@render children()}

<style>
	nav {
		display: flex;
		gap: 20px;
		padding: 10px 20px;
	}

	nav a {
		text-decoration: none;
		font-weight: bold;
		font-size: 23px;
	}

	nav a:hover {
		text-decoration: underline;
	}
</style>