<template>
  <q-page class="flex q-pa-lg bg-light">
    <!-- Announcements Section -->
    <div class="announcements-container q-gutter-md">
      <div
        v-for="(announcement, index) in announcements"
        :key="index"
        class="announcement-card q-pa-md bg-grey-2"
        style="border-radius: 10px; display: flex;">
      <!-- Left Column: Contact Information -->
      <div class="left-column q-pa-md bg-cyan-9 text-white" style="flex: 1;"> <!-- Set flex property -->
        <div class="text-h5 text-bold">Контакты</div>
        <q-input filled v-model="announcement.contact.name" label="Имя" class="q-mt-md rounded-input" />
        <q-input filled v-model="announcement.contact.phone" label="Телефон" class="q-mt-md rounded-input" />
        <q-input filled v-model="announcement.contact.email" label="Email" class="q-mt-md rounded-input" />
        <q-btn class="q-mt-lg q-ml-sm rounded" color="white" text-color="cyan-9" label="Связаться" />
      </div>

      <!-- Right Column: Pet Details -->
        <div class="right-column q-pa-md" style="flex: 2;"> <!-- Set flex property -->
          <!-- Title -->
          <div class="text-h6 text-bold q-mb-md">{{ announcement.title }}</div>

          <!-- Container for Image and Description -->
          <div class="image-description-container" style="display: flex; align-items: flex-start;">
            <!-- Pet Main Image -->
            <q-img :src="announcement.image" style="width: 45%; margin-right: 16px;" /> <!-- Add margin-right for spacing -->

            <!-- Pet Description -->
            <div class="description-container" style="flex: 1;"> <!-- Allow description to take remaining space -->
              <div class="text-bold q-mb-xs">Описание</div>
              <q-list bordered>
                <q-item>
                  <q-item-section>Пол</q-item-section>
                  <q-item-section>{{ announcement.gender }}</q-item-section>
                </q-item>
                <q-item>
                  <q-item-section>Порода</q-item-section>
                  <q-item-section>{{ announcement.breed }}</q-item-section>
                </q-item>
                <q-item>
                  <q-item-section>Цвет</q-item-section>
                  <q-item-section>{{ announcement.color }}</q-item-section>
                </q-item>
              </q-list>

              <!-- Pet Details -->
              <div class="q-mt-md">
                <div class="text-bold q-mb-xs">Подробности</div>
                <p>{{ announcement.details }}</p>
              </div>
            </div>
          </div>
        </div>
    </div>
      </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      announcements: [
        {
          title: "Пропал пес Артос",
          image: "data:image/jpeg;base64,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",
          gender: "Самец",
          breed: "Фельш Корги",
          color: "Рыжий",
          details: "Обрезаны уши, идёт на контакт с людьми, добрый. На шее ошейник черного цвета. Понимает все команды, очень умная добрая собака, пожалуйста, если кто-нибудь видел, напишите.",
            contact: {
            name: "Улан",
            phone: "8-707-774-85-25",
            email: "ERIKOV25_05@GMAIL.COM"
          }
        },
        {
          title: "Пропала кошка Мила",
          image: "data:image/jpeg;base64,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",
          gender: "Самка",
          breed: "Британская короткошерстная",
          color: "Серая",
          details: "Очень пугливая, ушки округлые. Если кто-то видел, пожалуйста, свяжитесь.",
          contact: {
            name: "Алия",
            phone: "8-701-234-56-78",
            email: "aliya@example.com"
          }
        },
        // Добавьте другие объявления по аналогии
      ]
    };
  }
};
</script>

<style scoped>
.announcement-card {
  display: flex; /* Enables flexbox layout */
}

.left-column {
  flex: 1; /* Takes up 1 part of the space */
  padding: 16px; /* Optional padding for better spacing */
  background-color: #009688; /* Example color */
  color: white; /* Text color */
}
/* Optional: To ensure the input looks good with rounded corners */
.rounded-input .q-field__control {
  border-radius: 20px; /* Make sure inner control has the same border radius */
}

/* Optional: Adjust the color of the label when using filled */
.rounded-input .q-field__label {
  color: #000; /* Change label color to black or desired color */
}
.rounded-input {
  border-radius: 20px; /* Adjust the border radius as needed */
  background-color: white; /* Set the background color to white */
}

.right-column {
  flex: 2; /* Takes up 2 parts of the space */
  padding: 16px; /* Optional padding */
}

/* You can add media queries for responsive design */
@media (max-width: 600px) {
  .announcement-card {
    flex-direction: column; /* Stack columns on small screens */
  }
}
</style>
