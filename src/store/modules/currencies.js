import { getCurrency } from './../../axios/currencies';

export default {
  namespaced: true,
  state() {
    return {
      currencyList: null,
      baseCurrency: 'UAH',
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
    setBaseCurrency(state, payload) {
      state.baseCurrency = payload;
    },
  },
  actions: {
    getCurrencyList({ commit }) {
      return new Promise(() => {
        commit('getCurrencyListStart');
        getCurrency()
          .then(({ data }) => {
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
