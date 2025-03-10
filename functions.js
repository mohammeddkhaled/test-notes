// // let a=2
// // let b=5

// // function add(num1,num2){
// //     console.log(num1+num2);
    
// // }

// // add(a,b)
// // add(1,2)
// // add(4,5)
// // add(42,51)
// // let first="hello world"
// // let last="bye world"

// // function greet(name1,name2){
// //     console.log(`Hello ${name1}, ${name2}`);
    
// // }

// // greet(first,last) 

// //variables equality, value, refrence, 
// //array adding, object new property.
// //arrow functions, spread operator,



const arry=[
    {
        name:"dog", age:20   
    },
    {
        name:"cat", age:15   
    },
    {
        name:"pegion" ,age:30   },
    {
        name:"lion", age:30   
    },
]



arry.forEach(({name,age})=>{
    console.log(` name is ${name} and age is ${age},`);
})
// // name is lion and age is 30,
// //nane is pegion,

// for (let index = 0; index < arry.length; index++) {
//     // if (arry[index].age) {
//     //     console.log(` name is ${arry[index].name} and age is ${arry[index].age},`);
        
//     // }
//     // else{
//     //     console.log(` name is ${arry[index].name},`);
//     // }
//     // 
//     // ternary operator
//     // //(condition)? if true value : false value
//     arry[index].age? (console.log(` name is ${arry[index].name} and age is ${arry[index].age},`)):( console.log(` name is ${arry[index].name},`))

    
// }

// let a=11
// let b=22
// let c=3

// a>b ? ((a>c)?(console.log("a is greatest")) : (console.log(("c is greatest")))): ((b>c)?(console.log("b is greatest")) : (console.log(("c is greatest")))) 

// function addTwoNumbers(param1,param2) {
//    return  param1+param2
// }

const addTwoNumbers=(a,b)=> a+b
const greet=(a)=> `hello ${a}`

console.log(addTwoNumbers(1,65));
console.log(greet("tajamul"));


// const addTwoNumbers 