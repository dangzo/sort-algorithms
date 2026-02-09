<template>
  <UApp>
    <UHeader title="Sorting Algorithms">
      <template #right>
        <UColorModeButton size="sm" />
      </template>
    </UHeader>

    <UMain class="p-4">
      <UContainer>
        <slot />
      </UContainer>
    </UMain>

    <UFooter>
      <template #left> &copy; 2024 Sorting Algorithms </template>

      <template #right>
        <ULink
          to="mailto:dangz.dev@gmail.com"
          title="Send E-Mail"
          target="_blank"
        >
          <UIcon name="i-simple-icons-gmail" size="18" class="ml-1" />
        </ULink>

        <ULink
          to="https://www.linkedin.com/in/dangz/"
          title="View on LinkedIn"
          target="_blank"
        >
          <UIcon
            name="i-simple-icons-linkedin"
            size="18"
            class="ml-1"
            title="View author LinkedIn"
            target="_blank"
            aria-label="LinkedIn"
          />
        </ULink>

        <ULink
          to="https://github.com/dangzo/sort-algorithms"
          title="View on GitHub"
          target="_blank"
        >
          <UIcon
            name="i-simple-icons-github"
            size="18"
            class="ml-1"
            title="GitHub repository"
            target="_blank"
            aria-label="GitHub"
          />
        </ULink>
      </template>
    </UFooter>
  </UApp>
</template>
