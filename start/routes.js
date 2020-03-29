'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
Route.post('sessions', 'SessionController.store')
Route.get('files/:id', 'FileController.show')

Route.group(() => {
  Route.post('files', 'FileController.store')

  Route.get('birthdays', 'BirthdayController.index')

  Route.put('profile', 'ProfileController.update')
}).middleware(['auth'])

Route.group(() => {
  Route.get('users', 'UserController.index')
  Route.get('users/:id', 'UserController.show')
  Route.post('users', 'UserController.store')
  Route.put('users/:id', 'UserController.update')
  Route.delete('users/:id', 'UserController.destroy')
}).middleware(['auth', 'admin'])
