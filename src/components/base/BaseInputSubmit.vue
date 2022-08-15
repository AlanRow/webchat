<template>
  <div class="submit-container">
    <BaseInput
      v-model="internalValue"
      class="submit-container__input"
      :size="size"
      :input-props="inputProps"
    />
    <BaseButton
      class="submit-container__button"
      :type="btnType"
      :size="size"
      :button-props="buttonProps"
    >
      <slot @click="$emit('submit', value)">Submit</slot>
    </BaseButton>
  </div>
</template>

<script>
import { BaseInput, BaseButton } from ".";

export default {
  name: "BaseInputSubmit",
  components: {
    BaseInput,
    BaseButton,
  },
  model: {
    prop: "value",
    event: "change",
  },
  props: {
    value: {
      type: [Number, String],
      default: () => null,
    },
    btnType: {
      type: String,
      default: "primary",
    },
    size: {
      type: String,
      default: "medium",
    },
    inputProps: {
      type: Object,
      default: () => ({}),
    },
    buttonProps: {
      type: Object,
      default: () => ({}),
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
.submit-container {
  display: flex;

  &__input {
    flex-grow: 1;
  }
  &__button {
    flex-grow: 0;
  }
}

/** More specific selector to override native border styles **/
.submit-container .submit-container__input {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.submit-container .submit-container__button {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
</style>
