<script setup>
import { ref, onMounted } from 'vue'
import { useAuthStore } from '~/stores/auth'

const auth = useAuthStore()
const username = ref('')
const password = ref('')
const error = ref('')

onMounted(() => {
  auth.loadUser()
  if (auth.user) navigateTo('/')
})

const handleLogin = () => {
  const success = auth.login(username.value, password.value)
  if (success) navigateTo('/')
  else error.value = 'Invalid username or password'
}
</script>

<template>
  <div class="p-10 max-w-sm mx-auto space-y-3">
    <h1 class="text-2xl font-bold">Login</h1>
    <input v-model="username" placeholder="Username" class="border p-2 w-full" />
    <input v-model="password" placeholder="Password" type="password" class="border p-2 w-full" />
    <button @click="handleLogin" class="bg-blue-600 text-white p-2 w-full">Login</button>
    <p v-if="error" class="text-red-500 text-sm">{{ error }}</p>
  </div>
</template>
