<template>
  <div class="chat-wrapper">
    <div v-if="isLoading" class="chat-wrapper__loader loader-wrapper">
      <BaseLoaderSpinner
        background-color="var(--primary-light-color)"
        fill-color="var(--secondary-light-color)"
        unfill-color="grey"
        class="loader-wrapper__loader"
      />
    </div>
    <div v-else class="chat-wrapper__messages chat-messages">
      <ChatMessage
        v-for="mes in messages"
        :key="mes.id"
        v-bind="mes"
        :theme="mes.isOwn ? 'own' : 'alter'"
        class="chat-messages__message"
        :class="{
          'chat-messages__message_own': mes.isOwn,
        }"
      />
    </div>
  </div>
</template>

<script>
import { BaseLoaderSpinner } from "@/components/base";
import ChatMessage from "./ChatMessage.vue";

export default {
  name: "ChatPanel",
  components: {
    ChatMessage,
    BaseLoaderSpinner,
  },
  props: {
    messages: {
      type: Array,
      default: () => [],
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped lang="scss">
.chat-wrapper {
  display: flex;
  justify-content: center;
  padding: var(--margin-3) var(--margin-4);
  background-color: var(--primary-light-color);

  &__loader {
    justify-self: center;
    align-self: center;
    width: 80px;
    height: 80px;
  }

  &__messages {
    width: 100%;
  }
}

.loader-wrapper {
  &__loader {
    width: 100%;
    height: 100%;
  }
}

.chat-messages {
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;

  &__message {
    margin: var(--margin-2) var(--margin-3);
    align-self: flex-start;

    &_own {
      align-self: flex-end;
    }
  }
}
</style>
