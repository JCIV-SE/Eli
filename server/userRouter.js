const userRouter = require('express').Router();
const { createUser, loginUser } = require('./UserController');

userRouter.route('/sign-up').post(createUser);

userRouter.route('/login').post(loginUser);

module.exports = userRouter;
