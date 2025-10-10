const connect = require('connect');
const url = require('url');

const app = connect();

function calculate(req, res) {
 
    const queryObject = url.parse(req.url, true).query;
    
    const method = queryObject.method;
    const x = parseFloat(queryObject.x);
    const y = parseFloat(queryObject.y);
    
    if (isNaN(x) || isNaN(y)) {
        res.writeHead(400, {'Content-Type': 'text/html'});
        res.end('<h1>Error: x and y must be valid numbers</h1>');
        return;
    }
    
    let result;
    let operator;
    
    switch(method) {
        case 'add':
            result = x + y;
            operator = '+';
            break;
        case 'subtract':
            result = x - y;
            operator = '-';
            break;
        case 'multiply':
            result = x * y;
            operator = '*';
            break;
        case 'divide':
            if (y === 0) {
                res.writeHead(400, {'Content-Type': 'text/html'});
                res.end('<h1>Error: Division by zero is not allowed</h1>');
                return;
            }
            result = x / y;
            operator = '/';
            break;
        default:
            res.writeHead(400, {'Content-Type': 'text/html'});
            res.end('<h1>Error: Invalid method. Use: add, subtract, multiply ou divide</h1>');
            return;
    }
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`<h1>${x} ${operator} ${y} = ${result}</h1>`);
}

app.use('/lab2', calculate);

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});