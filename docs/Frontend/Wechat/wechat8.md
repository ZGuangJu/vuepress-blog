## 获取元素的属性和值

### 获取元素上自定义的属性和值

1. 使用`data-[name]`的方式在元素行自定义属性且赋值
2. 获取自定义属性值用：`event.crueentTarget.setData`

### 获取元素的值

- input：获取input的值：`bindinput=""`绑定事件，
event.detail.value获取值 直接获取值