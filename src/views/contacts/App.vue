<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-4">
        <Bar />
      </div>
      <div class="col-12 col-lg-8 ps-5 pt-4">
        <!-- SOCIAL MEDIA -->
        <section>
          <h2 class="mt-5 pt-2">SOCIAL MEDIA</h2>
          <hr />

          <div class="social w-50 d-inline-flex justify-content-between mt-3">
            <a
              class="hvr-grow"
              href="https://www.facebook.com/joao.pedro.simoess/"
              target="_blank"
              ><i class="fab fa-facebook-f fa-3x"></i
            ></a>
            <a
              class="hvr-grow"
              href="https://www.instagram.com/jsimoes____/"
              target="_blank"
              ><i class="fab fa-instagram fa-3x"></i
            ></a>
            <a
              class="hvr-grow"
              href="https://github.com/joao-simoes"
              target="_blank"
              ><i class="fab fa-github fa-3x"></i
            ></a>
            <a
              class="hvr-grow"
              href="https://www.linkedin.com/in/joaopsimoes0/"
              target="_blank"
              ><i class="fab fa-linkedin fa-3x"></i
            ></a>
            <a
              class="hvr-grow"
              href="https://www.behance.net/jsimoes0"
              target="_blank"
              ><i class="fab fa-behance fa-3x"></i
            ></a>
          </div>

          <br />

          <!-- CONTACTS -->
          <section class="d-inline-flex mt-5">
            <i class="fas fa-at fa-2x"></i>
            <h3 class="ms-2">joaopsimoes0@gmail.com</h3>
          </section>
          <!-- CONTACTS -->
        </section>
        <!-- SOCIAL MEDIA -->
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
h2 {
  font-weight: 800;
}

.row {
  padding: 14% 0;
}

@media only screen and (max-width: 768px) {
  .social {
    width: 80% !important;
  }

  i {
    font-size: 200% !important;
  }
  
  h3 {
    font-size: 20px;
  }
}
</style>
