<template>
  <form class="login-form">
    <div class="login-form__title">
      <h2 class="form-title">Login</h2>
    </div>

    <div class="login-form__body">
      <div class="login-form__field field">
        <label for="auth_email" class="field__label field-label">E-mail</label>
        <base-input
          id="auth_email"
          v-model="email"
          size="medium"
          class="field__input field-input"
          :input-props="$options.emailProps"
        />
      </div>

      <div class="login-form__field field">
        <label for="auth_password" class="field__label field-label">
          Password
        </label>
        <base-input
          id="auth_password"
          v-model="password"
          size="medium"
          class="field__input field-input"
          :input-props="$options.passwordProps"
        />
      </div>
    </div>

    <div class="login-form__footer form-footer">
      <base-button type="secondary">Sign Up</base-button>
      <base-button>Login</base-button>
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
    placeholder: "your_email@gmail.com",
    required: true,
  },
  passwordProps: {
    type: "password",
    minlength: 4,
    required: true,
  },
};
</script>

<style scoped lang="scss">
.login-form {
  display: flex;
  flex-direction: column;

  padding: var(--margin-3) var(--margin-4);
  background-color: var(--secondary-light-color);

  border-radius: var(--round-border-radius);

  &__title {
    width: 100%;
    text-align: center;
  }

  &__body {
    margin-bottom: var(--margin-3);
  }

  &__field {
    &:not(:last-child) {
      margin-bottom: var(--margin-2);
    }
  }

  &__footer {
  }
}

.field {
  display: flex;
  flex-direction: column;

  &__label {
    margin-bottom: var(--margin-1);
  }

  &__input {
    flex-grow: 1;
  }
}

.form-title {
  font-family: var(--header-font);
  font-size: var(--large-font-size);
  font-weight: bold;
}

.field-label {
  font-size: var(--big-font-size);
}

.field-input {
  &:invalid {
    border-color: red;
  }
}

.form-footer {
  display: flex;
  justify-content: center;
  gap: var(--margin-3);
}
</style>
