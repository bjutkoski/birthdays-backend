'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class UnauthorizedException extends LogicalException {
  handle (error, { response }) {
    if (error) console.log(error)

    response
      .status(401)
      .send('Unauthorized')
  }
}

module.exports = UnauthorizedException
