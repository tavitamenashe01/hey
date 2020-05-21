<template>
  <div>
    <header class="header">
      <a href="/">
        <img src="../assets/img/icons/logo-icon.svg" />
      </a>
      <Burger />
    </header>

    <Sidebar>
      <ul class="sidebar-panel-nav">
        <li>
          <a href="/">
            <img src="../assets/img/icons/logo-icon.svg" />
          </a>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/contacts">About</a>
        </li>
        <li>
          <a href="/contacts">Contact</a>
        </li>
      </ul>
    </Sidebar>
  </div>
</template>

<script>
import Burger from "../components/BurgerMenu/Burger";
import Sidebar from "../components/BurgerMenu/SideBar";

export default {
  components: {
    Burger,
    Sidebar
  }
};
</script>

<style lang="scss" scoped>
@import "src/assets/styles/main.scss";

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 83px;
  @include breakpoint(mobileonly) {
    padding: 16px;
  }
}

ul.sidebar-panel-nav {
  list-style-type: none;
}

ul.sidebar-panel-nav > li > a {
  color: $white;
  font-size: 1.5rem;
  display: block;
  padding-bottom: 0.5em;
}
</style>