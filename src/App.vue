<template>
  <div class="container">
    <the-nav></the-nav>

    <app-main-card>
      <router-view></router-view>
    </app-main-card>
  </div>
</template>

<script>
import AppMainCard from './components/AppMainCard.vue';
import TheNav from './components/TheNav.vue';
export default {
  components: {
    AppMainCard,
    TheNav,
  },
};
</script>

<style lang="scss"></style>
