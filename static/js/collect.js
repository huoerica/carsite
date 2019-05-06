/**
 * ---------------------------------------------
 * Javscript is just for make elements clickable
 * Effects are on the css only
 * ---------------------------------------------
 * @since 2015/06/10
 * @author Reiha Hosseini ( @mrReiha )
 */
window.$ = (i) => {
    console.log(i)
    return i.includes('#') ? document.getElementById(i) : document.querySelectorAll(i);
};

/***
 * 展开/收起组件Toggle v1.0
 * @param {Object} container 内容容器(必填)
 * @param {Object} mode 点击收起取消，鼠标移入/移出(可选)
 * @param {Object} type 是否可以同时展开多个
 * @param {Object} duration 动画时长(可选)
 */
function Toggle(container, mode, duration) {
    this.container = document.querySelectorAll(container);
    console.log(this.container)
    this.mode = mode || "click";
    this.openIndex = -1;
    this.duration = duration || 300;
    this.init();
}

Toggle.prototype = {
    constructor: Toggle,
    init: function () {
        for (let i = 0, len = this.container.length; i < len; i++) {
            let _this = this.container[i];
            _this.onclick = (e) => {
                for (var j = 0; j < len; j++)
                    if (this != this.container[j])
                        this.container[j].parentNode.className = this.container[j].parentNode.className.replace(/ open/i, '');
                var cn = _this.parentNode.className;
                _this.parentNode.className = ~cn.search(/open/i) ? cn.replace(/ open/i, '') : cn + ' open';
            };
        }
    }
};

(function () {
    'use strict';

    /***
     * 信息提示组件Toast v1.0
     * @param {Object} container 内容容器(必填)
     * @param {Object} content 文字内容(可选)
     * @param {Object} duration 显示时长(可选)
     * 使用方法
     * var toast = new Toast("toast", "你好，对话框");
     * toast.show();(支持回调函数)
     */
    function Toast(container, content, duration) {
        this.container = document.getElementById(container);
        this.content = content || "这是一段对话";
        this.duration = duration || 2000;
    }

    Toast.prototype.show = function (callback) {
        this.callback = callback || function () {
        };
        this.container.style.opacity = 1;
        this.container.style.display = "block";
        this.container.innerHTML = this.content;

        setTimeout(function () {
            this.callback && this.callback();
            this.hide();
        }.bind(this), this.duration);

        return this;
    };

    Toast.prototype.hide = function (callback) {
        this.callback = callback || function () {
        };

        this.container.style.display = "none";
        this.callback && this.callback();
        return this;
    };
    window.Toast = Toast;
})(window);
