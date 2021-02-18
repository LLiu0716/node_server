/**
 * home 模块
 */
import * as Mock from 'mockjs'
import { res_nos, res_yes } from './index'

/**
 * 主页新闻函数
 * 需要在 query 传入分页信息 , 默认 pageIndex = 1, pageSize = 10
 */
export const get_home = ( req: any, res: any ) => {
  // req.query 分页信息 pageIndex 页 , pageSize 条
  // mock不支持修改 pageSize
  const { pageIndex = 1, pageSize = 10 } = req.query
  if ( pageIndex < 10 ) {
    res.json( Mock.mock( res_yes( {
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
      pageSize,
      num: 93
    } )
    ) )
  } else if ( pageIndex == 10 ) {
    res.json( Mock.mock( res_yes( {
      'data|3': [
        {
          id: '@id',
          user: {
            nickname: '@cname',
            datetime: '@date'
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
              cn: '@cparagraph(5,12)',
              en: '@paragraph(5,12)'
            }
          ]
        }
      ],
      num: 93,
      pageSize
    } )
    ) )
  } else {
    res.json( res_nos( '没有更多数据了' ) )
  }
}

/** 轮播图 共8张 */
export const get_imgs = ( req: any, res: any ) => {
  res.json( Mock.mock( res_yes( {
    // mock 格式需要 , 无法直接返回一个数组
    'list|8': [ {
      'id|+1': 1,
      url: function () {
        return `https://img.yzcdn.cn/vant/apple-${ this.id }.jpg`
      },
    } ]
  } )
  ) )
}
