import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import Home from '../views/Home.vue';
import userRoutes from './module/user';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  ...userRoutes,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// eslint-disable-next-line no-shadow
router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    // 判断是否需要登录
    if (store.state.userModule.token) {
      // 判断token 的有效性 例如有没有过期 需要后台发放token的时候 带上token有限期
      // 如果token无效 需要请求token
      next();
    } else {
      // 跳转登录
      router.push({ name: 'login' });
    }
  } else {
    next();
  }
});

export default router;
