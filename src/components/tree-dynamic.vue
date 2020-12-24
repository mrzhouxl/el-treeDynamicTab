<template>
  <div class="content">
    <div class="custom-tree-container treeSty">
      <div class="block">
        <div class="top" v-if="title != ''">
          <h3>{{ title }}</h3>
        </div>
        <div class="treeSerach" v-if="isDisplaySearch">
          <el-input
            id="input1"
            v-model="searchInput"
            size="mini"
            class="searchInput"
            placeholder="请输入内容"
          ></el-input>
          <el-button size="mini" type="primary" @click="search">搜索</el-button>
        </div>

        <el-tree
          :data="treeData"
          :iconClass='iconClass'
          node-key="id"
          default-expand-all
          :expand-on-click-node="false"
          :show-checkbox="false"
          @node-click="nodeClick"
        >
          <span class="custom-tree-node" :class="{dynamicOnoff}" slot-scope="{ node, data }">
            <span class="font">
              <img
                style="margin-right: 5px"
                :src="dirIcon"
                width="16"
                height="16"
              />
              {{ node.label }}
            </span>

            <span
             class="operationBtn"
              v-if="isAddAndDel"
              v-show="
                lastLevel.find((_) => {
                  if (!isboyNodeAdd) {
                    return 5;
                  } else {
                    return String(_.id) == String(node.data.id);
                  }
                })
              "
            >
              <el-button
                type="text"
                size="mini"
                @click.stop="() => append(data)"
              >
                <img :src="addIcon" width="16" height="16" />
              </el-button>
              <el-button
                type="text"
                size="mini"
                @click.stop="() => remove(node, data)"
              >
                <img :src="removeIcon" width="16" height="16" />
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
    iconClass:String,
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
    dirIcon: {
      type: String,
      default: require("../../public/img/tree/dir.png"),
    },
    addIcon: {
      type: String,
      default: require("../../public/img/tree/add.png"),
    },
    removeIcon: {
      type: String,
      default: require("../../public/img/tree/delete.png"),
    },
    isboyNodeAdd: {
      type: Boolean,
      default: false,
    },
    dynamicOnoff:{
      type:Boolean,
      default:false
    }
  },
  name: "ztreeTable",
  data() {
    return {
      searchInput: "",
      Level: [],
    };
  },
  computed: {
    lastLevel() {
      return this.getLastLevel(this.treeData);
    },
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
    nodeClick(data) {
      this.$emit("nodeClick", data);
    },
    getLastLevel(item) {
      if (item) {
        for (const item of item) {
          if (item.children && item.children.length != 0) {
            this.getLastLevel(item.children);
          } else {
            this.Level.push(item);
          }
        }
      }
      return this.Level;
    },
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
  min-width: 190px;
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
  .dynamicOnoff .operationBtn{
    display:none;
  }
  .dynamicOnoff:hover{
    .operationBtn{
      display: block;
    }
  }
  .treeSerach {
    display: flex;
    width: 100%;
    margin: 0 5px;
    .searchInput {
      margin-right: 5px;
      width: 65%;
    }
    button {
      width: 28%;
      text-align: center;
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