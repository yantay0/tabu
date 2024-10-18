<template>
	<q-page padding class="bg-light">

		<div class="main-info q-mt-xl q-px-xl row items-center justify-between">
			<div class="col-12 col-md-6">
				<h1 class="text-h3 text-bold">Верните Своего Друга Домой</h1>
				<p class="text-subtitle2">
					Сайт предлагает вам помощь в размещении объявления о пропаже или
					находки питомца. Мы предоставляем инструменты и ресурсы, чтобы помочь вам
					распространить информацию в виде объявлений и фотографий.
				</p>
				<q-btn label="Подать объявление" color="green" class="q-mt-md" @click="$router.push('/add-pet')" />
			</div>
			<q-img src="https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074_1280.jpg" class="col-12 col-md-5"
				contain />
		</div>
	</q-page>
</template>

<script>
export default {
	name: "HomePage",
};
</script>

<style>
.bg-light {
	background-color: #f8f8f8;
}
</style>