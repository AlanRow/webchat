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
  font-family: var(--header-font);
  border: none;

  /** shadows **/
  box-shadow: var(--double-small-shadow);

  &:active {
    box-shadow: var(--double-small-shadow-active);
  }

  &_type {
    &_primary {
      background-color: var(--primary-color);
      color: var(--primary-text-color);

      &:hover {
        background-color: var(--primary-light-color);
      }
    }
    &_secondary {
      background-color: var(--secondary-color);
      color: var(--secondary-text-color);

      &:hover {
        background-color: var(--secondary-light-color);
      }
    }
  }

  &_size {
    &_medium {
      height: 40px;
      min-width: 60px;
      padding: 10px;
      border-radius: var(--smooth-border-radius);
    }
    &_large {
      height: 60px;
      min-width: 100px;
      padding: 20px;
      border-radius: var(--round-border-radius);
      font-size: var(--large-font-size);
    }
  }
}
</style>
