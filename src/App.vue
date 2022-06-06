<template>
  <div id="app">
    <div class="main-grid">
      <ContactsSidebar
        :contacts="contacts"
        :is-loading="areChatsLoading"
        class="main-grid__contacts"
        @select="selectChat"
      />
      <ChatPanel :messages="messages" class="main-grid__chat" />
      <MessageForm class="main-grid__message" />
    </div>
  </div>
</template>

<script>
import ContactsSidebar from "@/components/ContactsSidebar";
import ChatPanel from "@/components/ChatPanel";
import MessageForm from "@/components/MessageForm";

import {
  fetchUserInfo,
  fetchChats,
  fetchUsers,
  fetchMessages,
} from "@/api/chat.js";

export default {
  name: "App",
  components: {
    ContactsSidebar,
    ChatPanel,
    MessageForm,
  },
  data() {
    return {
      chatsList: [],
      messagesList: [],
      usersList: [],
      userInfo: {},
      areChatsLoading: false,
      areMessagesLoading: false,
      currentChat: null,
    };
  },
  computed: {
    contacts() {
      return this.chats.map(({ id, name, users }) => ({
        id,
        name: name || users.map(({ name }) => name).join(", "),
      }));
    },
    usersMap() {
      return Object.fromEntries(this.usersList.map((user) => [user.id, user]));
    },
    chats() {
      return this.chatsList.map((chat) => ({
        ...chat,
        users: chat.users
          .filter((id) => id !== this.userInfo.id)
          .map((id) => {
            if (id in this.usersMap) {
              return this.usersMap[id];
            } else {
              return {
                id,
                name: "Unknown",
              };
            }
          }),
      }));
    },
    messages() {
      return this.messagesList.map((mes) => ({
        ...mes,
        isOwn: mes.sender === this.userInfo.id,
        sender: this.usersMap[mes.sender],
      }));
    },
  },
  created() {
    this.initChats();
  },
  methods: {
    async initChats() {
      this.areChatsLoading = true;
      try {
        const [chats, users, me] = await Promise.all([
          fetchChats(),
          fetchUsers(),
          fetchUserInfo(),
        ]);

        this.usersList = users;
        this.chatsList = chats;
        this.userInfo = me;
      } catch (error) {
        console.error(error);
        alert("Error!");
      } finally {
        this.areChatsLoading = false;
      }
    },
    async selectChat(chat) {
      if (chat.id !== this.currentChat?.id) {
        this.currentChat = chat;
        try {
          const messages = await fetchMessages(chat.id);
          this.messagesList = messages;
        } catch (error) {
          console.error(error);
          alert("Error!");
        } finally {
          this.areChatsLoading = false;
        }
      }
    },
    sendMessage() {
      // const chat = new Chat(from, to);
      // chat.sendMessage(message);
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
