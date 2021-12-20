import { getCurrency } from './../../axios/currencies';

export default {
  namespaced: true,
  state() {
    return {
      currencyList: null,
      baseCurrency: null,
      error: null,
      loading: false,
    };
  },
  mutations: {
    getCurrencyListStart(state) {
      state.currencyList = null;
      state.error = null;
      state.loading = true;
    },
    getCurrencyListSuccess(state, payload) {
      state.currencyList = payload;
      state.error = null;
      state.loading = false;
    },
    getCurrencyListFailure(state, payload) {
      state.currencyList = null;
      state.error = payload;
      state.loading = false;
    },
  },
  actions: {
    getBaseCurrency({ commit }) {
      return new Promise(() => {
        commit('getCurrencyListStart');
        getCurrency()
          .then(({ data }) => {
            // console.log(data.currencies);
            const newCurrencies = Object.keys(data.currencies).map((item) => ({
              countrie: item,
              currency: data.currencies[item],
            }));
            commit('getCurrencyListSuccess', newCurrencies);
          })
          .catch((err) => {
            commit('getCurrencyListFailure', err);
          });
      });
    },
  },
};
