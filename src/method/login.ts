/**
 * 登录模块
 */
import * as fs from 'fs'
import * as path from 'path'
import { res_nos, res_yes, md5s } from './index'
import Jwt from '../token'

/** 登录函数 */
export const post_login = ( req: any, res: any ) => {
  console.log( 'req', req.query )
  const { username, password } = req.body
  fs.readFile( path.join( __dirname + "../../../data/index.json" ),
    ( err, data ) => {
      try {
        const arr = JSON.parse( data.toString() )
        if ( err ) res.json( err )
        else {
          // 这个 if 可以不写 , 前端如果连这都不做判断就发请求 , 直接干他
          if ( username && password ) {
            const { user } = arr
            // 注意 => 不要在循环里写逻辑
            let urne: boolean = false
            let pswd: boolean = false
            let id: string = ''
            user.forEach( ( v: any ) => {
              if ( v.username == username ) {
                urne = true
                if ( v.username == username ) {
                  pswd = true
                  id = v.id
                }
              }
            } )
            if ( !urne && !pswd ) {
              res.json( res_nos( '账号或密码错误' ) )
            } else {
              // 这里进行加密处理 , 就算拿到 token 也无法反推账号是啥
              const name = md5s( username ).substring( 10 )
              console.log( 'name >', name )
              const jwt = new Jwt( name )
              const token = jwt.set_token()
              res.json( res_yes( { token, id }, '登录成功' ) )
            }
          } else {
            res.json( res_nos( '没有输入账号密码' ) )
          }
        }
      } catch ( error ) { res.status( 404 ).json( res_nos( 'error' ) ) }
    } )
}
