// pages/gongxu/gongxu.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    activeTab: 'supply', // 默认显示供应信息
    supplyList: [
      {
        id: 1,
        title: '优质红富士苹果',
        status: '供应中',
        description: '山东临沂地区优质红富士苹果，品质上乘，现有库存10吨，欢迎采购。',
        supplier: '临沂果业合作社',
        priceRange: '4.5-5.2元/斤',
        period: '2023-10-15至2024-02-15',
        contact: '135****8899',
        publishTime: '2023-10-10'
      },
      {
        id: 2,
        title: '有机大米',
        status: '供应中',
        description: '黑龙江五常有机稻米，不使用化肥农药，现有新米50吨，可长期供应。',
        supplier: '五常市绿源米业',
        priceRange: '15-18元/公斤',
        period: '2023-09-01至2024-08-31',
        contact: '139****3344',
        publishTime: '2023-09-15'
      },
      {
        id: 3,
        title: '新鲜西红柿',
        status: '供应中',
        description: '山东寿光温室种植西红柿，口感佳，现摘现发，日供应量5吨。',
        supplier: '寿光市绿色蔬菜基地',
        priceRange: '3.2-3.8元/斤',
        period: '2023-11-01至2024-04-30',
        contact: '186****5577',
        publishTime: '2023-10-25'
      },
      {
        id: 4,
        title: '绿壳鸡蛋',
        status: '供应中',
        description: '河南南阳散养土鸡生产的绿壳鸡蛋，富含营养，日产量约300斤。',
        supplier: '南阳市生态养殖场',
        priceRange: '2.5-3.0元/个',
        period: '长期供应',
        contact: '157****2233',
        publishTime: '2023-10-18'
      }
    ],
    demandList: [
      {
        id: 101,
        title: '采购高品质小麦',
        status: '采购中',
        description: '需求优质面粉加工小麦，蛋白质含量≥13%，容重≥790g/L，水分≤13%。',
        buyer: '河南省粮油集团',
        quantity: '5000吨',
        priceRef: '1.3-1.4元/斤',
        contact: '0371-888****66',
        publishTime: '2023-10-12'
      },
      {
        id: 102,
        title: '有机蔬菜采购',
        status: '采购中',
        description: '长期采购有机认证蔬菜，包括但不限于叶菜类、根茎类、果实类蔬菜，需提供有机认证证书。',
        buyer: '北京绿色餐饮连锁',
        quantity: '日需200-300公斤',
        priceRef: '市场价上浮10-15%',
        contact: '010-666****88',
        publishTime: '2023-10-05'
      },
      {
        id: 103,
        title: '生态鸡蛋采购',
        status: '采购中',
        description: '采购散养土鸡蛋，要求新鲜，无污染，可追溯源头，每枚重量在45-55克之间。',
        buyer: '上海优选食品有限公司',
        quantity: '周需5000-8000枚',
        priceRef: '1.8-2.2元/枚',
        contact: '021-555****99',
        publishTime: '2023-10-20'
      },
      {
        id: 104,
        title: '水果直供采购',
        status: '采购中',
        description: '食品加工企业寻找水果直供商，主要品类包括苹果、香蕉、橙子、草莓等，要求新鲜度高。',
        buyer: '广州甜蜜食品有限公司',
        quantity: '月需60-80吨',
        priceRef: '以当日批发市场价格为基础协商',
        contact: '020-333****77',
        publishTime: '2023-10-15'
      }
    ],
    infoTypes: ['供应信息', '需求信息'],
    typeIndex: 0,
    categories: ['请选择类别', '粮食作物', '蔬菜水果', '畜禽肉类', '水产品', '其他'],
    categoryIndex: 0,
    units: ['公斤', '吨', '个/只', '斤', '其他'],
    unitIndex: 0,
    priceUnits: ['元/斤', '元/公斤', '元/吨', '元/个'],
    priceUnitIndex: 0,
    startDate: '2023-11-01',
    endDate: '2024-11-01',
    agreePolicy: false
  },

  /**
   * Tab切换功能
   */
  switchTab: function(e) {
    const tab = e.currentTarget.dataset.tab;
    this.setData({
      activeTab: tab
    });
  },

  /**
   * 查看详情
   */
  viewDetail: function(e) {
    const id = e.currentTarget.dataset.id;
    wx.showToast({
      title: '详情功能开发中',
      icon: 'none'
    });
    console.log('查看详情ID:', id);
  },

  /**
   * 加载更多信息
   */
  loadMoreInfo: function() {
    wx.showToast({
      title: '加载更多功能开发中',
      icon: 'none'
    });
  },

  /**
   * 表单相关方法
   */
  bindTypeChange: function(e) {
    this.setData({
      typeIndex: e.detail.value
    });
  },

  bindCategoryChange: function(e) {
    this.setData({
      categoryIndex: e.detail.value
    });
  },

  bindUnitChange: function(e) {
    this.setData({
      unitIndex: e.detail.value
    });
  },

  bindPriceUnitChange: function(e) {
    this.setData({
      priceUnitIndex: e.detail.value
    });
  },

  bindStartDateChange: function(e) {
    this.setData({
      startDate: e.detail.value
    });
  },

  bindEndDateChange: function(e) {
    this.setData({
      endDate: e.detail.value
    });
  },

  toggleAgree: function() {
    this.setData({
      agreePolicy: !this.data.agreePolicy
    });
  },

  /**
   * 提交表单
   */
  submitForm: function(e) {
    const formData = e.detail.value;
    console.log('表单数据:', formData);
    
    if (!this.data.agreePolicy) {
      wx.showToast({
        title: '请先同意协议',
        icon: 'none'
      });
      return;
    }
    
    // 表单验证
    if (!formData.title) {
      wx.showToast({
        title: '请输入信息标题',
        icon: 'none'
      });
      return;
    }
    
    wx.showLoading({
      title: '提交中...',
    });
    
    // 模拟提交
    setTimeout(() => {
      wx.hideLoading();
      wx.showToast({
        title: '提交成功',
        icon: 'success'
      });
      // 重置表单
      this.setData({
        typeIndex: 0,
        categoryIndex: 0,
        unitIndex: 0,
        priceUnitIndex: 0,
        startDate: '2023-11-01',
        endDate: '2024-11-01',
        agreePolicy: false
      });
    }, 1500);
  },

  /**
   * 页面导航
   */
  navigateTo: function(e) {
    const page = e.currentTarget.dataset.page;
    wx.showToast({
      title: `导航到${page}页面`,
      icon: 'none'
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 可以在这里添加页面初始化逻辑
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    // ...existing code...
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    // ...existing code...
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    // ...existing code...
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    // ...existing code...
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    // ...existing code...
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    // ...existing code...
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    // ...existing code...
  }
})