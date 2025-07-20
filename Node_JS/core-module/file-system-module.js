const fs=require("fs");
 //! write File (Synchronous)
 fs. writeFileSync("test.txt","Hello Nodejs july,20,2025");// first it will excute it  and other will excute 
  console.log("file written") 

//! Read file - blocking -buffer
//? encoding means convered the forward to other in many type

const data=fs.readFileSync("test.txt",{encoding:"utf-8"});
console.log("Read Synchronous",data);
