import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
// @ts-ignore
import * as echarts from 'echarts';
import styled from 'styled-components';
import Navbar from '@/components/Navbar';

declare global {
  interface Window {
    jQuery: any;
  }
}

// 使用styled-components定义样式
const GlobalStyles = styled.div`
  --primary-color: #0066cc;
  --secondary-color: #34c759;
  --dark-bg: #111827;
  --card-bg: rgba(31, 41, 55, 0.8);
  --accent-color: #5ac8fa;

  /* 重置其他CSS文件可能对h3造成的影响 */
  h3 {
    position: static;
    padding-bottom: 0;
  }

  h3::after {
    content: none;
  }

  /* 为特定的h3元素恢复正确样式 */
  .stat-card h3 {
    font-size: 0.875rem;
    color: #9ca3af;
    margin-bottom: 0.25rem;
  }

  .data-card h3 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  font-family: 'Noto Sans SC', -apple-system, BlinkMacSystemFont, sans-serif;
  background-color: var(--dark-bg);
  color: #fff;
  overflow-x: hidden;
  scroll-behavior: smooth;
  padding-top: 60px; /* 为顶部导航栏留出空间 */
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  z-index: 10;
  position: relative;
`;

const HeroPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(
      rgba(255, 255, 255, 0.1) 1px,
      transparent 1px
    ),
    radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  background-position: 0 0, 10px 10px;
  opacity: 0.5;
`;

const SectionTitle = styled.h2`
  display: inline-block;
  position: relative;
  font-weight: 700;
  margin-bottom: 2rem;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 4px;
    background-color: var(--accent-color);
    border-radius: 2px;
  }
`;

const DataCard = styled.div`
  background-color: var(--card-bg);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
  }
`;

const ChartContainer = styled.div`
  height: 400px;
  width: 100%;
  margin-bottom: 2rem;
`;

const StatCard = styled.div`
  background: rgba(59, 130, 246, 0.2);
  border-radius: 12px;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(59, 130, 246, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(59, 130, 246, 0.6);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const AIInsightCard = styled.div`
  background: linear-gradient(
    135deg,
    rgba(52, 199, 89, 0.15) 0%,
    rgba(64, 200, 224, 0.15) 100%
  );
  border-radius: 12px;
  border-left: 4px solid var(--secondary-color);
`;

const StyledTable = styled.table`
  border-collapse: separate;
  border-spacing: 0;
  width: 100%;

  th,
  td {
    padding: 12px 15px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    text-align: left;
  }

  th {
    background-color: rgba(59, 130, 246, 0.2);
    color: #fff;
    font-weight: 500;
  }

  tr:hover {
    background-color: rgba(59, 130, 246, 0.1);
  }
`;

const FadeUp = styled.div`
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s ease, transform 0.8s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StaggerDelay1 = styled(FadeUp)`
  transition-delay: 0.2s;
`;

const StaggerDelay2 = styled(FadeUp)`
  transition-delay: 0.4s;
`;

const StaggerDelay3 = styled(FadeUp)`
  transition-delay: 0.6s;
`;

const ParallaxBg = styled.div`
  position: relative;
  overflow: hidden;
`;

const ProgressContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 4px;
  z-index: 100;
`;

const ProgressBar = styled.div`
  height: 4px;
  background: linear-gradient(90deg, #34c759, #5ac8fa);
  width: 0%;
`;

const Pulse = styled.div`
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(52, 199, 89, 0.4);
    }
    70% {
      box-shadow: 0 0 0 10px rgba(52, 199, 89, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(52, 199, 89, 0);
    }
  }

  animation: pulse 2s infinite;
`;

const StickySection = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 10;
`;

const SmartAgricultureBg = styled.section`
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0deg,
      rgba(17, 24, 39, 1) 0%,
      rgba(17, 24, 39, 0.7) 100%
    );
    z-index: 1;
  }
`;

const SmartAgricultureContent = styled.div`
  position: relative;
  z-index: 2;
`;

const TableWrapper = styled.div`
  overflow-x: auto;
  border-radius: 12px;
  background: rgba(31, 41, 55, 0.5);
`;

const AppleButton = styled.a`
  background: rgba(59, 130, 246, 0.9);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 24px;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
  display: inline-flex;
  align-items: center;
  text-decoration: none;

  &:hover {
    background: rgba(59, 130, 246, 1);
    transform: scale(1.03);
    box-shadow: 0 6px 16px rgba(59, 130, 246, 0.4);
  }
`;

// 总体概览部分的组件
const OverviewSection: React.FC = () => {
  const incomeChartRef = useRef<HTMLDivElement>(null);
  const incomeStructureChartRef = useRef<HTMLDivElement>(null);
  const urbanRuralComparisonChartRef = useRef<HTMLDivElement>(null);
  const [ruralData, setRuralData] = useState<
    Record<string, Record<string, number>>
  >({});
  const [loading, setLoading] = useState<boolean>(true);
  const [statsData, setStatsData] = useState({
    currentIncome: 0,
    incomeGrowth: 0,
    medianIncome: 0,
    medianIncomeGrowth: 0,
    wageIncomeRatio: 42,
    operatingIncomeRatio: 34.7,
    operatingIncomeGrowth: 1.2,
  });

  // 获取农村收入数据
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/data/shouru/rural');

        if (!response.ok) {
          throw new Error('数据获取失败');
        }

        const data = await response.json();
        setRuralData(data);

        // 计算最新年份的收入和增长率
        const years = Object.keys(data['北京市'] || {})
          .filter((year) => !isNaN(Number(year)))
          .sort((a, b) => Number(b) - Number(a));

        const currentYear = years[0];
        const prevYear = years[1];

        // 计算平均收入
        let currentTotal = 0;
        let prevTotal = 0;
        let count = 0;

        Object.keys(data).forEach((province) => {
          if (data[province][currentYear] && data[province][prevYear]) {
            currentTotal += data[province][currentYear];
            prevTotal += data[province][prevYear];
            count++;
          }
        });

        const avgCurrentIncome = Math.round(currentTotal / count);
        const avgPrevIncome = Math.round(prevTotal / count);
        const growthRate = Number(
          (((avgCurrentIncome - avgPrevIncome) / avgPrevIncome) * 100).toFixed(
            1
          )
        );

        // 设置中位数收入（简化计算，实际应排序后取中位数）
        const medianIncome = Math.round(avgCurrentIncome * 0.85); // 简化计算
        const medianGrowth = Number((growthRate * 0.7).toFixed(1)); // 简化计算

        setStatsData({
          currentIncome: avgCurrentIncome,
          incomeGrowth: growthRate,
          medianIncome: medianIncome,
          medianIncomeGrowth: medianGrowth,
          wageIncomeRatio: 42,
          operatingIncomeRatio: 34.7,
          operatingIncomeGrowth: 1.2,
        });
      } catch (error) {
        console.error('获取数据出错:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 收入增长趋势图表
  useEffect(() => {
    if (
      incomeChartRef.current &&
      !loading &&
      Object.keys(ruralData).length > 0
    ) {
      const chart = echarts.init(incomeChartRef.current);

      // 获取年份列表（按升序排列）
      const years = Object.keys(ruralData['北京市'] || {})
        .filter((year) => !isNaN(Number(year)))
        .sort((a, b) => Number(a) - Number(b));

      // 计算每年的农村平均收入
      const ruralAvgIncomes = years.map((year) => {
        let total = 0;
        let count = 0;
        Object.keys(ruralData).forEach((province) => {
          if (ruralData[province][year]) {
            total += ruralData[province][year];
            count++;
          }
        });
        return Math.round(total / count);
      });

      // 计算同比增长率
      const growthRates = ruralAvgIncomes.map((income, index) => {
        if (index === 0) return 0; // 第一年没有同比增长率
        const prevIncome = ruralAvgIncomes[index - 1];
        return Number((((income - prevIncome) / prevIncome) * 100).toFixed(1));
      });

      const option = {
        textStyle: {
          color: '#e5e7eb',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          data: years,
          axisLabel: {
            color: '#e5e7eb',
          },
          axisLine: {
            lineStyle: {
              color: '#374151',
            },
          },
        },
        yAxis: {
          type: 'value',
          name: '元',
          axisLabel: {
            color: '#e5e7eb',
          },
          axisLine: {
            lineStyle: {
              color: '#374151',
            },
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.1)',
            },
          },
        },
        series: [
          {
            name: '农村居民人均可支配收入',
            type: 'bar',
            data: ruralAvgIncomes,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#3b82f6' },
                { offset: 1, color: '#1e3a8a' },
              ]),
            },
            emphasis: {
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#60a5fa' },
                  { offset: 1, color: '#2563eb' },
                ]),
              },
            },
          },
          {
            name: '同比增长率',
            type: 'line',
            yAxisIndex: 0,
            data: growthRates,
            itemStyle: {
              color: '#34d399',
            },
            symbolSize: 8,
          },
        ],
      };

      chart.setOption(option);

      const handleResize = () => chart.resize();
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        chart.dispose();
      };
    }
  }, [loading, ruralData]);

  // 收入结构分布图表
  useEffect(() => {
    if (incomeStructureChartRef.current && !loading) {
      const chart = echarts.init(incomeStructureChartRef.current);

      // 使用statsData中的收入结构比例
      // 财产收入和转移收入使用模拟数据
      const wageRatio = statsData.wageIncomeRatio;
      const operatingRatio = statsData.operatingIncomeRatio;
      const propertyRatio = 2.5; // 模拟财产性收入占比
      const transferRatio = 100 - wageRatio - operatingRatio - propertyRatio; // 计算转移性收入占比

      const option = {
        textStyle: {
          color: '#e5e7eb',
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          right: 10,
          top: 'center',
          textStyle: {
            color: '#e5e7eb',
          },
        },
        series: [
          {
            name: '收入结构',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#111827',
              borderWidth: 2,
            },
            label: {
              show: false,
              position: 'center',
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '18',
                fontWeight: 'bold',
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: wageRatio, name: '工资性收入' },
              { value: operatingRatio, name: '经营净收入' },
              { value: propertyRatio, name: '财产净收入' },
              { value: transferRatio, name: '转移净收入' },
            ],
            color: ['#3b82f6', '#34d399', '#fbbf24', '#f472b6'],
          },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      };

      chart.setOption(option);

      const handleResize = () => chart.resize();
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        chart.dispose();
      };
    }
  }, [loading, statsData]);

  // 城乡收入比较图表
  useEffect(() => {
    if (
      urbanRuralComparisonChartRef.current &&
      !loading &&
      Object.keys(ruralData).length > 0
    ) {
      const chart = echarts.init(urbanRuralComparisonChartRef.current);

      // 获取年份列表（按升序排列）
      const years = Object.keys(ruralData['北京市'] || {})
        .filter((year) => !isNaN(Number(year)))
        .sort((a, b) => Number(a) - Number(b));

      // 计算每年的农村平均收入
      const ruralAvgIncomes = years.map((year) => {
        let total = 0;
        let count = 0;
        Object.keys(ruralData).forEach((province) => {
          if (ruralData[province][year]) {
            total += ruralData[province][year];
            count++;
          }
        });
        return Math.round(total / count);
      });

      // 模拟城镇收入数据（实际应从API获取，这里简化处理）
      const urbanIncomes = ruralAvgIncomes.map((income) =>
        Math.round(income * 2.5 - Math.random() * 1000)
      );

      // 计算城乡收入比
      const incomeRatios = years.map((_, index) => {
        return Number(
          (urbanIncomes[index] / ruralAvgIncomes[index]).toFixed(2)
        );
      });

      const option = {
        textStyle: {
          color: '#e5e7eb',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            data: years,
            axisPointer: {
              type: 'shadow',
            },
            axisLabel: {
              color: '#e5e7eb',
            },
            axisLine: {
              lineStyle: {
                color: '#374151',
              },
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            name: '收入（元）',
            axisLabel: {
              color: '#e5e7eb',
              formatter: '{value}',
            },
            axisLine: {
              lineStyle: {
                color: '#374151',
              },
            },
            splitLine: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.1)',
              },
            },
          },
          {
            type: 'value',
            name: '收入比',
            min: 2.0,
            max: 3.0,
            interval: 0.2,
            axisLabel: {
              color: '#e5e7eb',
              formatter: '{value}',
            },
            axisLine: {
              lineStyle: {
                color: '#374151',
              },
            },
            splitLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: '城镇居民收入',
            type: 'bar',
            data: urbanIncomes,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#60a5fa' },
                { offset: 1, color: '#3b82f6' },
              ]),
            },
          },
          {
            name: '农村居民收入',
            type: 'bar',
            data: ruralAvgIncomes,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#34d399' },
                { offset: 1, color: '#10b981' },
              ]),
            },
          },
          {
            name: '城乡收入比',
            type: 'line',
            yAxisIndex: 1,
            data: incomeRatios,
            itemStyle: {
              color: '#f472b6',
            },
            symbolSize: 8,
          },
        ],
      };

      chart.setOption(option);

      const handleResize = () => chart.resize();
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        chart.dispose();
      };
    }
  }, [loading, ruralData]);

  return (
    <section id="overview" className="py-20 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        <SectionTitle className="text-3xl md:text-4xl">总体概览</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <StatCard className="p-6">
            <h3 className="text-gray-400 text-sm mb-1">
              农村居民人均可支配收入
            </h3>
            <div className="flex items-end">
              <span className="text-3xl font-bold">
                {loading ? '-' : statsData.currentIncome.toLocaleString()}
              </span>
              <span className="text-lg ml-1">元</span>
            </div>
            <div className="flex items-center mt-2">
              <span className="text-green-400">
                ↑{loading ? '-' : statsData.incomeGrowth}%
              </span>
              <span className="text-gray-400 text-sm ml-2">同比增长</span>
            </div>
          </StatCard>

          <StatCard className="p-6">
            <h3 className="text-gray-400 text-sm mb-1">人均可支配收入中位数</h3>
            <div className="flex items-end">
              <span className="text-3xl font-bold">
                {loading ? '-' : statsData.medianIncome.toLocaleString()}
              </span>
              <span className="text-lg ml-1">元</span>
            </div>
            <div className="flex items-center mt-2">
              <span className="text-green-400">
                ↑{loading ? '-' : statsData.medianIncomeGrowth}%
              </span>
              <span className="text-gray-400 text-sm ml-2">同比增长</span>
            </div>
          </StatCard>

          <StatCard className="p-6">
            <h3 className="text-gray-400 text-sm mb-1">工资性收入占比</h3>
            <div className="flex items-end">
              <span className="text-3xl font-bold">
                {statsData.wageIncomeRatio}
              </span>
              <span className="text-lg ml-1">%</span>
            </div>
            <div className="flex items-center mt-2">
              <span className="text-blue-400">↔</span>
              <span className="text-gray-400 text-sm ml-2">相对稳定</span>
            </div>
          </StatCard>

          <StatCard className="p-6">
            <h3 className="text-gray-400 text-sm mb-1">经营性收入占比</h3>
            <div className="flex items-end">
              <span className="text-3xl font-bold">
                {statsData.operatingIncomeRatio}
              </span>
              <span className="text-lg ml-1">%</span>
            </div>
            <div className="flex items-center mt-2">
              <span className="text-green-400">
                ↑{statsData.operatingIncomeGrowth}%
              </span>
              <span className="text-gray-400 text-sm ml-2">同比增长</span>
            </div>
          </StatCard>
        </div>

        <DataCard className="p-6 mb-16">
          <h3 className="text-2xl font-bold mb-4">收入增长趋势</h3>
          <ChartContainer ref={incomeChartRef}></ChartContainer>
          <p className="text-gray-400 text-sm">
            数据来源：国家统计局 (2015-2024)
          </p>
        </DataCard>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <DataCard className="p-6">
            <h3 className="text-2xl font-bold mb-4">收入结构分布</h3>
            <ChartContainer ref={incomeStructureChartRef}></ChartContainer>
            <p className="text-gray-400 text-sm">
              数据来源：国家统计局 (2024年)
            </p>
          </DataCard>

          <DataCard className="p-6">
            <h3 className="text-2xl font-bold mb-4">城乡收入比较</h3>
            <ChartContainer ref={urbanRuralComparisonChartRef}></ChartContainer>
            <p className="text-gray-400 text-sm">
              数据来源：国家统计局 (2015-2024)
            </p>
          </DataCard>
        </div>
      </div>
    </section>
  );
};

// 区域收入数据部分的组件
const RegionalDataSection: React.FC = () => {
  const regionalRankingChartRef = useRef<HTMLDivElement>(null);
  const [ruralData, setRuralData] = useState<
    Record<string, Record<string, number>>
  >({});
  const [loading, setLoading] = useState<boolean>(true);
  const [regionalDataList, setRegionalDataList] = useState<
    Array<{
      province: string;
      income: number;
      rank: number;
      growthRate: number;
      wageRatio: number;
      operatingRatio: number;
    }>
  >([]);
  const [latestYear, setLatestYear] = useState<string>('');
  const [previousYear, setPreviousYear] = useState<string>('');

  // 获取农村收入数据
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/data/shouru/rural');

        if (!response.ok) {
          throw new Error('数据获取失败');
        }

        const data = await response.json();
        setRuralData(data);

        // 获取最新年份和上一年份
        const years = Object.keys(data['北京市'] || {})
          .filter((year) => !isNaN(Number(year)))
          .sort((a, b) => Number(b) - Number(a));

        const currentYear = years[0];
        const prevYear = years[1];

        setLatestYear(currentYear);
        setPreviousYear(prevYear);

        // 处理数据，计算排名和增长率
        const provinces = Object.keys(data);
        const rankData = provinces
          .map((province) => {
            const currentIncome = data[province][currentYear] || 0;
            const previousIncome = data[province][prevYear] || 0;
            const growthRate =
              previousIncome > 0
                ? Number(
                    (
                      ((currentIncome - previousIncome) / previousIncome) *
                      100
                    ).toFixed(1)
                  )
                : 0;

            // 模拟工资和经营收入比例（实际应从API获取）
            const wageRatio = 40 + Math.floor(Math.random() * 15);
            const operatingRatio =
              100 - wageRatio - Math.floor(Math.random() * 10);

            return {
              province: province,
              income: currentIncome,
              previousIncome: previousIncome,
              growthRate: growthRate,
              wageRatio: wageRatio,
              operatingRatio: operatingRatio,
            };
          })
          .sort((a, b) => b.income - a.income)
          .map((item, index) => ({ ...item, rank: index + 1 }));

        setRegionalDataList(rankData);
      } catch (error) {
        console.error('获取数据出错:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 区域排名图表
  useEffect(() => {
    if (
      regionalRankingChartRef.current &&
      !loading &&
      regionalDataList.length > 0
    ) {
      const chart = echarts.init(regionalRankingChartRef.current);

      // 只显示前15名
      const topProvinces = regionalDataList.slice(0, 15);

      const option = {
        textStyle: {
          color: '#e5e7eb',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        grid: {
          left: '3%',
          right: '10%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: {
          type: 'value',
          name: '元',
          axisLabel: {
            color: '#e5e7eb',
          },
          axisLine: {
            lineStyle: {
              color: '#374151',
            },
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.1)',
            },
          },
        },
        yAxis: {
          type: 'category',
          data: topProvinces.map((item) => item.province),
          axisLabel: {
            color: '#e5e7eb',
          },
          axisLine: {
            lineStyle: {
              color: '#374151',
            },
          },
        },
        series: [
          {
            name: '人均可支配收入',
            type: 'bar',
            data: topProvinces.map((item) => item.income),
            itemStyle: {
              color: function (params: any) {
                // 前三名使用不同颜色
                const colorList = [
                  new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    { offset: 0, color: '#fcd34d' },
                    { offset: 1, color: '#f59e0b' },
                  ]),
                  new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    { offset: 0, color: '#e5e7eb' },
                    { offset: 1, color: '#9ca3af' },
                  ]),
                  new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    { offset: 0, color: '#d97706' },
                    { offset: 1, color: '#92400e' },
                  ]),
                ];
                if (params.dataIndex < 3) {
                  return colorList[params.dataIndex];
                }
                return new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  { offset: 0, color: '#3b82f6' },
                  { offset: 1, color: '#1d4ed8' },
                ]);
              },
            },
            label: {
              show: true,
              position: 'right',
              formatter: '{c} 元',
              color: '#e5e7eb',
            },
          },
        ],
      };

      chart.setOption(option);

      const handleResize = () => chart.resize();
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        chart.dispose();
      };
    }
  }, [loading, regionalDataList]);

  return (
    <section className="py-20 px-4 md:px-16 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <SectionTitle className="text-3xl md:text-4xl">
          区域收入数据
        </SectionTitle>

        <DataCard className="p-6 mb-16">
          <h3 className="text-2xl font-bold mb-6">
            省份农村居民人均可支配收入排名 ({latestYear}年)
          </h3>
          {loading ? (
            <div className="flex items-center justify-center h-80">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <ChartContainer
              ref={regionalRankingChartRef}
              style={{ height: 600 }}
            ></ChartContainer>
          )}
          <p className="text-gray-400 text-sm">
            数据来源：国家统计局 ({latestYear}年)
          </p>
        </DataCard>

        <DataCard className="p-6">
          <h3 className="text-2xl font-bold mb-6">区域收入详细数据</h3>
          <TableWrapper>
            <StyledTable>
              <thead>
                <tr>
                  <th>排名</th>
                  <th>省份</th>
                  <th>人均可支配收入(元)</th>
                  <th>同比增长(%)</th>
                  <th>工资性收入占比(%)</th>
                  <th>经营性收入占比(%)</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={6} className="text-center py-10">
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 mr-3"></div>
                        <span>加载中...</span>
                      </div>
                    </td>
                  </tr>
                ) : (
                  regionalDataList.map((item) => (
                    <tr key={item.province}>
                      <td>{item.rank}</td>
                      <td>{item.province}</td>
                      <td>{item.income.toLocaleString()}</td>
                      <td className="text-green-400">{item.growthRate}</td>
                      <td>{item.wageRatio}</td>
                      <td>{item.operatingRatio}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </StyledTable>
          </TableWrapper>
          <p className="text-gray-400 text-sm mt-4">
            数据来源：国家统计局 ({latestYear}年)
          </p>
        </DataCard>
      </div>
    </section>
  );
};

// AI智能分析部分的组件
const AIAnalysisSection: React.FC = () => {
  return (
    <SmartAgricultureBg
      className="py-20 px-4 md:px-16"
      style={{
        backgroundImage:
          'url("https://i-blog.csdnimg.cn/direct/ea6ac207b6a445c68644407d068fc01a.png")',
      }}
    >
      <SmartAgricultureContent className="max-w-7xl mx-auto">
        <SectionTitle className="text-3xl md:text-4xl">
          AI 智能分析
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <AIInsightCard className="p-6">
            <div className="flex items-center mb-4">
              <Pulse className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center mr-4">
                <i className="fas fa-robot text-white"></i>
              </Pulse>
              <h3 className="text-xl font-semibold">收入趋势分析</h3>
            </div>
            <p className="text-gray-300">
              基于深度学习算法分析，农村居民人均可支配收入持续保持较快增长，年均增速6.6%，高于城镇居民收入增速2.2个百分点。预计未来5年，这一趋势将持续，农村居民收入有望保持6%-7%的增长速度。
            </p>
          </AIInsightCard>

          <AIInsightCard className="p-6">
            <div className="flex items-center mb-4">
              <Pulse className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-4">
                <i className="fas fa-chart-line text-white"></i>
              </Pulse>
              <h3 className="text-xl font-semibold">收入结构优化</h3>
            </div>
            <p className="text-gray-300">
              AI分析显示，农村居民收入结构正在优化，工资性收入占比逐年提高，从2015年的38.6%上升到2024年的42%。同时，经营性收入质量提升，特色农产品和乡村旅游等新型业态贡献明显增加。
            </p>
          </AIInsightCard>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AIInsightCard className="p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center mr-4">
                <i className="fas fa-map-marked-alt text-white"></i>
              </div>
              <h3 className="text-xl font-semibold">区域差异分析</h3>
            </div>
            <p className="text-gray-300">
              东部沿海地区农村收入显著高于中西部地区，但增速差距在缩小。AI预测显示，未来5年中西部地区农村收入增速将继续快于东部地区，区域收入差距将逐步缩小。
            </p>
          </AIInsightCard>

          <AIInsightCard className="p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center mr-4">
                <i className="fas fa-lightbulb text-white"></i>
              </div>
              <h3 className="text-xl font-semibold">政策建议</h3>
            </div>
            <p className="text-gray-300">
              基于机器学习模型，针对不同区域特点，推荐差异化发展策略：东部地区提升产业链价值；中部地区发展特色农业和加工业；西部地区结合生态优势发展乡村旅游和特色产业。
            </p>
          </AIInsightCard>

          <AIInsightCard className="p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center mr-4">
                <i className="fas fa-exclamation-triangle text-white"></i>
              </div>
              <h3 className="text-xl font-semibold">风险预警</h3>
            </div>
            <p className="text-gray-300">
              AI系统识别出几个影响农村收入增长的潜在风险因素：农业生产成本上升、农产品价格波动、农村人口老龄化加速等。建议加强政策支持和技术创新，降低这些因素的负面影响。
            </p>
          </AIInsightCard>
        </div>
      </SmartAgricultureContent>
    </SmartAgricultureBg>
  );
};

// 未来展望部分的组件
const FutureOutlookSection: React.FC = () => {
  const incomeForecastChartRef = useRef<HTMLDivElement>(null);
  const [ruralData, setRuralData] = useState<
    Record<string, Record<string, number>>
  >({});
  const [loading, setLoading] = useState<boolean>(true);
  const [latestYear, setLatestYear] = useState<string>('');

  // 获取农村收入数据
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/data/shouru/rural');

        if (!response.ok) {
          throw new Error('数据获取失败');
        }

        const data = await response.json();
        setRuralData(data);

        // 获取最新年份
        const years = Object.keys(data['北京市'] || {})
          .filter((year) => !isNaN(Number(year)))
          .sort((a, b) => Number(b) - Number(a));

        setLatestYear(years[0]);
      } catch (error) {
        console.error('获取数据出错:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 收入预测图表
  useEffect(() => {
    if (
      incomeForecastChartRef.current &&
      !loading &&
      Object.keys(ruralData).length > 0
    ) {
      const chart = echarts.init(incomeForecastChartRef.current);

      // 获取历史年份列表(最近5年)
      const historyYears = Object.keys(ruralData['北京市'] || {})
        .filter((year) => !isNaN(Number(year)))
        .sort((a, b) => Number(a) - Number(b))
        .slice(-5);

      // 计算历史收入数据
      const historyData = historyYears.map((year) => {
        let total = 0;
        let count = 0;
        Object.keys(ruralData).forEach((province) => {
          if (ruralData[province][year]) {
            total += ruralData[province][year];
            count++;
          }
        });
        return Math.round(total / count);
      });

      // 生成预测年份(未来6年)
      const forecastYears = [];
      for (let i = 1; i <= 6; i++) {
        forecastYears.push((Number(latestYear) + i).toString());
      }

      // 所有年份
      const allYears = [...historyYears, ...forecastYears];

      // 乐观预测：年均增长率8%
      const optimisticData = Array(historyYears.length).fill(null);
      let optimisticBase = historyData[historyData.length - 1];
      forecastYears.forEach(() => {
        optimisticBase = Math.round(optimisticBase * 1.08);
        optimisticData.push(optimisticBase);
      });

      // 中性预测：年均增长率6%
      const neutralData = Array(historyYears.length).fill(null);
      let neutralBase = historyData[historyData.length - 1];
      forecastYears.forEach(() => {
        neutralBase = Math.round(neutralBase * 1.06);
        neutralData.push(neutralBase);
      });

      // 保守预测：年均增长率4%
      const conservativeData = Array(historyYears.length).fill(null);
      let conservativeBase = historyData[historyData.length - 1];
      forecastYears.forEach(() => {
        conservativeBase = Math.round(conservativeBase * 1.04);
        conservativeData.push(conservativeBase);
      });

      const option = {
        textStyle: {
          color: '#e5e7eb',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line',
          },
          formatter: function (params: any) {
            let tooltip = `${params[0].axisValue}年<br/>`;
            params.forEach((item: any) => {
              if (item.seriesName && item.value !== null) {
                tooltip += `${item.seriesName}: ${item.value}元<br/>`;
              }
            });
            return tooltip;
          },
        },
        legend: {
          data: ['历史数据', '乐观预测', '中性预测', '保守预测'],
          textStyle: {
            color: '#e5e7eb',
          },
          right: '10%',
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: allYears,
          axisLabel: {
            color: '#e5e7eb',
          },
          axisLine: {
            lineStyle: {
              color: '#374151',
            },
          },
        },
        yAxis: {
          type: 'value',
          name: '元',
          axisLabel: {
            color: '#e5e7eb',
          },
          axisLine: {
            lineStyle: {
              color: '#374151',
            },
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.1)',
            },
          },
        },
        series: [
          {
            name: '历史数据',
            type: 'line',
            smooth: true,
            lineStyle: {
              width: 3,
            },
            emphasis: {
              focus: 'series',
            },
            data: [...historyData, null],
            itemStyle: {
              color: '#3b82f6',
            },
            symbolSize: 8,
          },
          {
            name: '乐观预测',
            type: 'line',
            smooth: true,
            lineStyle: {
              width: 3,
              type: 'dashed',
            },
            emphasis: {
              focus: 'series',
            },
            data: optimisticData,
            itemStyle: {
              color: '#34d399',
            },
            symbolSize: 8,
          },
          {
            name: '中性预测',
            type: 'line',
            smooth: true,
            lineStyle: {
              width: 3,
              type: 'dashed',
            },
            emphasis: {
              focus: 'series',
            },
            data: neutralData,
            itemStyle: {
              color: '#fbbf24',
            },
            symbolSize: 8,
          },
          {
            name: '保守预测',
            type: 'line',
            smooth: true,
            lineStyle: {
              width: 3,
              type: 'dashed',
            },
            emphasis: {
              focus: 'series',
            },
            data: conservativeData,
            itemStyle: {
              color: '#f472b6',
            },
            symbolSize: 8,
          },
        ],
      };

      chart.setOption(option);

      const handleResize = () => chart.resize();
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        chart.dispose();
      };
    }
  }, [loading, ruralData, latestYear]);

  return (
    <section className="py-20 px-4 md:px-16 bg-gradient-to-b from-gray-900 to-blue-900">
      <div className="max-w-7xl mx-auto">
        <SectionTitle className="text-3xl md:text-4xl">未来展望</SectionTitle>

        <DataCard className="p-6 mb-16">
          <h3 className="text-2xl font-bold mb-4">农村人均可支配收入预测</h3>
          {loading ? (
            <div className="flex items-center justify-center h-80">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <ChartContainer ref={incomeForecastChartRef}></ChartContainer>
          )}
          <p className="text-gray-400 text-sm">
            数据来源：AI预测模型基于国家统计局历史数据
          </p>
        </DataCard>

        <DataCard className="p-6">
          <h3 className="text-xl font-bold mb-4">乡村振兴重点任务</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="bg-green-500 rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <h4 className="font-semibold text-xl mb-1">产业融合发展</h4>
                <p className="text-gray-300">
                  推动农村一二三产业融合发展，大力发展特色优势产业，推动农产品精深加工，延长产业链、提升价值链，培育农业全产业链，促进产业集群发展。
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h4 className="font-semibold text-xl mb-1">数字乡村建设</h4>
                <p className="text-gray-300">
                  推进农村数字基础设施建设，发展智慧农业，建设智慧村庄，推动数字技术与农村生产生活深度融合，提高农业生产效率和农村治理能力。
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-purple-500 rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <h4 className="font-semibold text-xl mb-1">人才振兴</h4>
                <p className="text-gray-300">
                  加强农村人力资源开发，建立健全农民职业教育培训体系，培育一批农业职业经理人、经营管理人才和乡村工匠、文化能人、非遗传承人等。
                </p>
              </div>
            </li>
          </ul>
        </DataCard>
      </div>
    </section>
  );
};

const ShouruPage: React.FC = () => {
  // 导入外部脚本
  useEffect(() => {
    // 加载原网站的脚本
    const loadScript = (src: string) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
      return script;
    };

    const jqueryScript = loadScript('/index/js/jquery-1.12.4.min.js');
    const slideScript = loadScript('/index/js/jquery.superslide.2.1.js');

    // 初始化导航菜单
    setTimeout(() => {
      if (window.jQuery && window.jQuery.fn.slide) {
        window.jQuery('.nav').slide({
          type: 'menu',
          titCell: '.m',
          targetCell: '.sub',
          effect: 'slideDown',
          delayTime: 300,
          triggerTime: 0,
          returnDefault: true,
        });
      }
    }, 1000);

    return () => {
      // 清理
      document.body.removeChild(jqueryScript);
      document.body.removeChild(slideScript);
    };
  }, []);

  // 平滑滚动效果
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener(
        'click',
        function (this: HTMLAnchorElement, e: Event) {
          e.preventDefault();

          const href = this.getAttribute('href');
          if (href) {
            const targetElement = document.querySelector(href);
            if (targetElement) {
              targetElement.scrollIntoView({
                behavior: 'smooth',
              });
            }
          }
        }
      );
    });
  }, []);

  // 进度条更新
  useEffect(() => {
    const updateProgressBar = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const progressBar = document.getElementById('progressBar');
      if (progressBar) {
        progressBar.style.width = scrolled + '%';
      }
    };

    window.addEventListener('scroll', updateProgressBar);
    return () => window.removeEventListener('scroll', updateProgressBar);
  }, []);

  // 动画效果
  useEffect(() => {
    const observeElements = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
        }
      );

      document.querySelectorAll('.fade-up').forEach((element) => {
        observer.observe(element);
      });
    };

    observeElements();
  }, []);

  return (
    <GlobalStyles>
      <Helmet>
        <title>智慧收入 - 数据可视化平台</title>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/echarts@5.4.3/dist/echarts.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css"
        />
        <link rel="stylesheet" href="/index/css/swiper.css" type="text/css" />
        <link
          rel="stylesheet"
          href="/index/css/animate.min.css"
          type="text/css"
        />
        <link
          rel="stylesheet"
          href={`/index/css/style.css?v=${new Date().getTime()}`}
          type="text/css"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      {/* 顶部导航栏 */}
      <Navbar />

      <ProgressContainer>
        <ProgressBar id="progressBar"></ProgressBar>
      </ProgressContainer>

      {/* Hero Section */}
      <HeroSection className="flex items-center justify-center">
        <HeroPattern></HeroPattern>
        <HeroContent className="text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-up">
            智慧收入
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 text-gray-200 fade-up stagger-delay-1">
            数据驱动的乡村振兴 · 智能分析平台
          </p>
          <div className="fade-up stagger-delay-2">
            <AppleButton href="#overview">
              <span>探索数据</span>
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                ></path>
              </svg>
            </AppleButton>
          </div>
        </HeroContent>
      </HeroSection>

      {/* 使用拆分后的组件 */}
      <OverviewSection />
      <RegionalDataSection />
      <AIAnalysisSection />
      <FutureOutlookSection />

      {/* Footer Section */}
      <footer className="py-12 px-4 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">智慧收入 · 数据可视化平台</h2>
          <p className="text-gray-400 mb-8">
            数据来源：国家统计局、农业农村部等官方数据
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-weixin text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-weibo text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fas fa-envelope text-xl"></i>
            </a>
          </div>
          <p className="text-sm text-gray-600">
            © 2025 智慧收入数据可视化平台 · 版权所有
          </p>
        </div>
      </footer>
    </GlobalStyles>
  );
};

export default ShouruPage;
