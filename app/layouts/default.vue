<template>
  <UApp>
    <UNavbar>
      <UNavbarBrand>Sorting Algorithms</UNavbarBrand>
      <UNavbarMenu>
        <UNavbarItem to="/">Home</UNavbarItem>
        <UNavbarItem to="/bubble-sort">Bubble Sort</UNavbarItem>
        <UNavbarItem to="/selection-sort">Selection Sort</UNavbarItem>
        <UNavbarItem to="/insertion-sort">Insertion Sort</UNavbarItem>
        <UNavbarItem to="/merge-sort">Merge Sort</UNavbarItem>
        <UNavbarItem to="/quick-sort">Quick Sort</UNavbarItem>
      </UNavbarMenu>
    </UNavbar>

    <main class="p-4">
      <slot />
    </main>

    <UFooter class="text-center p-4">
      &copy; 2024 Sorting Algorithms - Built with Vue.js 💚
    </UFooter>
  </UApp>
</template>
