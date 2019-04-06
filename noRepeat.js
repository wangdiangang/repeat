// 数组里面有空数组，同样的数组值，同样的对象值以及undefined都可以去重；目前没有处理正则以及其他类型

let arr = [1, 1, "a", "a", [], [], [1], [1], [2, [2]], [2, [2]], {a: 1}, {a: 1}, undefined, undefined];

function repeat(arr) {
    let newArr = [];
    let newCur = [];
    for (let i = 0; i < arr.length; i++) {//先循环
        let cur = arr[i];
        if (cur instanceof Array || cur instanceof Object) {//数组或者对象
            let curJson = JSON.stringify(cur)//转json字符串
            newCur.indexOf(curJson) === -1 ? newCur.push(curJson) : newArr.push(cur)//newCur没有的话放进去，有的话放进newArr
        } else {//不是数组或者对象
            newArr.indexOf(cur) === -1 ? newArr.push(cur) : null//正常去重方式
        }
    }
    newCur = null;
    return newArr
}

console.log(repeat(arr));





//检测数据类型
function test(type) {
    type = Object.prototype.toString.call(type)//type重新赋值
    type = type.slice(8, -1)//type再重新赋值  把[Object type]截取索引8到length-1
    return type  //给丫的丢出去
}


let str="123";
let ary=[1,2,3];
let num=123;
let nul=null;
let obj={a:123};
console.log(test(obj));
console.log(test(num));
console.log(test(str));
