<template>
  <div>
    <div class="left d-inline-flex d-lg-block float-end pe-lg-4 me-4 me-lg-0">
      <div
        class="d-none d-lg-block rounded-circle bg-secondary avatar text-center me-4"
      >
        <img class="h-100" src="../assets/img/avatar.png" alt="" />
      </div>
      <div class="mt-lg-5 mb-5 mb-lg-0">
        <ul class="me-lg-4">
          <li class="hvr-backward hvr-underline-from-right">
            <router-link to="/">home</router-link>
          </li>
          <li id="about" class="hvr-backward hvr-underline-from-right">
            <router-link on:click="setActive('about')" to="/about"
              >about</router-link
            >
          </li>
          <li id="work" class="hvr-backward hvr-underline-from-right">
            <router-link on:click="setActive('about')" to="/work"
              >work</router-link
            >
          </li>
          <li id="contacts" class="hvr-backward hvr-underline-from-right">
            <router-link on:click="setActive('about')" to="/contacts"
              >contacts</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bar",
  data: () => {
    return {
      active:
        window.location.href.split("/")[
          window.location.href.split("/").length - 1
        ],
    };
  },
  mounted() {
    document.getElementById(this.active).classList.add("active");
  },
};
</script>

<style lang="scss" scoped>
ul {
  border-left: none;
}

li {
  font-weight: 400;
  font-size: 32px;
}

.left {
  border-right: 1px solid gray;
  text-align: right;
}

.avatar {
  width: 100%;
}

.active {
  font-weight: 800;
  font-size: 46px;
}

@media only screen and (max-width: 992px) {
  .left {
    border-right: 0px;
    text-align: right;
  }
}
</style>
