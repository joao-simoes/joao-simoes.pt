<template>
  <div class="container">
    <div class="row">
      <div class="col-4">
        <div class="left float-end pe-4">
          <div class="rounded-circle bg-secondary avatar text-center me-4">
            <img class="h-100" src="../../assets/img/avatar.png" alt="" />
          </div>
          <div class="mt-5">
            <ul class="me-4">
              <li class="hvr-backward hvr-underline-from-right active">
                <router-link to="/">home</router-link>
              </li>
              <li class="hvr-backward hvr-underline-from-right active">
                <router-link to="/about">about</router-link>
              </li>
              <li class="hvr-backward hvr-underline-from-right active">
                <router-link to="/work">work</router-link>
              </li>
              <li class="hvr-backward hvr-underline-from-right active">
                <router-link to="/contacts">contacts</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-8 ps-5 pt-4">
        <Work
          title="inChromaStudio"
          year="2021"
          desc="Full-Stack Project"
          url="www.inchromastudio.pt"
        />

        <Work class="mt-5 pt-5"
          title="A Saboeira - Turismo Rural"
          year="2022"
          desc="Full-Stack Project - UNDER DEVELOPMENT"
          url="www.asaboeira.pt"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Work from "./Work.vue";

export default {
  components: {
    Work,
  },
};
</script>

<style lang="scss" scoped>
ul {
  border-left: none;
}

li {
  font-weight: 400;
  font-size: 24px;
}

h3,
h4,
h6 {
  line-height: 1;
}

h2 {
  font-weight: 800;
}

h6 {
  font-weight: 400;
}

p {
  line-height: 2;
  font-weight: 100;
}

.hobbies p {
  line-height: 0.4;
}

.left {
  border-right: 1px solid gray;
  text-align: right;
}

.avatar {
  width: 100%;
}

.active {
  font-weight: 600;
  font-size: 36px;
}

.row {
  padding: 14% 0;
}
</style>