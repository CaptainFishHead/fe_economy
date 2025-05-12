<style scoped>
.card {
  margin: 500px;
  width: 300px;
  height: 200px;
  background: rgb(184, 137, 94);
  position: relative;
  display: grid;
  place-content: center;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
}



.border {
  position: absolute;
  inset: 0px;
  border: 2px solid #713F12;
  opacity: 0;
  transform: rotate(10deg);
  transition: all 0.5s ease-in-out;
}

.content {
  transition: all 0.5s ease-in-out;
}

.content .logo {
  height: 35px;
  position: relative;
  width: 33px;
  overflow: hidden;
  transition: all 1s ease-in-out;
  font-family: Source Han Sans CN;
  font-weight: 400;
  font-size: 36px;
  color: #4F4125;
}

.content .logo .logo1 {
  height: 33px;
  position: absolute;
  left: 0;
}

.content .logo .logo2 {
  height: 33px;
  position: absolute;
  left: 33px;
}


.card:hover {
  transform: scale(1);
}

.card:hover .logo {
  width: 134px;
  animation: opacity 1s ease-in-out;
}

.card:hover .border {
  inset: 15px;
  opacity: 1;
  transform: rotate(0);
  transform: scale(0.9);
}


@keyframes opacity {
  0% {
    border-right: 1px solid transparent;
  }

  10% {
    border-right: 1px solid #bd9f67;
  }

  80% {
    border-right: 1px solid #bd9f67;
  }

  100% {
    border-right: 1px solid transparent;
  }
}
</style>

<template>
  <div class="card">
    <div class="border"></div>
    <div class="content">
      <div class="logo">
        <div class="logo1">更多</div>
        <div class="logo2">图片</div>
      </div>
    </div>
  </div>
</template>
