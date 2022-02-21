export default [
  {
    path: '/',
    redirect: '/recommend',
    component: () => import('@/views/recommend/Recommend')
  },
  {
    path: '/recommend',
    component: () => import('@/views/recommend/Recommend'),
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/ranking',
    component: () => import('@/views/Ranking/Ranking'),
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/singer',
    component: () => import('@/views/singer/Singer'),
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/search',
    component: () => import('@/views/Search/Search'),
    meta: {
      keepAlive: false
    }
  }
]
