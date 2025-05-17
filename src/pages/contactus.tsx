import React from 'react';
import MainLayout from './main-layout';

const AboutUsPage: React.FC = () => {
  return (
    <MainLayout 
      title="关于我们" 
      subtitle="数村科技" 
      backgroundImage="/about/background.jpg"
      activePage="关于我们"
    >
      <div className="about-us-container max-w-7xl mx-auto px-4 py-10">
        {/* Hero Section */}
        <div className="hero-section text-center mb-16">
          <div className="mission-statement bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-8 px-6 rounded-lg shadow-lg mx-auto max-w-4xl transform hover:scale-102 transition-all">
            <h2 className="text-3xl font-bold mb-4">服务惠三农 数字兴万村</h2>
            <p className="text-lg">
              数村科技致力于将数字技术与乡村发展相结合，通过创新的数字化解决方案，
              助力乡村振兴战略实施，促进农业现代化和农村繁荣发展。
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mission-section mb-20">
          <div className="section-header">
            <h3 className="section-title">我们的使命</h3>
            <div className="section-divider"></div>
          </div>
          
          <div className="mission-content grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="mission-text">
              <p className="text-lg mb-6">
                数村科技致力于将数字技术与乡村发展相结合，通过创新的<span className="highlight font-semibold text-primary-600">数字化解决方案</span>，
                助力乡村振兴战略实施，促进农业现代化和农村繁荣发展。
              </p>
              <p className="text-lg mb-6">
                我们的目标是搭建连接城乡的数字桥梁，提升农村地区数字化水平，
                为农民提供便捷的数字服务，实现<span className="highlight font-semibold text-primary-600">乡村数字化转型</span>。
              </p>
              <div className="mission-features mt-8">
                <h4 className="text-xl font-semibold mb-4">核心业务领域</h4>
                <div className="grid grid-cols-2 gap-4">
                  {['数字农业', '智慧乡村', '农产品上行', '农村电商'].map((item, index) => (
                    <div key={index} className="feature-card bg-gray-50 border-l-4 border-primary-500 p-4 rounded shadow-sm hover:shadow-md transition-all">
                      <span className="text-primary-600 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mission-image">
              <img 
                src="/about/mission-image.jpg" 
                alt="数村科技使命" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/600x400?text=数村科技使命";
                }}
              />
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="team-section mb-20">
          <div className="section-header">
            <h3 className="section-title">团队成员</h3>
            <div className="section-divider"></div>
          </div>
          
          {/* Academic Advisors */}
          <div className="advisors-section mb-16">
            <h4 className="text-2xl font-bold text-center mb-8 relative">
              指导老师
              <span className="block w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mt-3"></span>
            </h4>
            
            <div className="advisors-grid grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Advisor 1 */}
              <div className="advisor-card bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="p-6 border-b border-gray-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="text-2xl font-bold text-white mb-1">王立剑</h5>
                      <p className="text-gray-300 text-lg">西安交通大学公共政策与管理学院</p>
                    </div>
                    <div className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      教授·博士生导师
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <p className="advisor-description text-gray-700 mb-3">
                    学院党委副书记。"陕西高校人文社会科学青年英才支持计划"入选者、西安交通大学青年拔尖人才支持计划(A类教授)入选者、
                    陕西省优秀博士论文获得者、中国社会保障学会青年委员会委员，研究成果两次得到教育部采纳并通报表扬。
                  </p>
                  <p className="advisor-description text-gray-700">
                    目前，主持国家社科基金项目1项、国家自然科学基金项目1项，民政部民政政策理论研究委托课题等科研项目20余项；
                    以第一作者发表论文60余篇。
                  </p>
                </div>
              </div>
              
              {/* Advisor 2 */}
              <div className="advisor-card bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="p-6 border-b border-gray-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="text-2xl font-bold text-white mb-1">张玉龙</h5>
                      <p className="text-gray-300 text-lg">西安交通大学</p>
                    </div>
                    <div className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      硕士生导师
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <p className="advisor-description text-gray-700 mb-3">
                    主要从事实验教学与科研工作，研究领域为计算机视觉与多媒体信息处理理论研究及软件开发，
                    近年来在国内外重要学术期刊和国际会议上发表20余篇学术论文。
                  </p>
                  <p className="advisor-description text-gray-700">
                    获省级教学成果特等奖1项，省级教学竞赛一等奖1项，主编教材2部，主持教改项目10项(省部级4项)，
                    指导学生参加各类竞赛获国家级奖项百余项，其中国家级一等奖13项。
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Team Leader */}
          <div className="team-leader-section mb-16">
            <h4 className="text-2xl font-bold text-center mb-8 relative">
              团队负责人
              <span className="block w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mt-3"></span>
            </h4>
            
            <div className="flex justify-center">
              <div className="leader-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 max-w-3xl w-full">
                <div className="flex flex-col md:flex-row">
                  <div className="leader-avatar bg-gradient-to-r from-primary-600 to-secondary-600 p-6 flex items-center justify-center md:w-64">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-white opacity-20 transform scale-110"></div>
                      <img 
                        src="/about/leader-avatar.jpg" 
                        alt="团队负责人" 
                        className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                        onError={(e) => {
                          e.currentTarget.src = "https://via.placeholder.com/128?text=负责人";
                        }}
                      />
                    </div>
                  </div>
                  <div className="p-6 flex-1">
                    <h4 className="text-2xl font-bold text-gray-800 mb-2">孙渤越</h4>
                    <p className="text-primary-600 font-semibold mb-4 text-lg">团队负责人</p>
                    <p className="text-gray-600 leading-relaxed">
                      劳保2301，大一专业排名第二，曾获得国家奖学金，三创赛省二，数学建模国赛省二，美赛H奖，四级600+，六级630+，
                      腾飞杯、互联网+、大创、外研社杯等多个奖项，已发表多篇学术论文。
                    </p>
                    <div className="mt-4 flex gap-3">
                      <div className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">领导力</div>
                      <div className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm">创新</div>
                      <div className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">科研</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Team Members */}
          <div className="team-members-section">
            <h4 className="text-2xl font-bold text-center mb-8 relative">
              团队成员
              <span className="block w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mt-3"></span>
            </h4>
            
            <div className="team-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "伍俊宇",
                  role: "软件工程专业本科生",
                  responsibility: "负责网站的前后端开发，分析算法的实现",
                  avatar: "/about/avatar1.jpg"
                },
                {
                  name: "杨登瑞",
                  role: "软件工程专业",
                  description: "大二软件工程专业，专业排名10%，曾获得校级二等奖学金，数学建模国赛省二，美赛H奖项，数学竞赛省三，擅长汇报演讲和答辩，精通编程语言",
                  responsibility: "负责网站的前后端开发，分析算法的实现",
                  avatar: "/about/avatar2.jpg"
                },
                {
                  name: "陈国册",
                  role: "数学与统计学院应用统计研一",
                  description: "s4099班班长，本科大连理工大学数学与应用数学专业，研究方向大模型垂域微调",
                  responsibility: "利用ai技术项目赋能，实现政治经济人工智能交叉，设计项目ui界面",
                  avatar: "/about/avatar3.jpg"
                },
                {
                  name: "马越",
                  role: "书院学辅优秀干事",
                  description: "在书院学生会负责过本书院IP运营，运营期间推送阅读量达1000+。熟练掌握MS高级应用，计算机二级获优秀。有政府实习经历，担任运营岗。",
                  responsibility: "担任ppt设计与制作，负责将团队成果进行梳理整合，以直观形象的方式进行展示",
                  avatar: "/about/avatar4.jpg"
                },
                {
                  name: "邓研杰",
                  description: "专业均分91+，曾获全国大学生数学竞赛陕西省二等奖，腾飞杯校级铜奖，志愿服务指导中心成员，参与一项省级大创，清远杯院级三等奖",
                  responsibility: "负责文书运营部分的修改与撰写",
                  avatar: "/about/avatar5.jpg"
                },
                {
                  name: "赵言圣",
                  role: "哲学专业辅修法学",
                  description: "现为专业前15%，获评社会活动先进个人，四六级均通过。腾飞杯比赛多次获三等奖，新文科大赛校赛二等奖，主持省级大创一项，参与一项。曾多次在政府部门实习并参与社会实践活动，累计工时200+",
                  responsibility: "负责商业计划书的撰写和修改，参与制定相关战略方案",
                  avatar: "/about/avatar6.jpg"
                },
                {
                  name: "杨志丹",
                  description: "参与过多项志愿活动，协助组织并布置活动场地，引导成员有序参与活动，在活动中锻炼了沟通协调与组织能力，具备一定的团队协作与服务意识",
                  responsibility: "负责项目相关PPT的创意构思、内容排版与设计制作，以可视化形式清晰呈现项目背景、目标、进展及成果等内容",
                  avatar: "/about/avatar7.jpg"
                },
                {
                  name: "陈悦",
                  role: "大三信息专业",
                  description: "排名20%，上学期均分92+，获得校级二等，三等奖学金，擅长ppt制作，四六级600+，英语能力较强，擅长文书工作",
                  responsibility: "ppt制作，提供建议",
                  avatar: "/about/avatar8.jpg"
                },
                {
                  name: "王诗词",
                  role: "环境设计本科生",
                  description: "参与腾飞杯丰润杯新文科大赛等多项赛事，拥有丰富的参赛与美工经验",
                  responsibility: "美工 美化文书及设计包装PPT",
                  avatar: "/about/avatar9.jpg"
                },
                {
                  name: "张瑞雪",
                  role: "公共政策与管理专业大一",
                  description: "曾获腾飞杯三等奖，拥有腾飞杯，三创赛等比赛经历，大一担任学习委员，获得计算机二级优秀证书",
                  responsibility: "答辩",
                  avatar: "/about/avatar10.jpg"
                },
                {
                  name: "杨一诺",
                  role: "文科试验班类大一",
                  description: "担任班长、崇实书院心理工作中心干事，具备新文科大赛、三创赛、清远杯、腾飞杯等经验",
                  responsibility: "文书编写，查找资料，提供建议",
                  avatar: "/about/avatar11.jpg"
                }
              ].map((member, index) => (
                <div key={index} className="member-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="member-avatar h-56 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
                    <img 
                      src={member.avatar} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `https://via.placeholder.com/300x200?text=${member.name}`;
                      }}
                    />
                    <div className="absolute bottom-0 left-0 p-4 text-white">
                      <h5 className="text-xl font-bold">{member.name}</h5>
                      {member.role && <p className="text-white opacity-90">{member.role}</p>}
                    </div>
                  </div>
                  <div className="p-4">
                    {member.description && (
                      <div className="mb-3">
                        <p className="text-sm text-gray-600 line-clamp-3">{member.description}</p>
                      </div>
                    )}
                    <div className="pt-2 border-t border-gray-100">
                      <h6 className="text-sm font-semibold text-primary-600 mb-1">工作职责</h6>
                      <p className="text-sm text-gray-700">{member.responsibility}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="contact-section mb-16">
          <div className="section-header">
            <h3 className="section-title">联系我们</h3>
            <div className="section-divider"></div>
          </div>
          
          <div className="contact-content bg-white rounded-xl shadow-lg p-8 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="contact-item flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-all">
                <div className="icon-wrapper bg-primary-100 text-primary-600 p-4 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">电子邮件</p>
                  <p className="font-bold text-gray-800">info@shucun.com</p>
                </div>
              </div>

              <div className="contact-item flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-all">
                <div className="icon-wrapper bg-primary-100 text-primary-600 p-4 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">联系电话</p>
                  <p className="font-bold text-gray-800">400-123-4567</p>
                </div>
              </div>

              <div className="contact-item flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-all">
                <div className="icon-wrapper bg-primary-100 text-primary-600 p-4 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">公司地址</p>
                  <p className="font-bold text-gray-800">北京市海淀区中关村科技园区</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <a href="#" className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all text-center flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  了解更多
                </a>
                <a href="#" className="bg-white border border-primary-600 text-primary-600 hover:bg-primary-50 font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all text-center flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  下载介绍
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutUsPage;
