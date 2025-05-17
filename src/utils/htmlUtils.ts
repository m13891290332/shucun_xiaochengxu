import { useEffect } from 'react';

/**
 * 在React组件中加载传统HTML页面内容
 * @param containerId 容器元素ID
 * @param htmlContent HTML内容
 */
export const loadHtmlContent = (containerId: string, htmlContent: string): void => {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = htmlContent;
    }
};

/**
 * React Hook，用于加载HTML内容
 * @param containerId 容器元素ID
 * @param htmlContent HTML内容
 */
export const useHtmlContent = (containerId: string, htmlContent: string): void => {
    useEffect(() => {
        loadHtmlContent(containerId, htmlContent);

        // 为了保证脚本执行，需要手动加载原HTML中的脚本
        const scriptTags = document.querySelectorAll(`#${containerId} script`);
        scriptTags.forEach(oldScript => {
            const newScript = document.createElement('script');
            Array.from(oldScript.attributes).forEach(attr => {
                newScript.setAttribute(attr.name, attr.value);
            });
            newScript.appendChild(document.createTextNode(oldScript.innerHTML));
            oldScript.parentNode?.replaceChild(newScript, oldScript);
        });
    }, [containerId, htmlContent]);
}; 