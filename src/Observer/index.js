// 留言模块
(function () {

    function addMsgItem(e) {
        var text = e.args.text;
        var ui = getById('ul');
        var li = document.createElement('li');
        var span = document.createElement('span');

        span.style.cssText = `
            display: inline-block;
            margin: 5px 20px;
            cursor: pointer;
            text-align: center;
            color: red;
        `;
        span.innerHTML = '删除';
        li.innerHTML = text;
        span.onclick = function () {
            ui.removeChild(li);
            Observer.fire('removeCommentMessage', {
                num: -1
            });
        }
        li.appendChild(span);
        ui.appendChild(li);
    }

    Observer.register('addCommentMessage', addMsgItem);
}());

// 用户信息模块
(function () {
    function changeMsgNum(e) {
        var num = e.args.num;
        var span = getById('msg_num');
        span.innerHTML = parseInt(span.innerHTML) + num;
    }

    Observer.register('addCommentMessage', changeMsgNum);
    Observer.register('removeCommentMessage', changeMsgNum);
}());

// 提交模块
(function () {

    var text = getById('textarea');
    getById('commit').onclick = function () {
        if (text.value === '') {
            return;
        }
        var obj = {
            text: text.value,
            num: 1
        }
        Observer.fire('addCommentMessage', obj);
        text.value = '';
    }

    getById('textarea').addEventListener('keyup', function (e) {

        if (e.keyCode === 13) {
            var obj = {
                text: text.value,
                num: 1
            }
            Observer.fire('addCommentMessage', obj);
            text.value = '';
        }
    })
}());