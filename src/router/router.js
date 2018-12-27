const routes = [
  {
    path: '/',
    name: 'index',
    component: resolve => require(['@/view/index'], resolve)
  }
]

export default routes
