const jwt = require( "jsonwebtoken" )

class Jwt {
  constructor ( data ) {
    this.data = data
  }
  set_token () {
    const data = this.data
    const created = Math.floor( Date.now() )
    const cert = '我是真的爱上你'
    let token = jwt.sign( {
      data,
      exp: created,
    }, cert )
    return token
  }
  verifyToken () {
    const token = this.data
    const cert = '我是真的爱上你'
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


// let token = jwt.sign( {
//   data: 'data',
//   exp: Math.floor( Date.now() / 1000 ) + ( 60 * 60 )
// }, 'is_token' )

console.log( 'token', token )
console.log( 'arr', arr )
