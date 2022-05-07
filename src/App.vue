<template>
  <div id="app">
    <message-form @send="sendMessage"></message-form>
  </div>
</template>

<script>
import MessageForm from "@/components/MessageForm.vue";
import Chat from "@/api/chat";

export default {
  name: "App",
  components: {
    MessageForm,
  },
  methods: {
    sendMessage({ from, to, message }) {
      const chat = new Chat(from, to);
      chat.sendMessage(message);
    },
  },
};
</script>

<style lang="scss"></style>
