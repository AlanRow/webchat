<template>
  <section class="contacts-container">
    <BaseSubmitInput
      v-model="newUser"
      class="contacts-container__add-user"
      size="medium"
      btn-type="primary"
      :input-props="{
        type: 'text',
        placeholder: 'Search user...',
      }"
      :button-props="{
        type: submit,
      }"
      @submit="$emit('addUser', newUser)"
    >
      Add User
    </BaseSubmitInput>

    <div class="contacts-container__contacts scrollable">
      <span v-if="contacts.length === 0">No contacts available...</span>
      <ul v-else class="contacts-list">
        <ContactsItem
          v-for="user in contacts"
          :key="user.id"
          class="contacts-list__item"
          :username="user.name"
          @click="selectUser(user)"
        />
      </ul>
    </div>
  </section>
</template>

<script>
import { BaseSubmitInput } from "@/components/base";
import ContactsItem from "./ContactsItem.vue";

export default {
  name: "ContactsSidebar",
  components: {
    BaseSubmitInput,
    ContactsItem,
  },
  props: {
    contacts: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      newUser: "",
    };
  },
};
</script>

<style scoped lang="scss">
.contacts-container {
  display: flex;
  flex-direction: column;

  padding: 1em;

  &__add-user {
    margin-bottom: 1em;
  }

  &__contacts {
    max-height: 100%;
    overflow-y: scroll;
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
  direction: rtl;

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
