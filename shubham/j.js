var http=require('http');
http.createServer(
    function(req,res){
        console.log('Hi');
        res.writeHead(200,{'Content-type':'text/html'});
        res.end('Hello moni');
    }
).listen(8080);
