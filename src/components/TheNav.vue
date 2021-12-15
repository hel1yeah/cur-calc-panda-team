<template>
  <div class="nav">
    <ul class="nav__list">
      <li class="nav__list--item">
        <router-link class="nav__list--item-link" to=""
          >Current exchange rates
        </router-link>
      </li>
      <li class="nav__list--item">
        <router-link class="nav__list--item-link" to="">
          Calculator
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.nav {
  background: var(--white-color);
  box-shadow: 0px 4px 40px var(--blue-clor);
  border-radius: 30px;
  width: 100%;
  padding: 15px 10px;
}
.nav__list {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0px;
}
.nav__list--item {
  list-style: none;
  padding: 5px 5px;
  transition: 1s all;
  &:first-child {
    padding-right: 20px;
  }
}
.nav__list--item-link {
  transition: 1s all;
  &:hover {
    color: var(--pink-color);
  }
}
</style>
