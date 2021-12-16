import { createRouter, createWebHistory } from 'vue-router';
import pageExchange from './../views/pageExchange.vue';
import pageCalc from './../views/pageCalc.vue';

const routes = [
  {
    path: '/exchange',
    name: 'exchange',
    component: pageExchange,
  },
  {
    path: '/calc',
    name: 'calc',
    component: pageCalc,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
