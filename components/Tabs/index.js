// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// element to append return from function
const tabs = document.querySelector('.topics')

// create new tab function
function newTabComponent(el) {
    
    const tab = document.createElement('div')
    tab.classList.add('tab')
    tab.textContent = el;

    

    return tab;
}


// axios work
axios.get(' https://lambda-times-backend.herokuapp.com/topics')
.then((res) => {
    console.log(res)

    // res.(whatever we get back)
    const newTabComponent = res.topics;

    newTabComponent.forEach(element => {
        tabs.append(newTabComponent(element))
    });

})
.catch((err) => {
    console.log(err)
})
