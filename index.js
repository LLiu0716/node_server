const jwt = require( "jsonwebtoken" )

class Jwt {
  constructor ( data, nick = '' ) {
    this.data = data
    this.nick = nick
  }

  set_token () {
    const data = this.data
    const created = Math.floor( Date.now() )
    const cert = `真的爱你${ this.nick }`
    let token = jwt.sign( {
      data,
      exp: created,
    }, cert )
    return token
  }
  verifyToken () {
    const token = this.data
    const cert = `真的爱你${ this.nick }`
    let res
    try {
      const result = jwt.verify( token, cert ) || {}
      let { exp } = result
      const current = Math.floor( Date.now() / 1000 )
      if ( current <= exp ) {
        res = result.data || {}
      }
    } catch ( e ) {
      res = 'err'
    }
    return res
  }
}


const obj = new Jwt( '我是真的爱上你' )
let token = obj.set_token()

const sty = new Jwt( token )
let arr = sty.verifyToken()

console.log( '生成 token => ', token )
console.log( '验证 token => 如果返回 err 就是 token 失效 ', arr )

