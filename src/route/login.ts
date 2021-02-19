import router from './index'

import login from '../api/login'

import { post_login, post_register } from '../method/login'

const LoginRouter = router

LoginRouter.post( login.LOSIN, ( req, res ) => {
  post_login( req, res )
} )

LoginRouter.post( login.REGISTER, ( req, res ) => {
  post_register( req, res )
} )

export default LoginRouter
