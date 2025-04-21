<script setup lang="ts">
import { getIntroList } from '@/api/home/index'
import { onMounted, ref } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap, TimelineMax } from 'gsap'
import ScrollMagic from 'scrollmagic';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';

let IntroList = ref([] as any[])
function getIntroListData() {
  getIntroList().then((res: any) => {
    console.log(res);

    if (res.code === 200) {
      IntroList = res.data
    }
  })
}

// 注册 ScrollMagic 和 GSAP 插件
ScrollMagicPluginGsap(ScrollMagic, gsap, TimelineMax);


onMounted(() => {
  // getIntroListData()


  // // 初始化控制器
  // const controller = new ScrollMagic.Controller();

  // // 定义动画
  // const wipeAnimation = new TimelineMax()
  //   .fromTo('.feature1', 1, { x: '-100%' }, { x: '0%', ease: 'none' }) // 从左到右
  //   .fromTo('.feature2', 1, { x: '-100%' }, { x: '0%', ease: 'none' }) // 从左到右
  //   .fromTo('.feature3', 1, { y: '-100%' }, { y: '0%', ease: 'none' }) // 从上到下
  //   .fromTo('.box4feature', 1, { y: '-100%' }, { y: '0%', ease: 'none' }) // 从下到上
  //   .fromTo('.box5feature', 1, { y: '-100%' }, { y: '0%', ease: 'none' }); // 从下到上

  // // 创建场景以固定和链接动画
  // const scene = new ScrollMagic.Scene({
  //   triggerElement: '.container', // 触发元素
  //   triggerHook: 'onEnter', // 触发钩子
  //   duration: '300%' // 动画持续时间
  // })
  //   .setPin('.container'); // 锚点元素
  // // 类型断言解决类型问题
  // (scene as any).setTween(wipeAnimation) // 设置动画
  //   .addIndicators() // 添加指标（需要插件）
  //   .addTo(controller); // 将场景添加到控制器



  // gsap.registerPlugin(ScrollTrigger)
  // gsap.from(".feature2", {
  //   scrollTrigger: ".feature2",
  //   duration: 2,
  //   scale: 0.3
  // });
  // gsap.from(".feature3", {
  //   scrollTrigger: ".feature3",
  //   duration: 2,
  //   scale: 0.3
  // });
  // gsap.from(".box4feature", {
  //   scrollTrigger: ".box4feature",
  //   duration: 4,
  //   scale: 0.3
  // });
  // gsap.from(".box5feature", {
  //   scrollTrigger: ".box5feature",
  //   duration: 5, // 滚动时间
  //   scale: 0.3 // 缩放比例
  // });
  // gsap.from(".box6feature", {
  //   scrollTrigger: ".box6feature",
  //   duration: 5, // 滚动时间
  //   scale: 0.3 // 缩放比例
  // });
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
        <div class="content">中国经济学教育的旗舰、优秀经济学人才的摇篮。新中国理论经济学的重要奠基者与开拓者。终于哦特色社会主义经济思想的引领者。中国经济学研究的理论重镇。</div>
        <div class="title">
          <div class="text">学院特色</div>
        </div>
      </div>
      <img src="@/assets/images/briefIntroduction/vision.png" class="people"></img>
    </div>

    <div class="box4feature">
      <div class="feature4">
        <img src="@/assets/images/briefIntroduction/rain.png" class="img">
      </div>

      <div class="feature5 feature">
        <div class="title">教育旗舰 理论重镇</div>
        <div class="content">
          中国人民大学经济学院于1998年正式组建，其前身最早可以溯源至1939年陕北公学设立的政治经济学研究室，后历经华北大学、华北联合大学演进，是新中国经济学科的重要奠基者和开拓者。作为中国经济学教育与研究的理论重镇，经济学院承担着培养高层次杰出经济学人才，构建中国气派、中国风格的经济学教育高地，为国家经济发展建言献策的伟大使命。
        </div>
      </div>
    </div>

    <div class="box5feature">
      <div class="feature6">
        <img src="@/assets/images/briefIntroduction/economics.png" class="img">
      </div>

      <div class="feature7 feature">
        <div class="content">
          经济学院设有经济学、国际经济与贸易、数字经济3个本科专业，12个硕士点，10个博士点，“经济学—数学”双学位实验班、“中国经济”全英文硕士班、理论经济学硕博连读实验班等8个创新人才培养平台；拥有国家重点一级学科“理论经济学”，国家重点二级学科“政治经济学”、“西方经济学”，北京市重点二级学科“世界经济学”；是国家经济学基础人才培养基地、教育部人文社会科学重点研究基地、国家“统筹支持一流大学和一流学科建设”项目、国家“2011”中国特色社会主义经济建设协同创新中心协同单位和全国中国特色社会主义政治经济学研究中心。在2004年、2008年、2012年和2016年四轮国家重点一级学科评估中，理论经济学名列全国第一。2017年，在经国务院批准下发的《关于公布世界一流大学和一流学科建设高校及建设学科名单的通知》中，理论经济学入选A类一流大学建设名单。
        </div>
      </div>
    </div>

    <div class="box6feature">
      <div class="feature8">
        <img src="@/assets/images/briefIntroduction/schoolBadge.png" class="img">
      </div>

      <div class="feature9 feature">
        <div class="title">大师云集 实力强悍</div>
        <div class="content">
          经济学院拥有目前国内最为完整和具有重大社会影响、老中青年龄结构合理的经济学专家团队，引领国内学术前沿，为党和国家的重大理论创新提供了有力的智力支持；形成了特点鲜明、结构完善的课程体系、教材体系和人才培养体系，牢牢地确立了国内最重要经济学人才培养基地的地位，在新时期为中央和各级政府机关、国际国内院校、全球顶尖企业输送了大批的优秀工作者。
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  padding-bottom: 126px;
}

.feature {
  margin: 0 170px;

  .title {
    font-weight: 500;
    font-size: 74px;
    color: #444444;
    margin-bottom: 70px;
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
  align-items: center;
  justify-content: space-between;
  margin: 0 170px;
  height: 100vh;

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
  align-items: center;
  justify-content: space-between;
  margin: 0 170px;
  height: 100vh;

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
  padding: 0 170px;
  display: flex;
  justify-content: center;

  .img {
    width: 1539px;
    height: 688px;
  }
}

.feature5 {
  margin-bottom: 20px;
}

.feature6 {
  padding: 0 170px;

  .img {
    display: block;
    width: 1035px;
    height: 667px;
  }
}

.feature7 {
  margin-top: 30px;
  margin-bottom: 60px;
}

.feature8 {
  height: 50vh;
  padding: 0 170px;
  display: flex;
  justify-content: flex-end;

  &-img {
    display: block;
    width: 1008px;
    height: 694px;
  }
}

.feature9 {
  height: 50vh;
}

.box4feature {
  width: 100%;
  height: 100vh;
}

.box5feature {
  width: 100%;
  height: 100vh;
}

.box6feature {
  width: 100%;
  height: 100vh;
}
</style>