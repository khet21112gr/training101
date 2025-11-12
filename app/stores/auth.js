import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
  }),

  actions: {
    login(username, password) {
      const mockUser = { username: 'admin', password: '1234' }
      if (username === mockUser.username && password === mockUser.password) {
        this.user = { username }
        localStorage.setItem('user', JSON.stringify(this.user))
        return true
      }
      return false
    },

    logout() {
      this.user = null
      localStorage.removeItem('user')
    },

    loadUser() {
      const saved = localStorage.getItem('user')
      if (saved) this.user = JSON.parse(saved)
    },
  },
})
