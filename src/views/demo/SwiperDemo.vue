<template>
  <h1>SwiperDemo</h1>
  <div class="swiper-container">
    <swiper :modules="[Navigation]" :slides-per-view="3" :space-between="30" :centered-slides="true" :loop="true"
      navigation class="my-swiper">
      <swiper-slide v-for="n in productCheckText" :key="n.id" @click="openFile(n)">
        <img :src="n.image" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules'; // ✅ 引入模块
import { ref } from 'vue';

import 'swiper/css';
import 'swiper/css/navigation';

const productCheckText = ref([
  {
    id: 1,
    image: 'https://picsum.photos/id/1018/600/800',
    fileUrl: 'https://example.com/sample.pdf',
    fileType: 'pdf'
  },
  {
    id: 2,
    image: 'https://picsum.photos/id/1015/600/800',
    fileUrl: 'https://example.com/sample.docx',
    fileType: 'word'
  },
  {
    id: 3,
    image: 'https://picsum.photos/id/1019/600/800',
    fileUrl: 'https://example.com/sample.pptx',
    fileType: 'ppt'
  }
]);
const openFile = (item: { fileUrl: string; fileType: string }) => {
  const url = item.fileUrl;
  const type = item.fileType;

  // ✅ Office 文档用 Office Online Viewer 打开
  const officeTypes = ['word', 'excel', 'ppt'];
  if (officeTypes.includes(type)) {
    const encodedUrl = encodeURIComponent(url);
    window.open(`https://view.officeapps.live.com/op/view.aspx?src=${encodedUrl}`, '_blank');
  }
  // ✅ PDF：直接新窗口打开（浏览器原生支持）
  else if (type === 'pdf') {
    window.open(url, '_blank');
  }
  // ✅ 其他类型（如图片或网页）：默认打开
  else {
    window.open(url, '_blank');
  }
};

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
  position: relative;
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
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  &:hover {
    transform: scale(1.01) translateY(-5px);
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
    z-index: 10;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* ✅ 防止图片拉伸 */
  }
}

.swiper-slide-active,
.swiper-slide-duplicate-active {
  transform: scale(1);
}

::v-deep .swiper-button-next,
::v-deep .swiper-button-prev {
  width: 39px;
  height: 88px;
  top: 50%;
  position: absolute;
  transform: translateY(-50%);
  z-index: 10;
}

::v-deep .swiper-button-next {
  right: 0;
  background: url("@/assets/images/groupDetails/to_right.png") no-repeat center;
  background-size: 100% 100%;
}

::v-deep .swiper-button-prev {
  left: 0;
  background: url("@/assets/images/groupDetails/to_left.png") no-repeat center;
  background-size: 100% 100%;
}

::v-deep .swiper-button-next::after,
::v-deep .swiper-button-prev::after {
  display: none; // ✅ 隐藏默认箭头
}
</style>
