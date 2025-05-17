// pages/zhushou/zhushou.js
// 引入echarts
import * as echarts from '../../ec-canvas/echarts';

// 初始化图表函数
function initChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr
  });
  canvas.setChart(chart);
  return chart;
}

// 初始化GDP趋势图
function initGdpTrendChart(chart) {
  const option = {
    backgroundColor: 'rgba(0,0,0,0)',
    color: ['#2a93d5'],
    tooltip: {
      trigger: 'axis'
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      top: '15%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['2021', '2022', '2023'],
      axisLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.3)'
        }
      },
      axisLabel: {
        color: 'rgba(255, 255, 255, 0.7)'
      }
    },
    yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.3)'
        }
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.1)'
        }
      },
      axisLabel: {
        color: 'rgba(255, 255, 255, 0.7)'
      }
    },
    series: [{
      name: '地区生产总值(亿元)',
      type: 'line',
      smooth: true,
      data: [42.8, 45.6, 49.7],
      areaStyle: {
        opacity: 0.2
      }
    }]
  };
  chart.setOption(option);
  return chart;
}

// 初始化GDP构成饼图
function initGdpCompositionChart(chart) {
  const option = {
    backgroundColor: 'rgba(0,0,0,0)',
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      right: 10,
      top: 'center',
      data: ['第一产业', '第二产业', '第三产业'],
      textStyle: {
        color: 'rgba(255, 255, 255, 0.8)'
      }
    },
    series: [{
      name: '产值构成',
      type: 'pie',
      radius: ['40%', '70%'],
      center: ['40%', '50%'],
      avoidLabelOverlap: false,
      label: {
        show: false
      },
      emphasis: {
        label: {
          show: true,
          color: '#fff'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        {value: 17.8, name: '第一产业', itemStyle: {color: '#4bc0c0'}},
        {value: 10.7, name: '第二产业', itemStyle: {color: '#ff6384'}},
        {value: 21.2, name: '第三产业', itemStyle: {color: '#36a2eb'}}
      ]
    }]
  };
  chart.setOption(option);
  return chart;
}

// 初始化收入对比图
function initIncomeComparisonChart(chart) {
  const option = {
    backgroundColor: 'rgba(0,0,0,0)',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['农村居民人均可支配收入', '城镇居民人均可支配收入'],
      textStyle: {
        color: 'rgba(255, 255, 255, 0.8)'
      },
      top: 0
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      top: '25%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['2021', '2022', '2023'],
      axisLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.3)'
        }
      },
      axisLabel: {
        color: 'rgba(255, 255, 255, 0.7)'
      }
    },
    yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.3)'
        }
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.1)'
        }
      },
      axisLabel: {
        color: 'rgba(255, 255, 255, 0.7)'
      }
    },
    series: [{
      name: '农村居民人均可支配收入',
      type: 'bar',
      data: [18450, 20018, 21780],
      itemStyle: {
        color: 'rgba(75, 192, 192, 0.7)'
      }
    }, {
      name: '城镇居民人均可支配收入',
      type: 'bar',
      data: [38750, 41850, 45320],
      itemStyle: {
        color: 'rgba(54, 162, 235, 0.7)'
      }
    }]
  };
  chart.setOption(option);
  return chart;
}

// 更多图表初始化函数会在实际使用时添加

Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 分析结果相关
    analysisText: '',
    isLoading: true,
    
    // 数据表格相关
    showDataTable: false,
    economicData: {
      development: [
        {name: '地区生产总值(亿元)', y2021: '42.8', y2022: '45.6', y2023: '49.7'},
        {name: '农林牧渔业增加值(亿元)', y2021: '15.2', y2022: '16.4', y2023: '17.8'},
        {name: '社会消费品零售总额(亿元)', y2021: '18.5', y2022: '20.3', y2023: '22.7'},
        {name: '一般公共预算收入(亿元)', y2021: '2.8', y2022: '3.2', y2023: '3.6'}
      ],
      growth: [
        {name: '固定资产投资增速(%)', y2021: '5.8', y2022: '6.2', y2023: '6.5'},
        {name: '规模以上工业增加值增速(%)', y2021: '6.2', y2022: '6.8', y2023: '7.2'},
        {name: '城镇居民人均可支配收入增速(%)', y2021: '7.5', y2022: '8.0', y2023: '8.3'},
        {name: '地区生产总值增速(%)', y2021: '6.5', y2022: '6.8', y2023: '7.2'},
        {name: '农村居民人均可支配收入增速(%)', y2021: '8.2', y2022: '8.5', y2023: '8.8'}
      ],
      industry: [
        {name: '服务业增加值(亿元)', y2021: '16.8', y2022: '18.5', y2023: '21.2'},
        {name: '农业产业化经营率(%)', y2021: '52.5', y2022: '55.8', y2023: '58.3'},
        {name: '服务业增加值占GDP比重(%)', y2021: '39.3', y2022: '40.6', y2023: '42.7'}
      ],
      income: [
        {name: '农村居民人均可支配收入(元)', y2021: '18450', y2022: '20018', y2023: '21780'},
        {name: '城镇居民人均可支配收入(元)', y2021: '38750', y2022: '41850', y2023: '45320'}
      ]
    },
    
    // 图表相关
    showCharts: false,
    currentChart: 'gdp',
    gdpTrendEc: {
      onInit: initGdpTrendChart
    },
    gdpCompositionEc: {
      onInit: initGdpCompositionChart
    },
    incomeComparisonEc: {
      onInit: initIncomeComparisonChart
    },
    // 其他图表配置会在需要时添加
    
    // 聊天相关
    chatHistory: [
      {
        isUser: false,
        message: '您好！我是乡村振兴智能分析师，请输入您的分析需求或上传乡村振兴相关数据，我将为您提供专业分析和建议。',
        thinking: false
      }
    ],
    inputMessage: '',
    scrollTop: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 模拟加载分析结果
    setTimeout(() => {
      this.setData({
        isLoading: false,
        analysisText: this.getAnalysisText()
      });
      
      // 加载完成后显示其他面板
      setTimeout(() => {
        this.setData({
          showDataTable: true,
          showCharts: true
        });
      }, 1000);
    }, 1500);
  },

  /**
   * 获取分析报告文本
   */
  getAnalysisText() {
    return `【碧水村发展分析报告】

根据提供的2021-2023年经济数据，碧水村整体呈现稳步发展态势，具体分析如下：

1. 经济总量持续增长：地区生产总值从2021年的42.8亿元增长到2023年的49.7亿元，三年复合增长率达到7.7%，高于全国农村平均水平。

2. 产业结构优化：服务业增加值占GDP比重从2021年的39.3%提升至2023年的42.7%，产业结构持续优化。农业产业化经营率提高到58.3%，表明农业现代化水平不断提升。

3. 民生福祉改善：农村居民人均可支配收入增速连续三年保持在8.2%-8.8%，高于城镇居民收入增速，城乡收入差距逐步缩小，但绝对差距仍然明显。

4. 投资拉动明显：固定资产投资增速保持在6%左右，与GDP增速正相关，说明投资对经济增长的拉动作用显著。

发展建议：
1. 进一步提升农业产业化水平，发展特色农产品加工业
2. 加强乡村旅游等服务业发展，提升第三产业比重
3. 完善农村基础设施建设，吸引更多固定资产投资
4. 实施技能培训计划，提高农村劳动力素质，增加农民收入`;
  },

  /**
   * 切换数据表格显示状态
   */
  toggleDataTable() {
    this.setData({
      showDataTable: !this.data.showDataTable
    });
  },

  /**
   * 切换图表显示状态
   */
  toggleCharts() {
    this.setData({
      showCharts: !this.data.showCharts
    });
  },

  /**
   * 切换显示的图表
   */
  switchChart(e) {
    const chart = e.currentTarget.dataset.chart;
    this.setData({
      currentChart: chart
    });
  },

  /**
   * 输入框内容变化
   */
  onInputChange(e) {
    this.setData({
      inputMessage: e.detail.value
    });
  },

  /**
   * 发送消息
   */
  sendMessage() {
    const message = this.data.inputMessage.trim();
    if (!message) return;
    
    // 添加用户消息
    const newChatHistory = [...this.data.chatHistory, {
      isUser: true,
      message: message,
      thinking: false
    }];
    
    // 添加AI思考状态
    newChatHistory.push({
      isUser: false,
      message: '',
      thinking: true
    });
    
    this.setData({
      chatHistory: newChatHistory,
      inputMessage: ''
    });
    
    // 更新滚动位置
    this.updateScrollTop();
    
    // 模拟AI响应
    setTimeout(() => {
      const response = this.getAIResponse(message);
      const updatedChatHistory = [...this.data.chatHistory];
      updatedChatHistory[updatedChatHistory.length - 1] = {
        isUser: false,
        message: response,
        thinking: false
      };
      
      this.setData({
        chatHistory: updatedChatHistory
      });
      
      // 更新滚动位置
      this.updateScrollTop();
    }, 2000);
  },

  /**
   * 更新聊天区域滚动位置到最底部
   */
  updateScrollTop() {
    setTimeout(() => {
      // 使用选择器获取容器高度并设置scrollTop
      const query = wx.createSelectorQuery().in(this);
      query.select('.message-list').boundingClientRect();
      query.select('.chat-history').boundingClientRect();
      query.exec((res) => {
        if (res.length === 2) {
          const messageListHeight = res[0].height;
          const chatHistoryHeight = res[1].height;
          this.setData({
            scrollTop: messageListHeight - chatHistoryHeight
          });
        }
      });
    }, 50);
  },

  /**
   * 获取AI响应
   */
  getAIResponse(message) {
    // 简单的关键词匹配逻辑
    if (message.includes("收入") || message.includes("差距")) {
      return "根据分析数据，碧水村农村居民收入增速高于城镇居民的主要原因有：\n\n1. 政策倾斜：乡村振兴战略实施后，针对农村的扶持政策增加，包括农业补贴、创业扶持等政策红利更多惠及农村居民\n\n2. 产业化效应：农业产业化经营率从2021年的52.5%提高到2023年的58.3%，带动了农业效益提升，增加了农民收入\n\n3. 基数效应：农村居民人均可支配收入基数较低（2023年为21780元，仅为城镇居民的48%），相同增量下增速自然更高\n\n4. 多元增收：农村二三产业发展为农民提供了更多元的增收渠道，如乡村旅游、农产品加工等";
    } else if (message.includes("建议") || message.includes("措施")) {
      return "建议采取以下措施促进乡村进一步发展：\n\n1. 加强农产品品牌建设，提高农产品附加值\n2. 发展乡村特色旅游，带动服务业发展\n3. 完善农村基础设施，提高农村生活品质\n4. 加强职业技能培训，提升劳动力素质\n5. 推动农村电商发展，拓宽销售渠道";
    } else if (message.includes("产业") || message.includes("结构")) {
      return "碧水村产业结构分析如下：\n\n1. 三年间第三产业占比从39.3%提升至42.7%，服务业逐渐成为重要增长点\n2. 第一产业占比基本稳定在35%左右，但质量和效益有所提升\n3. 第二产业占比下降明显，从25.2%降至21.5%，表明产业升级转型正在进行\n4. 建议发展特色农产品加工，促进一二三产融合发展";
    } else {
      return "根据2021-2023年数据，碧水村经济发展态势良好。地区生产总值年增长率保持在7%左右，农村居民收入增速超过8.5%，农业产业化经营率提升明显，服务业占比提高3.4个百分点。这表明乡村振兴战略实施成效显著，但仍需加强城乡融合发展，进一步缩小城乡收入差距。";
    }
  },

  /**
   * 导入数据按钮点击事件
   */
  importData() {
    wx.showToast({
      title: '导入功能开发中',
      icon: 'none'
    });
  },

  /**
   * 显示设置按钮点击事件
   */
  showSettings() {
    wx.showToast({
      title: '设置功能开发中',
      icon: 'none'
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    // 页面渲染完成后，可以在这里执行其他初始化操作
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  }

  // 其他生命周期函数保持不变
})