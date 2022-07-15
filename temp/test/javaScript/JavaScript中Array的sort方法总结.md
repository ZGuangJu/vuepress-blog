## 使用方式

| 参数   | 描述                           | 返回值                                           |
| :----- | :----------------------------- | :----------------------------------------------- |
| sortby | 可选，规定排序顺序，必须是函数 | 对数组的引用，数组在原数组上进行排序，不生成副本 |

## 说明

- sort方法内如果不传参数, 则是比较数组内元素的[ASCII](https://baike.baidu.com/item/ASCII/309296?fr=aladdin)字符编码的值，即每次都会调用元素的toString()转换成字符串，按ASCII字符编码值进行比较
- 若想按照其他方式进行排序，则需要传入比较函数(sort内的参数)，比较函数需要返回值，***当函数返回值为1的时候就交换两个数组项的顺序，否则就不交换***

### 按照ASCII编码值进行比较

```
var arr = ['apple', 'banana', 'pear', 'apricot', 'grape', 'JJJ'];
arr.sort();

// arr =>  ["JJJ", "apple", "apricot", "banana", "grape", "pear"]

因为J的ASCII值比a的小，所以J排在apple的前面
```

### 升序排列

```
var arr = [10, 2, 9, 3, 24, 6];
arr.sort(function(a, b) {
 return a-b;
});
//arr => [2, 3, 6, 9, 10, 24]
```

升序排列可以另写成:

```
arr.sort(function(a, b) {
    if (a<b) {
        return -1; // a<b，-1表示不调换位置
    } else if (a>b) {
        return  1;// a>b, 1表示需要调换位置
    } else {
        return 0; // 不调换位置
    }
});
```

### 降序排列

```
var arr = [10, 2, 9, 3, 24, 6];
 arr.sort(function(a, b) {
  return b-a;
 });
//arr => [24, 10, 9, 6, 3, 2]
```

降序排列可以另写成:

```
arr.sort(function(a, b) {
 if (a<b) {
        return 1 //表示需要调换a、 b的位置
    } else if (a>b) {
        return -1 // 表示不需要调换a、 b位置
    } else {
        return 0 // 表示不需要调换a、 b位置
    }
});
```
