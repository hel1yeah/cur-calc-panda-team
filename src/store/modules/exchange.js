import { getExchange } from './../../axios/exchange';

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
    getExchangeRate({ commit }, currency) {
      return new Promise(() => {
        commit('exchangeRateStart');

        getExchange(currency)
          .then(({ data }) => {
            const newResults = Object.keys(data.results).map((item) => ({
              name: item,
              currency: data.results[item],
            }));
            console.log(newResults);

            commit('exchangeRateSuccess', newResults);
          })
          .catch((err) => {
            commit('exchangeRateFailure', err);
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
