import { createStore } from 'vuex';
import exchange from './modules/exchange';
import currencies from './modules/currencies';

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    exchange,
    currencies,
  },
});
