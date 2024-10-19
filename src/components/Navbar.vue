<script setup>

</script>

<template>
  <q-header elevated class="q-px-md q-pt-sm">
    <q-toolbar>
      <router-link to="/" class="text-h5 text-bold text-black no-decoration">
        tabu.kz
      </router-link>
      <q-space />
      <q-btn flat label="Подать объявление" to="/add-pet" class="q-mx-sm text-black" />
      <q-btn flat label="Объявления" to="/ads" class="q-mx-sm text-black" />
      <q-btn flat label="Карта" to="/map" class="q-mx-sm text-black" />
      <q-btn flat label="Новости" to="/news" class="q-mx-sm text-black" />
      <q-btn flat label="Приют" to="/shelter" class="q-mx-sm text-black" />
<<<<<<< HEAD
      <q-btn flat round size="42px" class="bg-grey-2" to="/profile" icon="person" icon-size="24px" color="black"/>
=======
      <q-avatar size="42px" class="bg-grey-2">
        <q-icon name="person" size="24px" class="text-black" />
      </q-avatar>
>>>>>>> external-repo/main
    </q-toolbar>
  </q-header>
</template>

<style scoped>

</style>
