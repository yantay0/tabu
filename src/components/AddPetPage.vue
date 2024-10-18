<template>
	<q-page class="add-pet-page bg-light">
		<div class="content-container">
			<div class="form-section">
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
			</div>

			<div class="image-section">
				<q-img src="https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074_1280.jpg" class="pet-image" />
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
};
</script>

<style>
.add-pet-page {
	padding: 20px;
	margin-left: 30%;
	margin-right: 30%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
}

.content-container {
	display: flex;
	flex: 1;
	gap: 20px;
	align-items: stretch;
}

.form-section {
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 20px;
}

.image-section {
	flex: 0 0 50%;
	/* Занимает 50% от контейнера */
	display: flex;
	align-items: center;
	justify-content: center;
}

.pet-image {
	width: 100%;
	height: auto;
	max-height: 600px;
	object-fit: cover;
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
