var google = require('googleapis');

var handleError = function(err) {
    process.stderr.write(err.toString());
    process.exit(1);
};

module.exports = function(cfg) {
    google.discover('youtube', 'v3').execute(function(err, client) {
        if(err) {
            return handleError(err);
        }
        var params = {
            part: 'id',
            maxResults: 1,
            order: 'relevance',
            type: 'video',
            q: cfg.artist + ' ' + cfg.title + ' video',
        };
        if(cfg.verbose) {
            process.stderr.write('Search query: ' + params.q + '\n');
        }

        var request = client.youtube.search.list(params).withApiKey(cfg.apiKey);

        request.execute(function(err, response) {
            if(err) {
                return handleError(err);
            }
            process.stdout.write(response.items[0].id.videoId + '\n');
        });
    });
};
