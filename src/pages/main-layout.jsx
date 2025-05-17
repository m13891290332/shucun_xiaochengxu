import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import Navbar from '@/components/Navbar';

// Common layout for all pages
const MainLayout = ({ children, title, subtitle, backgroundImage, activePage = '首页' }) => {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(activePage);
  
  // Track scroll position for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation links
  const navLinks = [
    { name: '首页', id: 'home' },
    { name: '平台', id: 'platform' },
    { name: '资讯', id: 'news' },
    { name: '合作', id: 'cooperation' },
    { name: '联系', id: 'contact' },
    { name: '数据分析', id: 'analysis' }
  ];
  
  const handleNavClick = (pageName) => {
    setCurrentPage(pageName);
    setMenuOpen(false);
    // In a real app, this would trigger page navigation
    console.log(`Navigating to ${pageName}`);
  };
  
  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-900 text-white">
      {/* Dynamic background with parallax effect */}
      <div 
        className="absolute inset-0 w-full h-full z-0 opacity-30"
        style={{
          backgroundImage: `url(${backgroundImage || '/api/placeholder/1920/1080'})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollY * 0.2}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-gray-900/90 to-gray-900 z-[0]"></div>
      
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-12 pt-[160px]">
        {/* Page Title with floating animation */}
        <div className="mb-16 relative overflow-hidden">
          <div className="relative animate-pulse-slow">
            <h1 className="text-5xl md:text-6xl font-bold mb-2 text-white">
              {title}
              <span className="ml-4 text-2xl md:text-3xl text-blue-300 opacity-70">{subtitle}</span>
            </h1>
            <div className="h-1 w-32 bg-blue-500 mt-4 mb-6"></div>
          </div>
        </div>
        
        {/* Page content */}
        <div className="relative">
          {children}
        </div>
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 bg-gray-900/80 backdrop-blur-sm border-t border-blue-800/30 py-8 mt-20">
        <div className="container mx-auto px-4 text-center text-blue-200/60">
          <p>2025 数村 ZHI CUN - 数智赋能乡村治理</p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;