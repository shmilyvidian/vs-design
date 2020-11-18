## vs-ui

### npm 安装
```
npm i vs-ui
```

### 使用说明

你可以引入整个vs-ui，也可进行按需加载组件
1. 完整引入
在 main.js 中写入以下内容：

```js
import Vue from 'vue';
import VSUI from 'vs-ui ';
import 'vs-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(VSUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```
2. 按需引入
借助 `babel-plugin-component`，我们可以只引入需要的组件，以达到减小项目体积的目的。

&nbsp;&nbsp;&nbsp;&nbsp;然后，将 .babelrc 修改为：

```json
{
  "plugins": [
    [
      "component",
      {
        "libraryName": "vs-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```
在 main.js 中写入以下内容：

```js
import Vue from 'vue';
import { InfiniteButton } from 'vs-ui';
import App from './App.vue';

Vue.use(InfiniteButton);

new Vue({
  el: '#app',
  render: h => h(App)
});
```




