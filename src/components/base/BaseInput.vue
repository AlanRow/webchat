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
  --shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  --shadow-light: -1px -1px 1px rgba(255, 255, 255, 0.7);

  padding: 0 1em;
  margin: 0;

  border: 1px solid black;
  box-sizing: border-box;

  /** shadows **/
  box-shadow: var(--shadow), var(--shadow-light);

  &:focus-visible {
    outline: none;
    border-width: 3px;
    border-color: green;
  }

  &_size {
    &_medium {
      height: 40px;
      min-width: 60px;
      border-radius: 5px;
    }
    &_large {
      height: 60px;
      min-width: 100px;
      border-radius: 10px;
      font-size: 1.2rem;
    }
  }
}
</style>
