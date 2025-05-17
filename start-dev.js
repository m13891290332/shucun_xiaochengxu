const { spawn } = require('child_process');
const path = require('path');

// 启动Express服务器
console.log('正在启动Express服务器...');
const expressProcess = spawn('npm', ['run', 'start:server'], {
  stdio: 'inherit',
  shell: true
});

expressProcess.on('error', (err) => {
  console.error('Express服务器启动失败:', err);
});

// 等待2秒后再启动Vite开发服务器
setTimeout(() => {
  console.log('正在启动Vite开发服务器...');

  const viteProcess = spawn('npm', ['run', 'start:react'], {
    stdio: 'inherit',
    shell: true
  });

  viteProcess.on('error', (err) => {
    console.error('Vite开发服务器启动失败:', err);
  });

  // 处理进程终止
  const cleanup = () => {
    console.log('正在关闭所有进程...');
    try {
      viteProcess.kill();
    } catch (e) {
      console.error('关闭Vite进程时出错:', e);
    }

    try {
      expressProcess.kill();
    } catch (e) {
      console.error('关闭Express进程时出错:', e);
    }

    process.exit();
  };

  process.on('SIGINT', cleanup);
  process.on('SIGTERM', cleanup);

}, 2000);

console.log('开发环境启动中...');
console.log('Vite服务将运行在 http://localhost:5173');
console.log('Express服务将运行在 http://localhost:3000'); 