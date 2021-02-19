import { Router } from 'express'

import Jwt from '../token'

const router = Router()

// 没有挂载路径的中间件,通过该路由的每个请求都会执行该中间件
router.use( ( req, res, next ) => {
  console.log( req.url, req.method )
  switch ( req.method ) {
    case 'GET':
      console.log( req.query )
      break
    default:
      console.log( 'body >  ', req.body )
      break
  }
  next()
} )

// 一个中间件栈,显示任何指向/user/:id的HTTP请求的信息
router.use( '/user', ( req, res, next ) => {
  // 验证token
  const authorization = req.headers.authorization
  console.log( 'authorization', authorization )
  if ( !authorization ) {
    return res.status( 401 ).send(
      { code: 401, msg: "当前还未登录，请先登录" }
    )
  }
  const jwt = new Jwt( authorization )
  const result = jwt.verifyToken()
  console.log( '路由', result )
  if ( result == "err" ) {
    return res.status( 401 ).send(
      { code: 401, msg: "登录过期" }
    )
  }
  next()
} )

export default router
