Page({
  data: {
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
    
    lastUpdate: '2023年10月15日 08:30:45',
    scrollProgress: 0,
    screenWidth: 375
  },
  
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '农产品数据分析平台'
    });
    
    // 获取屏幕宽度，用于自适应布局
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          screenWidth: res.windowWidth
        });
      }
    });
  },
  
  onReady: function() {
    // 获取系统信息
    wx.getSystemInfo({
      success: (res) => {
        const windowWidth = res.windowWidth;
        this.setData({ screenWidth: windowWidth });
        
        // 初始化所有图表，每个部分只创建一个图表
        this.drawPriceChart();
        this.drawPlatformChart();
        this.drawTimingChart();
        this.drawInventoryChart();
      }
    });
    
    // 添加表格滚动指示动画
    setTimeout(() => {
      const tableContainer = wx.createSelectorQuery().select('.table-container');
      if (tableContainer) {
        tableContainer.scrollOffset(res => {
          if (res && res.scrollWidth > res.width) {
            // 如果表格需要横向滚动，短暂显示提示动画
            this.setData({ scrollProgress: 15 });
            setTimeout(() => {
              this.setData({ scrollProgress: 0 });
            }, 1500);
          }
        }).exec();
      }
    }, 1000);
  },
  
  // 处理表格滚动，更新进度条
  handleTableScroll: function(e) {
    // 计算水平滚动进度
    const { scrollLeft, scrollWidth, offsetWidth } = e.detail;
    const progress = Math.min(100, (scrollLeft / (scrollWidth - offsetWidth)) * 100);
    
    this.setData({
      scrollProgress: progress || 0
    });
  },
  
  // 绘制价格走势图 - 修改为根据当前选择的时间周期绘制
  drawPriceChart: function() {
    const ctx = wx.createCanvasContext('priceChart');
    const period = this.data.timePeriod; // 获取当前选择的时间周期
    
    // 设置画布背景
    ctx.setFillStyle('#0d2546');
    ctx.fillRect(0, 0, 400, 250);
    
    // 绘制坐标轴
    ctx.beginPath();
    ctx.setStrokeStyle('#e6f1ff');
    ctx.setLineWidth(1);
    ctx.moveTo(50, 210);
    ctx.lineTo(350, 210); // x轴
    ctx.moveTo(50, 30);
    ctx.lineTo(50, 210); // y轴
    ctx.stroke();
    
    // 根据不同时间周期选择不同的数据集
    let realPriceData = [];
    let forecastPriceData = [];
    let labels = [];
    
    // 根据选择的时间周期设置不同的数据
    switch(period) {
      case 'week':
        labels = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
        realPriceData = [5.2, 5.15, 5.3, 5.25, 5.4, 5.5, 5.48];
        forecastPriceData = [null, null, null, null, null, 5.5, 5.48];
        break;
      case 'month':
        labels = ['9/15', '9/20', '9/25', '9/30', '10/5', '10/10', '10/15', '10/20', '10/25', '10/30', '11/5', '11/10'];
        realPriceData = [5.1, 5.2, 5.3, 5.25, 5.4, 5.5, 5.48, null, null, null, null, null];
        forecastPriceData = [null, null, null, null, null, null, 5.48, 5.6, 5.7, 5.8, 5.85, 5.9];
        break;
      case 'quarter':
        labels = ['7月', '8月', '9月', '10月', '11月', '12月'];
        realPriceData = [4.8, 4.9, 5.1, 5.3, null, null];
        forecastPriceData = [null, null, null, 5.3, 5.7, 5.9];
        break;
      case 'year':
        labels = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
        realPriceData = [6.2, 6.0, 5.8, 5.5, 5.3, 5.0, 4.8, 4.9, 5.1, 5.3, null, null];
        forecastPriceData = [null, null, null, null, null, null, null, null, null, 5.3, 5.7, 5.9];
        break;
    }
    
    // 计算X轴刻度间距
    const xStep = 300 / (labels.length - 1);
    
    // 绘制实际价格线
    ctx.beginPath();
    ctx.setStrokeStyle('#38bdf8');
    ctx.setLineWidth(2);
    ctx.setLineJoin('round');
    
    let firstPointDrawn = false;
    
    for (let i = 0; i < labels.length; i++) {
      if (realPriceData[i] === null || realPriceData[i] === undefined) continue;
      
      const x = 50 + i * xStep;
      const y = 210 - (realPriceData[i] - 4.8) * 100;
      
      if (!firstPointDrawn) {
        ctx.moveTo(x, y);
        firstPointDrawn = true;
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();
    
    // 找到实际价格的最后一个有效点
    let lastValidIndex = -1;
    let lastValidX = 0;
    let lastValidY = 0;
    
    for (let i = 0; i < realPriceData.length; i++) {
      if (realPriceData[i] !== null && realPriceData[i] !== undefined) {
        lastValidIndex = i;
        lastValidX = 50 + i * xStep;
        lastValidY = 210 - (realPriceData[i] - 4.8) * 100;
      }
    }
    
    // 绘制预测价格线
    if (lastValidIndex >= 0) {
      ctx.beginPath();
      ctx.setStrokeStyle('#f59e0b');
      ctx.setLineWidth(2);
      ctx.setLineDash([5, 5]);
      
      ctx.moveTo(lastValidX, lastValidY);
      
      firstPointDrawn = false;
      for (let i = lastValidIndex; i < labels.length; i++) {
        if (forecastPriceData[i] === null || forecastPriceData[i] === undefined) continue;
        
        const x = 50 + i * xStep;
        const y = 210 - (forecastPriceData[i] - 4.8) * 100;
        
        ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.setLineDash([]);
    }
    
    // 绘制数据点
    for (let i = 0; i < labels.length; i++) {
      // 绘制实际价格点
      if (realPriceData[i] !== null && realPriceData[i] !== undefined) {
        const x = 50 + i * xStep;
        const y = 210 - (realPriceData[i] - 4.8) * 100;
        
        ctx.beginPath();
        ctx.setFillStyle('#38bdf8');
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fill();
      }
      
      // 绘制预测价格点
      if (forecastPriceData[i] !== null && forecastPriceData[i] !== undefined) {
        const x = 50 + i * xStep;
        const y = 210 - (forecastPriceData[i] - 4.8) * 100;
        
        ctx.beginPath();
        ctx.setFillStyle('#f59e0b');
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // 绘制X轴标签
    ctx.setFillStyle('#e6f1ff');
    ctx.setFontSize(10);
    ctx.setTextAlign('center');
    
    // 根据标签数量调整显示频率
    let labelStep = Math.ceil(labels.length / 8); // 最多显示8个标签
    
    for (let i = 0; i < labels.length; i += labelStep) {
      const x = 50 + i * xStep;
      ctx.fillText(labels[i], x, 230);
    }
    
    // 绘制图例
    ctx.setTextAlign('left');
    
    // 实际价格图例
    ctx.beginPath();
    ctx.setFillStyle('#38bdf8');
    ctx.fillRect(230, 20, 15, 5);
    ctx.setFillStyle('#e6f1ff');
    ctx.fillText('实际价格', 250, 25);
    
    // 预测价格图例
    ctx.beginPath();
    ctx.setFillStyle('#f59e0b');
    ctx.fillRect(230, 35, 15, 5);
    ctx.setFillStyle('#e6f1ff');
    ctx.fillText('AI预测价格', 250, 40);
    
    // 完成绘制
    ctx.draw();
  },
  
  // 绘制平台销量对比图 - 根据当前选择的标签页绘制不同数据
  drawPlatformChart: function() {
    const ctx = wx.createCanvasContext('platformChart');
    const tab = this.data.currentTab; // 获取当前选择的标签页
    
    // 获取系统信息以适应屏幕宽度
    const screenWidth = this.data.screenWidth;
    const fontSize = screenWidth < 375 ? 8 : 10; // 根据屏幕宽度调整字体大小
    const barWidth = screenWidth < 375 ? 30 : 40; // 根据屏幕宽度调整柱宽
    
    // 设置画布背景
    ctx.setFillStyle('#0d2546');
    ctx.fillRect(0, 0, 400, 250);
    
    // 绘制坐标轴
    ctx.beginPath();
    ctx.setStrokeStyle('#e6f1ff');
    ctx.setLineWidth(1);
    ctx.moveTo(40, 210); // 左边界减少，为窄屏留更多空间
    ctx.lineTo(350, 210); // x轴
    ctx.moveTo(40, 30);
    ctx.lineTo(40, 210); // y轴
    ctx.stroke();
    
    const platformNames = ['京东', '淘宝', '拼多多'];
    const barSpacing = screenWidth < 375 ? 40 : 50; // 根据屏幕宽度调整间距
    
    // 根据不同标签页选择不同的数据集和图表类型
    let barData = [];
    let lineData1 = [];
    let lineData2 = [];
    let barLabel = '';
    let lineLabel1 = '';
    let lineLabel2 = '';
    let barColor = '#3b82f6';
    let lineColor1 = '#f59e0b';
    let lineColor2 = '#10b981';
    
    switch(tab) {
      case 'sales': // 销量对比
        barData = [18, 25, 32]; // 销量
        lineData1 = [5.50, 5.20, 4.80]; // 平均价格
        lineData2 = [22, 19.5, 15]; // 利润率
        barLabel = '销量(吨)';
        lineLabel1 = '平均价格(元/斤)';
        lineLabel2 = '利润率(%)';
        break;
      case 'price': // 价格区间分布
        barData = [6.2, 5.8, 5.0]; // 最高价
        lineData1 = [5.0, 4.6, 4.2]; // 最低价
        lineData2 = [5.5, 5.2, 4.6]; // 平均价
        barLabel = '最高价(元/斤)';
        lineLabel1 = '最低价(元/斤)';
        lineLabel2 = '平均价(元/斤)';
        barColor = '#f87171';
        lineColor1 = '#4ade80';
        lineColor2 = '#f59e0b';
        break;
      case 'review': // 消费者评价
        barData = [4.6, 4.2, 3.8]; // 评分
        lineData1 = [95, 85, 70]; // 好评率
        lineData2 = [28, 35, 42]; // 评价数量
        barLabel = '平均评分';
        lineLabel1 = '好评率(%)';
        lineLabel2 = '评价量(百)';
        barColor = '#a78bfa';
        lineColor1 = '#4ade80';
        lineColor2 = '#f97316';
        break;
      case 'profit': // 利润率分析
        barData = [18, 22, 26]; // 毛利率
        lineData1 = [15, 16, 12]; // 纯利润率
        lineData2 = [3, 6, 14]; // 费用率
        barLabel = '毛利率(%)';
        lineLabel1 = '纯利润(%)';
        lineLabel2 = '费用率(%)';
        barColor = '#10b981';
        lineColor1 = '#3b82f6';
        lineColor2 = '#f87171';
        break;
    }

    // 计算Y轴的最大值，确保所有数据都在范围内
    const allValues = [...barData, ...lineData1, ...lineData2];
    const maxValue = Math.max(...allValues) * 1.2; // 增加20%空间
    
    // 绘制柱状图数据
    for (let i = 0; i < platformNames.length; i++) {
      // 计算柱状图位置和高度
      const barHeight = (barData[i] / maxValue) * 180;
      const x = 70 + i * barSpacing;
      const y = 210 - barHeight;
      
      // 绘制柱子
      ctx.setFillStyle(barColor);
      ctx.fillRect(x, y, barWidth, barHeight);
      
      // 绘制平台名称
      ctx.setFillStyle('#e6f1ff');
      ctx.setTextAlign('center');
      ctx.setFontSize(fontSize);
      ctx.fillText(platformNames[i], x + barWidth / 2, 225);
      
      // 绘制数值
      ctx.setFillStyle('#e6f1ff');
      ctx.fillText(barData[i], x + barWidth / 2, y - 5);
    }
    
    // 绘制第一条线图数据
    ctx.beginPath();
    ctx.setStrokeStyle(lineColor1);
    ctx.setLineWidth(2);
    
    for (let i = 0; i < platformNames.length; i++) {
      const x = 70 + i * barSpacing + barWidth / 2;
      const y = 210 - (lineData1[i] / maxValue) * 180;
      
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();
    
    // 绘制第一条线的数据点和标签
    for (let i = 0; i < platformNames.length; i++) {
      const x = 70 + i * barSpacing + barWidth / 2;
      const y = 210 - (lineData1[i] / maxValue) * 180;
      
      ctx.beginPath();
      ctx.setFillStyle(lineColor1);
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fill();
      
      // 显示数值，根据需要添加单位前缀
      ctx.setTextAlign('center');
      ctx.setFillStyle(lineColor1);
      const prefix = tab === 'sales' || tab === 'price' ? '¥' : '';
      ctx.fillText(prefix + lineData1[i], x, y - 10);
    }
    
    // 绘制第二条线图数据
    ctx.beginPath();
    ctx.setStrokeStyle(lineColor2);
    ctx.setLineWidth(2);
    
    for (let i = 0; i < platformNames.length; i++) {
      const x = 70 + i * barSpacing + barWidth / 2;
      const y = 210 - (lineData2[i] / maxValue) * 180;
      
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();
    
    // 绘制第二条线的数据点和标签
    for (let i = 0; i < platformNames.length; i++) {
      const x = 70 + i * barSpacing + barWidth / 2;
      const y = 210 - (lineData2[i] / maxValue) * 180;
      
      ctx.beginPath();
      ctx.setFillStyle(lineColor2);
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // 绘制图例 - 在窄屏上垂直排列
    ctx.setTextAlign('left');
    ctx.setFontSize(fontSize);
    
    // 第一个图例（柱状图）
    const legendX = screenWidth < 375 ? 40 : 220;
    const legendY = screenWidth < 375 ? 20 : 20;
    
    ctx.setFillStyle(barColor);
    ctx.fillRect(legendX, legendY, 12, 8);
    ctx.setFillStyle('#e6f1ff');
    ctx.fillText(barLabel, legendX + 15, legendY + 8);
    
    // 第二个图例（线图1）
    ctx.setFillStyle(lineColor1);
    ctx.fillRect(legendX, legendY + 15, 12, 2);
    ctx.setFillStyle('#e6f1ff');
    ctx.fillText(lineLabel1, legendX + 15, legendY + 23);
    
    // 第三个图例（线图2）
    ctx.setFillStyle(lineColor2);
    ctx.fillRect(legendX, legendY + 30, 12, 2);
    ctx.setFillStyle('#e6f1ff');
    ctx.fillText(lineLabel2, legendX + 15, legendY + 38);
    
    // 完成绘制
    ctx.draw();
  },
  
  // 绘制销售时机图
  drawTimingChart: function() {
    const ctx = wx.createCanvasContext('timingChart');
    
    // 设置画布背景
    ctx.setFillStyle('#0d2546');
    ctx.fillRect(0, 0, 400, 250);
    
    // 绘制坐标轴
    ctx.beginPath();
    ctx.setStrokeStyle('#e6f1ff');
    ctx.setLineWidth(1);
    ctx.moveTo(50, 210);
    ctx.lineTo(350, 210); // x轴
    ctx.moveTo(50, 30);
    ctx.lineTo(50, 210); // y轴
    ctx.stroke();
    
    // 绘制周几数据
    const weekdays = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
    const spacing = 40;
    
    // 绘制三条线
    const salesData = [120, 132, 101, 134, 160, 230, 210];
    const priceData = [210, 220, 225, 240, 260, 280, 265];
    const profitData = [150, 160, 170, 195, 230, 252, 245];
    
    // 销量线
    ctx.beginPath();
    ctx.setStrokeStyle('#3b82f6');
    ctx.setLineWidth(2);
    
    for (let i = 0; i < weekdays.length; i++) {
      const x = 70 + i * spacing;
      const y = 210 - salesData[i] * 0.3;
      
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();
    
    // 销量点
    for (let i = 0; i < weekdays.length; i++) {
      const x = 70 + i * spacing;
      const y = 210 - salesData[i] * 0.3;
      
      ctx.beginPath();
      ctx.setFillStyle('#3b82f6');
      ctx.arc(x, y, 3, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // 价格线
    ctx.beginPath();
    ctx.setStrokeStyle('#f59e0b');
    ctx.setLineWidth(2);
    
    for (let i = 0; i < weekdays.length; i++) {
      const x = 70 + i * spacing;
      const y = 210 - priceData[i] * 0.3;
      
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();
    
    // 价格点
    for (let i = 0; i < weekdays.length; i++) {
      const x = 70 + i * spacing;
      const y = 210 - priceData[i] * 0.3;
      
      ctx.beginPath();
      ctx.setFillStyle('#f59e0b');
      ctx.arc(x, y, 3, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // 利润线
    ctx.beginPath();
    ctx.setStrokeStyle('#10b981');
    ctx.setLineWidth(2);
    
    for (let i = 0; i < weekdays.length; i++) {
      const x = 70 + i * spacing;
      const y = 210 - profitData[i] * 0.3;
      
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();
    
    // 利润点
    for (let i = 0; i < weekdays.length; i++) {
      const x = 70 + i * spacing;
      const y = 210 - profitData[i] * 0.3;
      
      ctx.beginPath();
      ctx.setFillStyle('#10b981');
      ctx.arc(x, y, 3, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // 绘制x轴标签
    ctx.setFillStyle('#e6f1ff');
    ctx.setTextAlign('center');
    ctx.setFontSize(10);
    
    for (let i = 0; i < weekdays.length; i++) {
      const x = 70 + i * spacing;
      ctx.fillText(weekdays[i], x, 225);
    }
    
    // 绘制图例
    ctx.setTextAlign('left');
    
    // 销量图例
    ctx.setFillStyle('#3b82f6');
    ctx.fillRect(230, 20, 15, 2);
    ctx.setFillStyle('#e6f1ff');
    ctx.fillText('销量趋势', 250, 25);
    
    // 价格图例
    ctx.setFillStyle('#f59e0b');
    ctx.fillRect(230, 35, 15, 2);
    ctx.setFillStyle('#e6f1ff');
    ctx.fillText('价格趋势', 250, 40);
    
    // 利润图例
    ctx.setFillStyle('#10b981');
    ctx.fillRect(230, 50, 15, 2);
    ctx.setFillStyle('#e6f1ff');
    ctx.fillText('利润指数', 250, 55);
    
    // 完成绘制
    ctx.draw();
  },
  
  // 绘制库存图表
  drawInventoryChart: function() {
    const ctx = wx.createCanvasContext('inventoryChart');
    
    // 设置画布背景
    ctx.setFillStyle('#0d2546');
    ctx.fillRect(0, 0, 400, 250);
    
    // 绘制坐标轴
    ctx.beginPath();
    ctx.setStrokeStyle('#e6f1ff');
    ctx.setLineWidth(1);
    ctx.moveTo(50, 210);
    ctx.lineTo(350, 210); // x轴
    ctx.moveTo(50, 30);
    ctx.lineTo(50, 210); // y轴
    ctx.stroke();
    
    // 日期数据
    const dates = ['10/15', '10/20', '10/25', '10/30', '11/5', '11/10', '11/15'];
    const spacing = 40;
    
    // 绘制库存柱状图
    const inventoryData = [1200, 1050, 900, 750, 580, 450, 320]; // 最大值1200
    const barWidth = 25;
    
    for (let i = 0; i < dates.length; i++) {
      const barHeight = inventoryData[i] / 10;
      const x = 70 + i * spacing;
      const y = 210 - barHeight;
      
      ctx.setFillStyle('#60a5fa');
      ctx.fillRect(x - barWidth/2, y, barWidth, barHeight);
    }
    
    // 绘制销量预测线
    const salesData = [150, 180, 200, 220, 240, 250, 270];
    
    ctx.beginPath();
    ctx.setStrokeStyle('#f59e0b');
    ctx.setLineWidth(2);
    
    for (let i = 0; i < dates.length; i++) {
      const x = 70 + i * spacing;
      const y = 210 - salesData[i] / 2;
      
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();
    
    // 绘制最佳库存线
    const optimalInventoryData = [950, 880, 800, 720, 650, 580, 500];
    
    ctx.beginPath();
    ctx.setStrokeStyle('#10b981');
    ctx.setLineWidth(2);
    ctx.setLineDash([5, 5]);
    
    for (let i = 0; i < dates.length; i++) {
      const x = 70 + i * spacing;
      const y = 210 - optimalInventoryData[i] / 10;
      
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();
    ctx.setLineDash([]);
    
    // 绘制日期标签
    ctx.setFillStyle('#e6f1ff');
    ctx.setTextAlign('center');
    ctx.setFontSize(10);
    
    for (let i = 0; i < dates.length; i++) {
      const x = 70 + i * spacing;
      ctx.fillText(dates[i], x, 225);
    }
    
    // 绘制图例
    ctx.setTextAlign('left');
    
    // 库存图例
    ctx.setFillStyle('#60a5fa');
    ctx.fillRect(230, 20, 15, 10);
    ctx.setFillStyle('#e6f1ff');
    ctx.fillText('库存量', 250, 25);
    
    // 销量预测图例
    ctx.setFillStyle('#f59e0b');
    ctx.fillRect(230, 35, 15, 2);
    ctx.setFillStyle('#e6f1ff');
    ctx.fillText('销量预测', 250, 40);
    
    // 最佳库存图例
    ctx.setFillStyle('#10b981');
    ctx.fillRect(230, 50, 15, 2);
    ctx.setFillStyle('#e6f1ff');
    ctx.fillText('最佳库存', 250, 55);
    
    // 完成绘制
    ctx.draw();
  },
  
  // 触摸事件处理
  touchHandler: function(e) {
    // 这里可以添加触摸交互逻辑
    console.log(e);
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
    
    // 重新绘制图表
    setTimeout(() => {
      this.drawPriceChart();
      this.drawPlatformChart();
      this.drawTimingChart();
      this.drawInventoryChart();
    }, 100);
  },
  
  bindProductChange: function(e) {
    this.setData({
      productIndex: e.detail.value
    });
    // 重新绘制图表
    setTimeout(() => {
      this.drawPriceChart();
      this.drawPlatformChart();
      this.drawTimingChart();
      this.drawInventoryChart();
    }, 100);
  },
  
  bindRegionChange: function(e) {
    this.setData({
      regionIndex: e.detail.value
    });
    // 重新绘制图表
    setTimeout(() => {
      this.drawPriceChart();
      this.drawPlatformChart();
      this.drawTimingChart();
      this.drawInventoryChart();
    }, 100);
  },
  
  bindTimeChange: function(e) {
    this.setData({
      timeIndex: e.detail.value
    });
    // 重新绘制图表
    setTimeout(() => {
      this.drawPriceChart();
      this.drawPlatformChart();
      this.drawTimingChart();
      this.drawInventoryChart();
    }, 100);
  },
  
  // 切换时间周期处理函数
  switchTimePeriod: function(e) {
    const period = e.currentTarget.dataset.period;
    this.setData({
      timePeriod: period
    });
    // 更新价格走势图，使用同一个图表但切换数据
    setTimeout(() => {
      this.drawPriceChart();
    }, 100);
  },
  
  // 切换标签页处理函数
  switchTab: function(e) {
    const tab = e.currentTarget.dataset.tab;
    this.setData({
      currentTab: tab
    });
    // 更新平台销量对比图，使用同一个图表但切换数据
    setTimeout(() => {
      this.drawPlatformChart();
    }, 100);
  },
  
  onPullDownRefresh: function() {
    // 重新绘制图表
    setTimeout(() => {
      this.drawPriceChart();
      this.drawPlatformChart();
      this.drawTimingChart();
      this.drawInventoryChart();
      wx.stopPullDownRefresh();
    }, 1000);
  },
  
  onShareAppMessage: function() {
    return {
      title: '农产品数据分析平台',
      path: '/pages/analysis/analysis'
    };
  }
});
