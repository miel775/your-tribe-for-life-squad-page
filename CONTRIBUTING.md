# Samenwerkingsafspraken squadpage

## `Teamafspraken & teamcanvas`

### Doelen die we samen willen bereiken:
- De basis van Sveltekit onder die knie krijgen.
- Kennis delen in de groep en deze toepassen.
- Elkaar ondersteunen bij het behalen van persoonlijke leerdoelen.

### Onze kernwaarden:
- Rekening houden met verschillen binnen het team.
- Elkaar helpen.
- Luisteren naar elkaar.

  ## Teamafspraken
  - Elke lesdag een standup houden (ma, wo, vrij).
  - Taken en voortgang bijhouden in het projectboard.
  - Vragen stellen (Teams of op school).
  - Duidelijke communicatie, voortgang & knelpunten bespreekbaar maken (ook indien niet aanwezig).
  - Code conventies hanteren.
  - Feedback vragen & geven.
  - Leerdoelen delen & bespreekbaar maken.
 
  ## Teamcanvas

<img width="595" height="426" alt="Scherm­afbeelding 2025-09-05 om 10 33 04" src="https://github.com/user-attachments/assets/14dfe101-9cc3-4229-8f5d-0857f2f9ca93" />

 
## `Code conventies`
https://github.com/fdnd-agency/.github/wiki/Conventions

## `Workflow`

### Werken op basis van issues
`We starten altijd vanuit een issue in ons project board. Elk issue is een duidelijke taak zoals:`
- Een component maken.
- Een bug oplossen.
- Een stuk funcionaliteit bouwen.
Deze issues zijn klein, duidelijk en toegewezen aan een of meerdere teamleden.

### Voor elke issue maken we een aparte branch
- Je maat een feature branch met een duidelijke naam, bijv. feature-navbar.
- Zo blijft je werk overzichtelijk en gericht op een taak of component.
- Is je taak af? Dan sluit je de branch af en maak je voor de volgende een nieuwe.
  > Blijf dus niet te lang in dezelfde branch!

### Commit regels, gebruik conventional commits
We gebruiken de volgende structuur in commit messages:

`type: korte beschrijving (#issuenummer)`
- `feat: Voeg navigatiebar toe (#12)`

- feat: nieuwe feature
- fix: bug opgelost
- style: opmaak
- refactor: herschreven code
> Commits linken we altijd aan het bijbehorende issuenummer!

### Pull Request aanmaken
1. Push je branch naar Github.
2. Maak een Pull Request.
3. Gebruik de PR template.
4. Assign teamleden aan de PR.
5. Wacht op feedback, goedkeuring.

### Feedback verwerken & teamleden taggen
Als je feedback krijgt van een teamlid:
- Verwerk de feedback.
- Tag daara opnieuw een teamlid in de PR (@githandle) zodat die het kan checken.
  Zodra minimaal 1 teamlid goedkeuring heeft gegeven, mag je PR gemerged worden.
> Niet mergen zonder goedkeuring of de nieuwste main in jouw branch!

## `Pull Request template`

```bash
- Korte omschrijving van wat en waarom in één zin

### Wat is er veranderd?

- feature toegevoegd of gewijzigd
- bug opgelost

### Waarom?
- doel of probleem

- screenshots/live demo

### Hoe is dit getest?
- User test
- Accessibility test
- Performance test
- Responsive Design test
- Device test
- Browser test

### Gerelateerde issues
- Closes: #1
- Gerelateerd aan: #2

### Opmerkingen voor de reviewer
- Waar moet de reviewer op letten?
- Feedback of hulpvraag
```

## Naming Animations

Wanneer er animaties worden gemaakt zoals loading en view-transitions gebruiken we deze regels

We gebruiken loading en view-transitions

### Consistent Animation rules
- Zoom transition
- Fade transition

### Benaming van classes
-paginanaam-component-actie-(x)


