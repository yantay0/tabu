<template>
	<q-page padding class="bg-light">

		<div class="main-info q-mt-xl q-px-xl row items-center justify-between">
			<div class="col-12 col-md-6">
				<h1 class="site-title">tabu.kz</h1>
				<h2 class="subtitle">Верните Своего Друга Домой</h2>
				<p class="text-subtitle2">
					Сайт предлагает вам помощь в размещении объявления о пропаже или
					находки питомца. Мы предоставляем инструменты и ресурсы, чтобы помочь вам
					распространить информацию в виде объявлений и фотографий.
				</p>
				<q-btn label="Подать объявление" class="q-mt-md q-mt-md-button" @click="$router.push('/add-pet')" />
			</div>
			<q-img src="~assets/corgi.png" class="col-12 col-md-5"
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
	background-color: #DFD2CC;
	color: #3E1F47;
}
.site-title {
  font-size: 5rem;
  font-weight: bold;
  color: #3E1F47;
}
.q-mt-md-button {
 background-color: #CADDBF;
}
</style>