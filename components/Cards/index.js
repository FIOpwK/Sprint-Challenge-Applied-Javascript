// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
//
//   </div>
// </div>
//


// Create a card for each of the articles and add the card to the DOM.
const cards_article = document.querySelector('.cards-container')

// Create a function that will create DOM components
// comp ~ component(s)
function cardCreation(comp) {
    
    // <div class="card">
    const card = document.createElement('div')
    card.classList.add('card')
    
    //   <div class="headline">{Headline of article}</div>
    const headline = document.createElement('div')
    
    //   <div class="author">
    const author = document.createElement('div')
    author.classList.add('author')
    
    //     <div class="img-container">
    const img_container = document.createElement('div')
    img_container.classList.add('img-container')
    
    //       <img src={url of authors image} />
    const image_of_authors = document.createElement('img')
    image_of_authors.src = '';
    //     </div>
    //     <span>By {authors name}</span>
    const span = document.createElement('span')
    span.textContent = `By ${res.name}`; 


    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(img_container)
    author.appendChild(span)
    img_container.appendChild(image_of_authors)
    
    
    return card;
}

