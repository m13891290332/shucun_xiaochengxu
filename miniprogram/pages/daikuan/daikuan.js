// pages/daikuan/daikuan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 筛选选项
    loanPurposeOptions: ['全部用途', '种植业', '养殖业', '农产品加工', '农机设备', '农业基础设施'],
    loanPurposeIndex: 0,
    loanAmountOptions: ['全部金额', '小额 (5万以下)', '中额 (5-20万)', '大额 (20万以上)'],
    loanAmountIndex: 0,
    repaymentTermOptions: ['全部期限', '短期 (1年以内)', '中期 (1-3年)', '长期 (3年以上)'],
    repaymentTermIndex: 0,
    interestRateOptions: ['全部利率', '低利率 (3%以下)', '中等利率 (3%-4.5%)', '高利率 (4.5%以上)'],
    interestRateIndex: 0,
    
    // 分类标签
    categories: [
      { id: 'all', name: '全部贷款' },
      { id: 'popular', name: '热门推荐' },
      { id: 'subsidized', name: '政策补贴' },
      { id: 'agricultural', name: '种养殖贷款' },
      { id: 'equipment', name: '设备购置' },
      { id: 'emergency', name: '应急贷款' },
      { id: 'digital', name: '数字金融' },
    ],
    currentCategory: 'all',
    
    // 贷款产品数据
    products: [
      {
        id: 1,
        name: '惠农种植贷',
        description: '优质农作物种植专项贷款',
        amount: '5-50万元',
        amountDesc: '可循环使用',
        rate: '3.85%',
        rateBg: 'bg-green-100',
        rateColor: 'text-green-800',
        term: '1-3年',
        termDesc: '可延期',
        requirement: '种植面积≥5亩',
        requirementDesc: '信用良好，无不良记录',
        icon: 'icon-seedling',
        iconBg: 'bg-green-100',
        iconColor: 'text-green-600',
        categories: 'popular subsidized agricultural'
      },
      {
        id: 2,
        name: '养殖富农贷',
        description: '畜禽养殖专项扶持贷款',
        amount: '10-100万元',
        amountDesc: '额度可调整',
        rate: '3.65%',
        rateBg: 'bg-blue-100',
        rateColor: 'text-blue-800',
        term: '1-5年',
        termDesc: '分期还款',
        requirement: '规模化养殖',
        requirementDesc: '需有相关养殖许可证',
        icon: 'icon-kiwi-bird',
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
        categories: 'popular subsidized agricultural'
      },
      {
        id: 3,
        name: '农机购置贷',
        description: '农业机械设备购置专项',
        amount: '5-80万元',
        amountDesc: '设备价值85%',
        rate: '3.95%',
        rateBg: 'bg-yellow-100',
        rateColor: 'text-yellow-800',
        term: '1-7年',
        termDesc: '设备抵押',
        requirement: '有稳定收入来源',
        requirementDesc: '农业户口或相关证明',
        icon: 'icon-tractor',
        iconBg: 'bg-yellow-100',
        iconColor: 'text-yellow-600',
        categories: 'equipment digital'
      },
      {
        id: 4,
        name: '惠农易贷',
        description: '线上秒批小额贷款',
        amount: '0.5-10万元',
        amountDesc: '随借随还',
        rate: '4.25%',
        rateBg: 'bg-purple-100',
        rateColor: 'text-purple-800',
        term: '6个月-2年',
        termDesc: '灵活还款',
        requirement: '年龄22-60岁',
        requirementDesc: '有农业经营记录',
        icon: 'icon-mobile-alt',
        iconBg: 'bg-purple-100',
        iconColor: 'text-purple-600',
        categories: 'popular digital'
      },
      {
        id: 5,
        name: '农事应急贷',
        description: '灾害恢复与紧急资金需求',
        amount: '1-30万元',
        amountDesc: '特殊情况可增加',
        rate: '3.50%',
        rateBg: 'bg-red-100',
        rateColor: 'text-red-800',
        term: '6个月-3年',
        termDesc: '宽限期6个月',
        requirement: '农业生产受灾证明',
        requirementDesc: '持有农业保险优先',
        icon: 'icon-umbrella',
        iconBg: 'bg-red-100',
        iconColor: 'text-red-600',
        categories: 'emergency agricultural'
      },
      {
        id: 6,
        name: '绿色能源贷',
        description: '农村可再生能源项目专项',
        amount: '10-200万元',
        amountDesc: '项目评估决定',
        rate: '3.20%',
        rateBg: 'bg-green-100',
        rateColor: 'text-green-800',
        term: '3-10年',
        termDesc: '政策补贴',
        requirement: '有土地或屋顶使用权',
        requirementDesc: '项目可行性报告',
        icon: 'icon-solar-panel',
        iconBg: 'bg-green-100',
        iconColor: 'text-green-600',
        categories: 'subsidized equipment'
      },
      {
        id: 7,
        name: '农产品加工贷',
        description: '农产品加工与销售',
        amount: '10-150万元',
        amountDesc: '信用等级评定',
        rate: '4.10%',
        rateBg: 'bg-blue-100',
        rateColor: 'text-blue-800',
        term: '1-5年',
        termDesc: '经营收入还款',
        requirement: '营业执照',
        requirementDesc: '稳定经营1年以上',
        icon: 'icon-store',
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
        categories: 'agricultural digital'
      },
      {
        id: 8,
        name: '乡村民宿贷',
        description: '农村旅游与民宿发展',
        amount: '10-300万元',
        amountDesc: '房产估值评定',
        rate: '4.35%',
        rateBg: 'bg-yellow-100',
        rateColor: 'text-yellow-800',
        term: '3-15年',
        termDesc: '房产抵押',
        requirement: '农村自有房产',
        requirementDesc: '旅游区位置优势',
        icon: 'icon-home',
        iconBg: 'bg-yellow-100',
        iconColor: 'text-yellow-600',
        categories: 'popular subsidized'
      }
    ],
    filteredProducts: [], // 筛选后的产品
    
    // 申请表单相关
    isFormVisible: false,
    selectedProductId: null,
    selectedProduct: {},
    formStep: 0,
    
    // 表单数据
    loanTerms: ['请选择贷款期限', '6个月', '1年', '2年', '3年', '5年'],
    loanTermIndex: 0,
    loanPurposeInputs: ['请选择贷款用途', '种植业', '养殖业', '农产品加工', '农机设备', '农业基础设施'],
    loanPurposeInputIndex: 0,
    repaymentMethods: ['请选择还款方式', '等额本金', '等额本息', '先息后本', '到期一次还本付息'],
    repaymentMethodIndex: 0,
    
    formData: {
      fullname: '',
      idCard: '',
      mobile: '',
      address: '',
      loanAmount: '',
      loanDescription: '',
      idCardImage: '',
      businessLicenseImage: '',
      financialDocImage: '',
      otherDocsImage: '',
      agreement: false
    },
    
    // 提交成功
    isSuccessVisible: false,
    applicationId: '',
    
    // 合作银行
    banks: ['农业银行', '邮储银行', '农村信用社', '建设银行', '村镇银行']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      filteredProducts: this.data.products
    });
  },

  /**
   * 筛选下拉框事件处理
   */
  onLoanPurposeChange(e) {
    this.setData({
      loanPurposeIndex: e.detail.value
    });
  },

  onLoanAmountChange(e) {
    this.setData({
      loanAmountIndex: e.detail.value
    });
  },

  onRepaymentTermChange(e) {
    this.setData({
      repaymentTermIndex: e.detail.value
    });
  },

  onInterestRateChange(e) {
    this.setData({
      interestRateIndex: e.detail.value
    });
  },

  /**
   * 筛选贷款产品
   */
  filterProducts() {
    const { loanPurposeIndex, loanAmountIndex, repaymentTermIndex, interestRateIndex, products } = this.data;
    
    // 如果全部是默认值，显示所有产品
    if (loanPurposeIndex === 0 && loanAmountIndex === 0 && repaymentTermIndex === 0 && interestRateIndex === 0) {
      this.setData({
        filteredProducts: products
      });
      return;
    }
    
    // 根据筛选条件过滤产品
    let filtered = [...products];
    
    // 贷款用途筛选
    if (loanPurposeIndex > 0) {
      const purpose = this.data.loanPurposeOptions[loanPurposeIndex].toLowerCase();
      filtered = filtered.filter(product => 
        product.categories.toLowerCase().includes(purpose) ||
        product.description.toLowerCase().includes(purpose)
      );
    }
    
    // 贷款金额筛选
    if (loanAmountIndex > 0) {
      const amountFilter = this.data.loanAmountOptions[loanAmountIndex];
      if (amountFilter.includes('小额')) {
        filtered = filtered.filter(product => parseInt(product.amount) < 5);
      } else if (amountFilter.includes('中额')) {
        filtered = filtered.filter(product => 
          parseInt(product.amount) >= 5 && parseInt(product.amount) <= 20
        );
      } else if (amountFilter.includes('大额')) {
        filtered = filtered.filter(product => parseInt(product.amount) > 20);
      }
    }
    
    // 期限筛选
    if (repaymentTermIndex > 0) {
      const termFilter = this.data.repaymentTermOptions[repaymentTermIndex];
      if (termFilter.includes('短期')) {
        filtered = filtered.filter(product => product.term.includes('月') || product.term.includes('1年'));
      } else if (termFilter.includes('中期')) {
        filtered = filtered.filter(product => 
          product.term.includes('1-3') || product.term.includes('1-5')
        );
      } else if (termFilter.includes('长期')) {
        filtered = filtered.filter(product => 
          parseInt(product.term) > 3 || product.term.includes('3-') || product.term.includes('5-')
        );
      }
    }
    
    // 利率筛选
    if (interestRateIndex > 0) {
      const rateFilter = this.data.interestRateOptions[interestRateIndex];
      if (rateFilter.includes('低利率')) {
        filtered = filtered.filter(product => parseFloat(product.rate) < 3);
      } else if (rateFilter.includes('中等利率')) {
        filtered = filtered.filter(product => 
          parseFloat(product.rate) >= 3 && parseFloat(product.rate) <= 4.5
        );
      } else if (rateFilter.includes('高利率')) {
        filtered = filtered.filter(product => parseFloat(product.rate) > 4.5);
      }
    }
    
    this.setData({
      filteredProducts: filtered
    });
  },

  /**
   * 重置筛选条件
   */
  resetFilter() {
    this.setData({
      loanPurposeIndex: 0,
      loanAmountIndex: 0,
      repaymentTermIndex: 0,
      interestRateIndex: 0,
      filteredProducts: this.data.products,
      currentCategory: 'all'
    });
  },

  /**
   * 分类切换
   */
  switchCategory(e) {
    const category = e.currentTarget.dataset.category;
    const { products } = this.data;
    
    this.setData({
      currentCategory: category
    });
    
    if (category === 'all') {
      this.setData({
        filteredProducts: products
      });
    } else {
      const filtered = products.filter(product => 
        product.categories.includes(category)
      );
      this.setData({
        filteredProducts: filtered
      });
    }
  },

  /**
   * 申请贷款
   */
  applyLoan(e) {
    const productId = e.currentTarget.dataset.productId;
    const product = this.data.products.find(p => p.id == productId);
    
    this.setData({
      selectedProductId: productId,
      selectedProduct: product,
      isFormVisible: true,
      formStep: 0
    });
    
    // 滚动到表单位置
    wx.pageScrollTo({
      selector: '#application-form-container',
      duration: 300
    });
  },

  /**
   * 表单步骤控制
   */
  nextStep() {
    const { formStep } = this.data;
    
    if (formStep < 3) {
      this.setData({
        formStep: formStep + 1
      });
    }
  },

  prevStep() {
    const { formStep } = this.data;
    
    if (formStep > 0) {
      this.setData({
        formStep: formStep - 1
      });
    }
  },

  /**
   * 表单数据绑定
   */
  onInputChange(e) {
    const field = e.currentTarget.dataset.field;
    const value = e.detail.value;
    const formData = this.data.formData;
    formData[field] = value;
    
    this.setData({
      formData
    });
  },

  /**
   * 贷款期限选择
   */
  onLoanTermChange(e) {
    this.setData({
      loanTermIndex: e.detail.value
    });
  },

  /**
   * 贷款用途选择
   */
  onLoanPurposeInputChange(e) {
    this.setData({
      loanPurposeInputIndex: e.detail.value
    });
  },

  /**
   * 还款方式选择
   */
  onRepaymentMethodChange(e) {
    this.setData({
      repaymentMethodIndex: e.detail.value
    });
  },

  /**
   * 协议勾选
   */
  onAgreementChange(e) {
    const formData = this.data.formData;
    formData.agreement = e.detail.value.length > 0;
    
    this.setData({
      formData
    });
  },

  /**
   * 选择图片上传
   */
  chooseImage(e) {
    const type = e.currentTarget.dataset.type;
    const formData = this.data.formData;
    
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        formData[`${type}Image`] = res.tempFiles[0].tempFilePath;
        this.setData({
          formData
        });
      }
    });
  },

  /**
   * 提交贷款申请
   */
  submitApplication(e) {
    // 检查协议是否勾选
    if (!this.data.formData.agreement) {
      wx.showToast({
        title: '请阅读并同意相关服务条款',
        icon: 'none'
      });
      return;
    }
    
    // 显示提交中
    wx.showLoading({
      title: '提交中...',
      mask: true
    });
    
    // 模拟提交延迟
    setTimeout(() => {
      wx.hideLoading();
      
      // 生成随机申请编号
      const applicationId = 'LN' + Math.floor(Math.random() * 1000000);
      
      this.setData({
        isFormVisible: false,
        isSuccessVisible: true,
        applicationId
      });
    }, 2000);
  },

  /**
   * 返回首页
   */
  backToHome() {
    this.setData({
      isSuccessVisible: false,
      selectedProductId: null,
      formStep: 0,
      formData: {
        fullname: '',
        idCard: '',
        mobile: '',
        address: '',
        loanAmount: '',
        loanDescription: '',
        idCardImage: '',
        businessLicenseImage: '',
        financialDocImage: '',
        otherDocsImage: '',
        agreement: false
      },
      loanTermIndex: 0,
      loanPurposeInputIndex: 0,
      repaymentMethodIndex: 0
    });
  }
})