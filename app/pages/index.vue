<template>
  <article class="max-w-3xl mx-auto p-8">
    <div class="space-y-8">
      <div class="space-y-4">
        <h1 class="text-4xl font-bold leading-loose">Sorting Algorithms</h1>
        <p class="text-base leading-8">
          Explore various sorting algorithms, their implementations, and
          complexity analysis.
        </p>
      </div>

      <nav class="space-y-4">
        <h2 class="text-2xl font-semibold leading-loose">Table of Contents</h2>
        <ul class="space-y-2">
          <li
            v-for="(item, index) in toc"
            :key="item.href"
            class="border-l-4 border-amber-500 pl-4 py-2 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            <NuxtLink
              :to="item.href"
              class="flex items-center gap-2 text-base font-medium hover:text-amber-600 dark:hover:text-amber-400"
            >
              <span class="text-amber-500 font-bold">{{
                String(index + 1).padStart(2, '0')
              }}</span>
              <span>{{ item.pageName }}</span>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </article>
</template>

<script lang="ts" setup>
const toc = [
  { pageName: 'Big-O Notation', href: '/big-o-notation' },
  { pageName: 'Bubble Sort', href: '/bubble-sort' },
  { pageName: 'Merge Sort', href: '/merge-sort' },
  { pageName: 'Quick Sort', href: '/quick-sort' },
];
</script>
