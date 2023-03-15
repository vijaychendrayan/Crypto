const https = require('node:https');
const fs = require('fs');

const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/',
    key: fs.readFileSync('./client.pem'),
    cert: fs.readFileSync('./client.crt'),
    // ca:[
    //     fs.readFileSync('./server.crt'),
    // ],
    rejectUnauthorized: false,
    passphrase:'test123'
}

const req = https.request(options, (res) =>{
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);

    res.on('data', (d) =>{
        process.stdout.write(d);
    });
});

req.on('error', (e)=>{
    console.error(e);
});

req.end()
