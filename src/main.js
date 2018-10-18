import Vue from 'vue';
import App from './App.vue';
import router from './router.js';
// 导入axios与后端通信
import axios from 'axios';
Vue.prototype.axios = axios;
// axios全局配置
axios.defaults.baseURL = 'http://localhost';

// 导入mint-ui组件并注册css文件
import { Checklist, Header, Button, Cell, Toast, Tabbar, TabItem, Swipe, SwipeItem, Navbar, TabContainer, TabContainerItem, Field} from 'mint-ui';
import 'mint-ui/lib/style.css'

// 实例化mint-ui组件
Vue.component(Button.name, Button);
Vue.component(Toast.name, Toast);
Vue.component(Header.name, Header);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Navbar.name, Navbar);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Cell.name, Cell);
Vue.component(Field.name, Field);
Vue.component(Checklist.name, Checklist);

// 注册mui的css样式---因为我把静态资源文件拷贝到本地了,直接引用即可,不需要实例化
import '../static/mui/css/mui.css';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
