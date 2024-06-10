import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Categories from '../pages/Categories.vue'
import About from '../pages/PagesInfo/About.vue'
import Contacts from '../pages/PagesInfo/Contacts.vue'
import Delivery from '../pages/PagesInfo/Delivery.vue'
import Payment from '../pages/PagesInfo/Payment.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/', name: 'categories', component: Categories  },
  { path: '/about', name: 'About', component: About },
  { path: '/contacts', name: 'Contacts', component: Contacts },
  { path: '/delivery', name: 'Delivery', component: Delivery },
  { path: '/payment', name: 'Payment', component: Payment }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
