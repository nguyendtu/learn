var http = require('http')
var url = require('url')

var start = (route, handle) => {
  var onConnect = (request, response) => {
    var pathName = url.parse(request.url).pathname
    console.log('Request for', pathName, 'received')

    route(handle, pathName, response, request)
  }

  http.createServer(onConnect).listen(8888)
  console.log('Server has started')
}

module.exports.start = start
