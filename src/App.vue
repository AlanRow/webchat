<template>
  <div id="app">
    <div class="main-grid">
      <ContactsSidebar
        :contacts="$options.mockData.users"
        class="main-grid__contacts"
      />
      <ChatPanel
        :messages="$options.mockData.messages"
        class="main-grid__chat"
      />
      <MessageForm class="main-grid__message" />
    </div>
  </div>
</template>

<script>
import Chat from "@/api/chat";

import ContactsSidebar from "@/components/ContactsSidebar";
import ChatPanel from "@/components/ChatPanel";
import MessageForm from "@/components/MessageForm";

import { USERS, MESSAGES } from "@/mock.js";

export default {
  name: "App",
  components: {
    ContactsSidebar,
    ChatPanel,
    MessageForm,
  },
  mockData: {
    users: USERS,
    messages: MESSAGES,
  },
  methods: {
    sendMessage({ from, to, message }) {
      const chat = new Chat(from, to);
      chat.sendMessage(message);
    },
  },
};
</script>

<style lang="scss">
.main-grid {
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 500px 1fr;
  grid-template-rows: 1fr 90px;
  grid-template-areas:
    "contacts chat"
    "contacts message";

  &__contacts {
    grid-area: contacts;
  }
  &__chat {
    grid-area: chat;
  }
  &__message {
    grid-area: message;
  }
}
</style>
