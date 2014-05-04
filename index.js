var Hapi = require('hapi');

var server = new Hapi.Server(process.env.PORT || 4000, 'localhost', {
  views: {
    engines: {
      jade: "jade"
    },
    path: "./views"
  }
});

server.route([{
  method: 'GET',
  path: '/',
  handler: function(request, reply) {

    reply.view('index', {
      name: request.query.name
    });
  }
}]);

server.route({
  path: "/build/{path*}",
  method: "GET",
  handler: {
    directory: {
      path: "./build",
      listing: false,
      index: false
    }
  }
});

server.start();

