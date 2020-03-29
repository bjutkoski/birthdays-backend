'use strict'

const User = use('App/Models/User')

class UserController {
  async index () {
    const users = await User
      .query()
      .with('avatar')
      .orderBy('birthday')
      .fetch()
    return users
  }

  async show ({ params }) {
    const user = await User.findOrFail(params.id)
    await user.load('avatar')

    return user
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

  async update ({ request, params }) {
    const user = await User.findOrFail(params.id)

    const data = request.only([
      'email',
      'password',
      'name',
      'description',
      'birthday',
      'avatar_id',
      'admin'
    ])

    user.merge({ ...data })
    await user.save()
    await user.load('avatar')

    return user
  }
}

module.exports = UserController
