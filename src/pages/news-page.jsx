import React, { useState, useEffect } from 'react';
import { ArrowRight, Calendar, User, Bookmark } from 'lucide-react';
import MainLayout from './main-layout';

const NewsCard = ({ article, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`relative overflow-hidden rounded-lg shadow-lg transition-all duration-500 ${
        isHovered ? 'transform scale-102 shadow-xl' : ''
      }`}
      style={{
        animationDelay: `${index * 0.1}s`,
        animation: 'fadeInUp 0.8s ease-out forwards',
        opacity: 0,
        transform: 'translateY(20px)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent z-10"></div>
      
      <div 
        className="relative w-full h-48 overflow-hidden"
        style={{
          transition: 'all 0.5s ease-out',
          transform: isHovered ? 'scale(1.05)' : 'scale(1)'
        }}
      >
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-20 p-5 bg-gray-800 border-t border-blue-600/30">
        <div className="flex justify-between items-center mb-3 text-xs text-blue-300/70">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Calendar size={12} />
              {article.date}
            </span>
            <span className="flex items-center gap-1">
              <User size={12} />
              {article.author}
            </span>
          </div>
          <span className="flex items-center gap-1">
            <Bookmark size={12} />
            {article.category}
          </span>
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-white">
          {article.title}
        </h3>
        
        <p className="text-sm text-gray-300 mb-4">
          {article.summary}
        </p>
        
        <button 
          className={`inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors duration-300`}
        >
          查看详情 
          <ArrowRight size={16} className={`ml-1 transition-transform duration-300 ${isHovered ? 'transform translate-x-1' : ''}`} />
        </button>
      </div>
    </div>
  );
};

const NewsPage = () => {
  const [newsData, setNewsData] = useState([]);
  const [activeCategory, setActiveCategory] = useState('全部');
  const [searchQuery, setSearchQuery] = useState('');
  const [animateCategories, setAnimateCategories] = useState(false);

  // Simulate data fetch
  useEffect(() => {
    // Mock news data
    const mockNewsData = [
      {
        id: 1,
        title: "乡村数字化转型：新技术助力农业现代化",
        summary: "数字农业技术的创新应用，为乡村振兴注入新活力，提高农业生产效率和可持续发展能力。",
        date: "2025-04-25",
        author: "李明",
        category: "技术创新",
        image: "/api/placeholder/600/400"
      },
      {
        id: 2,
        title: "智慧乡村治理：数据驱动的决策模式",
        summary: "基于大数据分析的乡村治理新模式，实现精准施策，提升乡村治理水平和服务质量。",
        date: "2025-04-20",
        author: "张华",
        category: "政策解读",
        image: "/api/placeholder/600/400"
      },
      {
        id: 3,
        title: "区块链技术在农产品溯源中的应用",
        summary: "区块链技术为农产品质量安全提供全程可追溯解决方案，增强消费者信任度。",
        date: "2025-04-15",
        author: "王强",
        category: "技术创新",
        image: "/api/placeholder/600/400"
      },
      {
        id: 4,
        title: "乡村旅游数字化：打造智慧旅游新体验",
        summary: "数字技术在乡村旅游中的创新应用，为游客提供个性化、沉浸式的旅游体验。",
        date: "2025-04-10",
        author: "陈静",
        category: "产业发展",
        image: "/api/placeholder/600/400"
      },
      {
        id: 5,
        title: "数智赋能：乡村教育信息化建设成果",
        summary: "信息技术在乡村教育领域的应用与成效，促进教育资源均衡分配和质量提升。",
        date: "2025-04-05",
        author: "赵敏",
        category: "教育发展",
        image: "/api/placeholder/600/400"
      },
      {
        id: 6,
        title: "乡村健康云平台：远程医疗服务新模式",
        summary: "基于云计算的远程医疗服务平台，解决乡村医疗资源不足问题，提高医疗服务可及性。",
        date: "2025-03-30",
        author: "刘健",
        category: "医疗健康",
        image: "/api/placeholder/600/400"
      }
    ];
    
    setNewsData(mockNewsData);
    
    // Animate categories after a short delay
    setTimeout(() => {
      setAnimateCategories(true);
    }, 300);
  }, []);
  
  // Get unique categories
  const categories = ['全部', ...new Set(newsData.map(item => item.category))];
  
  // Filter news by category and search query
  const filteredNews = newsData.filter(item => {
    const matchesCategory = activeCategory === '全部' || item.category === activeCategory;
    const matchesSearch = !searchQuery || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <MainLayout 
      title="资讯中心" 
      subtitle="NEWS CENTER" 
      activePage="资讯"
      backgroundImage="/api/placeholder/1920/1080"
    >
      {/* Floating particles background effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-500/20 blur-xl"
            style={{
              width: `${Math.random() * 40 + 10}px`,
              height: `${Math.random() * 40 + 10}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float-particle ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 10}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10">
        {/* Search and filter */}
        <div className="mb-10 backdrop-blur-sm bg-gray-800/40 p-6 rounded-lg border border-blue-800/30 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="搜索资讯..."
                className="w-full bg-gray-900/60 border border-blue-800/30 rounded-lg py-3 px-4 pl-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 md:overflow-visible">
              {categories.map((category, index) => (
                <button
                  key={category}
                  className={`px-4 py-2 text-sm rounded-full transition-all duration-500 whitespace-nowrap ${
                    animateCategories ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'
                  } ${
                    activeCategory === category
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-800/80 text-gray-300 hover:bg-gray-700/80'
                  }`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* News grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((article, index) => (
            <NewsCard key={article.id} article={article} index={index} />
          ))}
        </div>
        
        {filteredNews.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-400">未找到相关资讯</p>
            <button 
              className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors duration-300"
              onClick={() => {
                setActiveCategory('全部');
                setSearchQuery('');
              }}
            >
              查看全部资讯
            </button>
          </div>
        )}
      </div>
      
      {/* Global CSS for animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float-particle {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          50% {
            opacity: 0.4;
          }
          100% {
            transform: translateY(-100vh) translateX(100px);
            opacity: 0;
          }
        }
        
        .scale-102 {
          transform: scale(1.02);
        }
        
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: translateY(0);
          }
          50% {
            opacity: 0.9;
            transform: translateY(-10px);
          }
        }
      `}</style>
    </MainLayout>
  );
};

export default NewsPage;