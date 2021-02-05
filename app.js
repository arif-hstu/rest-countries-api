fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => {
    data.forEach(country => {
        createHtmlElement(country);
    });
});

const createHtmlElement = country => {
    const cardHolder = document.getElementById('card-holder');
        
        const card = document.createElement('div');
        card.className = 'card';
        const cardInfo =`
        <img src='${country.flag}'>
        <h3>${country.name}</h2>
        <div class='country-details'>
        <p>Capital: ${country.capital}</p>
        <p>Population: ${country.population}</p>
        <p>Area: ${country.area}</p>
        </div>
        `;
        card.innerHTML = cardInfo;
        cardHolder.appendChild(card);
}


const changeTheme = () => {

    const bodyTag = document.getElementsByTagName('body');
    const card = document.getElementsByClassName('card');
    const head = document.getElementById('head');
    
    if(head.style.color === 'white'){
        window.location.reload();
    }
    
    head.style.color = 'white'
    bodyTag[0].style.color = '#202D36';
    bodyTag[0].style.backgroundColor = '#F3F3F3';

    for (let i = 0; i < card.length; i++) {
        const element = card[i];
        element.style.backgroundColor = '#fff'
    }

}