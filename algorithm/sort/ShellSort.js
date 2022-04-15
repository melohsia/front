/**
 * 1959年Shell发明，第一个突破O(n2)的排序算法，是简单插入排序的改进版。
 * 它与插入排序的不同之处在于，它会优先比较距离较远的元素。希尔排序又叫缩小增量排序
 * 
 * 先将整个待排序的记录序列分割成为若干子序列分别进行直接插入排序，具体算法描述：

    选择一个增量序列t1，t2，…，tk，其中ti>tj，tk=1；
    按增量序列个数k，对序列进行k 趟排序；
    每趟排序，根据对应的增量ti，将待排序列分割成若干长度为m 的子序列，分别对各子表进行直接插入排序。
    仅增量因子为1 时，整个序列作为一个表来处理，表长度即为整个序列的长度。
 */

function ShellSort(nums){
    let length = nums.length
    for(let gap = Math.floor(length/2); gap > 0; gap = Math.floor(gap/2)){
        for(let i = gap; i < length; i++){
            let current = nums[i]
            let j = i
            while(j >= gap && current < nums[j - gap]){
                nums[j] = nums[j - gap]
                j = j - gap
            }
            nums[j] = current
        }
    }
    return nums
}

console.log(ShellSort([49, 38, 65, 97, 76, 13, 27, 49, 55, 4]))