// 1. Please write a function that reverses a string

const reverseString = (str) => str.split("").reverse().join("");

console.log("1.", reverseString("test string"));

// 2. Please write a function that filters out numbers from a list

const filterNumbers = (arr) => arr.filter((item) => typeof item !== "number");

console.log("2.", filterNumbers([1, "abc", 2, "def", 3, "ghi"]));

// 3. Please write a function that shows the usage of closures

const closureExample = (start = 0) => {
    const number = start;
    function closure() {
        console.log("3.", number);
    }
    return closure;
};

const call = closureExample(5);
call();

// 4. Please write a recursive function that flattens an list of items
// example input [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]]
// example output [2, 4, 44, 5, 6, 4, 5, 6, 2, 4, 4, 5]

const flattenArray = (arr) => {
    const result = [];

    arr.forEach((el) => {
        if (Array.isArray(el)) {
            result.push(...flattenArray(el));
        } else {
            result.push(el);
        }
    });

    return result;
};

console.log(
    "4.",
    flattenArray([[2, [4, [44, 5, 6]]], [4, 5, 6], [[2, 4], 4], 5])
);

// 5. Please write a function that finds all common elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['b', 4, 76]

const findCommon = (arr1, arr2) => arr1.filter((item) => arr2.includes(item));

console.log("5.", findCommon(["b", 3, 4, 76, "c"], ["a", "b", 4, 76, 21, "e"]));

// 6. Please write a function that finds all different elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['a', 3, 21, 'c', 'e']

const findDifferent = (arr1, arr2) => {
    const uniqueInArr1 = arr1.filter((item) => !arr2.includes(item));
    const uniqueInArr2 = arr2.filter((item) => !arr1.includes(item));

    const finalArray = [...uniqueInArr1, ...uniqueInArr2];

    return finalArray;
};

console.log(
    "6.",
    findDifferent(["b", 3, 4, 76, "c"], ["a", "b", 4, 76, 21, "e"])
);

// 7. Please write a function that transforms an object to a list of [key, value] tuples.
// example input { color: 'Blue', id: '22', size: 'xl' }
// example output [['color', 'blue'], ['id', '22'], ['size', 'xl']]

const transformObject = (obj) => {
    const arr = [];
    for (const [key, value] of Object.entries(obj)) {
        arr.push([key, value]);
    }
    return arr;
};

console.log("7.", transformObject({ color: "Blue", id: "22", size: "xl" }));

// 8. Please write a function that transforms a list of [key, value] tuples to object. // reverse or task 7
// example input [['color', 'blue'], ['id', '22'], ['size', 'xl']]
// example output { color: 'Blue', id: '22', size: 'xl' }

const transformArray = (arr) => Object.fromEntries(arr);

console.log(
    "8.",
    transformArray([
        ["color", "blue"],
        ["id", "22"],
        ["size", "xl"],
    ])
);

// 9. Please write a function that takes two arrays of items and returns an array of tuples made from two input arrays at the same indexes. Excessive items should be dropped.
// example input [1,2,3], [4,5,6,7]
// example output [[1,4], [2,5], [3,6]]

const returnTuples = (arr1, arr2) => {
    const finalArray = [];

    arr1.forEach(
        (item, index) => arr2[index] && finalArray.push([item, arr2[index]])
    );

    return finalArray;
};

console.log("9.", returnTuples([1, 2, 3], [4, 5, 6, 7]));

// 10. Please write a function which takes a path(path is an array of keys) and object, then returns value at this path. If value at path doesn't exists, return undefined.
// example inputs ['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } }
// example output '23'

const getValue = (arr, obj) => {
    arr.forEach((item, index) => {
        obj = obj[arr[index]];
    });

    return obj;
};

console.log(
    "10.(1)",
    getValue(["a", "b", "c", "d"], { a: { b: { c: { d: "23" } } } })
);

console.log(
    "10.(2)",
    getValue(["a", "b", "c", "d", "e"], { a: { b: { c: { d: "23" } } } })
);

// 11. Please write compare function which compares 2 objects for equality.
// example input { a: 'b', c: 'd' }, { c: 'd', a: 'b' }  /// output true
// example input { a: 'c', c: 'a' }, { c: 'd', a: 'b', q: 's' }  /// output false

const compareObjects = (obj1, obj2) => {
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);

    if (obj1Keys.length !== obj2Keys.length) {
        return false;
    }

    for (let objKey of obj1Keys) {
        if (obj1[objKey] !== obj2[objKey]) {
            return false;
        }
    }

    return true;
};

console.log("11.(1)", compareObjects({ a: "b", c: "d" }, { c: "d", a: "b" }));
console.log(
    "11.(2)",
    compareObjects({ a: "c", c: "a" }, { c: "d", a: "b", q: "s" })
);

// 12. Please write a function which takes a list of keys and an object, then returns this object, just without keys from the list
// example input ['color', 'size'], { color: 'Blue', id: '22', size: 'xl' }
// example output { id: '22' }

const deleteKeys = (arr, obj) => {
    arr.forEach((item) => {
        delete obj[item];
    });

    return obj;
};

console.log(
    "12.",
    deleteKeys(["color", "size"], { color: "Blue", id: "22", size: "xl" })
);
