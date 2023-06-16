# Fetch Api gebruiken

## Fetch API
De Fetch API is een moderne vervanging voor XMLHttpRequest. Het is een op beloftes gebaseerde web-API die een responsobject teruggeeft. Het antwoordobject heeft een methode genaamd json() die een belofte teruggeeft. Deze belofte wordt opgelost met de JSON-gegevens uit de respons.


## Parameter van de fetch API

### Argument 1: De Rest API Endpoint
Om iets van het netwerk op te halen, moet je de methode "fetch()" gebruiken. Deze methode neemt één belangrijke parameter, namelijk het pad naar de bron die je wilt ophalen. Het pad kan een relatief of een absoluut pad zijn. Dus de request object. Vervolgens geeft fetch() een belofte terug die naar het `response` object verwijst. 

De tweede argument die de fetch methode kan hebben is een object met opties oftewel `options`. De opties zijn onder andere de methode, headers en body. 

### Argument 2:  Options

- Method: de HTTP-methode om het verzoek uit te voeren. Staat standaard op 'GET'.
- Body: de body van het HTTP-verzoek
- headers: een object met de headers die aan het verzoek moeten worden toegevoegd

Meestal worden de options opgeslagen in een variabele.

### Methode 
Met de fetch APi kun je verschillende methodes gebruiken, namelijk GET, POST, PUT, DELETE. De standaard methode is GET. 
    
```javascript
    fetch('https://jsonplaceholder.typicode.com/todos/1', {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
```


### Body
De body is een object met de data die je wilt versturen. Meestal is de Body een JSON object. 

   

### Headers
De Headers object zijn extra metadata die je meestuurt met het verzoek. Die aangeeft wat voor soort data je stuurt. Ook word meestal api key meegegeven. Om de het verzoek te authenticeren. 

```javascript
    fetch('https://jsonplaceholder.typicode.com/todos/1', {
     
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
```


### Then/Catch
Wanneer de client het antwoordobject ontvangt, kan hij de methode `json()` gebruiken om de data te genereren als een json object.  In the then() methode wordt de data als een json object gebracht. Hierin maak je bijvoorbeeld een functie die de data in de DOM plaatst. In de catch() methode wordt de error afgehandeld. 

Hier kan je een functie schrijven die foutmelding geeft wanneer de data niet opgehaald kan worden. 

## Hoe ziet een simpele fetch eruit?

```javascript
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
```
---
## Fetch API topeassen om een lijst van disney karakters te creeren. 
De volgende onderdeel van dit artkel ga ik de fetch API topeassen om lijst van disney karakters te genereren. Ik ge 
Ik ga stap voor stap uitleggen hoe dat moet. 

### Stap 1: Disney API endpoint
Wanneer je een applicatie ga maken moet je altijd een passende eindpoint zoeken met de juiste data. Ik heb een Disney API gevonden op Github zelf. Als je de documentatie leest zie je hoe de data is gestructureerd.

### GET methode
Deze endpoint heeft een GET methode. Dit betekent dat je alleen data kan ophalen vanuit de server. 
```
https://api.disneyapi.dev/character
```

```json
{
  "info": {
    "totalPages": 149,
    "count": 50,
    "previousPage": "https://api.disneyapi.dev/character?page=3",
    "nextPage": "https://api.disneyapi.dev/character?page=5",
  },
  "data": [
    {
      "_id":308,
      "films":["Tangled","Tangled: Before Ever After"],
      "shortFilms":["Tangled Ever After","Hare Peace"],
      "tvShows":["Once Upon a Time","Tangled: The Series"],
      "videoGames":["Disney Princess Enchanting Storybooks","Hidden Worlds","Disney Crossy Road","Kingdom Hearts III"],
      "parkAttractions":["Celebrate the Magic","Jingle Bell, Jingle BAM!"],
      "allies":[],
      "enemies":[],
      "sourceUrl":"https://disney.fandom.com/wiki/Queen_Arianna",
      "name":"Queen Arianna",
      "imageUrl":"https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802",
      "createdAt":"2021-04-12T01:33:34.458Z",
      "updatedAt":"2021-04-12T01:33:34.458Z",
      "url":"https://api.disneyapi.dev/characters/308",
      "__v":0
    }
   
  ],
}

```


### Stap 2: Opzetten van de HTML-structuur
Begin met het maken van een HTML-bestand en het opzetten van de basisstructuur. Voeg een container-element toe voor de lijst met personages en een invoerveld voor het paginanummer. Bijvoorbeeld:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Disney Karakters</title>
</head>
<body>
  <h1>Disney-personages</h1>
  
  <input type="number" id="page-number" placeholder="Voer het paginanummer in">
  
  <ul id="characters"></ul>
  
  <script src="script.js"></script>
</body>
</html>
```

### Stap 3: Maak het JavaScript-bestand
Maak een JavaScript-bestand met de naam "script.js" en link het in het HTML-bestand. Hier schrijven we de code om gegevens op te halen van de API en de DOM te manipuleren.

### Stap 4: Haal de API-gegevens op en toon de personages
Binnen het "script.js" bestand beginnen we met het schrijven van de code om gegevens op te halen van de Disney API. We gebruiken de Fetch API om het verzoek te doen. Voeg de volgende code toe:

```javascript
const charactersList = document.querySelector('#characters');
const pageNumber = document.querySelector('#page-number');

pageNumber.addEventListener('input', () => {
  const page = parseInt(pageNumber.value);

  // Wis charactersList wanneer de invoer leeg is of geen getal is
  if (isNaN(page)) {
    charactersList.innerHTML = '';
    return;
  }

  fetch(`https://api.disneyapi.dev/character?page=${page}`,{
    method: 'GET',
mode: 'cors'
  })
    .then(response => response.json())
    .then(data => {
      charactersList.innerHTML = '';

      data.data.forEach(character => {
        const html = `
          <li>
            <h2>${character.name}</h2>
            <img src="${character.imageUrl}" alt="${character.name}">
          </li>
        `;
        charactersList.innerHTML += html;
      });
    })
    .catch(error => {
      console.error('Fout:', error);
    });
});
```

<!-- Zeker! Laten we de code stap voor stap doornemen:

1. `const charactersList = document.querySelector('#characters');`
   Deze regel zoekt het HTML-element met de ID "characters" en slaat het op in de variabele `charactersList`. Dit element wordt gebruikt om de lijst met personages weer te geven.

2. `const pageNumber = document.querySelector('#page-number');`
   Deze regel zoekt het HTML-element met de ID "page-number" en slaat het op in de variabele `pageNumber`. Dit element vertegenwoordigt het invoerveld waar de gebruiker het paginanummer invoert.

3. `pageNumber.addEventListener('input', () => { ... });`
   Hier wordt een gebeurtenisluisteraar toegevoegd aan het `pageNumber`-element. Het luistert naar het "input" -evenement, wat betekent dat de code binnen de functie wordt uitgevoerd telkens wanneer de gebruiker iets invoert in het invoerveld.

4. `const page = parseInt(pageNumber.value);`
   Deze regel converteert de waarde van het `pageNumber`-invoerveld naar een geheel getal met behulp van de `parseInt()`-functie. Dit is nodig omdat de API een paginanummer als een getal verwacht.

5. `if (isNaN(page)) { ... }`
   Hier wordt gecontroleerd of de waarde van `page` geen getal is door `isNaN()` te gebruiken. Als de waarde geen getal is, betekent dit dat de invoer leeg is of geen geldig getal bevat. In dat geval wordt de `charactersList` geleegd en wordt de functie vroegtijdig verlaten.

6. `fetch(`https://api.disneyapi.dev/character?page=${page}`, { ... })`
   Dit is een Fetch API-verzoek naar de Disney API om de gegevens van de personages op te halen. Het paginanummer wordt opgenomen in de URL van het verzoek. Er wordt ook een optie-object doorgegeven met de instellingen voor het verzoek, zoals de HTTP-methode 'GET' en de 'cors'-modus voor Cross-Origin Resource Sharing.

7. `.then(response => response.json())`
   Dit is de eerste `then()`-methode van het Fetch API-verzoek. Het converteert de HTTP-response naar een JavaScript-object in het JSON-formaat.

8. `.then(data => { ... })`
   Dit is de tweede `then()`-methode van het Fetch API-verzoek. Het ontvangt het geconverteerde JSON-object als de variabele `data`. Hier wordt de `charactersList` geleegd en vervolgens wordt er iteratie uitgevoerd over elk personage in de `data`-array. Voor elk personage wordt er dynamisch HTML gemaakt en toegevoegd aan de `charactersList`.

9. `.catch(error => { ... })`
   Dit blok vangt eventuele fouten op die zich kunnen voordoen tijdens het Fetch API-verzoek. Als er een fout optreedt, wordt de foutmelding weergegeven in de console.

Deze code zorgt ervoor dat bij elke wijziging in het `pageNumber`-invoerveld de bijbehorende gebeurtenis wordt geactiveerd, waardoor de gegevens van de Disney API worden opgehaald op basis van het ingevoerde paginanummer en de lijst -->

 met personages wordt bijgewerkt op basis van de ontvangen gegevens.

### Stap 5: Behandel de invoer van de gebruiker en haal API-gegevens op
De bovenstaande code stelt een gebeurtenisluisteraar in op het invoerveld om wijzigingen in het paginanummer te detecteren. Wanneer de gebruiker een getal invoert, wordt de gebeurtenisluisteraar geactiveerd en haalt vervolgens de gegevens op van de Disney API op basis van het ingevoerde paginanummer. De API-URL bevat een queryparameter `lang=nl` om de taal in te stellen op Nederlands.

### Stap 6 Werk de HTML bij met de informatie van de personages
Na ontvangst van de API-reactie doorloopt de code elk personage en genereert dynamisch HTML-elementen. De naam en afbeelding van het personage worden toegevoegd aan de HTML-structuur binnen de `charactersList`-container.

### Stap 7: Foutafhandeling
De code bevat een `.catch()`-blok om fouten die zich tijdens het API-verzoek kunnen voordoen af te handelen. Als er een fout optreedt, wordt deze gelogd in de console.

Conclusie:
Door deze stapsgewijze handleiding te volgen, heb je geleerd hoe je de Fetch API kunt gebruiken om gegevens op te halen van een API en een lijst met Disney-personages in het Nederlands kunt genereren. Je hebt nu een functionele applicatie waarmee je Disney-personage-informatie kunt ophalen en weergeven in de gewenste taal. Voel je vrij om de applicatie verder te verbeteren, zoals het toevoegen van paginering of extra functies, afhankelijk van je vereisten.


# Bronnen
- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- https://dmitripavlutin.com/fetch-with-json/
- https://www.educative.io/answers/what-is-the-fetch-api
