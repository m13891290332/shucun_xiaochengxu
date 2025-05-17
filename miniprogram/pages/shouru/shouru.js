// pages/shouru/shouru.js
// 引入图表库
import * as echarts from '../../ec-canvas/echarts';

// 图表初始化函数
function initChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // 像素比
  });
  canvas.setChart(chart);
  return chart;
}

// 收入增长趋势图表
function initIncomeChart(canvas, width, height, dpr) {
  const chart = initChart(canvas, width, height, dpr);
  const option = {
    textStyle: {
      color: '#e5e7eb'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
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
      data: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
      axisLabel: {
        color: '#e5e7eb'
      },
      axisLine: {
        lineStyle: {
          color: '#374151'
        }
      }
    },
    yAxis: {
      type: 'value',
      name: '元',
      axisLabel: {
        color: '#e5e7eb'
      },
      axisLine: {
        lineStyle: {
          color: '#374151'
        }
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.1)'
        }
      }
    },
    series: [
      {
        name: '农村居民人均可支配收入',
        type: 'bar',
        data: [11422, 12363, 13432, 14617, 16021, 17131, 18931, 20133, 21691, 23119],
        itemStyle: {
          color: '#3b82f6'
        }
      },
      {
        name: '同比增长率',
        type: 'line',
        yAxisIndex: 0,
        data: [8.9, 8.2, 8.6, 8.8, 9.6, 6.9, 10.5, 6.3, 7.7, 6.6],
        itemStyle: {
          color: '#34d399'
        },
        symbolSize: 8
      }
    ]
  };
  chart.setOption(option);
  return chart;
}

// 收入结构分布图表
function initIncomeStructureChart(canvas, width, height, dpr) {
  const chart = initChart(canvas, width, height, dpr);
  const option = {
    textStyle: {
      color: '#e5e7eb'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      right: 10,
      top: 'center',
      textStyle: {
        color: '#e5e7eb'
      }
    },
    series: [
      {
        name: '收入结构',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#111827',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '18',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          {value: 42.0, name: '工资性收入'},
          {value: 34.7, name: '经营净收入'},
          {value: 2.5, name: '财产净收入'},
          {value: 20.8, name: '转移净收入'}
        ],
        color: ['#3b82f6', '#34d399', '#fbbf24', '#f472b6']
      }
    ]
  };
  chart.setOption(option);
  return chart;
}

// 城乡收入比较图表
function initUrbanRuralChart(canvas, width, height, dpr) {
  const chart = initChart(canvas, width, height, dpr);
  const option = {
    textStyle: {
      color: '#e5e7eb'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999'
        }
      }
    },
    legend: {
      data: ['城镇居民收入', '农村居民收入', '城乡收入比'],
      textStyle: {
        color: '#e5e7eb'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
        axisPointer: {
          type: 'shadow'
        },
        axisLabel: {
          color: '#e5e7eb'
        },
        axisLine: {
          lineStyle: {
            color: '#374151'
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '收入（元）',
        axisLabel: {
          color: '#e5e7eb',
          formatter: '{value}'
        },
        axisLine: {
          lineStyle: {
            color: '#374151'
          }
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.1)'
          }
        }
      },
      {
        type: 'value',
        name: '收入比',
        min: 2.0,
        max: 3.0,
        interval: 0.2,
        axisLabel: {
          color: '#e5e7eb',
          formatter: '{value}'
        },
        axisLine: {
          lineStyle: {
            color: '#374151'
          }
        },
        splitLine: {
          show: false
        }
      }
    ],
    series: [
      {
        name: '城镇居民收入',
        type: 'bar',
        data: [31195, 33616, 36396, 39251, 42359, 43834, 47412, 49283, 51665, 54188],
        itemStyle: {
          color: '#60a5fa'
        }
      },
      {
        name: '农村居民收入',
        type: 'bar',
        data: [11422, 12363, 13432, 14617, 16021, 17131, 18931, 20133, 21691, 23119],
        itemStyle: {
          color: '#34d399'
        }
      },
      {
        name: '城乡收入比',
        type: 'line',
        yAxisIndex: 1,
        data: [2.73, 2.72, 2.71, 2.69, 2.64, 2.56, 2.50, 2.45, 2.38, 2.34],
        itemStyle: {
          color: '#f472b6'
        },
        symbolSize: 8
      }
    ]
  };
  chart.setOption(option);
  return chart;
}

// 区域排名图表
function initRegionalRankingChart(canvas, width, height, dpr) {
  const chart = initChart(canvas, width, height, dpr);
  const option = {
    textStyle: {
      color: '#e5e7eb'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '10%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      name: '元',
      axisLabel: {
        color: '#e5e7eb'
      },
      axisLine: {
        lineStyle: {
          color: '#374151'
        }
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.1)'
        }
      }
    },
    yAxis: {
      type: 'category',
      data: ['浙江', '上海', '北京', '江苏', '天津', '广东', '福建', '山东', '辽宁', '湖北'],
      axisLabel: {
        color: '#e5e7eb'
      },
      axisLine: {
        lineStyle: {
          color: '#374151'
        }
      }
    },
    series: [
      {
        name: '2024年农村居民人均可支配收入',
        type: 'bar',
        data: [40795, 38622, 37540, 35218, 33756, 31842, 29764, 28150, 26682, 25428],
        itemStyle: {
          color: params => {
            // 创建不同的颜色
            const colorList = ['#3b82f6', '#60a5fa', '#34d399', '#10b981', '#8b5cf6'];
            return colorList[params.dataIndex % colorList.length];
          }
        }
      }
    ]
  };
  chart.setOption(option);
  return chart;
}

// 收入预测图表
function initForecastChart(canvas, width, height, dpr) {
  const chart = initChart(canvas, width, height, dpr);
  const option = {
    textStyle: {
      color: '#e5e7eb'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['历史数据', 'AI预测值-乐观', 'AI预测值-中性', 'AI预测值-保守'],
      textStyle: {
        color: '#e5e7eb'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030'],
        axisLabel: {
          color: '#e5e7eb'
        },
        axisLine: {
          lineStyle: {
            color: '#374151'
          }
        },
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '元',
        axisLabel: {
          color: '#e5e7eb'
        },
        axisLine: {
          lineStyle: {
            color: '#374151'
          }
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.1)'
          }
        }
      }
    ],
    series: [
      {
        name: '历史数据',
        type: 'line',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [17131, 18931, 20133, 21691, 23119, null, null, null, null, null, null],
        itemStyle: {
          color: '#3b82f6'
        },
        lineStyle: {
          width: 3
        }
      },
      {
        name: 'AI预测值-乐观',
        type: 'line',
        areaStyle: {
          opacity: 0.2
        },
        emphasis: {
          focus: 'series'
        },
        data: [null, null, null, null, 23119, 24828, 26664, 28638, 30761, 33045, 35503],
        itemStyle: {
          color: '#34d399'
        },
        lineStyle: {
          width: 2,
          type: 'dashed'
        }
      },
      {
        name: 'AI预测值-中性',
        type: 'line',
        areaStyle: {
          opacity: 0.2
        },
        emphasis: {
          focus: 'series'
        },
        data: [null, null, null, null, 23119, 24506, 25975, 27533, 29185, 30935, 32792],
        itemStyle: {
          color: '#fbbf24'
        },
        lineStyle: {
          width: 2,
          type: 'dashed'
        }
      },
      {
        name: 'AI预测值-保守',
        type: 'line',
        areaStyle: {
          opacity: 0.2
        },
        emphasis: {
          focus: 'series'
        },
        data: [null, null, null, null, 23119, 24183, 25271, 26383, 27521, 28691, 29896],
        itemStyle: {
          color: '#f472b6'
        },
        lineStyle: {
          width: 2,
          type: 'dashed'
        }
      }
    ]
  };
  chart.setOption(option);
  return chart;
}

Page({
  /**
   * 页面的初始数据
   */
  data: {
    incomeChartEc: {
      onInit: initIncomeChart
    },
    incomeStructureChartEc: {
      onInit: initIncomeStructureChart
    },
    urbanRuralChartEc: {
      onInit: initUrbanRuralChart
    },
    regionalRankingChartEc: {
      onInit: initRegionalRankingChart
    },
    forecastChartEc: {
      onInit: initForecastChart
    },
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
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 页面加载时的逻辑
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    // 刷新页面数据
    setTimeout(() => {
      wx.stopPullDownRefresh();
    }, 1500);
  },

  // 滚动到概览部分
  scrollToOverview() {
    wx.createSelectorQuery()
      .select('#overview')
      .boundingClientRect(function(rect){
        wx.pageScrollTo({
          scrollTop: rect.top,
          duration: 300
        });
      })
      .exec();
  },

  // 其他生命周期函数保持不变
  onReady() {
  },

  onShow() {
  },

  onHide() {
  },

  onUnload() {
  },

  onReachBottom() {
  },

  onShareAppMessage() {
    return {
      title: '智慧收入 · 数据可视化平台',
      path: '/pages/shouru/shouru'
    };
  }
})