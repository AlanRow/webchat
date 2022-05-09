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
  padding: 0 1em;
  margin: 0;

  border: 1px solid black;

  &_size {
    &_medium {
      height: 38px;
      min-width: 60px;
      border-radius: 5px;
    }
    &_large {
      height: 58px;
      min-width: 100px;
      border-radius: 10px;
      font-size: 1.2rem;
    }
  }
}
</style>
