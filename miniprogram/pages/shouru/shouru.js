// pages/shouru/shouru.js

Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 收入增长趋势数据
    incomeYears: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
    incomeData: [
      { value: 11422, height: 150 },
      { value: 12363, height: 162 },
      { value: 13432, height: 176 },
      { value: 14617, height: 192 },
      { value: 16021, height: 210 },
      { value: 17131, height: 224 },
      { value: 18931, height: 248 },
      { value: 20133, height: 264 },
      { value: 21691, height: 284 },
      { value: 23119, height: 300 }
    ],
    growthData: [
      { value: 8.9, height: 40, position: 5 },
      { value: 8.2, height: 38, position: 15 },
      { value: 8.6, height: 39, position: 25 },
      { value: 8.8, height: 40, position: 35 },
      { value: 9.6, height: 42, position: 45 },
      { value: 6.9, height: 35, position: 55 },
      { value: 10.5, height: 45, position: 65 },
      { value: 6.3, height: 33, position: 75 },
      { value: 7.7, height: 36, position: 85 },
      { value: 6.6, height: 34, position: 95 }
    ],
    
    // 城乡收入比较数据
    urbanRuralData: [
      { year: '2015', urban: 31195, rural: 11422, ratio: 2.73 },
      { year: '2016', urban: 33616, rural: 12363, ratio: 2.72 },
      { year: '2017', urban: 36396, rural: 13432, ratio: 2.71 },
      { year: '2018', urban: 39251, rural: 14617, ratio: 2.69 },
      { year: '2019', urban: 42359, rural: 16021, ratio: 2.64 },
      { year: '2020', urban: 43834, rural: 17131, ratio: 2.56 },
      { year: '2021', urban: 47412, rural: 18931, ratio: 2.50 },
      { year: '2022', urban: 49283, rural: 20133, ratio: 2.45 },
      { year: '2023', urban: 51665, rural: 21691, ratio: 2.38 },
      { year: '2024', urban: 54188, rural: 23119, ratio: 2.34 }
    ],
    
    // 省份排名数据 - 配色优化
    top10Provinces: [
      { province: '浙江', income: 40795, percentage: 100, color: 'linear-gradient(90deg, #3b82f6, #1e3a8a)' },
      { province: '上海', income: 38622, percentage: 95, color: 'linear-gradient(90deg, #3b82f6, #1e3a8a)' },
      { province: '北京', income: 37540, percentage: 92, color: 'linear-gradient(90deg, #3b82f6, #1e3a8a)' },
      { province: '江苏', income: 35218, percentage: 86, color: 'linear-gradient(90deg, #3b82f6, #1e3a8a)' },
      { province: '天津', income: 33756, percentage: 83, color: 'linear-gradient(90deg, #34d399, #059669)' },
      { province: '广东', income: 31842, percentage: 78, color: 'linear-gradient(90deg, #34d399, #059669)' },
      { province: '福建', income: 29764, percentage: 73, color: 'linear-gradient(90deg, #34d399, #059669)' },
      { province: '山东', income: 28150, percentage: 69, color: 'linear-gradient(90deg, #8b5cf6, #4c1d95)' },
      { province: '辽宁', income: 26682, percentage: 65, color: 'linear-gradient(90deg, #8b5cf6, #4c1d95)' },
      { province: '湖北', income: 25428, percentage: 62, color: 'linear-gradient(90deg, #8b5cf6, #4c1d95)' }
    ],
    
    // 预测数据
    forecastYears: [
      {year: '2020', position: 0},
      {year: '2021', position: 10},
      {year: '2022', position: 20},
      {year: '2023', position: 30},
      {year: '2024', position: 40},
      {year: '2025', position: 50},
      {year: '2026', position: 60},
      {year: '2027', position: 70},
      {year: '2028', position: 80},
      {year: '2029', position: 90},
      {year: '2030', position: 100}
    ],
    forecastHistory: [
      {value: 17131, height: 190, position: 0},
      {value: 18931, height: 210, position: 10},
      {value: 20133, height: 225, position: 20},
      {value: 21691, height: 240, position: 30},
      {value: 23119, height: 255, position: 40}
    ],
    forecastOptimistic: [
      {value: 23119, height: 255, position: 40},
      {value: 24828, height: 275, position: 50},
      {value: 26664, height: 295, position: 60},
      {value: 28638, height: 315, position: 70},
      {value: 30761, height: 340, position: 80},
      {value: 33045, height: 365, position: 90},
      {value: 35503, height: 390, position: 100}
    ],
    forecastNeutral: [
      {value: 23119, height: 255, position: 40},
      {value: 24506, height: 270, position: 50},
      {value: 25975, height: 285, position: 60},
      {value: 27533, height: 305, position: 70},
      {value: 29185, height: 320, position: 80},
      {value: 30935, height: 340, position: 90},
      {value: 32792, height: 360, position: 100}
    ],
    forecastConservative: [
      {value: 23119, height: 255, position: 40},
      {value: 24183, height: 265, position: 50},
      {value: 25271, height: 280, position: 60},
      {value: 26383, height: 290, position: 70},
      {value: 27521, height: 305, position: 80},
      {value: 28691, height: 315, position: 90},
      {value: 29896, height: 330, position: 100}
    ],
    
    // 区域收入详细数据
    regionalData: [
      {rank: 1, province: '浙江', income: 40795, growth: 7.2, wagePercent: 46.5, businessPercent: 32.8},
      {rank: 2, province: '上海', income: 38622, growth: 6.8, wagePercent: 52.3, businessPercent: 26.5},
      {rank: 3, province: '北京', income: 37540, growth: 6.5, wagePercent: 54.8, businessPercent: 24.2},
      {rank: 4, province: '江苏', income: 35218, growth: 7.0, wagePercent: 48.2, businessPercent: 30.6},
      {rank: 5, province: '天津', income: 33756, growth: 6.2, wagePercent: 50.1, businessPercent: 28.4},
      {rank: 6, province: '广东', income: 31842, growth: 7.5, wagePercent: 49.3, businessPercent: 30.2},
      {rank: 7, province: '福建', income: 29764, growth: 7.8, wagePercent: 47.8, businessPercent: 31.5},
      {rank: 8, province: '山东', income: 28150, growth: 6.8, wagePercent: 43.6, businessPercent: 35.1},
      {rank: 9, province: '辽宁', income: 26682, growth: 6.0, wagePercent: 45.8, businessPercent: 32.7},
      {rank: 10, province: '湖北', income: 25428, growth: 6.9, wagePercent: 41.2, businessPercent: 36.4}
    ],
    
    // 页面滚动进度
    scrollProgress: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.initAnimation();
  },
  
  // 初始化动画和交互
  initAnimation() {
    // 监听页面滚动事件
    wx.createIntersectionObserver()
      .relativeToViewport()
      .observe('.fade-in', (res) => {
        if (res.intersectionRatio > 0) {
          // 元素进入视口时添加动画
          res.dataset.animated = true;
        }
      });
  },
  
  // 监听页面滚动
  onPageScroll(e) {
    // 更新进度条
    const query = wx.createSelectorQuery();
    query.select('.container').boundingClientRect();
    query.exec((res) => {
      if (res[0]) {
        const containerHeight = res[0].height - wx.getSystemInfoSync().windowHeight;
        const progress = Math.min(100, Math.max(0, (e.scrollTop / containerHeight) * 100));
        this.setData({
          scrollProgress: progress
        });
      }
    });
  },
  
  /**
   * 滚动到概览部分
   */
  scrollToOverview() {
    wx.createSelectorQuery()
      .select('#overview')
      .boundingClientRect(function(rect){
        if (rect) {
          wx.pageScrollTo({
            scrollTop: rect.top,
            duration: 300
          });
        }
      })
      .exec();
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    setTimeout(() => {
      wx.stopPullDownRefresh();
    }, 500);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    return {
      title: '智慧收入 · 数据可视化平台',
      path: '/pages/shouru/shouru'
    };
  },

  /**
   * 页面显示时的动画效果
   */
  onShow() {
    // 添加横向条形图的动画效果
    setTimeout(() => {
      const query = wx.createSelectorQuery();
      query.selectAll('.h-bar-value').boundingClientRect().exec((res) => {
        if (res && res[0]) {
          res[0].forEach((item, index) => {
            this.animate(`.h-bar-value:nth-child(${index + 1})`, [
              { width: '0%' },
              { width: `${this.data.top10Provinces[index].percentage}%` }
            ], 1000, function() {});
          });
        }
      });
    }, 1000);
  }
})