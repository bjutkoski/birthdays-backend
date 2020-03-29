'use strict'

const Factory = use('Factory')
const { format } = use('date-fns')
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

    Factory.blueprint('App/Models/User', async (faker) => {
      return {
        name: faker.name(),
        email: faker.email(),
        password: faker.password(),
        birthdate: format(faker.birthday(), 'yyyy-MM-dd')
      }
    })

    await Factory
      .model('App/Models/User')
      .createMany(20)
  }
}

module.exports = UserSeeder
