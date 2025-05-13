<template>
  <div class="lecturer-details">
    <!-- Header -->
    <header class="header">
      <img src="@/assets/images/lecturerDetails/logo.png" class="logo" />
      <button class="back-btn" @click="goHome">回到首页</button>
    </header>

    <!-- Main Content -->
    <div class="main">
      <!-- Top: Lecturer Carousel -->
      <div class="carousel" ref="carouselRef">
        <div class="carousel-btn left_btn" @click="scrollLeft"></div>
        <div class="carousel-list">
          <div v-for="(lecturer, index) in lecturers" :key="index" class="carousel-item"
            :class="{ active: currentIndex === index }" @click="selectLecturer(index)">
            <div class="carousel-item-card" :class="{ active: currentIndex === index }">
              <img :src="lecturer.image" />
            </div>
            <div class="carousel-item-name">
              {{ lecturer.name }}
            </div>
          </div>
        </div>
        <div class="carousel-btn right_btn" @click="scrollRight"></div>
      </div>

      <!-- Bottom: Tabs and Content -->
      <div class="bottom">
        <!-- Tabs -->
        <div class="timeline-tabs">
          <div v-for="(tab, index) in tabs" :key="index" class="tab-item">
            <div class="tab-dot-line">
              <div class="dot"></div>
              <div class="line" v-if="index < tabs.length - 1"></div>
            </div>
            <div class="tab-content">
              {{ tab.label }}
            </div>
          </div>
        </div>



        <!-- Detail -->
        <transition name="fade-slide" mode="out-in">
          <div class="details" :key="currentIndex">
            <h2>{{ currentLecturer.name }}</h2>
            <p class="intro">{{ currentLecturer.intro }}</p>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getClassTeacherList } from '@/api/home/index'
const router = useRouter()
const goHome = () => router.push('/')
const tabs = ref([
  { label: '讲师介绍' },
  { label: '讲师课件' },
  { label: '邀请单位' },
  { label: '授课风采' }
])
const lecturers = ref([
  {
    name: '李老师',
    image: new URL('@/assets/images/groupDetails/teacher.png', import.meta.url).href,
    intro: `李老师拥有10年以上教学经验，擅长经济学原理与应用。`,
  },
  {
    name: '王老师',
    image: new URL('@/assets/images/groupDetails/teacher.png', import.meta.url).href,
    intro: `王老师专注于国际金融教学，深入浅出，理论结合实战。`,
  },
  {
    name: '赵老师',
    image: new URL('@/assets/images/groupDetails/teacher.png', import.meta.url).href,
    intro: `赵老师讲授计量经济学，课堂互动丰富，深受学生欢迎。`,
  },
  {
    name: '李老师',
    image: new URL('@/assets/images/groupDetails/teacher.png', import.meta.url).href,
    intro: `李老师拥有10年以上教学经验，擅长经济学原理与应用。`,
  },
  {
    name: '王老师',
    image: new URL('@/assets/images/groupDetails/teacher.png', import.meta.url).href,
    intro: `王老师专注于国际金融教学，深入浅出，理论结合实战。`,
  },
  {
    name: '李老师',
    image: new URL('@/assets/images/groupDetails/teacher.png', import.meta.url).href,
    intro: `李老师拥有10年以上教学经验，擅长经济学原理与应用。`,
  },
  {
    name: '王老师',
    image: new URL('@/assets/images/groupDetails/teacher.png', import.meta.url).href,
    intro: `王老师专注于国际金融教学，深入浅出，理论结合实战。`,
  },
  {
    name: '王老师',
    image: new URL('@/assets/images/groupDetails/teacher.png', import.meta.url).href,
    intro: `王老师专注于国际金融教学，深入浅出，理论结合实战。`,
  },
  {
    name: '李老师',
    image: new URL('@/assets/images/groupDetails/teacher.png', import.meta.url).href,
    intro: `李老师拥有10年以上教学经验，擅长经济学原理与应用。`,
  },
  {
    name: '王老师',
    image: new URL('@/assets/images/groupDetails/teacher.png', import.meta.url).href,
    intro: `王老师专注于国际金融教学，深入浅出，理论结合实战。`,
  },
  {
    name: '王老师',
    image: new URL('@/assets/images/groupDetails/teacher.png', import.meta.url).href,
    intro: `王老师专注于国际金融教学，深入浅出，理论结合实战。`,
  },
  {
    name: '李老师',
    image: new URL('@/assets/images/groupDetails/teacher.png', import.meta.url).href,
    intro: `李老师拥有10年以上教学经验，擅长经济学原理与应用。`,
  },
  {
    name: '王老师',
    image: new URL('@/assets/images/groupDetails/teacher.png', import.meta.url).href,
    intro: `王老师专注于国际金融教学，深入浅出，理论结合实战。`,
  },
  {
    name: '赵老师',
    image: new URL('@/assets/images/groupDetails/teacher.png', import.meta.url).href,
    intro: `赵老师讲授计量经济学，课堂互动丰富，深受学生欢迎。`,
  },
])
const defaultTeacher = ref({})
const photoQuery = ref({
  page: 1, limit: 12, class_id: '56'

})
const getClassTeacherData = () => {
  getClassTeacherList(photoQuery.value).then(res => {
    lecturers.value = res.data
    defaultTeacher.value = lecturers.value[0]
  })
}
onMounted(() => {
  // getClassTeacherData()
})
const currentIndex = ref(0)
const selectLecturer = (index: number) => {
  currentIndex.value = index
}

const currentLecturer = computed(() => lecturers.value[currentIndex.value])

const carouselRef = ref(null)

const scrollLeft = () => {
  carouselRef.value?.querySelector('.carousel-list')?.scrollBy({ left: -200, behavior: 'smooth' })
}

const scrollRight = () => {
  carouselRef.value?.querySelector('.carousel-list')?.scrollBy({ left: 200, behavior: 'smooth' })
}

</script>

<style scoped lang="scss">
.lecturer-details {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/lecturerDetails/bj.png') no-repeat;
  background-size: cover;
  font-family: "Microsoft Yahei", sans-serif;
  padding: 0 66px;
  display: flex;
  flex-direction: column;

  .header {
    // height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 46px 0;

    .logo {
      width: 277px;
      height: 64px;
    }

    .back-btn {
      font-family: Source Han Sans CN;
      font-weight: 400;
      font-size: 30px;
      color: #6B5B34;
      cursor: pointer;
      background-color: transparent;
      // transition: all 0.3s;

      &:hover {
        // color: #000;
      }
    }
  }

  .main {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;


    .carousel {
      display: flex;
      align-items: center;
      margin-bottom: 40px;

      // 保证左右按钮固定 + 中间区域自适应
      &-btn {
        min-width: 34px;
        width: 34px;
        height: 53px;
        flex-shrink: 0; // 不压缩
        cursor: pointer;
      }

      .left_btn {
        background: url('@/assets/images/lecturerDetails/left_btn.png') no-repeat center;
        background-size: cover;
      }

      .right_btn {
        background: url('@/assets/images/lecturerDetails/right_btn.png') no-repeat center;
        background-size: cover;
      }

      &-list {
        flex: 1; // 撑满剩余空间
        display: flex;
        overflow: hidden;
        justify-content: flex-start; // 左对齐更自然
        scroll-behavior: smooth;

        .carousel-item {
          flex: 0 0 auto; // 不压缩、不换行
          margin: 8px 20px;
          transition: all 0.3s;
          cursor: pointer;

          &-card {
            width: 103px;
            min-width: 103px;
            height: 95px;
            background: url('@/assets/images/lecturerDetails/card.png') no-repeat;
            background-size: cover;
            padding: 7px 10px 7px 14px;
            box-sizing: border-box;

            &.active {
              background: url('@/assets/images/lecturerDetails/card_active.png') no-repeat;
              background-size: cover;
            }

            img {
              border-radius: 50%;
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }

          &-name {
            font-family: 'Source Han Sans CN', sans-serif;
            font-weight: 500;
            font-size: 18px;
            color: #143C3C;
            text-align: center;
            margin-top: 18px;
          }

          &.active {
            transform: scale(1.1);
          }
        }
      }
    }

    .bottom {
      display: flex;
      flex: 1;
      gap: 40px;

      .timeline-tabs {
        display: flex;
        flex-direction: column;
        position: relative;
        padding-left: 30px; // 给圆点留空间
        font-family: 'Source Han Serif CN', sans-serif;

        .tab-item {
          display: flex;
          align-items: center;
          cursor: pointer;
          position: relative;
          padding-bottom: 55px;

          &.active .tab-content {
            background: url('@/assets/images/active-tab-bg.png') no-repeat center/contain;
            color: #fff;
          }

          .tab-dot-line {
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            display: flex;
            flex-direction: column;
            align-items: center;

            .dot {
              width: 10px;
              height: 10px;
              background-color: #b39258;
              border-radius: 50%;
              margin-top: 5px;
            }

            .line {
              flex: 1;
              width: 2px;
              background-color: #b39258;
              margin-top: 5px;
            }
          }

          .tab-content {
            min-width: 244px;
            min-height: 59px;
            line-height: 59px;
            text-align: center;
            font-family: Source Han Sans CN;
            font-weight: bold;
            font-size: 26px;
            color: #BBA673;
            background: url('@/assets/images/lecturerDetails/tab.png') no-repeat center/contain;
            margin-left: 20px;
          }
        }
      }

      .details {
        flex: 1;
        background: rgba(255, 255, 255, 0.1);
        padding: 20px 30px;
        border-radius: 8px;
        backdrop-filter: blur(10px);

        h2 {
          margin-bottom: 10px;
        }

        .intro {
          white-space: pre-line;
        }
      }
    }
  }
}

/* 动画过渡 */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
