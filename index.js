const Mock = require( "mockjs" )

const num = Mock.mock( '@integer(300, 800)' )

// setTimeout( () => {
// const data = Mock.mock( {
//   'list|5-10': [
//     {
//       // 自增
//       'id|+1': 1,
//       // 字符串 id
//       is_id: '@id',
//       // name: '@FIRST', // 英文
//       name: '@cname',  // 中文
//       // email
//       email: '@email',
//       // 地址
//       // site: '@county()' // 市区
//       site: '@county(true)', // 详细
//       // 随机 boolen
//       dome: '@boolean(1, true)',
//       // 随机 数字
//       age: '@integer(18, 45)',
//       look: '@integer(60, 1000)',
//       // 日期 YYYY-MM-DD
//       time: '@date',
//       // 日期 YYYY-MM-DD hh:mm:ss
//       // time: '@datetime',
//       // 当前时间 YYYY-MM-DD hh:mm:ss
//       // time: '@now',
//       // Random.image( size, background, foreground, format, text )
//       // Random.image('200x100', '#894FC4', '#FFF', 'png', '!')
//       img: "@image('200x100', '#894FC4', '#FFF', 'png', 'Hello')",
//       // 长文章
//       text: '@csentence',  // 中文
//       cn_text: '@cparagraph(5,10)',  // 中文
//       en_text: '@paragraph(5,12)', // 英文
//       // 单词
//       // text: '@sentence(3,7)', // 英文
//       // text: '@csentence(3,7)', // 中文
//     },
//   ]
// } )
//   console.log( 'd', data )
// }, num )

const data = Mock.mock( {
  'data|20': [
    {
      is_id: '@id',
      user: {
        name: '@cname',
        email: '@email',
      },
      time: '@date',
      site: '@county(true)',
      live: '@boolean(1, true)',
      follve: '@boolean(1, true)',
      look: '@integer(60, 1000)',
      img: "@image('200x100', '#894FC4', '#FFF', 'png', 'Hello')",
      title: '@csentence',
      'content|20-30': [
        {
          cn: '@cparagraph(5,10)',
          en: '@paragraph(5,12)'
        }
      ]
    }
  ]
} )

console.log( 'nam', data )
