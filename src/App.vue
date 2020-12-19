<template>
  <div id="app">
    <tree-dynamic
      :isAddAndDel="true"
      :isDisplaySearch="true"
      :treeData="data"
      @search="search"
      @nodeClick="nodeClick"
      @append="append"
      @remove="remove"
      title="测试"
    >
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table>
    </tree-dynamic>
  </div>
</template>

<script>
import treeDynamic from "./components/tree-dynamic.vue";

export default {
  name: "App",
  components: {
    treeDynamic,
  },
  data() {
    return {
      data: [
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
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  methods: {
    nodeClick(data) {
      console.log(data,'click');
    },
    append(node, data) {
      console.log(node);
    },
    remove(node, data) {
      console.log(node, data);
    },
    search(search) {
      console.log(search,'search');
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
