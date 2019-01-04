const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'index',
    component: resolve => require(['@/view/index'], resolve),
    redirect: '/personal',
    children: [
      // 协作盘点
      {
        path: '/collaborative',
        name: 'collaborativeInventory',
        component: resolve => require(['@/view/CollaborativeInventory'], resolve),
        redirect: '/collaborative/await',
        children: [
          {
            path: 'await',
            name: 'awaitCollaborative',
            component: resolve => require(['@/view/AwaitInventor'], resolve)
          },
          {
            path: 'have',
            name: 'haveCollaborative',
            component: resolve => require(['@/view/HaveIneventor'], resolve)
          }
        ]
      },
      // 个人盘点
      {
        path: '/personal',
        name: 'PersonalInventory',
        component: resolve => require(['@/view/PersonalInventory'], resolve),
        redirect: '/personal/await',
        children: [
          {
            path: '/personal/await',
            name: 'awaitPersonal',
            component: resolve => require(['@/view/AwaitInventor'], resolve)
          },
          {
            path: 'have',
            name: 'havePersonal',
            component: resolve => require(['@/view/HaveIneventor'], resolve)
          }
        ]
      }
    ]
  },
  // 选择资产类别
  {
    path: '/category',
    name: 'SelectInventorCategory',
    component: resolve => require(['@/view/SelectInventorCategory'], resolve)
  },
  // 添加资产
  {
    path: '/addAsset',
    name: 'addAsset',
    component: resolve => require(['@/view/AddAsset'], resolve)
  },
  {
    path: '/assetDetail',
    name: 'AssetDetail',
    component: resolve => require(['@/view/AssetDetail'], resolve)
  }
]

export default routes
