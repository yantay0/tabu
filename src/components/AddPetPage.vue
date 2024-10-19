<template>
	<q-page class="add-pet-page bg-light">
		<div class="content-container row q-gutter-lg">
			<div class="form-section col-12 col-md-7">
				<h2 class="text-h5 text-bold">Основная Информация</h2>

				<q-form class="q-mt-md row q-col-gutter-md">
					<q-select v-model="form.event" label="Что произошло с питомцем?" :options="events"
						class="col-12 col-md-6" />
					<q-input v-model="form.phone" label="Номер телефона" class="col-12 col-md-6" />
					<q-select v-model="form.animalType" label="Вид питомца?" :options="animalTypes"
						class="col-12 col-md-6" />
					<q-select v-model="form.color" label="Цвет животного" :options="colors" class="col-12 col-md-6" />
					<q-select v-model="form.gender" label="Пол питомца?" :options="genders" class="col-12 col-md-6" />
					<q-input v-model="form.details" label="Подробности" type="textarea" class="col-12" />
				</q-form>

				<h2 class="text-h5 text-bold q-mt-lg">Добавить фотографию питомца</h2>
				<q-uploader label="Перетащите файл сюда" hint="Или щелкните, чтобы выбрать файл" class="q-my-md" />

				<q-btn label="Отправить объявление" class="q-mt-lg q-mt-md-button" @click="submitForm" />
			</div>

			<div class="image-section col-12 col-md-5">
				<q-img src="~assets/cat.png" class="col-12 col-md-5"
					contain />
			</div>
		</div>
	</q-page>
</template>

<script>
export default {
	name: "AddPetPage",
	data() {
		return {
			form: {
				event: null,
				phone: "",
				animalType: null,
				color: null,
				gender: null,
				details: "",
			},
			events: ["Пропал", "Найден"],
			animalTypes: ["Собака", "Кошка", "Птица", "Другое"],
			colors: ["Черный", "Белый", "Рыжий", "Серый"],
			genders: ["Мальчик", "Девочка"],
		};
	},
	methods: {
		submitForm() {
			alert("Объявление отправлено!");
		},
	},
};
</script>

<style scoped>
.add-pet-page {
	padding: 20px;
	background-color: #E6E0DC;
}

.content-container {
	display: flex;
	align-items: stretch;
	height: auto;
}

.form-section {
	flex: 1;
}

.image-section {
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
