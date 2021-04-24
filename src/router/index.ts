import { createRouter, createWebHashHistory, RouteRecordRaw, Router } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home },
  { path: '/about', component: About },
];

const router: Router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});

export default router;
