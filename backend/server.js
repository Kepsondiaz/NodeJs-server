const http = require('node:http'); // import http module
const fs = require('fs'); // import fs module
const path = require('path'); // import path module


const newServer = http.createServer();

filePath = path.join('../frontend', 'index.html');
fs.readFile(filePath, {encoding: 'utf-8'}, (err, data) => {

    if(!err){
            newServer.on('request', (Request, Response) => {
                Response.writeHead(200, {'content-type': 'text/html'});
                Response.end(data);
            });
    }else{
         response.writeHead(404, {'content-type': 'text/html'})
         response.end();
    }

})





newServer.listen(8080);