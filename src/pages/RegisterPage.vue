<template>
    <q-page class="row justify-center items-center bg-light-blue" style="min-height: 100vh;">
      <q-card class="q-pa-md" style="width: 400px;">
        <q-card-section class="text-center">
          <div class="text-h5">Регистрация</div>
        </q-card-section>
  
        <q-tabs v-model="tab" align="center" class="q-mt-md" active-color="primary">
          <q-route-tab to="/login" name="login" label="Вход" />
          <q-route-tab to="/register" name="register" label="Регистрация" />
        </q-tabs>
  
        <q-card-section class="q-pt-none">
          <q-input v-model="name" label="Имя/Название" filled />
          <q-input v-model="email" label="Email" type="email" filled />
          <q-input v-model="password" label="Пароль" type="password" filled />
        </q-card-section>
  
        <q-card-actions align="center">
          <q-btn label="Зарегистрироваться" color="primary" @click="register" />
        </q-card-actions>

        <q-banner v-if="errorMessage" class="q-mt-md" color="negative">
          {{ errorMessage }}
        </q-banner>
      </q-card>
    </q-page>
  </template>
  
  <script>
  import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
  
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        tab: 'register',
        errorMessage: null, 
      };
    },
    methods: {
      async register() {
        const auth = getAuth();
        this.errorMessage = null; 
  
        try {
          const result = await createUserWithEmailAndPassword(auth, this.email, this.password);

          await updateProfile(result.user, {
            displayName: this.name,
          });
  
          console.log('Пользователь зарегистрирован успешно!');
          
          this.$router.push('/login'); 
        } catch (error) {
          if (error.code === 'auth/email-already-in-use') {
            this.errorMessage = 'Этот email уже используется. Пожалуйста, используйте другой email.';
          } else {
            this.errorMessage = 'Ошибка регистрации: ' + error.message;
          }
          console.error('Ошибка регистрации:', error);
        }
      }
    }
  };
  </script>
  
  