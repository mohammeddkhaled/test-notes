//new methods query selector to select an eleemnt
const classElement=document.querySelector('.xyz')
const idEleemtn=document.querySelector('#theP')
const nameElement=document.querySelector('p')

//inserting data
// textContent & innerHtml
classElement.innerHTML = 'this is the class paragrph <strong> strong here </strong>'
idEleemtn.textContent='this is the class paragrph <strong> strong here </strong>'

//creating an element
const newElement=document.createElement('h1')
newElement.textContent='this is a new h1'
newElement.className='newDiv'
//attaching the newly created element to body
document.body.appendChild(newElement)
// document.body.append(newElement,"thsi is a h1")

//adding classses to class list
newElement.classList.add('good', 'text-4xl')//adding class to a class list
// newElement.classList.remove('hidden')//remove class to a class list
newElement.classList.toggle('hidden')//toggle (add is not therer, remove if added). class to a class list


//2steps to add a new element to a particular parent element.
const newP=document.createElement('p')//creating a eleemnt
newP.textContent="this is the new P which will be attached to a div"
// const selectedDiv=document.querySelector('.abc')//selecting the parent
// selectedDiv.appendChild(newP) //appending the new element to exsiting 
//works the same as above 2 line
document.querySelector('.abc').appendChild(newP)

const newSpan=document.createElement('span')//creating a eleemnt
newSpan.textContent="this is the new span which will be attached to a div"
document.querySelector('.abc').appendChild(newSpan)

//remove an element
// removeChild() , remove()
// newP.remove()
document.querySelector('.abc').removeChild(newP)

