<template>
  <section class="contacts-container">
    <BaseInputSubmit
      v-model="newUser"
      class="contacts-container__add-user"
      size="medium"
      btn-type="primary"
      :input-props="{
        type: 'text',
        placeholder: 'Search user...',
      }"
      :button-props="{
        type: 'submit',
      }"
      @submit="$emit('addUser', newUser)"
    >
      Add User
    </BaseInputSubmit>

    <div class="contacts-container__contacts scrollable contacts-panel">
      <BaseLoaderDotted v-if="isLoading" label="Loading" />
      <span v-else-if="contacts.length === 0">No contacts available</span>
      <ul v-else class="contacts-panel__list contacts-list">
        <ContactsItem
          v-for="user in contacts"
          :key="user.id"
          class="contacts-list__item"
          :username="user.name"
          :is-selected="user.id === selectedId"
          @click="selectUser(user)"
        />
      </ul>
    </div>
  </section>
</template>

<script>
import ContactsItem from "./ContactsItem.vue";

export default {
  name: "ContactsSidebar",
  components: {
    ContactsItem,
  },
  props: {
    contacts: {
      type: Array,
      default: () => [],
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      newUser: "",
      selectedId: null,
    };
  },
  methods: {
    selectUser(user) {
      this.selectedId = user.id;
      this.$emit("select", user);
    },
  },
};
</script>

<style scoped lang="scss">
.contacts-container {
  display: flex;
  flex-direction: column;

  padding: 1em;

  background-color: var(--secondary-light-color);

  &__add-user {
    margin-bottom: 1em;
  }

  &__contacts {
    max-height: 100%;
    width: 100%;
    overflow-y: scroll;
  }
}

.contacts-panel {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__list {
    width: 100%;
  }
}

.contacts-list {
  margin: 0;
  padding: 0;

  &__item {
    height: 80px;
  }
}

.scrollable {
  // direction: rtl;
  &::-webkit-scrollbar {
    width: 10px;

    &-track {
      background-color: transparent;
    }
    &-thumb {
      background-color: #dfdfff;
      border-radius: 5px;

      &:hover {
        background-color: blue;
      }
    }
  }
}
</style>
