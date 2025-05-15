const usersController = require('../controllers/usersController')
module.exports = (app) =>{
    app.post('/api/users/create', usersController.register)
       app.get('/api/users/login', usersController.login)
}