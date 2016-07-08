var formidable = require('formidable')
var fs = require('fs')

var start = (response, postData) => {
  console.log('Request handler \'start\' was called.')

  var body = '<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /></head><body><form action="/upload" enctype="multipart/form-data" method="post"><input type="file" name="upload" multiple="multiple" /><input type="submit" value="Submit text" /></form></body></html>'

  response.writeHead(200, {'Content-Type': 'text/html'})
  response.write(body)
  response.end()

  // exec('find /', { timeout: 10000, maxBuffer: 20000 * 1024 }, (err, stdout, stderr) => {
  //   response.writeHead(200, {'Content-type': 'text/plain'})
  //   response.write(stdout)
  //   response.end()
  // })
}

var upload = (response, request) => {
  console.log('Request handler \'upload\' was called.')
  var form = new formidable.IncomingForm()
  form.parse(request, (error, field, files) => {
    console.log('parsing done')
    if (error) {
      console.log('error', error)
    }
    fs.rename(files.upload.path, '/tmp/test.png', (error) => {
      if (error) {
        // fs.unlink('/tmp/test.png')
        fs.rename(files.upload.path, '/tmp/test.png')
      }
    })
    response.writeHead(200, {'Content-type': 'text/html'})
    response.write('Receive image<br/>')
    response.write('<img src="/show" />')
    response.end()
  })
}

var show = (response) => {
  console.log('Request handler "show" was called.')
  response.writeHead(200, {'Content-Type': 'image/png'})
  fs.createReadStream('/tmp/test.png').pipe(response)
}

module.exports.start = start
module.exports.upload = upload
module.exports.show = show
