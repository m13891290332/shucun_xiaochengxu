import * as echarts from '../../ec-canvas/echarts';


function initPriceChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr
  });
  canvas.setChart(chart);

  const option = {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['实际价格', 'AI预测价格'],
      textStyle: {
        color: '#e6f1ff'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['9/15', '9/20', '9/25', '9/30', '10/5', '10/10', '10/15', '10/20(预测)', '10/25(预测)', '10/30(预测)', '11/5(预测)', '11/10(预测)'],
      axisLine: {
        lineStyle: {
          color: '#e6f1ff'
        }
      },
      axisLabel: {
        color: '#e6f1ff'
      }
    },
    yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: '#e6f1ff'
        }
      },
      axisLabel: {
        color: '#e6f1ff',
        formatter: '¥{value}'
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(255,255,255,0.1)'
        }
      }
    },
    series: [{
      name: '实际价格',
      type: 'line',
      data: [5.1, 5.2, 5.3, 5.25, 5.4, 5.5, 5.48, null, null, null, null, null],
      symbolSize: 5,
      symbol: 'circle',
      smooth: true,
      lineStyle: {
        width: 2,
        color: '#38bdf8'
      },
      itemStyle: {
        color: '#38bdf8'
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgba(56, 189, 248, 0.3)'
        }, {
          offset: 1,
          color: 'rgba(56, 189, 248, 0.1)'
        }])
      }
    }, {
      name: 'AI预测价格',
      type: 'line',
      data: [null, null, null, null, null, null, 5.48, 5.6, 5.7, 5.8, 5.85, 5.9],
      symbolSize: 5,
      symbol: 'circle',
      smooth: true,
      lineStyle: {
        width: 2,
        color: '#f59e0b',
        type: 'dashed'
      },
      itemStyle: {
        color: '#f59e0b'
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgba(245, 158, 11, 0.3)'
        }, {
          offset: 1,
          color: 'rgba(245, 158, 11, 0.1)'
        }])
      }
    }]
  };
  chart.setOption(option);
  return chart;
}

function initPlatformChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr
  });
  canvas.setChart(chart);

  const option = {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['销量(吨)', '平均价格(元/斤)', '利润率(%)'],
      textStyle: {
        color: '#e6f1ff'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      data: ['京东', '淘宝', '拼多多'],
      axisLine: {
        lineStyle: {
          color: '#e6f1ff'
        }
      },
      axisLabel: {
        color: '#e6f1ff'
      }
    }],
    yAxis: [{
      type: 'value',
      name: '销量',
      axisLine: {
        lineStyle: {
          color: '#e6f1ff'
        }
      },
      axisLabel: {
        color: '#e6f1ff',
        formatter: '{value} 吨'
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(255,255,255,0.1)'
        }
      }
    }, {
      type: 'value',
      name: '价格/利润率',
      axisLine: {
        lineStyle: {
          color: '#e6f1ff'
        }
      },
      axisLabel: {
        color: '#e6f1ff',
        formatter: '{value}'
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(255,255,255,0.1)'
        }
      }
    }],
    series: [{
      name: '销量(吨)',
      type: 'bar',
      barWidth: '20%',
      data: [18, 25, 32],
      itemStyle: {
        color: '#3b82f6'
      }
    }, {
      name: '平均价格(元/斤)',
      type: 'line',
      yAxisIndex: 1,
      data: [5.50, 5.20, 4.80],
      symbol: 'circle',
      symbolSize: 8,
      lineStyle: {
        width: 3
      },
      itemStyle: {
        color: '#f59e0b'
      }
    }, {
      name: '利润率(%)',
      type: 'line',
      yAxisIndex: 1,
      data: [22, 19.5, 15],
      symbol: 'triangle',
      symbolSize: 8,
      lineStyle: {
        width: 3
      },
      itemStyle: {
        color: '#10b981'
      }
    }]
  };
  chart.setOption(option);
  return chart;
}

function initTimingChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr
  });
  canvas.setChart(chart);

  const option = {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['销量趋势', '价格趋势', '利润指数'],
      textStyle: {
        color: '#e6f1ff'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      axisLine: {
        lineStyle: {
          color: '#e6f1ff'
        }
      },
      axisLabel: {
        color: '#e6f1ff'
      }
    },
    yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: '#e6f1ff'
        }
      },
      axisLabel: {
        color: '#e6f1ff'
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(255,255,255,0.1)'
        }
      }
    },
    series: [{
      name: '销量趋势',
      type: 'line',
      stack: '总量',
      data: [120, 132, 101, 134, 160, 230, 210],
      smooth: true,
      lineStyle: {
        width: 2
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgba(59, 130, 246, 0.3)'
        }, {
          offset: 1,
          color: 'rgba(59, 130, 246, 0.1)'
        }])
      },
      itemStyle: {
        color: '#3b82f6'
      }
    }, {
      name: '价格趋势',
      type: 'line',
      stack: '总量',
      data: [220, 215, 210, 234, 260, 270, 260],
      smooth: true,
      lineStyle: {
        width: 2
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgba(245, 158, 11, 0.3)'
        }, {
          offset: 1,
          color: 'rgba(245, 158, 11, 0.1)'
        }])
      },
      itemStyle: {
        color: '#f59e0b'
      }
    }, {
      name: '利润指数',
      type: 'line',
      stack: '总量',
      data: [150, 160, 170, 195, 230, 252, 245],
      smooth: true,
      lineStyle: {
        width: 2
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgba(16, 185, 129, 0.3)'
        }, {
          offset: 1,
          color: 'rgba(16, 185, 129, 0.1)'
        }])
      },
      itemStyle: {
        color: '#10b981'
      }
    }]
  };
  chart.setOption(option);
  return chart;
}

function initInventoryChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr
  });
  canvas.setChart(chart);

  const option = {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['库存量', '销量预测', '最佳库存水平'],
      textStyle: {
        color: '#e6f1ff'
      },
      top: 'bottom'
    },
    xAxis: {
      type: 'category',
      data: ['10/15', '10/20', '10/25', '10/30', '11/5', '11/10', '11/15'],
      axisLine: {
        lineStyle: {
          color: '#e6f1ff'
        }
      },
      axisLabel: {
        color: '#e6f1ff'
      }
    },
    yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: '#e6f1ff'
        }
      },
      axisLabel: {
        color: '#e6f1ff'
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(255,255,255,0.1)'
        }
      }
    },
    series: [{
      name: '库存量',
      type: 'bar',
      barWidth: '40%',
      data: [1200, 1050, 900, 750, 580, 450, 320],
      itemStyle: {
        color: '#60a5fa'
      }
    }, {
      name: '销量预测',
      type: 'line',
      data: [150, 180, 200, 220, 240, 250, 270],
      symbol: 'circle',
      symbolSize: 6,
      smooth: true,
      itemStyle: {
        color: '#f59e0b'
      }
    }, {
      name: '最佳库存水平',
      type: 'line',
      data: [950, 880, 800, 720, 650, 580, 500],
      symbol: 'rect',
      symbolSize: 6,
      lineStyle: {
        type: 'dashed',
        width: 2
      },
      itemStyle: {
        color: '#10b981'
      }
    }]
  };
  chart.setOption(option);
  return chart;
}

Page({
  data: {
    ecPriceChart: {
      onInit: initPriceChart
    },
    ecPlatformChart: {
      onInit: initPlatformChart
    },
    ecTimingChart: {
      onInit: initTimingChart
    },
    ecInventoryChart: {
      onInit: initInventoryChart
    },
    
    currentCategory: '水果',
    productList: ['苹果', '香蕉', '橙子', '葡萄', '梨'],
    productIndex: 0,
    regionList: ['全国', '山东', '陕西', '云南', '广西'],
    regionIndex: 0,
    timeList: ['近7天', '近30天', '近3个月', '近6个月', '近1年'],
    timeIndex: 0,
    
    priceData: [
      {name: '红富士苹果', spec: '80mm以上/斤', priceJD: 5.50, priceTB: 5.20, pricePDD: 4.80, change: 2.8, changeText: '+2.8%', updateTime: '2分钟前'},
      {name: '黄香蕉', spec: '一级/斤', priceJD: 3.20, priceTB: 3.50, pricePDD: 3.10, change: -1.2, changeText: '-1.2%', updateTime: '5分钟前'},
      {name: '赣南脐橙', spec: '特级/个', priceJD: 4.80, priceTB: 4.60, pricePDD: 4.20, change: 0.5, changeText: '+0.5%', updateTime: '10分钟前'},
      {name: '巨峰葡萄', spec: '特级/斤', priceJD: 8.80, priceTB: 8.50, pricePDD: 7.90, change: 3.2, changeText: '+3.2%', updateTime: '8分钟前'},
      {name: '丰水梨', spec: '大果/斤', priceJD: 4.50, priceTB: 4.80, pricePDD: 4.30, change: -0.8, changeText: '-0.8%', updateTime: '12分钟前'}
    ],
    
    currentProduct: '红富士苹果',
    currentSpec: '80mm以上/斤',
    
    timePeriod: 'month',
    
    priceTrend: '上涨趋势',
    priceChangeRange: '5-8%',
    priceFactors: [
      '产地库存量持续下降，较去年同期减少12%',
      '节假日消费需求预期增长，市场需求旺盛',
      '运输成本上升影响批发价格'
    ],
    bestSellingTime: '11月中下旬',
    
    currentTab: 'sales',
    
    lastUpdate: '2023年10月15日 08:30:45'
  },
  
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '农产品数据分析平台'
    });
  },
  
  switchCategory: function(e) {
    const category = e.currentTarget.dataset.category;
    this.setData({
      currentCategory: category
    });
    
    let productList = [];
    switch(category) {
      case '水果':
        productList = ['苹果', '香蕉', '橙子', '葡萄', '梨'];
        break;
      case '蔬菜':
        productList = ['白菜', '土豆', '番茄', '黄瓜', '茄子'];
        break;
      case '粮食':
        productList = ['大米', '小麦', '玉米', '高粱', '大豆'];
        break;
      case '畜牧':
        productList = ['猪肉', '牛肉', '羊肉', '鸡肉', '鸭肉'];
        break;
      case '水产':
        productList = ['草鱼', '带鱼', '虾', '鲈鱼', '螃蟹'];
        break;
      case '特色农产品':
        productList = ['花椒', '干辣椒', '枸杞', '黄芪', '红枣'];
        break;
    }
    
    this.setData({
      productList: productList,
      productIndex: 0
    });
  },
  
  bindProductChange: function(e) {
    this.setData({
      productIndex: e.detail.value
    });
  },
  
  bindRegionChange: function(e) {
    this.setData({
      regionIndex: e.detail.value
    });
  },
  
  bindTimeChange: function(e) {
    this.setData({
      timeIndex: e.detail.value
    });
  },
  
  switchTimePeriod: function(e) {
    const period = e.currentTarget.dataset.period;
    this.setData({
      timePeriod: period
    });
    // 这里可以添加根据不同时间段更新图表的逻辑
  },
  
  switchTab: function(e) {
    const tab = e.currentTarget.dataset.tab;
    this.setData({
      currentTab: tab
    });
    // 这里可以添加根据不同标签更新图表的逻辑
  },
  
  onReady: function() {
    // 页面初次渲染完成
  },
  
  onShow: function() {
    // 页面显示
  },
  
  onHide: function() {
    // 页面隐藏
  },
  
  onUnload: function() {
    // 页面卸载
  },
  
  onPullDownRefresh: function() {
    wx.stopPullDownRefresh();
  },
  
  onReachBottom: function() {
  },
  
  onShareAppMessage: function() {
    return {
      title: '农产品数据分析平台',
      path: '/pages/analysis/analysis'
    };
  }
});
