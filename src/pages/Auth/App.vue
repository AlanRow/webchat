<template>
  <div id="app">
    <form class="auth-form">
      <div>
        <label for="name">Name</label>
        <base-input id="name" size="large" />
      </div>
      <div>
        <label for="password">Password</label>
        <base-input
          id="password"
          size="large"
          :input-props="{ type: 'password' }"
        />
      </div>
      <div>
        <base-button size="large">Log In</base-button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  computed: {},
  created() {},
  methods: {},
};
</script>

<style lang="scss">
.app {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--primary-color);
}
.auth-form {
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  background-color: var(--secondary-color);
}
</style>
