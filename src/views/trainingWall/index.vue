<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { Search } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';
import { getClassList } from '@/api/home/index'



const router = useRouter();

const query = ref({
  year: '2025',
  title: '',
  page: 1,
  limit: 12
})

const currentActive = ref('2025');
const timelineData = ref([])
const trainingList = ref([]);
const loading = ref(false);
const total = ref(0); // 总页数
// 计算总页数，使用 computed 创建响应式计算属性
const totalPages = computed(() => {
  return Math.ceil(total.value / query.value.limit);
});

const active = ref(false); // 记录上一次的操作
// 上一页方法
const goToPreviousPage = () => {
  console.log(totalPages, total.value);
  if (query.value.page > 1) {
    active.value = true;
    query.value.page--;
    getClassData()
  }
};

// 下一页方法
const goToNextPage = () => {
  if (query.value.page < totalPages.value) {
    active.value = true;
    query.value.page++;
    getClassData()
  }
};

const getClassData = () => {
  loading.value = true;
  getClassList(query.value).then(res => {
    total.value = res.count || 0;
    trainingList.value = res.data.classList || [];
    timelineData.value = res.data.years.reverse() || [];
    loading.value = false;
  }).finally(() => {
    loading.value = false;
  });
}

// 时间轴点击处理
const handleTimelineClick = (item) => {
  query.value.year = item.year;
  getClassData();
};
const photoClick = (value) => {
  router.push({ name: 'groupDetails', query: { id: value.id, image: value.image } });
};
const changedClass = () => {
  currentActive.value = '';
  getClassData();
};

onMounted(() => {
  getClassData();
});
</script>
<template>
  <div class="container">
    <header class="header">
      <img class="logo" src="@/assets/images/trainingWall/logo.png" />
      <el-input v-model="query.title" placeholder="请搜索班级名称" class="search" :suffix-icon="Search"
        @change="changedClass()">
      </el-input>
    </header>
    <div class="content">
      <div class="timeline">
        <div class="item" :class="{ 'active-timeline': query.year == item.year }" v-for="(item, index) in timelineData"
          :key="index" @click="handleTimelineClick(item)">
          <span>{{ item.year }}</span>
        </div>
      </div>

      <div class="photoList" v-loading="loading">
        <div class="item" v-for="(item) in trainingList" :key="item.id" @click="photoClick(item)">
          <div class="item-box">
            <el-image class="img" :src="item.image" lazy />
            <div class="mask">
              <div class="title">{{ item.title }}</div>
              <div class="time">({{ item.year_month }})</div>
            </div>
          </div>
          <img class="flower_frame" src="@/assets/images/trainingWall/card.png"></img>
        </div>
      </div>

      <div class="pageBtn">
        <div class="up" @click="goToPreviousPage" v-if="query.page > 1">
          <img src="@/assets/images/trainingWall/to_active_card.png" class="card">
          <img src="@/assets/images/trainingWall/to_active.png">
        </div>
        <div class="up" @click="goToPreviousPage" v-else style="transform: rotate(180deg);">
          <img src="@/assets/images/trainingWall/to_card.png" class="card">
          <img src="@/assets/images/trainingWall/to.png">
        </div>
        <div class="down" @click="goToNextPage" v-if="totalPages > 1">
          <img src="@/assets/images/trainingWall/to_active_card.png" class="card">
          <img src="@/assets/images/trainingWall/to_active.png">
        </div>
        <div class="down" @click="goToNextPage" v-else style="transform: rotate(0deg);">
          <img src="@/assets/images/trainingWall/to_card.png" class="card">
          <img src="@/assets/images/trainingWall/to.png">
        </div>

      </div>
    </div>
    <img src="@/assets/images/trainingWall/roof.png" class="roof">
    <img src="@/assets/images/trainingWall/bouquet_left.png" class="bouquet_left">
    <img src="@/assets/images/trainingWall/bouquet_right.png" class="bouquet_right">
  </div>


</template>
<style scoped lang="scss">
.container {
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;

  .roof {
    width: 231px;
    height: 225px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
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
  min-height: 100px;
  background: url("@/assets/images/trainingWall/header.png") no-repeat;
  background-size: 100% 100%;
  position: relative;


  .logo {
    width: 248px;
    height: 58px;
    position: absolute;
    top: 25px;
    left: 298px;
  }

  .search {
    width: 375px;
    height: 48px;
    position: absolute;
    top: 25px;
    right: 298px;

    .el-input__wrapper {
      box-shadow: -4px 3px 23px 6px #DBDBDB;
      border-radius: 24px;
    }

    .el-input__suffix .el-input__icon {
      font-size: 50px;
    }
  }
}


.content {
  width: 100%;
  height: calc(100vh - 100px);
  padding-left: 143px;
  padding-right: 106px;
  padding-bottom: 30px;
  background: url("@/assets/images/trainingWall/main.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  overflow: hidden;

  .timeline {
    margin-right: 44px;
    z-index: 10;

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
      box-sizing: border-box;
    }

    .item:not(:first-child) {
      margin-top: -77px;
    }

    .active-timeline {
      color: #B71F1F;
      background: url("@/assets/images/trainingWall/border_selected.png") no-repeat;
      background-size: 100% 100%;
    }
  }

  .photoList {
    z-index: 10;
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 96px;
    box-sizing: border-box;

    .item {
      width: calc(100% / 4 - 9px);
      height: 250px;
      box-sizing: border-box;
      padding: 8px 5px 0 6px;
      position: relative;
      overflow: hidden;
      cursor: pointer;

      .item-box {
        width: 100%;
        height: 200px;
        margin-bottom: 60px;
        border-radius: 20px;
        z-index: 1;
        position: relative;
        cursor: pointer;
        overflow: hidden;

        .img {
          width: 100%;
          height: 100%;
        }

        .mask {
          width: 100%;
          height: 207px;
          padding: 0 32px;
          text-align: center;
          box-sizing: border-box;
          background: #9A200C;
          opacity: 0.73;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          color: #F8F7F6;
          font-family: Source Han Sans CN;
          font-weight: 400;
          position: absolute;
          top: 300px;
          left: 0;
          transition: all 0.8s ease;

          .time {
            font-size: 18px;
          }

          .title {
            font-size: 21px;
          }
        }

      }



      .flower_frame {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
      }
    }

    .item:hover {
      .item-box {
        transform: rotateZ('-2deg');

        .mask {
          top: 0;
          z-index: 1000;
        }
      }
    }
  }

  .pageBtn {
    width: 55px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-left: 32px;

    .up,
    .down {
      width: 55px;
      height: 55px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      img {
        width: 48px;
        height: 48px;
      }
    }

    .card {
      width: 100%;
      height: 100%;
      animation: rotate 10s linear infinite;
      position: absolute;
    }

    .down {
      margin-top: 30px;
      transform: rotate(180deg);
    }
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>


<style lang="scss">
.el-input,
.el-input__wrapper {
  width: 375px;
  height: 48px;
  background: #FFFFFF;
  box-shadow: -4px 3px 23px 6px #DBDBDB;
  border-radius: 24px;

}

.el-input__wrapper {
  padding: 0 20px;
}

.el-input__suffix .el-input__icon {
  font-size: 33px;
}

.el-loading-mask {
  background-color: rgba(0, 0, 0, 0);
}
</style>