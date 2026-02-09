// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  // enable multi lines withing long objects and array
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.vue'],
    rules: {
      'object-curly-newline': [
        'error',
        { multiline: true, consistent: true, minElements: 3 },
      ],
      'array-bracket-newline': ['error', { multiline: true, minItems: 3 }],
    },
  },
);
