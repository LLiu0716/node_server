import router from './index'

import user from '../api/user'

import { get_user, get_user_list } from '../method/user'

const UserRouter = router

UserRouter.get( user.USER, ( req, res ) => {
  get_user( req, res )
} )

UserRouter.get( user.USER_LIST, ( req, res ) => {
  get_user_list( req, res )
} )

export default UserRouter
