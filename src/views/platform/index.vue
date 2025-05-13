<template>
  <div class="timeline-tabs">
    <div v-for="(tab, index) in tabs" :key="index" class="tab-item" :class="{ active: currentTab === index }"
      @click="selectTab(index)">
      <div class="tab-dot-line">
        <div class="dot"></div>
        <div class="line" v-if="index < tabs.length - 1"></div>
      </div>
      <div class="tab-content">
        {{ tab.label }}
      </div>
    </div>
  </div>
  <!-- <div class="tabs">
          <div v-for="(lecturer, index) in tabs" :key="index" :class="['tab', { active: currentIndex === index }]"
            @click="selectLecturer(index)">

            {{ lecturer.name }}
          </div>
        </div> -->
</template>

<script setup>
import { ref } from 'vue'

const tabs = [
  { label: '讲师介绍' },
  { label: '讲师课件' },
  { label: '邀请单位' },
  { label: '授课风采' }
]

const currentTab = ref(0)

const selectTab = (index) => {
  currentTab.value = index
}
</script>

<style lang="scss" scoped>
.timeline-tabs {
  display: flex;
  flex-direction: column;
  position: relative;
  padding-left: 30px; // 给圆点留空间
  font-family: 'Source Han Serif CN', sans-serif;

  .tab-item {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    cursor: pointer;
    position: relative;

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
      min-width: 160px;
      min-height: 48px;
      line-height: 48px;
      text-align: center;
      font-size: 18px;
      color: #b39258;
      background: url('@/assets/images/inactive-tab-border.png') no-repeat center/contain;
    }
  }
}
</style>