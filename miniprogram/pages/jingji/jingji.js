Page({
  data: {
    // 初始化数据
    dataStats: {
      coverage: 92,
      aiAdoption: 63,
      projects: 2500,
      efficiency: 38
    },
    // 表格数据
    tableData: [
      {region: '华东地区', villages: 12458, digitization: 87},
      {region: '华南地区', villages: 8762, digitization: 92},
      {region: '华中地区', villages: 10438, digitization: 83},
      {region: '华北地区', villages: 9845, digitization: 76},
      {region: '西南地区', villages: 6837, digitization: 71}
    ],
    // 产业结构数据
    industryData: [
      { name: '智慧种植', value: 32, color: 'legend-red' },
      { name: '智慧养殖', value: 26, color: 'legend-yellow' },
      { name: '农产品加工', value: 18, color: 'legend-blue' },
      { name: '农村电商', value: 14, color: 'legend-green' },
      { name: '乡村旅游', value: 10, color: 'legend-purple' }
    ],
    // GDP增长趋势数据
    gdpYears: [
      { 
        year: '2020', 
        traditional: 542, 
        smart: 125,
        traditionalPosition: 15,
        smartPosition: 5
      },
      { 
        year: '2021', 
        traditional: 568, 
        smart: 185,
        traditionalPosition: 25,
        smartPosition: 15
      },
      { 
        year: '2022', 
        traditional: 587, 
        smart: 278,
        traditionalPosition: 35,
        smartPosition: 25
      },
      { 
        year: '2023', 
        traditional: 603, 
        smart: 425,
        traditionalPosition: 45,
        smartPosition: 40
      },
      { 
        year: '2024', 
        traditional: 618, 
        smart: 612,
        traditionalPosition: 55,
        smartPosition: 60
      },
      { 
        year: '2025', 
        traditional: 634, 
        smart: 847,
        traditionalPosition: 65,
        smartPosition: 85
      }
    ],
    // 投资回报率数据
    roiData: [
      { tech: '智能灌溉系统', year1: 18, year3: 32 },
      { tech: '病虫害预警', year1: 22, year3: 45 },
      { tech: '无人机植保', year1: 15, year3: 37 },
      { tech: '智能温室', year1: 12, year3: 28 },
      { tech: '精准施肥', year1: 20, year3: 42 }
    ],
    // 数字技术普及率
    techAdoptionData: [
      { tech: '大数据', current: 85, target: 95 },
      { tech: 'AI应用', current: 65, target: 88 },
      { tech: '物联网', current: 78, target: 90 },
      { tech: '5G覆盖', current: 92, target: 98 },
      { tech: '区块链', current: 42, target: 75 },
      { tech: '数字孪生', current: 38, target: 72 }
    ],
    // AI赋能应用数据
    aiApps: [
      {
        title: '精准农业',
        desc: 'AI算法分析土壤、气候和作物生长数据，优化灌溉和施肥策略，提高作物产量达38%，减少资源浪费',
        stats: [{key: '效率提升', value: '42%'}, {key: '节水', value: '35%'}],
        icon: 'icon-leaf',
        bgClass: 'green-bg'
      },
      {
        title: '智能病虫害识别',
        desc: '结合计算机视觉和深度学习模型，实现对农作物病害的早期识别，准确率达96%，大幅降低农作物损失',
        stats: [{key: '损失降低', value: '67%'}, {key: '减少农药', value: '53%'}],
        icon: 'icon-robot',
        bgClass: 'blue-bg'
      },
      {
        title: '市场预测分析',
        desc: '基于大数据分析和AI预测模型，帮助农户了解市场需求趋势，优化种植计划和销售策略，提高收益率',
        stats: [{key: '收入增长', value: '48%'}, {key: '预测准确率', value: '89%'}],
        icon: 'icon-chart-pie',
        bgClass: 'purple-bg'
      }
    ],
    // 当前查看的案例索引
    currentCaseIndex: 0
  },

  onLoad: function (options) {
    // 页面加载时的逻辑
    console.log('经济数据页面加载');
  },

  onReady: function() {
    // 页面渲染完成后的逻辑
    console.log('经济数据页面渲染完成');
    this.animateProgressBars();
    this.renderCharts();
  },
  
  // 为进度条添加动画效果
  animateProgressBars: function() {
    // 使用微信小程序的动画API为进度条添加动画效果
    // 这是一个示例实现
    setTimeout(() => {
      const query = wx.createSelectorQuery();
      query.selectAll('.progress-fill').boundingClientRect();
      query.exec((res) => {
        console.log('Progress bars initialized');
      });
    }, 500);
  },
  
  // 渲染图表函数
  renderCharts: function() {
    // 给GDP增长趋势图添加动画效果
    setTimeout(() => {
      const query = wx.createSelectorQuery();
      
      // 传统农业GDP数据线
      query.selectAll('.gdp-data-point-traditional').boundingClientRect().exec((res) => {
        if (res && res[0]) {
          const points = res[0];
          let pathD = '';
          
          points.forEach((point, index) => {
            const x = point.left + point.width / 2;
            const y = point.top + point.height / 2;
            
            if (index === 0) {
              pathD = `M${x},${y}`;
            } else {
              pathD += ` L${x},${y}`;
            }
          });
          
          console.log('Traditional GDP path created');
        }
      });
      
      // 智慧农业GDP数据线
      query.selectAll('.gdp-data-point-smart').boundingClientRect().exec((res) => {
        if (res && res[0]) {
          const points = res[0];
          let pathD = '';
          
          points.forEach((point, index) => {
            const x = point.left + point.width / 2;
            const y = point.top + point.height / 2;
            
            if (index === 0) {
              pathD = `M${x},${y}`;
            } else {
              pathD += ` L${x},${y}`;
            }
          });
          
          console.log('Smart GDP path created');
        }
      });
      
      // 添加数据点的悬浮提示
      this.addDataPointsTooltip();
    }, 1000);
  },
  
  // 为数据点添加悬浮提示效果
  addDataPointsTooltip: function() {
    // 在小程序环境中可以通过点击事件实现悬浮提示
    // 此处仅示例，实际应该绑定touchstart/touchend事件
    console.log('Data points tooltip added');
  },

  onShareAppMessage: function() {
    // 用户点击分享按钮的回调
    return {
      title: '智慧经济数据中心 - 数据驱动乡村振兴',
      path: '/pages/jingji/jingji',
      imageUrl: 'https://agrmeta.com/static/picture/pocture/gbznt.png'
    }
  },

  // 查看更多案例
  viewMoreCases: function() {
    wx.showToast({
      title: '更多案例加载中...',
      icon: 'loading',
      duration: 2000
    });
  },

  // 联系我们
  contactUs: function() {
    wx.showModal({
      title: '联系我们',
      content: '如需了解更多智慧经济解决方案，请拨打400-123-4567或发送邮件至contact@smart-rural.cn',
      showCancel: false,
      confirmText: '知道了'
    });
  },

  // 下载白皮书
  downloadWhitepaper: function() {
    wx.showLoading({
      title: '准备下载...',
    });

    // 模拟下载过程
    setTimeout(function() {
      wx.hideLoading();
      wx.showModal({
        title: '下载提示',
        content: '智慧经济白皮书已准备就绪，将发送到您的邮箱',
        showCancel: true,
        cancelText: '取消',
        confirmText: '填写邮箱',
        success (res) {
          if (res.confirm) {
            console.log('用户同意填写邮箱');
          }
        }
      });
    }, 1500);
  }
});
