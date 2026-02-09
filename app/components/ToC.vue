<template>
  <nav class="space-y-4">
    <h2 class="text-2xl font-semibold leading-loose">Table of Contents</h2>
    <ul class="space-y-2 list-none pl-4">
      <li v-for="(item, index) in toc" :key="item.href">
        <div
          v-if="item.divider"
          class="mt-6 mb-3 text-sm uppercase font-bold text-amber-500 tracking-wide"
        >
          {{ item.divider }}
        </div>

        <div
          class="border-l-4 border-amber-500 pl-4 py-2 transition-colors bg-neutral-100 dark:bg-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-800"
        >
          <NuxtLink
            :to="item.href"
            class="flex flex-1 items-center gap-2 text-base font-medium hover:text-amber-600 dark:hover:text-amber-400 no-underline"
          >
            <span class="text-amber-500 font-bold">
              {{ String(index + 1).padStart(2, '0') }}
            </span>
            <span>{{ item.pageName }}</span>
          </NuxtLink>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
const toc = [
  { pageName: 'Big-O Notation', href: '/big-o-notation' },

  // comparison algorithms
  {
    divider: 'Comparison algorithms',
    pageName: 'Bubble sort',
    href: '/bubble-sort',
  },
  { pageName: 'Quicksort', href: '/bubble-sort' },
  { pageName: 'Insertion sort', href: '/bubble-sort' },
  { pageName: 'Heap sort', href: '/bubble-sort' },
  { pageName: 'Merge sort', href: '/bubble-sort' },
  { pageName: 'Radix sort', href: '/bubble-sort' },
  { pageName: 'Selection sort', href: '/bubble-sort' },
  { pageName: 'Shell sort', href: '/bubble-sort' },

  // non-comparison algorithms
  {
    divider: 'Non-comparison algorithms',
    pageName: 'Bucket sort',
    href: '/bubble-sort',
  },
  { pageName: 'Counting sort', href: '/bubble-sort' },
];
</script>
