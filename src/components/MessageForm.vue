<template>
  <BaseSubmitInput
    v-model="message"
    class="message-input"
    size="large"
    btn-type="primary"
    :input-props="{
      type: 'text',
      placeholder: 'Enter a message...',
    }"
    @submit="send"
  >
    Send
  </BaseSubmitInput>
</template>

<script>
import { BaseSubmitInput } from "@/components/base";

export default {
  name: "MessageForm",
  components: {
    BaseSubmitInput,
  },
  data() {
    return {
      message: "",
    };
  },
  methods: {
    send() {
      if (this.message.length > 0) {
        this.$emit("send", this.message);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.message-input {
  padding: 15px 10px;
}
</style>
