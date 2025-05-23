// ec-canvas.js
import * as echarts from './echarts';
import WxCanvas from './wx-canvas';

Component({
  properties: {
    ec: {
      type: Object
    },
    canvasId: {
      type: String,
      value: 'ec-canvas'
    }
  },

  data: {
    isUseNewCanvas: false
  },

  ready: function () {
    // 判断是否使用新版Canvas
    const version = wx.getSystemInfoSync().SDKVersion;
    const isUseNewCanvas = compareVersion(version, '2.9.0') >= 0;
    this.setData({ isUseNewCanvas });

    if (this.data.isUseNewCanvas) {
      // version >= 2.9.0，使用新的方式初始化
      this.initByNewWay();
    } else {
      // version < 2.9.0，使用旧的方式初始化
      this.initByOldWay();
    }
  },

  methods: {
    initByOldWay() {
      // 旧版本初始化
      const ctx = wx.createCanvasContext(this.data.canvasId, this);
      this.ctx = ctx;

      const canvas = new WxCanvas(ctx, this.data.canvasId, false);
      
      echarts.setCanvasCreator(() => {
        return canvas;
      });

      const query = wx.createSelectorQuery().in(this);
      query.select('.ec-canvas').boundingClientRect(res => {
        if (!res) {
          setTimeout(() => this.initByOldWay(), 100);
          return;
        }
        
        if (typeof this.data.ec.onInit === 'function') {
          this.chart = this.data.ec.onInit(canvas, res.width, res.height, echarts);
        } else {
          this.triggerEvent('init', {
            canvas: canvas,
            width: res.width,
            height: res.height,
            echarts: echarts
          });
        }
      }).exec();
    },

    initByNewWay() {
      // 新版本初始化
      const query = wx.createSelectorQuery().in(this);
      query.select('.ec-canvas').fields({ node: true, size: true }).exec(res => {
        if (!res[0]) {
          setTimeout(() => this.initByNewWay(), 100);
          return;
        }

        const canvasNode = res[0].node;
        const canvasWidth = res[0].width;
        const canvasHeight = res[0].height;

        const ctx = canvasNode.getContext('2d');
        
        const canvas = new WxCanvas(ctx, this.data.canvasId, true, canvasNode);
        echarts.setCanvasCreator(() => {
          return canvas;
        });

        if (typeof this.data.ec.onInit === 'function') {
          this.chart = this.data.ec.onInit(canvas, canvasWidth, canvasHeight, echarts);
        } else {
          this.triggerEvent('init', {
            canvas: canvas,
            width: canvasWidth,
            height: canvasHeight,
            echarts: echarts
          });
        }
      });
    },

    canvasToTempFilePath(opt) {
      if (this.data.isUseNewCanvas) {
        // 新版本
        const query = wx.createSelectorQuery().in(this);
        query.select('.ec-canvas')
          .fields({ node: true, size: true })
          .exec(res => {
            const canvasNode = res[0].node;
            opt.canvas = canvasNode;
            wx.canvasToTempFilePath(opt);
          });
      } else {
        // 旧版本
        if (!opt.canvasId) {
          opt.canvasId = this.data.canvasId;
        }
        wx.canvasToTempFilePath(opt, this);
      }
    },

    touchStart(e) {
      if (this.chart && e.touches.length > 0) {
        var touch = e.touches[0];
        var handler = this.chart.getZr().handler;
        handler.dispatch('mousedown', {
          zrX: touch.x,
          zrY: touch.y
        });
        handler.dispatch('mousemove', {
          zrX: touch.x,
          zrY: touch.y
        });
        handler.processGesture(wrapTouch(e), 'start');
      }
    },

    touchMove(e) {
      if (this.chart && e.touches.length > 0) {
        var touch = e.touches[0];
        var handler = this.chart.getZr().handler;
        handler.dispatch('mousemove', {
          zrX: touch.x,
          zrY: touch.y
        });
        handler.processGesture(wrapTouch(e), 'change');
      }
    },

    touchEnd(e) {
      if (this.chart) {
        const touch = e.changedTouches ? e.changedTouches[0] : {};
        var handler = this.chart.getZr().handler;
        handler.dispatch('mouseup', {
          zrX: touch.x,
          zrY: touch.y
        });
        handler.dispatch('click', {
          zrX: touch.x,
          zrY: touch.y
        });
        handler.processGesture(wrapTouch(e), 'end');
      }
    }
  }
});

// 辅助函数
function compareVersion(v1, v2) {
  v1 = v1.split('.')
  v2 = v2.split('.')
  const len = Math.max(v1.length, v2.length)

  while (v1.length < len) {
    v1.push('0')
  }
  while (v2.length < len) {
    v2.push('0')
  }

  for (let i = 0; i < len; i++) {
    const num1 = parseInt(v1[i])
    const num2 = parseInt(v2[i])

    if (num1 > num2) {
      return 1
    } else if (num1 < num2) {
      return -1
    }
  }
  return 0
}

function wrapTouch(event) {
  for (let i = 0; i < event.touches.length; ++i) {
    const touch = event.touches[i];
    touch.offsetX = touch.x;
    touch.offsetY = touch.y;
  }
  return event;
}
