<template>
  <div>
    <h1 class="text-4xl font-bold leading-loose">Playground</h1>

    <p>{{ $route.fullPath }}</p>
    <p>{{ name }}</p>

    <input
      ref="nameInput"
      type="text"
      class="border p-2 rounded mb-4"
      placeholder="Enter name"
    />

    <button
      class="px-4 py-2 mb-4 bg-amber-500 text-white rounded hover:bg-amber-600 transition-colors"
      @click="updateName(nameInput?.value || '')"
    >
      Update name
    </button>
  </div>
</template>

<script lang="ts" setup>
import { useName } from '~/composables/useName';

const nameInput = ref<HTMLInputElement | null>(null);

const { name, updateName } = useName({ initialName: 'Daniele G.' });
</script>
