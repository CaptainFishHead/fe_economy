<template>
  <div ref="statsContainer" class="performance-monitor"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Stats from 'stats.js'

const statsContainer = ref<HTMLElement | null>(null)

onMounted(() => {
  if (statsContainer.value) {
    const stats = new Stats()
    statsContainer.value.appendChild(stats.dom)

    function animate() {
      stats.begin()
      stats.end()
      requestAnimationFrame(animate)
    }

    animate()
  }
})
</script>

<style scoped lang="scss">
.performance-monitor {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}
</style>