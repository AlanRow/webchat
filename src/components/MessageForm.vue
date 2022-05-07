<template>
  <form action="#">
    <!-- From name -->
    <div class="field">
      <label for="message_from">From:</label>
      <input id="message_from" v-model="from" type="text" />
    </div>

    <!-- To name -->
    <div class="field">
      <label for="message_to">To:</label>
      <input id="message_to" v-model="to" type="text" />
    </div>

    <!-- Message text -->
    <div class="field">
      <label for="message_text">Message:</label>
      <input id="message_text" v-model="message" type="textarea" />
    </div>

    <button type="submit" @click="sendMessage">Send</button>
  </form>
</template>

<script>
export default {
  name: "MessageForm",
  data() {
    return {
      from: "",
      to: "",
      message: "",
    };
  },
  computed: {
    messageData() {
      return {
        from: this.from,
        to: this.to,
        message: this.message,
      };
    },
  },
  methods: {
    sendMessage() {
      if (!this.from || !this.to) {
        alert("You haven't filled credentials");
      }
      this.$emit("send", this.messageData);
    },
  },
};
</script>

<style scoped lang="scss">
.field {
  display: flex;
  flex-direction: column;
}
</style>
