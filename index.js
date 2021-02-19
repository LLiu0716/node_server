const fs = require( "fs" )

const arr = {}
arr.user = [ {
  id: Date.now().toString(),
  username: '123',
  password: '222',
  nickname: '11',
  dome: false
} ]

const str = JSON.stringify( arr )

// 写入文件
fs.writeFile( ( __dirname + '/cs.json' ), str, err => {
  if ( err ) {
    console.log( '777' )
  } else console.log( '999' )
} )

// 读取文件
fs.readFile( ( __dirname + '/cs.json' ), ( err, data ) => {
  if ( err ) console.log( 'err', err )
  else {
    const arr = JSON.parse( data )
    console.log( 'data', arr )
  }
} )
