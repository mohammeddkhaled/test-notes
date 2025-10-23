// E132Pmcdwercons

const smallalpha=["a", "b", "c", "d", "e", "f",]
const Capsalpha=["A", "B", "C", "D", "E", "F",]
const num=[1,2,3,4,5,6,7,8,9,10];
// console.log(Math.random())

// let randomnum=Math.floor(Math.random()*num.length)


let captcha=""
for (let index = 0; index < 2; index++) {
    // const element = array[index];
    let numIndex= Math.floor
    (Math.random()*num.length)
;
let CapsIndex= Math.floor
    (Math.random()*Capsalpha.length)
;
let SmallIndex= Math.floor
(Math.random()*smallalpha.length)
;

    
    captcha=captcha+num[numIndex]+Capsalpha[CapsIndex]+smallalpha[SmallIndex]
}
console.log(captcha);
// document.body.textContent = captcha
let userInput=prompt("please enter capthca")
captcha===userInput?console.warn("Correct capthca"):console.error("Wrong Captcha")


    // console.error("Wrong CAPTCAH");
    
// khaled