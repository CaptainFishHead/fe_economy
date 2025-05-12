<script setup lang="ts">
import { ref, onMounted, computed, nextTick } from 'vue'
import { getClassPhoto, getClassTeacherList, getResourceList, getClassVideoList } from '@/api/home/index'
import { useRoute } from 'vue-router'
import { gsap } from 'gsap'


const aimingPointData = ref([
  { name: '上课照片', id: 'attend' },
  { name: '教师风采', id: 'teacher' },
  { name: '结业视频', id: 'completionVideo' },
  { name: '档案资料', id: 'materials' },
])
const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

const route = useRoute()
const photoId = ref<string>('')
const photoCover = ref<string>('')
photoId.value = route.query.id as string;
photoCover.value = route.query.image as string;
onMounted(() => {
  getPClassPhotoData()
  getClassTeacherData()
})


const photoQuery = ref({ page: 1, limit: 11, class_id: photoId.value })

// 上课照片数据
const photoList = ref([])
const getPClassPhotoData = () => {
  getClassPhoto({ page: 1, limit: 11, class_id: photoId.value }).then(res => {
    photoList.value = res.data
    nextTick(() => {
      gsap.from('.photoItem', {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.15
      })
    })
  })
}
onMounted(async () => {
  await nextTick()
  const attendSection = document.querySelector('.attend')
  let canAnimate = true
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && canAnimate) {
        canAnimate = false
        gsap.fromTo('.photoItem',
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            stagger: 0.15,
            onComplete: () => {
              setTimeout(() => { canAnimate = true }, 3000) // 3秒后允许再次触发
            }
          }
        )
      }
    })
  }, { threshold: 0.3 })

  if (attendSection) observer.observe(attendSection)
})

// 教师风采数据
const teacherData = ref([])
const defaultTeacher = ref({
  name: '',
  image: '',
  phrase: ''
}) // 默认教师数据
const getClassTeacherData = () => {
  getClassTeacherList(photoQuery.value).then(res => {
    teacherData.value = res.data
    defaultTeacher.value = teacherData.value[0]
  })
}

// 结业视频数据
// const accordionItems = ref([
//   { title: '中国铁建投资集团有限公司第一期青年英才暨青马工程培训班结业视频', url: 'http://hxoss.huixianxt.com/p5Camm5pHGT8pNjbPZ.mp4' },
//   { title: '中国铁建投资集团有限公司第二期青年英才暨青马工程培训班结业视频', url: 'http://hxoss.huixianxt.com/p5Camm5pHGT8pNjbPZ.mp4' },
//   { title: '中国铁建投资集团有限公司第三期青年英才暨青马工程培训班结业视频', url: 'http://hxoss.huixianxt.com/p5Camm5pHGT8pNjbPZ.mp4' },
//   { title: '中国铁建投资集团有限公司第四期青年英才暨青马工程培训班结业视频', url: 'http://hxoss.huixianxt.com/p5Camm5pHGT8pNjbPZ.mp4' }
// ]);

const accordionItems = ref([])
const lastIndex = ref<number>(0)
const aboutVideoRef = ref<HTMLVideoElement[]>([]);
const showPlay = ref<boolean>(false);
const getClassVideoData = () => {
  getClassVideoList({
    class_id: photoId.value
  }).then(res => {
    accordionItems.value = res.data
    lastIndex.value = accordionItems.value.length - 1;
    nextTick(() => {
      const firstItem = document.querySelectorAll('.accordion-item')[lastIndex.value];
      const firstVideo = firstItem.querySelector('.accordion-video');
      if (aboutVideoRef.value[lastIndex.value].paused) {
        aboutVideoRef.value[lastIndex.value].play();
        showPlay.value = false;
      }
      gsap.to(firstItem, { width: '1344px', marginRight: '100px', duration: 0.5 });
      gsap.to(firstVideo, { width: '1024px', duration: 0.5 });
    });
  })
}
const handleMouseEnter = (index: number) => {
  const targetItem = document.querySelectorAll('.accordion-item')[index];
  const targetVideo = targetItem.querySelector('.accordion-video');
  if (aboutVideoRef.value[index].paused) {
    aboutVideoRef.value[index].play();
    showPlay.value = false;
  }
  gsap.to(targetItem, { width: '1344px', marginRight: '100px', duration: 0.5 });
  gsap.to(targetVideo, { width: '1024px', duration: 0.5 });
  accordionItems.value.forEach((_, i) => {
    if (i !== index) {
      const otherItem = document.querySelectorAll('.accordion-item')[i];
      const otherVideo = otherItem.querySelector('.accordion-video');
      gsap.to(otherItem, { width: '320px', marginRight: '', duration: 0.5 });
      gsap.to(otherVideo, { width: '0px', duration: 0.5 });
    }
  });
};
const handleMouseLeave = (index: number) => {
  if (index == lastIndex.value) {
    return;
  }
  const targetItem = document.querySelectorAll('.accordion-item')[index];
  const targetVideo = targetItem.querySelector('.accordion-video');
  gsap.to(targetItem, { width: '320px', marginRight: '', duration: 0.5 });
  gsap.to(targetVideo, { width: '0px', duration: 0.5 });
};


const videoStatus = (index: number) => {
  if (aboutVideoRef.value[index].paused) {
    showPlay.value = true;
  }
};

const playVideo = (index: number) => {
  if (aboutVideoRef.value[index].paused) {
    aboutVideoRef.value[index].play();
    showPlay.value = false;
  }
};

onMounted(() => {
  getClassVideoData()
});




// 档案资料数据
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
const files = ref()
onMounted(() => {
  getResourceData()
})
const productCheckText = ref([])
// 加载数据
const getResourceData = () => {
  getResourceList({ class_id: photoId.value }).then(res => {
    files.value = res.data
    productCheckText.value = res.data[0].list || []
  })
}
// const productCheckText = ref([
//   { id: 1, image: 'https://picsum.photos/id/1018/600/800' },
//   { id: 2, image: 'https://picsum.photos/id/1015/600/800' },
//   // { id: 1, image: 'https://picsum.photos/id/1018/600/800' },
//   // { id: 2, image: 'https://picsum.photos/id/1015/600/800' },
//   // { id: 1, image: 'https://picsum.photos/id/1018/600/800' },
//   // { id: 2, image: 'https://picsum.photos/id/1015/600/800' },
//   // { id: 1, image: 'https://picsum.photos/id/1018/600/800' },
//   // { id: 2, image: 'https://picsum.photos/id/1015/600/800' },
//   // { id: 3, image: 'https://picsum.photos/id/1019/600/800' }
// ])
// 切换文件时更新图像列表
const onClickFiles = (item) => {
  productCheckText.value = item.list || []
}
// slide 数量计算
const productTextLength = computed(() => {
  const len = productCheckText.value.length
  return len >= 5 ? 4.95 : Math.max(1, len)
})
const centeredSlides = computed(() => productCheckText.value.length <= 2)
const loopSlides = computed(() => productCheckText.value.length >= 3)

// Swiper 模块
const productSwiper = [EffectCoverflow, Autoplay]

// Coverflow 配置
const productSwiperCoverflowEffect = {
  rotate: 0,// 旋转角度（左右滑块）
  stretch: 80,// 间距（0 代表默认）
  depth: 0,// 深度（滑块间的远近）
  modifier: 1, // 整体效果强度
  slideShadows: false,// 开启阴影
  scale: 0.75,// 中间缩放比例
}

// 断点响应
const talentBreakpoints = {
  320: {
    slidesPerView: 1,
    centeredSlides: true
  },
  768: {
    slidesPerView: 1.5,
    centeredSlides: true
  },
  1024: {
    slidesPerView: 3,
    centeredSlides: false
  },
  1440: {
    slidesPerView: 4,
    centeredSlides: false
  }
}


</script>
<template>
  <div class="container">
    <div class="display">
      <el-image :src="photoCover + '?x-oss-process=image/quality,q_60'" class="photo" v-if="photoCover" />
      <img src="@/assets/images/groupDetails/cloud.png" class="cloud">
    </div>
    <div class="attend" id="attend">
      <div class="top">
        <div class="title">上课照片</div>
      </div>
      <div class="content">
        <div class="photoList">
          <template v-for="(item, index) in photoList" :key="index">
            <div v-if="index == 2" class="photoItem itemMore">
              <div class="border"></div>
              <div class="more">
                <div class="logo">
                  <div class="logo1">更多</div>
                  <div class="logo2">图片</div>
                </div>
              </div>
            </div>
            <div class="photoItem" v-else>
              <el-image :src="item.url + '?x-oss-process=image/quality,q_60'" class="photoItem-img" lazy fit="cover" />
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="teacher" id="teacher">
      <div class="top">
        <div class="title">教师风采</div>
      </div>
      <div class="content">

        <img src="@/assets/images/groupDetails/flower1.png" class="flower1">
        <div class="viewport">
          <div class="viewport_left">
            <img :src="defaultTeacher.image" class="teacher_img">
          </div>
          <div class="viewport_right">
            <div class="teacher_name"> {{ defaultTeacher.name }} </div>
            <div class="present dian5">{{ defaultTeacher.phrase }}</div>
            <div class="learn_more">了解详情＞＞</div>
            <div class="courseware" v-if="false">
              <div class="courseware-title">相关课件：</div>
              <div class="courseware-box">
                <div class="courseware-box-text">老师课件</div>
                <img src="@/assets/images/groupDetails/doc.png">
              </div>
            </div>
          </div>
        </div>

        <div class="switch">
          <div class="switch-btn left_btn"></div>
          <div class="switch-list">
            <div class="switch-list-item" v-for="(item, index) in teacherData" :key="index">
              <div class="switch-list-item-card" @click="defaultTeacher = item">
                <img :src="item.image" class="switch-list-item-card-img">
              </div>
              <div class="switch-list-item-name">{{ item.name }}</div>
            </div>
          </div>
          <div class="switch-btn right_btn"></div>
        </div>
      </div>

    </div>
    <div class="completionVideo" id="completionVideo">
      <img src="@/assets/images/groupDetails/flower2.png" class="flower2">
      <div class="top">
        <div class="title">结业视频</div>
      </div>
      <div class="content">
        <div class="accordion-container">
          <ul class="accordion-list">
            <li v-for="(item, index) in accordionItems" :key="index" class="accordion-item"
              @mouseenter="handleMouseEnter(index)" @mouseleave="handleMouseLeave(index)">
              <div class="accordion-text">
                <div class="title">{{ item.title }}</div>
                <img src="@/assets/images/groupDetails/bamboo.png" class="bamboo">
              </div>
              <div class="accordion-video">
                <video ref="aboutVideoRef" :src="item.url" controls x5-video-player-fullscreen="true" x5-playsinline
                  playsinline webkit-playsinline muted loop preload @mouseenter="videoStatus(index)"></video>
                <div v-if="showPlay" class="showPlay">
                  <img class="auto-center" src="@/assets/images/groupDetails/play.png" alt="播放" title="播放"
                    @click="playVideo(index)">
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="materials" id="materials">
      <img src="@/assets/images/groupDetails/flower3.png" class="flower3">
      <div class="top">
        <div class="title">档案资料</div>
      </div>
      <div class="content">
        <div class="product_swiper" :class="{ 'is-center': productCheckText.length <= 2 }">
          <swiper :slides-per-view="productTextLength" :centered-slides="centeredSlides" :loop="loopSlides"
            :breakpoints="talentBreakpoints" :effect="'coverflow'" :coverflow-effect="productSwiperCoverflowEffect"
            :autoplay="{ delay: 2000, disableOnInteraction: false }" :speed="1500" :modules="productSwiper"
            :observer="true" :resize-observer="true" :observe-parents="true" :slide-to-clicked-slide="true"
            :grab-cursor="true">
            <swiper-slide v-for="item in productCheckText" :key="item.id">
              <div class="ipc-right-swiperslide">
                <img :src="item.image + '?x-oss-process=image/quality,q_80'" class="img-cover" />
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class='files_tab'>
          <div class="files_item" v-for="(item, index) in files" :key="index" @click="onClickFiles(item)">
            <!-- <img :src="item.img" /> -->
            <div class="files_item_title">{{ item.title }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="aimingPoint">
      <div class="item" v-for="(item, index) in aimingPointData" :key="index" @click="scrollToSection(item.id)">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  padding-bottom: 30px;

  .aimingPoint {
    position: fixed;
    top: 350px;
    right: 78px;
    z-index: 1000;

    .item {
      width: 187px;
      height: 54px;
      text-align: center;
      line-height: 54px;
      font-family: Adobe Heiti Std;
      font-weight: normal;
      font-size: 26px;
      color: #FCF3D2;
      background: url('@/assets/images/groupDetails/btn.png') no-repeat;
      background-size: 100% 100%;
      margin-bottom: 30px;
    }
  }
}

.display,
.attend,
.teacher,
.completionVideo,
.materials {
  width: 100%;
  height: 100vh;
  // min-height: 1080px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .top {
    margin-top: 110px;
    width: 1112px;
    height: 56px;
    background: url('@/assets/images/groupDetails/brows.png') no-repeat;
    background-size: 100% 100%;
    position: relative;

    .title {
      font-family: Source Han Sans CN;
      font-weight: bold;
      font-size: 53px;
      color: #794110;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .content {
    flex: 1;
    width: 100%;
    margin-top: 120px;
  }
}

.display {
  width: 100%;
  height: 100%;
  min-height: 1080px;
  position: relative;

  .photo {
    width: 100%;
    height: 100%;
  }

  .cloud {
    width: 100%;
    height: 623px;
    position: absolute;
    bottom: -310px;
    left: 0;

  }
}

.attend {
  .content {
    width: 100%;
    height: 100%;

    .photoList {
      width: 100%;
      height: 689px;
      display: grid;
      grid-template-columns: 320px 296px 354px 440px 506px;
      grid-template-rows: repeat(15, 45px);
      gap: 1px;
    }

    .itemMore {
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

    .more {
      transition: all 0.5s ease-in-out;
    }

    .more .logo {
      height: 50px;
      position: relative;
      width: 80px;
      overflow: hidden;
      transition: all 1s ease-in-out;
      font-family: Source Han Sans CN;
      font-weight: 400;
      font-size: 36px;
      color: #4F4125;
    }

    .more .logo .logo1 {
      height: 50px;
      position: absolute;
      left: 0;
    }

    .more .logo .logo2 {
      height: 50px;
      position: absolute;
      left: 80px;
    }


    .itemMore:hover {
      transform: scale(1);
    }

    .itemMore:hover .logo {
      width: 160px;
      animation: opacity 1s ease-in-out;
    }

    .itemMore:hover .border {
      inset: 15px;
      opacity: 1;
      transform: rotate(0);
      transform: scale(0.95);
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



    /* 所有项默认样式 */
    .photoItem {
      transition: transform 0.3s ease, box-shadow 0.3s ease;

      &-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }



      &:hover {
        transform: scale(1.05) translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        z-index: 2;
      }
    }

    /* 自定义位置和行高（span 控制） */
    .photoItem:nth-child(1) {
      grid-column: 1;
      grid-row: 1 / span 7;
    }

    .photoItem:nth-child(2) {
      grid-column: 2;
      grid-row: span 9;
    }

    .photoItem:nth-child(3) {
      grid-column: 3;
      grid-row: 1 / span 5;
    }

    .photoItem:nth-child(4) {
      grid-column: 4;
      grid-row: span 4;
    }

    .photoItem:nth-child(5) {
      grid-column: 5;
      grid-row: span 7;
    }

    .photoItem:nth-child(6) {
      grid-column: 1;
      grid-row: span 8;
    }

    .photoItem:nth-child(7) {
      grid-column: 2;
      grid-row: span 6;
    }

    .photoItem:nth-child(8) {
      grid-column: 3;
      grid-row: 6 / span 5;
    }

    .photoItem:nth-child(9) {
      grid-column: 4;
      grid-row: 5 / span 6;
    }

    .photoItem:nth-child(10) {
      grid-column: 3 / 5;
      grid-row: 11 / span 5;
    }

    .photoItem:nth-child(11) {
      grid-column: 5;
      grid-row: 8 / span 8;
    }
  }
}

.teacher {
  .content {
    background: url('@/assets/images/groupDetails/bj_2.png') no-repeat;
    background-size: 100% 100%;
    position: relative;
    margin-top: 60px;

    .flower1 {
      width: 290px;
      height: 435px;
      position: absolute;
      left: 0;
      top: 0;
    }


    .viewport {
      display: flex;
      justify-content: center;
      align-items: center;

      .viewport_left {
        z-index: 10;
        width: 575px;
        height: 575px;
        background: url('@/assets/images/groupDetails/border.png') no-repeat;
        background-size: 100% 100%;
        padding: 24px 24px 32px 28px;
        overflow: hidden;

        .teacher_img {
          width: 100%;
          height: 100%;
          // object-fit: cover;
          border-radius: 50%;
        }
      }

      .viewport_right {
        z-index: 1;
        margin-left: -180px;
        width: 690px;
        height: 473px;
        background: url('@/assets/images/groupDetails/teacher_card.png') no-repeat;
        background-size: 100% 100%;
        padding: 24px 108px 0 248px;

        .teacher_name {
          font-family: Source Han Sans CN;
          font-weight: 500;
          font-size: 40px;
          color: #422205;
          text-align: center;
        }

        .present {
          font-family: Source Han Sans CN;
          font-size: 22px;
          color: #1C3E42;
        }

        .learn_more {
          font-family: Source Han Sans CN;
          font-weight: 500;
          font-size: 22px;
          color: #9A4B3F;
          width: 100%;
          text-align: right;
          margin: 16px 0;
        }

        .courseware {
          font-family: Source Han Sans CN;
          font-weight: bold;
          font-size: 20px;
          color: #944032;
          display: flex;

          &-title {
            font-weight: bold;
          }

          &-box {
            background: url('@/assets/images/groupDetails/courseware_bj.png') no-repeat;
            background-size: 100% 100%;
            width: 157px;
            height: 135px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;

            &-text {
              position: absolute;
              left: 0;
              writing-mode: vertical-rl;
              font-family: Source Han Sans CN;
              font-weight: 400;
              font-size: 19px;
              color: #83550A;
            }

            img {
              width: 48px;
              height: 56px;
            }
          }
        }
      }
    }

    .switch {
      margin-top: 20px;
      width: 100%;
      padding: 0 270px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: row wrap;

      &-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 80%;

        &-item {
          margin: 0 28px;

          &-card {
            background: url('@/assets/images/groupDetails/border_small.png') no-repeat;
            background-size: 100% 100%;
            width: 104px;
            height: 96px;
            padding: 6px 10px 8px 15px;

            &-img {
              border-radius: 50%;
              width: 80px;
              height: 80px;
            }
          }

          &-name {
            text-align: center;
            font-family: Source Han Sans CN;
            font-weight: 500;
            font-size: 18px;
            color: #143C3C;
          }
        }
      }

      &-btn {
        width: 120px;
        height: 67px;
        background-size: 100% 100%;
      }

      .left_btn {
        background: url('@/assets/images/groupDetails/left_btn.png') no-repeat;
      }

      .right_btn {
        background: url('@/assets/images/groupDetails/right_btn.png') no-repeat;
      }
    }
  }
}

.completionVideo {
  position: relative;

  .flower2 {
    width: 284px;
    height: 433px;
    position: absolute;
    right: 0;
    top: 0;
  }

  .content {
    background: url('@/assets/images/groupDetails/bj_1.png') no-repeat;
    background-size: 100% 100%;
    padding: 0 280px;

    .accordion-container {
      height: 576px;
      // overflow: hidden;
      transform-style: preserve-3d;
    }

    .accordion-list {
      list-style: none;
      display: flex;
      justify-content: center;
      // width: 120%;


      .accordion-item {
        transition: width 0.5s ease;
        display: flex;
        width: 200px;
        height: 596px;

        // 除了第最后个元素
        &:not(:first-child) {
          margin-left: -120px;
        }

        .accordion-text {
          padding: 100px 0;
          transition: opacity 0.5s ease;
          width: 200px;
          height: 596px;
          overflow: hidden;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          order: 1;
          transform: rotateX(10deg) rotateY(10deg);
          background-color: #F2EEE6;
          position: relative;
          top: -8px;
          left: 2px;

          .title {
            // writing-mode: vertical-rl;
            writing-mode: vertical-lr;
            text-align: center;
            font-family: Source Han Sans CN;
            font-weight: 400;
            font-size: 31px;
            line-height: 50px;
            color: #361D06;


          }

          .bamboo {
            width: 90px;
            height: 148px;
            position: absolute;
            top: 0;
            left: 0;
          }
        }


        .accordion-video {
          width: 0;
          height: 576px;
          transition: width 0.5s ease;
          order: 2;
          position: relative;

          video {
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
          }

          .showPlay {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.3);
            display: flex;
            justify-content: center;
            align-items: center;

            img {
              cursor: pointer;
              width: 5.02vw;
            }
          }
        }

      }
    }
  }
}


.materials {
  height: 100%;
  position: relative;

  .flower3 {
    width: 384px;
    height: 730px;
    position: absolute;
    left: 0;
    top: -100px;
  }

  .content {
    flex: 1;
    width: 100%;

    .product_swiper {
      width: 100%;
      height: 763px;
      padding: 0 206px;
      box-sizing: border-box;
      margin-left: auto;
      margin-right: auto;

      &.is-center {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .swiper {
      width: 100%;
      min-width: 521px;
      height: 100%;
    }

    .ipc-right-swiperslide {
      width: 521px;
      height: 763px;
      overflow: hidden;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .ipc-right-swiperslide:hover {
      transform: scale(1.03) translateY(-10px);
      box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
      z-index: 10;
    }

    .img-cover {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }



    .files_tab {
      padding: 0 240px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      .files_item {
        width: 157px;
        height: 135px;
        margin: 20px 30px;
        background: url('@/assets/images/groupDetails/courseware_bj.png') no-repeat;
        background-size: 100% 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        img {
          width: 47px;
          height: 55px;
        }

        .files_item_title {
          font-family: Source Han Sans CN;
          font-weight: 400;
          font-size: 16px;
          color: #83550A;
          writing-mode: vertical-rl;
          position: absolute;
          // top: 50%;
          // transform: translateY(-50%);
          left: 2px;
        }

      }
    }
  }
}
</style>