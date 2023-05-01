# Using the Fetch API

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

De body is 

# Bronnen
- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- https://dmitripavlutin.com/fetch-with-json/
- https://www.educative.io/answers/what-is-the-fetch-api
