<script setup>
import { reactive, watch, ref, onMounted } from 'vue'
import axios from 'axios'
import { inject } from 'vue'
import CardList from '../components/CardList.vue'
import debounce from 'lodash.debounce'

const items = ref([])

const { Cart, addToCart, removeFromCart } = inject('Cart')

const filters = reactive({
  sortBy: 'title',
  searchQuery: ''
})

const onClickAddPlus = (item) => {
  if (!item.isAdded) {
    addToCart(item)
  } else {
    removeFromCart(item)
  }
}

const onChangeSelect = (event) => {
  filters.sortBy = event.target.value
}

const onChangeSearchInput = debounce((event) => {
  filters.searchQuery = event.target.value
}, 300)

const fetchFavorites = async () => {
  try {
    console.log('Favorites fetching logic (implementation needed)')
  } catch (err) {
    console.log(err)
  }
}

const fetchItems = async () => {
  try {
    const params = {
      sortBy: filters.sortBy
    }

    if (filters.searchQuery) {
      params.title = `*${filters.searchQuery}*`
    }

    const { data } = await axios.get('https://49958ace0bc752bd.mokky.dev/items', {
      params
    })
    items.value = data.map((obj) => ({
      ...obj,
      isFavorite: false,
      favoriteId: null,
      isAdded: false
    }))
  } catch (err) {
    console.log(err)
  }
}

onMounted(async () => {
  const localCart = localStorage.getItem('Cart')
  Cart.value = localCart ? JSON.parse(localCart) : []

  await fetchItems()
  await fetchFavorites()

  items.value = items.value.map((item) => ({
    ...item,
    isAdded: Cart.value.some((CartItem) => CartItem.id === item.id)
  }))
})

watch(Cart, () => {
  items.value = items.value.map((item) => ({
    ...item,
    isAdded: false
  }))
})

watch(filters, fetchItems)
</script>

<template>
  <div class="flex justify-between items-center">
    <h2 class="text-3xl font-normal mb-8 relative">
      <span
        class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text"
        style="
          font-size: 40px;
          font-weight: 600;
          color: #722f37;
          text-shadow: 2px 2px 2px #deb887;
          white-space: nowrap; /* Убрать перенос текста */
        "
        >Доставка цветов в Черкесске
      </span>
    </h2>

    <div class="flex gap-4">
      <div class="relative">
        <img class="absolute left-4 top-3" src="\search.svg" alt="Search icon" />
        <input
          @input="onChangeSearchInput"
          class="border rounded-md py-2 pl-11 pr-4 outline-none focus:border-gray-400"
          placeholder="Поиск..."
          style="width: 18cm"
        />
      </div>
      <select @change="onChangeSelect" class="py-2 px-3 border rounded-md outline-none">
        <option value="name">По названию</option>
        <option value="price">По цене (дешевле)</option>
        <option value="-price">По цене(дороже)</option>
      </select>
    </div>
  </div>
  <div class="mt-10">
    <CardList :items="items" @add-to-cart="onClickAddPlus" />
  </div>
</template>
