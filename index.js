var Hapi = require('hapi');
var server = Hapi.createServer('localhost', process.env.PORT || 4000);

server.route([{
  method: 'GET',
  path: '/',
  handler: function(request, reply) {
    reply('tools!');
  }
}]);

server.start();

