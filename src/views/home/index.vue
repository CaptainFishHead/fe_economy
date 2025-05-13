<template>
  <div class="home">
    <div class="loading" v-if="homeLoading">
      <img src="@/assets/images/home/flower1.png" class="flower1">
      <img src="@/assets/images/home/flower2.png" class="flower2">
      <div class="loading-box">
        <div class="loading-question">实事求是</div>
        <div class="loading-aperture" @click="handleLoading">
          <img src="@/assets/images/home/aperture.png" class="aperture">
          <img src="@/assets/images/home/arrow.png" class="arrow">
        </div>
        <img class="loading-title" src="@/assets/images/home/loading_title.png">
        <div class="loading-introduce">
          <span v-for="(item) in collegeFeatures">{{ item }}</span>
        </div>
      </div>
    </div>
    <!-- 顶部部分 -->
    <section class="hero" v-if="!homeLoading">
      <div class="hero-logo" v-motion-slide-visible-once-bottom></div>
      <div class="hero-title" v-motion-slide-visible-once-bottom>
        <div class="hero-title-top">经承芳华八十载 济济群英四海至</div>
        <div class="hero-title-bottom" ref="typeit"></div>
      </div>
      <div class="hero-buckle" v-motion-slide-visible-once-bottom>
        <div class="hero-buckle-item" ref="box1" @click="toBriefIntro">
          <img src="@/assets/images/home/briefintro_icon.png" />
          <div class="text">简介</div>
        </div>
        <div class="hero-buckle-item" ref="box2" @click="toTimeline">
          <img src="@/assets/images/home/timeline_icon.png" />
          <div class="text">时间轴</div>
        </div>
        <div class="hero-buckle-item" ref="box3" @click="toTrainingWall">
          <img src="@/assets/images/home/trainwall_icon.png" />
          <div class="text">培训墙</div>
        </div>
        <div class="hero-buckle-item" ref="box4" @click="platform">
          <img src="@/assets/images/home/plat_icon.png" />
          <div class="text">平台</div>
        </div>
      </div>
      <img src="@/assets/images/home/bird_1.png" class="bird1" />
      <img src="@/assets/images/home/bird_2.png" class="bird2" />
      <img src="@/assets/images/home/star_2.png" class="star star1" />
      <img src="@/assets/images/home/star_4.png" class="star star2" />
      <img src="@/assets/images/home/star_2.png" class="star star3" />
      <img src="@/assets/images/home/star_3.png" class="star4" ref="star4" />
      <img src="@/assets/images/home/star_5.png" class="star star5" />
      <img src="@/assets/images/home/star_6.png" class="star star6" />
      <img src="@/assets/images/home/star_7.png" class="star star7" />
      <img src="@/assets/images/home/star_8.png" class="star star8" />

      <div class="hero-subtitle" v-motion-slide-visible-once-bottom>
        <span>实</span>
        <span>事</span>
        <span>求</span>
        <span>是</span>
      </div>
      <div class="hero-overlay"></div>
      <div class="hero-silk"></div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { gsap } from 'gsap'
import TypeIt from 'typeit'
import { useRouter } from 'vue-router'
const collegeFeatures = ref<string[]>([])

const slicedString = (originalString: any) => {
  const result = [];
  for (let i = 0; i < originalString.length; i += 6) {
    result.push(originalString.slice(i, i + 6));
  }
  return result;
};
collegeFeatures.value = slicedString('立足中国真实创新中国理论培养中国人才推动中国发展');
let box1 = ref(null)
let box2 = ref(null)
let box3 = ref(null)
let box4 = ref(null)
let star4 = ref(null)
const typeit = ref(null)
const router = useRouter()
function toBriefIntro() {
  router.push({ path: '/briefIntroduction' })
}

function toTimeline() {
  router.push({ path: '/timeline' })
}

function toTrainingWall() {
  router.push({ path: '/trainingWall' })
}
function platform() {
  router.push({ path: '/platform' })
}


const homeLoading = ref(localStorage.getItem('hasVisited') !== 'true')

const handleLoading = () => {
  homeLoading.value = false
  localStorage.setItem('hasVisited', 'true') // 用户已进入，后续不再显示 loading
}

onMounted(() => {
  new TypeIt(typeit.value as any, {
    strings:
      '中国人民大学经济学院是新中国经济学科重要奠基者与开拓者，理论经济学在教育部学科评估中使用连续四次全国第一，为国家“双一流”建设学科。我们立足中国大地，致力于构建和创新中国经济学体系，推动中国经济社会发展。八十几年来，我们培养了一批又一批有知识、有理想、有情怀、有担当的经济学理论人才和现代化强国建设人才。',
    speed: 100, // 打字速度（单位：毫秒）
    loop: false, // 是否循环
    lifeLike: true,
    waitUntilVisible: true,
    breakLines: false // 是否允许换行
  }).go() // 启动动画

  gsap.to('.bird2', {
    x: 800,
    y: -320,
    duration: 14, // 持续时间
    repeat: -1, // 如果是 -1，则无限循环
    yoyo: false, // 如果是 true，则来回循环
    delay: 2, // 延迟时间, 1s之后开始执行动画
    ease: 'quad.out',
    opacity: 0 // 透明度
  })
  gsap.to('.bird1', {
    x: 300,
    y: -160,
    duration: 12, // 持续时间
    repeat: -1, // 如果是 -1，则无限循环
    yoyo: false, // 如果是 true，则来回循环
    delay: 2, // 延迟时间, 1s之后开始执行动画
    opacity: 0, // 透明度
    ease: 'quint.inOut'
  })
  gsap.to('.hero-subtitle', {
    rotationY: 360,
    duration: 2, // 动画持续时间，单位为秒
    ease: 'power2.inOut', // 缓动函数
    // repeat: -1, // 无限循环
    yoyo: true // 来回播放动画
  })
  const star = document.querySelectorAll('.star')

  star.forEach(element => {
    const randomScale = Math.random() * 2 + 0.5
    const randomDuration = Math.random() * 2 + 1
    // 创建动画
    gsap.to(element, {
      scale: randomScale, // 缩放
      opacity: Math.random() > 0.5 ? 0 : 1, // 透明度
      duration: randomDuration, // 动画持续时间
      repeat: -1, // 无限重复
      yoyo: true, // 动画来回播放
      ease: 'power1.inOut' // 缓动函数
    })
  })
  // 创建动画
  gsap.to(star4.value, {
    duration: 10,
    rotation: 360,
    scale: 1.5,
    repeat: -1,
    yoyo: true,
    ease: 'power2.inOut'
  })

  const element = document.querySelectorAll('.hero-buckle-item')
  const container = document.querySelector('.home')
  const containerHeight = container?.offsetHeight
  const timeline = gsap.timeline()
  element.forEach((element, index) => {
    gsap.set(element, { y: -containerHeight })
    timeline.to(
      element,
      {
        y: 0,
        duration: 2,
        ease: 'power3.out',
        delay: index * 0.5
      },
      0
    )
  })
  // 上下缓慢弹动效果
  const bounceDistance = -20 // 弹动的距离
  const bounceDuration = 1.5 // 一次弹动的持续时间
  const bounceEase = 'power1.inOut' // 弹动的缓动函数

  element.forEach(element => {
    timeline.to(
      element,
      {
        y: bounceDistance,
        duration: bounceDuration,
        ease: bounceEase,
        yoyo: true, // 动画反向播放，实现上下弹动
        repeat: -1 // 无限重复弹动
      },
      '>' // 表示在上一个动画结束后立即开始
    )
  })
})
</script>

<style lang="scss" scoped>
@import '@/assets/fonts/fonts.css';

.loading {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/home/loading_bj.png') no-repeat;
  background-size: 100% 100%;
  z-index: 1000;
  position: absolute;
  top: 0;
  left: 0;

  .flower1 {
    width: 259px;
    height: 387px;
    position: absolute;
    bottom: 111px;
    right: 0;
  }

  .flower2 {
    width: 350px;
    height: 526px;
    position: absolute;
    left: 0;
    bottom: 0;
  }

  &-box {
    position: absolute;
    top: 54px;
    right: 20%;
  }

  &-question {
    width: 50px;
    height: 100px;
    background: url('@/assets/images/home/question2.png') no-repeat;
    background-size: 100% 100%;
    position: absolute;
    left: -50px;
    top: 200px;
    font-family: SourceHanSerifSC-Medium;
    font-weight: 500;
    font-size: 19px;
    color: #FFFFFF;
    writing-mode: vertical-rl;
    text-align: center;
    line-height: 50px;
  }

  .loading-aperture {
    width: 60px;
    height: 60px;
    position: absolute;
    bottom: 280px;
    right: 30px;
    cursor: pointer;


    .arrow {
      width: 20px;
      height: 20px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .aperture {
      width: 100%;
      height: 100%;
      animation: rotate 3s linear infinite;
    }

    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }
  }

  &-title {
    width: 256px;
    height: 624px;
  }

  &-introduce {
    writing-mode: vertical-rl;
    // height: 431px;
    font-family: SourceHanSansCN-Normal;
    font-weight: 400;
    font-size: 32px;
    color: #fff;
    line-height: 60px;
    opacity: 0.8;
    display: flex;
    flex-direction: column;

    span {
      padding: 16px 0;
      display: inline-block;
      border-right: 2px solid #fff;
    }
  }
}

.hero {
  min-height: 100vh;
  background: url('@/assets/images/home/backdrop.png');
  background-size: 100% 100%;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;


  &-logo {
    width: 284px;
    height: 66px;
    background: url('@/assets/images/logo/logo.png');
    background-size: 100% 100%;
    position: absolute;
    top: 58px;
    left: 97px;
  }

  &-title {

    background: url('@/assets/images/home/card.png');
    background-size: 100% 100%;
    width: 457px;
    height: 489px;
    border-radius: 25px;
    padding: 30px 38px 0 38px;
    box-sizing: border-box;
    position: absolute;
    top: 224px;
    left: 182px;

    &-top {
      // font-family: SJchunlian;
      font-family: 'SJchunlian-Regular', sans-serif;
      font-weight: 400;
      font-size: 47px;
      color: #ffffff;
      text-align: center;
    }

    &-bottom {
      font-family: Source Han Sans CN;
      font-weight: 400;
      font-size: 18px;
      color: #ffffff;
      line-height: 36px;
    }
  }

  &-buckle {
    width: 100%;
    height: 100%;
    position: relative;
    top: 0;
    left: 0;

    &-item {
      width: 227px;
      position: absolute;
      top: 0;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: flex-end;
      padding-bottom: 60px;
      background-size: 100% 100%;
      box-sizing: border-box;

      .text {
        font-family: Source Han Sans CN;
        font-weight: 400;
        font-size: 36px;
        color: #ffffff;
      }

      img {
        height: 47px;
        width: auto;
      }

      &:nth-child(1) {
        height: 724px;
        background: url('@/assets/images/home/briefintro.png');
        background-size: 100% 100%;
        left: 726px;
      }

      &:nth-child(2) {
        width: 227px;
        height: 580px;
        background: url('@/assets/images/home/timeline.png');
        background-size: 100% 100%;
        left: 970px;
      }

      &:nth-child(3) {
        width: 227px;
        height: 673px;
        background: url('@/assets/images/home/trainwall.png');
        background-size: 100% 100%;
        left: 1272px;
      }

      &:nth-child(4) {
        width: 227px;
        height: 733px;
        background: url('@/assets/images/home/plat.png');
        background-size: 100% 100%;
        left: 1530px;
      }
    }
  }

  &-subtitle {

    box-sizing: border-box;
    width: 154px;
    height: 294px;
    padding: 26px 32px;
    background: url('@/assets/images/home/question.png');
    background-size: 100% 100%;
    color: #ffffff;
    font-family: 'SJchunlian-Regular', sans-serif;
    font-weight: 400;
    font-size: 60px;
    line-height: 17px;
    position: absolute;
    top: 109px;
    right: 87px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  .bird1 {
    z-index: 100;
    width: 136px;
    height: 129px;
    position: absolute;
    top: 84px;
    right: 542px;
  }

  .bird2 {
    z-index: 100;
    width: 73px;
    height: 69px;
    position: absolute;
    top: 401px;
    left: 767px;
  }

  .star {
    z-index: 100;
    position: absolute;
  }

  .star1 {
    bottom: 0;
    right: 17px;
  }

  .star2 {
    top: 30px;
    right: 40px;
  }

  .star3 {
    top: 80px;
    right: 280px;
  }

  .star4 {
    width: 184px;
    height: 177px;
    top: -20px;
    left: -80px;
  }

  .star5 {
    bottom: 100px;
    left: 332px;
  }

  .star6 {
    bottom: 168px;
    left: 496px;
  }

  .star7 {
    bottom: 300px;
    left: 180px;
  }

  .star8 {
    bottom: 30px;
    left: 92px;
  }

  &-silk {
    width: 100%;
    height: 171px;
    background: url('@/assets/images/home/red_silk.png');
    background-size: 100% 100%;
    position: absolute;
    bottom: 0;
  }
}

.home {
  -webkit-user-select: none;
  /* Safari */
  -moz-user-select: none;
  /* Firefox */
  -ms-user-select: none;
  /* IE10+/Edge */
  user-select: none;
  position: relative;
}
</style>
