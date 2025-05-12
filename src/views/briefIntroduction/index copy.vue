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

let collegeFeatures = ref<string[]>([])
let collegeVision = ref<string[]>([])
const IntroData = ref([{
  title: '学院特色',
  content: '中国经济学教育的旗舰、优秀经济学人才的摇篮。新中国理论经济学的重要奠基者与开拓者。终于哦特色社会主义经济思想的引领者。中国经济学研究的理论重镇。'
},
{
  title: '学院愿景',
  content: '立足中国真实创新中国理论培养中国人才推动中国发展。'
},
]) as any
const processIntroData = () => {
  const slicedString = (originalString: any) => {
    const result = [];
    for (let i = 0; i < originalString.length; i += 11) {
      result.push(originalString.slice(i, i + 11));
    }
    return result;
  };
  collegeFeatures.value = slicedString(IntroData.value[0].content);
  collegeVision.value = slicedString(IntroData.value[1].content);
};

processIntroData();

// 注册 ScrollMagic 和 GSAP 插件
ScrollMagicPluginGsap(ScrollMagic, gsap, TimelineMax);
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

onMounted(() => {
  // 获取数据
  // getIntroListData()

  // 花瓣动画
  // const petals = document.querySelectorAll('[class^="petal"]');
  // petals.forEach((petal) => {
  //   const clone = petal.cloneNode(true) as HTMLElement;
  //   petal.parentElement?.appendChild(clone);
  // });

  // const allPetals = document.querySelectorAll('[class^="petal"]');
  // allPetals.forEach((petal) => {
  //   const randomX = Math.random() * window.innerWidth;
  //   const randomY = -Math.random() * 500;
  //   (petal as HTMLElement).style.left = `${randomX}px`;
  //   (petal as HTMLElement).style.top = `${randomY}px`;

  //   // 增强花瓣动画效果
  //   anime({
  //     targets: petal,
  //     translateX: [
  //       { value: (Math.random() - 0.5) * 300, duration: 3000 },
  //       { value: (Math.random() - 0.5) * 500, duration: 3000 },
  //       { value: (Math.random() - 0.5) * 300, duration: 3000 }
  //     ],
  //     translateY: [
  //       { value: window.innerHeight * 0.5, duration: 3000 },
  //       { value: window.innerHeight + 500, duration: 3000 }
  //     ],
  //     rotate: [
  //       { value: Math.random() * 360, duration: 3000 },
  //       { value: Math.random() * 720, duration: 3000 }
  //     ],
  //     scale: [
  //       { value: Math.random() * 0.5 + 0.5, duration: 1500 },
  //       { value: Math.random() * 0.3 + 0.2, duration: 1500 }
  //     ],
  //     opacity: [
  //       { value: Math.random() * 0.5 + 0.5, duration: 1500 },
  //       { value: 0, duration: 1500 }
  //     ],
  //     duration: Math.random() * 6000 + 4000,
  //     delay: Math.random() * 2000,
  //     loop: true,
  //     easing: 'easeInOutSine',
  //     direction: 'alternate'
  //   });
  // });
  //=====================================
  // const petals = document.querySelectorAll('[class^="petal"]');
  // petals.forEach((petal) => {
  //   const clone = petal.cloneNode(true) as HTMLElement;
  //   petal.parentElement?.appendChild(clone);
  // });

  // const createPetalAnimation = (petal) => {
  //   const randomX = Math.random() * window.innerWidth;
  //   const randomY = -Math.random() * 500;
  //   (petal as HTMLElement).style.left = `${randomX}px`;
  //   (petal as HTMLElement).style.top = `${randomY}px`;

  //   // 花瓣飘动动画效果
  //   anime({
  //     targets: petal,
  //     translateX: [
  //       { value: (Math.random() - 0.5) * 300, duration: 3000 },
  //       { value: (Math.random() - 0.5) * 500, duration: 3000 },
  //       { value: (Math.random() - 0.5) * 300, duration: 3000 }
  //     ],
  //     translateY: [
  //       { value: window.innerHeight * 0.5, duration: 3000 },
  //       { value: window.innerHeight + 500, duration: 3000 }
  //     ],
  //     rotate: [
  //       { value: Math.random() * 360, duration: 3000 },
  //       { value: Math.random() * 720, duration: 3000 }
  //     ],
  //     scale: [
  //       { value: Math.random() * 0.5 + 0.5, duration: 1500 },
  //       { value: Math.random() * 0.3 + 0.2, duration: 1500 }
  //     ],
  //     opacity: [
  //       { value: Math.random() * 0.5 + 0.5, duration: 1500 },
  //       { value: 0, duration: 1500 }
  //     ],
  //     duration: Math.random() * 6000 + 4000,
  //     delay: Math.random() * 2000,
  //     easing: 'easeInOutSine',
  //     loop: true, // 让花瓣动画持续循环
  //     complete: () => {
  //       // 动画结束后重新生成花瓣，持续飘动
  //       createPetalAnimation(petal); // 重新生成动画
  //     }
  //   });
  // };

  // // 初始化并生成持续飘动的花瓣
  // const allPetals = document.querySelectorAll('[class^="petal"]');
  // allPetals.forEach((petal) => {
  //   createPetalAnimation(petal);
  // });
  //=====================================

  //  滚动动画合集
  const elements = ['.feature1', '.feature2', '.feature3', '.feature4', '.box4feature', '.box5feature', '.box6feature']

  let currentIndex = 0;
  let autoScrollInterval: NodeJS.Timeout | null = null;
  let isScrolling = false;

  // 内容动画函数
  const animateContent = (element: HTMLElement) => {
    // 文字动画
    const titles = element.querySelectorAll('.title');
    titles.forEach(title => {
      gsap.from(title, {
        duration: 1,
        opacity: 0,
        y: 50,
        ease: 'power3.out'
      });
    });

    // 内容文字动画
    const contents = element.querySelectorAll('.content');
    contents.forEach(content => {
      gsap.fromTo(
        content,
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2 },
        "-=0.8");
    });

    // 图片动画
    const images = element.querySelectorAll('img');
    images.forEach(img => {
      gsap.from(img,
        { duration: 1, opacity: 0, scale: 0.8, ease: 'power3.out' }
      );
    });
  };

  // 滚动到指定元素
  const scrollToElement = (index: number) => {
    if (isScrolling) return;
    isScrolling = true;
    const target = document.querySelector(elements[index]);
    if (target) {
      gsap.to(window, {
        duration: 1.2,
        scrollTo: {
          y: target,
          autoKill: false
        },
        ease: 'power2.inOut',
        onComplete: () => {
          isScrolling = false;
        }
      });
    }
  };

  // 处理滚轮事件
  const handleWheel = (e: WheelEvent) => {
    if (!autoScrollInterval) {  // 只在自动滚动停止时处理
      e.preventDefault();
      if (!isScrolling) {
        if (e.deltaY > 0 && currentIndex < elements.length - 1) {
          currentIndex++;
          scrollToElement(currentIndex);
        } else if (e.deltaY < 0 && currentIndex > 0) {
          currentIndex--;
          scrollToElement(currentIndex);
        }
      }
    }
  };

  // 自动滚动
  const startAutoScroll = () => {
    autoScrollInterval = setInterval(() => {
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

  // 添加事件监听
  const container = document.querySelector('.container');
  if (container) {
    container.addEventListener('mouseenter', () => {
      stopAutoScroll();
      container.addEventListener('wheel', handleWheel, { passive: false });
    });

    container.addEventListener('mouseleave', () => {
      container.removeEventListener('wheel', handleWheel);
      startAutoScroll();
    });
  }

  // 添加视差滚动效果
  const parallaxElements = ['.mountain1', '.mountain2', '.mountain3', '.mountain4'];
  parallaxElements.forEach((selector, index) => {
    gsap.to(selector, {
      scrollTrigger: {
        trigger: '.container',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1
      },
      y: (index + 1) * 150,
      ease: 'none'
    });
  });

  startAutoScroll();
})
</script>

<template>
  <div class="container">
    <img src="@/assets/images/briefIntroduction/aigei_com.gif" class="aigei">
    <div class="feature1">
      <div class="willow2"></div>
      <div class="college">
        <div class="text">学院介绍</div>
      </div>
    </div>
    <div class="feature2">
      <img src="@/assets/images/briefIntroduction/people.png" class="people"></img>
      <div class="form">
        <div class="content">
          <span v-for="(item) in collegeFeatures">{{ item }}</span>
        </div>
        <div class="title">
          <div class="text">学院特色</div>
        </div>
      </div>
      <img src="@/assets/images/briefIntroduction/mountain2.png" class="mountain1">
    </div>
    <div class="feature3">
      <div class="form">
        <div class="content">
          <span v-for="(item) in collegeVision">{{ item }}</span>
        </div>
        <div class="title">
          <div class="text">学院愿景</div>
        </div>
      </div>
      <img src="@/assets/images/briefIntroduction/vision.png" class="people"></img>
      <img src="@/assets/images/briefIntroduction/mountain2.png" class="mountain2">
      <img src="@/assets/images/briefIntroduction/willow1.png" class="mountain6">
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
      <img src="@/assets/images/briefIntroduction/mountain2.png" class="mountain3">
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
      <img src="@/assets/images/briefIntroduction/mountain2.png" class="mountain4">
    </div>
    <div class="box6feature">
      <div class="feature9 feature">
        <div class="title">大师云集 实力强悍</div>
        <div class="content">
          经济学院拥有目前国内最为完整和具有重大社会影响、老中青年龄结构合理的经济学专家团队，引领国内学术前沿，为党和国家的重大理论创新提供了有力的智力支持；形成了特点鲜明、结构完善的课程体系、教材体系和人才培养体系，牢牢地确立了国内最重要经济学人才培养基地的地位，在新时期为中央和各级政府机关、国际国内院校、全球顶尖企业输送了大批的优秀工作者。
        </div>
      </div>
      <img src="@/assets/images/briefIntroduction/mountain1.png" class="mountain5">
    </div>
    <!-- <img src="@/assets/images/briefIntroduction/petal1.png" class="petal">
    <img src="@/assets/images/briefIntroduction/petal2.png" class="petal">
    <img src="@/assets/images/briefIntroduction/petal5.png" class="petal">
    <img src="@/assets/images/briefIntroduction/petal7.png" class="petal">
    <img src="@/assets/images/briefIntroduction/petal3.png" class="petal">
    <img src="@/assets/images/briefIntroduction/petal6.png" class="petal">
    <img src="@/assets/images/briefIntroduction/petal4.png" class="petal">
    <img src="@/assets/images/briefIntroduction/petal8.png" class="petal"> -->
  </div>
</template>

<style scoped lang="scss">
body {
  -ms-overflow-style: none;
  scrollbar-width: none;
  margin: 0;
  line-height: inherit;
}

body::-webkit-scrollbar {
  display: none;
}

.container {
  width: 100%;
  height: 100%;
  letter-spacing: 2px;
  overflow: hidden;
  position: relative;

  .aigei {
    width: 1920px;
    height: 1080px;
    position: fixed;
    top: 0;
    left: 0;
  }
}



.willow3 {
  width: 436px;
  height: 604px;
  position: absolute;
  bottom: -440px;
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
  width: 780px;
  height: 281px;
  position: absolute;
  bottom: -20px;
  right: 0px;
}

.mountain2 {
  position: absolute;
  bottom: 40px;
  left: 0;
  width: 780px;
  height: 281px;
}

.mountain6 {
  position: absolute;
  bottom: 100px;
  left: 480px;
  width: 330px;
  height: 217px;
}

.mountain3 {
  position: absolute;
  top: 240px;
  right: 0;
  width: 780px;
  height: 281px;
}

.mountain4 {
  position: absolute;
  top: 120px;
  left: 90px;
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
  width: 100%;
  height: 100vh;
  padding: 0 170px;
  transition: transform 0.8s ease-out, opacity 0.8s ease-out;
  will-change: transform, opacity;
}

.box4feature,
.box5feature,
.box6feature {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 100;
  position: relative;
}



.feature {
  z-index: 100;

  .title {
    font-family: SourceHanSansCN-Medium;
    font-weight: 500;
    font-size: 74px;
    color: #444444;
    margin-bottom: 60px;
  }

  .content {
    font-family: SourceHanSansCN-Normal;
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
  position: relative;

  .people {
    width: 990px;
    height: 725px;
  }

  .form {
    display: flex;
    align-items: center;

    .content {
      writing-mode: vertical-rl;
      height: 431px;
      font-family: SourceHanSansCN-Normal;
      font-weight: 400;
      font-size: 32px;
      color: #121212;
      line-height: 50px;
      opacity: 0.8;

      span {
        padding: 10px 0;
        display: inline-block;
        border-right: 1px solid #B7070F;
      }
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
  justify-content: space-around;
  align-items: center;
  position: relative;

  .people {
    width: 780px;
    height: 826px;
  }

  .form {
    display: flex;
    align-items: center;

    .content {
      writing-mode: vertical-rl;
      height: 431px;
      font-family: SourceHanSansCN-Normal;
      font-weight: 400;
      font-size: 32px;
      color: #121212;
      line-height: 50px;
      opacity: 0.8;

      span {
        padding: 10px 0;
        display: inline-block;
        border-right: 1px solid #B7070F;
      }

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


.feature:hover {
  transform: translateY(-10px);
  transition: transform 0.3s ease;
}

img {
  transition: transform 0.3s ease, filter 0.3s ease;
}
</style>