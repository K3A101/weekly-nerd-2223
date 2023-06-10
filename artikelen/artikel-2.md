# Web Animatie maken met GSAP

## Inleiding
Mijn tweede artikel die ik erover gaat schrijven is GSAP. Tijdens een weekly nerd werd er gepraten over GSAP. Ik dacht dat het een interessante onderwerp was om over te schrijven.GSAP is een javascript animatie bibliotheek. Waar je verschillende animatie kan maken met javascript. Er wordt websites gemaakt zodat gebruikers te aan te trekken  om een product te kopen of een artikel te lezen. Animatie is een perfecte tool om gebruikers aan te trekken. Animatie maakt het proces om bepaalde doel te behalen makkelijk, leuker en sneller. En de gebruiker weet wat hij moet doen om zijn doel te behalen.

## Wat is GSAP?
GSAP oftewel de greensock animation platform is een populaire javascript animatie bibliotheek. Er zijn zoveel functionaliteiten waar je veel met javascript kan animeren. Bijvoorbeeld scroll animatie, animatie van SVG, Three.js of React componenten. 


## GSAP installeren
Er zijn verschillende manieren om GSAP te installeren. Die zijn met:

- CDN
- Zip bestand downloaden uit de greensock website
- Met NPM
- OP Github
- Codepen

### CDN
De makkelijkste manier om GSAP te installeren is met een CDN. Je kan de CDN link vinden op de greensock website. Je moet alleen een script tag in je html bestand plaatsen. 

```html
       
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/gsap.min.js"></script>
```

### Zip bestand downloaden uit de greensock website
Je kan ook de zip bestand downloaden uit de greensock website. Je moet de zip bestand uitpakken en de bestand in je project plaatsen. En de path in de script tag toevoegen. 

```html

<script src="js/gsap.min.js"></script>
```

### Met NPM
Je kan ook GSAP installeren met NPM. Je moet eerst de npm installeren. Daarna kan je GSAP installeren met de volgende commando:

```javascript
npm install gsap
```
Er daarna moet je de importeren in je javascript bestand. 

```javascript
import { gsap } from "gsap";
```

### Op Github
Je kan ook GSAP downloaden op Github. Je moet de bestand uitpakken en de bestand in je project plaatsen. En de path in de script tag toevoegen. 

```html

<script src="js/gsap.min.js"></script>
```

### Codepen
Je kan ook GSAP installeren op Codepen. Je moet de volgende link in de settings plaatsen. 


## Hoe wordt GSAP gebruikt?
Zoals ik al zij. Met gsap maak je animatie met javascript. Om een simpele animatie te maken heb je de volgende code nodig:

```javascript
gsap.to(".box", {duration: 2, x: 300});
```
Dit is de hele synax van GSAP. Het bestaat uit een methode, de target en de variabelen. De methode is gsap.to. De target is de box. En de variabelen zijn de duration en de x. De duration is de tijd van de animatie. En de x is de positie van de box. 

Er zijn verschillende methodes of tweens die je kan gebruiken. De meest gebruikte methodes zijn:

- gsap.to(): Is het meest gebruikte methode. De `to()` methode begint bij de huidige positie van de target en wordt geanimeerd naar de gedefinieerde waarde in de syntax. En de target gaat naar de nieuwe positie. 
  
- gsap.from(): De `from()` methode begint bij de gedefinieerde waarde in de syntax en wordt geanimeerd naar de huidige positie van de target.
- gsap.fromTo(): Hier defineer je de begin en eind positie van de animatie.
- gsap.set(): De `set()` methode wordt gebruikt om de target te defineren op bepaalde positie. En de target wordt niet geanimeerd.
- gsap.timeline(): De `timeline()` methode wordt gebruikt om meerdere animaties te maken. Je kan meerdere animaties maken met de `to()`, `from()`, `fromTo()` en `set()` methode. En je kan de animaties in een volgorde plaatsen.

### GSAP tweens

```javascript
gsap.to(".circle", { x: 40, fill: 'blue', });
gsap.from(".circle", { x: -40, fill: 'blue', });
gsap.fromTo( ".circle",{ x: -40, fill: 'blue', }, { x: 40, fill: 'green' });
gsap.set(".circle", { x: 40, fill: 'blue', });
```
### Wat kan je animeren met GSAP?
Je kan bijna alles animeren o.a css propeties, custom object properties, svg attributen  en css variabelen. GSAP lijkt als de css transform properties. Met transforms kun je elementen verplaatsen, draaien, schalen en vervormen.

```css
.box{

    transform: rotate(360deg) translateX(10px) translateY(50%);
}
```
```javascript
{ rotation: 360, x: 10, yPercent: 50 }
```
| CSS transform properties     | GSAP properties |
| ---------------------------- | --------------- |
| translateX(100px)            | x: 100          |
| transform: translateY(100px) | y: 100px        |
| transform: translateX(50%)   | xPercent: 50    |
| transform: translateY(-50%)  | yPercent: -50   |
| transform: rotate(360deg)    | rotation: 360   |
| transform: scale(2 ,2)       | scale: 2        |


### CSS properties
Met gsap je kan css eigenschappen animeren zoals kleur, transfor, padding border radius enzovoorts

```javascript
gsap.fromTo('.box', 
{ x: 0, backgroundColor: 'blue' ,}, 
{x: 200, backgroundColor: 'red', 
duration: 2, 
delay: 1,
 ease: 'bounce' })
```



### SVG attributes
Verder kan je svg atributen animeren in GSAP. De eigenschappen moet geplaats zijn binnen de `attr{}` object. Een voorbeeld van een svg atributen zijn:
- fill
- stroke
- stroke-width
- path
- visibility
- clip

```javascript
gsap.to('.circle', { 
    duration: 2, 
    x: 200
    attr: { 
        fill: 'red', 
        stroke: 'blue', 
        strokeWidth: 5, 
        path: 'M 0 0 L 100 100 L 200 0 Z', 
        visibility: 'hidden', 
        clip: 'rect(0px, 100px, 100px, 0px)' 
    } 
});
```



### Speciale properties
Er zijn ook speciale properties die je kan gebruiken in GSAP. De speciale properties zijn:

| Properties | Beschrijving                                                                               |
| ---------- | ------------------------------------------------------------------------------------------ |
| Duration   | Tijdsduur van de animatie                                                                  |
| delay      | De hoeveelheid vertraging voordat de animatie begint                                       |
| repeat     | Met repeat bepaal je hoeveel keren de animatie zich herhaalt                               |
| yoyo       | wanneer het true is gaat de animatie heen en weer afhankelijk hoeveel de animatie herhaalt |
| stagger    | rotation: 360                                                                              |
| ease       | Betere transitie tussen het begin en de eindpunt van de animatie.                          |
| onComplete | Een functie die uitgevoerd wordt wanneer de animatie afgelopen is.                         |

---
### Delay
Met delay properties kan je de animatie vertragen met een aantal seconden.
```javascript
gsap.to('.box', { duration: 2, x: 200, delay: 1 })
```
### Animatie herhalen
#### Repeat
Met repeat properties kan je de animatie herhalen. Je kan een getal plaatsen om aan te geven hoeveel keer de animatie herhaalt moet worden. Als je -1 plaatst wordt de animatie oneindig herhaalt.
```javascript
gsap.to('.box', { duration: 2, x: 200, repeat: 2 })
```
#### Yoyo
Met yoyo properties kan je de animatie heen en weer laten gaan. Als je true plaatst wordt de animatie heen en weer afhankelijk hoeveel de animatie herhaalt.
```javascript
gsap.to('.box', { duration: 2, x: 200, repeat: 2, yoyo: true })
```


### Easing
Easing is een functie die je kan gebruiken om de transitie tussen het begin en de eindpunt van de animatie te verbeteren. Er ijn verschillende soorten easing eigenschappen. Op de greensock website kun je de ease visualizer gebruiken om de easing eigenschappen te bekijken. Het meest gebruikte easing eigenschappen zijn:

- power1
- power2
- power3
- power4
- back
- elastic
- bounce
- rough
- slow
- steps
- circ
- expo
- sine
- custom

## Hoe maak je een simpel scroll animatie met GSAP. 

GSAP  biedt verschillende plugins om meer functionaliteiten toe te voegen aan de animatie. Een van de plugins de ik ga bespreken is de Scrolltrigger plugins. Met de scrolltrigger plugin wordt de animatie uitgevoerd door te scrollen. Voor dit onderdeel heb ik het zelf geprobeerd en ga mijn bevindingen delen. 

## De animatie maken
### HTML en CSS
Ik ga drie blokken maken met css maken. Elk blok heeft een kleur. De eerste blok is blauw, de tweede blok is groen en de laatste is geel. Ik wil dat de groene blok van links naar rechts beweegt wanneer ik naar beneden scroll.

Hier zijn de html en css code voor de blokjes:

```html
<!-- HTML -->
    <div class="box a"></div>
    <div class="box b"></div>
    <div class="box c"></div>
```

```css
/* CSS */
body {
    height: 300vh;
    overflow: scroll;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 15em;
}

.box {
    width: 100px;
    height: 100px;
    /* background-color: red; */
    position: relative;
}

.box.a{
    background-color: blue;
}

.box.b{
    background-color: green;
}

.box.c{
    background-color: yellow;
}

```



### Stap 1: Gsap methode gebruiiken

Ten eerste moet je de  target en de methode bepalen. De target is degene wat je wilt animeren en dat is de groene blokje. De groene blokje is heeft een class `b`. De methode is de bepaalde begin en eindpunt van de animatie. In dit artikel ga ik de `to()` methode gebruiken. De to methode zorgt ervoor dat de animatie vanaf zijn huidige positie begint en eindigt in een nieuwe positie. 

```javascript
gsap.to('b',{})
```
### Stap 2: GSAP eigenschappen toevoegen
Verder wil ik dat blokje b van links naar rechts beweegt. Dus ik ga de x eigenschap gebruiken om de blokje te verplaatsen. De x eigenschap is hetzelfde als `transform: translateX()`. Je kan de css eigenschappen gebruiken in de gsap methode. 

```javascript
gsap.to('b',{
    x: 800
})
```

Ik wil dat de animatie 3 seconden duurt. Ik gebruikt de 
`duration` eigenschap om de duur van de animatie te bepalen. 

```javascript
gsap.to('b',{
    x: 800,
    duration: 3
})
```
Terwijl de blokje naar de rechterkant beweegt wil ik dat de blokje ook roteert. Ik ga de `rotation` eigenschap gebruiken om de blokje te laten draaien. 

```javascript
gsap.to('b',{
    x: 800,
    duration: 3,
    rotation: 360
})
```
Met dit heb je al een simpele animatie gemaakt. Nu moeten we de scrolltrigger plugin installeren om de animatie te laten uitvoeren door te scrollen.


### Plugin Installeren
We gaan vanuit dat je de gsap al had geinstalleerd met behulp van de cdn link. De Link vind je bij de greensock website. Om de scrolltrigger plugin te installeren moet je de cdn link van de scrolltrigger plugin toevoegen aan de html bestand. De link vind je ook bij de greensock website. 

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/ScrollTrigger.min.js"></script>
<script src="JE_JAVASCRIPT_BESTAND"></script>
```
Dus in je html bestand heb je drie script tags. De eerste script tag is de gsap cdn link om gsap te installeren. De tweede script tag is de scrolltrigger plugin cdn link om de scrolltrigger plugin te installeren. De derde script tag is de link naar je javascript bestand. Er  zijn nog meer mogelijkheden om de plugin te installeren op de website. Maar deze is het meest aanbevolen manier.

Wanneer je alles hebt geinstalleerd kan je de scrolltrigger plugin gebruiken in je javascript bestand.

### Scrolltrigger plugin activeren
Wanneer je de plugin heb geinstalleerd kan je in de plugin toevoegen door de `gsap.registerPlugin(ScrollTrigger)` functie te gebruiken. Hiermee wordt de plugin geactiveerd. De functie ze je in je javascript bestand.

```javascript
gsap.registerPlugin(ScrollTrigger);
```

### Scrolltrigger plugin toeveoegen aan de animatie
We gaan de scrolltrigger functie toevoegen aan de aniamtie. Je maakt eerste een `scrolltrigger` object aan.


```javascript 
gsap.to('b',{
  
    scrollTrigger: {
    //scrolltrigger functionailiteiten
    },
      x: 800,
    duration: 3,
    rotation: 360,
})

```
#### Trigger
In de scrolltrigger zet je de `trigger` eigenschap aan. De waarde is de elemente die je wil animeren door te scrollen. In dit geval is het de groene blokje. De groene blokje heeft een class `b`. Dus de waarde is `b`. 

```javascript 
gsap.to('b', {
  
    scrollTrigger: {
    trigger: 'b'
    },
      x: 800,
    duration: 3,
    rotation: 360,
})

```
#### Start en End
De start en de end property bepalen de begin en eindpunt van de scrollen animatie. Beide eigenschappen hebben twee string waardes  De eerste waarde beschrijft een positie van de geanimeerde element. De tweede waarde beschrijft de  positie van de scroller oftewel de viewport. De positie van de animatie kan je bepalen met de keywords `top`, `center` en `bottom`. Maar je kan ook getalen gebruiken zoals pixels en percentages. 


```javascript 
gsap.to('b',{
  
    scrollTrigger: {
    trigger: 'b',
    start: 'top center',
    end: 'bottom 100px'
    },
    x: 800,
    duration: 3,
    rotation: 360,
})

```
#### Markers 
Met markers kun je de start en de end positie van de animatie zien. Je kan de markers activeren door de `markers` eigenschap op `true` te zetten. 

                   
```javascript 
gsap.to('b',{
  
    scrollTrigger: {
    trigger: 'b',
    start: 'top center',
    end: 'bottom 100px',
    markers: true
    },
 
    x: 800,
    duration: 3,
    rotation: 360,
})

```
#### Scrub
Met de scrub eigenschap kan je de animatie vloeiend laten uitvoeren. Je kan de scrub eigenschap op `true` zetten. Maar je kan ook een getal gebruiken. Het getal wordt gezien als seconde. Hoe hoger het getal hoe vloeiender de animatie wordt uitgevoerd. Hiermee wordt de animatie gekoppeld aan de scrollbar.



```javascript 
gsap.to('b',{
  
    scrollTrigger: {
    trigger: 'b',
    start: 'top center',
    end: 'bottom 100px',
    markers: true,
    scrub: '1'
    },
 
    x: 800,
    duration: 3,
    rotation: 360,
})

```

#### ToggleActions
Met de toggleActions eigenschap kan je bepalen hoe de animatie wordt uitgevoerd, wanneer je van boven en naar beneden scrolt. En andersom. De vier waardes van de toggleActions eigenschap zijn `play`, `pause`, `resume` en `reset`. De eerste waarde is de animatie die wordt uitgevoerd wanneer je van boven naar beneden scrolt. De tweede waarde is de animatie die wordt uitgevoerd wanneer je van beneden naar boven scrolt. De derde waarde is de animatie die wordt uitgevoerd wanneer je van beneden naar boven scrolt. De vierde waarde is de animatie die wordt uitgevoerd wanneer je van boven naar beneden scrolt. De standaard waarde is `play none none none`. 




```javascript 
gsap.to('b',{
  
    scrollTrigger: {
        trigger: 'b',
        start: 'top center',
        end: 'bottom 100px',
        markers: true,
        scrub: 1,
        toggleActions: 'restart pause reverse pause'

    },
      x: 800,
    duration: 3,
    rotation: 360,
})

```

## Samenvatting

In dit artikel hebben we geleerd over GSAP, een krachtige JavaScript-animatiebibliotheek. We hebben gezien hoe GSAP kan worden geïnstalleerd via verschillende methoden, zoals CDN, het downloaden van zip-bestanden, NPM, GitHub en CodePen. Vervolgens hebben we geleerd hoe we animaties kunnen maken met GSAP door gebruik te maken van verschillende tween-methoden, zoals gsap.to(), gsap.from(), gsap.fromTo() en gsap.set(). We hebben gezien dat GSAP ons in staat stelt om verschillende elementen te animere,n zoals CSS-eigenschappen, SVG-attributen en zelfs CSS-variabelen.

Daarnaast hebben we enkele handige eigenschappen van GSAP besproken, zoals delay, repeat en yoyo, waarmee we animaties kunnen aanpassen en herhalen. We hebben ook gekeken naar de easing-opties die GSAP biedt om de transitie tussen begin- en eindpunten van animaties te verbeteren.

Ten slotte hebben we een voorbeeld gegeven van het maken van een eenvoudige scroll-animatie met behulp van de GSAP ScrollTrigger-plugin. We hebben gezien hoe we elementen kunnen laten bewegen en roteren terwijl we scrollen, en we hebben besproken hoe de ScrollTrigger-plugin kan worden geïnstalleerd en geactiveerd.

GSAP is een geweldige tool om aantrekkelijke en interactieve animaties op websites te creëren. Met zijn uitgebreide functionaliteit en flexibiliteit biedt GSAP ontwikkelaars de mogelijkheid om hun creatieve visie tot leven te brengen en gebruikers een boeiende ervaring te bieden. Of het nu gaat om het animeren van eenvoudige elementen of het creëren van complexe scroll-animaties, GSAP opent de deur naar eindeloze mogelijkheden.



## Bronnen
- https://greensock.com/get-started-2/
- https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute
- https://greensock.com/docs/v3/Eases
