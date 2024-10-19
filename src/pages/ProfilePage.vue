<template>
    <q-page class="q-pa-md">
      <h5>Добро пожаловать, {{ userName }}!</h5>
      <p>Email: {{ userEmail }}</p>
      <q-btn label="Выйти" color="negative" @click="logout" />
    </q-page>
  </template>
  
  <script>
  import { getAuth, signOut } from 'firebase/auth';
  
  export default {
    data() {
      return {
        userName: 'Имя пользователя',
        userEmail: '',
      };
    },
    created() {
      const auth = getAuth();
      const user = auth.currentUser;
  
      if (user) {
        this.userEmail = user.email; 
        this.userName = user.displayName || 'Имя пользователя';
      } else {
        this.$router.push('/login'); 
      }
    },
    methods: {
      async logout() {
        const auth = getAuth();
        try {
          await signOut(auth);
          console.log('Пользователь вышел успешно!');
          this.$router.push('/login'); 
        } catch (error) {
          console.error('Ошибка выхода:', error);
        }
      }
    },
  };
  </script>
