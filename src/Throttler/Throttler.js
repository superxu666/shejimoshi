var Throttler = function () {

    var isClear = arguments[0];
    var fn;
    var param;
    var time = 300;

    if (typeof isClear === 'boolean') {

        fn = arguments[1];
        fn.__throttleID && clearTimeout(fn.__throttleID);
    } else {

        fn = isClear;
        param = arguments[1] || {
            context: null,
            args: null
        };

        clearTimeout(fn.__throttleID);
        fn.__throttleID = setTimeout(function () {

            fn.apply(param.context, param.args);
        }, time);

    }
}

function say(e) {

    console.log('hello', e);
}

function Debounce(fn) {

    if (!Debounce.timer) {

        fn.call(this, arguments[1]);
        Debounce.timer = setTimeout(() => {
            Debounce.timer = null;
        }, 1000);
    }
}

window.addEventListener('scroll', function (e) {

    Throttler(say);

});

function login() {

    console.log('登陆成功!!!');

}


window.addEventListener('keyup', function (e) {

    if (e.keyCode === 13) {
        Debounce(login);
    }
})

getById('login-btn').onclick = function () {

    Debounce(login);
};