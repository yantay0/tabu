const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('components/HomePage.vue') },  // Главная страница
      { path: 'add-pet', component: () => import('components/AddPetPage.vue') }, // Форма добавления питомца
      { path: 'ads', component: () => import('pages/reports/IndexPage.vue') },
      { path: 'login', component: () => import('pages/LoginPage.vue'),}, // Логин 
      { path: 'register', component: () => import('pages/RegisterPage.vue'),},// Регистрация
      { path: 'profile', component: () => import('pages/ProfilePage.vue'),},// Профиль
      { path: 'map', component: () => import('pages/Map.vue'),},// Профиль
    ]
  },

  // Перехват всех неизвестных маршрутов
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
];

export default routes;
