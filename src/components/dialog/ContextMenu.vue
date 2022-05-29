<template>
  <div v-if="visible" class="contextmenu" @click="close">
    <div class="contextmenu__menu context-options" :style="menuStyle">
      <ul class="context-options-list">
        <li
          v-for="opt in options"
          :key="opt.id"
          class="context-options-list__item context-options-item"
          @click="$emit('select', opt.id)"
        >
          {{ opt.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContextMenu",
  props: {
    options: {
      type: Array,
      default: () => [
        {
          id: "option_1",
          label: "Option 1",
        },
        {
          id: "option_2",
          label: "Option 2",
        },
        {
          id: "option_3",
          label: "Option 3",
        },
      ],
    },
  },
  data() {
    return {
      visible: false,
      bindedElements: [],
      coords: {
        x: 0,
        y: 0,
      },
    };
  },
  computed: {
    menuStyle() {
      return {
        left: `${this.coords.x}px`,
        top: `${this.coords.y}px`,
      };
    },
  },
  beforeDestroy() {
    this.bindedElements.forEach((el) => {
      el.removeEventListener("contextmenu", this.handleContextmenuEvent);
    });
  },
  methods: {
    close() {
      this.visible = false;
    },
    bindMenu(el) {
      el.addEventListener("contextmenu", this.handleContextmenuEvent);
      this.bindedElements.push(el);
    },
    handleContextmenuEvent(e) {
      e.preventDefault();
      this.visible = true;
      const { clientX: x, clientY: y } = e;
      this.coords = { x, y };
    },
  },
};
</script>

<style scoped lang="scss">
.contextmenu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &__menu {
    position: absolute;
  }
}
.context-options {
  background: white;
  color: black;
  padding: 0.5em;
  border-radius: 5px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
}

.context-options-list {
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;

  &__item {
    &:not(:first-child) {
      margin-top: 0.5em;
    }
  }
}

.context-options-item {
  padding: 0 0.5em;
  user-select: none;
  &:hover {
    background: rgba(0, 0, 128, 0.3);
  }
}
</style>
