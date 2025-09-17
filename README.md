

# Harry Potter Squadpage



Dit is de repositrt van de squadpage. Op deze website vind je allemaal informatie van alle squadleden die Front End Web development jaar 2025/2026 doen. Klik op de school om het geheim te ontrafelen.


## Het project
De opdracht van dit project is om een squadpage te maken van alle studenten die de studie Front End Web Development doen. We werken hierbij met een nieuw programmeertaal namelijk SvelteKit. Alle data wordt opgehaald vanuit de Directus database. De pagina bestaat uit een homepagine, overzichtspagina van alle squads, overzichtspagina van de members van de squad en een detailpagina. 

### Homepagina
De homepagina is de pagina waar je als eerste op komt. De hoofdpagina bestaat uit een tekst met een doorverwijzing naar de squadpagina. Hier zijn wat effecten toegevoged die in het ontwerp passen.


### Squadpagina

### Memberspagina

### Detailpagina

## Ontwerpkeuze's
We hebben een gezamenlijke Figma sheet aangemaakt hier staat ons [ontwerp](https://www.figma.com/design/lafIJ4ZELtslfd97pOMcxp/Squadpage?node-id=229-2&t=ChpmxoZqyXzf0Jqu-1) en [stylesheet](https://www.figma.com/design/lafIJ4ZELtslfd97pOMcxp/Squadpage?node-id=269-2&m=dev) in. Op de stylesheey staan alle kleuren die we gebruiken, font's en verdere ontwerpkeuze's. Deze staan als Custom CSS properties inline op de pagina.

We hebben gekozen voor het Harry Potter thema omdat het ook een school is. Het idee was om de mugshots in frame te plaatsen wat een student moet voorstellen. De studenten worden verdeeld onder de squad. Hierbij heeft Harry Potter dus 4 thema's.

Op de hoofdpagina staan voornamelijk SVG's. Dit om te leren omgaan met SVG componenten. Deze kan je dan vaker inzetten in het project. 

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
