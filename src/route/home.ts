import router from './index'

import home from '../api/home'

import { get_imgs, get_home } from '../method/home'

const HomeRouter = router

const arr = [
  { URL: home.HOME, FUN: get_home },
  { URL: home.IMGS, FUN: get_imgs }
]

HomeRouter.get( home.HOME, ( req, res ) => {
  get_home( req, res )
} )

HomeRouter.get( home.IMGS, ( req, res ) => {
  get_imgs( req, res )
} )

export default HomeRouter
