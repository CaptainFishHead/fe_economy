<template>
  <header class="header" :class="{ 'header-scrolled': isScrolled }">
    <div class="container header-container">
      <router-link to="/" class="logo">
        <img src="../../public/images//logo/logo.png" alt="人大经济学院" class="logo-img" />
        <div class="logo-text"></div>
      </router-link>

      <nav class="nav">
        <button class="menu-toggle" @click="toggleMenu" :aria-expanded="isMenuOpen">
          <span class="sr-only">Toggle Menu</span>
          <span class="hamburger"></span>
        </button>

        <ul class="nav-list" :class="{ 'is-open': isMenuOpen }">
          <li v-for="item in navItems" :key="item.path">
            <router-link :to="item.path" class="nav-link" @click="closeMenu"
              :class="{ active: currentRoute === item.path }">
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute, RouteLocationNormalizedLoaded } from 'vue-router'
import { LOGO_BASE64 } from '@/assets/constants/logo'

interface NavItem {
  name: string
  path: string
}

const route: RouteLocationNormalizedLoaded = useRoute()
const isScrolled = ref<boolean>(false)
const isMenuOpen = ref<boolean>(false)

const currentRoute = computed<string>(() => route.path)

const navItems: NavItem[] = []

// 使用 Base64 编码的 logo
const logoUrl = LOGO_BASE64

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<script lang="ts">
export default {
  name: 'TheHeader'
}
</script>

<style lang="scss" scoped>
.header {
  @include mobile-first;

  &-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;


  }
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &-img {
    width: 40px;
    height: 40px;


  }

  &-text {
    h1 {
      font-size: 1rem;


    }

    p {
      display: none;


    }
  }
}

.nav {
  &-list {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    background: white;
    padding: 1rem;
    transform: translateY(-100%);
    transition: transform 0.3s ease;



    &.is-open {
      transform: translateY(0);
    }
  }

  &-link {
    display: block;
    padding: 0.75rem;
  }
}
</style>
