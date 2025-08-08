import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Adiciona a base relativa para garantir que a Vercel encontre os arquivos.
  base: './',

  plugins: [
    react()
  ],

  build: {
    // Limita o tamanho do chunk, bom para otimização.
    chunkSizeWarningLimit: 5000,
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
