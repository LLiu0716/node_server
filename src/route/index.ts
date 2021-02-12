import { Router } from 'express'
import * as fs from 'fs'
import { url } from '../app'



const router = Router()

// 没有挂载路径的中间件,通过该路由的每个请求都会执行该中间件
router.use( ( req, res, next ) => {
  // res.send( 'ok,我是真的爱上你' )
  console.log( 'Time:', Date.now() )
  next()
} )

// 一个中间件栈,显示任何指向/user/:id的HTTP请求的信息
router.use(
  '/index',
  ( req, res, next ) => {
    console.log( '777' )
    next()
  },
  ( req, res, next ) => {
    console.log( 'Request Type', req.method )
    next()
  }
)

router.get( '/index', ( req, res ) => {
  // 使用 dist 文件夹下的 data 数据库
  fs.readFile( url + "/data/index.json",
    ( err, data ) => {
      let arr = JSON.parse( data.toString() )
      if ( err ) res.send( err )
      else res.send( arr )
    } )
} )

export default router
