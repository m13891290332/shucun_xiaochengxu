import React, { useEffect, useRef } from 'react';

const JingJiHero: React.FC = () => {
  const digitalParticlesRef = useRef<HTMLDivElement>(null);

  // 数字粒子背景效果
  const createDigitalParticles = () => {
    if (!digitalParticlesRef.current) return;

    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = digitalParticlesRef.current.offsetHeight;
    digitalParticlesRef.current.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particles: any[] = [];

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      character: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.character = Math.random() > 0.5 ? '1' : '0';
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (ctx) {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
          ctx.font = `${this.size}px Arial`;
          ctx.fillText(this.character, this.x, this.y);
        }
      }
    }

    function init() {
      for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle) => {
          particle.update();
          particle.draw();
        });
      }

      requestAnimationFrame(animate);
    }

    init();
    animate();

    const handleResize = () => {
      if (digitalParticlesRef.current) {
        canvas.width = window.innerWidth;
        canvas.height = digitalParticlesRef.current.offsetHeight;
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  };

  useEffect(() => {
    // 初始化数字粒子效果
    createDigitalParticles();
  }, []);

  return (
    <section className="hero-background text-white py-28 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1
              className="text-4xl lg:text-5xl font-bold leading-tight mb-6 animate-on-scroll"
              data-delay="0"
            >
              智慧经济
              <br />
              <span className="gradient-text">驱动乡村振兴</span>
            </h1>
            <p
              className="text-lg mb-8 text-gray-200 animate-on-scroll"
              data-delay="200"
            >
              通过数据驱动和人工智能技术，构建创新农业生态系统，释放乡村发展潜能，实现经济高质量增长
            </p>
            <div className="flex space-x-4 animate-on-scroll" data-delay="400">
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center">
                <i className="fas fa-chart-line mr-2"></i>
                查看数据分析
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-900 transition duration-300 ease-in-out transform hover:scale-105">
                <i className="fas fa-play-circle mr-2"></i>
                观看演示
              </button>
            </div>
          </div>
          <div
            className="md:w-1/2 relative floating animate-on-scroll"
            data-delay="600"
          >
            <img
              src="https://agrmeta.com/static/picture/pocture/gbznt.png"
              alt="智慧农业数字平台"
              className="rounded-lg shadow-2xl w-full"
            />
            <div className="absolute -bottom-10 -right-10 bg-white p-4 rounded-lg shadow-lg blurred-bg hidden md:block">
              <div className="flex items-center">
                <div className="bg-green-500 p-3 rounded-full mr-4">
                  <i className="fas fa-robot text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">AI智能分析</h3>
                  <p className="text-sm text-gray-600">实时监测农业生产数据</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wave"></div>

      <div id="digital-particles" ref={digitalParticlesRef}></div>
    </section>
  );
};

export default JingJiHero;
