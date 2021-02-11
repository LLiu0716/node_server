import http from 'http'
import querystring from 'querystring'
import fs from 'fs'
import path from 'path'

const app = http.createServer()

app.listen( 8080, () => {
  console.log( 'http://127.0.0.1:8080' )
} )

app.on( 'request', ( req, res ) => {
  const { url, method } = req
  console.log( 'url', url )
  console.log( 'method', method )

  // const index = ( err, data ) => {
  //   if ( err ) res.end( err )
  //   else res.end( data )
  // }

  if ( url == '/index' && method == 'GET' ) {

  } else if ( url == '/home' && method == 'GET' ) {

  } else if ( url == '/login' && method == 'POST' ) {

  } else if ( url == '/list' && method == 'GET' ) {

  } else if ( url == '/list' && method == 'POST' ) {
    let name = ''
    req.on( 'data', chunk => {
      name += chunk
    } )
    console.log( 'name', name )
    req.on( 'end', () => {
      let obj = querystring.parse( name )
      console.log( 'obj', obj )
      fs.readFile(
        path.join( __dirname, 'data/index.json' ),
        'utf-8',
        ( err, data ) => {
          if ( err ) {
            res.end( err )
          } else {
            let arr: any[] = JSON.parse( data )
            arr.push( obj )
            fs.writeFile(
              path.join( __dirname, 'data/index.json' ),
              JSON.stringify( arr ),
              err => {
                if ( err ) res.end( err )
                else res.end( 'ok' )
              }
            )
          }
        }
      )
    } )
  } else {

  }

} )
