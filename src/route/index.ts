import { Router } from 'express'
import * as fs from 'fs'
import * as Mock from 'mockjs'
import { url } from '../app'

const router = Router()

// 没有挂载路径的中间件,通过该路由的每个请求都会执行该中间件
router.use( ( req, res, next ) => {
  console.log( 'Time:', Mock.mock( '@now' ) )
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

router.get( '/index', ( req, res ) => {
  // 使用 dist 文件夹下的 data 数据库
  fs.readFile( url + "/data/index.json",
    ( err, data ) => {
      let arr = JSON.parse( data.toString() )
      if ( err ) res.send( err )
      else res.send( arr )
    } )
} )

router.get( '/user', ( req, res ) => {
  res.json( Mock.mock( {
    code: 200,
    data: {
      id: '@id',
      nickname: '@cname',
      age: '@integer(23, 35)',
      site: '@county(true)',
      img: "@image('100x100', '@color', '@color', 'png', '@name')",
      text: '@csentence'
    },
    msg: '获取成功'
  } ) )
} )

// 轮波图
router.get( '/live', ( req, res ) => {
  res.json( Mock.mock( {
    code: 200,
    'data|8': [
      {
        'id|+1': 1,
        url: function () {
          return `https://img.yzcdn.cn/vant/apple-${ this.id }.jpg`
        },
      },
    ],
    msg: '获取成功'
  } ) )
} )

router.get( '/user/live', ( req, res ) => {
  res.json( Mock.mock( {
    code: 200,
    'data|35-50': [
      {
        'id|+1': 1,
        name: '@cname',
        age: '@integer(18, 23)',
        site: '@county(true)',
        img: `https://img.yzcdn.cn/vant/apple-${ '@integer(1,8)' }.jpg`,
        text: '@csentence'
      }
    ],
    msg: '获取成功'
  } ) )
} )

router.get( '/home', ( req, res ) => {
  res.json( Mock.mock( {
    code: 200,
    'data|10': [
      {
        id: '@id',
        user: {
          name: '@cname',
          email: '@email',
          time: '@date'
        },
        type: '@integer(1,2)',
        'con|1-3': [
          { url: `https://img.yzcdn.cn/vant/apple-${ '@integer(1,8)' }.jpg` }
        ],
        time: '@now',
        site: '@county(true)',
        live: '@boolean(1, true)',
        follve: '@boolean(1, true)',
        look: '@integer(60, 1000)',
        img: `https://img.yzcdn.cn/vant/apple-${ '@integer(1,8)' }.jpg`,
        title: '@csentence',
        'content|2-4': [
          {
            cn: '@cparagraph(5,10)',
            en: '@paragraph(5,12)'
          }
        ]
      }
    ],
    msg: '获取成功'
  } ) )
} )

export default router
