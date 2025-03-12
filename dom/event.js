// something triggered by mouse ,touch, keyboard, drag, copy, window resize, window scroll,onload, focus

//method 1
//writing onclick or onkeypress directly on element.
//    <button id="btn" onclick="btnClick()">js button events</button>


//method 2
//  method 2 adding event listener to the element
document.querySelector('#btn2').addEventListener('click',btnClick)
document.querySelector('#btn2').addEventListener('click',()=> console.log('button clicked'))

//on click on a button i want to input data to P tag where class name is xyz

function btnClick(){
 document.querySelector('.xyz').textContent="hello world" 
}

//when eveer input has any value
const inp1=document.querySelector('#inp1')
inp1.addEventListener('keyup',()=>document.querySelector('#theP').textContent=inp1.value)


