<script setup>
import { useAuthStore } from '~/stores/auth'
const auth = useAuthStore()

if (!auth.user) navigateTo('/login')
</script>

<template>
  <div class="p-10">
    <h1 class="text-xl">Welcome, {{ auth.user?.username }}</h1>
    <button @click="auth.logout(); navigateTo('/login')" class="bg-red-600 text-white p-2 mt-4">Logout</button>
  </div>
</template>
