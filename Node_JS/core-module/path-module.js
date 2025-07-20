const path=require("path")
const filepath ="user/ramkumar/project/demo/app.js" ;

console.log("Base Name:",path.basename(filepath));
console.log(" Directory Name:",path. dirname(filepath));
console.log(" Directory Name:",path. extname(filepath));


//test.txt

// console.log('JoinedPath',__dirname+'\\test.txt');
console.log("Joined path",path.join(__dirname,"demo","test.txt"))