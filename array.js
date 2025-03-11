import { baseUrl } from "./promise.js";

const d=[1,2,3,4,5];

d.unshift("unshift item"); //adding item to the start of array 
d.push("push item");//adding item to the Last of array
let e=d.shift() //removing item from start of array
// console.log(d); // logging which value was removed 

// stack, pop, push
let stack=[1,2,3,4,5];
stack.push("324") // adding to last of array
stack.pop() //removing last element of array

//queu shift unshift
let queue=[1,2,3,4,5];
queue.unshift("unshift item"); //adding to start of array
queue.shift() //removing from start of array

const arr1=[1,2,3,4,5]
export const arr2=[...arr1,6,7,8]

arr1.forEach((e)=>{
    console.log(e);
    
})
const maparray=arr1.map((e)=>{
return e*2;
    
})

const objArray=[{
    name:"john",
    age:25
},
    {
    name:"sarah",
    age:30
}]

const FetchData= async()=>{
    try {
        let data=await fetch(`${baseUrl}/todos`)
        let res=await data.json()
        const completedTodos= res.filter((e)=>{
            return e.completed===true
        })
        console.log(completedTodos);
    } catch (error) {
        console.log(error);
        
    }
}
FetchData()
const filterArray=objArray.filter((e)=>(e.age<26))
console.log(filterArray);


