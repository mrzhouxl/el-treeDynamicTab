import Vue from 'vue'
import App from './App.vue'
import { Tree, Input, Table, Button, TableColumn } from 'element-ui';

Vue.use(Tree);
Vue.use(Input);
Vue.use(Table);
Vue.use(Button);
Vue.use(TableColumn)
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')