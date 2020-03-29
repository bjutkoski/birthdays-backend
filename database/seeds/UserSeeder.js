'use strict'

const User = use('App/Models/User')

class UserSeeder {
  async run () {
    await User.create({
      email: 'admin@email.com',
      password: '123456',
      name: 'Admin',
      birthdate: '1970-01-01',
      admin: true
    })
  }
}

module.exports = UserSeeder
