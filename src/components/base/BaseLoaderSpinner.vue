<template>
  <div :style="spinnerStyle" class="spinner"></div>
</template>

<script>
export default {
  name: "BaseLoaderSpinner",
  props: {
    fillColor: {
      type: String,
      default: "var(--primary-color)",
    },
    unfillColor: {
      type: String,
      default: "grey",
    },
    backgroundColor: {
      type: String,
      default: "var(--secondary-color)",
    },
  },
  computed: {
    spinnerStyle() {
      return {
        background: `radial-gradient(
            ${this.backgroundColor} 0%,
            ${this.backgroundColor} 65%,
            transparent 65%,
            transparent 100%
          ),
          conic-gradient(
            ${this.fillColor} 0deg,
            ${this.fillColor} 90deg,
            ${this.unfillColor} 90deg,
            ${this.unfillColor} 0deg)
        `,
      };
      // return {};
    },
  },
};
</script>

<style scoped>
.spinner {
  border-radius: 50%;
  animation-name: circle-loader;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes circle-loader {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
