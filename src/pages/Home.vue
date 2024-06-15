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
    // Implement your favorite fetching logic here (similar to fetchItems)
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
  await fetchFavorites() // Call this only if favorites functionality is implemented

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
  <div class="header-container relative mb-8">
    <h2
      class="header-text"
      style="
        color: #722f37;
        text-shadow: 2px 2px 2px #deb887;
        white-space: nowrap;
      "
    >
      Доставка цветов в Черкесске
    </h2>
    <div class="search-filter-container">
      <div class="search-bar relative">
        <img class="search-icon" src="/search.svg" alt="Search icon" />
        <input @input="onChangeSearchInput" class="search-input" placeholder="Поиск..." />
      </div>
      <select @change="onChangeSelect" class="filter-select">
        <option value="name">По названию</option>
        <option value="price">По цене (дешевле)</option>
        <option value="-price">По цене (дороже)</option>
      </select>
    </div>
  </div>
  <div class="mt-10">
    <CardList :items="items" @add-to-cart="onClickAddPlus" />
  </div>
</template>

<style scoped>
.header-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.header-text {
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  color: #722f37;
  text-shadow: 2px 2px 2px #deb887;
  background: linear-gradient(to right, #ff69b4, #ff69b4);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  white-space: nowrap;
  margin-bottom: 16px;
}

.search-filter-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  position: relative;
}

.search-bar {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 8px 12px;
  flex-grow: 1;
  position: relative;
}

.search-icon {
  margin-right: 8px;
}

.search-input {
  flex-grow: 1;
  border: none;
  outline: none;
}

.filter-select {
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}

@media (max-width: 768px) {
  .header-container {
    flex-direction: column;
    align-items: center;
  }

  .header-text {
    font-size: 15px;
    margin-bottom: 8px;
    position: static;
    text-align: center;
  }

  .search-filter-container {
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 8px;
  }

  .search-bar {
    width: 100%;
  }

  .filter-select {
    display: none;
  }

  .search-input {
    font-size: 14px;
  }

  .search-icon {
    width: 16px;
    height: 16px;
  }
}

@media (max-width: 480px) {
  .header-text {
    font-size: 15 px;
  }
}
</style>

