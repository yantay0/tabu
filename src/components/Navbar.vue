<script setup>

</script>

<template>
  <q-header elevated class="q-px-md q-pt-sm bg-white">
    <q-toolbar>
      <div class="text-h5 text-bold text-black" @click="$router.push('/')">tabu.kz</div>
      <q-space />
      <q-btn flat label="Подать объявление" class="q-mx-sm text-black" @click="$router.push('/add-pet')"/>
      <q-btn flat label="Объявления" class="q-mx-sm text-black" @click="$router.push('/reports')"/>
      <q-btn flat label="Карта" class="q-mx-sm text-black" />
      <q-btn flat label="Новости" class="q-mx-sm text-black" />
      <q-btn flat label="Приют" class="q-mx-sm text-black" />
      <q-avatar size="42px" class="bg-grey-2">
        <q-icon name="person" size="24px" class="text-black" />
      </q-avatar>
    </q-toolbar>
  </q-header>
</template>

<style scoped>

</style>
