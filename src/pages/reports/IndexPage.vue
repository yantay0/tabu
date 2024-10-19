<template>
  <q-page class="flex q-pa-lg bg-light">
    <div class="announcements-container q-gutter-md">
      <div
        v-for="(announcement, index) in announcements"
        :key="index"
        class="announcement-card q-pa-md bg-grey-2"
        style="border-radius: 10px; display: flex;"
      >
        <div class="left-column q-pa-md bg-cyan-9 text-white" style="flex: 1;">
          <div class="text-h5 text-bold">Контакты</div>
          <q-input filled v-model="announcement.phone" label="Телефон" class="q-mt-md rounded-input" />
          <q-btn class="q-mt-lg q-ml-sm rounded" color="white" text-color="cyan-9" label="Связаться" />
        </div>

        <div class="right-column q-pa-md" style="flex: 2;">
          <div class="text-h6 text-bold q-mb-md">{{ announcement.event }}</div>
          <div class="description-container">
            <div class="text-bold q-mb-xs">Описание</div>
            <div>{{ announcement.details }}</div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { EventBus } from 'src/EventBus';

export default {
  name: 'AnnouncementsPage',
  data() {
    return {
      announcements: [],
    };
  },
  created() {
    EventBus.$on('new-announcement', (announcement) => {
      this.announcements.push(announcement);
    });
  },
  beforeDestroy() {
    EventBus.$off('new-announcement'); 
  },
};
</script>
