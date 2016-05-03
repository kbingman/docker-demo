'use strict';

const Hapi = require('hapi');
const inert = require('inert');

const PORT = 3000;
const server = new Hapi.Server();
server.connection({ port: PORT });

server.register(inert, (err) => {
    if (err) { throw err; }

    server.route({
        method: 'GET',
        path: '/app.js',
        handler: function (request, reply) {
            reply.file('./public/app.js');
        }
    });
});

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello, world!');
    }
});

server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
        let name = encodeURIComponent(request.params.name);
        reply(`Hello, ${name}`);
    }
});

server.start((err) => {
    if (err) { throw err; }
    console.log('Server running at:', server.info.uri);
});
