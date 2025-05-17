export default class WxCanvas {
  constructor(ctx, canvasId, isNew, canvasNode) {
    this.ctx = ctx;
    this.canvasId = canvasId;
    this.chart = null;
    this.isNew = isNew;
    if (isNew) {
      this.canvasNode = canvasNode;
    }
    
    this.initStyle(ctx);
    this.initEvent();
  }

  initStyle(ctx) {
    // 设置Canvas默认样式
    ctx.fillStyle = '#000000';
    ctx.strokeStyle = '#000000';
    ctx.globalAlpha = 1;
    ctx.shadow = null;
  }

  initEvent() {
    // 实现事件相关方法
    this.event = {};
    const eventNames = [
      'click', 'dblclick', 'mousewheel', 'mouseout',
      'mouseup', 'mousedown', 'mousemove', 'contextmenu'
    ];
    
    eventNames.forEach((name) => {
      this.event[name] = {
        handlers: [],
        handlerCount: 0
      };
    });
  }

  addEventListener(type, handler) {
    if (typeof this.event[type] !== 'object') {
      console.warn(`Event type ${type} not supported`);
      return;
    }
    
    this.event[type].handlers.push(handler);
    this.event[type].handlerCount++;
  }

  removeEventListener(type, handler) {
    if (!this.event[type]) {
      return;
    }
    
    const handlers = this.event[type].handlers;
    for (let i = 0; i < handlers.length; i++) {
      if (handlers[i] === handler) {
        handlers.splice(i, 1);
        this.event[type].handlerCount--;
        break;
      }
    }
  }

  // 获取测量文本的函数
  measureText(text) {
    return this.ctx.measureText(text);
  }

  // 其他Canvas常用API的实现
  getContext(contextType) {
    if (contextType === '2d') {
      return this.ctx;
    }
    return null;
  }

  setChart(chart) {
    this.chart = chart;
  }
}
