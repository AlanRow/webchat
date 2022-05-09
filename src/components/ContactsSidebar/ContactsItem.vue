<template>
  <li class="contact-container">
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
  },
};
</script>

<style scoped lang="scss">
.contact-container {
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Verdana, sans-serif;

  border: 1px solid grey;
  border-right: none;
  border-left: none;

  cursor: pointer;

  &:hover {
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
  font-size: 1.1rem;
  font-weight: bold;
  user-select: none;
}
</style>
