import * as Mock from 'mockjs'
import * as fs from 'fs'
import { url } from '../app'

export const get_login = ( req: any, res: any ) => {
  fs.readFile( url + "/data/index.json",
    ( err, data ) => {
      let arr = JSON.parse( data.toString() )
      if ( err ) res.send( err )
      else res.json( arr )
    } )
}

export const get_user = ( req: any, res: any ) => {
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
}

export const get_imgs = ( req: any, res: any ) => {
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
}

export const get_user_list = ( req: any, res: any ) => {
  res.json( Mock.mock( {
    code: 200,
    'data|15-50': [
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
}

export const get_home = ( req: any, res: any ) => {
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
}