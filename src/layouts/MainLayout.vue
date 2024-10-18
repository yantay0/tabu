<template>
  <q-layout view="hHh lpR fFf" class="layout-container">
    <q-header elevated class="q-px-md q-pt-sm bg-white">
      <q-toolbar>
        <div class="text-h5 text-bold text-black">tabu.kz</div>
        <q-space />
        <q-btn flat label="Подать объявление" class="q-mx-sm text-black" />
        <q-btn flat label="Объявления" class="q-mx-sm text-black" />
        <q-btn flat label="Карта" class="q-mx-sm text-black" />
        <q-btn flat label="Новости" class="q-mx-sm text-black" />
        <q-btn flat label="Приют" class="q-mx-sm text-black" />
        <q-avatar size="42px" class="bg-grey-2">
          <q-icon name="person" size="24px" class="text-black" />
        </q-avatar>


      </q-toolbar>
    </q-header>

    <q-page-container class="content-container">
      <router-view />
    </q-page-container>

    <!-- <q-footer class="bg-dark text-white q-pt-md q-pb-md">
      <div class="row q-px-md q-gutter-md justify-around">
        <div class="col-12 col-sm-3">
          <h6>COMPANY NAME</h6>
          <p class="footer-text">Organize your footer content efficiently with rows and columns.</p>
        </div>
        <div class="col-12 col-sm-2">
          <h6>PRODUCTS</h6>
          <ul class="footer-list">
            <li>MDBootstrap</li>
            <li>MDWordPress</li>
            <li>BrandFlow</li>
            <li>Bootstrap Angular</li>
          </ul>
        </div>
        <div class="col-12 col-sm-2">
          <h6>USEFUL LINKS</h6>
          <ul class="footer-list">
            <li>Your Account</li>
            <li>Become an Affiliate</li>
            <li>Shipping Rates</li>
            <li>Help</li>
          </ul>
        </div>
        <div class="col-12 col-sm-3">
          <h6>CONTACT</h6>
          <p class="footer-text">New York, NY 10012, US</p>
          <p class="footer-text">info@example.com</p>
          <p class="footer-text">+01 234 567 88</p>
          <p class="footer-text">+01 234 567 89</p>
        </div>
      </div>
    </q-footer> -->
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout'
};
</script>

<style>
.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content-container {
  flex: 1;
}

/* .footer-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-list li {
  margin-bottom: 4px;
}

.footer-text {
  font-size: 0.875rem;
  line-height: 1.4;
}

.q-footer {
  height: 30%;
} */
</style>
