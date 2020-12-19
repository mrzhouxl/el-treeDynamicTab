<template>
  <div class="content">
    <div class="custom-tree-container treeSty">
      <div class="block">
        <div class="top" v-if="title!=''">
          <h3>{{title}}</h3>
        </div>
        <div class="treeSerach" v-if="isDisplaySearch">
          <el-input
            v-model="searchInput"
            size="mini"
            class="searchInput"
            placeholder="请输入内容"
          ></el-input>
          <el-button size="mini" type="primary" @click="search">搜索</el-button>
        </div>

        <el-tree
          :data="treeData"
          node-key="id"
          default-expand-all
          :expand-on-click-node="false"
          :show-checkbox="false"
          @node-click='nodeClick'
        >
          <span class="custom-tree-node" slot-scope="{ node, data }">
            <span class="font">
              <img
                style="margin-right: 5px"
                src="../../public/img/tree/dir.png"
                width="16"
                height="16"
              />
              {{ node.label }}
            </span>
            <span v-if="isAddAndDel">
              <el-button type="text" size="mini" @click.stop="() => append(data)">
                <img
                  src="../../public/img/tree/add.png"
                  width="16"
                  height="16"
                />
              </el-button>
              <el-button
                type="text"
                size="mini"
                @click.stop="() => remove(node, data)"
              >
                <img
                  src="../../public/img/tree/delete.png"
                  width="16"
                  height="16"
                />
              </el-button>
            </span>
          </span>
        </el-tree>
      </div>
    </div>
    <div class="treeSlot">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    treeData: {
      type: Array,
      default() {
        return [];
      },
    },
    isAddAndDel: {
      type: Boolean,
      default: true,
    },
    isDisplaySearch: {
      type: Boolean,
      default: true,
    },
    title: String,
  },
  name: "ztreeTable",
  data() {
    return {
      searchInput: "",
    };
  },

  methods: {
    append(data) {
      this.$emit("append", data);
    },
    remove(node, data) {
      this.$emit("remove", node, data);
    },
    search() {
      this.$emit("search", this.searchInput);
    },
    nodeClick(data){
      this.$emit('nodeClick',data)
    }
  },
};
</script>
<style scoped lang="scss">
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
.font {
  font-size: 14px;
}

.block {
  height: 100%;
  .top {
    max-height: 49px;
    padding-left: 16px;
    h3 {
      font-size: 16px;
      color: #333;
      font-weight: bold;
      margin: 0;
      line-height: 49px;
    }
  }
  .treeSerach {
    display: flex;
    width: 100%;
    .searchInput {
      margin-right: 5px;
      input {
        width: 80% !important;
      }
    }
  }
}
.content {
  display: flex;

  .treeSlot {
    width: 100% !important;
    padding: 0 10px;
  }
  .treeSty {
    width: 280px !important;
    border: 1px solid #eee;
  }
}
</style>