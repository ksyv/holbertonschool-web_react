// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  // Ignorer le dossier de build
  globalIgnores(['dist']),

  // Configuration générale pour tous les fichiers JavaScript/JSX
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended, // Règles recommandées par ESLint
      // Configuration des plugins React
      reactHooks.configs['recommended-latest'], // Règles recommandées pour les Hooks React
      reactRefresh.configs.vite, // Règles spécifiques pour React Fast Refresh avec Vite
    ],
    languageOptions: {
      // Version ECMAScript utilisée
      ecmaVersion: 'latest', // Utilise la dernière version d'ECMAScript
      // Environnement global (navigateur pour le code client)
      globals: {
        ...globals.browser, // Ajoute toutes les globales spécifiques aux navigateurs (window, document, console, etc.)
      },
      // Options du parseur
      parserOptions: {
        ecmaVersion: 'latest', // Encore une fois, la dernière version
        ecmaFeatures: { jsx: true }, // Active le support de JSX
        sourceType: 'module', // Permet l'utilisation des imports/exports ES Modules
      },
    },
    // Règles spécifiques au projet
    rules: {
      // Ignore les variables non utilisées qui commencent par une majuscule (souvent des composants React ou des constantes)
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },

  // Nouvelle configuration spécifique pour les fichiers de test Jest
  {
    // Cible les fichiers se terminant par .test.js, .test.jsx, .spec.js, .spec.jsx
    files: ['**/*.{test,spec}.{js,jsx}'],
    languageOptions: {
      // Ajoute les globales de Jest en plus des globales du navigateur pour les fichiers de test
      globals: {
        ...globals.browser,
        ...globals.jest, // Inclut les globales de Jest comme 'describe', 'it', 'expect', etc.
      },
    },
    // Si tu utilises des plugins ESLint spécifiques à Jest (comme eslint-plugin-jest),
    // tu les ajouterais ici avec leurs configurations étendues et règles spécifiques.
    // Exemple (si tu l'installes plus tard) :
    // plugins: {
    //   jest: /* import du plugin eslint-plugin-jest */
    // },
    // extends: [
    //   // Si le plugin Jest a des configs recommandées, comme 'plugin:jest/recommended'
    // ],
    // rules: {
    //   // Règles spécifiques à Jest, par exemple :
    //   // 'jest/no-disabled-tests': 'warn',
    //   // 'jest/no-focused-tests': 'error'
    // }
  },
]);
