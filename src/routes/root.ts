'use strict';
import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { request } from 'http';
// import check_is_admin_and_redirect from '../modules/user_management/user_admin/services/check_is_admin_and_redirect';
// const fs = require('node:fs');
module.exports = async function (fastify: FastifyInstance) {
    fastify.get('/', async (_req: FastifyRequest, reply: FastifyReply) => {
        // return reply.view('website/index.ejs');
        console.log('root');
        return reply.send('root');
        // return reply.redirect('/admin');
    });
};
