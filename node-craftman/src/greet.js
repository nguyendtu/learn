'use strict'

var greet = (name) => {
  if (typeof name === 'undefined') {
    return 'Hello world!'
  }

  return 'Hello ' + name + '!'
}

module.exports = greet
