const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('components/HomePage.vue') },  // Главная страница
      { path: 'add-pet', component: () => import('components/AddPetPage.vue') }, // Форма добавления питомца
      { path: 'reports', component: () => import('pages/reports/IndexPage.vue') }
    ]
  },

  // Перехват всех неизвестных маршрутов
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
];

export default routes;
