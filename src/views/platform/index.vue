<template>
  <div class="container">
    <div class="timeline-container">
      <div class="timeline-content" :style="{ transform: `translateY(-${scrollPosition}px)` }">
        <div v-for="(item, index) in timelineList" :key="index" class="timeline-item">
          {{ item.name }}
        </div>
      </div>
    </div>
    <div class="scrollbar-container">
      <div class="scrollbar-track">
        <div class="scrollbar-thumb" :style="{ top: thumbPosition + 'px', height: thumbHeight + 'px' }"
          @mousedown="startDrag"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const timelineList = ref([
  { name: '1946~1950年', content: '经济学院的前身可以溯源至1946年华北联合大学设立的财经系，该系于1947年改称经济学系，系主任先后为何干之（兼）和宋涛。1950年，成立国民经济计划系。' },
  { name: '1956年', content: '1957年，世界经济教研室成立，隶属于经济系，由吴大琨任教研室主任。' },
  { name: '1957年', content: '1957年，世界经济教研室成立，隶属于经济系，由吴大琨任教研室主任。' },
  { name: '1960年', content: '1960年，经济系更名为政治经济学系。从1956年到60年代初的一段时期里，在经济系学习的学生、研究生达800多人，包括教职工' },
  { name: '1960~1962年', content: '1960年，国民经济计划系与统计系合并成立计划经济系；1961年，经济地理专业和运输经济专业并入计划经济系；1962年运输经济' },
  { name: '1981年', content: '1981年，政治经济学、世界经济被教育部批准为全国首批学位授权点。' },
  { name: '1983年', content: '1983年，计划统计学院成立，下辖统计系和计划经济学系。' },
  { name: '1984年', content: '1984年，中国人民大学经济学研究所成立，所长先后为余学本和胡乃武。同年，西方经济学教研室分别获得外国经济思想史（含西方经济学方向）硕士和学位授予权，是最早获得这两个学位点的单位之一。' },
  { name: '1985年', content: '1985年，政治经济学系改名为经济学系。同年，中国经济史、外国经济史硕士点先后设立。' },
  { name: '1988年', content: '1988年，在原经济学系世界经济专业基础上成立国际经济系，下设国际经济专业和太平洋经济研究所。' },
  { name: '1992年', content: '1993年，国务院学位委员会同意中国人民大学自行审批设立国际贸易硕士学位。同时，国务院学位办决定设立西方经济学硕士和博士点，西方经济学教研室又分别于1993年和1996年获得西方经济学硕士和学位授予权。' },
  { name: '1993年', content: '1993年，国务院学位委员会同意中国人民大学自行审批设立国际贸易硕士学位。同时，国务院学位办决定设立西方经济学硕士和博士点，西方经济学教研室又分别于1993年和1996年获得西方经济学硕士和学位授予权。' },
  { name: '1996年', content: '1996年，中国经济改革与发展研究院成立并于1999年12月被批准为"教育部人文社会科学百所重点研究基地"。' },
  { name: '1998年', content: '1998年，国务院学位委员会批准中国人民大学申报理论经济学一级学科学位授权。同年，经济学系、国际经济系和经济学研究所合并成经济学院。' },
  { name: '2006年', content: '2006年，国民经济管理系并入经济学院。' },
  { name: '2010年', content: '2010年，区域与城市经济研究所并入经济学院。' },
  { name: '2011年', content: '2011年，经济学院设立能源经济系，国际经济系设立国际商务硕士专业学位。' },
  { name: '2004、2008、2012、2016年', content: '2004、2008、2012、2016年，经济学院理论经济学、应用经济学一级学科连续四届教育部学科评估排名全国第一。' },
  { name: '2017年', content: '2017年，在经国务院批准下发的《关于公布世界一流大学和一流学科建设高校及建设学科名单的通知》中，理论经济学入选A+类学科名单。' },
  { name: '2019年', content: '2019年，经济学院重组改革、踏上了崭新的历史阶段。' },
]);

const scrollPosition = ref(0);
const thumbPosition = ref(0);
const thumbHeight = ref(0);
const isDragging = ref(false);
const containerHeight = ref(0);
const contentHeight = ref(0);

const startDrag = (e) => {
  isDragging.value = true;
  const startY = e.clientY;
  const startPosition = thumbPosition.value;

  const onMouseMove = (e) => {
    if (isDragging.value) {
      const dy = e.clientY - startY;
      const newPosition = startPosition + dy;
      const minPosition = 0;
      const maxPosition = containerHeight.value - thumbHeight.value;
      thumbPosition.value = Math.min(Math.max(newPosition, minPosition), maxPosition);
      const scrollRatio = thumbPosition.value / (containerHeight.value - thumbHeight.value);
      scrollPosition.value = scrollRatio * (contentHeight.value - containerHeight.value);
    }
  };

  const onMouseUp = () => {
    isDragging.value = false;
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
};

onMounted(() => {
  const timelineContainer = document.querySelector('.timeline-container');
  const timelineContent = document.querySelector('.timeline-content');
  containerHeight.value = timelineContainer.offsetHeight;
  contentHeight.value = timelineContent.offsetHeight;
  thumbHeight.value = (containerHeight.value / contentHeight.value) * containerHeight.value;
});
</script>

<style scoped>
.container {
  display: flex;
  width: 400px;
  margin: 50px auto;
}

.timeline-container {
  width: 150px;
  height: 597px;
  overflow: hidden;
  border: 1px solid #ccc;
}

.timeline-content {
  transition: transform 0.2s ease;
}

.timeline-item {
  width: 149px;
  height: 48px;
  background: #556F98;
  border-radius: 30px 0 30px 0;
  margin-bottom: 13px;
  text-align: center;
  line-height: 48px;
  font-family: Source Han Serif CN, sans-serif;
  font-weight: bold;
  font-size: 18px;
  color: #FFFFFF;
}

.scrollbar-container {
  margin-left: 30px;
  width: 12px;
  height: 597px;
  background: #AC5833;
  border-radius: 5px 6px 7px 6px;
}

.scrollbar-track {
  position: relative;
  height: 100%;
}

.scrollbar-thumb {
  position: absolute;
  width: 100%;
  background: #556F98;
  border-radius: 5px 5px 6px 5px;
  cursor: pointer;
}
</style>