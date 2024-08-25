// 07/19

const sum = function (...nums) {
    // console.log(nums);
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        result += num;
    }
    return result;
}
// 배열을 통하여 하나의 변수로 
// 여러개의 값을 지정하여 처리를 할 수 있음
let result = sum();
console.log(result);