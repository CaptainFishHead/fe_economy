<script setup lang="ts">
import { onMounted, ref } from 'vue'
const timelineList = ref([
  { name: '1946~1950年', content: '经济学院的前身可以溯源至1946年华北联合大学设立的财经系，该系于1947年改称经济学系，系主任先后为何干之（兼）和宋涛。1950年，成立国民经济计划系。' },
  { name: '1956年', content: '1957年，世界经济教研室成立，隶属于经济系，由吴大琨任教研室主任。' },
  { name: '1957年', content: '1957年，世界经济教研室成立，隶属于经济系，由吴大琨任教研室主任。' },
  { name: '1960年', content: '1960年，经济系更名为政治经济学系。从1956年到60年代初的一段时期里，在经济系学习的学生、研究生达800多人，包括教职工' },
  { name: '1960~1962年', content: '1960年，国民经济计划系与统计系合并成立计划经济系；1961年，经济地理专业和运输经济专业并入计划经济系；1962年运输经济' },
  { name: '1981年', content: '1981年，政治经济学、世界经济被教育部批准为全国首批博士学位授权点。' },
  { name: '1983年', content: '1983年，计划统计学院成立，下辖统计系和计划经济学系。' },
  { name: '1984年', content: '1984年，中国人民大学经济学研究所成立，所长先后为余学本和胡乃武。同年，西方经济学教研室分别获得外国经济思想史（含西方经济学方向）硕士和博士学位授予权，是最早获得这两个学位点的单位之一。' },
  { name: '1985年', content: '1985年，政治经济学系改名为经济学系。同年，中国经济史、外国经济史硕士点先后设立。' },
  { name: '1988年', content: '1988年，在原经济学系世界经济专业基础上成立国际经济系，下设国际经济专业和太平洋经济研究所。' },
  { name: '1992年', content: '1993年，国务院学位委员会同意中国人民大学自行审批设立国际贸易硕士学位。同时，国务院学位办决定设立西方经济学硕士和博士点，西方经济学教研室又分别于1993年和1996年获得西方经济学硕士和博士学位授予权。' },
  { name: '1993年', content: '1993年，国务院学位委员会同意中国人民大学自行审批设立国际贸易硕士学位。同时，国务院学位办决定设立西方经济学硕士和博士点，西方经济学教研室又分别于1993年和1996年获得西方经济学硕士和博士学位授予权。' },
  { name: '1996年', content: '1996年，中国经济改革与发展研究院成立并于1999年12月被批准为“教育部人文社会科学百所重点研究基地”。' },
  { name: '1998年', content: '1998年，国务院学位委员会批准中国人民大学申报理论经济学一级学科博士学位授权。同年，经济学系、国际经济系和经济学研究所合并成经济学院。' },
  { name: '2006年', content: '2006年，国民经济管理系并入经济学院。' },
  { name: '2010年', content: '2010年，区域与城市经济研究所并入经济学院。' },
  { name: '2011年', content: '2011年，经济学院设立能源经济系，国际经济系设立国际商务硕士专业学位。' },
  { name: '2004、2008、2012、2016年', content: '2004、2008、2012、2016年，经济学院理论经济学、应用经济学一级学科连续四届教育部学科评估排名全国第一。' },
  { name: '2017年', content: '2017年，在经国务院批准下发的《关于公布世界一流大学和一流学科建设高校及建设学科名单的通知》中，理论经济学入选A+类学科名单。' },
  { name: '2019年', content: '2019年，经济学院重组改革、踏上了崭新的历史阶段。' },
])

</script>
<template>
  <div class="container">
    <img class="banner" src="@/assets/images/timeline/bg.png"> </img>
    <div class="memorabilia">大事记</div>
    <div class="route">
      <template v-for="(item, index) in timelineList" :key="index">
        <div class="timeline-item item-left" v-if="index % 2 !== 0">
          <div class="timeline-item-name">
            <div class="text">{{ item.name }} </div>
            <img class="icon-2" src="@/assets/images/timeline/point2.png"></img>
            <div class="line"></div>
            <img class="icon" src="@/assets/images/timeline/point.png"></img>
          </div>
          <div class="timeline-item-content">{{ item.content }}</div>
        </div>
        <div class="timeline-item item-right" v-else>
          <div class="timeline-item-name">
            <img class="icon" src="@/assets/images/timeline/point.png"></img>
            <div class="line"></div>
            <div class="text">{{ item.name }} </div>
            <img class="icon-2" src="@/assets/images/timeline/point2.png"></img>
          </div>
          <div class="timeline-item-content">{{ item.content }}</div>
        </div>
      </template>
      <div class="card card_1">
        <img class="card-img" src="@/assets/images/timeline/building.png">
      </div>
      <div class="card card_2">
        <img class="card-img" src="@/assets/images/timeline/flower.png">
      </div>
      <div class="card card_3">
        <img class="card-img" src="@/assets/images/timeline/people.png">
      </div>
    </div>
    <div class="flower_1">
      <img class="flower_1-img" src="@/assets/images/timeline/flower_1.png">
    </div>
    <div class="flower_2">
      <img src="@/assets/images/timeline/flower_2.png">
    </div>
    <div class="flower_3">
      <img src="@/assets/images/timeline/flower_3.png">
    </div>
    <div class="flower_4">
      <img src="@/assets/images/timeline/flower_4.png">
    </div>
  </div>
</template>
<style scoped lang="scss">
.container {
  background-color: #F4F1EB;
  height: 100%;
  width: 100%;
  position: relative;
  // overflow: hidden;
}

.banner {
  width: 100%;
  height: 1325px;
  position: absolute;
  top: 0;
  left: 0;
}

.memorabilia {
  width: 152px;
  height: 416px;
  font-family: NGwangtianxixingshujian;
  font-weight: 400;
  font-size: 91px;
  color: #FFFFFF;
  z-index: 10;
  background: url('@/assets/images/timeline/bac-roSqe.png') no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top: 108px;
  left: 103px;
  writing-mode: vertical-rl;
  text-align: center;
  line-height: 152px;
}

.route {
  width: 917px;
  height: 4983px;
  z-index: 100;
  background: url('@/assets/images/timeline/line.png') no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top: 0;
  left: calc(50% - 458px);


  .card {
    width: 468px;
    height: 482px;
    background: url('@/assets/images/timeline/orchid.png') no-repeat;
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;

    &-img {
      width: 432px;
      height: 432px;
    }
  }
  .card_1 {
    top: 880px;
    left: 220px;
  }
  .card_2 {
    top: 2035px;
    left: -20px;
  }
  .card_3 {
    top: 3100px;
    left: 370px;
  }

  .timeline-item {
    z-index: 1000;
    position: absolute;
    width: 694px;
    height: 300px;
    display: flex;
    flex-direction: column;

    &-name {
      display: flex;
      align-items: center;


      .text {
        // max-width: 400px;
        line-break: anywhere;
        font-family: Source Han Serif CN;
        font-weight: bold;
        font-size: 62px;
        color: #513127;
      }

      .line {
        width: 226px;
        height: 1px;
        border-bottom: 1px dashed #AC5833;
      }

      .icon {
        width: 32px;
        height: 32px;
      }

      .icon-2 {
        width: 28px;
        height: 28px;
      }
    }

    &-content {
      font-family: Source Han Serif CN;
      font-weight: 500;
      font-size: 21px;
      color: #1C1B1A;
      max-width: 410px;
    }
  }

  .item-left {
    align-items: flex-end;

    .timeline-item-content {
      margin-right: 170px;
    }
  }

  .item-right {
    .timeline-item-content {
      margin-left: 258px;
    }

  }


  .timeline-item:nth-child(1) {
    top: 169px;
    left: 190px;
  }

  .timeline-item:nth-child(2) {
    top: 346px;
    left: -300px;
  }

  .timeline-item:nth-child(3) {
    top: 430px;
    left: 445px;
  }

  .timeline-item:nth-child(4) {
    top: 680px;
    left: -195px;
  }

  .timeline-item:nth-child(5) {
    top: 1390px;
    left: 295px;
  }

  .timeline-item:nth-child(6) {
    top: 1550px;
    left: -570px;
  }

  .timeline-item:nth-child(7) {
    top: 1760px;
    left: 10px;
  }

  .timeline-item:nth-child(8) {
    top: 1932px;
    left: -550px;
  }

  .timeline-item:nth-child(9) {
    top: 2540px;
    left: 105px;
  }

  .timeline-item:nth-child(10) {
    top: 2710px;
    left: -550px;
  }

  .timeline-item:nth-child(11) {
    top: 2820px;
    left: 145px;
  }

  .timeline-item:nth-child(12) {
    top: 3060px;
    left: -355px;
  }

  .timeline-item:nth-child(13) {
    top: 3540px;
    left: 840px;
    width: 504px;
  }

  .timeline-item:nth-child(14) {
    top: 3680px;
    left: 200px;
  }

  .timeline-item:nth-child(15) {
    top: 3880px;
    left: 875px;
    width: 504px;
  }

  .timeline-item:nth-child(16) {
    top: 4030px;
    left: 20px;
  }

  .timeline-item:nth-child(17) {
    top: 4180px;
    left: 660px;
  }

  .timeline-item:nth-child(18) {
    width: 700px;
    top: 4240px;
    left: -5px;

    .text {
      width: 414px;
    }
    .timeline-item-content {
      margin-right: 286px;
    }
  }

  .timeline-item:nth-child(19) {
    top: 4540px;
    left: 614px;
  }

  .timeline-item:nth-child(20) {
    top: 4700px;
    left: -140px;
    height: 100px;
  }
}


.flower_1 {
  width: 429px;
  height: 649px;
  position: absolute;
  top: 903px;
  left: 0;

  img {
    width: 100%;
    height: 100%;
  }
}

.flower_2 {
  width: 294px;
  height: 435px;
  position: absolute;
  top: 2296px;
  left: 0;

  img {
    width: 100%;
    height: 100%;
  }
}

.flower_3 {
  width: 549px;
  height: 808px;
  position: absolute;
  top: 2171px;
  right: 0;

  img {
    width: 100%;
    height: 100%;
  }
}


.flower_4 {
  width: 726px;
  height: 729px;
  position: absolute;
  top: 3466px;
  left: 0;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>