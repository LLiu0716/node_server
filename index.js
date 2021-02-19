const jwt = require( "jsonwebtoken" )

class Jwt {
  constructor ( data, nick = `真的爱你${ this.nick }` ) {
    this.data = data
    this.nick = nick
  }

  set_token () {
    const data = this.data
    const created = Math.floor( Date.now() )
    /** 加到 token 里的额外内容 , 不知道这个内容 , 相同的方式就无法解密 */
    const cert = this.nick
    let token = jwt.sign( {
      data,
      exp: created,
    }, cert )
    return token
  }

  verifyToken () {
    const token = this.data
    /** 加到 token 里的额外内容 , 不知道这个内容 , 相同的方式就无法解密 */
    const cert = this.nick
    let res = 'err'
    try {
      const result = jwt.verify( token, cert ) || {}
      console.log( 'result', result )
      let { exp } = result
      const current = Math.floor( Date.now() / 1000 )
      if ( current <= exp ) {
        res = result.data || {}
      }
    } catch ( e ) {
      res = 'err'
      console.log( '777' )
    }
    return res
  }
}

const stj = '真的爱你'
// const stj = md5s( '真的爱你' )
const obj = new Jwt( stj )
let token = obj.set_token()

const sty = new Jwt( token )
let arr = sty.verifyToken()

console.log( '生成 token => ', token )
console.log( '验证 token => 如果返回 err 就是 token 失效 ', arr )

// md5 加密方式 , 一般用于密码加密 , 无法解密
function md5s ( stj ) {
  const crypto = require( "crypto" )
  const md5 = crypto.createHash( 'md5' )
  md5.update( stj )
  stj = md5.digest( 'hex' )
  console.log( 'stj > ', stj )
  return stj
}
