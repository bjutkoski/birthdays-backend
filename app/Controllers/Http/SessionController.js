'use strict'

const User = use('App/Models/User')

class SessionController {
  async store ({ request, response, auth }) {
    const { email, password } = request.all()

    const { token } = await auth.attempt(email, password)
    const user = await User.findByOrFail('email', email)
    await user.load('avatar')

    return { token, user }
  }
}

module.exports = SessionController
