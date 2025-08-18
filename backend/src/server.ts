import { createServer } from 'node:http';
import config from './config';
import createApp from './app';
import createIO from './io';

const app = createApp();
const server = createServer(app);
const io = createIO(server);

server.listen(config.port, () => {
    console.log(__dirname);
});