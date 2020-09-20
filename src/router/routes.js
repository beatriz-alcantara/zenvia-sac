
const routes = [
  {
    path: '/',
    component: () => import('layouts/InicioLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Inicio.vue') }
    ]
  },
  {
    path: '/Dashboard',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
