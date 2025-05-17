import React from 'react';

const JingJiCaseStudies: React.FC = () => {
  return (
    <section id="case-studies" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-2 text-center">
          智慧经济典型案例
        </h2>
        <p className="text-gray-600 text-center mb-16">
          实践中的数据驱动与AI赋能
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex flex-col animate-on-scroll" data-delay="0">
            <div className="relative">
              <img
                src="https://www.daqvision.com/hqgw/2023/02/16/4413c651861741ccb516aaf9a61f30d2.png"
                alt="智慧农业大数据平台"
                className="w-full h-80 object-cover rounded-t-lg"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-6">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                  浙江省金华市
                </span>
                <h3 className="text-white text-2xl font-bold mt-2">
                  智慧农业大数据平台
                </h3>
              </div>
            </div>
            <div className="bg-white p-6 rounded-b-lg shadow-lg flex-grow">
              <p className="text-gray-700 mb-6">
                该平台整合了土壤监测、气象数据、作物生长监测等多维数据，通过AI算法为当地农户提供精准种植指导。实施一年后，农产品产量提高32%，品质提升28%，农药使用量减少45%。
              </p>
              <div className="mt-4 flex space-x-4">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-2">
                    <i className="fas fa-server text-blue-600"></i>
                  </div>
                  <span className="text-sm text-gray-600">
                    数据接入点：1,458个
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-100 p-2 rounded-full mr-2">
                    <i className="fas fa-users text-green-600"></i>
                  </div>
                  <span className="text-sm text-gray-600">
                    覆盖农户：12,345户
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col animate-on-scroll" data-delay="300">
            <div className="relative">
              <img
                src="/index/images/addnew13.png"
                alt="数字乡村治理系统"
                className="w-full h-80 object-cover rounded-t-lg"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-6">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                  山东省烟台市
                </span>
                <h3 className="text-white text-2xl font-bold mt-2">
                  数字乡村治理系统
                </h3>
              </div>
            </div>
            <div className="bg-white p-6 rounded-b-lg shadow-lg flex-grow">
              <p className="text-gray-700 mb-6">
                该系统基于"知农AI农"平台构建，通过数字孪生技术建立乡村虚拟模型，实现资源配置优化、环境监测和公共服务智能化管理。系统上线后，行政效率提升65%，居民满意度提高38个百分点。
              </p>
              <div className="mt-4 flex space-x-4">
                <div className="flex items-center">
                  <div className="bg-purple-100 p-2 rounded-full mr-2">
                    <i className="fas fa-building text-purple-600"></i>
                  </div>
                  <span className="text-sm text-gray-600">覆盖村庄：156个</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-yellow-100 p-2 rounded-full mr-2">
                    <i className="fas fa-cog text-yellow-600"></i>
                  </div>
                  <span className="text-sm text-gray-600">
                    智能决策支持：93%准确率
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col animate-on-scroll" data-delay="600">
            <div className="relative">
              <img
                src="https://www.cdcbj.com/agriculture/village/images/lunbo5.jpg"
                alt="海洋牧场智能平台"
                className="w-full h-80 object-cover rounded-t-lg"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-6">
                <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm">
                  福建省福州市
                </span>
                <h3 className="text-white text-2xl font-bold mt-2">
                  海洋牧场智能平台
                </h3>
              </div>
            </div>
            <div className="bg-white p-6 rounded-b-lg shadow-lg flex-grow">
              <p className="text-gray-700 mb-6">
                该平台结合水质监测设备和AI分析系统，实现海洋养殖环境的智能监测和预警。系统通过分析水质参数和生物活动数据，自动调控养殖条件，有效提高了海产品质量和产量。
              </p>
              <div className="mt-4 flex space-x-4">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-2">
                    <i className="fas fa-fish text-blue-600"></i>
                  </div>
                  <span className="text-sm text-gray-600">产量提升：46%</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-100 p-2 rounded-full mr-2">
                    <i className="fas fa-water text-green-600"></i>
                  </div>
                  <span className="text-sm text-gray-600">
                    水质监测点：248个
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col animate-on-scroll" data-delay="900">
            <div className="relative">
              <img
                src="https://img.taotu.cn/ssd/ssd3/57/2023-07-31/57_5b6421e87f5960b69b4a804741f18286.jpg"
                alt="富慧养AI养殖系统"
                className="w-full h-80 object-cover rounded-t-lg"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-6">
                <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm">
                  四川省成都市
                </span>
                <h3 className="text-white text-2xl font-bold mt-2">
                  富慧养AI养殖系统
                </h3>
              </div>
            </div>
            <div className="bg-white p-6 rounded-b-lg shadow-lg flex-grow">
              <p className="text-gray-700 mb-6">
                依托大数据分析和物联网技术，该系统实现了养殖环境的智能调控和动物健康的实时监测。通过从田间到餐桌的全程可追溯性，有效提升了养殖效率和产品质量安全。
              </p>
              <div className="mt-4 flex space-x-4">
                <div className="flex items-center">
                  <div className="bg-red-100 p-2 rounded-full mr-2">
                    <i className="fas fa-heartbeat text-red-600"></i>
                  </div>
                  <span className="text-sm text-gray-600">
                    疾病预警准确率：94%
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="bg-orange-100 p-2 rounded-full mr-2">
                    <i className="fas fa-piggy-bank text-orange-600"></i>
                  </div>
                  <span className="text-sm text-gray-600">成本降低：34%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JingJiCaseStudies;
