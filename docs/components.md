# Your Tribe for Life

## Components

Over Sveltekit principes en het hergebruiken van herhaalde stukken code in layouts, componenten en utilities.

### Doel van de opdracht

- Je snapt file-based routing en kunt dit toepassen in het project
- Je kunt werken met `+layout.svelte`
- Je kunt gegevens inladen met de Directus SDK in load functions
- Je kunt werken de `lib` en deelt code op in componenten (en utilities?)
- Je hebt een keer iets gehoord over runes in Svelte
- Je hebt de reactivity hack in werking gezien en kunt die copy-pasten als dat nodig is
- Je hebt een voorbeeld gezien van werken met gebruikersdata dmv. forms en actions

### Werkwijze

De afgelopen weken heb je al kennis gemaakt met Svelte en Sveltekit door er zelfstandig mee aan de slag te gaan. Nu gaan we 1) consistentie afdwingen met `+layout.svelte` en 2) delen van je code herbruikbaar maken door te werken met componenten.

#### Consistentie met layouts

Door layouts op een goede manier toe te passen hoef je jezelf niet te herhalen op alle pagina’s in jouw site. Alle *sjablonen* die op meerdere pagina’s gebruikt worden kan je in een `+layout.svelte` bestand plaatsen. Deze bestanden kunnen *genest* worden zodat je, ook bij meerdere secties op je site, een consistente layout afdwingt.

##### 🛠️ Opdracht 1 (individueel) - 15 minuten
1. Pas in jouw visitekaartje `+layout.svelte` toe voor  het herhalende deel van jouw site (NB: ook als jouw visitekaartje uit 1 pagina bestaat is dit een goede oefening!).
2. Ga na of alle `+page.svelte` bestanden in de verschillende routes van jouw site alléén nog maar unieke inhoud bevatten.

##### 🛠️ Opdracht 2 (team) - 30 minuten
1. Pas in jullie squadpage `+layout.svelte` toe voor het herhaalde deel van de site.
2. Ga na of alle `+page.svelte` bestanden in de verschillende routes van jouw site alléén nog maar unieke inhoud bevatten.

##### Extra bronnen
Lees eventueel eerst de [uitleg over layouts @ svelte.dev](https://svelte.dev/docs/kit/routing#layout) door voor je bovenstaande opdrachten uitvoert.

#### Werken met componenten

Door componenten te gebruiken zorg je ervoor dat je jezelf niet hoeft te herhalen (DRY!) en dat stukjes code herbruikbaar worden binnen én buiten je project. Naast herbruikbaarheid zorgt het werken met componenten ook voor onderhoudbaarheid: Je kunt binnen een team gemakkelijker taken opsplitsen als je in componenten werkt. Er zijn ook nadelen: het nadenken over een grote(re) componentbibliotheek is best abstract; daar besteden we dan ook een hele sprint aan (S16: Don’t repeat yourself). Vandaag maken we een klein begin met het werken in componenten.

##### 🛠️ Opdracht 1 (individueel) - 30 minuten
1. Pas in jouw visitekaartje componenten toe voor een stukje herbruikbare code. Overleg met medestudenten en verifieer bij een docent welke stukjes code hier geschikt voor zijn.
2. Ga na of er in de `+layout.svelte` en `+page.svelte` bestanden nog meer inhoud bestaat die in een component geplaatst kan worden.

##### 🛠️ Opdracht 2 (team) - 30 minuten
1. Pas in jullie squadpage componenten toe voor een stukje herbruikbare code. Overleg met medestudenten en verifieer bij een docent welke stukjes code hier geschikt voor zijn.
2. Ga na of er in de `+layout.svelte` en `+page.svelte` bestanden nog meer inhoud bestaat die in een component geplaatst kan worden.

##### Extra bronnen
Werk eventueel eerst de [Sveltekit tutorial over componenten @ svelte.dev](https://svelte.dev/tutorial/svelte/your-first-component) door voor je bovenstaande opdrachten uitvoert.

### Leervragen

Zet de antwoorden in je learning journal.
1. Wat zijn sveltekit layouts en hoe kan je die toepassen in een web project?
2. Wat zijn componenten en hoe kan je die toepassen in een web project?
3. Kies een van de principes: file-based routing,  load functions, runes (reactivity hack) of forms en actions. Leg uit hoe je het gekozen principe kunt toepassen in een web project.