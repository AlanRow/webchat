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
  padding: var(--margin-2);
  border-radius: var(--smooth-border-radius);

  box-shadow: var(--normal-shadow);

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
    font-family: var(--header-font);
    font-size: var(--big-font-size);
    margin: 0;
    margin-bottom: var(--margin-2);
  }
  &__time {
    text-align: right;
  }
}
</style>
