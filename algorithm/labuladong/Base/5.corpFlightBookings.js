/**
 * 1109. 航班预订统计
这里有 n 个航班，它们分别从 1 到 n 进行编号。
有一份航班预订表 bookings ，表中第 i 条预订记录 bookings[i] = [firsti, lasti, seatsi] 意味着在从 firsti 到 lasti （包含 firsti 和 lasti ）的 每个航班 上预订了 seatsi 个座位。
请你返回一个长度为 n 的数组 answer，里面的元素是每个航班预定的座位总数。

示例 1：
输入：bookings = [[1,2,10],[2,3,20],[2,5,25]], n = 5
输出：[10,55,45,25,25]
解释：
航班编号        1   2   3   4   5
预订记录 1 ：   10  10
预订记录 2 ：       20  20
预订记录 3 ：       25  25  25  25
总座位数：      10  55  45  25  25
因此，answer = [10,55,45,25,25]
 */

function Difference (nums) {
    const length = nums.length;
    this.diff = new Array(length);
    this.diff[0] = nums[0];
    for(let i = 1; i < length; i++) {
        this.diff[i] = nums[i] - nums[i-1];
    }
    this.increase = (i, j ,value) => {
        this.diff[i] += value;
        if(j+1 < length){
            this.diff[j+1] -= value;
        }
    }
    this.result = () => {
        const length = this.diff.length;
        const res = new Array(length).fill(0);
        res[0] = this.diff[0];
        for(let i = 1; i < length; i++){
            res[i] = res[i-1] + this.diff[i];
        }
        return res;
    }
}
/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function(bookings, n) {
    const params = new Array(n).fill(0);
    const difference = new Difference(params);
    bookings.forEach((booking) => {
        const start = booking[0]-1;
        const end = booking[1]-1;
        const value = booking[2];
        difference.increase(start, end, value)
    })
    return difference.result();
};

console.log(corpFlightBookings([[1,2,10],[2,3,20],[2,5,25]], 5))