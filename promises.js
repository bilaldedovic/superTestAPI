const request = require("native-request");
console.log("fetching data")

const getTodos = () =>{

    return new Promise((resolve,reject) =>{
        
        request.get("https://jsonplaceholder.typicode.com/todos/1", (err,data)=>{
            
            if (err) reject(data)
          resolve(data)
        })
    })
}

getTodos().then(response =>{
    console.log(response)
}).catch((err)=>{
    console.log("There is error in api " + err)
});

