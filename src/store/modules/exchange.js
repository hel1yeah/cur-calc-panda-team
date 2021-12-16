import exchange from './../../axios/exchange';

export default {
  namespaced: true,
  state() {
    return {
      exchangeRate: null,
      error: null,
      loading: false,
    };
  },
  mutations: {
    exchangeRateStart(state) {
      state.exchangeRate = null;
      state.error = null;
      state.loading = true;
    },
    exchangeRateSuccess(state, payload) {
      state.exchangeRate = payload;
      state.error = null;
      state.loading = false;
    },
    exchangeRateFailure(state, payload) {
      state.exchangeRate = null;
      state.error = payload;
      state.loading = false;
    },
  },
  actions: {
    getExchangeRate({ commit }) {
      return new Promise(() => {
        commit('exchangeRateStart');
        exchange
          .getExchange()
          .then((response) => {
            commit('exchangeRateSuccess', response.data);
          })
          .catch(() => {
            commit('exchangeRateFailure');
          });
      });
    },
  },
  getters: {
    getExchangeRateStore(store) {
      store.exchangeRate;
    },
  },
};
