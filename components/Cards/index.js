// STEP 3: Create Article cards.
// -----------------------
// Stduy the response data you get back, closely.
// This won't be as easy as just iterating over an array though.
//
//   </div>
// </div>
//
/*
articles:
javascript: (4)
bootstrap: (3)
technology: (3)
jquery: (3) 
node: (2) 
*/



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
    span.textContent = `By ${comp.name}`; 
    
    
    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(img_container)
    author.appendChild(span)
    img_container.appendChild(image_of_authors)
    
    
    return card;
}

// Create a card for each of the articles and add the card to the DOM.
const cards_article = document.querySelector('.cards-container')

// Send an HTTP GET request to the following address: 
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then((res => {
    console.log(res)
    
    // according to return of req
//    this time res.<item> works
    const articles = res.data.articles;
    console.log(articles)

    // You will be creating a component for each 'article' in the list.
    const article_list = Object.entries(articles);
    console.log(article_list)
   
    //use return for iteration component
    article_list.forEach( el => {
    
           cards_article.appendChild(cardCreation(el))
      })
    // })



}))

.catch((err => {
    console.log(err)
}))
