Page({
  data: {
    // 页面基础数据
    bannerTitle: "智慧产业",
    bannerSubtitle: "WISDOM INDUSTRY",
    bannerDesc: "基于AI、云计算、大数据、物联网等信息技术，融合多维分析算法，赋能乡村产业数字化转型，推动乡村产业振兴与经济高质量发展。",
    
    // 数据维度展示
    dimensions: [
      {
        title: "产业结构",
        icon: "/miniprogram/images/analytics-icon.png",
        desc: "分析乡村产业结构组成，包括一二三产业的比例分布、各行业发展状况及产业结构优化方向。",
        stats: [
          { value: "54.5%", label: "三产占比" },
          { value: "32.3%", label: "二产占比" },
          { value: "13.2%", label: "一产占比" }
        ]
      },
      {
        title: "产业链状态",
        icon: "/miniprogram/images/process-icon.png",
        desc: "监测乡村产业链完整性和健康度，分析产业链关键环节和薄弱节点，提高产业链韧性。",
        stats: [
          { value: "78.5%", label: "产业链完整度" },
          { value: "81.2%", label: "产业链健康度" },
          { value: "23", label: "薄弱节点" }
        ]
      },
      {
        title: "经济增长",
        icon: "/miniprogram/images/growth-icon.png",
        desc: "跟踪乡村经济增长指标，包括GDP、人均收入、财政收入等，评估经济发展质量和速度。",
        stats: [
          { value: "5.2%", label: "GDP增速" },
          { value: "6.1%", label: "人均增长" },
          { value: "7.8%", label: "财政增长" }
        ]
      },
      {
        title: "农业产业化",
        icon: "/miniprogram/images/industry-icon.png",
        desc: "评估农业产业化经营水平，分析多元化农业经营主体发展情况，促进农业产业化转型升级。",
        stats: [
          { value: "51.6%", label: "产业化率" },
          { value: "368", label: "经营主体" },
          { value: "2.3%", label: "年均增长" }
        ]
      }
    ],
    
    // 数据表格
    tableData: [
      { 
        name: "服务业增加值（河南省）", 
        value: "1644.19亿元", 
        growth: "+12.5%",
        progress: "92%",
        status: "快速增长", 
        type: "increase" 
      },
      { 
        name: "服务业增加值（陕西省）", 
        value: "6845.18亿元", 
        growth: "+5.2%",
        progress: "72%",
        status: "稳定增长", 
        type: "stable" 
      },
      { 
        name: "服务业增加值（福建省）", 
        value: "27171.01亿元", 
        growth: "+6.3%",
        progress: "78%",
        status: "良好增长", 
        type: "increase" 
      },
      { 
        name: "农业产业化率（山东省）", 
        value: "57.0%", 
        growth: "+3.6%",
        progress: "67%",
        status: "稳定增长", 
        type: "stable" 
      },
      { 
        name: "农业产业化率（广东省）", 
        value: "59.0%", 
        growth: "+3.5%",
        progress: "65%",
        status: "稳定增长", 
        type: "stable" 
      }
    ],
    
    // AI洞察
    aiInsights: {
      title: "智能引擎驱动乡村经济",
      subtitle: "AI + 大数据 + 产业融合发展新模式",
      desc: "通过AI深度分析显示，2023年各省服务业占GDP比重呈现稳步上升趋势，广东省服务业占比达64%，领先全国。福建省服务业增加值突破2.7万亿元，增速保持在6.3%。农业产业化经营率方面，广东省和山东省表现突出，分别达到59%和57%，显示出乡村产业结构持续优化的趋势。",
      features: [
        { icon: "/miniprogram/images/ai-icon.png", text: "智能分析系统" },
        { icon: "/miniprogram/images/risk-icon.png", text: "产业风险预警" },
        { icon: "/miniprogram/images/decision-icon.png", text: "智能决策支持" },
        { icon: "/miniprogram/images/upgrade-icon.png", text: "产业结构优化" }
      ],
      stats: [
        { value: "42%", label: "预测准确率提升" },
        { value: "35%", label: "产业效率提升" },
        { value: "21%", label: "资源优化率" }
      ]
    },
    
    // 特色功能
    features: [
      {
        title: "农产品供需信息共享平台",
        icon: "/miniprogram/images/supply-icon.png",
        desc: "连接政府、企业与农民的信息桥梁，实现农产品供需直接对接，减少中间环节，稳定农产品价格。",
        highlights: ["减少中间环节赚差价", "降低农产品价格波动", "提高市场信息透明度"],
        metrics: [
          { value: "325+", label: "供应信息" },
          { value: "278+", label: "需求信息" },
          { value: "18%", label: "价格稳定提升" }
        ],
        url: "/pages/gongxu/gongxu"
      },
      {
        title: "乡村旅游智能分析系统",
        icon: "/miniprogram/images/tourism-icon.png",
        desc: "整合当地产业、资源、人口、地理位置、经济等数据，利用AI分析当地旅游业发展潜力与路径。",
        highlights: ["多维数据综合分析", "旅游资源潜力评估", "AI路径规划推荐"],
        metrics: [
          { value: "86%", label: "规划准确率" },
          { value: "45+", label: "旅游景点" },
          { value: "27%", label: "收入增长" }
        ],
        url: "/pages/lvyou/lvyou"
      }
    ],
    
    // 切换标签状态
    activeDataType: "quarter",
    
    // 动画控制
    animated: false
  },
  
  onLoad: function (options) {
    // 在页面加载后延迟执行动画
    setTimeout(() => {
      this.setData({
        animated: true
      });
    }, 300);
  },
  
  // 切换数据表格类型
  switchDataType: function(e) {
    const type = e.currentTarget.dataset.type;
    this.setData({
      activeDataType: type
    });
    // 这里可以添加数据切换逻辑
  },
  
  // 跳转到特色功能页面
  navigateToFeature: function(e) {
    const url = e.currentTarget.dataset.url;
    wx.navigateTo({
      url: url
    });
  },
  
  // 页面滚动触发
  onPageScroll: function(e) {
    // 可以添加页面滚动效果
  }
});
