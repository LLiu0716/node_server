/**
 * 登录模块
 */
import * as fs from 'fs'
import { url } from '../app'
import { res_nos, res_yes } from './index'
import Jwt from '../token'

/** 登录函数 */
export const post_login = ( req: any, res: any ) => {
  console.log( 'req', req.query )
  const { username, password } = req.body
  fs.readFile( url + "/data/index.json",
    ( err, data ) => {
      const arr = JSON.parse( data.toString() )
      if ( err ) res.json( err )
      else {
        // 这个 if 可以不写 , 前端如果连这都不做判断就发请求 , 直接干他
        if ( username && password ) {
          const { user } = arr
          // 注意 => 不要在循环里写逻辑
          let urne: boolean = false
          let pswd: boolean = false
          user.forEach( ( v: any ) => {
            if ( v.username == username ) {
              urne = true
              if ( v.username == username ) pswd = true
            }
          } )
          if ( !urne && !pswd ) {
            res.json( res_nos( '账号或密码错误' ) )
          } else {
            const jwt = new Jwt( username )
            const token = jwt.set_token()
            const rrr = new Jwt( token )
            console.log( rrr.verifyToken() )
            res.json( res_yes( { token }, '登录成功' ) )
          }
        } else {
          res.json( res_nos( '没有输入账号密码' ) )
        }
      }
    } )
}
