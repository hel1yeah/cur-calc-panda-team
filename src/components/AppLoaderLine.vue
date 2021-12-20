<template>
  <div class="loader">
    <div class="loader__element"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.loader {
  box-shadow: 0px 4px 40px var(--blue-clor);
  background-color: var(--white-color);
  // overflow: hidden;
  // position: fixed;
  width: 200px;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  z-index: 100000;
}

.loader__element {
  height: 4px;
  width: 100%;
  background: var(--purple-clor);
}

.loader__element:before {
  content: '';
  display: block;
  background-color: var(--pink-color);
  height: 4px;
  width: 0;
  animation: getWidth 1s ease-in infinite;
}

@keyframes getWidth {
  100% {
    width: 100%;
  }
}
</style>
