<script setup lang="ts">
import { getIntroList } from '@/api/home/index'
import { onMounted, ref } from 'vue'
import { gsap, TimelineMax } from 'gsap'
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import ScrollMagic from 'scrollmagic';
import anime from 'animejs';

let IntroList = ref([] as any[])
const getIntroListData = () => {
  getIntroList().then((res: any) => {
    if (res.code === 200) {
      IntroList = res.data
    }
  })
}

// 注册 ScrollMagic 和 GSAP 插件
ScrollMagicPluginGsap(ScrollMagic, gsap, TimelineMax);
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

onMounted(() => {
  // 获取数据
  // getIntroListData()

  // 花瓣动画
  const petals = document.querySelectorAll('[class^="petal"]');
  petals.forEach((petal) => {
    // 随机初始位置
    const randomX = Math.random() * window.innerWidth;
    const randomY = -Math.random() * 500;
    (petal as HTMLElement).style.left = `${randomX}px`;
    (petal as HTMLElement).style.top = `${randomY}px`;

    // 随机缩放
    const randomScale = Math.random() * 0.8 + 0.2;
    (petal as HTMLElement).style.transform = `scale(${randomScale})`;

    // 随机透明度
    const randomOpacity = Math.random() * 0.8 + 0.2;
    (petal as HTMLElement).style.opacity = `${randomOpacity}`;

    anime({
      targets: petal,
      translateX: (el: HTMLElement) => [(Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100],
      translateY: window.innerHeight + 100,
      rotate: (el: HTMLElement) => [(Math.random() - 0.5) * 720, (Math.random() - 0.5) * 720],
      duration: (el) => Math.random() * 5000 + 3000,
      delay: (el) => Math.random() * 2000,
      loop: true,
      easing: 'easeInOutSine'
    });
  });



  //  滚动动画合集
  const elements = ['.feature1', '.feature2', '.feature3', '.feature4', '.box4feature', '.box5feature', '.box6feature']

  // 初始化 ScrollMagic 控制器
  // const controller = new ScrollMagic.Controller()
  // elements.forEach((selector) => {
  //   const timeline = gsap.timeline()
  //   timeline.fromTo(selector, {
  //     autoAlpha: 0,
  //     y: 300
  //   }, {
  //     autoAlpha: 1,
  //     y: 0,
  //     duration: 1.2,
  //     ease: 'power2.out',
  //     stagger: 0.3
  //   })

  //   new ScrollMagic.Scene({
  //     triggerElement: selector,
  //     triggerHook: 0.75,
  //     duration: '80%'
  //   })
  //     .setTween(timeline)
  //     .addTo(controller)
  // })


  //  滚动分页

  // 为每个 section 创建 ScrollTrigger
  // sections.forEach((section, index) => {
  //   ScrollTrigger.create({
  //     trigger: section, // 当前触发的元素
  //     start: 'top top', // 当元素顶部与视口顶部对齐时触发
  //     end: 'bottom bottom', // 当元素底部与视口底部对齐时结束
  //     snap: 1 / sections.length, // 自动滚动到最近的 section
  //     markers: false, // 是否显示调试标记
  //     pin: true, // 固定当前 section
  //     scrub: true, // 平滑滚动
  //   });
  // });


  // 自动滚动

  let currentIndex = 0;
  let autoScrollInterval: NodeJS.Timeout | null = null
  // 自动滚动到指定元素
  const scrollToElement = (index: number) => {
    const target = document.querySelector(elements[index]);
    if (target) {
      gsap.to(window, {
        scrollTo: { y: target, autoKill: false },
        duration: 1.5, // 增加滚动时间
        ease: 'power2.inOut', // 使用更自然的缓动函数
        overwrite: true
      });
    }
  };

  // 开始自动滚动
  const startAutoScroll = () => {
    autoScrollInterval = setInterval(() => {
      // 为滚动间隔添加随机变化
      const randomInterval = Math.random() * 2000 + 3000;
      currentIndex = (currentIndex + 1) % elements.length;
      scrollToElement(currentIndex);
    }, 4000);
  };

  // 停止自动滚动
  const stopAutoScroll = () => {
    if (autoScrollInterval) {
      clearInterval(autoScrollInterval);
      autoScrollInterval = null;
    }
  };

  // 初始化滚动触发器
  elements.forEach((selector, index) => {
    const element = document.querySelector(selector);
    if (element) {
      ScrollTrigger.create({
        trigger: element,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => (currentIndex = index), // 更新当前索引
      });
    }
  });

  // 鼠标悬浮暂停，移开继续
  const container = document.querySelector('.container');
  if (container) {
    container.addEventListener('mouseenter', stopAutoScroll);
    container.addEventListener('mouseleave', startAutoScroll);
  }

  startAutoScroll();
})
</script>

<template>
  <div class="container">
    <div class="feature1">
      <div class="willow2"></div>
      <div class="college">
        <div class="text">学院介绍</div>
      </div>
    </div>

    <div class="feature2">
      <img src="@/assets/images/briefIntroduction/people.png" class="people"></img>
      <div class="form">
        <div class="content">中国经济学教育的旗舰、优秀经济学人才的摇篮。新中国理论经济学的重要奠基者与开拓者。终于哦特色社会主义经济思想的引领者。中国经济学研究的理论重镇。</div>
        <div class="title">
          <div class="text">学院特色</div>
        </div>
      </div>
    </div>

    <div class="feature3">
      <div class="form">
        <div class="content">立足中国真实创新中国理论培养中国人才推动中国发展。</div>
        <div class="title">
          <div class="text">学院愿景</div>
        </div>
      </div>
      <img src="@/assets/images/briefIntroduction/vision.png" class="people"></img>
    </div>

    <div class="feature4">
      <img src="@/assets/images/briefIntroduction/rain.png" class="img">
      <img src="@/assets/images/briefIntroduction/willow3.png" class="willow3">
    </div>

    <div class="box4feature">
      <div class="feature5 feature">
        <div class="title">教育旗舰 理论重镇</div>
        <div class="content">
          中国人民大学经济学院于1998年正式组建，其前身最早可以溯源至1939年陕北公学设立的政治经济学研究室，后历经华北大学、华北联合大学演进，是新中国经济学科的重要奠基者和开拓者。作为中国经济学教育与研究的理论重镇，经济学院承担着培养高层次杰出经济学人才，构建中国气派、中国风格的经济学教育高地，为国家经济发展建言献策的伟大使命。
        </div>
      </div>
      <div class="feature6">
        <img src="@/assets/images/briefIntroduction/economics.png" class="img">
      </div>
      <img src="@/assets/images/briefIntroduction/flower2.png" class="flower1">
    </div>

    <div class="box5feature">
      <div class="feature7 feature">
        <div class="content">
          经济学院设有经济学、国际经济与贸易、数字经济3个本科专业，12个硕士点，10个博士点，“经济学—数学”双学位实验班、“中国经济”全英文硕士班、理论经济学硕博连读实验班等8个创新人才培养平台；拥有国家重点一级学科“理论经济学”，国家重点二级学科“政治经济学”、“西方经济学”，北京市重点二级学科“世界经济学”；是国家经济学基础人才培养基地、教育部人文社会科学重点研究基地、国家“统筹支持一流大学和一流学科建设”项目、国家“2011”中国特色社会主义经济建设协同创新中心协同单位和全国中国特色社会主义政治经济学研究中心。在2004年、2008年、2012年和2016年四轮国家重点一级学科评估中，理论经济学名列全国第一。2017年，在经国务院批准下发的《关于公布世界一流大学和一流学科建设高校及建设学科名单的通知》中，理论经济学入选A类一流大学建设名单。
        </div>
      </div>
      <div class="feature8">
        <img src="@/assets/images/briefIntroduction/schoolBadge.png" class="img">
      </div>
      <img src="@/assets/images/briefIntroduction/flower1.png" class="flower2">
    </div>

    <div class="box6feature">
      <div class="feature9 feature">
        <div class="title">大师云集 实力强悍</div>
        <div class="content">
          经济学院拥有目前国内最为完整和具有重大社会影响、老中青年龄结构合理的经济学专家团队，引领国内学术前沿，为党和国家的重大理论创新提供了有力的智力支持；形成了特点鲜明、结构完善的课程体系、教材体系和人才培养体系，牢牢地确立了国内最重要经济学人才培养基地的地位，在新时期为中央和各级政府机关、国际国内院校、全球顶尖企业输送了大批的优秀工作者。
        </div>
      </div>
    </div>


    <img src="@/assets/images/briefIntroduction/mountain2.png" class="mountain1">
    <img src="@/assets/images/briefIntroduction/mountain2.png" class="mountain2">
    <img src="@/assets/images/briefIntroduction/mountain2.png" class="mountain3">
    <img src="@/assets/images/briefIntroduction/mountain2.png" class="mountain4">
    <img src="@/assets/images/briefIntroduction/mountain1.png" class="mountain5">
    <img src="@/assets/images/briefIntroduction/petal2.png" class="petal2">
    <img src="@/assets/images/briefIntroduction/petal1.png" class="petal3">
    <img src="@/assets/images/briefIntroduction/petal2.png" class="petal4">
    <img src="@/assets/images/briefIntroduction/petal4.png" class="petal7">
    <img src="@/assets/images/briefIntroduction/petal1.png" class="petal5">
    <img src="@/assets/images/briefIntroduction/petal3.png" class="petal6">
    <img src="@/assets/images/briefIntroduction/petal8.png" class="petal9">
    <img src="@/assets/images/briefIntroduction/petal5.png" class="petal8">
    <img src="@/assets/images/briefIntroduction/petal6.png" class="petal10">
  </div>
</template>

<style scoped lang="scss">
body {
  -ms-overflow-style: none;
  scrollbar-width: none;
  margin: 0;
  /* 1 */
  line-height: inherit;
  /* 2 */

}

/* 隐藏滚动条 */
body::-webkit-scrollbar {
  display: none;
}

.container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.willow3 {
  width: 436px;
  height: 604px;
  position: absolute;
  bottom: -340px;
  right: 0;
  z-index: 10;
}

[class^="petal"] {
  position: absolute;
  pointer-events: none;
}

.flower1 {
  width: 459px;
  height: 707px;
  position: absolute;
  right: 0;
  bottom: -30px;
  z-index: 10;
}

.flower2 {
  width: 459px;
  height: 707px;
  position: absolute;
  left: 0;
  bottom: -40px;
}

.mountain1 {
  position: absolute;
  top: 1900px;
  right: 111px;
  width: 780px;
  height: 281px;
}

.mountain2 {
  position: absolute;
  top: 2900px;
  left: 0;
  width: 780px;
  height: 281px;
}

.mountain3 {
  position: absolute;
  top: 4500px;
  right: 0;
  width: 780px;
  height: 281px;
}

.mountain4 {
  position: absolute;
  bottom: 1500px;
  left: 0;
  width: 800px;
  height: 338px;
}

.mountain5 {
  position: absolute;
  bottom: 0;
  left: 127px;
  width: 1165px;
  height: 405px;
}


.feature1,
.feature2,
.feature3,
.feature4,
.box4feature,
.box5feature,
.box6feature {
  height: 100vh;
  padding: 0 170px;
  transition: transform 1s ease, opacity 1s ease;
  will-change: transform;
}

.box4feature,
.box5feature,
.box6feature {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 100;
}



.feature {
  z-index: 100;

  .title {
    font-weight: 500;
    font-size: 74px;
    color: #444444;
    margin-bottom: 60px;
  }

  .content {
    font-weight: 400;
    font-size: 32px;
    color: #444444;
  }
}

.feature1 {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/briefIntroduction/introduce.png') no-repeat;
  background-size: 100% 100%;

  .willow2 {
    width: 424px;
    height: 607px;
    background: url('@/assets/images/briefIntroduction/willow2.png') no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: 316px;
    left: 0;
  }

  .college {
    width: 200px;
    height: 522px;
    background: url('@/assets/images/briefIntroduction/college.png') no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: 140px;
    right: 400px;
    font-weight: 400;
    font-size: 68px;
    color: #600B02;
    font-family: SJxingkai-C;
    padding-top: 70px;
    display: flex;
    justify-content: center;

    .text {
      writing-mode: vertical-rl;
    }
  }
}

.feature2 {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .people {
    width: 1095px;
    height: 815px;
  }

  .form {
    display: flex;
    align-items: center;

    .content {
      writing-mode: vertical-rl;
      height: 431px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      font-size: 32px;
      color: #121212;
      line-height: 60px;
      opacity: 0.8;
      line-height: 2;
    }

    .title {
      width: 106px;
      height: 375px;
      background: url('@/assets/images/briefIntroduction/feature.png') no-repeat;
      background-size: 100% 100%;
      font-family: SJxingkai-C;
      font-weight: 400;
      font-size: 48px;
      color: #EBEBEB;
      margin-left: 42px;

      .text {
        writing-mode: vertical-rl;
        margin-top: 20px;
      }
    }
  }

}

.feature3 {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .people {
    width: 819px;
    height: 826px;
  }

  .form {
    display: flex;
    align-items: center;

    .content {
      writing-mode: vertical-rl;
      height: 431px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      font-size: 32px;
      color: #121212;
      line-height: 60px;
      opacity: 0.8;
    }

    .title {
      width: 106px;
      height: 375px;
      background: url('@/assets/images/briefIntroduction/feature.png') no-repeat;
      background-size: 100% 100%;
      font-family: SJxingkai-C;
      font-weight: 400;
      font-size: 48px;
      color: #EBEBEB;
      margin-left: 42px;

      .text {
        writing-mode: vertical-rl;
        margin-top: 20px;
      }
    }
  }
}

.feature4 {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .img {
    width: 1580px;
    height: 788px;
  }
}


.feature6 {
  width: 100%;
  display: flex;
  justify-content: flex-start;

  .img {
    width: 815px;
    height: 527px;
  }
}

.feature8 {
  display: flex;
  justify-content: flex-end;
  width: 100%;

  .img {
    width: 828px;
    height: 524px;
  }
}

.box4feature {
  width: 100%;
  height: 100vh;
  position: relative;
}

.box5feature {
  width: 100%;
  height: 100vh;
  position: relative;
}

.box6feature {
  width: 100%;
  height: 100vh;
}
</style>