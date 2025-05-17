import React, { useEffect, useRef, useState } from 'react';
// @ts-ignore
import * as echarts from 'echarts';

interface JingJiAnalysisProps {}

const JingJiAnalysis: React.FC<JingJiAnalysisProps> = () => {
  // 图表引用
  const gdpChartRef = useRef<HTMLDivElement>(null);
  const industryChartRef = useRef<HTMLDivElement>(null);
  const urbanChartRef = useRef<HTMLDivElement>(null);
  const ruralChartRef = useRef<HTMLDivElement>(null);

  // 添加图表实例的状态管理
  const [gdpChart, setGdpChart] = useState<any>(null);
  const [industryChart, setIndustryChart] = useState<any>(null);
  const [urbanChart, setUrbanChart] = useState<any>(null);
  const [ruralChart, setRuralChart] = useState<any>(null);

  // 添加数据加载状态
  const [growthData, setGrowthData] = useState<any>(null);

  // 加载经济增长数据
  useEffect(() => {
    const loadGrowthData = async () => {
      try {
        const response = await fetch('/api/data/jingji/speedup');
        const data = await response.json();
        setGrowthData(data);
      } catch (error) {
        console.error('加载经济增长数据失败:', error);
      }
    };

    loadGrowthData();
  }, []);

  // 获取柱状图基础配置
  const getBaseChartOption = (
    title: string,
    data: any,
    year: string = '2023',
    colorRange: string[] = ['#91cc75', '#5470c6']
  ) => {
    if (!data) return {};

    // 提取城市列表和数据
    const cities = Object.keys(data).slice(0, 10); // 只取前10个城市
    const values = cities.map((city) => data[city][year] || 0);

    return {
      title: {
        text: title,
        textStyle: {
          fontSize: 14,
          fontWeight: 'normal',
        },
        left: 'center',
        top: 0,
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
        formatter: '{b}: {c}%',
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '15%',
        top: '15%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        data: cities,
        axisLabel: {
          interval: 0,
          rotate: 30,
          fontSize: 10,
        },
      },
      yAxis: {
        type: 'value',
        name: '增速(%)',
        axisLabel: {
          formatter: '{value}%',
        },
      },
      visualMap: {
        show: false,
        min: Math.min(...values),
        max: Math.max(...values),
        dimension: 0,
        inRange: {
          color: colorRange,
        },
      },
      series: [
        {
          name: '增速',
          type: 'bar',
          data: values,
          itemStyle: {
            borderRadius: [5, 5, 0, 0],
          },
        },
      ],
    };
  };

  // 各图表选项获取函数
  const getGdpChartOption = () => {
    if (!growthData?.gdp) return {};
    return getBaseChartOption(
      '2023年地区生产总值增速对比',
      growthData.gdp,
      '2023',
      ['#91cc75', '#5470c6']
    );
  };

  const getIndustryChartOption = () => {
    if (!growthData?.industry) return {};
    return getBaseChartOption(
      '2023年规模以上工业增加值增速对比',
      growthData.industry,
      '2023',
      ['#fac858', '#ee6666']
    );
  };

  const getUrbanChartOption = () => {
    if (!growthData?.urban) return {};
    return getBaseChartOption(
      '2023年城镇居民人均可支配收入增速对比',
      growthData.urban,
      '2023',
      ['#73c0de', '#3ba272']
    );
  };

  const getRuralChartOption = () => {
    if (!growthData?.rural) return {};
    return getBaseChartOption(
      '2023年农村居民人均可支配收入增速对比',
      growthData.rural,
      '2023',
      ['#fc8452', '#9a60b4']
    );
  };

  // 当数据加载完成后更新图表
  useEffect(() => {
    if (growthData) {
      if (gdpChart) gdpChart.setOption(getGdpChartOption());
      if (industryChart) industryChart.setOption(getIndustryChartOption());
      if (urbanChart) urbanChart.setOption(getUrbanChartOption());
      if (ruralChart) ruralChart.setOption(getRuralChartOption());
    }
  }, [growthData, gdpChart, industryChart, urbanChart, ruralChart]);

  useEffect(() => {
    // 图表初始化并添加观察者
    const chartObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const chartId = entry.target.id;

            if (chartId === 'gdp-chart' && gdpChartRef.current) {
              try {
                const chart = echarts.init(gdpChartRef.current);
                chart.setOption(getGdpChartOption());
                setGdpChart(chart);
              } catch (e) {
                console.error('初始化GDP增速图表失败', e);
              }
            }

            if (chartId === 'industry-chart' && industryChartRef.current) {
              try {
                const chart = echarts.init(industryChartRef.current);
                chart.setOption(getIndustryChartOption());
                setIndustryChart(chart);
              } catch (e) {
                console.error('初始化工业增速图表失败', e);
              }
            }

            if (chartId === 'urban-chart' && urbanChartRef.current) {
              try {
                const chart = echarts.init(urbanChartRef.current);
                chart.setOption(getUrbanChartOption());
                setUrbanChart(chart);
              } catch (e) {
                console.error('初始化城镇收入增速图表失败', e);
              }
            }

            if (chartId === 'rural-chart' && ruralChartRef.current) {
              try {
                const chart = echarts.init(ruralChartRef.current);
                chart.setOption(getRuralChartOption());
                setRuralChart(chart);
              } catch (e) {
                console.error('初始化农村收入增速图表失败', e);
              }
            }

            chartObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // 为所有图表容器添加观察者
    document.querySelectorAll('.chart-container').forEach((chart) => {
      chartObserver.observe(chart);
    });

    // 处理窗口大小变化
    const handleResize = () => {
      gdpChart?.resize();
      industryChart?.resize();
      urbanChart?.resize();
      ruralChart?.resize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      // 清理函数
      window.removeEventListener('resize', handleResize);
      gdpChart?.dispose();
      industryChart?.dispose();
      urbanChart?.dispose();
      ruralChart?.dispose();
    };
  }, [gdpChart, industryChart, urbanChart, ruralChart]);

  return (
    <section id="analysis" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-2 text-center">智慧经济分析</h2>
        <p className="text-gray-600 text-center mb-16">
          基于大数据分析的乡村经济发展态势
        </p>

        <div className="flex flex-col lg:flex-row gap-8 mb-10">
          <div className="lg:w-1/2 animate-on-scroll" data-delay="0">
            <div className="bg-white rounded-xl shadow-lg p-6 h-full">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                地区生产总值增速
              </h3>
              <div
                id="gdp-chart"
                ref={gdpChartRef}
                className="chart-container"
                style={{ height: '400px', width: '100%' }}
              ></div>
            </div>
          </div>
          <div className="lg:w-1/2 animate-on-scroll" data-delay="300">
            <div className="bg-white rounded-xl shadow-lg p-6 h-full">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                规模以上工业增加值增速
              </h3>
              <div
                id="industry-chart"
                ref={industryChartRef}
                className="chart-container"
                style={{ height: '400px', width: '100%' }}
              ></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2 animate-on-scroll" data-delay="600">
            <div className="bg-white rounded-xl shadow-lg p-6 h-full">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                城镇居民收入增速
              </h3>
              <div
                id="urban-chart"
                ref={urbanChartRef}
                className="chart-container"
                style={{ height: '400px', width: '100%' }}
              ></div>
            </div>
          </div>
          <div className="lg:w-1/2 animate-on-scroll" data-delay="900">
            <div className="bg-white rounded-xl shadow-lg p-6 h-full">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                农村居民收入增速
              </h3>
              <div
                id="rural-chart"
                ref={ruralChartRef}
                className="chart-container"
                style={{ height: '400px', width: '100%' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JingJiAnalysis;
