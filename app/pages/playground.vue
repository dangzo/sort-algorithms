<template>
  <div>
    <h1 class="text-4xl font-bold leading-loose">Playground</h1>

    <form class="space-y-4 mt-6" @submit.prevent="handleSubmitForm">
      <label for="username" class="block text-sm font-medium text-gray-700"
        >Username</label
      >
      <input type="text" id="username" v-model="username" />

      <label for="email" class="block text-sm font-medium text-gray-700"
        >Email</label
      >
      <input type="email" id="email" v-model="email" />

      <button class="px-4 py-2 bg-blue-500 text-white rounded" type="submit">
        Add user
      </button>
    </form>

    <hr />
    <div>
      Filter by username:
      <input type="text" class="border p-2" v-model="filteredUserName" />
    </div>
    <hr />

    <h2 class="text-2xl font-bold leading-loose mt-6">Users</h2>
    <ul class="mt-4 space-y-2 pl-0">
      <li
        v-for="(user, index) in filteredUsers"
        :key="index"
        class="p-4 border rounded list-none"
      >
        <p class="text-lg font-medium">{{ user.name }}</p>
        <p class="text-sm text-gray-600">{{ user.email }}</p>
        <button @click="userStore.removeUser(user.id)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useUserStore } from '@/stores/userStore';

const userStore = useUserStore();

const username = ref('');
const email = ref('');
const filteredUserName = ref('');

function handleSubmitForm() {
  if (username.value) {
    userStore.addUser({ name: username.value, email: email.value });
    username.value = '';
    email.value = '';
  }
}

const filteredUsers = computed(() => {
  if (filteredUserName.value.length) {
    return userStore.users.filter(({ name }) =>
      name.includes(filteredUserName.value),
    );
  }

  return userStore.users;
});
</script>
