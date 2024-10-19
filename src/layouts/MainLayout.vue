<template>
  <q-layout view="hHh lpR fFf" class="layout-container">
    <Navbar/>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="footer bg-dark text-white">
      <div class="row q-px-xl q-py-lg justify-around">
        <div class="col-12 col-sm-3">
          <h6>COMPANY NAME</h6>
          <p>Organize your footer content efficiently with rows and columns.</p>
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
          <p>New York, NY 10012, US</p>
          <p>info@example.com</p>
          <p>+01 234 567 88</p>
          <p>+01 234 567 89</p>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>


<script>
import Navbar from 'components/Navbar.vue'

export default {
  name: 'MainLayout',
  components: { Navbar }
};
</script>

<style>
.layout-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.footer {
  width: 100%;
  position: relative;
  margin-top: auto;
}

.footer-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-list li {
  margin-bottom: 8px;
}

q-page-container {
  flex-grow: 1;
}

</style>
