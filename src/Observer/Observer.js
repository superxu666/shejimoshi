/**
 * 观察者模式: 又被称为发布-订阅者模式或者信息机制,定义了一种依赖关系,解决了主体对象和观察者之间功能的耦合
 */

var Observer = (function () {

    var __messages = {};
    return {
        /**注册信息接口
         * @param type 信息类型
         * @param fn 信息对应的动作
         */
        register: function (type, fn) {
            if (typeof __messages[type] === 'undefined') {
                __messages[type] = [fn];
            } else {
                __messages[type].push(fn);
            }
        },
        /**发布信息接口
         * @param type 信息类型
         * @param args 额外参数
         */
        fire: function (type, args) {
            if (!__messages[type])
                return
            var events = {
                type: type,
                args: args || {}
            };
            var i = 0;
            var len = __messages[type].length;
            for (; i < len; i++) {

                __messages[type][i].call(this, events);
            }
        },
        /**移除信息接口
         * @param type 信息类型
         * @param fn 信息对应的动作
         */
        remove: function (type, fn) {
            if (__messages[type] instanceof Array) {

                var len = __messages[type].length;
                while (len--) {
                    __messages[type][len] === fn && __messages[type].splice(len, 1);
                }
            }
        },
        getMessages: function () {
            return __messages;
        }
    }
}());