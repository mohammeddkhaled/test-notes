let nArr=[] //initializing an empty array
 function capitalizeAll(str) { // taking arguement 
  let arr=str.split(" ") //the given string is converted to arrays with space delimiter
  for (let index = 0; index < arr.length; index++) { 
    const element = arr[index].charAt(0).toUpperCase(); //converting each element first letter to caps
    const CompleteEl=element+arr[index].slice(1) //using the first letter caps and adding remaining lettrs of array
    nArr.push(CompleteEl) //adding the element to array initialized 
    
  }
 }
capitalizeAll("is this working")
let capitalizedString=nArr.join(" ") //joining array element to string with space between
console.log(capitalizedString);
       

// can do like this also using map method on array
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
