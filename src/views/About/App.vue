<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-4">
        <Bar />
      </div>
      <div class="col-12 col-lg-8 ps-5 pt-4">
        <!-- INFO -->
        <section class="d-inline-flex">
          <div
            class="
              d-lg-none
              rounded-circle
              bg-secondary
              avatar
              text-center
              me-4
            "
          >
            <img class="h-100" src="../../assets/img/avatar.png" alt="" />
          </div>
          <div>
            <h2>João Simões</h2>
            <h2>21 yo</h2>
            <h2>Portugal</h2>
          </div>
        </section>
        <!-- INFO -->

        <!-- STUDIES -->
        <section>
          <h2 class="mt-5 pt-5">STUDIES</h2>
          <hr />
          <h3 class="mt-3">2019-2022</h3>
          <h4>Instituto Politécnico do Porto</h4>
          <h6>Escola Superior de Media Artes e Design</h6>
          <p>Degree in Technologies and Information Systems for the Web</p>
          <h3 class="mt-5 pt-2">2020-2021</h3>
          <h4>Cracow University of Technology</h4>
          <h6>Faculty of Computer Science and Telecommunication</h6>
          <p>One year of ERASMUS in Computer Science</p>
        </section>
        <!-- STUDIES -->

        <!-- HOBBIES -->
        <section class="hobbies">
          <h2 class="mt-5 pt-5">HOBBIES</h2>
          <hr />
          <div class="d-inline-flex pt-4">
            <i class="fas fa-drum me-2"></i>
            <h5 class="m-0">Music</h5>
          </div>
          <br />
          <div class="d-inline-flex pt-4">
            <i class="fas fa-camera-retro me-2"></i>
            <h5 class="m-0">Photography</h5>
          </div>
          <br />
          <div class="d-inline-flex pt-4">
            <i class="fas fa-paper-plane me-2"></i>
            <h5>Travel</h5>
          </div>
          <br />
          <div class="d-inline-flex pt-4">
            <i class="fas fa-beer me-2"></i>
            <h5>Homebrewing</h5>
          </div>
        </section>
        <!-- HOBBIES -->
      </div>
    </div>
  </div>
</template>

<script>
import Bar from "../../components/Bar.vue";

export default {
  components: {
    Bar,
  },
};
</script>

<style lang="scss" scoped>
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

.row {
  padding: 14% 0;
}

@media only screen and (max-width: 992px) {
  .avatar {
    width: 40%;
  }
}
</style>
