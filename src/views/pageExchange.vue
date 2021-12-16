<template>
  <div class="exchange">
    <h1 class="exchange__title">Курс гривні до інозмених валют</h1>
    <div class="exchange__card--wrapper">
      <div class="exchange__card">
        <h2 class="exchange__card--title">Долар США <span>USA</span></h2>
        <ul class="exchange__card--list">
          <li class="exchange__card--list-item">
            Курс продажу НБУ <span>3123</span>
          </li>
          <li class="exchange__card--list-item">
            Курс продажу ПриватБанку <span>3123</span>
          </li>
          <li class="exchange__card--list-item">
            Курс купівлі ПриватБанку

            <span>3123</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
export default {
  data() {
    return {};
  },
  methods: {
    getExchangeRate() {
      this.$store.dispatch('exchange/getExchangeRate');
    },
  },
  computed: {
    ...mapGetters(['getExchangeRateStore']),
    ...mapState({
      loading: (state) => state.exchange.loading,
      error: (state) => state.exchange.error,
    }),
  },
  mounted() {
    this.getExchangeRate();
  },
};
</script>

<style lang="scss" scoped>
.exchange {
}
.exchange__title {
}
.exchange__card {
  background: linear-gradient(90deg, #dae4f4 0%, #d3dcf1 100%);
  border-radius: 10px;
  margin: 40px 0 0;
  padding: 20px;
  max-width: 340px;
  box-shadow: 0px 0px 10px var(--blue-clor);
}
.exchange__card--title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.exchange__card--list {
  list-style-type: none;
  padding: 0;
  font-size: 18px;
}
.exchange__card--list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
