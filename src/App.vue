<template>
  <div id="app">
    <ztreeTable :treeData="data" @nodeClick='nodeClick' @append='append' title="科目分类">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table>
    </ztreeTable>
  </div>
</template>

<script>
import ztreeTable from "./components/ztreeTable.vue";

export default {
  name: "App",
  components: {
    ztreeTable,
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
  methods:{
    nodeClick(data){
      console.log(222)
    },
    append(node, data){
      console.log(11)
    }
  }
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
