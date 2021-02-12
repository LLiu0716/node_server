import express from 'express'
import * as bodyParser from 'body-parser'
import router from './route'

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
	console.log( 'Time:', Date.now() )
	next()
} )

// 挂载至 /user/:id的中间件,任何指向/user/:id的请求都会执行它
app.use( '/user/:id', ( req, res, next ) => {
	console.log( 'Request Type', req.method )
	next()
} )

// 路由和句柄函数(中间件系统),处理指向/user/:id的GET请求
app.get( '/user/:id', ( req, res, next ) => {
	res.send( 'USER' )
} )

// 错误请求
app.use( ( err: any, req: any, res: any, next: any ) => {
	res.status( 500 ).send( '404' )
} )

app.use( router )

// app.use( ( req, res ) => {
// 	const { url, method } = req
// 	console.log( 'url', url )
// 	console.log( 'method', method )

// 	// const index = ( err, data ) => {
// 	//   if ( err ) res.end( err )
// 	//   else res.end( data )
// 	// }

// 	if ( url == '/index' && method == 'GET' ) {
// 		fs.readFile( "./data/index.json",
// 			( err, data ) => {
// 				let arr = JSON.parse( data.toString() )
// 				if ( err ) res.send( err )
// 				else res.send( arr )
// 			} )
// 	} else if ( url == '/home' && method == 'GET' ) {
// 	} else if ( url == '/login' && method == 'POST' ) {
// 	} else if ( url == '/list' && method == 'GET' ) {
// 	} else if ( url == '/list' && method == 'POST' ) {
// 	} else {
// 	}
// } )
