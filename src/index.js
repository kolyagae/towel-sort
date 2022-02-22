// You should implement your task here.

module.exports = function towelSort(matrix) {
    let arr = [];
    if (matrix !== undefined) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                let colomnIndex = i % 2 === 0 ? j : matrix[i].length - j - 1;
                // console.log(matrix[i][colomnIndex])
                arr.push(matrix[i][colomnIndex]);
            }
        }
    }
    return arr;
};
