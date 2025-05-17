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
