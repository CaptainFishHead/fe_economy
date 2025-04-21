// top部导航
const TOP_NAVIGATION = [
  {
    url: '@/assets/images/logo/logo.png',
    title: 'logo',
    description: 'logo'
  },
  {
    url: '@/assets/images/home/backdrop.png',
    title: '经济学院',
    description: '中国人民大学标志性建筑'
  }
]

// 校园图片
const CAMPUS_IMAGES = [
  {
    url: 'https://www.ruc.edu.cn/images/content/2023-09/20230911093747873137.jpg',
    title: '明德主楼',
    description: '中国人民大学标志性建筑'
  },
  {
    url: 'https://www.ruc.edu.cn/images/content/2023-09/20230911093747873137.jpg',
    title: '图书馆',
    description: '中国人民大学图书馆'
  },
  {
    url: 'https://www.ruc.edu.cn/images/content/2023-09/20230911093747873137.jpg',
    title: '世纪馆',
    description: '中国人民大学世纪馆'
  }
]

// 活动图片
const ACTIVITY_IMAGES = [
  {
    url: 'https://econ.ruc.edu.cn/images/content/2023-12/20231205143707389137.jpg',
    title: '经济论坛',
    description: '2023年度经济学术论坛'
  },
  {
    url: 'https://econ.ruc.edu.cn/images/content/2023-12/20231205143707389137.jpg',
    title: '学术讲座',
    description: '诺贝尔经济学奖得主讲座'
  },
  {
    url: 'https://econ.ruc.edu.cn/images/content/2023-12/20231205143707389137.jpg',
    title: '国际会议',
    description: '中国经济学年会'
  }
]

// 讲座图片
const LECTURE_IMAGES = [
  {
    url: 'https://econ.ruc.edu.cn/images/content/2023-11/20231121093747873137.jpg',
    title: '名师讲堂',
    description: '经济学前沿讲座系列'
  },
  {
    url: 'https://econ.ruc.edu.cn/images/content/2023-11/20231121093747873137.jpg',
    title: '学术沙龙',
    description: '青年经济学者论坛'
  },
  {
    url: 'https://econ.ruc.edu.cn/images/content/2023-11/20231121093747873137.jpg',
    title: '研究生论坛',
    description: '博士生学术研讨会'
  }
]

// 新闻图片
const NEWS_IMAGES = [
  {
    url: 'https://econ.ruc.edu.cn/images/content/2023-12/20231201093747873137.jpg',
    title: '学院新闻',
    description: '经济学院重要新闻'
  },
  {
    url: 'https://econ.ruc.edu.cn/images/content/2023-12/20231201093747873137.jpg',
    title: '通知公告',
    description: '学院通知与公告'
  }
]

export const GALLERY_IMAGES = {
  topNavigation: TOP_NAVIGATION,
  campus: CAMPUS_IMAGES,
  activity: ACTIVITY_IMAGES,
  lecture: LECTURE_IMAGES,
  news: NEWS_IMAGES
}

// 定义图片类型
export interface GalleryImage {
  url: string
  title: string
  description: string
}

// 导出图片分类
export type GalleryCategory = 'top' | 'campus' | 'activity' | 'lecture' | 'news'
