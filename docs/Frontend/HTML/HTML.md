---
title: HTML
date: 2020-02-16
sidebar: 'auto'
categories:
 - 前端基础
tags:
 - 前端基础
 - HTML
 - HTML5
publish: true
---
## html标签的快速构建

在我们的快捷键快速生成代码标签时，都是遵循以下原理进行生成的：

- `div[class=className]{第$个盒子}*5` / `div.className{第$个盒子}*5`

这里的`.`是表示生成的是：`<div class="className">第N个盒子</div>`。

- `div[id=idname]{第$个盒子}*5` / `div#idname{第$个盒子}*5`

这里的`#`示生成的是：`<div id="标签的id名字"></div>`。

- `>:下一个标签`

表示：`ul`标签 里面包含下一级 `li` 标签

- `*：多少个标签`

即：要生成多少个一样的标签，后面加数字

- `$：标签的名称序号`

即：生成的标签要不要自动生成带序号的

- `{}：标签的内容`

即：标签要不要带内容的快速生成

- `ul>li>a`

如果要写下面的标签，直接写上面的代码，然后按`Tap`键或`Enter`，可以快速构建.

```html
<ul>
    <li><a href=""></a></li>
</ul>
```

- `ul>(li>a)*3`

```html
 <ul>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
</ul>
```

- `ul>(li>a[href=#])*3`
还可以给标签添加属性

```html
<ul>
    <li><a href="#"></a></li>
    <li><a href="#"></a></li>
    <li><a href="#"></a></li>
</ul>
```

- `ul>(li>a[click="#"])*3`
不同的属性

```html
<ul>
    <li><a href=""click="#"></a></li>
    <li><a href=""click="#"></a></li>
    <li><a href=""click="#"></a></li>
</ul>
```

## 常用方法

1. 父子关系：`>`，使用`>`操作符在内部相互嵌套的标签：

```html
<!-- div>ul>li -->
<div>
    <ul>
        <li></li>
    </ul>
</div>
```

2. 兄弟关系：`+`，使用`+`操作符将标签处于同一个层级：

```html
<!-- div+p+footer -->
<div></div>
<p></p>
<footer></footer>
```

3. 生成兄弟关系时，像`ul` `dl`这样的列表标签，使用`+`操作符将生成一个标准的列表结构(vscode无效):

```html
<!-- ul+ -->
<ul>
    <li></li>
</ul>

<!-- dl+ -->
<dl>
    <dt></dt>
    <dd></dd>
</dl>
```

4. 上级关系：`^`，使用 `^` 操作符使标签与前一标签的父级处于相同的级别：

```html
<!-- div+div>p>span+em^bq -->
<div></div>
<div>
    <p><span></span><em></em></p>
    <blockquote></blockquote>
</div>

<!-- 使用两^操作符就与前一标签的爷爷级是相同级别，依此类推： -->

<!-- div+div>p>span+em^^bq -->
<div></div>
<div>
    <p><span></span><em></em></p>
</div>
<blockquote></blockquote>
```

5. 乘法：`*`，使用`*`操作符可以输出多个标签：

```html
<!-- div>ul>li*5 -->
<div>
    <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</div>
```

6. 分组：`()`，用`()`操作符进行分组，使编写的代码结构更加清晰、明了，一组标签就相当一个元素：

```html
<!-- div>(header>ul>li*2>a)+footer>p -->
<div>
    <header>
        <ul>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
        </ul>
    </header>
    <footer>
        <p></p>
    </footer>
</div>
```

可以使用多个`()`，并使用乘法`*`操作符：

```html
<!-- (div>dl>(dt+dd)*3)+footer>p -->
<div>
    <dl>
        <dt></dt>
        <dd></dd>
        <dt></dt>
        <dd></dd>
        <dt></dt>
        <dd></dd>
    </dl>
</div>
<footer>
    <p></p>
</footer>
```

7. `CSS`选择器，给标签指定`id`和`class`选择器，只需在标签的后面直接添加，但必需以`.`或`#`开头

```html
<!-- div#header+div.page+div#footer.class1.class2.class3 -->
<div id="header"></div>
<div class="page"></div>
<div id="footer" class="class1 class2 class3"></div>
```

8. 自定义属性：`[]`（英文下的中括号），使用`[]`操作符给标签添加自定义属性：

```html
<!-- td[title="Hello world!" colspan=3] -->
<td title="Hello world!" colspan="3"></td>
```

可以把你喜欢的一些属性放在`[]`内，如果不指定属性值，代码将生成不带属性值的`HTML`默认标签：

属性值必需使用单引号或双引号，不然就会出现你可能想到的效果。

```html
<!-- 错误示范，实际是想要一个 colspan="title" 的属性 -->
<!-- td[colspan title] -->
 <td colspan="" title=""></td>
```

9. 项目编号：使用`∗`可以生成重复的标签，可以使标签生成有序列表，输出的值为数字：

```html
<!-- ul>li.item$*5 -->
<ul>
    <li class="item1"></li>
    <li class="item2"></li>
    <li class="item3"></li>
    <li class="item4"></li>
    <li class="item5"></li>
</ul>
```

10. 除了生成无序列表，其它的标签也是一样：

```html
<!-- h[title=item]{Header $}*3 -->
<h1 title="item1">Header 1</h1>
<h2 title="item2">Header 2</h2>
<h3 title="item3">Header 3</h3>
```

也可以使用多个$操作符用`0`（零）来分填充数字：

```html
<!-- ul>li.item$$$*5 -->
<ul>
    <li class="item001"></li>
    <li class="item002"></li>
    <li class="item003"></li>
    <li class="item004"></li>
    <li class="item005"></li>
</ul>
```

11. 更改列表的起始数字与顺序。
看下面的代码就一目了然：数字的倒序，只需在前添加`@-*`(倒序在`vscode`中无效)

```html
<!-- ul>li.item$@-*5 -->
<ul>
    <li class="item5"></li>
    <li class="item4"></li>
    <li class="item3"></li>
    <li class="item2"></li>
    <li class="item1"></li>
</ul>
```

起始数字，在前添加@起始数字：`*`

```html
<!-- ul>li.item$@3*5 -->
<ul>
    <li class="item3"></li>
    <li class="item4"></li>
    <li class="item5"></li>
    <li class="item6"></li>
    <li class="item7"></li>
</ul>
```

从起始数字为`3`的列表倒序，只需把上面的Emmet代码`item`后面的数字写成`@-3*5`。

12. 文本：`{}`，使用花括号来添加文本元素：

```html
<!-- a{Click me} -->
<a href="">Click me</a>
```

注意：当`{}`作为单独的一个操作符使用时，`a{click}`和`a>{click}`将生成相同的标签，但当使用了多个，或用了其它操作符时将会生成不同的标签

## 其他

```html
<!-- link:css 加tab键-->
 <link rel="stylesheet" href="style.css">
```

```html
<!-- script:src  -->
 <script src=""></script>
```

```html
<!--input:button -->
<input type="button" value="">
```

```html
<!--form:get-->
<form action="" method="get"></form>
<!--form:post-->
<form action="" method="post"></form>
```
