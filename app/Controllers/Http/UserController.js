'use strict'

const User = use('App/Models/User')

class UserController {
  async index ({ request }) {
    const users = await User
      .query()
      .with('file')
      .orderBy('birthday')
      .fetch()
    return users
  }

  async store ({ request }) {
    const data = request.only([
      'username',
      'email',
      'password',
      'description',
      'birthday',
      'file_id',
      'admin'
    ])

    const user = await User.create(data)
    await user.load('file')

    return user
  }
}

module.exports = UserController
