# vueDemo_Eleme_Ts
饿了么demo-TS版本

##### 一：具体步骤

##### 1.1-:step-1:初始化

~~~js
//初始化一个vite的项目
npm install  create-vite@latest XXXXX


~~~

##### 1.2-1:配置别名(vite.config.ts)

~~~js
//如果没有path组件，那你需要安装下path（npm i --save-dev @types/node）
import defualt from "path";

resolve:{
    alias:{
     "@":path.resolve(__dirname,'./src'),
       "@/components":path.resolve(__dirname,"./src/components")
    }
  }
~~~

##### 1.3-1:配置基础路由

~~~js
//router文件下的index.ts内容:
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: 'home',
    component: ()=>import ('../views/index.vue'), 
  }
]

const router = createRouter({
  history:createWebHistory(),
  routes
})

export default router;
~~~

##### 1.3-2:配置基础路由(挂载在 main.ts上全局使用)

~~~js
import router from "./router";

createApp(app).use(router).mount("#qpp");

~~~

##### 1.3-3:配置基础路由(再app.vue文件中写入router-view标签)

~~~html
<router-view></router-view>
~~~



##### 1.4-1:全局样式放入style.css 中 能全局用是因为在main.ts 中引用了样式

~~~js
import './style.css'
~~~

 ##### 1.5-1:实现组件

~~~js 
~~~







