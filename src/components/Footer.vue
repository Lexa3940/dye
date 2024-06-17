<template>
  <footer class="footer">
    <div class="container">
      <div class="left-side">
        <div class="text-content">
          <span class="main-text">© Цветы 24</span>
          <span class="sub-text">Черкесск ул. Парковая 21</span>
          <span class="sub-text">Черкесск ул. Космонавтов 13</span>
        </div>
      </div>
      <div class="right-side">
<a href="https://wa.me/+79283714169" target="_blank">
  <img height="30" width="30" src="/whats.jpg" alt="Whatsapp" />
</a>
       <a href="https://t.me/+79283714169" target="_blank">
  <img height="30" width="30" src="/tg2.jpg" alt="Telegram" />
</a>

      </div>
    </div>
    <div class="center">
      <span class="center-text"> ✿°•доставка 24/7•°✿  </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
/* Smooth transition between footer and main content */
.footer {
  background-color: rgb(255, 228, 225);
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fadeInUp 1s ease-in-out;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
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
  transition: color 0.3s ease;
}

.sub-text {
  font-size: 1rem;
  transition: color 0.3s ease;
}

.right-side {
  display: flex;
  gap: 10px;
}

img {
  cursor: pointer;
  height: 30px;
  width: 30px;
  transition: transform 0.3s ease;
}

.center {
  text-align: center;
}

.center-text {
  font-size: 1rem;
  transition: color 0.3s ease;
}

/* Hover effects */
.main-text:hover,
.sub-text:hover,
.center-text:hover {
  color: pink;
}

img:hover {
  transform: scale(1.1);
}

/* Media Queries for responsiveness */
@media (max-width: 768px) {
  .main-text {
    font-size: 1.2rem;
  }

  .sub-text {
    font-size: 0.9rem;
  }

  .center-text {
    font-size: 0.9rem;
  }

  .left-side .logo {
    height: 25px;
    width: 25px;
  }

  .right-side img {
    height: 25px;
    width: 25px;
  }
}

@media (max-width: 480px) {
  .main-text {
    font-size: 1rem;
  }

  .sub-text {
    font-size: 0.8rem;
  }

  .center-text {
    font-size: 0.8rem;
  }

  .left-side .logo {
    height: 20px;
    width: 20px;
  }

  .right-side img {
    height: 20px;
    width: 20px;
  }
}
</style>





