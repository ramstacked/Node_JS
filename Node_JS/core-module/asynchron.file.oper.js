const fs=require("fs");
//! write File (Asynchronous)
 fs. writeFile("asyn_file_test.txt","Hello Nodejs july,20,2025 , asynchron",(err) =>{
    if (err) throw err;
    console.log("file written complted")

    //Read file (Asynvhronous)
    fs.readFile("asyn_file_test.txt",{encoding:"utf-8"},(err,data)=>{
           console.log("Read file Async",data);
    })
 });  
  console.log("file written  processing")
   