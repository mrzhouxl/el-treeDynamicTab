# 快速使用
一款基于element ui 为基础编写的一个tree联动的组件，联动什么可以根据自己的需要进行选择
## NPM
使用npm进行安装（npm提供最新的版本）

`
npm install el-tree-dynamic --save
`

在mian.js里面进行引用和配置

```
import 'el-tree-dynamic'
import 'el-tree-dynamic/el-tree-dynamic.css'
```

在.vue页面种使用

`
<tree-dynamic></tree-dynamic>
`
来使用组件

treeData可参照element ui tree
  ```
  let data=[
        {
          id: 1,
          label: "你好",
          children: [
            {
              id: 3,
              label: "世界",
            },
            {
              id: 2,
              label: "HELLO",
              children: [
                {
                  id: 6,
                  label: "WORLD",
                },
              ],
            },
          ],
        },
      ],
  ```

## Attributes
参数|说明|类型|默认值|
---|:--:|:--:|:--:|
treeData|组件tree数据参数|array|[]|
isAddAndDel|是否显示tree添加和删除按钮|Boolean|false|
isDisplaySearch|是否显示tree搜索功能|Boolean|false|
title|展示tree上面标题名称|String|''|
dirIcon|展示文件夹图片|String|''|
addIcon|展示添加按钮图片|String|''|
removeIcon|展示删除按钮图片|String|''|
iconClass|自定义树节点的图标|String|''|
isboyNodeAdd|只在最小级别的节点上展示添加和删除按钮|Boolean|false|
dynamicOnoff|鼠标移动到tree上面才显示添加删除，必须要包装isAddAndDel是开启的|Boolean|false|

## Events
参数|说明|参数|
---|:--:|:--:|
nodeClick|单击节点触发的方法|(data)返回当前点击的节点|
append|单击新增触发的方法|(data, parentNode) 接收两个参数，1. 要追加的子节点的 data 2. 子节点的 parent 的 data、key 或者 node|
remove|单击删除触发的方法|(data) 要删除的节点的 data 或者 node|
search|单击搜索触发的方法|(search)返回文本框搜索的内容|

## 更新记录
1.最近更新2020-12-24 
内容iconClass isboyNodeAdd dynamicOnoff 配置选项
2.最近更新2020-12-24 
内容，修改包内容降低大小


## 文档地址
[el-tree-dynamic](https://mrzhouxl.github.io/)