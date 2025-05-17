const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;


// 特定路径直接提供静态HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'raw', 'index.html'));
});

app.get('/chanye', (req, res) => {
    res.sendFile(path.join(__dirname, 'raw', 'chanye.html'));
});
app.get('/chanye.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'raw', 'chanye.html'));
});

app.get('/zhushou', (req, res) => {
    res.sendFile(path.join(__dirname, 'raw', 'zhushou.html'));
});
app.get('/zhushou.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'raw', 'zhushou.html'));
});


app.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname, 'raw', 'test.html'));
});



// 设置静态文件目录，提供React应用的静态资源
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname));

// 添加经济数据整合接口 - 将此路由放在通用数据接口前面，以避免路由冲突
app.get('/api/data/jingji/speedup', (req, res) => {
    try {
        // 读取四个JSON文件
        const gdpPath = path.join(__dirname, 'resources', '地区生产总值增速.json');
        const industryPath = path.join(__dirname, 'resources', '规模以上工业增加值增速.json');
        const urbanPath = path.join(__dirname, 'resources', '城镇居民人均可支配收入增速.json');
        const ruralPath = path.join(__dirname, 'resources', '农村居民人均可支配收入增速.json');

        const gdpData = JSON.parse(fs.readFileSync(gdpPath, 'utf-8'));
        const industryData = JSON.parse(fs.readFileSync(industryPath, 'utf-8'));
        const urbanData = JSON.parse(fs.readFileSync(urbanPath, 'utf-8'));
        const ruralData = JSON.parse(fs.readFileSync(ruralPath, 'utf-8'));

        // 整合数据
        const responseData = {
            gdp: gdpData,
            industry: industryData,
            urban: urbanData,
            rural: ruralData
        };

        res.json(responseData);
    } catch (err) {
        console.error('读取经济数据失败: ', err);
        res.status(500).json({ error: '读取经济数据失败' });
    }
});

// 添加农村收入数据接口
app.get('/api/data/shouru/rural', (req, res) => {
    const filePath = path.join(__dirname, 'resources', '农村居民收入.json');

    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.error('文件读取失败: ', err);
            res.status(500).json({ error: '文件读取失败' });
            return;
        }
        res.send(data);
    });
});

// 添加城市收入数据接口
app.get('/api/data/shouru/urban', (req, res) => {
    const filePath = path.join(__dirname, 'resources', '城市居民可支配收入数据.json');

    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.error('文件读取失败: ', err);
            res.status(500).json({ error: '文件读取失败' });
            return;
        }
        res.send(data);
    });
});

app.get('/api/data/jingji/rural', (req, res) => {
    const filePath = path.join(__dirname, 'resources', '农村居民收入.json');

    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.error('文件读取失败: ', err);
            res.status(500).json({ error: '文件读取失败' });
            return;
        }
        res.send(data);
    });
});

// 添加经济数据概览接口
app.get('/api/data/jingji/overview', (req, res) => {
    try {
        // 读取四个JSON文件
        const gdpPath = path.join(__dirname, 'resources', 'GDP数据.json');
        const agriculturePath = path.join(__dirname, 'resources', '农林牧渔业增加值.json');
        const retailPath = path.join(__dirname, 'resources', '社会消费品零售额.json');
        const budgetPath = path.join(__dirname, 'resources', '一般公共预算收入.json');

        const gdpData = JSON.parse(fs.readFileSync(gdpPath, 'utf-8'));
        const agricultureData = JSON.parse(fs.readFileSync(agriculturePath, 'utf-8'));
        const retailData = JSON.parse(fs.readFileSync(retailPath, 'utf-8'));
        const budgetData = JSON.parse(fs.readFileSync(budgetPath, 'utf-8'));

        // 计算各项数据的平均值和增长率
        const calculateAverageAndGrowth = (data, currentYear, prevYear) => {
            let currentSum = 0;
            let prevSum = 0;
            let currentCount = 0;
            let prevCount = 0;

            Object.keys(data).forEach(region => {
                if (data[region][currentYear]) {
                    currentSum += data[region][currentYear];
                    currentCount++;
                }
                if (data[region][prevYear]) {
                    prevSum += data[region][prevYear];
                    prevCount++;
                }
            });

            const currentAvg = currentCount > 0 ? currentSum / currentCount : 0;
            const prevAvg = prevCount > 0 ? prevSum / prevCount : 0;
            const growth = prevAvg > 0 ? ((currentAvg - prevAvg) / prevAvg) * 100 : 0;

            return {
                value: currentAvg,
                growth: growth
            };
        };

        // 最新年份为2023年，上一年为2022年
        const currentYear = '2023';
        const prevYear = '2022';

        const gdpStats = calculateAverageAndGrowth(gdpData, currentYear, prevYear);
        const agricultureStats = calculateAverageAndGrowth(agricultureData, currentYear, prevYear);
        const retailStats = calculateAverageAndGrowth(retailData, currentYear, prevYear);

        // 预算数据使用不同的计算方式
        const budgetStats = calculateAverageAndGrowth(budgetData, currentYear, prevYear);

        const responseData = {
            gdp: gdpStats,
            agriculture: agricultureStats,
            retail: retailStats,
            budget: budgetStats
        };

        res.json(responseData);
    } catch (err) {
        console.error('读取经济概览数据失败: ', err);
        res.status(500).json({ error: '读取经济概览数据失败' });
    }
});

// 通用数据接口
// 不安全，已禁用
// app.get('/api/data/:dataName', (req, res) => {
//     const dataName = req.params.dataName;
//     const filePath = path.join(__dirname, 'resources', `${dataName}.json`);

//     fs.readFile(filePath, 'utf-8', (err, data) => {
//         if (err) {
//             console.error('文件读取失败: ', err);
//             res.status(500).json({ error: '文件读取失败' });
//             return;
//         }
//         res.send(data);
//     });
// });

// 所有其他路径交给React路由处理
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// 启动服务器
app.listen(PORT, () => {
    console.log(`服务器已在端口 ${PORT} 上启动`);
}); 