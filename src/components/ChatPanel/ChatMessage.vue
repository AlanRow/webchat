<template>
  <div
    ref="message"
    class="message"
    :class="{
      message_theme_own: theme === 'own',
      message_theme_alter: theme === 'alter',
    }"
  >
    <p class="message__text">{{ text }}</p>
    <span class="message__time">{{ messageTimeLine }}</span>

    <!-- контекстное меню -->
    <ContextMenu ref="menu" :options="$options.messageMenuOptions" />
  </div>
</template>

<script>
import dayjs from "dayjs";
import ContextMenu from "@/components/dialog/ContextMenu.vue";

export default {
  name: "ChatMessage",
  components: {
    ContextMenu,
  },
  props: {
    text: {
      type: String,
      default: "",
    },
    time: {
      type: Date,
      default: null,
    },
    theme: {
      type: String,
      default: "own",
      validator(val) {
        return ["own", "alter"].includes(val);
      },
    },
  },
  messageMenuOptions: [
    {
      id: "reply",
      label: "Reply",
    },
    {
      id: "forward",
      label: "Forward",
    },
    {
      id: "copy",
      label: "Copy",
    },
    {
      id: "delete",
      label: "Delete",
    },
  ],
  computed: {
    messageTimeLine() {
      return dayjs(this.time).format("HH:mm");
    },
  },
  mounted() {
    const message = this.$refs.message;
    if (message) {
      this.$refs.menu.bindMenu(message);
    }
  },
};
</script>

<style scoped lang="scss">
.message {
  display: flex;
  flex-direction: column;

  min-width: 60px;
  padding: 0.5em;
  border-radius: 0.5rem;

  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);

  color: var(--primary-text-color);

  &_theme {
    &_own {
      background-color: var(--primary-color);
      color: var(--primary-text-color);
    }
    &_alter {
      background-color: var(--secondary-color);
      color: var(--secondary-text-color);
    }
  }

  &__text {
    font-family: Verdana, sans-serif;
    font-size: 1.1rem;
    margin: 0;
    margin-bottom: 0.5em;
  }
  &__time {
    text-align: right;
  }
}
</style>
