import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import JingjiPage from './pages/JingjiPage';
import ShouruPage from './pages/ShouruPage';
import ZhushouPage from './pages/ZhushouPage';
import NewsPage from './pages/news-page';
import CooperationPage from './pages/cooperation-page';
import AnalysisPage from './pages/analysis-page';
import AboutUsPage from './pages/contactus';
import EconomicIndicatorsForm from './pages/shuju';

// 404页面组件
const NotFound: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // 3秒后跳转到首页
    const timer = setTimeout(() => {
      window.location.href = '/';
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404 - 页面不存在</h1>
      <p>您访问的页面 "{location.pathname}" 不存在</p>
      <p>3秒后将自动跳转到首页...</p>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* 支持带.html后缀和不带后缀的路由 */}
        <Route path="/jingji" element={<JingjiPage />} />
        <Route path="/jingji.html" element={<JingjiPage />} />

        <Route path="/shouru" element={<ShouruPage />} />
        <Route path="/shouru.html" element={<ShouruPage />} />

        <Route path="/zhushou" element={<ZhushouPage />} />
        <Route path="/zhushou.html" element={<ZhushouPage />} />

        <Route path="/" element={<HomePage />} />
        <Route path="/index.html" element={<HomePage />} />

        <Route path="/news" element={<NewsPage />} />
        <Route path="/news.html" element={<NewsPage />} />

        <Route path="/cooperation" element={<CooperationPage />} />
        <Route path="/cooperation.html" element={<CooperationPage />} />

        <Route path="/analysis" element={<AnalysisPage />} />
        <Route path="/analysis.html" element={<AnalysisPage />} />

        <Route path="/contactus" element={<AboutUsPage />} />
        <Route path="/contactus.html" element={<AboutUsPage />} />

        <Route path="/shuju" element={<EconomicIndicatorsForm />} />
        <Route path="/shuju.html" element={<EconomicIndicatorsForm />} />

        {/* 处理404情况 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
