const os=require('os');


console.log("platform:",os.platform());
console.log("platform:",os.arch());
console.log("platform:",os.platform());
console.log("total Memory:",Math.round(os.totalmem() / 1024 **3),'GB');

console.log("Free memory :",Math.round(os.freemem()/ 1024 **3) ,'GB');