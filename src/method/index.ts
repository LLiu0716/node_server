// 公共函数

/**
 * 正确结果 code = 200
 * @param data 需要返回的数据
 * @param msg 返回提示
 */
export const res_yes = ( data: any, msg: string = '获取成功' ) => {
  return {
    code: 200,
    msg,
    data
  }
}

/**
 * 错误结果 code = 400
 * @param msg 返回提示
 */
export const res_nos = ( msg: string ) => {
  return {
    code: 400,
    msg
  }
}

/**
 * md5 加密 
 * @type string
 * @param stj 传入需要加密的账号或者是密码
 */
export function md5s ( stj: string ) {
  const crypto = require( "crypto" )
  const md5 = crypto.createHash( 'md5' )
  md5.update( stj )
  stj = md5.digest( 'hex' )
  console.log( 'stj > ', stj )
  return stj
}
