const http = require('http');
const crypto = require('crypto');

const { v4: uuidv4 } = require('uuid');
var fs = require('fs');



function hashString(text) {
    const hash = crypto.createHash('sha256').update(text).digest('hex');
    return hash;
}

const server = http.createServer((req, res) => {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString(); // convert Buffer to string
    });
    req.on('end', () => {
        let { email, name, pass, type } = JSON.parse(body); // parse JSON
        let hemail = hashString(email);
        let path = './creds/' + hemail + '.json';
        if (type === 'sign-up') {
            if (fs.existsSync(path)) {
                const responseData = {
                    'result': 'failed',
                    'reason': 'already-exists'
                };

                res.setHeader("Content-Type", "application/json");
                res.writeHead(200);
                res.end(JSON.stringify(responseData, null, 3));
            } else {
                let hpass = hashString(email+pass);
                let id = uuidv4();
                let cont = { email, name, hpass, id };
                fs.writeFileSync(path, JSON.stringify(cont));

                const responseData = {
                    'result': 'success',
                    'reason': id
                };

                res.setHeader("Content-Type", "application/json");
                res.writeHead(200);
                res.end(JSON.stringify(responseData, null, 3));
            }
        }
        else if (type === 'log-in') {
            if (fs.existsSync(path)) {
                let hpass = hashString(email+pass);
                let ct = fs.readFileSync(path)
                cont = JSON.parse(ct);

                if (cont.hpass === hpass) {


                    const responseData = {
                        'result': 'success',
                        'reason': cont.id
                    };
    
                    res.setHeader("Content-Type", "application/json");
                    res.writeHead(200);
                    res.end(JSON.stringify(responseData, null, 3));
                }
                else {
                    const responseData = {
                        'result': 'failed',
                        'reason': 'invalid-cred'
                    };

                    res.setHeader("Content-Type", "application/json");
                    res.writeHead(200);
                    res.end(JSON.stringify(responseData, null, 3));
                }
            }
            else {
                const responseData = {
                    'result': 'failed',
                    'reason': 'invalid-cred'
                };

                res.setHeader("Content-Type", "application/json");
                res.writeHead(200);
                res.end(JSON.stringify(responseData, null, 3));
            }
        }

    });
});

server.listen(10000, () => {
    console.log('Server is listening on port 10000');
});
