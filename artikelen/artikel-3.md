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
Container queries is een nieuwe techniek waar je verandering kan brengen aan een element op basis van de breedte  van de parent container. Container queries wordt momenteel ondesteund door Chrome, firefox, edge safari en Opera. Maar container queries wordt nog niet ondersteund door Internet Explorer.

### Hoe gebruik je container queries?

### Stap 1: Geef de parent container een containment context.
SHet eerste wat je moet doen, container queries activeren aan de parent container `.card`. Je gebruikt dan de eigenschap `container-type` met de waardes,`inline-size`. Daarna geef je de container een naam met de eigenschap `container-name` met de waarde `card`. De kinderen binnen container `.card` kunnen nu de container queries gebruiken.

```html
<section class="post">
        <article class="card"  data-type="small">
            <h2>Post Title</h2>
            <p>Post content</p>
        </article>
  
   <article class="card" data-type="medium">
            <h2>Post Title</h2>
            <p>Post content</p>
        </article>

   <article class="card"  data-type="wide">
            <h2>Post Title</h2>
            <p>Post content</p>
        </article>
    </section>
```
    
```css
    .post {
        width: 100%;
    }

    .card {  
        container-type: size;
        container-name: post;
    background-color: salmon;
}

.card[data-type="small"]{
  max-width: 300px;
}

.card[data-type="medium"]{
  max-width: 500px;
}

.card[data-type="wide"]{
  max-width: 700px;
}


 ```
 Per card heb ik een max-width gegeven. Ik heb ook standaard een achtergrond kleur gegeven aan de card. Om het verschillende grootte van de containers te zien.

### Stap 2: Container queries toepassen
Om de contaiener queries definieren, moet je de `@container` syntax gebruiken. Het werkt het zelfde als de media queries, want bij de container queries heb je de min-width en max-width waardes. Bijvoorbeeld `@container (min-width: 500px)` betekent dat wanneer de parent container 
`.card` een breedte heeft van 500px of meer word de achtergrond van de `.card` verandert naar rood


```css
 @container (min-width: 400px) {
    .card p {
      background-color: lime;
        }
 }

```
Ik heb een simpel demo gemaakt, zodat je een beter beeld krijgt hoe container queries werkt.

[Codepen Demo](https://codepen.io/keisha-alexander/pen/abQNaWR)

## 4. Initial-letter
Wanneer je een boek of een nieuws artikel leest zie je vaak dat de eerste letter van de eerste woord van een alinea groter is dan de rest van de tekst. Dit kan je ook doen met css. Je kan de eerste letter van een alinea groter maken dan de rest van de tekst. Hiervoor gebruik je de css eigenschap `initial letter`. Dit eigenschap neemt getallen als waarden. De getallen bepalen hoe veel regels de letter neemt.



### Syntax
```css
p::first-letter {
    initial-letter: normal | <number> | <integer>;
}
```

Als je  wil topeassen moet je ten eerste de `::first-letter` pseudo selector gebruiken. Daarna geef je de initial-letter eigenschap een waarde. Daarin zet je de eigenschap. In het voorbeeld onderaan heb ik de waarde gegeven `5`. Dit betekent dat de eerste letter van de alinea 5 regels neemt.

```css
p {
   padding: 2em;
  font-family: saira;
  line-height: 1.5;
}
p::first-letter {
  initial-letter: 5;
 margin-right: .5em;
 
}

```
<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="OJaNBMj" data-user="keisha-alexander" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/keisha-alexander/pen/OJaNBMj">
  Untitled</a> by Keisha (<a href="https://codepen.io/keisha-alexander">@keisha-alexander</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

[Codepen Demo](https://codepen.io/keisha-alexander/pen/OJaNBMj)


## 5. Nesting
Het nesten wordt vaak gebruiken om herhalende code te vermijden, code stucturele en de bestand grootte te verminderen. Uiteindelijk is de bedoeling dat de code leesbaar en makelijker te begrijpen wordt.  In CSS werd tot nu toe een preprosessor gebruikt zoals sass, less etc. Maar nu is het ook mogelijk om normale css te nesten. In  dit artikel ga ik uitleggen hoe je css kan nesten.

Ik ga in dit stukje uitleggen hoe je css eigenschappen kan nesten. Ik heb een voorbeeld gemaakt om het beter te begrijpen.

```html
     <ul>
        <li class="items"><p> List item 1</p></li>
        <li class="items"><p> List item 2</p></li>
        <li class="items"><p> List item 3</p></li>
        <li class="items"><p> List item 4</p></li>
        <li class="items"><p> List item 5</p></li>
    </ul>
```
Hier heb ik een lijst met vijf items. Ik wil de items stijlen. 
In het normaal geval schrijf je alle css onder elkaar van breed naar specifiek. Dit manier is prima alleen je herhaald dezelfde selector. Dit kan je vermijden door de css te nesten. 


```css


ul {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2em;
}

ul li {
  font-family: arial;
  font-size: 2em;
  background: pink;
  padding: 1em;
}

ul li p {
    font-weight: bold;
}

```
### Hoe werkt het?
Nesten betekent dat je een selector binnen een selector zet. Om de selector moet je altijd beginnen met een nesting selector `&` gebruiken. Je zet de ampersand voor de geneste selector en schrijf je daarin de css eigenschappen die je nodig hebt. In het voorbeeld hieronder heb ik binnen de ul, li en p selector de css selectoren genest. 

```css
ul {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2em;
  flex-wrap: wrap;
  
 & li {
      font-family: arial;
  font-size: 2em;
  background: pink;
  padding: 1em;
 
   & p {
      font-weight: bold;
   }
  
  }
  
}
```
Uiteindelijk is het mogelijk om met simpel css te nesten. Je hoeft geen framework of preprosessor te gebruiken. Het vermijdt herhalende code en maakt de code leesbaarder. 

[Codepen Demo](https://codepen.io/keisha-alexander/pen/oNQxamZ?editors=0110)

## 6. Selectmenu


---

## Conclusie


## Bronnen
- :has() - CSS: Cascading Style Sheets | MDN. (2023, 21 februari). https://developer.mozilla.org/en-US/docs/Web/CSS/:has
- Matuzović, M. (2022b, oktober 3). Day 6: the :has() pseudo-class. Day 6: the :has() pseudo-class. https://www.matuzo.at/blog/2022/100daysof-day6/
- Kevin Powell. (2022, 20 september). Container Queries are going to change how we make layouts [Video]. YouTube. https://www.youtube.com/watch?v=3_-Je5XpbqY
- Container queries land in stable browsers. (2023, February 14). web.dev. https://web.dev/cq-stable/
- CSS container queries - CSS: Cascading Style Sheets | MDN. (2023, May 26). https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_container_queries
- Graham, G. (2017). initial-letter | CSS-Tricks. CSS-Tricks. https://css-tricks.com/almanac/properties/i/initial-letter/
- Atuonwu, S. C. (2022, March 24). Native CSS nesting: What you need to know - LogRocket Blog. LogRocket Blog. https://blog.logrocket.com/native-css-nesting/