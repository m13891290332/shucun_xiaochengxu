import React, { useState, useEffect, useRef } from 'react';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // 处理菜单按钮点击
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // 处理下拉菜单链接点击
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  // 处理滚动效果
  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // 添加或移除header的on1类
      const header = document.querySelector('.header');
      if (header) {
        if (prevScrollPos <= currentScrollPos) {
          header.classList.add('translate-y-[-140px]');
        } else {
          header.classList.remove('translate-y-[-140px]');
        }
      }

      // 添加或移除header的on类
      if (currentScrollPos > 100) {
        header?.classList.add('bg-opacity-80');
      } else {
        header?.classList.remove('bg-opacity-80');
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 添加子菜单交互效果
  useEffect(() => {
    // 处理子菜单显示/隐藏
    const handleSubMenu = () => {
      const menuItems = document.querySelectorAll('.nav .m');

      menuItems.forEach((item) => {
        const subMenu = item.querySelector('.sub') as HTMLElement;
        if (!subMenu) return;

        // 鼠标进入
        item.addEventListener('mouseenter', () => {
          menuItems.forEach((otherItem) => {
            if (otherItem !== item) {
              const otherSubMenu = otherItem.querySelector(
                '.sub'
              ) as HTMLElement;
              if (otherSubMenu) {
                otherSubMenu.style.display = 'none';
              }
            }
          });

          subMenu.style.display = 'block';
          // 添加动画效果
          subMenu.style.transition = 'all 0.3s';
          subMenu.style.opacity = '1';
        });

        // 鼠标离开
        item.addEventListener('mouseleave', () => {
          subMenu.style.opacity = '0';
          setTimeout(() => {
            subMenu.style.display = 'none';
          }, 300);
        });
      });
    };

    handleSubMenu();

    // 清理函数
    return () => {
      const menuItems = document.querySelectorAll('.nav .m');
      menuItems.forEach((item) => {
        item.removeEventListener('mouseenter', () => {});
        item.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <div className="fixed w-full z-[1000] left-0 top-0 bg-[#043e6b] bg-opacity-80 h-[140px] transition-all duration-400 ease-in-out header">
      <div className="w-[1300px] mx-auto relative">
        <h1 className="w-[155px] float-left pt-[39px] logo">
          <a href="/">
            <img
              src="/uploads/20220506/png/1da06e9099375f3d4d63a17c89afecc8.png"
              alt="logo"
              className="w-full"
            />
          </a>
        </h1>
        <div
          className={`absolute right-[3%] top-[15px] w-[30px] h-[30px] bg-[url('../images/d1.png')] bg-no-repeat bg-center bg-[length:20px_20px] ${
            menuOpen ? 'bg-[url(../images/d2.png)]' : ''
          } md:hidden`}
          onClick={toggleMenu}
        ></div>
        <div
          className={`fixed md:static md:float-right md:w-auto md:h-auto md:bg-transparent md:top-auto top-[60px] w-[200px] h-[calc(100%-60px)] bg-[#033c67] transition-all ${
            menuOpen ? 'left-0' : 'left-[-200px]'
          } nav`}
          ref={navRef}
        >
          <ul className="md:flex">
            <li className="md:float-left md:text-[20px] text-[#b7c6d4] md:leading-[140px] md:border-none w-full md:w-auto float-none leading-[50px] border-b border-[#022e4e] m on">
              <a
                href="/"
                className="md:inline-block md:px-[52px] px-[20px] text-[#b7c6d4] md:tracking-[10px] w-full md:w-auto hover:text-white hover:font-bold"
              >
                首页
              </a>
              <b className="hidden md:inline">|</b>
            </li>
            <li className="md:float-left md:text-[20px] text-[#b7c6d4] md:leading-[140px] md:border-none w-full md:w-auto float-none leading-[50px] border-b border-[#022e4e] m">
              <a
                href="#"
                onClick={handleClick}
                className="md:inline-block md:px-[52px] px-[20px] text-[#b7c6d4] md:tracking-[10px] w-full md:w-auto hover:text-white hover:font-bold"
              >
                平台
              </a>
              <b className="hidden md:inline">|</b>
              <div className="md:absolute md:w-full md:text-center md:top-[140px] md:left-0 bg-[#043e6b] bg-opacity-80 z-[100] hidden sub">
                <dl className="overflow-hidden">
                  <dt className="md:w-1/5 w-full md:text-center md:float-left">
                    <a
                      href="/jingji.html"
                      className="block text-[20px] md:text-[20px] text-white font-normal opacity-70 hover:opacity-100"
                    >
                      <img
                        src="/index/images/ta_177.png"
                        alt="智慧经济"
                        className="inline-block align-middle -mt-[3px] mr-[15px] transition-all duration-400 ease-in-out hover:bg-white hover:bg-opacity-20"
                      />
                      智慧经济
                    </a>
                  </dt>
                  <dt className="md:w-1/5 w-full md:text-center md:float-left">
                    <a
                      href="/chanye.html"
                      className="block text-[20px] md:text-[20px] text-white font-normal opacity-70 hover:opacity-100"
                    >
                      <img
                        src="/index/images/ta_178.png"
                        alt="智慧产业"
                        className="inline-block align-middle -mt-[3px] mr-[15px] transition-all duration-400 ease-in-out hover:bg-white hover:bg-opacity-20"
                      />
                      智慧产业
                    </a>
                  </dt>
                  <dt className="md:w-1/5 w-full md:text-center md:float-left">
                    <a
                      href="/shouru.html"
                      className="block text-[20px] md:text-[20px] text-white font-normal opacity-70 hover:opacity-100"
                    >
                      <img
                        src="/index/images/ta_179.png"
                        alt="智慧收入"
                        className="inline-block align-middle -mt-[3px] mr-[15px] transition-all duration-400 ease-in-out hover:bg-white hover:bg-opacity-20"
                      />
                      智慧收入
                    </a>
                  </dt>
                  <dt className="md:w-1/5 w-full md:text-center md:float-left">
                    <a
                      href="/zhushou.html"
                      className="block text-[20px] md:text-[20px] text-white font-normal opacity-70 hover:opacity-100"
                    >
                      <img
                        src="/index/images/ta_180.png"
                        alt="智慧助手"
                        className="inline-block align-middle -mt-[3px] mr-[15px] transition-all duration-400 ease-in-out hover:bg-white hover:bg-opacity-20"
                      />
                      智慧助手
                    </a>
                  </dt>
                  <dt className="md:w-1/5 w-full md:text-center md:float-left">
                    <a
                      href="/analysis.html"
                      className="block text-[20px] md:text-[20px] text-white font-normal opacity-70 hover:opacity-100"
                    >
                      <img
                        src="/index/images/ta_180.png"
                        alt="数据分析"
                        className="inline-block align-middle -mt-[3px] mr-[15px] transition-all duration-400 ease-in-out hover:bg-white hover:bg-opacity-20"
                      />
                      数据分析
                    </a>
                  </dt>
                </dl>
              </div>
            </li>
            {/* <li><a href="/platform">平台</a><b>|</b></li> */}
            <li className="md:float-left md:text-[20px] text-[#b7c6d4] md:leading-[140px] md:border-none w-full md:w-auto float-none leading-[50px] border-b border-[#022e4e]">
              <a
                href="/news"
                className="md:inline-block md:px-[52px] px-[20px] text-[#b7c6d4] md:tracking-[10px] w-full md:w-auto hover:text-white hover:font-bold"
              >
                资讯
              </a>
              <b className="hidden md:inline">|</b>
            </li>
            <li className="md:float-left md:text-[20px] text-[#b7c6d4] md:leading-[140px] md:border-none w-full md:w-auto float-none leading-[50px] border-b border-[#022e4e]">
              <a
                href="/cooperation"
                className="md:inline-block md:px-[52px] px-[20px] text-[#b7c6d4] md:tracking-[10px] w-full md:w-auto hover:text-white hover:font-bold"
              >
                合作
              </a>
              <b className="hidden md:inline">|</b>
            </li>
            <li className="md:float-left md:text-[20px] text-[#b7c6d4] md:leading-[140px] md:border-none w-full md:w-auto float-none leading-[50px] border-b border-[#022e4e] m md:relative">
              <a
                href="#"
                onClick={handleClick}
                className="md:inline-block md:px-[52px] px-[20px] text-[#b7c6d4] md:tracking-[10px] w-full md:w-auto hover:text-white hover:font-bold"
              >
                联系
              </a>
              <div className="md:absolute md:w-[610px] md:right-0 md:left-auto bg-[#043e6b] bg-opacity-80 z-[100] hidden w-full sub sub1">
                <dl className="overflow-hidden">
                  <dt className="md:w-1/2 w-full md:text-center md:float-left">
                    <a
                      href="/contactus.html"
                      className="block text-[20px] md:text-[20px] text-white font-normal opacity-70 hover:opacity-100"
                    >
                      <img
                        src="/index/images/ta_215.png"
                        alt="联系我们"
                        className="inline-block align-middle -mt-[3px] mr-[15px] transition-all duration-400 ease-in-out hover:bg-white hover:bg-opacity-20"
                      />
                      联系我们
                    </a>
                  </dt>
                  <dt className="md:w-1/2 w-full md:text-center md:float-left">
                    <a
                      href="/contactus.html"
                      className="block text-[20px] md:text-[20px] text-white font-normal opacity-70 hover:opacity-100"
                    >
                      <img
                        src="/index/images/ta_214.png"
                        alt="关于我们"
                        className="inline-block align-middle -mt-[3px] mr-[15px] transition-all duration-400 ease-in-out hover:bg-white hover:bg-opacity-20"
                      />
                      关于我们
                    </a>
                  </dt>
                </dl>
              </div>
            </li>
            {/* <li><a href="/contactus">联系</a></li> */}
          </ul>
        </div>
      </div>
      {menuOpen && (
        <div
          className="fixed w-full h-full bg-black bg-opacity-70 top-0 left-0 z-[105]"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
