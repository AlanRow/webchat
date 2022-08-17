<template>
  <div id="app">
    <div class="page">
      <login-form class="page__form" />
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/auth/LoginForm.vue";

export default {
  name: "App",
  components: { LoginForm },
  data() {
    return {};
  },
  computed: {},
  created() {},
  methods: {},
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>

<style scoped lang="scss">
#app {
  width: 100%;
  height: 100vh;
}

.page {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--primary-light-color);

  &__form {
    max-width: 400px;
    flex-grow: 1;
  }
}
</style>
