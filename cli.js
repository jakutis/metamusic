#!/usr/bin/env node

require('./index')(
    require('optimist')
    .usage('Find the first YouTube video id for specified music track artist and title.')
    .boolean('verbose')
    .string('apiKey')
    .string('artist')
    .string('title')
    .demand('apiKey')
    .demand('artist')
    .demand('title')
    .alias('verbose', 'v')
    .alias('apiKey', 'k')
    .alias('artist', 'a')
    .alias('title', 't')
    .describe('apiKey', 'Google API key for server applications - get it from Google Developers Console')
    .describe('verbose', 'Output diagnostic information')
    .describe('artist', 'Track artist')
    .describe('title', 'Track title')
    .argv
);
