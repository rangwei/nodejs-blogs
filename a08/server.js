const http = require('http');
const url = require('url');

const fibonacci = n => { 
    if (n === 1 || n === 2) return 1; 
    else return fibonacci(n-1) + fibonacci(n-2); 
}

http.createServer(
    (req, res) => {
        const urlP = url.parse(req.url, true);
        let fibo;
        res.writeHead(200, {'Content-Type': 'text/plain'});
        if (urlP.query['n']) {
            fibo = fibonacci(urlP.query['n']);
            res.end(`Fibonacci ${urlP.query['n']} = ${fibo}`);
        }else {
            res.end('USAGE: http://localhost:8124?n=##');
        }
    }
).listen(8124, 'localhost');

console.log('Server is running');
