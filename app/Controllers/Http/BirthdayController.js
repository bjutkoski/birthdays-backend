'use strict'

const User = use('App/Models/User')

class BirthdayController {
  async index ({ request }) {
    const { start, end } = request.get()
    const [startMonth, startDay] = start.split('-')
    const [endMonth, endDay] = end.split('-')

    const users = await User
      .query()
      .with('avatar')
      .whereRaw("strftime('%m-%d',birthdate) between ? and ?",
        [`${startMonth}-${startDay}`, `${endMonth}-${endDay}`])
      .orderByRaw("strftime('%m',birthdate), strftime('%d',birthdate)")
      .fetch()
    return users
  }
}

module.exports = BirthdayController
