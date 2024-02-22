module.exports = {
  root: true,

  ignorePatterns: ['dist', 'node_modules', '.temp'],
  extends: ['eslint:recommended', 'plugin:astro/jsx-a11y-recommended', 'plugin:@typescript-eslint/recommended'],
  plugins: ['prettier'],
  settings: {},
  globals: {},

  rules: {
    'prettier/prettier': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        disallowTypeAnnotations: false,
        fixStyle: 'separate-type-imports',
        prefer: 'type-imports',
      },
    ],
    'max-len': [
      'error',
      {
        code: 120,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'no-console': ['warn'],
  },

  overrides: [
    {
      files: ['**/*.cjs'],
      globals: {
        module: true,
      },
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },

    {
      // Define the configuration for `.astro` file.
      files: ['*.astro'],
      // Allows Astro components to be parsed.
      parser: 'astro-eslint-parser',
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      processor: 'astro/client-side-ts',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
      },
    },

    {
      files: ['**/*.ts'],

      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.eslint.json',
        sourceType: 'module',
        ecmaVersion: 2022,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  ],
};
