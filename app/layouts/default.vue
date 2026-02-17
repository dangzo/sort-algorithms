<template>
  <UApp>
    <Header />

    <UMain class="p-4">
      <UContainer>
        <slot />
      </UContainer>
    </UMain>

    <UFooter>
      <p class="text-neutral-950 text-sm">
        &copy; {{ today.getFullYear() }} Sorting Algorithms by
        <a
          href="https://www.github.com/dangzo"
          target="_blank"
          class="text-neutral-950 font-bold no-underline hover:text-primary-600"
        >
          {{ authorName }}
        </a>
      </p>
    </UFooter>
  </UApp>
</template>

<script lang="ts" setup>
const today = new Date();

const { name: authorName } = useName({ initialName: 'dangz0' });
</script>
