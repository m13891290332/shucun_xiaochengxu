import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './JingjiPage.css';
import Navbar from '@/components/Navbar';
import {
  JingJiHero,
  JingJiOverview,
  JingJiAnalysis,
  JingJiAiVillage,
  JingJiCaseStudies,
} from '@/components/jingji';
import { initAll } from '@/components/jingji/utils';

declare global {
  interface Window {
    jQuery: any;
    CountUp: any;
  }
}

const JingjiPage: React.FC = () => {
  // 组件挂载后初始化
  useEffect(() => {
    // 初始化所有内容
    initAll();
  }, []);

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/all.min.css"
        />
        <style>{`
          .chart-container {
            height: 400px;
            width: 100%;
            visibility: visible !important;
            display: block !important;
          }
        `}</style>
      </Helmet>

      <Navbar />

      {/* 英雄区域 */}
      <JingJiHero />

      {/* 使用拆分出的组件 */}
      <JingJiOverview />
      <JingJiAnalysis />
      <JingJiAiVillage />
      <JingJiCaseStudies />
    </>
  );
};

export default JingjiPage;
