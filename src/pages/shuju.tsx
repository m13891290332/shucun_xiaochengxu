import React, { useState } from 'react';

const EconomicIndicatorsForm = () => {
  // Initial state based on the indicators from the image
  const [formData, setFormData] = useState({
    economicDevelopment: {
      regionalGDP: '',
      agricultureValue: '',
      retailSales: '',
      publicBudget: '',
    },
    economicGrowth: {
      fixedAssetInvestment: '',
      industrialValueGrowth: '',
      urbanIncomeGrowth: '',
      regionalGDPGrowth: '',
      ruralIncomeGrowth: '',
    },
    industrialStructure: {
      serviceValue: '',
      agriculturalRate: '',
      serviceGDPRatio: '',
    },
    perCapitaIncome: {
      ruralIncome: '',
      urbanIncome: '',
    },
  });

  // Handle input changes
  const handleChange = (category, field, value) => {
    setFormData({
      ...formData,
      [category]: {
        ...formData[category],
        [field]: value,
      },
    });
  };

  // Handle form submission
  const handleSubmit = () => {
    console.log('Form data submitted:', formData);
    // Here you would typically send the data to your backend
    alert('数据已提交！');
  };

  // Reset the form
  const handleReset = () => {
    setFormData({
      economicDevelopment: {
        regionalGDP: '',
        agricultureValue: '',
        retailSales: '',
        publicBudget: '',
      },
      economicGrowth: {
        fixedAssetInvestment: '',
        industrialValueGrowth: '',
        urbanIncomeGrowth: '',
        regionalGDPGrowth: '',
        ruralIncomeGrowth: '',
      },
      industrialStructure: {
        serviceValue: '',
        agriculturalRate: '',
        serviceGDPRatio: '',
      },
      perCapitaIncome: {
        ruralIncome: '',
        urbanIncome: '',
      },
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-blue-400">
          经济指标数据录入系统
        </h1>

        <div className="space-y-8">
          {/* Economic Development Level Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-yellow-400 flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              经济发展水平
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  地区生产总值 (亿元)
                </label>
                <input
                  type="number"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.economicDevelopment.regionalGDP}
                  onChange={(e) =>
                    handleChange(
                      'economicDevelopment',
                      'regionalGDP',
                      e.target.value
                    )
                  }
                  placeholder="输入地区生产总值"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  农林牧渔业增加值 (亿元)
                </label>
                <input
                  type="number"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.economicDevelopment.agricultureValue}
                  onChange={(e) =>
                    handleChange(
                      'economicDevelopment',
                      'agricultureValue',
                      e.target.value
                    )
                  }
                  placeholder="输入农林牧渔业增加值"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  社会消费品零售总额 (亿元)
                </label>
                <input
                  type="number"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.economicDevelopment.retailSales}
                  onChange={(e) =>
                    handleChange(
                      'economicDevelopment',
                      'retailSales',
                      e.target.value
                    )
                  }
                  placeholder="输入社会消费品零售总额"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  一般公共预算收入 (亿元)
                </label>
                <input
                  type="number"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.economicDevelopment.publicBudget}
                  onChange={(e) =>
                    handleChange(
                      'economicDevelopment',
                      'publicBudget',
                      e.target.value
                    )
                  }
                  placeholder="输入一般公共预算收入"
                />
              </div>
            </div>
          </div>

          {/* Economic Growth Rate Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-green-400 flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              经济增长速度
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  固定资产投资增速 (%)
                </label>
                <input
                  type="number"
                  step="0.1"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={formData.economicGrowth.fixedAssetInvestment}
                  onChange={(e) =>
                    handleChange(
                      'economicGrowth',
                      'fixedAssetInvestment',
                      e.target.value
                    )
                  }
                  placeholder="输入固定资产投资增速"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  规模以上工业增加值增速 (%)
                </label>
                <input
                  type="number"
                  step="0.1"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={formData.economicGrowth.industrialValueGrowth}
                  onChange={(e) =>
                    handleChange(
                      'economicGrowth',
                      'industrialValueGrowth',
                      e.target.value
                    )
                  }
                  placeholder="输入规模以上工业增加值增速"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  城镇居民人均可支配收入增速 (%)
                </label>
                <input
                  type="number"
                  step="0.1"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={formData.economicGrowth.urbanIncomeGrowth}
                  onChange={(e) =>
                    handleChange(
                      'economicGrowth',
                      'urbanIncomeGrowth',
                      e.target.value
                    )
                  }
                  placeholder="输入城镇居民人均可支配收入增速"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  地区生产总值增速 (%)
                </label>
                <input
                  type="number"
                  step="0.1"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={formData.economicGrowth.regionalGDPGrowth}
                  onChange={(e) =>
                    handleChange(
                      'economicGrowth',
                      'regionalGDPGrowth',
                      e.target.value
                    )
                  }
                  placeholder="输入地区生产总值增速"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  农村居民人均可支配收入增速 (%)
                </label>
                <input
                  type="number"
                  step="0.1"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={formData.economicGrowth.ruralIncomeGrowth}
                  onChange={(e) =>
                    handleChange(
                      'economicGrowth',
                      'ruralIncomeGrowth',
                      e.target.value
                    )
                  }
                  placeholder="输入农村居民人均可支配收入增速"
                />
              </div>
            </div>
          </div>

          {/* Industrial Structure Upgrade Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-purple-400 flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              产业结构升级
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  服务业增加值 (亿元)
                </label>
                <input
                  type="number"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={formData.industrialStructure.serviceValue}
                  onChange={(e) =>
                    handleChange(
                      'industrialStructure',
                      'serviceValue',
                      e.target.value
                    )
                  }
                  placeholder="输入服务业增加值"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  农业产业化经营率 (%)
                </label>
                <input
                  type="number"
                  step="0.1"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={formData.industrialStructure.agriculturalRate}
                  onChange={(e) =>
                    handleChange(
                      'industrialStructure',
                      'agriculturalRate',
                      e.target.value
                    )
                  }
                  placeholder="输入农业产业化经营率"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  服务业增加值占GDP比重 (%)
                </label>
                <input
                  type="number"
                  step="0.1"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={formData.industrialStructure.serviceGDPRatio}
                  onChange={(e) =>
                    handleChange(
                      'industrialStructure',
                      'serviceGDPRatio',
                      e.target.value
                    )
                  }
                  placeholder="输入服务业增加值占GDP比重"
                />
              </div>
            </div>
          </div>

          {/* Per Capita Disposable Income Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-pink-400 flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              人均可支配收入
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  农村居民人均可支配收入 (元)
                </label>
                <input
                  type="number"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  value={formData.perCapitaIncome.ruralIncome}
                  onChange={(e) =>
                    handleChange(
                      'perCapitaIncome',
                      'ruralIncome',
                      e.target.value
                    )
                  }
                  placeholder="输入农村居民人均可支配收入"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  城镇居民人均可支配收入 (元)
                </label>
                <input
                  type="number"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  value={formData.perCapitaIncome.urbanIncome}
                  onChange={(e) =>
                    handleChange(
                      'perCapitaIncome',
                      'urbanIncome',
                      e.target.value
                    )
                  }
                  placeholder="输入城镇居民人均可支配收入"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4">
            <button
              onClick={handleReset}
              className="px-6 py-2 bg-gray-700 text-gray-200 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              重置
            </button>
            <button
              onClick={handleSubmit}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              提交
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EconomicIndicatorsForm;
