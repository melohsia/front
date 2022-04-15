/**
 * 插入排序（Insertion-Sort）的算法描述是一种简单直观的排序算法。
 * 它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。
 * 
 * 步骤:
 *  1从第一个元素开始，该元素可以认为已经被排序；
    2取出下一个元素，在已经排序的元素序列中从后向前扫描；
    3如果该元素（已排序）大于新元素，将该元素移到下一位置；
    4重复步骤3，直到找到已排序的元素小于或者等于新元素的位置；
    5将新元素插入到该位置后；
    6重复步骤2~5。
 */

function InsertionSort(nums){
    const length = nums.length
    for(let i = 1; i < length; i++){
        let preIndex = i - 1, current = nums[i]
        while(preIndex >= 0 && nums[preIndex] > current){
            nums[preIndex+1] = nums[preIndex]
            preIndex --
        }
        nums[preIndex+1] = current
    }
    return nums
}

console.log(InsertionSort([3, 1, 4, 5, 5, 2]))