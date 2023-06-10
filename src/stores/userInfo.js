import { ref } from 'vue'
import { defineStore } from 'pinia'

export const userInfoStore = defineStore('userInfo', () => {
  const isLogin = ref(false)
  function changeLogin() {
    this.isLogin = !this.isLogin
  }
  return { isLogin, changeLogin }
})
