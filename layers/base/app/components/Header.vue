<template>
  <UHeader>
    <template #left>
      <h1 class="text-lg font-bold">
        <NuxtLink to="/">Sorting Algorithms</NuxtLink>
      </h1>
    </template>

    <template #right>
      <UColorModeButton size="sm" class="cursor-pointer" />

      <UButton
        icon="i-simple-icons-github"
        color="neutral"
        variant="ghost"
        size="sm"
        to="https://github.com/dangzo/sort-algorithms"
        target="_blank"
      />
    </template>
  </UHeader>
</template>
