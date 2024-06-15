<template>
  <footer class="footer">
    <div class="container">
      <div class="left-side">
        <div class="text-content">
          <span class="main-text"> © Цветы 24 </span>
          <span class="sub-text">Черкесск ул. Парковая 21</span>
          <span class="sub-text">Черкесск ул. Космонавтов 13</span>
        </div>
      </div>
      <div class="right-side">
        <a href="https://api.whatsapp.com/send?phone=89996384073" target="_blank">
          <img height="30" width="30" src="/whats.jpg" alt="Whatsapp" />
        </a>
        <a href="https://t.me/Cloud_020" target="_blank" rel="noopener noreferrer">
          <img height="30" width="30" src="/tg2.jpg" alt="Telegram" />
        </a>
      </div>
    </div>
    <div class="center">
      <span class="center-text"> доставка 24/7 </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
.footer {
  background-color: rgb(255, 228, 225);
  padding: 30px; /* Increased padding for more height */
  display: flex;
  flex-direction: column; /* Align items in a column */
  align-items: center;
}

.container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px; /* Add some space between container and center */
}

.left-side {
  display: flex;
  align-items: center;
}

.left-side .logo {
  height: 30px;
  width: 30px;
  margin-right: 10px;
}

.text-content {
  display: flex;
  flex-direction: column;
}

.main-text {
  font-size: 1.5rem;
  font-weight: bold;
}

.sub-text {
  font-size: 1rem; /* Smaller font size for the additional text */
}

.right-side {
  display: flex;
  gap: 10px;
}

img {
  cursor: pointer;
  height: 30px;
  width: 30px;
}

.center {
  text-align: center;
}

.center-text {
  font-size: 1rem;
}
</style>




