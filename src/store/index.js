import { createStore } from 'vuex';
import exchange from './modules/exchange';
import currencies from './modules/currencies';
import convert from './modules/convert';

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    exchange,
    currencies,
    convert,
  },
});
