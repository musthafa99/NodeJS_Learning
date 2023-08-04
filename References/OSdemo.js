const os=require('os');

//know the platform
console.log(os.platform());

// CPU Architectur.
console.log(os.arch());

//CPU core Info
console.log(os.cpus());

// CPU Total memory
console.log(os.totalmem());

// CPU Free memory
console.log(os.freemem());

//home dir
console.log(os.homedir());

//Uptime
console.log(os.uptime());