//khai báo
import { Router } from 'express'
import { loginValidator } from '../middlewares/users.middlewares'
import { loginController } from '~/controllers/users.controllers'
const usersRouter = Router()

//router
usersRouter.get('/login', loginValidator, loginController)

export default usersRouter
