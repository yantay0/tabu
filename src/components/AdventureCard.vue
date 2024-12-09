<!-- AdventureCard.vue -->
<template>
  <q-card class="adventure-card q-ma-sm">
    <q-card-section class="row items-center justify-between">
      <div class="row items-center">
        <q-avatar>
          <img :src="person.Avatar" :alt="person.PersonName">
        </q-avatar>
        <div class="q-ml-sm">
          <div class="text-weight-bold">{{ person.PersonName }}</div>
          <div class="text-caption">{{ formatDate(person.PubDate) }}</div>
        </div>
      </div>
      <div class="rating">
        <q-rating
          v-model="person.Rating"
          size="1.5em"
          color="yellow"
          icon="star_border"
          icon-selected="star"
          readonly
        />
      </div>
    </q-card-section>

    <q-card-section>
      <div class="text-body1">{{ person.Commentary }}</div>
      <q-chip color="primary" text-color="white" class="q-mt-sm">
        {{ person.Topic }}
      </q-chip>
    </q-card-section>

    <q-card-actions align="right">
      <q-btn flat color="primary" label="Like" @click="handleLike" />
      <q-btn flat color="primary" label="Follow" @click="handleFollow" />
    </q-card-actions>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue';
import { date } from 'quasar';

export default defineComponent({
  name: 'AdventureCard',
  props: {
    person: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatDate(dateString) {
      return date.formatDate(dateString, 'MMMM D, YYYY HH:mm');
    },
    handleLike() {
      this.$emit('like', this.person.id);
    },
    handleFollow() {
      this.$emit('follow', this.person.id);
    }
  }
});
</script>

<style lang="scss" scoped>
.adventure-card {
  max-width: 400px;
  width: 100%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 12px;

  .rating {
    .q-icon {
      font-size: 1.5em;
    }
  }
}
</style>
