// task_4/dashboard/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Le nom de votre dépôt GitHub.
// Il est crucial que cela corresponde EXACTEMENT au nom de votre dépôt.
const GITHUB_REPO_NAME = 'holbertonschool-web_react';

export default defineConfig({
  plugins: [react()],
  // Configure le chemin de base pour le déploiement.
  // Pour GitHub Pages, c'est généralement le nom du dépôt précédé et suivi d'un slash.
  base: `/${GITHUB_REPO_NAME}/`,
});