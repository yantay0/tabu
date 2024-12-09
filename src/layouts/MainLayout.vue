<!-- MainLayout.vue -->
<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>Adventure Blog</q-toolbar-title>

        <q-btn-group spread>
          <q-btn flat label="Sort by Date" @click="sortByDate" />
          <q-btn flat label="Sort by Rating" @click="sortByRating" />
        </q-btn-group>

        <q-btn-dropdown flat label="User" v-if="isAuthenticated">
          <q-list>
            <q-item clickable v-close-popup @click="goToProfile">
              <q-item-section>Profile</q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="goToStatistics">
              <q-item-section>Statistics</q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="logout">
              <q-item-section>Logout</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-1"
    >
      <q-list>
        <q-item-label header>Navigation</q-item-label>

        <q-item clickable :to="{ name: 'home' }">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>Home</q-item-section>
        </q-item>

        <q-item clickable :to="{ name: 'adventure' }">
          <q-item-section avatar>
            <q-icon name="explore" />
          </q-item-section>
          <q-item-section>Adventure</q-item-section>
        </q-item>

        <q-item clickable :to="{ name: 'chat' }">
          <q-item-section avatar>
            <q-icon name="chat" />
          </q-item-section>
          <q-item-section>Chat</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import _ from 'lodash';

export default defineComponent({
  name: 'MainLayout',
  setup() {
    const leftDrawerOpen = ref(false);
    const router = useRouter();
    const store = useStore();

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      sortByDate: _.debounce(() => {
        store.dispatch('sortPersonsByDate');
      }, 300),
      sortByRating: _.debounce(() => {
        store.dispatch('sortPersonsByRating');
      }, 300),
      isAuthenticated() {
        return store.getters['user/isAuthenticated'];
      },
      goToProfile() {
        router.push('/profile');
      },
      goToStatistics() {
        router.push('/statistics');
      },
      logout() {
        store.dispatch('user/logout');
        router.push('/login');
      }
    };
  }
});
</script>

<style lang="scss">
.q-toolbar {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}
</style>
