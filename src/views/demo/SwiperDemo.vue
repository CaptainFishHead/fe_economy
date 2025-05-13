<!-- SwiperDemo.vue -->
<template>
  <h1>SwiperDemo</h1>
  <div class="swiper-container">
    <swiper :slides-per-view="3" :space-between="30" :centered-slides="true" :loop="true" navigation class="my-swiper">
      <swiper-slide v-for="n in productCheckText" :key="n.id"><img :src="n.image"></swiper-slide>

      <!-- 导航按钮 -->
      <template #navigation-prev>
        <div class="swiper-button-prev" />
      </template>
      <template #navigation-next>
        <div class="swiper-button-next" />
      </template>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { ref, onMounted, } from 'vue'
import 'swiper/css';
import 'swiper/css/navigation';
const productCheckText = ref([
  { id: 1, image: 'https://picsum.photos/id/1018/600/800' },
  { id: 2, image: 'https://picsum.photos/id/1015/600/800' },
  { id: 1, image: 'https://picsum.photos/id/1018/600/800' },
  { id: 2, image: 'https://picsum.photos/id/1015/600/800' },
  { id: 1, image: 'https://picsum.photos/id/1018/600/800' },
  // { id: 2, image: 'https://picsum.photos/id/1015/600/800' },
  // { id: 1, image: 'https://picsum.photos/id/1018/600/800' },
  // { id: 2, image: 'https://picsum.photos/id/1015/600/800' },
  // { id: 3, image: 'https://picsum.photos/id/1019/600/800' }
])
</script>

<style scoped lang="scss">
h1 {
  color: black;
  font-size: 30px;
  font-weight: 900;
  text-align: center;
  margin: 30px auto;
}

.swiper-container {
  width: 100%;
  height: 763px;
  padding: 10px 206px;
}

.my-swiper {
  width: 100%;
  height: 100%;

}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  background: #fff;
  height: 740px;
  transform: scale(0.8);
  transition: 300ms;
  border: 2px solid #d40c0c;

  img {
    width: 100%;
    height: 100%;
  }
}

.swiper-slide-active,
.swiper-slide-duplicate-active {
  transform: scale(1);
}



::v-deep .swiper-button-next,
::v-deep .swiper-button-prev {
  color: #000; // 可选：黑色图标
  width: 40px;
  height: 40px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
}

::v-deep .swiper-button-next::after,
::v-deep .swiper-button-prev::after {
  font-size: 20px;
}
</style>
