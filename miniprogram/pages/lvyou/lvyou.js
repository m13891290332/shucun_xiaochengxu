// pages/lvyou/lvyou.js
// 导入小程序图表库

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
        height: 30
      },
      {
        id: 2,
        latitude: 39.66,
        longitude: 113.71,
        title: '悬空寺',
        iconPath: '/images/marker.png',
        width: 30,
        height: 30
      }
      // 其他景点可以在此添加
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
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 页面加载时的处理
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    // 页面初次渲染完成后，绘制图表
    this.initPopulationChart();
    this.initResourceChart();
    this.initCapacityChart();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    // 页面显示时的处理
  },

  /**
   * 初始化人口分布饼图
   */
  initPopulationChart() {
    const ctx = wx.createCanvasContext('populationChart');
    
    // 简单的饼图实现
    ctx.setLineWidth(2);
    ctx.setStrokeStyle('#0a264a');
    
    // 绘制城镇人口占比（74.4%）
    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2 * Math.PI * 0.744);
    ctx.setFillStyle('#5b7ec2');
    ctx.fill();
    ctx.stroke();
    
    // 绘制农村人口占比（25.6%）
    ctx.beginPath();
    ctx.arc(100, 75, 50, 2 * Math.PI * 0.744, 2 * Math.PI);
    ctx.setFillStyle('#1a3a6c');
    ctx.fill();
    ctx.stroke();
    
    // 添加图例
    ctx.setFillStyle('#ffffff');
    ctx.setFontSize(12);
    ctx.fillText('城镇人口: 74.4%', 20, 160);
    ctx.fillText('农村人口: 25.6%', 120, 160);
    
    ctx.draw();
  },

  /**
   * 初始化资源开发现状雷达图
   */
  initResourceChart() {
    const ctx = wx.createCanvasContext('resourceChart');
    
    // 简化版雷达图实现
    const center = {x: 150, y: 100};
    const radius = 80;
    const categories = ['历史文化', '自然景观', '乡村民宿', '特色美食', '民俗活动', '农产品开发'];
    const data = [85, 72, 58, 65, 53, 70];
    
    // 绘制雷达图背景
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const angle = i * 2 * Math.PI / 6;
      const x = center.x + radius * Math.sin(angle);
      const y = center.y - radius * Math.cos(angle);
      
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.closePath();
    ctx.setFillStyle('rgba(91, 126, 194, 0.3)');
    ctx.fill();
    ctx.setStrokeStyle('rgba(255, 255, 255, 0.2)');
    ctx.stroke();
    
    // 绘制数据点和连线
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const angle = i * 2 * Math.PI / 6;
      const value = data[i] / 100; // 归一化到0-1
      const x = center.x + radius * value * Math.sin(angle);
      const y = center.y - radius * value * Math.cos(angle);
      
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
      
      // 绘制数据点
      ctx.setFillStyle('#ffd700');
      ctx.fillRect(x - 2, y - 2, 4, 4);
    }
    ctx.closePath();
    ctx.setStrokeStyle('#5b7ec2');
    ctx.setLineWidth(2);
    ctx.stroke();
    
    // 添加类别标签
    ctx.setFillStyle('#ffffff');
    ctx.setFontSize(10);
    for (let i = 0; i < 6; i++) {
      const angle = i * 2 * Math.PI / 6;
      const x = center.x + (radius + 15) * Math.sin(angle);
      const y = center.y - (radius + 15) * Math.cos(angle);
      ctx.fillText(categories[i], x - 20, y);
    }
    
    ctx.draw();
  },

  /**
   * 初始化旅游接待能力柱状图
   */
  initCapacityChart() {
    const ctx = wx.createCanvasContext('capacityChart');
    
    // 简化版堆叠柱状图
    const margin = {top: 20, right: 20, bottom: 40, left: 40};
    const width = 270;
    const height = 200;
    const categories = ['核心景区', '乡村民宿', '特色村镇'];
    const series = [
      {name: '住宿容量', data: [85, 62, 45], color: '#3a5998'},
      {name: '餐饮接待', data: [78, 58, 50], color: '#5b7ec2'},
      {name: '交通便利度', data: [82, 48, 42], color: '#8da9e6'},
      {name: '导游服务', data: [75, 35, 30], color: '#a8c0ff'}
    ];
    
    // 绘制横坐标
    ctx.setFillStyle('#ffffff');
    ctx.setFontSize(12);
    for (let i = 0; i < categories.length; i++) {
      const x = margin.left + i * (width - margin.left - margin.right) / categories.length + 30;
      ctx.fillText(categories[i], x - 20, height - 10);
    }
    
    // 绘制柱状图
    const barWidth = 20;
    const gap = 40;
    
    for (let i = 0; i < categories.length; i++) {
      let y = height - margin.bottom;
      
      for (let j = 0; j < series.length; j++) {
        const value = series[j].data[i];
        const barHeight = value * (height - margin.top - margin.bottom) / 100;
        
        ctx.setFillStyle(series[j].color);
        const x = margin.left + i * gap + 30;
        y -= barHeight;
        ctx.fillRect(x, y, barWidth, barHeight);
      }
    }
    
    // 添加图例
    ctx.setFontSize(10);
    for (let i = 0; i < series.length; i++) {
      ctx.setFillStyle(series[i].color);
      ctx.fillRect(20, 20 + i * 15, 10, 10);
      ctx.setFillStyle('#ffffff');
      ctx.fillText(series[i].name, 35, 28 + i * 15);
    }
    
    ctx.draw();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    return {
      title: '山西大同特色乡村旅游智能分析',
      path: '/pages/lvyou/lvyou'
    };
  }
})