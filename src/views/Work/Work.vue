<template>
  <div>
    <section>
      <h2>{{ title }}</h2>
      <hr />
      <h3 class="mt-3">{{ year }}</h3>
      <h4>{{ desc }}</h4>
      <h5 class="mt-4">
        <a :href="'https://' + url" target="_blank">{{ url }}</a>
      </h5>
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
  },
};
</script>

<style lang="scss" scoped></style>
