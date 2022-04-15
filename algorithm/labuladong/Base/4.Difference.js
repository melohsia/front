/**
 * 差分数组
 * nums:[8, 5,9, 6, 1]
 * diff:[8,-3,4,-3,-5]
 */

function Difference (nums){
    const length = nums.length;
    this.diff = new Array(length).fill(0);
    this.diff[0] = nums[0];
    for(let i = 1; i < length; i++){
        this.diff[i] = nums[i] - nums[i-1];
    }

    this.increase = (start, end, val) => {
        this.diff[start] += val;
        if(end + 1 < length){
            this.diff[end + 1] -= val;
        }
    }
    this.result = () => {
        const length = this.diff.length
        const res = new Array(length).fill(0);
        res[0] = this.diff[0];
        for(let i = 1; i < length; i++){
            res[i] = res[i-1] + this.diff[i]
        }
        console.log('res', res)
        return res;
    }
}

const diff = new Difference([8, 5,9, 6, 1]);
diff.increase(1, 3, 3);
diff.result();
console.log('123', diff.diff)