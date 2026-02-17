import { defineStore } from 'pinia';
import { ref } from 'vue';

export type User = {
  id: number;
  name: string;
  email?: string;
};

export const useUserStore = defineStore('user', () => {
  const users = ref<Array<User>>([]);

  function addUser({ name, email }: Pick<User, 'name' | 'email'>) {
    const id = Date.now();
    users.value.push({ id, name, email });
  }

  function removeUser(userId: number) {
    const index = users.value.findIndex((user) => user.id === userId);
    if (index !== -1) {
      users.value.splice(index, 1);
    }
  }

  return { users, addUser, removeUser };
});
