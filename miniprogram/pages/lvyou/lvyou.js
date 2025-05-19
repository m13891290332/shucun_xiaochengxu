// pages/lvyou/lvyou.js

Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 景点数据
    attractions: [
      {
        name: '悬空寺',
        desc: '古老的寺庙建于悬崖峭壁之上，融合佛、道、儒三教',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npRIp5-PtftxFd2G6QYtwYlnspZyENUvR-a0rF0zXxUQAW0EYhD2OZdN7arwExP46m-979MLL3ZvFPhs4KVvYlJTKq86jwPGKKTriRI0DOmUFNwDmw6TQ3p7LSq9ASuyGCExZMQ=w138-h92-k-no',
        rating: '4.7',
        percentage: 94
      },
      {
        name: '云冈石窟博物馆',
        desc: '中国三大石窟之一，北魏时期佛教艺术的经典之作',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4no1RUkybprKUKMdZs__iOGWmfcCWhfN8KfB5KpSiEDJRvEDmzLwo1KLEvXXG8J8bMYMhhs9ndDt9527jPMzZ-ZxoTtN0WnZX9v1yxx0HtfhQ1497C2-SYyWJ2Q_WZoaaKchLQxn=w122-h92-k-no',
        rating: '4.6',
        percentage: 92
      },
      {
        name: '大同火山群',
        desc: '东亚大陆稀有的自然遗迹，独特的地质景观',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npFgHGsRsDE7H-YZgFHswi5zglJdaegEZ3WbkeoQkoerys3mxLxVeSfImSlB6ytEzAk2wqp5FsTHhv_6fYtFUE2lWp2GeEsCzrrMKAqlIADv3VvNszFYtfIxyUemR917Cc7YPgcxQ=w92-h92-k-no',
        rating: '4.0',
        percentage: 80
      },
      {
        name: '北岳恒山景区',
        desc: '五岳之一，风景秀丽，文化底蕴深厚',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nplyZeBVg4c8Ik6Qor8XO8MMKasVj1-Qiem3elAT-tNAJ2kSgTksKPlmqT8qFFYBBZSUjQrGwa3xnaK8W-mMZUz_DkdPxcbGCmTrjfaHDT8_utfet8FEPYvH6IvurGTVZ1dzDAOoA=w138-h92-k-no',
        rating: '4.2',
        percentage: 84
      }
    ],

    // 旅游线路
    tourRoutes: [
      { name: '文化古都线路', route: '云冈石窟→九龙壁→华严寺→古城墙→特色农家乐' },
      { name: '民俗风情线路', route: '唐家堡村→大泉山村→民俗文化体验→农事活动体验' },
      { name: '长城文化感悟线路', route: '镇羌堡→拒门堡→拒墙堡→助马堡→农家特色美食' },
      { name: '休闲度假线路', route: '灵丘县乡村民宿→生态农业体验园→温泉度假→传统手工艺学习' },
      { name: '乡村田园线路', route: '忘忧花海→有机农场→汉白玉村→传统农耕文化体验' },
      { name: '红色文化线路', route: '平型关战役遗址→革命纪念馆→乡村特色民宿→农家美食' }
    ],

    // 特色资源
    resources: [
      { name: '传统民居', desc: '北方特色窑洞、四合院', icon: 'icon-house' },
      { name: '特色美食', desc: '刀削面、莜面栲栳栳', icon: 'icon-food' },
      { name: '传统工艺', desc: '剪纸、年画、陶瓷', icon: 'icon-craft' },
      { name: '民俗活动', desc: '社火、庙会、秧歌', icon: 'icon-culture' },
      { name: '生态资源', desc: '火山景观、黄花产业', icon: 'icon-nature' },
      { name: '特色农产品', desc: '大同黄花、马铃薯', icon: 'icon-farm' }
    ],

    // 优势、劣势和趋势
    advantages: [
      '丰富的历史文化资源，包括云冈石窟、悬空寺等世界级旅游资源',
      '独特的地质景观，如大同火山群',
      '良好的交通条件，高铁网络完善'
    ],
    disadvantages: [
      '乡村旅游基础设施有待完善',
      '旅游产品多以观光为主，体验型、互动型产品不足',
      '季节性明显，冬季接待能力不足'
    ],
    trends: [
      '乡村民宿和特色农家乐快速发展',
      '特色农产品与旅游业态结合日益紧密',
      '文旅+科技融合趋势明显'
    ],

    // 地图数据
    mapCenter: {
      latitude: 40.09,
      longitude: 113.30
    },
    mapMarkers: [
      {
        id: 1,
        latitude: 40.11,
        longitude: 113.13,
        title: '云冈石窟',
        iconPath: '/images/marker.png',
        width: 30,
        height: 30,
        callout: {
          content: '云冈石窟',
          color: '#ffffff',
          fontSize: 14,
          borderRadius: 5,
          bgColor: '#1a3a6c',
          padding: 8,
          display: 'BYCLICK'
        },
        label: {
          content: '云冈石窟',
          color: '#FFFFFF',
          bgColor: '#1a3a6c',
          padding: 5,
          borderRadius: 3,
          anchorX: -16,
          anchorY: -50,
        }
      },
      {
        id: 2,
        latitude: 39.66,
        longitude: 113.71,
        title: '悬空寺',
        iconPath: '/images/marker.png',
        width: 30,
        height: 30,
        callout: {
          content: '悬空寺',
          color: '#ffffff',
          fontSize: 14,
          borderRadius: 5,
          bgColor: '#1a3a6c',
          padding: 8,
          display: 'BYCLICK'
        },
        label: {
          content: '悬空寺',
          color: '#FFFFFF',
          bgColor: '#1a3a6c',
          padding: 5,
          borderRadius: 3,
          anchorX: -16,
          anchorY: -50,
        }
      },
      {
        id: 3,
        latitude: 40.22,
        longitude: 113.52,
        title: '大同火山群',
        iconPath: '/images/marker.png',
        width: 30,
        height: 30,
        callout: {
          content: '大同火山群',
          color: '#ffffff',
          fontSize: 14,
          borderRadius: 5,
          bgColor: '#1a3a6c',
          padding: 8,
          display: 'BYCLICK'
        },
        label: {
          content: '火山群',
          color: '#FFFFFF',
          bgColor: '#1a3a6c',
          padding: 5,
          borderRadius: 3,
          anchorX: -16,
          anchorY: -50,
        }
      }
    ],
    
    // 区域数据
    regions: [
      { name: '北部山区', attractions: '悬空寺、恒山风景区、汉白玉村' },
      { name: '中部平原', attractions: '云冈石窟、古城区、休闲农业观光园' },
      { name: '南部丘陵', attractions: '火山景观区、大泉山村、唐家堡村' }
    ],

    // 发展建议
    suggestions: [
      {
        title: '提升产品层次与创新',
        iconClass: 'icon-innovation',
        items: [
          '开发多样化主题乡村旅游产品，如"农耕文化体验"、"民俗技艺传承"等特色项目',
          '打造"四季皆宜"的旅游产品，减弱季节性影响，如冬季温泉、滑雪与民俗体验相结合',
          '将大同特色农产品（如黄花、马铃薯等）融入乡村旅游体验中，形成"旅游+农业"融合发展模式'
        ]
      },
      {
        title: '产业融合发展',
        iconClass: 'icon-industry',
        items: [
          '推动"文旅+康养"融合发展，利用大同优质的生态环境，打造慢生活乡村度假产品',
          '推动"文旅+体育"融合，开发户外运动与乡村旅游相结合的特色产品',
          '积极发展"夜经济"，设计乡村夜游产品，延长游客停留时间'
        ]
      },
      {
        title: '基础设施与服务提升',
        iconClass: 'icon-infrastructure',
        items: [
          '完善乡村旅游基础设施，重点提升卫生间、餐饮设施、停车场等公共设施标准',
          '培育乡村民宿品牌，引导高端民宿和特色民宿集群发展',
          '培训乡村旅游从业人员，提高服务质量和管理水平'
        ]
      },
      {
        title: '营销与数字化转型',
        iconClass: 'icon-marketing',
        items: [
          '开发乡村旅游智慧平台，实现线上预订、导游导览、信息查询等功能',
          '利用短视频、直播等新媒体手段，加强乡村旅游宣传推广',
          '建立大数据分析系统，实现精准营销和服务'
        ]
      }
    ],

    // 实施路径
    implementation: [
      {
        stage: '短期',
        time: '1-2年',
        tasks: [
          '完善基础设施',
          '开发特色乡村旅游产品',
          '培训乡村旅游从业人员'
        ],
        outcome: '每县区打造1-2个乡村旅游示范点，接待游客年增长20%'
      },
      {
        stage: '中期',
        time: '3-5年',
        tasks: [
          '培育乡村旅游特色品牌',
          '构建四季均衡的乡村旅游产品体系',
          '推动农旅融合深度发展'
        ],
        outcome: '打造3-5条精品乡村旅游路线，乡村旅游收入占全市旅游总收入30%以上'
      },
      {
        stage: '长期',
        time: '5-10年',
        tasks: [
          '建设乡村旅游产业集群',
          '打造全国知名的乡村旅游目的地',
          '推动乡村振兴与旅游业高质量发展'
        ],
        outcome: '形成"一村一品、一镇一韵"的乡村旅游发展格局，成为全国乡村旅游示范区'
      }
    ],

    // 动画及交互相关数据
    isLoading: true,
    scrollTop: 0,
    showToTop: false,
    chartRendered: {
      population: false,
      resource: false,
      capacity: false
    },
    animationTime: 1000  // 动画时长(ms)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 模拟加载过程
    wx.showLoading({
      title: '数据加载中',
      mask: true
    });
    
    // 预处理景点图片，添加本地备用图片路径
    this.prepareAttractionImages();
    
    setTimeout(() => {
      this.setData({
        isLoading: false
      });
      wx.hideLoading();
      
      // 确保页面渲染完成后再绘制图表
      setTimeout(() => {
        // 页面加载完成后立即渲染所有图表
        this.renderAllCharts();
      
        // 页面加载完成后的欢迎效果
        wx.showToast({
          title: '欢迎探索大同乡村旅游',
          icon: 'none',
          duration: 2000
        });
      }, 300); // 延迟300ms确保canvas已经准备好
    }, 1500);
    
    // 监听页面滚动
    wx.createIntersectionObserver(this).relativeToViewport().observe('.chart-container', (res) => {
      if (res.intersectionRatio > 0) {
        // 当图表进入视图时渲染
        this.renderChartsInView();
      }
    });

    // 获取系统信息以适配表格
    this.adaptTableToScreenSize();
  },

  /**
   * 渲染图表函数 - 优化性能，只渲染可见的图表
   */
  renderChartsInView: function() {
    // 获取页面中canvas元素
    const query = wx.createSelectorQuery();
    
    // 检查资源图表是否在视图内并且尚未渲染
    if (!this.data.chartRendered.resource) {
      query.select('#resourceChart').boundingClientRect((rect) => {
        if (rect && rect.top < wx.getSystemInfoSync().windowHeight && rect.bottom > 0) {
          this.initResourceChart();
          this.setData({
            'chartRendered.resource': true
          });
        }
      }).exec();
    }
    
    // 检查接待能力图表是否在视图内并且尚未渲染
    if (!this.data.chartRendered.capacity) {
      query.select('#capacityChart').boundingClientRect((rect) => {
        if (rect && rect.top < wx.getSystemInfoSync().windowHeight && rect.bottom > 0) {
          this.initCapacityChart();
          this.setData({
            'chartRendered.capacity': true
          });
        }
      }).exec();
    }
    
    // 检查人口图表是否在视图内并且尚未渲染
    if (!this.data.chartRendered.population) {
      query.select('#populationChart').boundingClientRect((rect) => {
        if (rect && rect.top < wx.getSystemInfoSync().windowHeight && rect.bottom > 0) {
          this.initPopulationChart();
          this.setData({
            'chartRendered.population': true
          });
        }
      }).exec();
    }
  },

  /**
   * 渲染所有图表
   */
  renderAllCharts: function() {
    try {
      console.log("开始渲染所有图表");
      
      // 渲染人口分布图
      if (!this.data.chartRendered.population) {
        console.log("渲染人口分布图表");
        this.initPopulationChart();
        this.setData({
          'chartRendered.population': true
        });
      }
      
      // 渲染资源开发图
      if (!this.data.chartRendered.resource) {
        console.log("渲染资源开发图表");
        this.initResourceChart();
        this.setData({
          'chartRendered.resource': true
        });
      }
      
      // 渲染接待能力图
      if (!this.data.chartRendered.capacity) {
        console.log("渲染接待能力图表");
        this.initCapacityChart();
        this.setData({
          'chartRendered.capacity': true
        });
      }
      
      console.log("所有图表渲染完成");
    } catch (err) {
      console.error("图表渲染出错:", err);
    }
  },

  /**
   * 刷新指定图表
   */
  refreshChart: function(e) {
    const chartType = e.currentTarget.dataset.chart;
    
    if (chartType === 'resource') {
      console.log("刷新资源图表");
      this.initResourceChart();
      this.setData({
        'chartRendered.resource': true
      });
    } else if (chartType === 'capacity') {
      console.log("刷新接待能力图表");
      this.initCapacityChart();
      this.setData({
        'chartRendered.capacity': true
      });
    } else if (chartType === 'population') {
      console.log("刷新人口分布图表");
      this.initPopulationChart();
      this.setData({
        'chartRendered.population': true
      });
    }
  },

  /**
   * 图表交互 - 触摸开始
   */
  touchChart: function(e) {
    // 记录触摸起始点，为交互做准备
    this.touchStartX = e.touches[0].x;
    this.touchStartY = e.touches[0].y;
  },

  /**
   * 图表交互 - 触摸移动
   */
  moveChart: function(e) {
    // 基本的移动检测
    if (!this.touchStartX || !this.touchStartY) return;
    
    const moveX = e.touches[0].x - this.touchStartX;
    const moveY = e.touches[0].y - this.touchStartY;
    
    // 这里可以添加更复杂的交互逻辑
    // 例如拖动图表、缩放等
  },

  /**
   * 图表交互 - 触摸结束
   */
  touchEnd: function(e) {
    // 清除触摸数据
    this.touchStartX = null;
    this.touchStartY = null;
  },

  /**
   * 页面滚动监听
   */
  onPageScroll: function(e) {
    // 记录滚动位置
    this.setData({
      scrollTop: e.scrollTop,
      showToTop: e.scrollTop > 300
    });
    
    // 当页面滚动到图表位置时渲染图表
    this.renderChartsInView();
  },

  /**
   * 回到顶部
   */
  scrollToTop: function() {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    });
  },

  /**
   * 处理地图标记点击事件
   */
  markertap: function(e) {
    const markerID = e.markerId;
    const marker = this.data.mapMarkers.find(item => item.id === markerID);
    
    if (marker) {
      wx.showToast({
        title: `${marker.title} - 点击查看详情`,
        icon: 'none',
        duration: 1500
      });
    }
  },

  /**
   * 处理地图信息窗口点击事件
   */
  callouttap: function(e) {
    const markerID = e.markerId;
    const marker = this.data.mapMarkers.find(item => item.id === markerID);
    
    if (marker) {
      wx.navigateTo({
        url: `../scenic/detail?id=${markerID}&name=${marker.title}`
      });
    }
  },

  /**
   * 初始化人口分布饼图 - 增大尺寸版本
   */
  initPopulationChart: function() {
    const ctx = wx.createCanvasContext('populationChart');
    const animationTime = this.data.animationTime;
    const stepTime = 16;
    const steps = animationTime / stepTime;
    let currentStep = 0;
    
    // 获取画布尺寸以充分利用空间
    const canvasWidth = 350;  // 增加宽度
    const canvasHeight = 300; // 增加高度以填满容器
    
    // 动画参数
    const urbanPercentage = 0.744; // 74.4%
    const ruralPercentage = 0.256; // 25.6%
    
    // 饼图中心和半径 - 大幅增加以填满容器
    const centerX = canvasWidth * 0.45; // 位于画布左侧中部
    const centerY = canvasHeight * 0.5;
    const radius = Math.min(canvasWidth, canvasHeight) * 0.35; // 使用画布较小边的35%作为半径
    
    // 动画函数
    const animate = () => {
      currentStep++;
      const progress = currentStep / steps;
      
      // 使用easeOutQuad缓动函数使动画更自然
      const easeProgress = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      
      // 根据动画进度计算当前角度
      const urbanAngle = 2 * Math.PI * urbanPercentage * easeProgress;
      const ruralAngle = 2 * Math.PI * ruralPercentage * easeProgress;
      
      // 清空画布
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      
      // 设置画布背景
      ctx.setFillStyle('rgba(26, 58, 108, 0.3)');
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);
      
      // 绘制标题 - 调整位置
      ctx.setFontSize(16); // 增大字号
      ctx.setFillStyle('#ffffff');
      ctx.setTextAlign('left');
      ctx.fillText('人口城乡分布', 20, 30);
      
      // 绘制城镇人口占比
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, 0, urbanAngle);
      ctx.closePath();
      
      // 创建渐变
      const urbanGradient = ctx.createLinearGradient(centerX - radius, centerY - radius, centerX + radius, centerY + radius);
      urbanGradient.addColorStop(0, '#5b7ec2');
      urbanGradient.addColorStop(1, '#3a5998');
      ctx.setFillStyle(urbanGradient);
      ctx.fill();
      
      // 绘制农村人口占比
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, urbanAngle, urbanAngle + ruralAngle);
      ctx.closePath();
      
      // 创建渐变
      const ruralGradient = ctx.createLinearGradient(centerX - radius, centerY - radius, centerX + radius, centerY + radius);
      ruralGradient.addColorStop(0, '#1a3a6c');
      ruralGradient.addColorStop(1, '#0a264a');
      ctx.setFillStyle(ruralGradient);
      ctx.fill();
      
      // 边框 - 增加边框宽度
      ctx.setLineWidth(3);
      ctx.setStrokeStyle('rgba(255, 255, 255, 0.2)');
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
      ctx.stroke();
      
      // 添加图例 - 移到右侧，占据右半部分空间
      const legendX = canvasWidth * 0.65;
      const legendY = canvasHeight * 0.4;
      ctx.setFillStyle('#ffffff');
      ctx.setFontSize(14); // 增大图例字号
      
      // 图例方块 - 城镇 - 移到右侧
      ctx.setFillStyle(urbanGradient);
      ctx.fillRect(legendX, legendY, 16, 16);
      ctx.setFillStyle('#ffffff');
      ctx.fillText('城镇人口: 74.4%', legendX + 24, legendY + 12);
      
      // 图例方块 - 农村 - 移到右侧
      ctx.setFillStyle(ruralGradient);
      ctx.fillRect(legendX, legendY + 30, 16, 16);
      ctx.setFillStyle('#ffffff');
      ctx.fillText('农村人口: 25.6%', legendX + 24, legendY + 42);
      
      // 中心数字 - 增大字号
      ctx.setTextAlign('center');
      ctx.setFillStyle('#ffd700');
      ctx.setFontSize(24); // 从20增大到24
      ctx.fillText('307.9万', centerX, centerY);
      ctx.setFillStyle('#ffffff');
      ctx.setFontSize(16); // 从12增大到16
      ctx.fillText('总人口', centerX, centerY + 24);
      
      // 添加更多信息丰富图表
      ctx.setTextAlign('left');
      ctx.setFontSize(12);
      ctx.setFillStyle('rgba(255, 255, 255, 0.7)');
      ctx.fillText('大同市总面积：14176平方千米', 20, canvasHeight - 30);
      ctx.fillText('数据来源：2023年统计数据', 20, canvasHeight - 10);
      
      // 绘制
      ctx.draw(false);
      
      // 继续下一帧或结束动画
      if (currentStep < steps) {
        setTimeout(animate, stepTime);
      }
    };
    
    // 开始动画
    animate();
  },

  /**
   * 初始化资源开发现状雷达图
   */
  initResourceChart: function() {
    try {
      const ctx = wx.createCanvasContext('resourceChart');
      const animationTime = this.data.animationTime;
      const stepTime = 16;
      const steps = animationTime / stepTime;
      let currentStep = 0;
      
      // 图表数据 - 调整中心点和半径适应新的高度
      const center = {x: 175, y: 250}; // 保持中心点不变
      const radius = 100; // 略微减小半径，给标签留出更多空间
      const categories = ['历史文化', '自然景观', '乡村民宿', '特色美食', '民俗活动', '农产品开发'];
      const data = [85, 72, 58, 65, 53, 70];
      
      // 动画函数
      const animate = () => {
        currentStep++;
        const progress = currentStep / steps;
        const easeProgress = 1 - Math.pow(1 - progress, 3); // easeOutCubic
    
        // 清空画布 - 调整画布高度
        ctx.clearRect(0, 0, 400, 800); 
        
        // 设置画布背景
        ctx.setFillStyle('rgba(26, 58, 108, 0.3)');
        ctx.fillRect(0, 0, 400, 800);
        
        // 绘制图表标题 - 调整位置
        ctx.setTextAlign('center');
        ctx.setFillStyle('#ffffff');
        ctx.setFontSize(14);
        ctx.fillText('旅游资源开发水平(%)', center.x, 30);
        ctx.setTextAlign('left');
        
        // 绘制多层背景网格
        for (let level = 5; level > 0; level--) {
          const levelRadius = radius * level / 5;
          ctx.beginPath();
          for (let i = 0; i < categories.length; i++) {
            const angle = i * 2 * Math.PI / categories.length;
            const x = center.x + levelRadius * Math.sin(angle);
            const y = center.y - levelRadius * Math.cos(angle);
            
            if (i === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
          ctx.closePath();
          
          // 渐变透明度背景
          const alpha = 0.05 + (level * 0.03);
          ctx.setFillStyle(`rgba(91, 126, 194, ${alpha})`);
          ctx.fill();
          ctx.setStrokeStyle('rgba(255, 255, 255, 0.2)');
          ctx.stroke();
        }
        
        // 绘制放射线
        for (let i = 0; i < categories.length; i++) {
          const angle = i * 2 * Math.PI / categories.length;
          const x = center.x + radius * Math.sin(angle);
          const y = center.y - radius * Math.cos(angle);
          
          ctx.beginPath();
          ctx.moveTo(center.x, center.y);
          ctx.lineTo(x, y);
          ctx.setStrokeStyle('rgba(255, 255, 255, 0.2)');
          ctx.stroke();
        }
        
        // 绘制数据区域（带渐变填充）
        ctx.beginPath();
        for (let i = 0; i < categories.length; i++) {
          const angle = i * 2 * Math.PI / categories.length;
          const value = data[i] / 100 * easeProgress;
          const x = center.x + radius * value * Math.sin(angle);
          const y = center.y - radius * value * Math.cos(angle);
          
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.closePath();
        
        // 渐变填充
        const gradient = ctx.createCircularGradient(center.x, center.y, radius);
        gradient.addColorStop(0, 'rgba(91, 126, 194, 0.7)');
        gradient.addColorStop(1, 'rgba(58, 89, 152, 0.3)');
        ctx.setFillStyle(gradient);
        ctx.fill();
        
        ctx.setStrokeStyle('#5b7ec2');
        ctx.setLineWidth(2);
        ctx.stroke();
        
        // 绘制数据点及标签
        for (let i = 0; i < categories.length; i++) {
          const angle = i * 2 * Math.PI / categories.length;
          const value = data[i] / 100 * easeProgress;
          const x = center.x + radius * value * Math.sin(angle);
          const y = center.y - radius * value * Math.cos(angle);
          
          // 使用正确的阴影设置方法
          ctx.setShadow(0, 0, 5, '#ffd700');
          
          // 绘制数据点
          ctx.setFillStyle('#ffd700');
          ctx.beginPath();
          ctx.arc(x, y, 5, 0, 2 * Math.PI);
          ctx.fill();
          
          // 重置阴影设置
          ctx.setShadow(0, 0, 0, 'transparent');
          
          // 显示数值标签 - 优化位置和可见性
          if (progress >= 0.95) {
            // 标签背景更明显 - 更深的背景色和更大的边距
            ctx.setFillStyle('rgba(20, 40, 80, 0.9)');
            const textWidth = 28; // 固定宽度以确保统一样式
            const labelDistance = 20;
            const labelX = x + (Math.sin(angle) * labelDistance);
            const labelY = y - (Math.cos(angle) * labelDistance);
            
            // 绘制带边框的背景，增加可见性
            ctx.fillRect(labelX - 15, labelY - 10, 30, 20);
            ctx.setStrokeStyle('rgba(255, 255, 255, 0.5)');
            ctx.strokeRect(labelX - 15, labelY - 10, 30, 20);

            // 绘制文本，使用更明亮的颜色
            ctx.setFillStyle('#ffffff');
            ctx.setFontSize(12);
            ctx.setTextAlign("center");
            ctx.fillText(data[i] + '%', labelX, labelY + 4);
          }
        }
        
        // 添加类别标签 - 完全重写此部分以确保可见性
        for (let i = 0; i < categories.length; i++) {
          const angle = i * 2 * Math.PI / categories.length;
          const labelRadius = radius + 40;
          const x = center.x + labelRadius * Math.sin(angle);
          const y = center.y - labelRadius * Math.cos(angle);
          
          // 绘制连接线，增加标签与图的联系
          ctx.beginPath();
          ctx.setStrokeStyle('rgba(255, 255, 255, 0.5)');
          ctx.setLineWidth(1);
          const innerX = center.x + radius * Math.sin(angle);
          const innerY = center.y - radius * Math.cos(angle);
          ctx.moveTo(innerX, innerY);
          ctx.lineTo(x, y);
          ctx.stroke();
          
          // 计算标签方向和对齐
          let textAnchor, textAlign, textBaseline;
          if (x < center.x - 10) {
            textAlign = 'right';
            textAnchor = {x: x - 5, y: y};
          } else if (x > center.x + 10) {
            textAlign = 'left';
            textAnchor = {x: x + 5, y: y};
          } else {
            textAlign = 'center';
            if (y < center.y) {
              textAnchor = {x: x, y: y - 15};
              textBaseline = 'bottom';
            } else {
              textAnchor = {x: x, y: y + 15};
              textBaseline = 'top';
            }
          }
          
          // 设置文本对齐方式
          ctx.setTextAlign(textAlign);
          ctx.setTextBaseline(textBaseline || 'middle');
          
          // 创建一个更明显的背景
          const padding = 8;
          const bgWidth = categories[i].length * 14;
          const bgHeight = 20;
          
          // 根据文本对齐方式确定背景位置
          let bgX, bgY;
          if (textAlign === 'right') {
            bgX = textAnchor.x - bgWidth;
            bgY = textAnchor.y - bgHeight / 2;
          } else if (textAlign === 'left') {
            bgX = textAnchor.x;
            bgY = textAnchor.y - bgHeight / 2;
          } else { // center
            bgX = textAnchor.x - bgWidth / 2;
            bgY = textBaseline === 'bottom' ? textAnchor.y - bgHeight : textAnchor.y;
          }
          
          // 绘制带边框的背景
          ctx.setFillStyle('rgba(20, 40, 80, 0.9)');
          ctx.fillRect(bgX, bgY, bgWidth, bgHeight);
          ctx.setStrokeStyle('rgba(255, 215, 0, 0.6)'); // 使用金色边框增强可见性
          ctx.strokeRect(bgX, bgY, bgWidth, bgHeight);
          
          // 绘制类别文本
          ctx.setFillStyle('#ffffff');
          ctx.setFontSize(12);
          ctx.fillText(categories[i], textAnchor.x, textAnchor.y);
        }
        
        // 重置对齐方式
        ctx.setTextAlign('left');
        ctx.setTextBaseline('middle');
        
        ctx.draw();
        
        // 继续下一帧或结束动画
        if (currentStep < steps) {
          setTimeout(animate, stepTime);
        }
      };
      
      // 开始动画
      animate();
    } catch (err) {
      console.error("资源图表初始化出错:", err);
    }
  },

  /**
   * 初始化旅游接待能力柱状图
   */
  initCapacityChart: function() {
    try {
      const ctx = wx.createCanvasContext('capacityChart');
      const animationTime = this.data.animationTime;
      const stepTime = 16;
      const steps = animationTime / stepTime;
      let currentStep = 0;
      
      // 图表数据和配置 - 调整高度和边距
      const margin = {top: 60, right: 30, bottom: 80, left: 50}; // 增加所有边距
      const width = 400;
      const height = 700; // 增加总高度
      const categories = ['核心景区', '乡村民宿', '特色村镇'];
      const series = [
        {name: '住宿容量', data: [85, 62, 45], color: '#3a5998'},
        {name: '餐饮接待', data: [78, 58, 50], color: '#5b7ec2'},
        {name: '交通便利度', data: [82, 48, 42], color: '#8da9e6'},
        {name: '导游服务', data: [75, 35, 30], color: '#a8c0ff'}
      ];
      
      // 动画函数
      const animate = () => {
        currentStep++;
        const progress = currentStep / steps;
        
        // 使用easeOutCubic缓动
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        
        // 清空画布
        ctx.clearRect(0, 0, width, height);
        
        // 设置画布背景
        ctx.setFillStyle('rgba(26, 58, 108, 0.3)');
        ctx.fillRect(0, 0, width, height);
        
        // 绘制标题 - 调整位置
        ctx.setFontSize(14);
        ctx.setFillStyle('#ffffff');
        ctx.setTextAlign('center');
        ctx.fillText('区域旅游接待能力对比', width/2, 30);
        ctx.setTextAlign('left');
        
        // 绘制横坐标网格线
        for (let i = 0; i <= 5; i++) {
          const y = height - margin.bottom - i * (height - margin.top - margin.bottom) / 5;
          ctx.beginPath();
          ctx.moveTo(margin.left, y);
          ctx.lineTo(width - margin.right, y);
          ctx.setStrokeStyle('rgba(255, 255, 255, 0.1)');
          ctx.stroke();
          
          // 绘制Y轴刻度 - 增加左边距使刻度文字更清晰
          const yValue = i * 20;
          ctx.setFillStyle('rgba(255, 255, 255, 0.8)');
          ctx.setFontSize(11);
          ctx.fillText(yValue.toString(), margin.left - 25, y + 4);
        }
        
        // 绘制横坐标 - 增加下边距使文字不重叠
        ctx.setFillStyle('#ffffff');
        ctx.setFontSize(13);
        for (let i = 0; i < categories.length; i++) {
          const x = margin.left + (i + 0.5) * (width - margin.left - margin.right) / categories.length;
          ctx.setTextAlign('center');
          ctx.fillText(categories[i], x, height - margin.bottom/2 + 15); // 增加底部边距
        }
        ctx.setTextAlign('left');
        
        // 绘制柱状图组
        const groupWidth = (width - margin.left - margin.right) / categories.length;
        const barWidth = groupWidth / (series.length + 1) * 0.7;
        const groupPadding = groupWidth * 0.15;
        
        // 设置图表区域
        const chartHeight = height - margin.top - margin.bottom;
        const chartBottom = height - margin.bottom;
        
        // 先绘制所有柱子，不带阴影效果
        ctx.setShadow(0, 0, 0, 'transparent');
        
        for (let i = 0; i < categories.length; i++) {
          for (let j = 0; j < series.length; j++) {
            const value = series[j].data[i] * easeProgress;
            const barHeight = value * chartHeight / 100;
            
            const x = margin.left + i * groupWidth + groupPadding + j * barWidth;
            const y = chartBottom - barHeight;
            
            // 创建渐变
            const gradient = ctx.createLinearGradient(0, y, 0, y + barHeight);
            gradient.addColorStop(0, this.lightenColor(series[j].color, 20));
            gradient.addColorStop(1, series[j].color);
            
            ctx.setFillStyle(gradient);
            this.drawRoundedRect(ctx, x, y, barWidth, barHeight, 3);
            ctx.fill();
            
            // 数据标签 - 优化位置和可见性
            if (progress >= 0.9) {
              // 添加标签背景使其更清晰
              const labelText = Math.round(series[j].data[i]).toString();
              const labelX = x + barWidth/2;
              const labelY = y - 10;
              
              ctx.setFillStyle('rgba(26, 58, 108, 0.7)');
              ctx.fillRect(labelX - 10, labelY - 12, 20, 16);
              
              ctx.setFillStyle('#ffffff');
              ctx.setFontSize(10);
              ctx.setTextAlign('center');
              ctx.fillText(labelText, labelX, labelY);
            }
          }
        }
        
        // 添加图例 - 调整位置以避免与柱状图重叠，移至顶部
        const legendY = margin.top - 30; // 将图例移至顶部，避免与图表重叠
        ctx.setTextAlign('left');
        ctx.setFontSize(11);
        
        // 绘制图例背景
        ctx.setFillStyle('rgba(26, 58, 108, 0.7)');
        ctx.fillRect(10, legendY - 5, 120, (series.length * 15) + 10);
        
        for (let i = 0; i < series.length; i++) {
          ctx.setFillStyle(series[i].color);
          ctx.fillRect(20, legendY + i * 15, 10, 10);
          ctx.setFillStyle('#ffffff');
          ctx.fillText(series[i].name, 35, legendY + 8 + i * 15);
        }
        
        // 绘制
        ctx.draw(false);
        
        // 继续下一帧或结束动画
        if (currentStep < steps) {
          setTimeout(animate, stepTime);
        }
      };
      
      // 开始动画
      animate();
    } catch (err) {
      console.error("接待能力图表初始化出错:", err);
    }
  },

  /**
   * 绘制圆角矩形
   */
  drawRoundedRect: function(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
  },
  
  /**
   * 调整颜色亮度
   * @param {string} color - 十六进制颜色值
   * @param {number} percent - 亮度调整百分比
   * @return {string} 调整后的颜色
   */
  lightenColor: function(color, percent) {
    const num = parseInt(color.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    
    return '#' + (
      0x1000000 + 
      (R < 255 ? (R < 0 ? 0 : R) : 255) * 0x10000 + 
      (G < 255 ? (G < 0 ? 0 : G) : 255) * 0x100 + 
      (B < 255 ? (B < 0 ? 0 : B) : 255)
    ).toString(16).slice(1);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    // 页面每次显示时重新渲染图表，确保数据最新
    if (!this.data.isLoading) {
      this.renderAllCharts();
    }
  },

  /**
   * 用户下拉刷新处理
   */
  onPullDownRefresh: function() {
    // 重置图表渲染标记
    this.setData({
      chartRendered: {
        population: false,
        resource: false,
        capacity: false
      }
    });
    
    // 重新渲染图表并结束下拉刷新
    setTimeout(() => {
      this.renderChartsInView();
      wx.stopPullDownRefresh();
      
      // 显示刷新成功提示
      wx.showToast({
        title: '数据已更新',
        icon: 'success',
        duration: 1500
      });
    }, 1000);
  },

  /**
   * 分享功能
   */
  onShareAppMessage: function() {
    return {
      title: '山西大同特色乡村旅游智能分析',
      path: '/pages/lvyou/lvyou',
      imageUrl: '/images/share-lvyou.jpg'
    };
  },
  
  /**
   * 分享到朋友圈
   */
  onShareTimeline: function() {
    return {
      title: '探索山西大同乡村旅游的奇妙之旅',
      query: '',
      imageUrl: '/images/share-timeline.jpg'
    };
  },

  /**
   * 卡片点击处理
   */
  onCardTap: function(e) {
    const {type, id} = e.currentTarget.dataset;
    if (type === 'attraction') {
      // 跳转到景点详情页
      const attraction = this.data.attractions.find(item => item.name === id);
      if (attraction) {
        wx.navigateTo({
          url: `../scenic/detail?id=${id}&name=${attraction.name}`
        });
      }
    } else if (type === 'route') {
      // 跳转到线路详情页
      wx.navigateTo({
        url: `../route/detail?route=${id}`
      });
    }
  },

  /**
   * 预处理景点图片
   */
  prepareAttractionImages: function() {
    // 为每个景点添加本地备用图片路径
    const attractions = this.data.attractions.map(attraction => {
      // 根据景点名称分配对应的本地图片
      let localImage = '/images/default-attraction.png';
      if (attraction.name.includes('悬空寺')) {
        localImage = '/images/xuankongsi.jpg';
      } else if (attraction.name.includes('云冈石窟')) {
        localImage = '/images/yungang.jpg';
      } else if (attraction.name.includes('火山')) {
        localImage = '/images/huoshan.jpg';
      } else if (attraction.name.includes('恒山')) {
        localImage = '/images/hengshan.jpg';
      }
      
      return {
        ...attraction,
        localImage: localImage
      };
    });
    
    this.setData({ attractions });
    console.log('景点图片预处理完成');
  },

  /**
   * 处理图片加载错误
   */
  onImageError: function(e) {
    const index = e.currentTarget.dataset.index;
    
    // 设置使用本地图片
    this.setData({
      [`attractions[${index}].image`]: this.data.attractions[index].localImage
    });
    console.log(`景点图片${index}加载失败，已切换到本地图片`);
  },

  /**
   * 适配表格到屏幕大小
   */
  adaptTableToScreenSize: function() {
    try {
      // 获取系统信息
      const systemInfo = wx.getSystemInfoSync();
      const screenWidth = systemInfo.windowWidth;
      
      // 根据屏幕宽度判断是否需要启用移动设备特殊布局
      if (screenWidth < 340) { // 约等于320px设备
        this.setData({
          useSmallScreenLayout: true
        });
      }
      
      console.log('表格适配完成，屏幕宽度：', screenWidth);
    } catch (e) {
      console.error('获取系统信息失败', e);
    }
  },
});