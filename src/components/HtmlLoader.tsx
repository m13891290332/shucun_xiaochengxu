import React, { useEffect } from 'react';
import { useHtmlContent } from '../utils/htmlUtils';

interface HtmlLoaderProps {
  containerId: string;
  htmlPath: string;
  className?: string;
}

/**
 * HTML加载器组件，用于在React中动态加载原始HTML
 */
const HtmlLoader: React.FC<HtmlLoaderProps> = ({
  containerId,
  htmlPath,
  className = 'h-full w-full',
}) => {
  const [htmlContent, setHtmlContent] = React.useState<string>('');

  // 获取HTML内容
  useEffect(() => {
    const fetchHtml = async () => {
      try {
        const response = await fetch(htmlPath);
        const content = await response.text();
        setHtmlContent(content);
      } catch (error) {
        console.error(`加载HTML失败: ${htmlPath}`, error);
      }
    };

    fetchHtml();
  }, [htmlPath]);

  // 使用自定义Hook加载HTML内容
  useHtmlContent(containerId, htmlContent);

  return (
    <div id={containerId} className={className}>
      {/* HTML内容将被动态加载到此处 */}
    </div>
  );
};

export default HtmlLoader;
