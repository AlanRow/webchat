<template>
  <BaseInputSubmit
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
  </BaseInputSubmit>
</template>

<script>
export default {
  name: "MessageForm",
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
