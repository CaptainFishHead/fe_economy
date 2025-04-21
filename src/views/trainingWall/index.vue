<script setup lang="ts">
import { ref, onMounted } from 'vue'

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
  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
</script>
<template>
  <div class="container">
    <div class="banner">
      <div class="logo"></div>
      <div class="hero-subtitle">实事求事</div>
    </div>

    <div class="content">
      <img class="flower_1" src="@/assets/images/timeline/flower_1.png">
      <img class="flower_2" src="@/assets/images/timeline/flower_3.png">

      <div class="content-left">
        <div class="training">
          <div class="box">培训墙</div>
        </div>
        <div class="timeline">
          <div class="timeline-item" :class="{ 'active-timeline': currentActive === index }"
            v-for="(item, index) in timelineData" :key="index" @click="handleTimelineClick(index, item.targetId)">
            {{ item.year }}></div>
        </div>
      </div>
      <div class="content-main">
        <div class="item" v-for="(item, index) in trainingList" :key="index">
          <img class="item-img" :src="item.url">
          <div class="item-box">
            <div class="title">{{ item.time }}</div>
            <div class="unit"> <el-icon :size="20" color="#409efc">
                <CaretBottom />
              </el-icon>{{ item.unit }}</div>
            <div class="nameClass">{{ item.nameClass }}</div>
          </div>
        </div>
      </div>

    </div>
  </div>


</template>
<style scoped lang="scss">
.banner {
  width: 100%;
  height: 460px;
  background: url("@/assets/images/timeline/bg.png");
  position: relative;

  .logo {
    width: 301px;
    height: 70px;
    background-color: antiquewhite;
    position: absolute;
    top: 62px;
    left: 350px;

  }

  .hero-subtitle {
    width: 86px;
    height: 194px;
    background: url('@/assets/images/home/question.png');
    background-size: 100% 100%;
    font-family: 'SJchunlian-Regular', sans-serif;
    writing-mode: vertical-rl;
    font-weight: 400;
    font-size: 40px;
    color: #FFFFFF;
    text-align: center;
    line-height: 87px;
    position: absolute;
    top: 150px;
    right: 370px;
  }
}

.content {
  width: 100%;
  height: 100vh;
  padding-left: 354px;
  padding-right: 364px;
  box-sizing: border-box;
  position: relative;
  display: flex;


  .flower_1 {
    width: 321px;
    height: 507px;
    position: absolute;
    top: 80px;
    left: 0;
  }

  .flower_2 {
    width: 346px;
    height: 507px;
    position: absolute;
    top: 424px;
    right: 0;
  }

  &-left {
    width: 232px;
    height: 800px;

    .training {
      width: 152px;
      height: 186px;
      background: #A10914;
      border-radius: 22px;
      opacity: 0.8;
      // 垂直水平居中
      display: flex;
      justify-content: center;
      align-items: center;


      .box {
        width: 123px;
        height: 162px;
        border-radius: 18px;
        border: 1px dotted #FFFFFF;
        writing-mode: vertical-rl;
        font-family: 'SJchunlian-Regular', sans-serif;
        text-align: center;
        line-height: 123px;
        font-weight: 400;
        font-size: 41px;
        color: #FFFFFF;
        opacity: 0.8;
      }
    }

    .timeline {
      list-style: none;
      padding: 0;
      width: 80px;
      text-align: center;
    }

    .timeline-item {
      padding: 15px 0;
      cursor: pointer;
      border-bottom: 1px solid #ccc;
      transition: all 0.3s ease;
    }

    .timeline-item .active-timeline {
      color: #B71F1F;
      font-weight: bold;
      transform: scale(1.05);
    }
  }

  &-main {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: space-between;
    padding-top: 48px;



    .item {
      box-sizing: border-box;
      width: calc(100% / 3 - 4px);
      height: 300px;
      background: #F8F8F8;
      box-shadow: 0px 7px 20px 1px #EEEEEF;
      border: 1px solid #F2F1F1;
      margin-bottom: 16px;

      &-img {
        width: 100%;
        height: 172px;
      }

      &-box {
        height: 125px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        font-size: 16px;
        color: #232222;
        padding: 0 35px;
        padding-top: 22px;

        .title {}

        .unit {
          text-align: center;
        }

        .nameClass {
          text-align: center;
        }
      }
    }
  }
}
</style>