const https = require('node:https');
const fs = require('fs');
const options = {
    port: 3000,
    key: fs.readFileSync('./server.pem'),
    cert: fs.readFileSync('./server.crt'),
    ca: [
        fs.readFileSync('./client.crt'),
    ],
    requestCert: true,
    passphrase: 'test123',
};

https.createServer(options, (req, res) => {
    res.writeHead(200,{ });
    res.end('Welcome');

}).listen(options.port, () => {
    console.log(`Port : ${options.port}`)
});