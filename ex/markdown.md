```markdown
这是 H1 一级标题
------
这是 H2 二级标题
======
# 这是 H1 一级标题
## 这是 H2 二级标题
### 这是 H3 三级标题
#### 这是 H4 四级标题
##### 这是 H5 五级标题
###### 这是 H6 六级标题
```
---
tags :哈哈,多得多,健健康康
---




**快捷键**: [ctrl + h]
## 列表
### 无序列表
```markdown
* 项目1
  * 子项目1.1
  * 子项目1.2
    * 子项目1.2.1
* 项目2
* 项目3

+ 项目1
  + 子项目1.1
  + 子项目1.2
    + 子项目1.2.1
+ 项目2
+ 项目3

- 项目1
  - 子项目1.1
  - 子项目1.2
    - 子项目1.2.1
- 项目2
- 项目3
```
**快捷键**: [ctrl + u]
### 有序列表
```markdown
1. 项目1
2. 项目2
3. 项目3
    1. 项目3.1
    2. 项目3.2

1. 项目1
1. 项目2
1. 项目3
    1. 项目3.1
    1. 项目3.2
```
### 有序列表起始编号
```markdown
58. 项目5
2. 项目6
```
**快捷键**: [ctrl + o]
## 链接
```markdown
[链接名称](链接地址)
[链接名称][1]
[1] : 链接地址
```
## 图片
```markdown
![名称](链接地址)
![名称][1]
[1] : 链接地址
```
## 文字格式
```markdown
**这是文字粗体格式**

__这是文字粗体格式__

*这是文字斜体格式*

_这是文字斜体格式_
```
## 引用
```markdown
> 第一行引用文字
> 第二行引用文字
```
## 水平线
```markdown
***
```
# GFM扩展语法
## 表格
```markdown
First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell
```
## 增强型表格
```markdown
|First Header  | Second Header ||
|First Header  | Second Header | Third Header|
|------------- | -------------|-------------|
表身1Content Cell  | Merge Content Cell||
Content Cell  | Content Cell| Content Cell|

表身2Content Cell  | Merge Content Cell||
Content Cell  | Content Cell| Content Cell|
[表格标题]
```

## 代码
### 行内代码
```markdown
`var x = "hello world"`
```
### 块代码
````markdown
```javascript
var a = "hello world";
var b = "good luck";
```
````
## 自动转换成超链接
系统将自动根据内容，将地址转换成超链接格式
```markdown
http://markdown.xiaoshujiang.com
```
## HTML
```markdown
<div class="hey">Hello world</div>
```
[支持的html标签](https://github.com/github/markup/tree/master#html-sanitization)
## 删除线
```markdown
~~在文字上添加删除线~~
```
# 扩展语法
## 目录
```markdown
[toc]
```
## 扩展的文字格式
```markdown
++插入的文字++

==被记号的文字==

上角文字: 19^th^

下角文字: H~2~O
```
## 印刷字替换
系统将自动替换下列文字，转换成排版系统使用的符号
```markdown
(c) (C) (r) (R) (tm) (TM) (p) (P) +-
```
## 缩写定义
```markdown
The HTML specification
is maintained by the W3C.
*[HTML]: Hyper Text Markup Language
*[W3C]:  World Wide Web Consortium
```
## 待办事项
```markdown
[ ] 未完成事项
[-] 未完成事项
[x] 完成事项
[X] 完成事项
```
## 脚注
```markdown
脚注[^1x]
[^1x]: 脚注的用法
```
## 定义
```markdown
苹果
: 一种水果
: 一种品牌，计算机，手持设备
桔子
: 一种水果
```
## 公式

### 行内公式
```markdown
这是行内公式`!$ \Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt\,. $`
```
### 块公式
````markdown
```mathjax!
$$\Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt\,.$$
```
````
### 流程图 ([语法](http://adrai.github.io/flowchart.js/))
````markdown
```flow
st=>start: 开始
e=>end: 结束
op=>operation: 操作步骤
cond=>condition: 是 或者 否?

st->op->cond
cond(yes)->e
cond(no)->op
```
````

### 序列图 ([语法](https://github.com/bramp/js-sequence-diagrams/blob/master/src/grammar.jison))
````markdown
```sequence
小明->小李: 你好 小李, 最近怎么样?
Note right of 小李: 小李想了想
小李-->小明: 还是老样子
```
````
# 小书匠编辑器扩展语法

## 块代码内文字格式
### 块代码高亮标记
````markdown
```javascript
var >>==hello==<< = 'hello world'
```
````
### 块代码删除线
````markdown
```javascript
var >>~~hello~~<< = 'hello world'
```
````
### 块代码加粗
````markdown
```javascript
var >>**hello**<< = 'hello world'
```
````
### 块代码下横线
````markdown
```javascript
var >>++hello++<< = 'hello world'
```
````



小书匠编辑器提供了附件管理功能，用户可通过`./`对附件的引用，比如图片`./jiangzhu.jpg`。附件的上传需通过工具栏的插入图片`ctrl+g`，插入视频`ctrl+shift+v`，插入音频`ctrl+shift+a`，插入附件`ctrl+shift+t`功能键进行操作。
## 视频
```markdown
%[名称](链接地址)
%[名称][1]
[1] : 链接地址
```
## 音频
```markdown
~[名称](链接地址)
~[名称][1]
[1] : 链接地址
```
## 附件
```markdown
=[名称](链接地址)
=[名称][1]
[1] : 链接地址
```
## 元数据
元数据必须放置在每篇文章的开头才能生效。如果文章里有元数据时，系统将自动以元数据的标题为准，用户通过文章信息的维护界面修改的标题及tags将会被覆盖掉。
```markdown
---
title: 小书匠语法使用手册
tags: 小书匠,语法,MARKDOWN,帮助
--- 
```
## mermaid流程图，序列图，甘特图（[mermaid语法](http://knsv.github.io/mermaid/index.html)）

````markdown
```mermaid!
graph TD;
A-->B;
A-->C;
B-->D;
C-->D;
```
````

## 统计图 （[统计图语法](https://github.com/flot/flot/blob/master/API.md)）
数据格式为：`{"data": [], "options":{}}`
系统使用[jquery.parseJSON()](http://api.jquery.com/jquery.parsejson/)函数进行解析，因此代码必须符合该函数的要求才能正常解析。
````markdown
```plot!
{
"data": [ [[0, 0], [1, 1]] ],
"options": { "yaxis": { "max": 1 } }
}
```
````

## 自定义class
```` markdown
## 自定义class {class名称}
````
通过自定义的class名称后，你就可以在每篇文章的自定义css里添加自己想要的样式了．

## cjk强调
``` markdown
_这里将显示带有衬线字体效果的中文做为强调_
```

## cjk注音标示
``` markdown
{需要被注音标示的内容}(注音标示)
{需要被注音标示的内容}[编号]
[编号]: 注音标示
```

## 居中显示文字
```markdown
->居中显示的文字<-
```

## 对齐显示文字

```markdown
:>居左显示的文字<-
->居右显示的文字<:
:>两端对齐显示的文字<:
->居中显示的文字<-
```
注： 该语法与center语法冲突，两种语法同时开启时，align语法将覆盖center语法。

----------

# 示例

[toc]

![箭竹](./jianzhu.jpg)

http://www.github.com/suziwen/markdownxiaoshujiang
http://www.xiaoshujiang.com

# 这是 H1 一s级标题
## 这是 H2 二级标题
### 这是 H3 三级标题
#### 这是 H4 四级标题
##### 这是 H5 五级标题
###### 这是 H6 六级标题

### 视频
%[电影](http://markdown.xiaoshujiang.com/media/movie.ogg)

### 音频
~[音乐](http://markdown.xiaoshujiang.com/media/horse.ogg)

### 附件
=[附件](./jianzhu.jpg)

### 待办事项
[ ] 未完成事项
[-] 未完成事项
[x] 完成事项
[X] 完成事项

### 缩写定义

The HTML specification
is maintained by the W3C.

*[HTML]: Hyper Text Markup Language
*[W3C]:  World Wide Web Consortium
