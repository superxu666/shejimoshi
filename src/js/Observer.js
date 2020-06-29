var _messages = {};
var Observer = (function () {
    return {
        regist: function (type, fn) {
            if (typeof _messages[type] === 'undefined') {
                _messages[type] = [fn];
            } else {
                _messages[type].push(fn);
            }
        },
        fire: function (type, args) {
            if (!_messages[type])
                return;
            var events = {
                type: type,
                args: args || {}
            };
            var i = 0;
            var len = _messages[type].length;
            for (; i < len; i++) {
                _messages[type][i].call(type, events);
            }
        },
        remove: function (type, fn) {
            if (_messages[type] instanceof Array) {
                var i = _messages[type].length - 1;
                for (; i >= 0; i--) {
                    _messages[type][i] === fn && _messages[type].splice(i, 1);
                }
            }
        }
    }
})();


Observer.regist('test', function (e) {
    console.log(e.type, e.args.msg);

    console.log(this);
    
});
Observer.regist('test', function (e) {
    console.log(e.type, e.args.msg);
});
Observer.fire('test', {
    msg: 'console args '
});