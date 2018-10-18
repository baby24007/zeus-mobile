# zeus-mobile

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```



### 安装mint-ui
```
npm install mint-ui -S
// 引入全部组件
import Vue from 'vue';
import Mint from 'mint-ui';
Vue.use(Mint);

// 按需引入部分组件
import { Cell, Checklist } from 'minu-ui';
Vue.component(Cell.name, Cell);
Vue.component(Checklist.name, Checklist);
```

### 安装mui
```
github下载代码,将dist目录移动为static/mui,直接引用
```
### vue-cli脚手架访问流程
```
index.html --> main.js --> App.vue --> router.js --> views(Home/Grid/About.vue ......) --> components(Gridview.vue ......)
```