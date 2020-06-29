var Student = function (result) {
    var that = this;
    that.result = result;
    that.say = function () {
        console.log(that.result);
    }
};

Student.prototype = {
    constructor: Student,
    answer: function (question) {
        Observer.register(question, this.say);
    },
    sleep: function (question) {
        Observer.remove(question, this.say);
    }
};

var Teacher = function () {};
Teacher.prototype = {
    constructor: Teacher,
    ask: function (question) {
        console.log('问题是: ', question);
        Observer.fire(question);
    }
}


var s1 = new Student('学生1的答案');
var s2 = new Student('学生2的答案');
var s3 = new Student('学生3的答案');

s1.answer('什么是设计模式');
s1.answer('简述观察者模式');
s2.answer('什么是设计模式');
s2.answer('简述观察者模式');
s3.answer('什么是设计模式');
s3.sleep('简述观察者模式');

var t = new Teacher();
t.ask('什么是设计模式');
t.ask('简述观察者模式');