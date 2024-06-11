<script setup>
import { ref, computed, inject } from 'vue'
import axios from 'axios'

import DrawerHead from './DrawerHead.vue'
import CartItemList from './CartItemList.vue'
import InfoBlock from './InfoBlock.vue'

const props = defineProps({
  totalPrice: Number
})

// Состояния для хранения данных заказа
const customerName1 = ref('')
const customerName2 = ref('')
const customerNumber1 = ref('')
const customerNumber2 = ref('')
const customerAddress = ref('')
const deliveryDateTime = ref(null)

// Инжектирование состояния корзины и функции закрытия
const { Cart, closeDrawer } = inject('Cart')

// Флаг для отслеживания процесса создания заказа
const isCreating = ref(false)

// Идентификатор заказа
const orderId = ref(null)

// Метод доставки и его стоимость
const deliveryMethod = ref('pickup')
const deliveryCost = computed(() => (deliveryMethod.value === 'courier' ? 500 : 0))

// Функция создания заказа
const createOrder = async () => {
  try {
    isCreating.value = true
    const { data } = await axios.post(`https://49958ace0bc752bd.mokky.dev/orders`, {
      items: Cart.value,
      totalPrice: props.totalPrice.value + deliveryCost.value,
      customer: {
        name1: customerName1.value,
        name2: customerName2.value,
        number1: customerNumber1.value,
        number2: customerNumber2.value,
        address: customerAddress.value
      },
      deliveryMethod: deliveryMethod.value,
      deliveryDateTime: deliveryDateTime.value // Включаем выбранную дату и время в данные заказа
    })

    Cart.value = [] // Очищаем корзину
    orderId.value = data.id // Устанавливаем идентификатор заказа
  } catch (err) {
    console.log(err)
  } finally {
    isCreating.value = false
  }
}

// Вычисляемое свойство, определяющее пуста ли корзина
const cartIsEmpty = computed(() => Cart.value.length === 0)

// Вычисляемое свойство, определяющее заблокирована ли кнопка "Оформить заказ"
const buttonDisabled = computed(() => isCreating.value || cartIsEmpty.value)
</script>

<template>
  <div class="fixed top-0 left-0 h-full w-full bg-black opacity-50 z-20"></div>

  <div
    class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-lg p-8 z-30 max-h-full overflow-y-auto"
  >
    <DrawerHead />

    <div v-if="orderId">
      <h2>
        Заказ успешно оформлен! В ближайшее время для подтверждения заказа с вами свяжется наш
        сотрудник.
      </h2>
    </div>

    <div v-else>
      <CartItemList />

      <div class="flex flex-col gap-4 mt-7">
        <!-- Итоговая стоимость и способ доставки -->
        <div class="flex gap-2">
          <span class="label-text"> Итого:</span>
          <div class="flex-1 border-b border-dashed"></div>
          <b class="final-total">{{ totalPrice + deliveryCost }} ₽ </b>
        </div>
        <div class="flex gap-2">
          <span class="label-text"> Доставка:</span>
          <div class="flex-1 border-b border-dashed"></div>
          <b class="delivery-cost">{{ deliveryCost }} ₽ </b>
        </div>

        <!-- Поля для оформления заказа -->
        <div v-if="!isCreatingOrder">
          <div class="flex gap-2">
            <label for="delivery-pickup" class="delivery-option">Самовывоз</label>
            <input
              type="radio"
              id="delivery-pickup"
              name="delivery-method"
              v-model="deliveryMethod"
              value="pickup"
            />
          </div>
          <div class="flex gap-2">
            <label for="delivery-courier" class="delivery-option">Курьер</label>
            <input
              type="radio"
              id="delivery-courier"
              name="delivery-method"
              v-model="deliveryMethod"
              value="courier"
            />
          </div>
          <div v-if="deliveryMethod !== 'courier'">
            <input type="text" v-model="customerName1" placeholder="Ваше имя" class="input-field" />
            <input
              type="text"
              v-model="customerNumber1"
              placeholder="Ваш телефон (мы свяжемся для подтверждения заказа)"
              class="input-field"
            />
            <input
              type="text"
              v-model="customerName2"
              placeholder="Имя получателя"
              class="input-field"
            />
            <input
              type="text"
              v-model="customerNumber2"
              placeholder="Телефон получателя"
              class="input-field"
            />
          </div>
          <div v-if="deliveryMethod === 'courier'">
            <input type="text" v-model="customerName1" placeholder="Ваше имя" class="input-field" />
            <input
              type="text"
              v-model="customerNumber1"
              placeholder="Ваш телефон (мы свяжемся для подтверждения заказа)"
              class="input-field"
            />
            <input
              type="text"
              v-model="customerName2"
              placeholder="Имя получателя"
              class="input-field"
            />
            <input
              type="text"
              v-model="customerNumber2"
              placeholder="Телефон получателя"
              class="input-field"
            />
            <input
              type="text"
              v-model="customerAddress"
              placeholder="Адрес доставки"
              class="input-field"
            />
          </div>
          <!-- Поля для выбора даты и времени -->
          <div>
            <label class="datetime-label">Выберите удобную дату и время доставки/самовывоза:</label>
            <input type="datetime-local" v-model="deliveryDateTime" class="input-field" />
          </div>
          <!-- Кнопка оформления заказа -->
          <button :disabled="buttonDisabled" @click="createOrder" class="action-button">
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.input-field {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.action-button {
  width: 100%;
  padding: 12px;
  background-color: #ff69b4; /* Розовый цвет кнопки */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.action-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.label-text, .final-total, .delivery-cost, .delivery-option, .datetime-label {
  font-size: 14px; /* Default font size for these elements */
}

.final-total b, .delivery-cost b {
  font-weight: bold;
}

/* Общие стили для корзины */
.cart-container {
  /* Ваши общие стили для корзины */
}

/* Медиа-запрос для маленьких экранов (например, ширина до 768px) */
@media screen and (max-width: 768px) {
  .cart-container {
    width: calc(80% - 40px); /* Ширина корзины на маленьких экранах */
    margin: 20px; /* Отступы от краев */
  }

  /* Уменьшаем размеры текста и элементов на маленьких экранах */
  .input-field,
  .action-button,
  .label-text, .final-total, .delivery-cost, .delivery-option, .datetime-label {
    font-size: 12px;
  }

  .final-total b, .delivery-cost b {
    font-size: 14px;
  }
}

/* Медиа-запрос для очень маленьких экранов (например, ширина до 480px) */
@media screen and (max-width: 480px) {
  .cart-container {
    width: calc(90% - 20px); /* Ширина корзины на очень маленьких экранах */
    margin: 10px; /* Отступы от краев */
  }

  /* Уменьшаем размеры текста и элементов на очень маленьких экранах */
  .input-field,
  .action-button,
  .label-text, .final-total, .delivery-cost, .delivery-option, .datetime-label {
    font-size: 12px;
  }

  .final-total b, .delivery-cost b {
    font-size: 12px;
  }
}
</style>


