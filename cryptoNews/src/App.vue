<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <div class="nav_logo">
    <div class="logo">
      <img src="./images/logo50.png" width="35">
      <p>xPanse Ventures 是一家先驱为 DAO 而成立的实验性投资实验室.</p>
    </div>
  </div>
  
  <div class="wrapper">
    <RouterView />
  </div>
</template>
<style lang="less" scoped>
@w: 600px;

.wrapper,
.logo {
  max-width: @w;
  margin: 0 auto;
}


.nav_logo {
  width: 100%;
  background: white;
  position: sticky;
  top: 0;
  box-shadow: 5px 0 5px rgba(70, 70, 70, 0.288);

  .logo {
    padding: 10px;
    text-align: center;
    font-size: 0;

    img {
      transform-style: preserve-3d;
      animation: rotation 8s infinite linear;
    }

    p {
      margin-top: 5px;
      font-size: 14px;
      color: #666666;
    }
  }
}


@keyframes rotation {
  from {
    transform: rotateY(0deg);
  }

  to {
    transform: rotateY(360deg);
  }
}
</style>