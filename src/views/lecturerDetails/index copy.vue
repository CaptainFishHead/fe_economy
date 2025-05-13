<template>
  <div class="lecturer-details">
    <!-- Header -->
    <header class="header">
      <img src="@/assets/images/logo/logo.png" alt="Logo" class="logo" />
      <button class="back-btn" @click="goHome">回到首页</button>
    </header>

    <!-- Main Content -->
    <div class="main">
      <!-- Top: Lecturer Carousel -->
      <div class="carousel" ref="carouselRef">
        <div v-for="(lecturer, index) in lecturers" :key="index" class="carousel-item"
          :class="{ active: currentIndex === index }" @click="selectLecturer(index)">
          <img :src="lecturer.avatar" :alt="lecturer.name" />
        </div>
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
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const goHome = () => router.push('/')

const lecturers = ref([
  {
    name: '李老师',
    avatar: new URL('@/assets/images/groupDetails/teacher_card.png', import.meta.url).href,
    intro: `李老师拥有10年以上教学经验，擅长经济学原理与应用。`,
  },
  {
    name: '王老师',
    avatar: new URL('@/assets/images/groupDetails/teacher.png', import.meta.url).href,
    intro: `王老师专注于国际金融教学，深入浅出，理论结合实战。`,
  },
  {
    name: '赵老师',
    avatar: new URL('@/assets/images/groupDetails/teacher_card.png', import.meta.url).href,
    intro: `赵老师讲授计量经济学，课堂互动丰富，深受学生欢迎。`,
  },
])

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
  display: flex;
  flex-direction: column;
  color: #fff;
}

.header {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  background-color: rgba(0, 0, 0, 0.4);
}

.logo {
  height: 40px;
}

.back-btn {
  background: transparent;
  border: 1px solid #fff;
  padding: 8px 16px;
  cursor: pointer;
  color: #fff;
  transition: background 0.3s;
}

.back-btn:hover {
  background: #fff;
  color: #000;
}

.main {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px;
}

.carousel {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-bottom: 40px;
}

.carousel-item {
  width: 100px;
  height: 100px;
  border: 2px solid transparent;
  border-radius: 50%;
  overflow: hidden;
  transition: all 0.3s;
  cursor: pointer;
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-item.active {
  border-color: #fff;
  transform: scale(1.1);
}

.bottom {
  display: flex;
  flex: 1;
  gap: 40px;
}

.tabs {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.tab {
  padding: 12px 20px;
  border-left: 3px solid transparent;
  cursor: pointer;
  transition: all 0.3s;
}

.tab.active {
  border-color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
}

.details {
  flex: 1;
  background: rgba(255, 255, 255, 0.1);
  padding: 20px 30px;
  border-radius: 8px;
  color: #fff;
  backdrop-filter: blur(10px);
}

.intro {
  margin-top: 10px;
  white-space: pre-line;
}

/* 动画 */
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
