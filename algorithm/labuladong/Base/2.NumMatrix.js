/**
 * 304. 二维区域和检索 - 矩阵不可变
 * 给定一个二维矩阵 matrix，以下类型的多个请求：

计算其子矩形范围内元素的总和，该子矩阵的 左上角 为 (row1, col1) ，右下角 为 (row2, col2) 。
实现 NumMatrix 类：

NumMatrix(int[][] matrix) 给定整数矩阵 matrix 进行初始化
int sumRegion(int row1, int col1, int row2, int col2) 返回 左上角 (row1, col1) 、右下角 (row2, col2) 所描述的子矩阵的元素 总和 。
 */

 /**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    const rowLength = matrix.length;
    if(rowLength > 0){
        const colLength = matrix[0].length;
        this.preSum = new Array(rowLength).fill(0).map(() => new Array(colLength + 1).fill(0))
        for(let i = 0; i < rowLength; i++){
            for(let j = 0; j < colLength; j++){
                this.preSum[i][j] = this.preSum
            }
        }
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let sum = 0;

};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

 let a = new NumMatrix([[1,3], [1,2], [1, 2]])
 console.log('a', a)