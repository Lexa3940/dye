<template>
  <footer class="footer">
    <div class="container">
      <a href="https://api.whatsapp.com/send?phone=89996384073" target="_blank">
        <img height="50" width="50" src="/whats.jpg" alt="Whatsapp" />
      </a>
      <a href="https://t.me/Cloud_020" target="_blank" rel="noopener noreferrer">
        <img height="50" width="50" src="/tg2.jpg" alt="Telegram" />
      </a>
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
  background-color: #D2B48C;
  padding: 20px 0;
  text-align: center;
}

.container {
  display: flex;
  justify-content: center;
  gap: 20px;
}

img {
  cursor: pointer;
}
</style>
