import * as jwt from 'jsonwebtoken'

export default class Jwt {
  constructor ( data: any ) {
    this.data = data
  }
  data: any
  set_token () {
    const data = this.data
    const created = Date.now()
    // 最好是加密文件
    const cert = '这是加在token里的内容'
    const token = jwt.sign( {
      data,
      exp: created + 60 * 60 * 24 * 7,
    }, cert )
    return token
  }

  // 校验token
  verifyToken () {
    const token = this.data
    const cert = '这是加在token里的内容'
    let res: any
    try {
      const result: any = jwt.verify( token, cert ) || {}
      const { exp = 0 } = result
      const current = Date.now()
      if ( current <= exp ) {
        res = result.data || {}
      }
    } catch ( e ) { res = 'err' }
    return res
  }
}
