<script setup>
const props = defineProps({
  totalPrice: Number
})

const emit = defineEmits(['openDrawer'])
</script>

<template>
  <header
    class="flex flex-col md:flex-row justify-between items-center border-b border-slate-300 px-8 py-8"
  >
    <router-link to="/">
      <div class="flex items-center">
        <img src="/logo.png" alt="logo" class="w-14 h-14" />
        <h2 class="text-xl font-bold uppercase ml-4">Цветы 24 - Доставка цветов</h2>
      </div>
    </router-link>

    <router-link to="/categories">
      <button class="flex items-center cursor-pointer gap-3 text-grey-500 hover:text-black">
        <img src="/cat.png" alt="Categories" class="w-8 h-8" />
        <h2 class="text-2xl font-normal text-category">
          <span style="color: #000000"> Категории цветов и подарков❀༉‧ </span>
        </h2>
      </button>
    </router-link>
    <ul class="flex items-center gap-10 mt-4 md:mt-0">
      <li
        @click="() => emit('openDrawer')"
        class="flex items-center cursor-pointer gap-3 text-grey-500 hover:text-black"
      >
        <img src="/cart.svg" alt="Cart" class="w-8" />
        <span>{{ totalPrice }} ₽</span>
      </li>
    </ul>
  </header>

  <div class="flex flex-col md:flex-row justify-between items-center py-2 px-4">
    <div class="flex items-center gap-4 mt-4 md:mt-0">
      <router-link to="/contacts" class="button">Контакты</router-link>
      <router-link to="/about" class="button">О нас</router-link>
      <router-link to="/delivery" class="button">Доставка</router-link>
      <router-link to="/payment" class="button">Оплата</router-link>
    </div>
  </div>
</template>

<style scoped>
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  color: #800000; /* Красный цвет текста */
  background-color: #ffffff; /* Белый цвет фона */
  border: 1px solid #000000;
  border-radius: 0.375rem;
  transition:
    background-color 0.2s,
    color 0.2s;
}

.button:hover {
  background-color: #f0f0f0; /* Немного серый фон при наведении */
  color: #800000; /* Красный цвет текста при наведении */
}

/* Медиа-запрос для маленьких экранов (например, ширина до 768px) */
@media screen and (max-width: 768px) {
  .button {
    margin-right: 0; /* Убираем правый margin у кнопок */
  }

  /* Уменьшаем размер шрифта для маленьких экранов */
  .button {
    font-size: 0.875rem; /* Настройте размер шрифта по вашему усмотрению */
  }
}
/* Медиа-запрос для маленьких экранов (например, ширина до 768px) */
@media screen and (max-width: 768px) {
  /* Уменьшаем размер шрифта для кнопок категорий на маленьких экранах */
  .text-category {
    font-size: 1rem; /* Настройте размер шрифта по вашему усмотрению */
  }
}
</style>
