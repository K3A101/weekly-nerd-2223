# CSS eigenschappen die je leven makkelijker maakt
In deze artikel ga ik vertellen over de nieuwe technieken die ik heb geleerd over CSS. CSS is de afkorting van Cascading Style Sheets. CSS is een prograaertaal die wordt gebruikt om de opmaak van een HTML Markup webpagina te beschrijven. CSS heeft veel eigenschappen die je kan gebruiken om je website mooier te maken. Soms heb je wat handige eigenschappen dat je mischien je leven makkelijker maakt.

## 1. :has() selector
:has is een nieuwe psuedo-selector van css. :has() maakt het mogelijlk om te kijken of een parent element een specifieke child element heeft. Als je has wil gebruiken moet je rekening houden dat het  nog niet ondersteund wordt, door de firefox. Hieronder ga ik een voorbeeld geven hoe je :has() selector kan gebruiken. 

### Syntax
```css
:has( <relatieve-selectoren>) {
    /* css eigenschappen */
}
```

### Voorbeeld
```css
/* Voorbeeld */
article:has(h1) {
    color: crimson;
}
```
Hier heb ik een simpele voorbeeld gegeven, hoe je :has() selector kan gebruiken. In dit voorbeeld heb ik een artikel element geselecteerd die elk een  h1 element hebben. Als het artikel element een h1 element heeft dan wordt de tekst kleur van het artikel element rood.

## 2.Scroll Snap
Scroll snap is een handige css property waar gebruikers scroll gedrag kan bepalen op bepaalde locatie en positie. Inhoud kan op zijn plaats worden vastgezet wanneer de gebruiker overlopende inhoud binnen een scrollcontainer scrollt, waardoor pagineren en scrollen worden gepositioneerd. Scroll snap wordt ondersteund door de meeste browsers. 

### syntax

```html
<ul class="container">
    <li class="item">1</li>
    <li class="item">2</li>
    <li class="item">3</li>
</ul>
```

Om de parent container een scrll container te maken moet je de scroll-snap-type property gebruiken. De scroll-snap-type property heeft vier waardes:
- scroll-snap-type: x proximty
- scroll-snap-type: y proximity
- Scroll-snap-type: y mandatory
- scroll-snap-type: x mandatory

```css
.container {
    scroll-snap-type: y mandatory;
    /* mandatory betekent dat de element moet op bij een bepaalde positie vastgezet worden */
}

.item {
    scroll-snap-align: start;
    /* start betekent dat de element moet op het begin van de container vastgezet worden */
}
```


## 3 Container queries


## 4. Initial-letter


## 5. Nesting


## 6. Selectmenu


---

## Conclusie


## Bronnen
- https://developer.mozilla.org/en-US/docs/Web/CSS/:has
- https://www.matuzo.at/blog/2022/100daysof-day6/
- 