<template>
  <input
    v-model="internalValue"
    v-bind="inputProps"
    class="input"
    :class="[`input_size_${size}`]"
  />
</template>

<script>
export default {
  name: "BaseInput",
  model: {
    prop: "value",
    event: "change",
  },
  props: {
    value: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "medium",
      validator(val) {
        return ["small", "medium", "large"].includes(val);
      },
    },
    inputProps: {
      type: Object,
      default: () => ({
        type: "text",
      }),
    },
  },
  computed: {
    internalValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("change", val);
      },
    },
  },
};
</script>

<style scoped lang="scss">
.input {
  padding: 0 var(--margin-3);
  margin: 0;

  border: var(thin-border) solid black;
  box-sizing: border-box;

  /** shadows **/
  box-shadow: var(--double-small-shadow);

  &:focus-visible {
    outline: none;
    border-width: var(--thick-border);
    border-color: var(--primary-color);
  }

  &_size {
    &_medium {
      height: 40px;
      min-width: 60px;
      border-radius: var(--smooth-border-radius);
    }
    &_large {
      height: 60px;
      min-width: 100px;
      border-radius: var(--round-border-radius);
      font-size: var(--large-font-size);
    }
  }
}
</style>
