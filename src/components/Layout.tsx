import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  // 设置页面标题
  React.useEffect(() => {
    if (title) {
      document.title = `${title} - 数村·一站式乡村综合服务平台`;
    }
  }, [title]);

  return (
    <div className="layout-container">
      <header className="header">
        <div className="logo">
          <img
            src="/uploads/20220506/png/1da06e9099375f3d4d63a17c89afecc8.png"
            alt="数村 Logo"
          />
          <div className="logo-text">数村 ZHI CUN</div>
        </div>

        <nav className="nav">
          <a href="/" className="nav-item">
            首页
          </a>
          <div className="dropdown">
            <a href="#" className="nav-item active">
              平台
            </a>
            <div className="dropdown-content">
              <a href="/jingji" className="dropdown-item">
                <div className="dropdown-icon">
                  <i className="icon-economy"></i>
                </div>
                智慧经济
              </a>
              <a href="/chanye" className="dropdown-item">
                <div className="dropdown-icon">
                  <i className="icon-industry"></i>
                </div>
                智慧产业
              </a>
              <a href="/shouru" className="dropdown-item">
                <div className="dropdown-icon">
                  <i className="icon-income"></i>
                </div>
                智慧收入
              </a>
              <a href="/zhushou" className="dropdown-item">
                <div className="dropdown-icon">
                  <i className="icon-assistant"></i>
                </div>
                智慧助手
              </a>
            </div>
          </div>
          <a href="#" className="nav-item">
            资讯
          </a>
          <a href="#" className="nav-item">
            合作
          </a>
          <a href="#" className="nav-item">
            联系
          </a>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div>
              <div className="footer-logo">
                <img
                  src="/uploads/20220506/png/1da06e9099375f3d4d63a17c89afecc8.png"
                  width="150"
                  alt="智村LOGO"
                />
              </div>
              <div className="footer-desc">
                一站式乡村综合服务平台，通过数字化手段推动乡村振兴，弥合城乡数字鸿沟，助力农业农村现代化发展。
              </div>
              <div className="footer-contact">
                <p>电话：400-801-5999</p>
                <p>地址：安徽省合肥市高新区创新大道888号</p>
              </div>
            </div>

            <div>
              <h3 className="footer-title">快速链接</h3>
              <div className="footer-links">
                <a href="#">平台介绍</a>
                <a href="#">数字乡村</a>
                <a href="#">智慧产业</a>
                <a href="#">智慧农业</a>
                <a href="#">智慧旅游</a>
              </div>
            </div>

            <div>
              <h3 className="footer-title">关注我们</h3>
              <div className="footer-links">
                <a href="#">微信公众号</a>
                <a href="#">合作加盟</a>
                <a href="#">人才招聘</a>
                <a href="#">联系我们</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2023 数村·一站式乡村综合服务平台 All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
