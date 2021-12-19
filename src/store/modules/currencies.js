// import { getExchange } from './../../axios/exchange';

// export default {
//   namespaced: true,
//   state() {
//     return {
//       exchangeRate: null,
//       error: null,
//       loading: false,
//     };
//   },
//   mutations: {
//     exchangeRateStart(state) {
//       state.exchangeRate = null;
//       state.error = null;
//       state.loading = true;
//     },
//     exchangeRateSuccess(state, payload) {
//       state.exchangeRate = payload;
//       state.error = null;
//       state.loading = false;
//     },
//     exchangeRateFailure(state, payload) {
//       state.exchangeRate = null;
//       state.error = payload;
//       state.loading = false;
//     },
//   },
//   actions: {
//     getExchangeRate({ commit }) {
//       return new Promise(() => {
//         commit('exchangeRateStart');

//         getExchange()
//           .then((response) => {
//             console.log(response);
//             commit('exchangeRateSuccess', response);
//           })
//           .catch((err) => {
//             commit('exchangeRateFailure', err);
//           });
//       });
//     },
//   },
//   getters: {
//     getExchangeRateStore(store) {
//       store.exchangeRate;
//     },
//   },
// };
