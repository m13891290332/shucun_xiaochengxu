import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>数字乡村综合服务平台 - 首页</title>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/animate.css@4.1.1/animate.min.css"
          rel="stylesheet"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 text-white">
        {/* 导航栏 */}
        <header className="bg-black bg-opacity-30 backdrop-blur-md fixed w-full z-50 shadow-lg">
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src="/uploads/20220506/png/1da06e9099375f3d4d63a17c89afecc8.png"
                  alt="数村Logo"
                  className="h-10 mr-3"
                />
                <span className="text-xl font-bold">数字乡村综合服务平台</span>
              </div>

              <nav className="hidden md:flex space-x-8">
                <Link
                  to="/"
                  className="text-blue-300 border-b-2 border-blue-300 pb-1"
                >
                  首页
                </Link>
                <Link
                  to="/jingji"
                  className="text-white hover:text-blue-300 transition"
                >
                  智慧经济
                </Link>
                <Link
                  to="/chanye"
                  className="text-white hover:text-blue-300 transition"
                >
                  智慧产业
                </Link>
                <Link
                  to="/shouru"
                  className="text-white hover:text-blue-300 transition"
                >
                  智慧收入
                </Link>
                <Link
                  to="/zhushou"
                  className="text-white hover:text-blue-300 transition"
                >
                  智慧助手
                </Link>
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
        </header>

        {/* 英雄区域 */}
        <section className="pt-32 pb-20 px-6 animate__animated animate__fadeIn">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  数字赋能乡村
                  <span className="block text-blue-400">共创美好未来</span>
                </h1>
                <p className="text-lg text-gray-300 mb-8 max-w-lg">
                  平台紧紧围绕三农工作，通过将数字治理、数字兴业、数字惠民融合到一个平台，整合多系统功能，打造出1+3+N乡村综合服务体系，加快农业农村现代化，弥合城乡数字鸿沟，接续全面推进乡村振兴。
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/chanye"
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition shadow-lg text-white font-medium"
                  >
                    探索服务
                  </Link>
                  <Link
                    to="/zhushou"
                    className="px-6 py-3 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-blue-900 rounded-lg transition font-medium"
                  >
                    咨询助手
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1625246333195-78d73c0f15d8?q=80&w=2070"
                  alt="数字乡村"
                  className="rounded-xl shadow-2xl transform hover:-translate-y-2 transition duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 平台模块 */}
        <section className="py-20 px-6 bg-blue-900 bg-opacity-30">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              平台核心模块
            </h2>
            <p className="text-center text-blue-300 mb-16 max-w-3xl mx-auto">
              数字乡村综合服务平台整合了多种功能模块，全方位推动乡村振兴
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link to="/jingji" className="group">
                <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-xl p-6 shadow-xl h-full transition transform group-hover:-translate-y-2 group-hover:shadow-2xl border border-blue-700 group-hover:border-blue-500">
                  <div className="w-16 h-16 bg-blue-600 bg-opacity-30 rounded-full flex items-center justify-center mb-6">
                    <svg
                      className="w-8 h-8 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">智慧经济</h3>
                  <p className="text-gray-300 mb-4">
                    通过数字技术赋能乡村经济，打造产业兴旺、生态宜居、乡风文明、治理有效、生活富裕的美丽新农村。
                  </p>
                  <span className="text-blue-400 inline-flex items-center group-hover:text-blue-300">
                    查看详情
                    <svg
                      className="w-4 h-4 ml-2 transition transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </div>
              </Link>

              <Link to="/chanye" className="group">
                <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-xl p-6 shadow-xl h-full transition transform group-hover:-translate-y-2 group-hover:shadow-2xl border border-blue-700 group-hover:border-blue-500">
                  <div className="w-16 h-16 bg-blue-600 bg-opacity-30 rounded-full flex items-center justify-center mb-6">
                    <svg
                      className="w-8 h-8 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">智慧产业</h3>
                  <p className="text-gray-300 mb-4">
                    推动现代农业产业体系、生产体系、经营体系建设，打造产业集群，促进一二三产业融合发展。
                  </p>
                  <span className="text-blue-400 inline-flex items-center group-hover:text-blue-300">
                    查看详情
                    <svg
                      className="w-4 h-4 ml-2 transition transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </div>
              </Link>

              <Link to="/shouru" className="group">
                <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-xl p-6 shadow-xl h-full transition transform group-hover:-translate-y-2 group-hover:shadow-2xl border border-blue-700 group-hover:border-blue-500">
                  <div className="w-16 h-16 bg-blue-600 bg-opacity-30 rounded-full flex items-center justify-center mb-6">
                    <svg
                      className="w-8 h-8 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">智慧收入</h3>
                  <p className="text-gray-300 mb-4">
                    借助数字技术和平台优势，拓宽农民增收渠道，实现产业增值、收入提升，助力乡村振兴和共同富裕。
                  </p>
                  <span className="text-blue-400 inline-flex items-center group-hover:text-blue-300">
                    查看详情
                    <svg
                      className="w-4 h-4 ml-2 transition transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </div>
              </Link>

              <Link to="/zhushou" className="group">
                <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-xl p-6 shadow-xl h-full transition transform group-hover:-translate-y-2 group-hover:shadow-2xl border border-blue-700 group-hover:border-blue-500">
                  <div className="w-16 h-16 bg-blue-600 bg-opacity-30 rounded-full flex items-center justify-center mb-6">
                    <svg
                      className="w-8 h-8 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">智慧助手</h3>
                  <p className="text-gray-300 mb-4">
                    提供智能问答、政策解读、技术咨询等服务，解决农民在农业生产、经营和生活中遇到的各类问题。
                  </p>
                  <span className="text-blue-400 inline-flex items-center group-hover:text-blue-300">
                    查看详情
                    <svg
                      className="w-4 h-4 ml-2 transition transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* 成效展示 */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">
              平台建设成效
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-blue-900 bg-opacity-20 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1505471768190-275e2ad070d9?q=80&w=2574"
                    alt="数字乡村建设"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold mb-2">
                      数字乡村建设成果
                    </h3>
                    <p className="text-blue-200">
                      推动农业农村现代化，弥合城乡数字鸿沟
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-400 mt-1 mr-3 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <p>
                        已在全省14个地市、86个县区推广使用，覆盖农村人口超过450万
                      </p>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-400 mt-1 mr-3 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <p>
                        数字化改造传统农业基地超过2000个，建设智慧农业示范点150个
                      </p>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-400 mt-1 mr-3 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <p>培训乡村数字人才15000人，提升农民数字技能和信息素养</p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-900 bg-opacity-20 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2670"
                    alt="乡村振兴示范"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold mb-2">乡村振兴成果</h3>
                    <p className="text-blue-200">
                      推动产业兴旺、生态宜居、乡风文明、治理有效、生活富裕
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-400 mt-1 mr-3 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <p>
                        平台助力农产品上行销售额突破50亿元，带动农民人均增收2800元
                      </p>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-400 mt-1 mr-3 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <p>打造特色农产品品牌168个，创建电商直播示范村32个</p>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-400 mt-1 mr-3 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <p>推动县域产业集群发展，农产品精深加工企业增长35%</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 底部区域 */}
        <footer className="bg-gray-900 py-12">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="mb-10 md:mb-0">
                <img
                  src="/uploads/20220506/png/1da06e9099375f3d4d63a17c89afecc8.png"
                  alt="数村Logo"
                  className="h-12 mb-4"
                />
                <p className="text-gray-400 max-w-xs">
                  数村平台致力于数字乡村建设，通过技术赋能，促进乡村振兴和农业现代化发展。
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
                <div>
                  <h4 className="text-lg font-semibold mb-4">平台服务</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li>
                      <Link
                        to="/jingji"
                        className="hover:text-blue-300 transition"
                      >
                        智慧经济
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/chanye"
                        className="hover:text-blue-300 transition"
                      >
                        智慧产业
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/shouru"
                        className="hover:text-blue-300 transition"
                      >
                        智慧收入
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/zhushou"
                        className="hover:text-blue-300 transition"
                      >
                        智慧助手
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4">资源下载</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li>
                      <a href="#" className="hover:text-blue-300 transition">
                        使用手册
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-300 transition">
                        政策解读
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-300 transition">
                        培训视频
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-300 transition">
                        技术文档
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4">联系我们</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li>电话: 400-801-5999</li>
                    <li>邮箱: contact@shucun.com</li>
                    <li>地址: 安徽省合肥市高新区创新大道888号</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
              <p>© 2023 数村·一站式乡村综合服务平台. 保留所有权利.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomePage;
