
import React, { useState, useEffect } from 'react';
import { CheckCircle, ChevronUp, ChevronDown, ArrowRight } from 'lucide-react';
import MainLayout from './main-layout';

// Cooperation model card component
const CooperationModelCard = ({ model, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`relative overflow-hidden rounded-lg border transition-all duration-500 ${
        isHovered ? 'border-blue-400 shadow-glow' : 'border-blue-800/30'
      }`}
      style={{
        animation: `fadeInRight 0.8s ease-out forwards`,
        animationDelay: `${index * 0.2}s`,
        opacity: 0,
        transform: 'translateX(30px)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-gray-900/90 z-0"></div>
      
      {/* Content */}
      <div className="relative z-10 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold mb-4 text-white">
            {model.title}
            <div className={`h-1 w-16 mt-2 transition-all duration-500 ${isHovered ? 'bg-blue-400 w-24' : 'bg-blue-600'}`}></div>
          </h3>
          <div className="text-4xl font-bold text-blue-400">{model.id}</div>
        </div>
        
        <p className="text-gray-300 mb-6">
          {model.description}
        </p>
        
        <ul className="space-y-3 mb-8">
          {model.features.map((feature, i) => (
            <li 
              key={i} 
              className="flex items-start gap-2"
              style={{
                animation: `fadeInUp 0.5s ease-out forwards`,
                animationDelay: `${index * 0.2 + i * 0.1}s`,
                opacity: isHovered ? 1 : 0.7
              }}
            >
              <CheckCircle size={20} className="text-blue-400 mt-0.5" />
              <span className="text-gray-200">{feature}</span>
            </li>
          ))}
        </ul>
        
        <button 
          className={`flex items-center justify-center w-full py-3 px-6 rounded-lg text-white font-medium transition-all duration-300 ${
            isHovered ? 'bg-blue-500 shadow-md' : 'bg-blue-600/80'
          }`}
        >
          了解详情
          <ArrowRight size={18} className={`ml-2 transition-transform duration-300 ${isHovered ? 'transform translate-x-1' : ''}`} />
        </button>
      </div>
    </div>
  );
};

// FAQ component with animation
const FaqItem = ({ question, answer, isOpen, toggleOpen, index }) => {
  return (
    <div 
      className="border-b border-blue-800/30 overflow-hidden"
      style={{
        animation: 'fadeInUp 0.8s ease-out forwards',
        animationDelay: `${index * 0.1}s`,
        opacity: 0
      }}
    >
      <button
        className="w-full flex items-center justify-between py-5 text-left"
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-medium text-white">{question}</h3>
        <div className="text-blue-400">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>
      <div 
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? '500px' : '0',
          opacity: isOpen ? 1 : 0
        }}
      >
        <div className="pb-5 text-gray-300">
          {answer}
        </div>
      </div>
    </div>
  );
};

const CooperationPage = () => {
  const [activeTab, setActiveTab] = useState('models');
  const [activeFaq, setActiveFaq] = useState(null);
  const [startAnimation, setStartAnimation] = useState(false);
  
  // Animation trigger
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Mock data for cooperation models
  const cooperationModels = [
    {
      id: "01",
      title: "数据共享合作",
      description: "通过共享乡村治理相关数据，实现资源整合与价值最大化，促进数据驱动的决策模式。",
      features: [
        "农村基础数据收集与共享",
        "多部门数据整合与分析",
        "隐私保护与数据安全保障",
        "数据标准化与质量管理"
      ]
    },
    {
      id: "02",
      title: "技术支持合作",
      description: "提供智能农业、数字治理等领域的技术支持，助力乡村数字化转型。",
      features: [
        "智能农业技术解决方案",
        "乡村治理数字化平台建设",
        "技术培训与人才培养",
        "定制化系统开发与维护"
      ]
    },
    {
      id: "03",
      title: "产业链接合作",
      description: "连接农产品生产与市场，打通城乡产业链，促进乡村经济可持续发展。",
      features: [
        "农产品溯源与品牌建设",
        "电商平台与物流网络对接",
        "产销对接与订单农业",
        "农产品价值链优化"
      ]
    }
  ];
  
  // FAQ data
  const faqData = [
    {
      question: "如何与数村平台建立合作关系？",
      answer: "您可以通过官方网站提交合作申请，或直接联系我们的合作部门。我们会根据您的需求和合作意向，匹配合适的合作模式，并有专人与您对接。"
    },
    {
      question: "数村平台的数据共享政策是什么？",
      answer: "我们严格遵守数据安全与隐私保护的法律法规，在合作过程中确保数据共享的合法合规。合作双方会签订详细的数据使用协议，明确数据权责与使用范围。"
    },
    {
      question: "合作项目的周期一般是多久？",
      answer: "根据合作类型和项目规模不同，周期也有所差异。一般试点项目为3-6个月，常规合作项目为1-3年，战略合作可达3-5年。我们也支持根据项目实际情况进行定制化安排。"
    },
    {
      question: "平台是否提供技术培训支持？",
      answer: "是的，我们为合作伙伴提供全方位的技术培训支持，包括系统使用培训、数据分析培训、技术运维培训等，确保合作伙伴能够充分利用平台资源。"
    },
    {
      question: "如何评估合作项目的效果？",
      answer: "我们建立了完善的项目评估体系，包括定期评估会议、数据效果分析、用户满意度调查等多种方式，确保项目按预期目标推进，并不断优化合作方案。"
    }
  ];
  
  // Toggle FAQ open/close
  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <MainLayout 
      title="合作模式" 
      subtitle="COOPERATION" 
      activePage="合作"
      backgroundImage="/api/placeholder/1920/1080"
    >
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Abstract shapes */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-20 bg-blue-500 blur-3xl rounded-full"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float-shape ${Math.random() * 30 + 20}s linear infinite`,
              animationDelay: `${Math.random() * 10}s`
            }}
          />
        ))}
      </div>
      
      {/* Main content */}
      <div className="relative z-10">
        {/* Intro text */}
        <div className="mb-12 max-w-3xl">
          <p className="text-xl text-blue-300 mb-8">
            数村平台致力于构建多元化的合作生态，连接政府、企业、研究机构和农村社区，
            共同推动乡村数字化治理与智慧产业发展。
          </p>
        </div>
        
        {/* Tab navigation */}
        <div className="mb-12 flex space-x-2 overflow-x-auto pb-2">
          <button
            className={`px-6 py-3 text-lg rounded-lg transition-all duration-300 ${
              activeTab === 'models'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-800/60 text-gray-300 hover:bg-gray-700/80'
            }`}
            onClick={() => setActiveTab('models')}
          >
            合作模式
          </button>
          <button
            className={`px-6 py-3 text-lg rounded-lg transition-all duration-300 ${
              activeTab === 'faq'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-800/60 text-gray-300 hover:bg-gray-700/80'
            }`}
            onClick={() => setActiveTab('faq')}
          >
            常见问题
          </button>
        </div>
        
        {/* Content based on active tab */}
        <div className="mt-8">
          {activeTab === 'models' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cooperationModels.map((model, index) => (
                <CooperationModelCard 
                  key={model.id} 
                  model={model} 
                  index={index} 
                />
              ))}
            </div>
          )}
          
          {activeTab === 'faq' && (
            <div className="max-w-2xl mx-auto">
              <div className="space-y-1 divide-y divide-blue-800/30">
                {faqData.map((faq, index) => (
                  <FaqItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={activeFaq === index}
                    toggleOpen={() => toggleFaq(index)}
                    index={index}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* CTA Section */}
        <div 
          className="mt-20 relative overflow-hidden rounded-xl border border-blue-700/30 shadow-lg"
          style={{
            animation: startAnimation ? 'fadeInUp 1s ease-out forwards' : 'none',
            opacity: 0
          }}
        >
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-gray-900/80 z-0"></div>
          
          <div className="relative z-10 p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  准备好开始合作了吗？
                </h3>
                <p className="text-lg text-blue-200">
                  联系我们，共同探索数字乡村的无限可能
                </p>
              </div>
              
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-lg">
                立即联系
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Global CSS for animations */}
      <style jsx global>{`
        .shadow-glow {
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
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
        
        @keyframes float-shape {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0.1;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-30vh) translateX(30vw) rotate(180deg);
            opacity: 0.1;
          }
        }
      `}</style>
    </MainLayout>
  );
};

export default CooperationPage;