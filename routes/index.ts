import type { Route } from './type'

import { GET, POST, PUT, DELETE } from '../controllers/index'

const enum RouteMethod {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete'
}

const GET_ROUTES: Array<Route> = [
  {
    path: '/',
    method: RouteMethod.GET,
    action: GET.getAll,
  },
  {
    path: '/:id',
    method: RouteMethod.GET,
    action: GET.getById,
  }
]

const POST_ROUTES: Array<Route> = [
  {
    path: '/',
    method: RouteMethod.POST,
    action: POST.create,
  }
]

const PUT_ROUTES: Array<Route> = [
  {
    path: '/:id',
    method: RouteMethod.PUT,
    action: PUT.update,
  }
]

const DELETE_ROUTES: Array<Route> = [
  {
    path: '/:id',
    method: RouteMethod.DELETE,
    action: DELETE.deleteById,
  }
]

export default [
  ...GET_ROUTES,
  ...POST_ROUTES,
  ...PUT_ROUTES,
  ...DELETE_ROUTES
]
