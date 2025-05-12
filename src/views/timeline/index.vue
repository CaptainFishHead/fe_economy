<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollMagic from 'scrollmagic';

// 注册 ScrollTrigger 插件
gsap.registerPlugin(ScrollTrigger);

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

const timelineList = ref([
  { id: '1', name: '1946~1950年', content: '经济学院的前身可以溯源至1946年华北联合大学设立的财经系，该系于1947年改称经济学系，系主任先后为何干之（兼）和宋涛。1950年，成立国民经济计划系。' },
  { id: '2', name: '1956年', content: '1957年，世界经济教研室成立，隶属于经济系，由吴大琨任教研室主任。' },
  { id: '3', name: '1957年', content: '1957年，世界经济教研室成立，隶属于经济系，由吴大琨任教研室主任。' },
  { id: '4', name: '1960年', content: '1960年，经济系更名为政治经济学系。从1956年到60年代初的一段时期里，在经济系学习的学生、研究生达800多人，包括教职工' },
  { id: '5', name: '1960~1962年', content: '1960年，国民经济计划系与统计系合并成立计划经济系；1961年，经济地理专业和运输经济专业并入计划经济系；1962年运输经济' },
  { id: '6', name: '1981年', content: '1981年，政治经济学、世界经济被教育部批准为全国首批学位授权点。' },
  { id: '7', name: '1983年', content: '1983年，计划统计学院成立，下辖统计系和计划经济学系。' },
  { id: '8', name: '1984年', content: '1984年，中国人民大学经济学研究所成立，所长先后为余学本和胡乃武。同年，西方经济学教研室分别获得外国经济思想史（含西方经济学方向）硕士和学位授予权，是最早获得这两个学位点的单位之一。' },
  { id: '9', name: '1985年', content: '1985年，政治经济学系改名为经济学系。同年，中国经济史、外国经济史硕士点先后设立。' },
  { id: '10', name: '1988年', content: '1988年，在原经济学系世界经济专业基础上成立国际经济系，下设国际经济专业和太平洋经济研究所。' },
  { id: '11', name: '1992年', content: '1993年，国务院学位委员会同意中国人民大学自行审批设立国际贸易硕士学位。同时，国务院学位办决定设立西方经济学硕士和博士点，西方经济学教研室又分别于1993年和1996年获得西方经济学硕士和学位授予权。' },
  { id: '12', name: '1993年', content: '1993年，国务院学位委员会同意中国人民大学自行审批设立国际贸易硕士学位。同时，国务院学位办决定设立西方经济学硕士和博士点，西方经济学教研室又分别于1993年和1996年获得西方经济学硕士和学位授予权。' },
  { id: '13', name: '1996年', content: '1996年，中国经济改革与发展研究院成立并于1999年12月被批准为"教育部人文社会科学百所重点研究基地"。' },
  { id: '14', name: '1998年', content: '1998年，国务院学位委员会批准中国人民大学申报理论经济学一级学科学位授权。同年，经济学系、国际经济系和经济学研究所合并成经济学院。' },
  { id: '15', name: '2006年', content: '2006年，国民经济管理系并入经济学院。' },
  { id: '16', name: '2010年', content: '2010年，区域与城市经济研究所并入经济学院。' },
  { id: '17', name: '2011年', content: '2011年，经济学院设立能源经济系，国际经济系设立国际商务硕士专业学位。' },
  { id: '18', name: '2004、2008、2012、2016年', content: '2004、2008、2012、2016年，经济学院理论经济学、应用经济学一级学科连续四届教育部学科评估排名全国第一。' },
  { id: '19', name: '2017年', content: '2017年，在经国务院批准下发的《关于公布世界一流大学和一流学科建设高校及建设学科名单的通知》中，理论经济学入选A+类学科名单。' },
  { id: '20', name: '2019年', content: '2019年，经济学院重组改革、踏上了崭新的历史阶段。' },
])
const scrollPosition = ref(0);
const thumbPosition = ref(0);
const thumbHeight = ref(0);
const isDragging = ref(false);
const containerHeight = ref(0);
const contentHeight = ref(0);
const isInViewport = ref(false);
const lastInViewport = ref(false);
const startDrag = (e) => {
  isDragging.value = true;
  const startY = e.clientY;
  const startPosition = thumbPosition.value;
  document.addEventListener('mousemove', (e) => {
    if (isDragging.value) {
      const dy = e.clientY - startY;
      const newPosition = startPosition + dy;
      const minPosition = 0;
      const maxPosition = containerHeight.value - thumbHeight.value;
      thumbPosition.value = Math.min(Math.max(newPosition, minPosition), maxPosition);
      const scrollRatio = thumbPosition.value / (containerHeight.value - thumbHeight.value);
      scrollPosition.value = scrollRatio * (contentHeight.value - containerHeight.value);
    }
  });
  document.addEventListener('mouseup', () => {
    isDragging.value = false;
    document.removeEventListener('mousemove', () => { });
    document.removeEventListener('mouseup', () => { });
  });
};

const standardRef = ref(null);
const handleScroll = () => {
  const card_3 = document.querySelector('.card_3');
  const rect = card_3.getBoundingClientRect();
  isInViewport.value = rect.bottom <= window.innerHeight;
  if (lastInViewport.value != isInViewport.value) {
    lastInViewport.value = isInViewport.value;


    if (isInViewport.value) {
      gsap.to(standardRef.value, {
        x: 200, // 向右移动 200px
        opacity: 0, // 透明度为 0
        duration: 0.5, // 动画持续时间
        ease: 'power2.out',
        onComplete: () => {
          standardRef.value.classList.remove('standard');

          setTimeout(() => {
            gsap.to(standardRef.value, {
              x: 0,
              opacity: 0,
              onComplete: () => {
                standardRef.value.classList.add('standard-left');
                gsap.to(standardRef.value, {
                  opacity: 1,
                })
                standardRef.value.classList.add('show');
              }
            });
          }, 500)
        }
      });
    } else {
      standardRef.value.classList.remove('show');
      setTimeout(() => {
        standardRef.value.classList.remove('standard-left');
        standardRef.value.classList.add('standard');
        gsap.to('.standard', {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out'
        });
      }, 500)

    }
  }
  // if (isInViewport.value != lastInViewport.value) {
  //   lastInViewport.value = isInViewport.value;
  //   if (isInViewport.value) {
  //     gsap.to(standardRef.value, {
  //       x: 200, // 向右移动 200px
  //       opacity: 0, // 透明度为 0
  //       duration: 0.5, // 动画持续时间
  //       ease: 'power2.out',
  //     });
  //   } else {
  //     gsap.to(standardRef.value, {
  //       x: 0,
  //       opacity: 1,
  //       duration: 0.5,
  //       ease: 'power2.out'
  //     });
  //   }
  //   setTimeout(() => {
  //     // if (standardRef.value.className == 'standard-left') {
  //     //   gsap.to(standardRef.value, {
  //     //     x: -200,
  //     //     opacity: 0,
  //     //     duration: 0.8,
  //     //     ease: 'power2.out',
  //     //     onComplete: () => {
  //     //       gsap.to(standardRef.value, {
  //     //         x: 0,
  //     //         opacity: 1,
  //     //         duration: 1.2,
  //     //         ease: 'power2.out'
  //     //       });
  //     //     }
  //     //   });
  //     // }
  //     console.log(standardRef.value.className);
  //   }, 1500)
  // }
};

onMounted(() => {
  // 锚点滚动区域
  const timelineContainer = document.querySelector('.timeline-container');
  const timelineContent = document.querySelector('.timeline-content');
  containerHeight.value = timelineContainer.offsetHeight; // 获取容器高度
  contentHeight.value = timelineContent.offsetHeight; // 获取内容高度
  thumbHeight.value = (containerHeight.value / contentHeight.value) * containerHeight.value;
  window.addEventListener('scroll', handleScroll);
  gsap.registerPlugin(ScrollTrigger);

  // 设置默认缓动
  gsap.defaults({
    ease: "power2.out"
  });

  // // 获取首屏可见元素
  // const getVisibleElements = () => {
  //   const viewportHeight = window.innerHeight;
  //   const elements = {
  //     timelineItems: [],
  //     cards: [],
  //     flowers: []
  //   };

  //   document.querySelectorAll('.timeline-item').forEach(item => {
  //     const rect = item.getBoundingClientRect();
  //     if (rect.top < viewportHeight) {
  //       elements.timelineItems.push(item);
  //     }
  //   });

  //   document.querySelectorAll('.card').forEach(card => {
  //     const rect = card.getBoundingClientRect();
  //     if (rect.top < viewportHeight) {
  //       elements.cards.push(card);
  //     }
  //   });

  //   document.querySelectorAll('.flower_1, .flower_2, .flower_3, .flower_4').forEach(flower => {
  //     const rect = flower.getBoundingClientRect();
  //     if (rect.top < viewportHeight) {
  //       elements.flowers.push(flower);
  //     }
  //   });

  //   return elements;
  // };

  // // 首屏动画序列
  // const initFirstScreen = () => {
  //   const tl = gsap.timeline({
  //     delay: 0.3,
  //     onComplete: () => initScrollAnimations()
  //   });

  //   // 预先隐藏所有元素
  //   gsap.set(['.banner', '.memorabilia', '.timeline-item', '.card', '.flower_1, .flower_2, .flower_3, .flower_4'], {
  //     opacity: 0,
  //     visibility: 'hidden'
  //   });

  //   // 背景动画
  //   tl.to('.banner', {
  //     opacity: 1,
  //     visibility: 'visible',
  //     scale: 1,
  //     duration: 2,
  //     ease: "power2.inOut"
  //   })
  //     // 标题动画
  //     .to('.memorabilia', {
  //       opacity: 1,
  //       visibility: 'visible',
  //       scale: 1,
  //       y: 0,
  //       rotationX: 0,
  //       duration: 1.5,
  //       ease: "elastic.out(1, 0.5)"
  //     }, "-=1.5");
  //   // 获取首屏可见元素
  //   const visibleElements = getVisibleElements();
  //   // 首屏时间轴项目动画
  //   visibleElements.timelineItems.forEach((item, index) => {
  //     const isLeft = item.classList.contains('item-left');
  //     const content = item.querySelector('.timeline-item-content');
  //     const name = item.querySelector('.timeline-item-name');
  //     const icons = item.querySelectorAll('.icon, .icon-2');
  //     const line = item.querySelector('.line');

  //     tl.to(item, {
  //       opacity: 1,
  //       visibility: 'visible',
  //       x: 0,
  //       y: 0,
  //       rotateY: 0,
  //       scale: 1,
  //       duration: 1.2,
  //       ease: "back.out(1.7)",
  //     }, `-=${index ? 0.8 : 0}`)
  //       .to(name, {
  //         opacity: 1,
  //         visibility: 'visible',
  //         x: 0,
  //         scale: 1,
  //         duration: 0.8,
  //       }, "-=0.8")
  //       .to(content, {
  //         opacity: 1,
  //         visibility: 'visible',
  //         y: 0,
  //         scale: 1,
  //         duration: 0.8,
  //         ease: "power4.out"
  //       }, "-=0.6")
  //       .to(icons, {
  //         opacity: 1,
  //         visibility: 'visible',
  //         scale: 1,
  //         rotation: 0,
  //         duration: 0.6,
  //         stagger: 0.2,
  //         ease: "back.out(2)"
  //       }, "-=0.6")
  //       .to(line, {
  //         opacity: 1,
  //         visibility: 'visible',
  //         scaleX: 1,
  //         duration: 0.8,
  //         ease: "power2.inOut"
  //       }, "-=0.8");
  //   });

  //   // 首屏卡片和装饰元素动画
  //   [...visibleElements.cards, ...visibleElements.flowers].forEach((el, index) => {
  //     tl.to(el, {
  //       opacity: 1,
  //       visibility: 'visible',
  //       y: 0,
  //       scale: 1,
  //       rotation: 0,
  //       duration: 1.2,
  //       ease: "power3.out"
  //     }, `-=${index ? 0.9 : 0}`);
  //   });
  // };


  // 滚动动画初始化
  const initScrollAnimations = () => {

    gsap.set(['.banner', '.memorabilia', '.timeline-item', '.card', '.flower_1, .flower_2, .flower_3, .flower_4'], {
      opacity: 1,
      visibility: 'visible'
    });

    // 时间轴项目动画
    const timelineItems = gsap.utils.toArray('.timeline-item');
    timelineItems.forEach((item: Element, index: number) => {
      const isLeft = item.classList.contains('item-left');
      const content = item.querySelector('.timeline-item-content');
      const name = item.querySelector('.timeline-item-name');
      const icons = item.querySelectorAll('.icon, .icon-2');
      const line = item.querySelector('.line');
      if (index < 4) return
      const itemTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top 80%", // 提前触发
          end: "center center",
          toggleActions: "restart none none reverse", // 重复触发
          scrub: 1.5, // 平滑过渡
        }
      });

      itemTimeline
        .fromTo(item, {
          opacity: 0,
          x: isLeft ? -100 : 100,
          rotateY: isLeft ? -45 : 45,
          scale: 0.8
        }, {
          opacity: 1,
          x: 0,
          rotateY: 0,
          scale: 1,
          duration: 1.5
        })
        .fromTo(name, {
          opacity: 0,
          y: 20
        }, {
          opacity: 1,
          y: 0,
          duration: 1
        }, "-=1")
        .fromTo(content, {
          opacity: 0,
          y: 30,
          scale: 0.95
        }, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2
        }, "-=0.8")
        .fromTo(icons, {
          scale: 0,
          opacity: 0,
          rotation: -180
        }, {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 1,
          stagger: 0.2
        }, "-=1")
        .fromTo(line, {
          scaleX: 0,
          opacity: 0
        }, {
          scaleX: 1,
          opacity: 1,
          duration: 1
        }, "-=0.8");
    });

    // 底部触发器
    ScrollTrigger.create({
      trigger: ".route",
      start: "bottom bottom+=500", // 提前触发
      end: "bottom top", // 提前触发
      scrub: 1.5, // 平滑过渡
      onEnter: () => {
        // 确保底部元素完全显示
        const bottomElements = Array.from(document.querySelectorAll('.timeline-item')).slice(-2);
        gsap.to(bottomElements, {
          opacity: 1,
          visibility: 'visible',
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          onComplete: () => {
            // 确保所有子元素都显示
            bottomElements.forEach(item => {
              gsap.to(item.querySelectorAll('.timeline-item-content, .timeline-item-name, .icon, .icon-2, .line'), {
                opacity: 1,
                visibility: 'visible',
                y: 0,
                scale: 1,
                duration: 0.5,
                stagger: 0.1
              });
            });
          }
        });
      }
    });
    // 卡片动画
    const cards = gsap.utils.toArray('.card');
    cards.forEach((card: Element, index: number) => {
      if (index < 1) return
      gsap.fromTo(card,
        {
          opacity: 0, // 初始透明度
          y: 50,  // 初始Y轴位移
          scale: 0.8, // 初始缩放
          rotateX: 15
        },
        {
          opacity: 1, // 最终透明度
          y: 0, // 最终Y轴位移
          scale: 1,   // 最终缩放
          rotateX: 0, // 最终旋转角度
          duration: 1.5, // 动画持续时间
          scrollTrigger: {
            trigger: card, // 触发器元素
            start: "top 85%",  // 触发位置
            end: "center center",   // 触发位置
            toggleActions: "restart none none reverse", // 重复触发
            scrub: 2    // 平滑过渡
          }
        }
      );
    });

    // 花朵动画
    const flowers = gsap.utils.toArray('.flower_1, .flower_2, .flower_3, .flower_4');
    flowers.forEach((flower: Element, index: number) => {
      // 入场动画
      gsap.fromTo(flower,
        {
          opacity: 0,
          scale: 0.8,
          y: 30
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.5,
          scrollTrigger: {
            trigger: flower,
            start: "top 90%",
            end: "center center",
            toggleActions: "restart none none reverse",
            scrub: 1
          }
        }
      );

      // 持续的漂浮动画
      gsap.to(flower, {
        y: `random(-${20 + index * 5}, ${20 + index * 5})`,
        x: `random(-${15 + index * 3}, ${15 + index * 3})`,
        rotation: `random(-${4 + index}, ${4 + index})`,
        duration: `random(${4 + index}, ${7 + index})`,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true
      });
    });
  };
  // initFirstScreen()
  // 初始化所有动画
  initScrollAnimations();
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

</script>

<template>
  <div class="container">
    <img class="banner" src="@/assets/images/timeline/bg.png"> </img>
    <div class="memorabilia">大事记</div>
    <div class="route">
      <template v-for="(item, index) in timelineList" :key="index">
        <div class="timeline-item item-left" v-if="index % 2 != 0" :id="item.id">
          <div class="timeline-item-name">
            <div class="text">{{ item.name }} </div>
            <img class="icon-2" src="@/assets/images/timeline/point2.png"></img>
            <div class="line"></div>
            <img class="icon" src="@/assets/images/timeline/point.png"></img>
          </div>
          <div class="timeline-item-content">{{ item.content }}</div>
        </div>
        <div class="timeline-item item-right" v-else :id="item.id">
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
    <div class="standard" ref="standardRef">
      <img class="standard-img" src="@/assets/images/timeline/standard.png">
      <div class="timeline-container">
        <div class="timeline-content" :style="{ transform: `translateY(-${scrollPosition}px)` }">
          <div class="time" v-for="(item, index) in timelineList" :key="index" @click="scrollToSection(item.id)"> {{
            item.name }}
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
  </div>
</template>

<style scoped lang="scss">
.container {
  background-color: #F4F1EB;
  height: 100%;
  width: 100%;
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
}

.standard {
  position: fixed;
  top: 150px;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  transition: right 0.5s ease, opacity 0.5s ease;

  .standard-img {
    max-width: 74px;
    max-height: 690px;
    position: absolute;
    bottom: -2px;
    left: 60px;
  }
}

.standard-left {
  position: fixed;
  top: 150px;
  left: -230px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
  z-index: 1000;
  transition: left 0.8s ease, opacity 0.8s ease;
  opacity: 0;

  .standard-img {
    max-width: 74px;
    max-height: 690px;
    position: absolute;
    bottom: -2px;
    right: 60px;
  }
}

.show {
  left: 0;
  opacity: 1;
  transition: left 0.8s ease, opacity 0.8s ease;
}

.timeline-container {
  width: 150px;
  height: 597px;
  overflow: hidden;

  .timeline-content {
    transition: transform 0.2s ease;

    .time {
      width: 140px;
      height: 48px;
      background: #556F98;
      border-radius: 30px 0 30px 0;
      margin-bottom: 13px;
      text-align: center;
      // line-height: 48px;
      font-family: Source Han Serif CN, sans-serif;
      font-weight: bold;
      font-size: 16px;
      color: #FFFFFF;
      display: flex;
      justify-content: center;
      align-items: center;

      ， &:nth-child(3n + 1) {
        background: #556F98;
      }

      &:nth-child(3n + 2) {
        background: #972F2F;
      }

      &:nth-child(3n) {
        background: #AC5833;
      }

      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }

}

.scrollbar-container {
  width: 12px;
  height: 597px;
  background: #AC5833;
  border-radius: 5px 6px 7px 6px;
  margin: 0 30px;

  .scrollbar-track {
    position: relative;
    height: 100%;

    .scrollbar-thumb {
      position: absolute;
      width: 100%;
      width: 12px;
      height: 95px;
      background: #556F98;
      border-radius: 5px 5px 6px 5px;
      cursor: pointer;
    }
  }
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

.timeline-item {
  transform-origin: center;
  will-change: transform, opacity;

  &-content {
    transform-origin: center;
    will-change: transform, opacity, color;
    transition: background-color 0.3s ease;
  }

  &-name {

    .icon,
    .icon-2 {
      transform-origin: center;
      will-change: transform;
    }

    .line {
      transform-origin: left center;
      will-change: transform;
    }
  }
}

.card {
  transform-origin: center;
  will-change: transform;

  &-img {
    transition: transform 0.3s ease;
  }

  &:hover .card-img {
    transform: scale(1.05);
  }
}

// 添加平滑滚动
html {
  scroll-behavior: smooth;
}

// 优化视觉效果
.route {
  perspective: 1000px;
  transform-style: preserve-3d;
}

// 添加渐变背景效果
.timeline-item-content {
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(255, 107, 1, 0), rgba(255, 107, 1, 0.05));
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 4px;
    z-index: -1;
  }

  &:hover::before {
    opacity: 1;
  }
}
</style>
