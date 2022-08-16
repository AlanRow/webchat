<template>
  <form class="login-form">
    <div class="login-form__title">
      <h2 class="form-title">Login</h2>
    </div>

    <div class="login-form__field field">
      <label for="auth_email" class="field__label field-label">E-mail</label>
      <base-input
        id="auth_email"
        v-model="email"
        size="medium"
        class="field__input field-input"
        :input-props="emailProps"
      />
    </div>
  </form>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  emailProps: {
    type: "email",
  },
};
</script>

<style scoped lang="scss">
.login-form {
  display: flex;
  flex-direction: column;

  padding: 1em 2em;
  background-color: var(--secondary-color);

  border-radius: 12px;

  &__title {
    width: 100%;
    text-align: center;
  }
}

.field {
  display: flex;
  flex-direction: column;

  &__label {
    margin-bottom: 0.25em;
  }

  &__input {
    flex-grow: 1;
  }
}

.form-title {
  font-family: Verdana, sans-serif;
  font-size: 1.25rem;
  font-weight: bold;
}

.field-label {
  font-size: 1.1rem;
}

.field-input {
  &:invalid {
    background-color: rgba(255, 0, 0, 0.3);
  }
}
</style>
