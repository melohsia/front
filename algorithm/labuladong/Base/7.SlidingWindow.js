/**
 * 滑动窗口解决子串问题
 * 
 * let left = 0, right = 0;
 * while(right < s.length){
 *      增大窗口
 *      window.add(s[right]);
 *      right++;
 *      while(window need shrink){
 *          window.remove(s[left]);
 *          left++
 *      }
 * }
 * 
 */

function slidingWindow (s, t){
    const need = new Map();
    const window = new Map();
    for(let c of t){
        need.set(c, need.has(c) ? need.get(c) + 1 : 0)
    }
    let left = 0, right = 0, valid = 0;
    while(right < s.length){
        //C是移入窗口的字符
        let c = s[right];
        //右移窗口
        right++;
        /**
         * 进行窗口内数据的更新
         */
        //debug输出的位置
        console.log('window: ', left, right);

        //判断左侧窗口是否要收缩
        while('window need shrink'){
            //d是将要移除的字符
            let d = s[left];
            //左移窗口
            left++;
        }
    }
}

console.log(slidingWindow('slidingWindow', 'dowd'))