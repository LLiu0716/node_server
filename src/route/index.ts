import { Router } from 'express'

import {
  get_login,
  get_user,
  get_user_list,
  get_imgs,
  get_home
} from '../method'

const router = Router()

// 没有挂载路径的中间件,通过该路由的每个请求都会执行该中间件
router.use( ( req, res, next ) => {
  console.log( 'Time:', Date.now() )
  next()
} )

// 一个中间件栈,显示任何指向/user/:id的HTTP请求的信息
router.use(
  '/user',
  ( req, res, next ) => {
    console.log( '777' )
    next()
  },
  ( req, res, next ) => {
    console.log( 'Request Type', req.method )
    next()
  }
)

router.get( '/login', ( req, res ) => {
  get_login( req, res )
} )

router.get( '/user', ( req, res ) => {
  get_user( req, res )
} )

router.get( '/imgs', ( req, res ) => {
  get_imgs( req, res )
} )

router.get( '/user/list', ( req, res ) => {
  get_user_list( req, res )
} )

router.get( '/home', ( req, res ) => {
  get_home( res, res )
} )

export default router
