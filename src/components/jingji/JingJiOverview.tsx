import React, { useEffect, useState } from 'react';
import { initDynamicElements } from './utils';

interface OverviewData {
  gdp: {
    value: number;
    growth: number;
  };
  agriculture: {
    value: number;
    growth: number;
  };
  retail: {
    value: number;
    growth: number;
  };
  budget: {
    value: number;
    growth: number;
  };
}

// 自适应数字显示组件，当过长时缩小字体
interface AdaptiveNumberProps {
  value: number;
  unit?: string;
  loading?: boolean;
  loadingText?: string;
  className?: string;
}

const AdaptiveNumber: React.FC<AdaptiveNumberProps> = ({
  value,
  unit = '',
  loading = false,
  loadingText = '加载中...',
  className = '',
}) => {
  if (loading) {
    return <span>{loadingText}</span>;
  }

  const roundedValue = Math.round(value);
  const valueStr = roundedValue.toString();

  // 根据数字长度决定字体大小
  const fontSize =
    valueStr.length > 6 ? 'text-2xl md:text-xl' : 'text-3xl md:text-2xl';

  return (
    <div className={`flex items-end ${className}`}>
      <span className={fontSize}>{valueStr}</span>
      {unit && <span className="text-xl ml-1">{unit}</span>}
    </div>
  );
};

const JingJiOverview: React.FC = () => {
  const [overviewData, setOverviewData] = useState<OverviewData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data/jingji/overview');
        const data = await response.json();
        setOverviewData(data);
        setLoading(false);
      } catch (error) {
        console.error('获取概览数据失败:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!loading) {
      initDynamicElements();
    }
  }, [loading]);

  return (
    <section id="overview" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-2 text-center text-black">
          数据概览
        </h2>
        <p className="text-gray-600 text-center mb-12">
          全面呈现智慧乡村建设的核心数据指标
        </p>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div
            className="bg-white rounded-lg shadow-lg p-6 data-card animate-on-scroll"
            data-delay="0"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-xl mb-2 text-gray-800">
                  地区生产总值
                </h3>
                <div
                  className="stat-number min-h-[3.5rem] flex items-end"
                  id="coverage"
                >
                  <AdaptiveNumber
                    value={overviewData?.gdp.value || 0}
                    unit="万元"
                    loading={loading}
                  />
                </div>
                <p
                  className={`${
                    overviewData?.gdp.growth && overviewData.gdp.growth > 0
                      ? 'text-green-500'
                      : 'text-red-500'
                  } text-sm mt-1`}
                >
                  <i
                    className={`fas ${
                      overviewData?.gdp.growth && overviewData.gdp.growth > 0
                        ? 'fa-arrow-up'
                        : 'fa-arrow-down'
                    } mr-1`}
                  ></i>
                  较上年增长{' '}
                  {loading
                    ? '...'
                    : `${overviewData?.gdp.growth.toFixed(1) || 0}%`}
                </p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <i className="fas fa-chart-line text-blue-600 text-xl"></i>
              </div>
            </div>
            <div className="mt-4">
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  data-target={
                    loading
                      ? '0'
                      : `${Math.min(100, (overviewData?.gdp.growth || 0) * 10)}`
                  }
                ></div>
              </div>
            </div>
          </div>

          <div
            className="bg-white rounded-lg shadow-lg p-6 data-card animate-on-scroll"
            data-delay="200"
          >
            <div className="flex justify-between items-start">
              <div className="w-3/4">
                <h3 className="font-bold text-xl mb-2 text-gray-800">
                  农林牧渔业增加值
                </h3>
                <div
                  className="stat-number min-h-[3.5rem] flex items-end"
                  id="ai-adoption"
                >
                  <AdaptiveNumber
                    value={overviewData?.agriculture.value || 0}
                    unit="万元"
                    loading={loading}
                  />
                </div>
                <p
                  className={`${
                    overviewData?.agriculture.growth &&
                    overviewData.agriculture.growth > 0
                      ? 'text-green-500'
                      : 'text-red-500'
                  } text-sm mt-1`}
                >
                  <i
                    className={`fas ${
                      overviewData?.agriculture.growth &&
                      overviewData.agriculture.growth > 0
                        ? 'fa-arrow-up'
                        : 'fa-arrow-down'
                    } mr-1`}
                  ></i>
                  较上年增长{' '}
                  {loading
                    ? '...'
                    : `${overviewData?.agriculture.growth.toFixed(1) || 0}%`}
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <i className="fas fa-seedling text-green-600 text-xl"></i>
              </div>
            </div>
            <div className="mt-4">
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  data-target={
                    loading
                      ? '0'
                      : `${Math.min(
                          100,
                          (overviewData?.agriculture.growth || 0) * 10
                        )}`
                  }
                ></div>
              </div>
            </div>
          </div>

          <div
            className="bg-white rounded-lg shadow-lg p-6 data-card animate-on-scroll"
            data-delay="400"
          >
            <div className="flex justify-between items-start">
              <div className="w-3/4">
                <h3 className="font-bold text-xl mb-2 text-gray-800">
                  社会消费品零售额
                </h3>
                <div
                  className="stat-number min-h-[3.5rem] flex items-end"
                  id="projects"
                >
                  <AdaptiveNumber
                    value={overviewData?.retail.value || 0}
                    unit="万元"
                    loading={loading}
                  />
                </div>
                <p
                  className={`${
                    overviewData?.retail.growth &&
                    overviewData.retail.growth > 0
                      ? 'text-green-500'
                      : 'text-red-500'
                  } text-sm mt-1`}
                >
                  <i
                    className={`fas ${
                      overviewData?.retail.growth &&
                      overviewData.retail.growth > 0
                        ? 'fa-arrow-up'
                        : 'fa-arrow-down'
                    } mr-1`}
                  ></i>
                  较上年增长{' '}
                  {loading
                    ? '...'
                    : `${overviewData?.retail.growth.toFixed(1) || 0}%`}
                </p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <i className="fas fa-shopping-cart text-purple-600 text-xl"></i>
              </div>
            </div>
            <div className="mt-4">
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  data-target={
                    loading
                      ? '0'
                      : `${Math.min(
                          100,
                          (overviewData?.retail.growth || 0) * 10
                        )}`
                  }
                ></div>
              </div>
            </div>
          </div>

          <div
            className="bg-white rounded-lg shadow-lg p-6 data-card animate-on-scroll"
            data-delay="600"
          >
            <div className="flex justify-between items-start">
              <div className="w-3/4">
                <h3 className="font-bold text-xl mb-2 text-gray-800">
                  一般公共预算收入
                </h3>
                <div
                  className="stat-number min-h-[3.5rem] flex items-end"
                  id="efficiency"
                >
                  <AdaptiveNumber
                    value={overviewData?.budget.value || 0}
                    unit="万元"
                    loading={loading}
                  />
                </div>
                <p
                  className={`${
                    overviewData?.budget.growth &&
                    overviewData.budget.growth > 0
                      ? 'text-green-500'
                      : 'text-red-500'
                  } text-sm mt-1`}
                >
                  <i
                    className={`fas ${
                      overviewData?.budget.growth &&
                      overviewData.budget.growth > 0
                        ? 'fa-arrow-up'
                        : 'fa-arrow-down'
                    } mr-1`}
                  ></i>
                  较上年增长{' '}
                  {loading
                    ? '...'
                    : `${overviewData?.budget.growth.toFixed(1) || 0}%`}
                </p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-full">
                <i className="fas fa-coins text-yellow-600 text-xl"></i>
              </div>
            </div>
            <div className="mt-4">
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  data-target={
                    loading
                      ? '0'
                      : `${Math.min(
                          100,
                          (overviewData?.budget.growth || 0) * 10
                        )}`
                  }
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* <div
          className="bg-white rounded-xl shadow-xl p-8 animate-on-scroll"
          data-delay="800"
        >
          <h3 className="text-2xl font-bold mb-6">全国智慧农业建设进度</h3>
          <div className="table-container">
            <table className="w-full">
              <thead>
                <tr>
                  <th>地区</th>
                  <th>覆盖村庄数</th>
                  <th>数字化程度</th>
                  <th>AI应用数量</th>
                  <th>年增长率</th>
                  <th>实施进度</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>华东地区</td>
                  <td>12,458</td>
                  <td>87%</td>
                  <td>356</td>
                  <td>26.4%</td>
                  <td>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-green-600 h-2.5 rounded-full"
                        style={{ width: '87%' }}
                      ></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>华北地区</td>
                  <td>9,845</td>
                  <td>76%</td>
                  <td>287</td>
                  <td>22.7%</td>
                  <td>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-green-600 h-2.5 rounded-full"
                        style={{ width: '76%' }}
                      ></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>华南地区</td>
                  <td>8,762</td>
                  <td>92%</td>
                  <td>423</td>
                  <td>31.2%</td>
                  <td>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-green-600 h-2.5 rounded-full"
                        style={{ width: '92%' }}
                      ></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>西北地区</td>
                  <td>5,124</td>
                  <td>64%</td>
                  <td>184</td>
                  <td>18.5%</td>
                  <td>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-green-600 h-2.5 rounded-full"
                        style={{ width: '64%' }}
                      ></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>西南地区</td>
                  <td>6,837</td>
                  <td>71%</td>
                  <td>226</td>
                  <td>24.8%</td>
                  <td>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-green-600 h-2.5 rounded-full"
                        style={{ width: '71%' }}
                      ></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>东北地区</td>
                  <td>7,291</td>
                  <td>68%</td>
                  <td>195</td>
                  <td>19.3%</td>
                  <td>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-green-600 h-2.5 rounded-full"
                        style={{ width: '68%' }}
                      ></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>华中地区</td>
                  <td>10,438</td>
                  <td>83%</td>
                  <td>312</td>
                  <td>27.9%</td>
                  <td>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-green-600 h-2.5 rounded-full"
                        style={{ width: '83%' }}
                      ></div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default JingJiOverview;
