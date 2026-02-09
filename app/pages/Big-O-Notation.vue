<template>
  <Article title="Big-O Notation">
    <div class="flex flex-col gap-8">
      <section>
        <h2>What is Big-O Notation?</h2>
        <p>
          <a
            href="https://en.wikipedia.org/wiki/Big_O_notation"
            target="_blank"
            rel="noopener noreferrer"
            >Big-O notation</a
          >
          is a mathematical notation used to describe the performance
          characteristics of algorithms, specifically how their runtime or space
          requirements grow as the input size increases.
        </p>
      </section>

      <section class="text-center">
        <img
          src="/big-o.webp"
          alt="Big-O Complexity Chart"
          class="max-w-full h-auto rounded-lg shadow-md mx-auto"
        />
        <p class="legend">
          The chart above visualizes how different complexity classes scale with
          input size. Constant and logarithmic operations stay flat, while
          quadratic and exponential operations curve sharply upward. This
          illustrates why choosing the right algorithm matters when working with
          large datasets.
        </p>
      </section>

      <section>
        <h2>But... why is it Called "Big-O"?</h2>
        <p>
          The name comes from the mathematical term "Order of" notation. The "O"
          stands for the order of magnitude of an algorithm's complexity. It's
          used in mathematics to describe the limiting behavior of functions,
          and computer scientists adopted this notation to analyze algorithm
          efficiency. The term "Big" distinguishes it from other related
          notations like
          <a
            href="https://en.wikipedia.org/wiki/Big_O_notation#Family_of_Bachmann%E2%80%93Landau_notations"
            target="_blank"
            rel="noopener noreferrer"
            >Little-o (o)</a
          >,
          <a
            href="https://en.wikipedia.org/wiki/Big_O_notation#Family_of_Bachmann%E2%80%93Landau_notations"
            target="_blank"
            rel="noopener noreferrer"
            >Big-Omega (Ω)</a
          >, and
          <a
            href="https://en.wikipedia.org/wiki/Big_O_notation#Family_of_Bachmann%E2%80%93Landau_notations"
            target="_blank"
            rel="noopener noreferrer"
            >Big-Theta (Θ)</a
          >.
        </p>
      </section>

      <section>
        <h2>Why Big-O is Useful</h2>
        <p>Big-O notation is invaluable for several reasons:</p>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="text-amber-500 font-bold text-lg mt-0 flex-shrink-0"
              >✓</span
            >
            <span>
              <strong>Performance Prediction</strong>: It helps predict how an
              algorithm will perform as data grows, whether it's 10 items or 10
              million items
            </span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-amber-500 font-bold text-lg mt-0 flex-shrink-0"
              >✓</span
            >
            <span>
              <strong>Algorithm Comparison</strong>: It allows fair comparison
              between different algorithms with a standardized language
            </span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-amber-500 font-bold text-lg mt-0 flex-shrink-0"
              >✓</span
            >
            <span>
              <strong>Scalability Assessment</strong>: It reveals whether an
              algorithm will scale to real-world problem sizes
            </span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-amber-500 font-bold text-lg mt-0 flex-shrink-0"
              >✓</span
            >
            <span>
              <strong>Resource Planning</strong>: It helps estimate memory and
              processing requirements before implementation
            </span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-amber-500 font-bold text-lg mt-0 flex-shrink-0"
              >✓</span
            >
            <span>
              <strong>Optimization Focus</strong>: It guides developers to focus
              optimization efforts where they matter most
            </span>
          </li>
        </ul>
        <p>
          By using Big-O, you can make informed decisions about which algorithm
          to use without having to benchmark code or depend on specific hardware
          characteristics.
        </p>
      </section>

      <section>
        <h2>How to calculate an algorithm complexity</h2>
        <p>
          Big-O notation describes the worst-case scenario complexity of an
          algorithm: the best possible case we can aim for is
          <code>O(1)</code> and the worst possible case is <code>O(n!)</code>.
        </p>
        <p>
          When analyzing an algorithm, you focus on the dominant term — the part
          that grows fastest — and ignore constant factors. For example, an
          algorithm with complexity <code>5n + 10</code> is simplified to
          <code>O(n)</code>, and <code>3n² + 2n + 1</code> is simplified to
          <code>O(n²)</code>.
        </p>

        <p>Here are some common complexity classes:</p>

        <div class="flex flex-col gap-y-4 my-8">
          <div
            v-for="complexity in complexities"
            :key="complexity.name"
            class="bg-neutral-100 dark:bg-neutral-200 border-l-4 border-amber-500 p-6 rounded-sm"
          >
            <div class="flex items-center gap-3 mb-2">
              <code
                class="bg-neutral-200 dark:bg-neutral-100 px-3 py-1 rounded font-bold text-amber-600 dark:text-amber-400 text-lg"
              >
                {{ complexity.notation }}
              </code>
              <span class="font-semibold">{{ complexity.name }}</span>
            </div>
            <p class="mb-3">{{ complexity.description }}</p>
            <p class="text-sm italic">Example: {{ complexity.example }}</p>
          </div>
        </div>
      </section>
    </div>
  </Article>
</template>

<script setup>
const complexities = [
  {
    notation: 'O(1)',
    name: 'Constant Time',
    description: 'The algorithm takes the same time regardless of input size',
    example: 'accessing an array element by index',
  },
  {
    notation: 'O(n)',
    name: 'Linear Time',
    description: 'Runtime grows proportionally with input size',
    example: 'simple loop through a list',
  },
  {
    notation: 'O(n²)',
    name: 'Quadratic Time',
    description: 'Runtime grows with the square of the input size',
    example: 'nested loops',
  },
  {
    notation: 'O(log n)',
    name: 'Logarithmic Time',
    description: 'Runtime grows logarithmically',
    example: 'binary search',
  },
  {
    notation: 'O(n log n)',
    name: 'Linearithmic Time',
    description: 'Runtime is n multiplied by log n',
    example: 'efficient sorting algorithms like merge sort',
  },
  {
    notation: 'O(2ⁿ)',
    name: 'Exponential Time',
    description: 'Runtime doubles with each additional input',
    example: 'recursive fibonacci without memoization',
  },
  {
    notation: 'O(n!)',
    name: 'Factorial Time',
    description: 'Runtime multiplies by n for each additional input',
    example: 'generating all permutations',
  },
];
</script>
