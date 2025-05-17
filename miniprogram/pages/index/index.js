// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: '数村小程序导航', // Kept existing motto, can be removed if not used
    bannerImages: [
      '/images/banner_placeholder_1.jpg', // Replace with actual image paths
      '/images/banner_placeholder_2.jpg',
      '/images/banner_placeholder_3.jpg'
    ],
    jsbjTabs: [
      { 
        name: '智能助手', 
        text: '通过数字乡村建设，优化乡村要素组合，实现乡村要素的赋能，以信息流带动资金流、技术流、人才流、物资流，激活乡村各种要素，提高乡村经济社会运行的质量与效率。',
        image: '/images/jsbj_tab1_placeholder.jpg' // Replace with actual image
      },
      { 
        name: '赋能经济', 
        text: '从乡村实际的痛点出发，响应政策要求、结合地域实际，打造可用、实用且适用的数字乡村信息化管理平台。平台既能落地为乡村基层服务，也能向上汇聚进入智慧城市或其它城市整体管理的网络当中。',
        image: '/images/jsbj_tab2_placeholder.jpg' // Replace with actual image
      },
      { 
        name: '实用推广', 
        text: '建设完善一张图乡村综合治理体系、乡村看板综合管理体系、乡村民生服务体系，并通过五大振兴和三条体系的应用建设，实现数字乡村建设的五个目标: 数据可用、治理可靠、决策可依、农户可达成果可期。',
        image: '/images/jsbj_tab3_placeholder.jpg' // Replace with actual image
      }
    ],
    currentJsBjTab: 0,
    hxgnTabs: [
      {
        name: '智慧经济',
        text: '智慧经济新时代，通过大数据分析和人工智能技术，构建创新农业生态系统，释放乡村发展潜能，实现经济高质量增长。',
        image: '/images/hxgn_tab1_placeholder.jpg' // Replace with actual image
      },
      {
        name: '智慧产业',
        text: '整合当地产业链资源，提供农产品供需信息共享平台，减少第三方赚差价的可能，保持农产品价格的稳定性。',
        image: '/images/hxgn_tab2_placeholder.jpg' // Replace with actual image
      },
      {
        name: '智慧收入',
        text: '智慧收入服务体系，为农民提供多元化增收渠道，包括农产品电商销售、特色手工艺品交易和金融普惠服务。',
        image: '/images/hxgn_tab3_placeholder.jpg' // Replace with actual image
      },
      {
        name: '智慧助手',
        text: '智能化农村服务助手，提供农技指导、政策咨询、天气预报等服务，帮助农民解决生产生活中遇到的各种问题。',
        image: '/images/hxgn_tab4_placeholder.jpg' // Replace with actual image
      }
    ],
    currentHxgnTab: 0,
  },
  onLoad() {
    // console.log('Index page loaded');
    // You might want to fetch dynamic data here in a real application
  },

  switchJsBjTab: function(e) {
    const index = e.currentTarget.dataset.index;
    if (this.data.currentJsBjTab !== index) {
      this.setData({
        currentJsBjTab: index
      });
    }
  },

  switchHxgnTab: function(e) {
    const index = e.currentTarget.dataset.index;
    if (this.data.currentHxgnTab !== index) {
      this.setData({
        currentHxgnTab: index
      });
    }
  }
})
