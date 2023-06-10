console.log('script loaded');
const charactersList = document.querySelector('.characters');
const pageNumber = document.querySelector('#page-number');
console.log(pageNumber);


pageNumber.addEventListener('input' , (e) => {
    e.preventDefault();
    let page =  pageNumber.value;
    console.log(page);
    
})

fetchApi()

function fetchApi(){
    let html = '';
    pageNumber.addEventListener('input', (e) => {
        e.preventDefault();
        let page = pageNumber.value;
        console.log(page);

    fetch(`https://api.disneyapi.dev/character?page=${page}`)
        .then(response => response.json())
        .then(data =>{
            // console.log(data)
           displayData(data)
        })
        .catch(error => console.log(error)

        )}
        )
       
    }
            // let html =  `
            // <li>
            //     <h2>${data.data[0].name}</h2>

            //     <img src="${data.data[0].imageUrl}" alt="${data.data[0].name}">
            // </li>
            // `
            // charactersList.insertAdjacentHTML('beforeend', html)







function displayData(data) {
    let html = '';
    data.data.forEach(character => {
        console.log(character.name)

        html = `
            <li>
                <h2>${character.name}</h2>

                <img src="${character.imageUrl}" alt="${character.name}">
            </li>
            `;

        charactersList.insertAdjacentHTML('beforeend', html)
})
}