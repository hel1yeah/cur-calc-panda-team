<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AppMainCard',
};
</script>

<style lang="scss">
.card {
  background: var(--white-color);
  box-shadow: 0px 4px 40px var(--blue-clor);
  border-radius: 30px;
  width: 100%;
  padding: 30px 25px;
  margin: 30px 0 0;
  position: relative;
}
</style>
