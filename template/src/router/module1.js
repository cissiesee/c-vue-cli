import Layout from '../views/layout/Layout'

export default {
  path: '/module1',
  component: Layout,
  redirect: { name: 'module1index' },
  meta: { title: '模块1' },
  name: 'channel',
  children: [
    {
      path: 'list',
      name: 'module1index',
      component: () => import('@/views/module1/index'),
      meta: { title: '模块1首页' }
    }
  ]
}
