const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('开始初始化项目...');

// 确保所有必要的目录都存在
const dirs = [
    'public',
    'public/index',
    'public/index/css',
    'public/index/js',
    'public/index/images',
    'public/uploads',
    'miniprogram',
    'miniprogram/pages',
    'miniprogram/pages/index',
    'miniprogram/pages/chanye',
    'miniprogram/pages/jingji',
    'miniprogram/pages/shouru',
    'miniprogram/pages/zhushou',
    'miniprogram/pages/analysis',
    'miniprogram/pages/gongxu',
    'miniprogram/pages/lvyou',
    'miniprogram/pages/daikuan',
    'miniprogram/pages/news',
    'miniprogram/pages/cooperation',
    'miniprogram/pages/contactus',
    'miniprogram/utils',
    'miniprogram/images' // Added for placeholder images
];

dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        console.log(`创建目录: ${dir}`);
    }
});

// 复制静态资源到public目录
try {
    if (fs.existsSync('index')) {
        console.log('复制index目录到public...');
        execSync('xcopy /E /I /Y index public\\index');
    }

    if (fs.existsSync('uploads')) {
        console.log('复制uploads目录到public...');
        execSync('xcopy /E /I /Y uploads public\\uploads');
    }

    // 复制HTML文件到public目录
    const htmlFiles = ['index.html', 'chanye.html', 'jingji.html', 'zhushou.html', 'shouru.html'];
    htmlFiles.forEach(file => {
        if (fs.existsSync(file)) {
            console.log(`复制${file}到public目录...`);
            fs.copyFileSync(file, path.join('public', file));
        }
    });
} catch (error) {
    console.error('复制文件时出错:', error);
}

// 安装所需依赖
console.log('安装项目依赖...');
try {
    execSync('npm install', { stdio: 'inherit' });
} catch (error) {
    console.error('安装依赖失败:', error);
}

console.log('初始化完成！');
console.log('请使用 npm run dev 启动开发服务器');