#!/usr/bin/env node

require('./index')(
    require('optimist')
    .usage('Get related information for specified music track.')
    .boolean('verbose')
    .boolean('youtube')
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
    .describe('youtube', 'Find the first YouTube video id for specified music track artist and title')
    .argv
);
