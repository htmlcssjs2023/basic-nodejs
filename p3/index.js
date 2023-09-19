const http = require("http");
const PORT = 200;
const hostName = "127.0.0.1";

const server = http.createServer((req, res)=>{
    res.end("<h1>Hello World</h1>");
});


server.listen(PORT, hostName,()=>{
    console.log(`Server is running at: http://${hostName}:${PORT}`);
});