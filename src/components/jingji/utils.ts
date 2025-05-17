/**
 * 用于 经济 系列页面的popup动画和数字动画
 */

// 初始化进度条和数字动画
export const initDynamicElements = () => {
    // 初始化滚动动画
    const animateElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const delay = (entry.target as HTMLElement).dataset.delay || 0;
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, Number(delay));
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );

    animateElements.forEach((element) => {
        observer.observe(element);
    });

    // 初始化进度条动画
    const progressBars = document.querySelectorAll('.progress-bar-fill');

    const progressObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const target = (entry.target as HTMLElement).dataset.target || '0';
                    (entry.target as HTMLElement).style.width = `${target}%`;
                    progressObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );

    progressBars.forEach((bar) => {
        progressObserver.observe(bar);
    });

    // 初始化数字动画
    const statsElements = document.querySelectorAll('.stat-number');
    const statsObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && window.CountUp) {
                    const el = entry.target;
                    const id = el.id;
                    let value = parseInt(el.textContent || '0');

                    if (id === 'projects') {
                        value = 2500;
                        new window.CountUp(id, 0, value, 0, 2.5, {
                            suffix: '+',
                        }).start();
                    } else {
                        new window.CountUp(id, 0, value, 0, 2.5).start();
                    }

                    statsObserver.unobserve(el);
                }
            });
        },
        { threshold: 0.1 }
    );

    statsElements.forEach((stat) => {
        statsObserver.observe(stat);
    });
};

// 加载CountUp脚本
export const loadScript = (src: string) => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
};

// 初始化所有内容
export const initAll = async () => {
    // 先加载必要的脚本
    try {
        await loadScript(
            'https://cdn.jsdelivr.net/npm/countup.js@2.0.7/dist/countUp.min.js'
        );
    } catch (e) {
        console.error('Failed to load CountUp script', e);
    }

    // 初始化动态元素
    initDynamicElements();
}; 