<template>
  <div
    class="message"
    :class="{
      message_theme_own: theme === 'own',
      message_theme_alter: theme === 'alter',
    }"
  >
    <p class="message__text">{{ text }}</p>
    <span class="message__time">{{ messageTimeLine }}</span>
  </div>
</template>

<script>
import dayjs from "dayjs";

export default {
  name: "ChatMessage",
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
  computed: {
    messageTimeLine() {
      return dayjs(this.time).format("HH:mm");
    },
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

  color: white;

  &_theme {
    &_own {
      background-color: green;
    }
    &_alter {
      background-color: blue;
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
