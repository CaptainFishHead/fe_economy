<script setup lang="ts">
// import { ref } from 'vue';

const trainingList = ref([
  {
    time: '2023年',
    url: 'https://www.tsinghua.edu.cn/__local/E/B2/07/F504D9CEE7ED55B8DD25768AF3A_EB737F65_217BFF.jpg',
    unit: "中国铁建投资集团有限公司第二期",
    nameClass: '青年英才暨青马工程培训班'
  },
  {
    time: '2023年',
    url: 'https://www.tsinghua.edu.cn/__local/E/B2/07/F504D9CEE7ED55B8DD25768AF3A_EB737F65_217BFF.jpg',
    unit: "中国铁建投资集团有限公司第二期",
    nameClass: '青年英才暨青马工程培训班'
  },
  {
    time: '2023年',
    url: 'https://www.tsinghua.edu.cn/__local/E/B2/07/F504D9CEE7ED55B8DD25768AF3A_EB737F65_217BFF.jpg',
    unit: "中国铁建投资集团有限公司第二期",
    nameClass: '青年英才暨青马工程培训班'
  },
  {
    time: '2023年',
    url: 'https://www.tsinghua.edu.cn/__local/E/B2/07/F504D9CEE7ED55B8DD25768AF3A_EB737F65_217BFF.jpg',
    unit: "中国铁建投资集团有限公司第二期",
    nameClass: '青年英才暨青马工程培训班'
  },
  {
    time: '2023年',
    url: 'https://www.tsinghua.edu.cn/__local/E/B2/07/F504D9CEE7ED55B8DD25768AF3A_EB737F65_217BFF.jpg',
    unit: "中国铁建投资集团有限公司第二期",
    nameClass: '青年英才暨青马工程培训班'
  },
  {
    time: '2023年',
    url: 'https://www.tsinghua.edu.cn/__local/E/B2/07/F504D9CEE7ED55B8DD25768AF3A_EB737F65_217BFF.jpg',
    unit: "中国铁建投资集团有限公司第二期",
    nameClass: '青年英才暨青马工程培训班'
  },
  {
    time: '2023年',
    url: 'https://www.tsinghua.edu.cn/__local/E/B2/07/F504D9CEE7ED55B8DD25768AF3A_EB737F65_217BFF.jpg',
    unit: "中国铁建投资集团有限公司第二期",
    nameClass: '青年英才暨青马工程培训班'
  },
  {
    time: '2023年',
    url: 'https://www.tsinghua.edu.cn/__local/E/B2/07/F504D9CEE7ED55B8DD25768AF3A_EB737F65_217BFF.jpg',
    unit: "中国铁建投资集团有限公司第二期",
    nameClass: '青年英才暨青马工程培训班'
  },
  {
    time: '2023年',
    url: 'https://www.tsinghua.edu.cn/__local/E/B2/07/F504D9CEE7ED55B8DD25768AF3A_EB737F65_217BFF.jpg',
    unit: "中国铁建投资集团有限公司第二期",
    nameClass: '青年英才暨青马工程培训班'
  },
  {
    time: '2023年',
    url: 'https://www.tsinghua.edu.cn/__local/E/B2/07/F504D9CEE7ED55B8DD25768AF3A_EB737F65_217BFF.jpg',
    unit: "中国铁建投资集团有限公司第二期",
    nameClass: '青年英才暨青马工程培训班'
  },
  {
    time: '2023年',
    url: 'https://www.tsinghua.edu.cn/__local/E/B2/07/F504D9CEE7ED55B8DD25768AF3A_EB737F65_217BFF.jpg',
    unit: "中国铁建投资集团有限公司第二期",
    nameClass: '青年英才暨青马工程培训班'
  },
  {
    time: '2023年',
    url: 'https://www.tsinghua.edu.cn/__local/E/B2/07/F504D9CEE7ED55B8DD25768AF3A_EB737F65_217BFF.jpg',
    unit: "中国铁建投资集团有限公司第二期",
    nameClass: '青年英才暨青马工程培训班'
  },
  {
    time: '2023年',
    url: 'https://www.tsinghua.edu.cn/__local/E/B2/07/F504D9CEE7ED55B8DD25768AF3A_EB737F65_217BFF.jpg',
    unit: "中国铁建投资集团有限公司第二期",
    nameClass: '青年英才暨青马工程培训班'
  },
  {
    time: '2023年',
    url: 'https://www.tsinghua.edu.cn/__local/E/B2/07/F504D9CEE7ED55B8DD25768AF3A_EB737F65_217BFF.jpg',
    unit: "中国铁建投资集团有限公司第二期",
    nameClass: '青年英才暨青马工程培训班'
  },
  {
    time: '2023年',
    url: 'https://www.tsinghua.edu.cn/__local/E/B2/07/F504D9CEE7ED55B8DD25768AF3A_EB737F65_217BFF.jpg',
    unit: "中国铁建投资集团有限公司第二期",
    nameClass: '青年英才暨青马工程培训班'
  },
  {
    time: '2023年',
    url: 'https://www.tsinghua.edu.cn/__local/E/B2/07/F504D9CEE7ED55B8DD25768AF3A_EB737F65_217BFF.jpg',
    unit: "中国铁建投资集团有限公司第二期",
    nameClass: '青年英才暨青马工程培训班'
  },
])

const search = ref<string>('') // 搜索框的值

const timelineData = ref([
  { year: '2020年', targetId: '2020' },
  { year: '2021年', targetId: '2021' },
  { year: '2022年', targetId: '2022' },
  { year: '2023年', targetId: '2023' },
  { year: '2024年', targetId: '2024' },
  { year: '2025年', targetId: '2025' },
])
const currentActive = ref(-1); // 记录当前激活的时间轴索引
// 时间轴点击处理
const handleTimelineClick = (index, targetId) => {
  currentActive.value = index;
};
</script>
<template>
  <div class="container">
    <header class="header">
      <!-- <el-image class="logo" src="@/assets/images/trainingWall/logo.png" /> -->
      <!-- <el-input v-model="search" placeholder="请搜索班级名称" class="search">
        <template #suffix>
          <el-icon><el-search /></el-icon>
        </template>
</el-input> -->
    </header>
    <main class="content">
      <div class="timeline">
        <div class="item" :class="{ 'active-timeline': currentActive === index }" v-for="(item, index) in timelineData"
          :key="index" @click="handleTimelineClick(index, item.targetId)">
          <span>{{ item.year }}</span>
        </div>
      </div>

      <div class="photoList">
        <div class="item" v-for="(item, index) in trainingList" :key="index">
          <img class="item-img" :src="item.url">
          <div class="title">{{ item.time }}</div>
        </div>
      </div>
    </main>
    <img src="@/assets/images/trainingWall/roof.png" class="roof">
    <img src="@/assets/images/trainingWall/bouquet_left.png" class="bouquet_left">
    <img src="@/assets/images/trainingWall/bouquet_right.png" class="bouquet_right">
  </div>


</template>
<style scoped lang="scss">
.container {
  width: 100%;
  height: 100vh;
  background: url("@/assets/images/trainingWall/training_bj.png") no-repeat;
  background-size: 100% 100%;
  position: relative;
  -webkit-user-select: none;
  /* Safari */
  -moz-user-select: none;
  /* Firefox */
  -ms-user-select: none;
  /* IE10+/Edge */
  user-select: none;

  /* 标准语法 */
  // overflow: hidden;
  .roof {
    width: 231px;
    height: 225px;
    position: absolute;
    top: 0;
    left: 0;
  }

  .bouquet_left {
    width: 138px;
    height: 301px;
    position: absolute;
    top: 221px;
    left: 0;
  }

  .bouquet_right {
    width: 167px;
    height: 310px;
    position: absolute;
    top: 0;
    right: 0;
  }
}


.header {
  width: 100%;
  height: 108px;
  // position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .logo {
    width: 248px;
    height: 58px;
    // position: absolute;
    // top: 25px;
    // left: 298px;
  }

  .search {
    width: 375px;
    height: 48px;

    // .el-input__wrapper {
    //   box-shadow: -4px 3px 23px 6px #DBDBDB;
    //   border-radius: 24px;
    // }

    // .el-input__suffix .el-input__icon {
    //   font-size: 33px;
    // }
  }
}


.content {
  width: 100%;
  height: calc(100vh - 108px);
  padding-left: 143px;
  padding-right: 205px;
  padding-bottom: 64px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  overflow: hidden;

  .timeline {
    margin-right: 44px;

    .item {
      width: 141px;
      height: 281px;
      background: url("@/assets/images/trainingWall/border.png") no-repeat;
      background-size: 100% 100%;
      cursor: pointer;
      transition: all 0.3s ease;
      text-align: center;
      font-family: Source Han Sans CN;
      font-weight: 400;
      font-size: 30px;
      color: #341004;
      padding: 68px 44px 0 31px;
      position: relative;
    }

    .item:not(:first-child) {
      top: -77px;
    }

    .active-timeline {
      color: #B71F1F;
      background: url("@/assets/images/trainingWall/border_selected.png") no-repeat;
      background-size: 100% 100%;
    }
  }

  .photoList {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: space-between;
    padding-top: 48px;

    .item {
      box-sizing: border-box;
      width: calc(100% / 4 - 9px);
      height: 263px;
      margin-bottom: 16px;
      background: url("@/assets/images/trainingWall/card.png") no-repeat;
      background-size: 100% 100%;
      position: relative;
      z-index: 1000 !important;
      overflow: hidden;
      padding: 0 8px;

      &-img {
        width: 100%;
        height: 207px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10 !important;
      }

      .title {
        font-family: Source Han Sans CN;
        font-weight: 400;
        font-size: 21px;
        color: #F8F7F6;
        text-align: center;
      }
    }
  }
}
</style>