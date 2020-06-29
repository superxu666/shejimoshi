const player = function (name) {
    this.name = name;
    playerMediator.add(name);
}

player.prototype = {
    constructor: player,
    win: function () {
        playerMediator.win(this.name);
    },
    lose: function () {
        playerMediator.lose(this.name);
    }
}

const playerMediator = (function () {

    const players = [];
    const winArr = [];
    const loseArr = [];

    return {

        add: function (name) {
            players.push(name);
        },
        win: function (name) {
            winArr.push(name);
            if (winArr.length + loseArr.length === players.length) {
                this.show();
            }
        },
        lose: function (name) {
            loseArr.push(name);
            if (winArr.length + loseArr.length === players.length) {
                this.show();
            }
        },
        show: function () {
            for (let winner of winArr) {
                console.log(winner + ' 挑战成功!!!');
            }
            for (let loser of loseArr) {
                console.log(loser + ' 挑战失败!!!');
            }
        }
    }

}());


const a = new player('A 选手');
const b = new player('B 选手');
const c = new player('C 选手');

a.win();
b.win();
c.lose();