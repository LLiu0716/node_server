import express from 'express'
import * as bodyParser from 'body-parser'
import router from './route'
import * as Mock from 'mockjs'

export const url = __dirname

const app = express()

app.listen( 8080, () => {
	console.log( 'http://127.0.0.1:8080' )
	console.log( 'http://127.0.0.1:8080/index' )
	console.log( 'http://127.0.0.1:8080/home' )
} )

app.use( bodyParser.json() )
app.use( bodyParser.urlencoded( { extended: false } ) )

// 没有挂载路径的中间件,应用的每个请求都会执行该中间件
app.use( ( req, res, next ) => {
	console.log( 'Time:', Mock.mock( '@now' ) )
	res.header( "Access-Control-Allow-Origin", "*" );
	res.header( 'Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS' )
	res.header( "Access-Control-Allow-Headers", "X-Requested-With" )
	res.header( 'Access-Control-Allow-Headers', 'Content-Type' )
	next()
} )

// 挂载至 /user/:id的中间件,任何指向/user/:id的请求都会执行它
app.use( '/user', ( req, res, next ) => {
	console.log( 'Request Type', req.method )
	next()
} )

// 错误处理中间件
app.use( ( err: any, req: any, res: any, next: any ) => {
	res.status( 500 ).send( '404' )
} )

app.use( router )
