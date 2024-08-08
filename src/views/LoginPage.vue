<template>
  <div :style="{ backgroundImage: 'url(' + bingImageUrl + ')' }" class="login-container">
    <el-form :model="formData" ref="loginForm" @submit.prevent="submit" class="form-content">
      <h2 class="form-title">Login</h2>
      <el-form-item prop="username" :rules="[{ required: true, message: 'Please input username', trigger: 'blur' }]">
        <el-input v-model="formData.username" placeholder="Username"></el-input>
      </el-form-item>
      <el-form-item prop="password" :rules="[{ required: true, message: 'Please input password', trigger: 'blur' }]">
        <el-input v-model="formData.password" type="password" placeholder="Password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :loading="authStore.loading" @click="submit">Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import 'element-plus/theme-chalk/el-message.css'
import { storeToRefs } from 'pinia'
import { onMounted, reactive, ref } from 'vue'
import { useAuthStore, useBingImageStore } from '~/stores'

const formData = reactive({
  username: '',
  password: '',
})

const loginForm = ref(null)

const imageStore = useBingImageStore()
const { bingImageUrl } = storeToRefs(imageStore)

onMounted(async () => {
  await imageStore.fetchBingImage()
})

const authStore = useAuthStore()

const submit = async () => {
  const form = loginForm.value as any
  form.validate(async (valid: boolean) => {
    if (valid) {
      await authStore.login(formData.username, formData.password)
    }
  })
}
</script>

<style scoped>
.login-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
}

.form-content {
  width: 80%;
  max-width: 400px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.form-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.el-form-item {
  width: 100%;
}
</style>
