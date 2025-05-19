// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    bannerImages: [
      '/images/a3.jpg'  // 使用HTML中的实际图片
    ],
    isVideoAvailable: true, // 添加视频可用性状态
    imageTimeStamp: new Date().getTime(), // 添加时间戳用于图片缓存刷新
    jsbjTabs: [
      { 
        name: '智能助手', 
        text: '通过4大模块，"智慧经济""智慧产业""智慧收入""智慧助手"，助力乡村振兴，实现产业兴旺，治理有效，生活富裕，乡风文明，经济发展。',
        image: '/images/addnewPic11.png?v=20240512'  // HTML中的实际图片路径
      },
      { 
        name: '赋能经济', 
        text: '通过数字乡村建设，优化乡村要素组合，实现乡村要素的赋能，以信息流带动资金流、技术流、人才流、物资流，激活乡村各种要素，提高乡村经济社会运行的质量与效率。',
        image: '/images/addnewPic2.jpg'  // HTML中的实际图片路径
      },
      { 
        name: '实用推广', 
        text: '从乡村实际的痛点出发，响应政策要求、结合地域实际，打造可用、实用且适用的数字乡村信息化管理平台。平台既能落地为乡村基层服务，也能向上汇聚进入智慧城市或其它城市整体管理的网络当中。',
        image: '/images/addnewPic3.jpg'  // HTML中的实际图片路径
      },
      {
        name: '完善体系',
        text: '建设完善一张图乡村综合治理体系、乡村看板综合管理体系、乡村民生服务体系，并通过五大振兴和三条体系的应用建设，实现数字乡村建设的五个目标: 数据可用、治理可靠、决策可依、农户可达成果可期。',
        image: '/images/addnewPic4.jpg'  // HTML中的实际图片路径
      }
    ],
    currentJsBjTab: 0,
    hxgnTabs: [
      {
        name: '智慧经济',
        icon: '/images/ta_177.png',  // HTML中的实际图标
        text: '智慧经济新时代，通过大数据分析和人工智能技术，构建创新农业生态系统，释放乡村发展潜能，实现经济高质量增长。',
        image: '/images/ta_198.png'  // HTML中的实际图片
      },
      {
        name: '智慧产业',
        icon: '/images/ta_178.png',  // HTML中的实际图标
        text: '整合当地产业链资源，提供农产品供需信息共享平台，减少第三方赚差价的可能，保持农产品价格的稳定性。',
        image: '/images/ta_199.png'  // HTML中的实际图片
      },
      {
        name: '智慧收入',
        icon: '/images/ta_179.png',  // HTML中的实际图标
        text: '智慧收入服务体系，为农民提供多元化增收渠道，包括农产品电商销售、特色手工艺品交易和金融普惠服务。',
        image: '/images/ta_200.png'  // HTML中的实际图片
      },
      {
        name: '智慧助手',
        icon: '/images/ta_180.png',  // HTML中的实际图标
        text: '智能化农村服务助手，提供农技指导、政策咨询、天气预报等服务，帮助农民解决生产生活中遇到的各种问题。',
        image: '/images/addnewss7.jpg'  // HTML中的实际图片
      },
      {
        name: '数据分析',
        icon: '/images/ta_181.png',  // HTML中的实际图标
        text: '基于大数据的农村发展分析平台，对农业生产、农民收入、农村经济等多维数据进行深度挖掘，为政府决策和农民生产提供数据支持。',
        image: '/images/addnewss8.jpg'  // HTML中的实际图片
      }
    ],
    currentHxgnTab: 0,
    deviceTabs: [
      {
        name: '电脑端',
        image: '/images/addnewPic5.png',  // HTML中的实际图片
        features: [
          {title: '多级角色权限', desc: '涵盖县乡村三级治理主体各级领导干部和党员群众,高度锲合中国乡村治理现状。'},
          {title: '多种工作台', desc: '不同角色不同权限,满足数字社会高效运行的必备条件,使社会运行效率大大提高!'},
          {title: '丰富功能栏目', desc: '最大程度兼容自有服务与社会服务,充分激活社会参与度,全面覆盖乡村振兴的方方面面。'}
        ]
      },
      {
        name: '大数据',
        image: '/images/a_781.png',  // HTML中的实际图片
        features: [
          {title: '多级角色权限', desc: '涵盖县乡村三级治理主体各级领导干部和党员群众,高度锲合中国乡村治理现状。'},
          {title: '多种工作台', desc: '不同角色不同权限,满足数字社会高效运行的必备条件,使社会运行效率大大提高!'},
          {title: '丰富功能栏目', desc: '最大程度兼容自有服务与社会服务,充分激活社会参与度,全面覆盖乡村振兴的方方面面。'}
        ]
      },
      {
        name: '手机端',
        image: '/images/addnewPic6.png',  // HTML中的实际图片
        features: [
          {title: '多级角色权限', desc: '涵盖县乡村三级治理主体各级领导干部和党员群众,高度锲合中国乡村治理现状。'},
          {title: '多种工作台', desc: '不同角色不同权限,满足数字社会高效运行的必备条件,使社会运行效率大大提高!'},
          {title: '丰富功能栏目', desc: '最大程度兼容自有服务与社会服务,充分激活社会参与度,全面覆盖乡村振兴的方方面面。'}
        ]
      },
      {
        name: '触摸屏',
        image: '/images/a_79.png',  // HTML中的实际图片
        features: [
          {title: '多级角色权限', desc: '涵盖县乡村三级治理主体各级领导干部和党员群众,高度锲合中国乡村治理现状。'},
          {title: '多种工作台', desc: '不同角色不同权限,满足数字社会高效运行的必备条件,使社会运行效率大大提高!'},
          {title: '丰富功能栏目', desc: '最大程度兼容自有服务与社会服务,充分激活社会参与度,全面覆盖乡村振兴的方方面面。'}
        ]
      }
    ],
    currentDeviceTab: 0,
    isMenuOpen: false
  },
  
  onLoad() {
    // 设置随机时间戳，用于刷新图片缓存
    this.setData({
      imageTimeStamp: new Date().getTime()
    });
    
    // 视频自动播放设置
    this.videoContext = wx.createVideoContext('myVideo');
    
    // 检查视频文件是否可用
    wx.getFileInfo({
      filePath: '/images/index.mp4',
      success: () => {
        // 文件存在，尝试播放
        setTimeout(() => {
          this.videoContext.play();
        }, 1000);
      },
      fail: () => {
        // 文件不存在，更新状态
        this.setData({
          isVideoAvailable: false
        });
        console.log('视频文件不存在，显示备用图片');
      }
    });
  },

  // 处理视频错误
  handleVideoError(e) {
    console.error('视频播放错误:', e.detail.errMsg);
    // 视频播放失败时，显示备用图片
    this.setData({
      isVideoAvailable: false
    });
  },

  // 滚动到内容区域
  scrollToContent() {
    wx.createSelectorQuery().select('#section-1').boundingClientRect(function(rect){
      wx.pageScrollTo({
        scrollTop: rect.top,
        duration: 300
      });
    }).exec();
  },

  // 切换技术背景标签
  switchJsBjTab(e) {
    const index = e.currentTarget.dataset.index;
    if (this.data.currentJsBjTab !== index) {
      this.setData({
        currentJsBjTab: index
      });
    }
  },

  // 切换核心功能标签
  switchHxgnTab(e) {
    const index = e.currentTarget.dataset.index;
    if (this.data.currentHxgnTab !== index) {
      this.setData({
        currentHxgnTab: index
      });
    }
  },
  
  // 切换多端展示标签
  switchDeviceTab(e) {
    const index = e.currentTarget.dataset.index;
    if (this.data.currentDeviceTab !== index) {
      this.setData({
        currentDeviceTab: index
      });
    }
  },
  
  // 切换菜单展开状态
  toggleMenu() {
    this.setData({
      isMenuOpen: !this.data.isMenuOpen
    });
  },
  
  // 关闭菜单
  closeMenu() {
    this.setData({
      isMenuOpen: false
    });
  }
})
