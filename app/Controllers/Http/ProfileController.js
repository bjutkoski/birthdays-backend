'use strict'

const User = use('App/Models/User')

class ProfileController {
  async update ({ request, auth }) {
    const user = await User.findOrFail(auth.user.id)

    const data = request.only([
      'email',
      'password',
      'name',
      'description',
      'birthdate',
      'avatar_id',
      'admin'
    ])

    user.merge({ ...data })
    await user.save()
    await user.load('avatar')

    return user
  }
}

module.exports = ProfileController
