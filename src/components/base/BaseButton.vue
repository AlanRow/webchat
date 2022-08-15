<template>
  <button
    v-bind="buttonProps"
    class="button"
    :class="[`button_type_${type}`, `button_size_${size}`]"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    type: {
      type: String,
      default: "primary",
      validator(val) {
        return ["primary", "secondary"].includes(val);
      },
    },
    size: {
      type: String,
      default: "medium",
      validator(val) {
        return ["small", "medium", "large"].includes(val);
      },
    },
    buttonProps: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style scoped lang="scss">
.button {
  --shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  --shadow-light: -1px -1px 1px rgba(255, 255, 255, 0.7);

  font-family: Verdana, sans-serif;
  border: none;

  /** shadows **/
  box-shadow: var(--shadow), var(--shadow-light);

  &:active {
    box-shadow: inset var(--shadow), inset var(--shadow-light);
  }

  &_type {
    &_primary {
      background-color: var(--primary-color);
      color: var(--primary-text-color);

      &:hover {
        background-color: var(--primary-light-color);
      }
    }
  }

  &_size {
    &_medium {
      height: 40px;
      min-width: 60px;
      padding: 10px;
      border-radius: 5px;
    }
    &_large {
      height: 60px;
      min-width: 100px;
      padding: 20px;
      border-radius: 10px;
      font-size: 1.2rem;
    }
  }
}
</style>
