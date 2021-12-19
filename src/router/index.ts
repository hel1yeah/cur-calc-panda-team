import { createRouter, createWebHistory } from 'vue-router';
import pageExchange from './../views/pageExchange.vue';
import pageCalc from './../views/pageCalc.vue';
import { Component } from 'vue';

export interface IRoute {
  path: string;
  name: string;
  component: Component;
}

const routes: IRoute[] = [
  {
    path: '/',
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
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
});

export default router;
