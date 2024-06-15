<template>
  <footer class="footer">
    <div class="container">
      <div class="left-side">
        <img src="/logo.png" alt="Logo" class="logo" />
        <span>Цветы 24</span>
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
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
.footer {
  background-color: #FFDEAD;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

.left-side span {
  font-size: 1.5rem;
  font-weight: bold;
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
</style>


