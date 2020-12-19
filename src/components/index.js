import Vue from 'vue';
import treeDynamic from './tree-dynamic.vue';

const Components = {
    treeDynamic
};

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});

export default Components;