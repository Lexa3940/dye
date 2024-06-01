<script setup>
defineProps({
  totalPrice: Number
})

const emit = defineEmits(['openDrawer'])
</script>

<template>
  <header class="flex justify-between border-b border-slate-300 px-8 py-8">
    <router-link to="/">
      <div class="flex items-center cursor-pointer gap-3 text-grey-500 hover:text-black">
        <img src="/logo.png" alt="logo" class="w-20" />
        <div>
          <h2 class="text-xl font-vold uppercase">Цветы 24 - Доставка цветов</h2>
        </div>
      </div>
    </router-link>

    <div>
      <ul class="frex items-center gap-10">
        <router-link to="/categories">
          <li class="flex items-center cursor-pointer gap-3 text-grey-500 hover:text-black">
            <img src="/cat.png" alt="Cart" class="w-10" />
            <h2 class="text-3xl font-normal mb-8 relative">
              <span
                class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text"
                style="
                  text-align: center;
                  font-size: 2rem;
                  white-space: nowrap; /* Убрать перенос текста */
                "
              >
                Категории цветов и подарков❀༉‧
              </span>
            </h2>
          </li>
        </router-link>
      </ul>
    </div>

    <ul class="frex items-center gap-10">
      <li
        @click="() => emit('openDrawer')"
        class="flex items-center cursor-pointer gap-3 text-grey-500 hover:text-black"
      >
        <img src="/cart.svg" alt="Cart" />
        <span>{{ totalPrice }} </span>
      </li>
    </ul>
  </header>
  <div class="header-nav">
    <!-- Добавленный код для стилизации кнопок -->
    <div class="button-wrapper">
      <a href="/delivery" class="button">Доставка</a>
      <a href="/contacts" class="button">Контакты</a>
      <a href="/payment" class="button">Оплата</a>
      <a href="/about" class="button">О нас</a>
    </div>
  </div>
</template>
<style scoped>
/* Стили для кнопок */
.button-wrapper {
  display: flex;
  gap: 16px;
}

.button {
  text-decoration: none;
  background-color: rgba(255, 255, 255, 0.9); /* More opaque on hover */
  box-shadow: 0 0 5px 2px rgba(255, 255, 255, 0.4);
  color: #731515;
  font-size: 20px;
  font-weight: 300;
  padding: 10px 20px;
  border: 2px solid #333;
  border-radius: 10px;
  transition: all 0.3s;
}
</style>
