const os = require("os");
console.log("free memory", os.freemem()/ 1024 / 1024 / 1024);
//1kb = 1024 bytes
//1mb =1024 kb
//1gb = 1024 mb
console.log("total memory in gb",os.totalmem()/ 1024 / 1024 / 1024);
console.log("version",os.version());
console.log("cpus", os.cpus());

