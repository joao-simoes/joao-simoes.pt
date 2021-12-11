<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-4">
        <Bar />
      </div>
      <div class="col-12 col-lg-8 ps-5 pt-4">
        <Work
          title="inChroma Studio"
          year="2021"
          desc="The inChroma Studio is a photography/videography & social media management business managed by close friends and family. They needed to grow their web presence and I helped them reaching so by developing a website for their business. If you need your business to reach more people, go check them out!"
          url="www.inchromastudio.pt"
          :stack="[
            'fab fa-vuejs',
            'fab fa-font-awesome-flag',
            'fab fa-bootstrap',
          ]"
        />

        <Work
          class="mt-5 pt-5"
          title="Carica"
          year="2021"
          desc="If you have already checked my about page, you probably noticed that I like homebrewing. This project is just a small pet project developed to showcase the beers I brew."
          :stack="[
            'fab fa-vuejs',
            'fab fa-font-awesome-flag',
            'fab fa-bootstrap',
          ]"
          url="soon"
        />

        <Work
          class="mt-5 pt-5"
          title="A Saboeira - Turismo Rural"
          year="2022 - under development"
          desc="A Saboeira it's a guest house located in Belver, Portugal managed by family. We are still developing this project, so, there's not too much to say yet, but the business is already up and running, so if you need a good vacation go check them out!"
          :stack="[
            'fab fa-vuejs',
            'fab fa-font-awesome-flag',
            'fab fa-bootstrap',
          ]"
          url="soon"
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
.hobbies p {
  line-height: 0.4;
}

.row {
  padding: 14% 0;
}
</style>
