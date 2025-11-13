// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
   css: ['./app/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: ['@pinia/nuxt'],
  runtimeConfig: {
    // server-only object
    mariadb: {
      host: process.env.MARIADB_HOST || 'localhost',
      port: process.env.MARIADB_PORT || '3306',
      user: process.env.MARIADB_USER || 'root',
      password: process.env.MARIADB_PASSWORD || '',
      database: process.env.MARIADB_DATABASE || 'test',
      connectionLimit: process.env.MARIADB_CONNECTION_LIMIT || '5',
    }
  }
})