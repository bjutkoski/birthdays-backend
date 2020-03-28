'use strict'

const User = use('App/Models/User')

class UserController {
  async index ({ request }) {
    const users = await User
      .query()
      .with('avatar')
      .orderBy('birthday')
      .fetch()
    return users
  }

  async store ({ request }) {
    const data = request.only([
      'email',
      'password',
      'name',
      'description',
      'birthday',
      'avatar_id',
      'admin'
    ])

    const user = await User.create(data)
    await user.load('avatar')

    return user
  }
}

module.exports = UserController
