<script setup>
defineProps({
  id: String,
  title: String,
  img: String,
  imageUrl: String,
  price: Number,
  isFavorite: Boolean,
  isAdded: Boolean,
  onClickFavorite: Function,
  onClickAdd: Function
})
</script>

<template>
  <div
    class="flex flex-col w-full max-w-md border border-slate-100 rounded-xl p-8 cursor-pointer transition transform hover:shadow-xl hover:-translate-y-2"
  >
    <img :src="imageUrl" alt="Sneaker" class="object-cover h-100 w-full rounded-t-xl" />
    <p class="mt-6 text-center text-xl font-semibold">{{ title }}</p>

    <div class="flex justify-between items-center mt-6">
      <div class="flex flex-col">
        <span class="text-slate-400">Цена</span>
        <b class="text-lg">{{ price }} ₽</b>
      </div>

      <img
        v-if="onClickAdd"
        @click="onClickAdd"
        :src="!isAdded ? '/plus.svg' : '/checked.svg'"
        alt="Plus"
        class="h-10 w-10 cursor-pointer"
      />
    </div>
  </div>
</template>
