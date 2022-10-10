# Express + SASS + Babel + Eslint

Workflow supporting Express server, Babel (ES6), Eslint, SASS (scss).

### Setup

Uses an express.js server over HTTPS to run input and output devices via the browser including cameras, microphones and speakers.

First, create server.key and server.crt files.

```bash
$ openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./sslcert/server.key -out ./sslcert/server.crt
```

Then install express package and run.

```bash
$ npm install
$ npm run start
```

Open http://localhost:4000 to view.
