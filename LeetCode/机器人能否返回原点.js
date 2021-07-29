/**
 * Description: 请输入文件描述
 * Author: liuyongsheng
 * Date: 2020-08-28 13:45:26
*/
/* 在二维平面上，有一个机器人从原点 (0, 0) 开始。给出它的移动顺序，判断这个机器人在完成移动后是否在 (0, 0) 处结束。

移动顺序由字符串表示。字符 move[i] 表示其第 i 次移动。机器人的有效动作有 R（右），L（左），U（上）和 D（下）。如果机器人在完成所有动作后返回原点，则返回 true。否则，返回 false。

注意：机器人“面朝”的方向无关紧要。 “R” 将始终使机器人向右移动一次，“L” 将始终向左移动等。此外，假设每次移动机器人的移动幅度相同。 */


/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    var p = [0, 0];
    for(let i = 0; i < moves.length; i++) {
        if (moves[i] === 'R') {
            p[0]++;
        } else if (moves[i] === 'L') {
            p[0]--;
        } else if (moves[i] === 'U') {
            p[1]++;
        } else if (moves[i] === 'D') {
            p[1]--;
        }
    }
    return p[0] === 0 && p[1] === 0;
};