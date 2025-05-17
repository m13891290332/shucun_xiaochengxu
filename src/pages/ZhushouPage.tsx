import Navbar from '@/components/Navbar';
import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet';

// 定义问答类型
interface QA {
  question: string;
  answer: string;
}

const ZhushouPage: React.FC = () => {
  // 状态管理
  const [message, setMessage] = useState<string>('');
  const [chatHistory, setChatHistory] = useState<QA[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // 预设问答
  const faqs: QA[] = [
    {
      question: '如何申请农业补贴？',
      answer:
        '您可以通过以下步骤申请农业补贴：1. 准备好您的身份证、土地承包合同等相关证明材料；2. 登录数村平台"政策补贴"专区；3. 根据提示填写申请表格并上传材料；4. 等待审核通过后，补贴将直接发放到您的账户中。',
    },
    {
      question: '如何开通农产品直播功能？',
      answer:
        '开通农产品直播功能需要：1. 在数村平台注册并完成实名认证；2. 进入"智慧收入"版块，选择"直播带货"功能；3. 上传您的农产品相关信息和资质证明；4. 审核通过后，参加平台提供的直播培训；5. 培训完成后即可开通直播权限，开始您的带货之旅。',
    },
    {
      question: '数字农业有哪些具体应用？',
      answer:
        '数字农业具体应用包括：1. 智能灌溉系统，通过土壤湿度监测自动控制灌溉；2. 农作物生长监测，利用传感器和图像识别技术监测作物健康状况；3. 精准施肥施药，根据作物需求精准投入；4. 天气预警系统，提前应对极端天气；5. 农产品溯源系统，记录从种植到销售的全过程；6. 智能温室控制，自动调节温度、湿度和光照等环境参数。',
    },
    {
      question: '如何获得免费的农业技术培训？',
      answer:
        '获得免费农业技术培训的途径：1. 关注数村平台"学习中心"，定期有线上免费课程；2. 加入平台农业技术交流群，与专家直接交流；3. 留意平台发布的线下培训通知，通常每月在各乡镇举办；4. 向您所在村的数字农业联络员咨询最新培训信息；5. 通过平台"智慧助手"预约专家一对一指导。',
    },
  ];

  // 滚动到底部
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  // 处理问题提交
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!message.trim()) return;

    // 添加用户问题到聊天历史
    setChatHistory((prev) => [...prev, { question: message, answer: '' }]);
    setLoading(true);

    // 模拟API请求延迟
    setTimeout(() => {
      // 在实际应用中，这里应该调用后端API获取回答
      const matchedFaq = faqs.find(
        (faq) =>
          faq.question.toLowerCase().includes(message.toLowerCase()) ||
          message.toLowerCase().includes(faq.question.toLowerCase())
      );

      let answer =
        matchedFaq?.answer ||
        '很抱歉，我目前无法回答这个问题。您可以联系我们的客服人员获取更多帮助，电话：400-801-5999';

      // 更新聊天历史
      setChatHistory((prev) =>
        prev.map((qa, index) =>
          index === prev.length - 1 ? { ...qa, answer } : qa
        )
      );

      setLoading(false);
      setMessage('');
    }, 1000);
  };

  // 处理预设问题点击
  const handleFaqClick = (question: string) => {
    setMessage(question);
    // 自动提交
    setTimeout(() => {
      handleSubmit(new Event('submit') as any);
    }, 100);
  };

  return (
    <>
      <Helmet>
        <title>智慧助手 - 数字乡村综合服务平台</title>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Helmet>

      <div className="bg-gradient-to-b from-purple-900 to-indigo-900 min-h-screen text-white">
        {/* 导航栏 */}
        <Navbar />
        {/* <header className="bg-purple-900 bg-opacity-80 backdrop-blur-md fixed w-full z-50 shadow-lg">
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src="/uploads/20220506/png/1da06e9099375f3d4d63a17c89afecc8.png"
                  alt="数村Logo"
                  className="h-10 mr-3"
                />
                <span className="text-xl font-bold">数村·智慧助手</span>
              </div>

              <nav className="hidden md:flex space-x-8">
                <a
                  href="/"
                  className="text-white hover:text-purple-300 transition"
                >
                  首页
                </a>
                <a
                  href="/jingji"
                  className="text-white hover:text-purple-300 transition"
                >
                  智慧经济
                </a>
                <a
                  href="/chanye"
                  className="text-white hover:text-purple-300 transition"
                >
                  智慧产业
                </a>
                <a
                  href="/shouru"
                  className="text-white hover:text-purple-300 transition"
                >
                  智慧收入
                </a>
                <a
                  href="/zhushou"
                  className="text-purple-300 border-b-2 border-purple-300 pb-1"
                >
                  智慧助手
                </a>
              </nav>

              <button className="md:hidden text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </header> */}

        {/* 主体内容 */}
        <div className="pt-24 pb-20 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h1 className="text-4xl font-bold mb-4">数村智慧助手</h1>
                <p className="text-xl text-purple-200">
                  您的数字乡村专属智能顾问，为您解答各类问题
                </p>
              </div>

              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl overflow-hidden shadow-xl">
                {/* 聊天历史区域 */}
                <div
                  ref={chatContainerRef}
                  className="h-96 overflow-y-auto p-4"
                  style={{ scrollBehavior: 'smooth' }}
                >
                  {/* 欢迎消息 */}
                  <div className="flex items-start mb-4">
                    <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-lg font-bold">助</span>
                    </div>
                    <div className="bg-purple-800 bg-opacity-50 rounded-lg py-2 px-4 max-w-md">
                      <p>
                        您好！我是数村智慧助手，很高兴为您服务。您可以向我咨询关于数字乡村平台的各类问题，包括农业技术、政策补贴、平台使用等。
                      </p>
                    </div>
                  </div>

                  {/* 聊天历史 */}
                  {chatHistory.map((qa, index) => (
                    <div key={index} className="mb-4">
                      {/* 用户提问 */}
                      <div className="flex items-start justify-end mb-2">
                        <div className="bg-indigo-600 rounded-lg py-2 px-4 max-w-md">
                          <p>{qa.question}</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-indigo-700 flex items-center justify-center ml-3 flex-shrink-0">
                          <span className="text-lg font-bold">我</span>
                        </div>
                      </div>

                      {/* 助手回答 */}
                      {qa.answer ? (
                        <div className="flex items-start mb-2">
                          <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center mr-3 flex-shrink-0">
                            <span className="text-lg font-bold">助</span>
                          </div>
                          <div className="bg-purple-800 bg-opacity-50 rounded-lg py-2 px-4 max-w-md">
                            <p>{qa.answer}</p>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-start mb-2">
                          <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center mr-3 flex-shrink-0">
                            <span className="text-lg font-bold">助</span>
                          </div>
                          <div className="bg-purple-800 bg-opacity-50 rounded-lg py-3 px-4">
                            <div className="flex space-x-2">
                              <div className="w-2 h-2 rounded-full bg-purple-300 animate-bounce"></div>
                              <div
                                className="w-2 h-2 rounded-full bg-purple-300 animate-bounce"
                                style={{ animationDelay: '0.2s' }}
                              ></div>
                              <div
                                className="w-2 h-2 rounded-full bg-purple-300 animate-bounce"
                                style={{ animationDelay: '0.4s' }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* 输入区域 */}
                <div className="border-t border-purple-800 p-4">
                  <form onSubmit={handleSubmit} className="flex items-center">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="请输入您的问题..."
                      className="flex-1 bg-purple-900 bg-opacity-50 text-white placeholder-purple-300 rounded-l-lg py-3 px-4 outline-none focus:ring-2 focus:ring-purple-500"
                      disabled={loading}
                    />
                    <button
                      type="submit"
                      className={`bg-purple-600 hover:bg-purple-700 rounded-r-lg py-3 px-6 transition ${
                        loading ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                      disabled={loading}
                    >
                      发送
                    </button>
                  </form>
                </div>
              </div>

              {/* 常见问题 */}
              <div className="mt-10">
                <h2 className="text-xl font-semibold mb-4">热门问题</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="bg-white bg-opacity-5 hover:bg-opacity-10 backdrop-blur-sm rounded-lg p-4 cursor-pointer transition"
                      onClick={() => handleFaqClick(faq.question)}
                    >
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-purple-400 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <p className="text-purple-100">{faq.question}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 服务卡片 */}
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-center mb-8">
                  更多智能服务
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-purple-800 to-indigo-800 rounded-xl p-6 shadow-lg transform hover:scale-105 transition">
                    <div className="w-14 h-14 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">政策解读</h3>
                    <p className="text-purple-200 mb-4">
                      智能分析最新农业政策，为您提供个性化政策解读和申请指导。
                    </p>
                    <a
                      href="#"
                      className="inline-block text-purple-300 hover:text-white transition"
                    >
                      立即咨询 →
                    </a>
                  </div>

                  <div className="bg-gradient-to-br from-purple-800 to-indigo-800 rounded-xl p-6 shadow-lg transform hover:scale-105 transition">
                    <div className="w-14 h-14 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">农技专家</h3>
                    <p className="text-purple-200 mb-4">
                      解答种植养殖技术问题，诊断病虫害，提供科学防治方案。
                    </p>
                    <a
                      href="#"
                      className="inline-block text-purple-300 hover:text-white transition"
                    >
                      在线咨询 →
                    </a>
                  </div>

                  <div className="bg-gradient-to-br from-purple-800 to-indigo-800 rounded-xl p-6 shadow-lg transform hover:scale-105 transition">
                    <div className="w-14 h-14 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">金融顾问</h3>
                    <p className="text-purple-200 mb-4">
                      提供农业贷款、保险咨询，分析适合您的金融产品和解决方案。
                    </p>
                    <a
                      href="#"
                      className="inline-block text-purple-300 hover:text-white transition"
                    >
                      获取建议 →
                    </a>
                  </div>
                </div>
              </div>

              {/* 联系方式 */}
              <div className="mt-16 text-center">
                <h2 className="text-2xl font-semibold mb-4">需要更多帮助？</h2>
                <p className="text-lg text-purple-200 mb-6">
                  您可以通过以下方式联系我们的客服团队
                </p>
                <div className="flex justify-center space-x-6">
                  <div className="flex items-center">
                    <svg
                      className="w-6 h-6 text-purple-400 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span>400-801-5999</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-6 h-6 text-purple-400 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span>support@shucun.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 底部 */}
        <footer className="bg-purple-900 py-8">
          <div className="container mx-auto px-6">
            <div className="text-center text-purple-300">
              <p>
                © 2023 数村·一站式乡村综合服务平台 - 智慧助手模块. 保留所有权利.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ZhushouPage;
