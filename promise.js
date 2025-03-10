
const baseUrl="https://jsonplaceholder.typicode.com"
// let data=fetch(`${baseUrl}/todos/1`)
//       .then(response => response.json())
//       .then(json => console.log(json)).catch(err => console.log(err));

//       console.log(data);
      

    //   const fetchData=async() =>{

       
    //      }

      fetchData()
      

    async  function fetchData(){
      try {
        let data1=await fetch(`${baseUrl}/todos/2`)
        let res=await data1.json()
         console.log(res);
      } catch (error) {
        console.log(error);
        
      }
        
      }
    //   console.log();
      

      //promise : resolve reject
      // .then(resolve =>)
        // .catch(reject =>)