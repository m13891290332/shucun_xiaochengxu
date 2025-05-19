/**
 * 微信小程序图表工具类 - 简化版
 * 基于canvas绘制
 */

class WxCharts {
  constructor(opts) {
    this.opts = opts;
    this.canvas = wx.createCanvasContext(opts.canvasId, opts.context);
    this.canvasId = opts.canvasId;
    this.config = {};
    this.config.width = opts.width || 300;
    this.config.height = opts.height || 200;
    this.config.type = opts.type || 'line';
    this.config.dataLabel = opts.dataLabel !== false;
    this.config.dataPointShape = opts.dataPointShape !== false;
    this.config.enableScroll = opts.enableScroll || false;
    this.config.xAxis = opts.xAxis || {};
    this.config.yAxis = opts.yAxis || {};
    this.config.extra = opts.extra || {};
    this.config.legend = opts.legend !== false;
    this.config.animation = opts.animation !== false;
    this.config.background = opts.background || '#0d2546';
    this.config.fontSize = opts.fontSize || 11;
    this.config.fontColor = opts.fontColor || '#e6f1ff';
    this.config.pixelRatio = opts.pixelRatio || 1;
    this.config.rotate = opts.rotate || false;
    this.config.categories = opts.categories || [];
    this.config.series = opts.series || [];
    this.config.padding = opts.padding || [10, 10, 10, 10];
    this.config.yAxisTitleWidth = opts.yAxisTitleWidth || 0;
    this.config.enableMarkLine = opts.enableMarkLine || false;
    this.config.disablePieStroke = opts.disablePieStroke || false;
    this.config.pieChartLinePadding = opts.pieChartLinePadding || 15;
    this.config.pieChartTextPadding = opts.pieChartTextPadding || 5;
    this.renderTo();
  }

  renderTo() {
    switch (this.config.type) {
      case 'line':
        this.drawLineChart();
        break;
      case 'column':
        this.drawColumnChart();
        break;
      case 'area':
        this.drawAreaChart();
        break;
      case 'pie':
        this.drawPieChart();
        break;
      case 'ring':
        this.drawRingChart();
        break;
      case 'radar':
        this.drawRadarChart();
        break;
      default:
        this.drawLineChart();
    }
  }

  drawLineChart() {
    const { config } = this;
    const { width, height, padding, categories, series, background, fontColor, fontSize } = config;
    const ctx = this.canvas;
    
    // 绘制背景
    ctx.setFillStyle(background);
    ctx.fillRect(0, 0, width, height);
    
    const paddingLeft = padding[3];
    const paddingRight = padding[1];
    const paddingTop = padding[0];
    const paddingBottom = padding[2];
    
    // 计算图表区域
    const chartWidth = width - paddingLeft - paddingRight;
    const chartHeight = height - paddingTop - paddingBottom;
    
    // X轴刻度数量
    const xLength = categories.length;
    const xStep = chartWidth / xLength;
    
    // 找出y轴的最大值和最小值
    let yMax = 0;
    let yMin = Infinity;
    series.forEach(serie => {
      serie.data.forEach(item => {
        if (item !== null && item !== undefined) {
          yMax = Math.max(yMax, item);
          yMin = Math.min(yMin, item);
        }
      });
    });
    
    // 处理y轴最小值为0的情况
    if (yMin > 0) {
      yMin = 0;
    }
    // 为了视觉效果，y轴最大值做一点调整
    yMax = yMax * 1.1;
    
    // 计算y轴刻度
    const yLength = 5;
    const yStep = chartHeight / yLength;
    const yValueStep = (yMax - yMin) / yLength;
    
    // 绘制坐标轴
    ctx.setLineWidth(1);
    ctx.setStrokeStyle(fontColor);
    ctx.setFontSize(fontSize);
    
    // 绘制x轴
    ctx.beginPath();
    ctx.moveTo(paddingLeft, height - paddingBottom);
    ctx.lineTo(width - paddingRight, height - paddingBottom);
    ctx.stroke();
    
    // 绘制x轴刻度和标签
    for (let i = 0; i < xLength; i++) {
      const x = paddingLeft + i * xStep;
      ctx.beginPath();
      ctx.moveTo(x, height - paddingBottom);
      ctx.lineTo(x, height - paddingBottom + 5);
      ctx.stroke();
      
      ctx.setTextAlign('center');
      ctx.setTextBaseline('top');
      ctx.setFillStyle(fontColor);
      ctx.fillText(categories[i], x, height - paddingBottom + 10);
    }
    
    // 绘制y轴
    ctx.beginPath();
    ctx.moveTo(paddingLeft, paddingTop);
    ctx.lineTo(paddingLeft, height - paddingBottom);
    ctx.stroke();
    
    // 绘制y轴刻度和标签
    for (let i = 0; i <= yLength; i++) {
      const y = height - paddingBottom - i * yStep;
      const yValue = yMin + i * yValueStep;
      
      ctx.beginPath();
      ctx.moveTo(paddingLeft, y);
      ctx.lineTo(paddingLeft - 5, y);
      ctx.stroke();
      
      ctx.setTextAlign('right');
      ctx.setTextBaseline('middle');
      ctx.fillText(yValue.toFixed(1), paddingLeft - 10, y);
      
      // 绘制网格线
      ctx.setLineWidth(0.5);
      ctx.setStrokeStyle('rgba(255, 255, 255, 0.1)');
      ctx.beginPath();
      ctx.moveTo(paddingLeft, y);
      ctx.lineTo(width - paddingRight, y);
      ctx.stroke();
      ctx.setLineWidth(1);
      ctx.setStrokeStyle(fontColor);
    }
    
    // 绘制数据线
    const colors = ['#38bdf8', '#f59e0b', '#10b981', '#a78bfa', '#ec4899'];
    
    // 绘制图例
    if (config.legend) {
      const legendHeight = 20;
      const legendWidth = 120;
      const legendSpacing = 15;
      let startX = (width - (legendWidth * series.length + legendSpacing * (series.length - 1))) / 2;
      const legendY = paddingTop / 2;
      
      series.forEach((serie, index) => {
        const color = serie.color || colors[index % colors.length];
        
        // 绘制图例颜色块
        ctx.setFillStyle(color);
        ctx.fillRect(startX, legendY, 15, 6);
        
        // 绘制图例文本
        ctx.setFillStyle(fontColor);
        ctx.setTextAlign('left');
        ctx.setTextBaseline('middle');
        ctx.fillText(serie.name, startX + 20, legendY + 3);
        
        startX += legendWidth;
      });
    }
    
    // 绘制数据线和点
    series.forEach((serie, serieIndex) => {
      const color = serie.color || colors[serieIndex % colors.length];
      const data = serie.data;
      
      ctx.beginPath();
      ctx.setLineWidth(2);
      ctx.setStrokeStyle(color);
      
      let isFirstPoint = true;
      
      for (let i = 0; i < xLength; i++) {
        if (data[i] === null || data[i] === undefined) continue;
        
        const x = paddingLeft + i * xStep;
        const y = height - paddingBottom - ((data[i] - yMin) / (yMax - yMin)) * chartHeight;
        
        if (isFirstPoint) {
          ctx.moveTo(x, y);
          isFirstPoint = false;
        } else {
          ctx.lineTo(x, y);
        }
      }
      
      ctx.stroke();
      
      // 绘制数据点
      for (let i = 0; i < xLength; i++) {
        if (data[i] === null || data[i] === undefined) continue;
        
        const x = paddingLeft + i * xStep;
        const y = height - paddingBottom - ((data[i] - yMin) / (yMax - yMin)) * chartHeight;
        
        ctx.beginPath();
        ctx.setFillStyle(color);
        ctx.arc(x, y, 3, 0, 2 * Math.PI);
        ctx.fill();
      }
    });
    
    // 完成绘制
    ctx.draw();
  }
  
  drawColumnChart() {
    const { config } = this;
    const { width, height, padding, categories, series, background, fontColor, fontSize } = config;
    const ctx = this.canvas;
    
    // 绘制背景
    ctx.setFillStyle(background);
    ctx.fillRect(0, 0, width, height);
    
    const paddingLeft = padding[3];
    const paddingRight = padding[1];
    const paddingTop = padding[0];
    const paddingBottom = padding[2];
    
    // 计算图表区域
    const chartWidth = width - paddingLeft - paddingRight;
    const chartHeight = height - paddingTop - paddingBottom;
    
    // X轴刻度数量
    const xLength = categories.length;
    const xStep = chartWidth / xLength;
    
    // 找出y轴的最大值和最小值
    let yMax = 0;
    let yMin = Infinity;
    series.forEach(serie => {
      serie.data.forEach(item => {
        if (item !== null && item !== undefined) {
          yMax = Math.max(yMax, item);
          yMin = Math.min(yMin, item);
        }
      });
    });
    
    // 处理y轴最小值为0的情况
    if (yMin > 0) {
      yMin = 0;
    }
    // 为了视觉效果，y轴最大值做一点调整
    yMax = yMax * 1.1;
    
    // 计算y轴刻度
    const yLength = 5;
    const yStep = chartHeight / yLength;
    const yValueStep = (yMax - yMin) / yLength;
    
    // 绘制坐标轴
    ctx.setLineWidth(1);
    ctx.setStrokeStyle(fontColor);
    ctx.setFontSize(fontSize);
    
    // 绘制x轴
    ctx.beginPath();
    ctx.moveTo(paddingLeft, height - paddingBottom);
    ctx.lineTo(width - paddingRight, height - paddingBottom);
    ctx.stroke();
    
    // 绘制x轴刻度和标签
    for (let i = 0; i < xLength; i++) {
      const x = paddingLeft + (i + 0.5) * xStep;
      ctx.beginPath();
      ctx.moveTo(x, height - paddingBottom);
      ctx.lineTo(x, height - paddingBottom + 5);
      ctx.stroke();
      
      ctx.setTextAlign('center');
      ctx.setTextBaseline('top');
      ctx.setFillStyle(fontColor);
      ctx.fillText(categories[i], x, height - paddingBottom + 10);
    }
    
    // 绘制y轴
    ctx.beginPath();
    ctx.moveTo(paddingLeft, paddingTop);
    ctx.lineTo(paddingLeft, height - paddingBottom);
    ctx.stroke();
    
    // 绘制y轴刻度和标签
    for (let i = 0; i <= yLength; i++) {
      const y = height - paddingBottom - i * yStep;
      const yValue = yMin + i * yValueStep;
      
      ctx.beginPath();
      ctx.moveTo(paddingLeft, y);
      ctx.lineTo(paddingLeft - 5, y);
      ctx.stroke();
      
      ctx.setTextAlign('right');
      ctx.setTextBaseline('middle');
      ctx.fillText(yValue.toFixed(1), paddingLeft - 10, y);
      
      // 绘制网格线
      ctx.setLineWidth(0.5);
      ctx.setStrokeStyle('rgba(255, 255, 255, 0.1)');
      ctx.beginPath();
      ctx.moveTo(paddingLeft, y);
      ctx.lineTo(width - paddingRight, y);
      ctx.stroke();
      ctx.setLineWidth(1);
      ctx.setStrokeStyle(fontColor);
    }
    
    // 绘制数据条
    const colors = ['#3b82f6', '#f59e0b', '#10b981', '#a78bfa', '#ec4899'];
    const barWidth = xStep * 0.6 / series.length;
    const barSpacing = xStep * 0.4 / (series.length + 1);
    
    // 绘制图例
    if (config.legend) {
      const legendHeight = 20;
      const legendWidth = 120;
      const legendSpacing = 15;
      let startX = (width - (legendWidth * series.length + legendSpacing * (series.length - 1))) / 2;
      const legendY = paddingTop / 2;
      
      series.forEach((serie, index) => {
        const color = serie.color || colors[index % colors.length];
        
        // 绘制图例颜色块
        ctx.setFillStyle(color);
        ctx.fillRect(startX, legendY, 15, 6);
        
        // 绘制图例文本
        ctx.setFillStyle(fontColor);
        ctx.setTextAlign('left');
        ctx.setTextBaseline('middle');
        ctx.fillText(serie.name, startX + 20, legendY + 3);
        
        startX += legendWidth;
      });
    }
    
    // 绘制柱状图数据
    series.forEach((serie, serieIndex) => {
      const color = serie.color || colors[serieIndex % colors.length];
      const data = serie.data;
      
      for (let i = 0; i < xLength; i++) {
        if (data[i] === null || data[i] === undefined) continue;
        
        const barHeight = ((data[i] - yMin) / (yMax - yMin)) * chartHeight;
        const x = paddingLeft + i * xStep + barSpacing * (serieIndex + 1) + barWidth * serieIndex;
        const y = height - paddingBottom - barHeight;
        
        ctx.setFillStyle(color);
        ctx.fillRect(x, y, barWidth, barHeight);
      }
    });
    
    // 完成绘制
    ctx.draw();
  }
  
  drawLineAndColumnChart() {
    const { config } = this;
    const { width, height, padding, categories, series, background, fontColor, fontSize } = config;
    const ctx = this.canvas;
    
    // 绘制背景
    ctx.setFillStyle(background);
    ctx.fillRect(0, 0, width, height);
    
    const paddingLeft = padding[3];
    const paddingRight = padding[1];
    const paddingTop = padding[0];
    const paddingBottom = padding[2];
    
    // 计算图表区域
    const chartWidth = width - paddingLeft - paddingRight;
    const chartHeight = height - paddingTop - paddingBottom;
    
    // X轴刻度数量
    const xLength = categories.length;
    const xStep = chartWidth / xLength;
    
    // 找出y轴的最大值和最小值
    let yMax = 0;
    let yMin = Infinity;
    series.forEach(serie => {
      if (serie.type === 'line' || serie.type === 'column') {
        serie.data.forEach(item => {
          if (item !== null && item !== undefined) {
            yMax = Math.max(yMax, item);
            yMin = Math.min(yMin, item);
          }
        });
      }
    });
    
    // 处理y轴最小值为0的情况
    if (yMin > 0) {
      yMin = 0;
    }
    // 为了视觉效果，y轴最大值做一点调整
    yMax = yMax * 1.1;
    
    // 计算y轴刻度
    const yLength = 5;
    const yStep = chartHeight / yLength;
    const yValueStep = (yMax - yMin) / yLength;
    
    // 绘制坐标轴
    ctx.setLineWidth(1);
    ctx.setStrokeStyle(fontColor);
    ctx.setFontSize(fontSize);
    
    // 绘制x轴
    ctx.beginPath();
    ctx.moveTo(paddingLeft, height - paddingBottom);
    ctx.lineTo(width - paddingRight, height - paddingBottom);
    ctx.stroke();
    
    // 绘制x轴刻度和标签
    for (let i = 0; i < xLength; i++) {
      const x = paddingLeft + (i + 0.5) * xStep;
      ctx.beginPath();
      ctx.moveTo(x, height - paddingBottom);
      ctx.lineTo(x, height - paddingBottom + 5);
      ctx.stroke();
      
      ctx.setTextAlign('center');
      ctx.setTextBaseline('top');
      ctx.setFillStyle(fontColor);
      ctx.fillText(categories[i], x, height - paddingBottom + 10);
    }
    
    // 绘制y轴
    ctx.beginPath();
    ctx.moveTo(paddingLeft, paddingTop);
    ctx.lineTo(paddingLeft, height - paddingBottom);
    ctx.stroke();
    
    // 绘制y轴刻度和标签
    for (let i = 0; i <= yLength; i++) {
      const y = height - paddingBottom - i * yStep;
      const yValue = yMin + i * yValueStep;
      
      ctx.beginPath();
      ctx.moveTo(paddingLeft, y);
      ctx.lineTo(paddingLeft - 5, y);
      ctx.stroke();
      
      ctx.setTextAlign('right');
      ctx.setTextBaseline('middle');
      ctx.fillText(yValue.toFixed(1), paddingLeft - 10, y);
      
      // 绘制网格线
      ctx.setLineWidth(0.5);
      ctx.setStrokeStyle('rgba(255, 255, 255, 0.1)');
      ctx.beginPath();
      ctx.moveTo(paddingLeft, y);
      ctx.lineTo(width - paddingRight, y);
      ctx.stroke();
      ctx.setLineWidth(1);
      ctx.setStrokeStyle(fontColor);
    }
    
    // 绘制数据
    const colors = ['#3b82f6', '#f59e0b', '#10b981', '#a78bfa', '#ec4899'];
    
    // 先计算柱状图相关参数
    const columnSeries = series.filter(serie => serie.type === 'column');
    const barWidth = xStep * 0.6 / (columnSeries.length || 1);
    const barSpacing = columnSeries.length > 0 ? xStep * 0.4 / (columnSeries.length + 1) : 0;
    
    // 绘制图例
    if (config.legend) {
      const legendHeight = 20;
      const legendWidth = 120;
      const legendSpacing = 15;
      let startX = (width - (legendWidth * series.length + legendSpacing * (series.length - 1))) / 2;
      const legendY = paddingTop / 2;
      
      series.forEach((serie, index) => {
        const color = serie.color || colors[index % colors.length];
        
        // 绘制图例颜色块
        ctx.setFillStyle(color);
        ctx.fillRect(startX, legendY, 15, 6);
        
        // 绘制图例文本
        ctx.setFillStyle(fontColor);
        ctx.setTextAlign('left');
        ctx.setTextBaseline('middle');
        ctx.fillText(serie.name, startX + 20, legendY + 3);
        
        startX += legendWidth;
      });
    }
    
    // 先绘制柱状图
    let columnIndex = 0;
    series.forEach((serie, serieIndex) => {
      if (serie.type !== 'column') return;
      
      const color = serie.color || colors[serieIndex % colors.length];
      const data = serie.data;
      
      for (let i = 0; i < xLength; i++) {
        if (data[i] === null || data[i] === undefined) continue;
        
        const barHeight = ((data[i] - yMin) / (yMax - yMin)) * chartHeight;
        const x = paddingLeft + i * xStep + barSpacing * (columnIndex + 1) + barWidth * columnIndex;
        const y = height - paddingBottom - barHeight;
        
        ctx.setFillStyle(color);
        ctx.fillRect(x, y, barWidth, barHeight);
      }
      
      columnIndex++;
    });
    
    // 再绘制折线图
    series.forEach((serie, serieIndex) => {
      if (serie.type !== 'line') return;
      
      const color = serie.color || colors[serieIndex % colors.length];
      const data = serie.data;
      
      ctx.beginPath();
      ctx.setLineWidth(2);
      ctx.setStrokeStyle(color);
      
      let isFirstPoint = true;
      
      for (let i = 0; i < xLength; i++) {
        if (data[i] === null || data[i] === undefined) continue;
        
        const x = paddingLeft + (i + 0.5) * xStep;
        const y = height - paddingBottom - ((data[i] - yMin) / (yMax - yMin)) * chartHeight;
        
        if (isFirstPoint) {
          ctx.moveTo(x, y);
          isFirstPoint = false;
        } else {
          ctx.lineTo(x, y);
        }
      }
      
      ctx.stroke();
      
      // 绘制数据点
      for (let i = 0; i < xLength; i++) {
        if (data[i] === null || data[i] === undefined) continue;
        
        const x = paddingLeft + (i + 0.5) * xStep;
        const y = height - paddingBottom - ((data[i] - yMin) / (yMax - yMin)) * chartHeight;
        
        ctx.beginPath();
        ctx.setFillStyle(color);
        ctx.arc(x, y, 3, 0, 2 * Math.PI);
        ctx.fill();
      }
    });
    
    // 完成绘制
    ctx.draw();
  }

  drawAreaChart() {
    // 实现逻辑与drawLineChart类似，但增加了填充区域
    const { config } = this;
    const { width, height, padding, categories, series, background, fontColor, fontSize } = config;
    const ctx = this.canvas;
    
    // 绘制背景
    ctx.setFillStyle(background);
    ctx.fillRect(0, 0, width, height);
    
    const paddingLeft = padding[3];
    const paddingRight = padding[1];
    const paddingTop = padding[0];
    const paddingBottom = padding[2];
    
    // 计算图表区域
    const chartWidth = width - paddingLeft - paddingRight;
    const chartHeight = height - paddingTop - paddingBottom;
    
    // X轴刻度数量
    const xLength = categories.length;
    const xStep = chartWidth / xLength;
    
    // 找出y轴的最大值和最小值
    let yMax = 0;
    let yMin = Infinity;
    series.forEach(serie => {
      serie.data.forEach(item => {
        if (item !== null && item !== undefined) {
          yMax = Math.max(yMax, item);
          yMin = Math.min(yMin, item);
        }
      });
    });
    
    // 处理y轴最小值为0的情况
    if (yMin > 0) {
      yMin = 0;
    }
    // 为了视觉效果，y轴最大值做一点调整
    yMax = yMax * 1.1;
    
    // 计算y轴刻度
    const yLength = 5;
    const yStep = chartHeight / yLength;
    const yValueStep = (yMax - yMin) / yLength;
    
    // 绘制坐标轴
    ctx.setLineWidth(1);
    ctx.setStrokeStyle(fontColor);
    ctx.setFontSize(fontSize);
    
    // 绘制x轴
    ctx.beginPath();
    ctx.moveTo(paddingLeft, height - paddingBottom);
    ctx.lineTo(width - paddingRight, height - paddingBottom);
    ctx.stroke();
    
    // 绘制x轴刻度和标签
    for (let i = 0; i < xLength; i++) {
      const x = paddingLeft + i * xStep;
      ctx.beginPath();
      ctx.moveTo(x, height - paddingBottom);
      ctx.lineTo(x, height - paddingBottom + 5);
      ctx.stroke();
      
      ctx.setTextAlign('center');
      ctx.setTextBaseline('top');
      ctx.setFillStyle(fontColor);
      ctx.fillText(categories[i], x, height - paddingBottom + 10);
    }
    
    // 绘制y轴
    ctx.beginPath();
    ctx.moveTo(paddingLeft, paddingTop);
    ctx.lineTo(paddingLeft, height - paddingBottom);
    ctx.stroke();
    
    // 绘制y轴刻度和标签
    for (let i = 0; i <= yLength; i++) {
      const y = height - paddingBottom - i * yStep;
      const yValue = yMin + i * yValueStep;
      
      ctx.beginPath();
      ctx.moveTo(paddingLeft, y);
      ctx.lineTo(paddingLeft - 5, y);
      ctx.stroke();
      
      ctx.setTextAlign('right');
      ctx.setTextBaseline('middle');
      ctx.fillText(yValue.toFixed(1), paddingLeft - 10, y);
      
      // 绘制网格线
      ctx.setLineWidth(0.5);
      ctx.setStrokeStyle('rgba(255, 255, 255, 0.1)');
      ctx.beginPath();
      ctx.moveTo(paddingLeft, y);
      ctx.lineTo(width - paddingRight, y);
      ctx.stroke();
      ctx.setLineWidth(1);
      ctx.setStrokeStyle(fontColor);
    }
    
    // 绘制数据线和区域
    const colors = ['#38bdf8', '#f59e0b', '#10b981', '#a78bfa', '#ec4899'];
    
    // 绘制图例
    if (config.legend) {
      const legendHeight = 20;
      const legendWidth = 120;
      const legendSpacing = 15;
      let startX = (width - (legendWidth * series.length + legendSpacing * (series.length - 1))) / 2;
      const legendY = paddingTop / 2;
      
      series.forEach((serie, index) => {
        const color = serie.color || colors[index % colors.length];
        
        // 绘制图例颜色块
        ctx.setFillStyle(color);
        ctx.fillRect(startX, legendY, 15, 6);
        
        // 绘制图例文本
        ctx.setFillStyle(fontColor);
        ctx.setTextAlign('left');
        ctx.setTextBaseline('middle');
        ctx.fillText(serie.name, startX + 20, legendY + 3);
        
        startX += legendWidth;
      });
    }
    
    // 绘制数据线和区域
    series.forEach((serie, serieIndex) => {
      const color = serie.color || colors[serieIndex % colors.length];
      const data = serie.data;
      
      // 绘制填充区域
      ctx.beginPath();
      ctx.moveTo(paddingLeft, height - paddingBottom);
      
      // 先画一条从起点到x轴的线
      for (let i = 0; i < xLength; i++) {
        if (data[i] === null || data[i] === undefined) continue;
        
        const x = paddingLeft + i * xStep;
        const y = height - paddingBottom - ((data[i] - yMin) / (yMax - yMin)) * chartHeight;
        
        ctx.lineTo(x, y);
      }
      
      // 再画一条从终点到x轴的线，形成闭合区域
      ctx.lineTo(paddingLeft + (xLength - 1) * xStep, height - paddingBottom);
      
      // 填充区域颜色
      ctx.setFillStyle(`${color}30`);
      ctx.fill();
      
      // 绘制线条
      ctx.beginPath();
      let isFirstPoint = true;
      
      for (let i = 0; i < xLength; i++) {
        if (data[i] === null || data[i] === undefined) continue;
        
        const x = paddingLeft + i * xStep;
        const y = height - paddingBottom - ((data[i] - yMin) / (yMax - yMin)) * chartHeight;
        
        if (isFirstPoint) {
          ctx.moveTo(x, y);
          isFirstPoint = false;
        } else {
          ctx.lineTo(x, y);
        }
      }
      
      ctx.setStrokeStyle(color);
      ctx.setLineWidth(2);
      ctx.stroke();
      
      // 绘制数据点
      for (let i = 0; i < xLength; i++) {
        if (data[i] === null || data[i] === undefined) continue;
        
        const x = paddingLeft + i * xStep;
        const y = height - paddingBottom - ((data[i] - yMin) / (yMax - yMin)) * chartHeight;
        
        ctx.beginPath();
        ctx.setFillStyle(color);
        ctx.arc(x, y, 3, 0, 2 * Math.PI);
        ctx.fill();
      }
    });
    
    // 完成绘制
    ctx.draw();
  }
  
  // 更多图表类型的绘制方法...
  
  touchHandler(e) {
    // 处理触摸事件，实现交互功能
  }
  
  updateData(opts) {
    // 更新数据并重绘图表
    this.opts.series = opts.series || this.opts.series;
    this.opts.categories = opts.categories || this.opts.categories;
    this.renderTo();
  }
  
  stopAnimation() {
    // 停止图表动画
  }
  
  resize(opts) {
    // 调整图表大小
    this.opts.width = opts.width || this.opts.width;
    this.opts.height = opts.height || this.opts.height;
    this.renderTo();
  }
}

module.exports = WxCharts;
