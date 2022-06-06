<template>
  <span class="dotted">{{ label }}</span>
</template>

<script>
export default {
  name: "BaseLoaderDotted",
  props: {
    label: {
      type: String,
      default: "Loading",
    },
  },
};
</script>

<style scoped>
.dotted:after {
  position: absolute; /** to prevent include dots in text width */
  animation-name: dotted-loading;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: step(4, end);
  content: "";
}

@keyframes dotted-loading {
  25% {
    content: ".";
  }
  50% {
    content: "..";
  }
  75% {
    content: "...";
  }
}
</style>
