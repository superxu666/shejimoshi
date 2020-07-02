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

function say() {

    console.log('hello');
}

window.addEventListener('scroll', function () {

    Throttler(say);

})