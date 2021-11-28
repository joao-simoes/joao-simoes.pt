<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-4">
        <Bar />
      </div>
      <div class="col-12 col-lg-8 ps-5 pt-4">
        <Work
          title="inChromaStudio"
          year="2021"
          desc="Full-Stack Project"
          url="www.inchromastudio.pt"
        />

        <Work
          class="mt-5 pt-5"
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
import Bar from "../../components/Bar.vue";
import Work from "./Work.vue";

export default {
  components: {
    Bar,
    Work,
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
</style>