// 数组里面有空数组，同样的数组值，同样的对象值以及undefined都可以去重；目前没有处理正则以及其他类型

let arr = [1, 1, "a", "a", [], [], [1], [1], [2, [2]], [2, [2]], {a: 1}, {a: 1}, undefined, undefined];

function repeat(arr) {
    let newArr = [];
        let newCur = [];
    for (let i = 0; i < arr.length; i++) {
        let cur = arr[i];
        if (cur instanceof Array || cur instanceof Object) {
            let curJson = JSON.stringify(cur)
            newCur.indexOf(curJson) === -1 ? newCur.push(curJson) : newArr.push(cur)
        } else {
            newArr.indexOf(cur) === -1 ? newArr.push(cur) : null
        }
    }
    newCur = null;
    return newArr
}

console.log(repeat(arr));


