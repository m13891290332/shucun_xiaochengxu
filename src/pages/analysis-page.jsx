import React, { useState, useEffect } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChevronDown, ChevronUp, Filter, Download, RefreshCw, TrendingUp, TrendingDown, AlertCircle } from 'lucide-react';
import MainLayout from './main-layout';

// Dashboard card with animated transitions
const DashboardCard = ({ title, value, icon, trend, color, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 100);
    
    return () => clearTimeout(timer);
  }, [index]);
  
  const trendIcon = trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />;
  const trendColor = trend === 'up' ? 'text-green-400' : 'text-red-400';
  
  return (
    <div 
      className={`relative overflow-hidden rounded-lg border border-blue-800/30 transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/80 to-gray-900/90"></div>
      
      {/* Glowing accent corner */}
      <div 
        className="absolute top-0 right-0 w-16 h-16 transform translate-x-8 -translate-y-8 rounded-full blur-xl"
        style={{ backgroundColor: color, opacity: 0.3 }}
      ></div>
      
      <div className="relative p-5 backdrop-blur-sm">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-sm font-medium text-gray-400 mb-2">{title}</h3>
            <div className="text-2xl font-bold text-white mb-1">{value}</div>
            <div className={`flex items-center text-xs ${trendColor}`}>
              {trendIcon}
              <span className="ml-1">8.2% 相比上月</span>
            </div>
          </div>
          <div className="p-2 rounded-lg" style={{ backgroundColor: `${color}20` }}>
            <div className="text-2xl" style={{ color }}>{icon}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Chart wrapper with animated appearance
const ChartWrapper = ({ title, subtitle, children, filterOptions, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState(filterOptions ? filterOptions[0] : null);
  const [showFilters, setShowFilters] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div 
      className={`relative rounded-lg border border-blue-800/30 overflow-hidden backdrop-blur-sm transition-all duration-700 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/70 to-gray-900/90"></div>
      
      <div className="relative p-5">
        <div className="flex flex-wrap justify-between items-center mb-4">
          <div>
            <h3 className="text-lg font-bold text-white">{title}</h3>
            {subtitle && <p className="text-sm text-blue-300/70">{subtitle}</p>}
          </div>
          
          {filterOptions && (
            <div className="relative">
              <button 
                className="flex items-center justify-between px-4 py-2 text-sm bg-gray-800/80 hover:bg-gray-700/80 text-gray-300 rounded-lg border border-gray-700"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter size={14} className="mr-2" />
                {activeFilter}
                {showFilters ? <ChevronUp size={14} className="ml-2" /> : <ChevronDown size={14} className="ml-2" />}
              </button>
              
              {showFilters && (
                <div className="absolute right-0 mt-1 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-10 min-w-full">
                  <div className="py-1">
                    {filterOptions.map((option) => (
                      <button
                        key={option}
                        className={`block w-full text-left px-4 py-2 text-sm ${
                          activeFilter === option ? 'bg-blue-600/30 text-white' : 'text-gray-300 hover:bg-gray-700'
                        }`}
                        onClick={() => {
                          setActiveFilter(option);
                          setShowFilters(false);
                        }}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        
        <div className="pt-2">
          {children}
        </div>
      </div>
    </div>
  );
};

// Data table with search functionality
const DataTable = ({ data, columns, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  // Filter data based on search query
  const filteredData = data.filter((row) => 
    Object.values(row).some((value) => 
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );
  
  // Sort data if sort column is selected
  const sortedData = sortColumn 
    ? [...filteredData].sort((a, b) => {
        const aValue = a[sortColumn];
        const bValue = b[sortColumn];
        const direction = sortDirection === 'asc' ? 1 : -1;
        
        if (typeof aValue === 'number') {
          return (aValue - bValue) * direction;
        } else {
          return String(aValue).localeCompare(String(bValue)) * direction;
        }
      })
    : filteredData;
  
  // Handle sort change
  const handleSort = (columnKey) => {
    if (sortColumn === columnKey) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(columnKey);
      setSortDirection('asc');
    }
  };
  
  return (
    <div 
      className={`relative rounded-lg border border-blue-800/30 overflow-hidden transition-all duration-700 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/70 to-gray-900/90"></div>
      
      <div className="relative p-5">
        <div className="flex flex-wrap justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-white">乡村数据详情</h3>
          
          <div className="relative mt-2 sm:mt-0">
            <input
              type="text"
              placeholder="搜索数据..."
              className="px-4 py-2 text-sm bg-gray-800/80 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                {columns.map((column) => (
                  <th
                    key={column.key}
                    className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider border-b border-gray-700 cursor-pointer hover:text-blue-300"
                    onClick={() => handleSort(column.key)}
                  >
                    <div className="flex items-center">
                      {column.label}
                      {sortColumn === column.key && (
                        <span className="ml-1">
                          {sortDirection === 'asc' ? '↑' : '↓'}
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {sortedData.map((row, rowIndex) => (
                <tr 
                  key={rowIndex} 
                  className="hover:bg-blue-900/20 transition-colors duration-150"
                  style={{
                    animation: 'fadeIn 0.3s ease-out forwards',
                    animationDelay: `${rowIndex * 0.05}s`,
                    opacity: 0
                  }}
                >
                  {columns.map((column) => (
                    <td 
                      key={column.key} 
                      className="px-4 py-3 text-sm text-gray-300"
                    >
                      {row[column.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          
          {sortedData.length === 0 && (
            <div className="text-center py-8 text-gray-400">
              未找到匹配的数据
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const AnalysisPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Mock data for charts
  const populationData = [
    { year: '2020', population: 28500, male: 14800, female: 13700 },
    { year: '2021', population: 27800, male: 14500, female: 13300 },
    { year: '2022', population: 27300, male: 14200, female: 13100 },
    { year: '2023', population: 26900, male: 14000, female: 12900 },
    { year: '2024', population: 26500, male: 13800, female: 12700 },
    { year: '2025', population: 26100, male: 13600, female: 12500 },
  ];
  
  const incomeData = [
    { year: '2020', '农业收入': 3200, '工业收入': 1800, '服务业收入': 2600 },
    { year: '2021', '农业收入': 3300, '工业收入': 2200, '服务业收入': 2900 },
    { year: '2022', '农业收入': 3500, '工业收入': 2600, '服务业收入': 3400 },
    { year: '2023', '农业收入': 3700, '工业收入': 3000, '服务业收入': 3900 },
    { year: '2024', '农业收入': 4000, '工业收入': 3500, '服务业收入': 4500 },
    { year: '2025', '农业收入': 4200, '工业收入': 3800, '服务业收入': 5200 },
  ];
  
  const educationData = [
    { name: '小学及以下', value: 25 },
    { name: '初中', value: 35 },
    { name: '高中/中专', value: 25 },
    { name: '大专', value: 10 },
    { name: '本科及以上', value: 5 },
  ];
  
  const ageDistributionData = [
    { name: '0-14岁', value: 15 },
    { name: '15-29岁', value: 18 },
    { name: '30-44岁', value: 25 },
    { name: '45-59岁', value: 28 },
    { name: '60岁以上', value: 14 },
  ];
  
  const landUseData = [
    { name: '农田', value: 55 },
    { name: '林地', value: 25 },
    { name: '水域', value: 8 },
    { name: '建设用地', value: 10 },
    { name: '未利用地', value: 2 },
  ];
  
  const infraData = [
    { name: '道路覆盖率', '完成度': 85, '目标': 100 },
    { name: '自来水普及率', '完成度': 92, '目标': 100 },
    { name: '电网覆盖率', '完成度': 98, '目标': 100 },
    { name: '互联网覆盖率', '完成度': 78, '目标': 100 },
    { name: '垃圾处理设施', '完成度': 65, '目标': 100 },
    { name: '污水处理设施', '完成度': 60, '目标': 100 },
  ];
  
  // Mock data for table
  const villageData = [
    { name: '青山村', population: 2580, area: 15.6, income: 12800, industry: '农业种植', level: '省级示范村' },
    { name: '河畔村', population: 1850, area: 12.3, income: 10500, industry: '畜牧养殖', level: '市级文明村' },
    { name: '松林村', population: 3120, area: 18.5, income: 15200, industry: '乡村旅游', level: '国家级美丽乡村' },
    { name: '丰收村', population: 2340, area: 14.2, income: 11600, industry: '农产品加工', level: '市级示范村' },
    { name: '阳光村', population: 1680, area: 10.8, income: 9800, industry: '传统手工艺', level: '县级文明村' },
    { name: '龙泉村', population: 2750, area: 16.4, income: 13500, industry: '果蔬种植', level: '省级文明村' },
    { name: '美丽湾村', population: 2100, area: 13.5, income: 14200, industry: '水产养殖', level: '市级美丽乡村' },
    { name: '和谐村', population: 1950, area: 11.9, income: 10200, industry: '农业种植', level: '县级示范村' },
  ];
  
  const tableColumns = [
    { key: 'name', label: '村庄名称' },
    { key: 'population', label: '人口' },
    { key: 'area', label: '面积(km²)' },
    { key: 'income', label: '人均收入(元)' },
    { key: 'industry', label: '主导产业' },
    { key: 'level', label: '荣誉级别' },
  ];
  
  // PIE CHART COLORS
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  return (
    <MainLayout 
      title="数据分析" 
      subtitle="DATA ANALYSIS" 
      activePage="数据分析"
      backgroundImage="/api/placeholder/1920/1080"
    >
      {isLoading ? (
        <div className="flex items-center justify-center py-32">
          <div className="text-center">
            <div className="inline-block w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-lg text-blue-300">加载数据中...</p>
          </div>
        </div>
      ) : (
        <div className="relative z-10">
          {/* Floating elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Data visualization-themed particles */}
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-blue-500/10 blur-sm"
                style={{
                  width: `${Math.random() * 8 + 4}px`,
                  height: `${Math.random() * 8 + 4}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `float-data-particle ${Math.random() * 40 + 20}s linear infinite`,
                  animationDelay: `${Math.random() * 10}s`
                }}
              />
            ))}
            
            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              {[...Array(10)].map((_, i) => {
                const x1 = Math.random() * 100;
                const y1 = Math.random() * 100;
                const x2 = Math.random() * 100;
                const y2 = Math.random() * 100;
                
                return (
                  <line
                    key={i}
                    x1={`${x1}%`}
                    y1={`${y1}%`}
                    x2={`${x2}%`}
                    y2={`${y2}%`}
                    stroke="url(#lineGradient)"
                    strokeWidth="1"
                    strokeDasharray="5,5"
                    style={{
                      animation: `dash-animation ${Math.random() * 30 + 30}s linear infinite`
                    }}
                  />
                );
              })}
            </svg>
          </div>
          
          {/* Dashboard summary cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <DashboardCard 
              title="总人口数量" 
              value="26,100人" 
              icon="👥" 
              trend="down" 
              color="#3B82F6" 
              index={0}
            />
            <DashboardCard 
              title="年均收入" 
              value="13,200元" 
              icon="💰" 
              trend="up" 
              color="#10B981" 
              index={1}
            />
            <DashboardCard 
              title="产业数量" 
              value="12个" 
              icon="🏭" 
              trend="up" 
              color="#F59E0B" 
              index={2}
            />
            <DashboardCard 
              title="平均年龄" 
              value="42.5岁" 
              icon="👴" 
              trend="up" 
              color="#6366F1" 
              index={3}
            />
          </div>
          
          {/* First row of charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <ChartWrapper 
              title="人口变化趋势" 
              subtitle="2020-2025年人口数据统计"
              filterOptions={['总人口', '按性别']} 
              delay={300}
            >
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={populationData}>
                    <defs>
                      <linearGradient id="colorPopulation" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                    <XAxis dataKey="year" stroke="#999" />
                    <YAxis stroke="#999" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(24, 26, 32, 0.9)', 
                        border: '1px solid #444', 
                        borderRadius: '4px',
                        color: '#fff'
                      }} 
                    />
                    <Legend />
                    <Area 
                      type="monotone" 
                      dataKey="population" 
                      stroke="#3B82F6" 
                      fillOpacity={1} 
                      fill="url(#colorPopulation)" 
                      activeDot={{ r: 8 }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </ChartWrapper>
            
            <ChartWrapper 
              title="收入构成分析" 
              subtitle="2020-2025年各产业收入(万元)"
              filterOptions={['按产业', '按年份']} 
              delay={400}
            >
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={incomeData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                    <XAxis dataKey="year" stroke="#999" />
                    <YAxis stroke="#999" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(24, 26, 32, 0.9)', 
                        border: '1px solid #444', 
                        borderRadius: '4px',
                        color: '#fff'
                      }} 
                    />
                    <Legend />
                    <Bar dataKey="农业收入" fill="#10B981" />
                    <Bar dataKey="工业收入" fill="#6366F1" />
                    <Bar dataKey="服务业收入" fill="#F59E0B" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </ChartWrapper>
          </div>
          
          {/* Second row of charts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <ChartWrapper 
              title="教育程度分布" 
              subtitle="村民教育水平占比"
              delay={500}
            >
              <div className="h-64 flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={educationData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                      label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                      labelLine={false}
                    >
                      {educationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(24, 26, 32, 0.9)', 
                        border: '1px solid #444', 
                        borderRadius: '4px',
                        color: '#fff'
                      }} 
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </ChartWrapper>
            
            <ChartWrapper 
              title="年龄结构" 
              subtitle="人口年龄分布"
              delay={600}
            >
              <div className="h-64 flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={ageDistributionData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                      label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                      labelLine={false}
                    >
                      {ageDistributionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(24, 26, 32, 0.9)', 
                        border: '1px solid #444', 
                        borderRadius: '4px',
                        color: '#fff'
                      }} 
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </ChartWrapper>
            
            <ChartWrapper 
              title="土地利用" 
              subtitle="土地用途分布(%)"
              delay={700}
            >
              <div className="h-64 flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={landUseData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                      label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                      labelLine={false}
                    >
                      {landUseData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(24, 26, 32, 0.9)', 
                        border: '1px solid #444', 
                        borderRadius: '4px',
                        color: '#fff'
                      }} 
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </ChartWrapper>
          </div>
          
          {/* Infrastructure progress chart */}
          <div className="mb-8">
            <ChartWrapper 
              title="基础设施建设进度" 
              subtitle="各类基础设施完成率(%)"
              delay={800}
            >
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={infraData}
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" horizontal={false} />
                    <XAxis type="number" domain={[0, 100]} stroke="#999" />
                    <YAxis dataKey="name" type="category" stroke="#999" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(24, 26, 32, 0.9)', 
                        border: '1px solid #444', 
                        borderRadius: '4px',
                        color: '#fff'
                      }} 
                    />
                    <Legend />
                    <Bar dataKey="完成度" fill="#3B82F6" barSize={20} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </ChartWrapper>
          </div>
          
          {/* Data table */}
          <DataTable 
            data={villageData} 
            columns={tableColumns} 
            delay={900} 
          />
          
          {/* Data source info */}
          <div className="mt-8 text-center text-gray-400 text-sm flex items-center justify-center">
            <AlertCircle size={14} className="mr-2" />
            数据来源：乡村振兴数据中心，更新日期：2025-04-30
          </div>
        </div>
      )}
      
      {/* Global CSS for animations */}
      <style jsx global>{`
        @keyframes float-data-particle {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0.2;
          }
          50% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-80vh) translateX(80vw);
            opacity: 0.2;
          }
        }
        
        @keyframes dash-animation {
          to {
            stroke-dashoffset: 100;
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </MainLayout>
  );
};

export default AnalysisPage;