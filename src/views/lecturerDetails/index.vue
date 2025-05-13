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
        <div class="carousel-btn left_btn"></div>
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
        <div class="carousel-btn right_btn"></div>
      </div>

      <!-- Bottom: Tabs and Content -->
      <div class="bottom">
        <!-- Tabs -->
        <div class="tabs">
          <div v-for="(lecturer, index) in lecturers" :key="index" :class="['tab', { active: currentIndex === index }]"
            @click="selectLecturer(index)">
            {{ lecturer.name }}
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
      justify-content: center;
      align-items: center;
      gap: 40px;
      margin-bottom: 40px;
      overflow: hidden;
      &-list {
        display: flex;
        justify-content: center;
        overflow: hidden;
        .carousel-item {
          overflow: hidden;
          transition: all 0.3s;
          cursor: pointer;
          margin: 0 20px;

          &-card {
            width: 103px;
            height: 95px;
            background: url('@/assets/images/lecturerDetails/card.png') no-repeat;
            background-size: cover;
            padding: 7px 10px 7px 14px;

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
            font-family: Source Han Sans CN;
            font-weight: 500;
            font-size: 18px;
            color: #143C3C;
            text-align: center;
            margin-top: 18px;
          }

          &.active {
            border-color: #fff;
            transform: scale(1.1);
          }
        }
      }

      &-btn {
        width: 34px;
        height: 53px;
      }

      .left_btn {
        background: url('@/assets/images/lecturerDetails/left_btn.png') no-repeat;
        background-size: cover;

      }

      .right_btn {
        background: url('@/assets/images/lecturerDetails/right_btn.png') no-repeat;
        background-size: cover;
      }

    }

    .bottom {
      display: flex;
      flex: 1;
      gap: 40px;

      .tabs {
        display: flex;
        flex-direction: column;
        gap: 16px;

        .tab {
          padding: 12px 20px;
          border-left: 3px solid transparent;
          cursor: pointer;
          transition: all 0.3s;

          &.active {
            border-color: #fff;
            background-color: rgba(255, 255, 255, 0.1);
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
