/**
 * user 模块
 */
import * as Mock from 'mockjs'
import { res_yes, res_nos } from './index'

/** 个人信息 需要在 query 内传入 id */
export const get_user = ( req: any, res: any ) => {
  // req.query.id , 查询个人信息需要的 id
  const { id } = req.query
  if ( id ) {
    res.json( Mock.mock( res_yes( {
      id,
      nickname: '@cname',
      age: '@integer(23, 35)',
      site: '@county(true)',
      img: "@image('100x100', '@color', '@color', 'png', '@name')",
      text: '@csentence'
    } )
    ) )
  } else {
    res.json( res_nos( '请传入id' ) )
  }
}

/** 关注的人 */
export const get_user_list = ( req: any, res: any ) => {
  res.json( Mock.mock( res_yes( {
    // mock 格式需要 , 无法直接返回一个数组
    'list|15-50': [
      {
        'id|+1': 1,
        name: '@cname',
        age: '@integer(18, 23)',
        site: '@county(true)',
        img: `https://img.yzcdn.cn/vant/apple-${ '@integer(1,8)' }.jpg`,
        text: '@csentence'
      }
    ]
  } )
  ) )
}
