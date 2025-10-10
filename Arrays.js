//Write function `sum`
/**
 * Calculates the sum of all numbers in the given array.
 *
 * @param {Array<number>} nums - Array of numbers
 * @returns {number} The total sum
 * @throws {Error} If nums is not an array of numbers
 */

function sum(nums) {
    let totalSum = 0;
    for (x = 0; x < nums.length; x++) {
        totalSum += nums[x];
    }
    return totalSum;
}

//console.log(sum([1, 2, 3, 4, 5]));


//Write function `filterEven`
/**
 * Returns a new array that contains only the even numbers
 * from the `arr` parameter.
 *
 * @param {Array<number>} arr – Array of integers
 * @returns {Array<number>} Array of only even numbers
 * @throws {Error} If param `arr` is not an array of numbers
 */

function filterEven(nums) {
    let newArray = [];
    for (x = 0; x < nums.length; x++) {
        if (typeof nums[x] !== "number") {
            return "That is not a number";
        };
    }
    for (x = 0; x < nums.length; x++) {
        if (nums[x] % 2 === 0) {
            newArray.push(x);
        }
    }
    return newArray;
}
//console.log(filterEven([1, 2, 3, 4, 5]));

//Write function `double `
/**
 * Creates a new array where every number from `arr`
 * is doubled (multiplied by 2).
 *
 * @param {number[]} arr – Array of numbers
 * @returns {number[]} New array with doubled values
 */

function double(nums) {
    let newArray = [];
    for (x = 0; x < nums.length; x++) {
        nums[x] = nums[x] * 2;
        newArray.push(nums[x]);
    }
    return newArray;
}

//console.log(double([1, 2, 3, 4, 5]));

//Write function `replaceAt `
/**
 * Removes the item at position `index` and inserts `newItem`
 * at that same spot, returning the **modified** array.
 *
 * @param {Array<string>} arr – The original array
 * @param {number} index – Position to replace (0-based)
 * @param {string} newItem – The string to insert
 * @returns {Array<string>} The array after replacement
 *
 * @example ["ant", "bison", "cow"]
 * replaceAt(animals, 1, "cat"); // -> ["ant", "cat", "cow"]
 *
 * @throws {Error} If index is out of bounds
 */

function replaceAt(arr, index, newItem) {
    if (index > arr.length - 1) {
        return "False index";
    }
    let newArray = arr;
    newArray[index] = newItem;
    return newArray;
}
//console.log(replaceAt(["1", "2", "3", "4", "5"], 5, "5"));


//Write function `uniqueNumbers` (hard++)
/**
 * Returns a **new** array containing only the unique numbers,
 * preserving the order of first appearance.
 *
 * @param {Array<number>} nums - Array that may contain duplicates
 * @returns {Array<number>} Array with duplicates removed
 */

function uniqueNumbers(nums) {
    const arr = [];
    for (let i = 0; i < nums.length; i++) {
        if (!arr.includes(nums[i])) {
            arr.push(nums[i]);
        }
    }
    return arr;
}

console.log(uniqueNumbers([1, 2, 2, 4, 5]));