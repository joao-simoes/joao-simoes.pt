<template>
  <div>
    <section>
      <h2>{{ title }}</h2>
      <hr />
      <h3 class="mt-3">{{ year }}</h3>
      <p class="w-75 my-4">{{ desc }}</p>
      <h5 class="mt-4">
        Visit @ <a :href="'https://' + url" target="_blank">{{ url }}</a>
      </h5>
      <div class="d-inline-flex mt-4" v-for="tech in stack" :key="tech">
        <i :class="tech" class="fa-2x mx-2"></i>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Work",
  props: {
    title: String,
    year: String,
    desc: String,
    url: String,
    stack: Array,
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
  font-weight: 100;
}

a {
  text-decoration: underline !important;
}
</style>
