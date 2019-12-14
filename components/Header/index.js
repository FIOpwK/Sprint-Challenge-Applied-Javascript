// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const header = document.createElement('div')
    header.classList.add('header')

    const span = document.createElement('span')
    span.classList.add('date')

    const heading = document.createElement('h1')
    heading.textContent = 'Lambda Times';

    const span2 = document.createElement('span')
    span2.classList.add('temp')

    header.appendChild(span)
    header.appendChild(heading)
    header.appendChild(span2)

    return header;
}

const headerComponent = document.querySelector('.header-container')
headerComponent.appendChild(Header());

// console.log(Header())