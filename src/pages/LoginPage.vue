<template>
    <q-page class="row justify-center items-center bg-light-blue" style="min-height: 100vh;">
      <q-card class="q-pa-md" style="width: 400px;">
        <q-card-section class="text-center">
          <div class="text-h5">Вход</div>
        </q-card-section>
  
        <q-tabs v-model="tab" align="center" class="q-mt-md" active-color="primary">
          <q-route-tab to="/login" name="login" label="Вход" />
          <q-route-tab to="/register" name="register" label="Регистрация" />
        </q-tabs>
  
        <q-card-section class="q-pt-none">
          <q-input v-model="email" label="Email" type="email" filled />
          <q-input v-model="password" label="Пароль" type="password" filled />
        </q-card-section>
  
        <q-card-actions align="center">
          <q-btn label="Войти" color="primary" @click="login" />
        </q-card-actions>
      </q-card>
    </q-page>
  </template>
  
  <script>
  import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
        tab: 'login',
      };
    },
    methods: {
      async login() {
        const auth = getAuth();
        try {
          await signInWithEmailAndPassword(auth, this.email, this.password);
          console.log('Пользователь вошел успешно!');
          
          this.$router.push('/profile');
        } catch (error) {
          console.error('Ошибка входа:', error.message);
        }
      },
    },
  };
  </script>
  