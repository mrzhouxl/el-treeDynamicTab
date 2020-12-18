import Vue from 'vue';
import ztreeTable from './ztreeTable.vue';
import './index.scss';

const Components = {
    ztreeTable
};

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});

export default Components;