'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const UnauthorizedException = use('App/Exceptions/UnauthorizedException')

class Admin {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ auth }, next) {
    const { isAdmin } = auth.user.toJSON()
    if (!isAdmin) {
      throw new UnauthorizedException()
    }

    await next()
  }
}

module.exports = Admin
