<template>
  <div class="chat-panel">
    <ChatMessage
      v-for="mes in messages"
      :key="mes.id"
      v-bind="mes"
      :theme="mes.isOwn ? 'own' : 'alter'"
      class="chat-panel__message"
      :class="{
        'chat-panel__message_own': mes.isOwn,
      }"
    />
  </div>
</template>

<script>
import ChatMessage from "./ChatMessage.vue";

export default {
  name: "ChatPanel",
  components: {
    ChatMessage,
  },
  props: {
    messages: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped lang="scss">
.chat-panel {
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;

  padding: 1em 2em;

  background-color: #dadaff;

  &__message {
    margin: 0.5em 1em;
    align-self: flex-start;

    &_own {
      align-self: flex-end;
    }
  }
}
</style>
