import React from 'react';

const JingJiAiVillage: React.FC = () => {
  return (
    <section
      id="ai-village"
      className="py-20 bg-blue-900 text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold mb-2 text-center">AI赋能乡村</h2>
        <p className="text-blue-200 text-center mb-16">
          人工智能如何重塑乡村经济生态
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20 animate-on-scroll"
            data-delay="0"
          >
            <div className="bg-green-500 p-4 rounded-full inline-block mb-4">
              <i className="fas fa-leaf text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">精准农业</h3>
            <p className="text-blue-100 mb-4">
              AI算法分析土壤、气候和作物生长数据，优化灌溉和施肥策略，提高作物产量达38%，减少资源浪费
            </p>
            <div className="flex items-center text-sm">
              <div className="flex mr-4">
                <i className="fas fa-chart-line text-green-400 mr-1"></i>
                <span>效率提升 42%</span>
              </div>
              <div className="flex">
                <i className="fas fa-water text-green-400 mr-1"></i>
                <span>节水 35%</span>
              </div>
            </div>
          </div>

          <div
            className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20 animate-on-scroll"
            data-delay="300"
          >
            <div className="bg-blue-500 p-4 rounded-full inline-block mb-4">
              <i className="fas fa-robot text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">智能病虫害识别</h3>
            <p className="text-blue-100 mb-4">
              结合计算机视觉和深度学习模型，实现对农作物病害的早期识别，准确率达96%，大幅降低农作物损失
            </p>
            <div className="flex items-center text-sm">
              <div className="flex mr-4">
                <i className="fas fa-bug text-blue-400 mr-1"></i>
                <span>损失降低 67%</span>
              </div>
              <div className="flex">
                <i className="fas fa-vial text-blue-400 mr-1"></i>
                <span>减少农药 53%</span>
              </div>
            </div>
          </div>

          <div
            className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20 animate-on-scroll"
            data-delay="600"
          >
            <div className="bg-purple-500 p-4 rounded-full inline-block mb-4">
              <i className="fas fa-chart-pie text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">市场预测分析</h3>
            <p className="text-blue-100 mb-4">
              基于大数据分析和AI预测模型，帮助农户了解市场需求趋势，优化种植计划和销售策略，提高收益率
            </p>
            <div className="flex items-center text-sm">
              <div className="flex mr-4">
                <i className="fas fa-coins text-purple-400 mr-1"></i>
                <span>收入增长 48%</span>
              </div>
              <div className="flex">
                <i className="fas fa-bullseye text-purple-400 mr-1"></i>
                <span>预测准确率 89%</span>
              </div>
            </div>
          </div>

          <div
            className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20 animate-on-scroll"
            data-delay="900"
          >
            <div className="bg-yellow-500 p-4 rounded-full inline-block mb-4">
              <i className="fas fa-tractor text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">智能农机协同</h3>
            <p className="text-blue-100 mb-4">
              通过5G和物联网技术，实现农机智能协同和远程操控，解决劳动力短缺问题，提升作业精度和效率
            </p>
            <div className="flex items-center text-sm">
              <div className="flex mr-4">
                <i className="fas fa-user-clock text-yellow-400 mr-1"></i>
                <span>劳力减少 62%</span>
              </div>
              <div className="flex">
                <i className="fas fa-tools text-yellow-400 mr-1"></i>
                <span>操作精度 95%</span>
              </div>
            </div>
          </div>

          <div
            className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20 animate-on-scroll"
            data-delay="1200"
          >
            <div className="bg-red-500 p-4 rounded-full inline-block mb-4">
              <i className="fas fa-cloud-sun-rain text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">气候风险预警</h3>
            <p className="text-blue-100 mb-4">
              利用机器学习分析气象数据和历史灾害记录，建立精准气候预警系统，提前应对自然灾害和极端天气
            </p>
            <div className="flex items-center text-sm">
              <div className="flex mr-4">
                <i className="fas fa-shield-alt text-red-400 mr-1"></i>
                <span>灾害损失降低 56%</span>
              </div>
              <div className="flex">
                <i className="fas fa-clock text-red-400 mr-1"></i>
                <span>预警提前 72小时</span>
              </div>
            </div>
          </div>

          <div
            className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20 animate-on-scroll"
            data-delay="1500"
          >
            <div className="bg-indigo-500 p-4 rounded-full inline-block mb-4">
              <i className="fas fa-hand-holding-usd text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">普惠金融服务</h3>
            <p className="text-blue-100 mb-4">
              基于农户生产数据和信用评分模型，提供精准的普惠金融服务，解决小农户融资难题，促进产业升级
            </p>
            <div className="flex items-center text-sm">
              <div className="flex mr-4">
                <i className="fas fa-university text-indigo-400 mr-1"></i>
                <span>融资可得性提升 78%</span>
              </div>
              <div className="flex">
                <i className="fas fa-percentage text-indigo-400 mr-1"></i>
                <span>贷款利率降低 2.7%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 背景元素 */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <img
          src="https://img.taotu.cn/ssd/ssd3/57/2023-07-31/57_a682b1ad7d81009d82754e3c37d7eae4.png"
          className="w-full h-full object-cover"
          alt="数字农业背景"
        />
      </div>
    </section>
  );
};

export default JingJiAiVillage;
