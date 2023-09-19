const http = require("http");
const fs = require("fs");
const PORT = 3000;
const hostName = "127.0.0.1";

const server = http.createServer((req,res)=>{
    const fileHandler = (statusCode, fileLocation)=>{
        fs.readFile(fileLocation,(err, data)=>{
            res.writeHead(statusCode, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        })
    }
    if(req.url === '/'){
        fileHandler(200, "views/index.html");
    }
    else if(req.url === '/about'){
        fileHandler(200,"views/about.html");
    }
    else if(req.url === '/contact'){
        fileHandler(200,"views/contact.html");
    }
    else if(req.url === '/demo'){
        fileHandler(200,"views/demo.html");
    }
    else if(req.url === '/service'){
        fileHandler(200, "views/service.html")
    }
});

server.listen(PORT,hostName,()=>{
    console.log(`Server is running now at: http://${hostName}:${PORT}`);
})
