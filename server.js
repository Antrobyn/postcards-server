const http = require('http');
const app = require('./lib/app');
const connect = require('./lib/connect');
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/postcards';

connect(MONGODB_URI);

const server = http.createServer(app);
const port = process.env.PORT || 3000;

server.listen(port, () => {
    // eslint-disable-next-line
  console.log('server running on', server.address().port);
});