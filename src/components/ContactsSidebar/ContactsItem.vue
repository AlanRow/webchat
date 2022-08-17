<template>
  <li
    class="contact-container"
    :class="{ selected: isSelected }"
    @click="$emit('click')"
  >
    <span class="name">{{ username }}</span>
  </li>
</template>

<script>
export default {
  name: "ContactsItem",
  props: {
    username: {
      type: String,
      default: "",
    },
    isSelected: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped lang="scss">
.contact-container {
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: var(--header-font);

  border: var(--thin-border) solid grey;
  border-right: none;
  border-left: none;

  cursor: pointer;

  &:where(:hover, .selected) {
    background-color: rgba(0, 0, 0, 0.3);
  }

  &:first-child {
    border-top: none;
  }
  &:last-child {
    border-bottom: none;
  }
}

.name {
  font-size: var(--big-font-size);
  font-weight: bold;
  user-select: none;
}
</style>
