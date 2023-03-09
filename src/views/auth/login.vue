<template>
  <div class="bg-slate-300 h-screen flex justify-center items-center p-5">
    <div
      class="w-[720px] bg-white md:grid grid-cols-2 rounded-md shadow-md overflow-hidden"
    >
      <div class="p-6">
        <h2 class="text-center text-gray-700 text-lg">会员登录</h2>
        <div class="mt-8">
          <input
            type="text"
            placeholder="请输入手机号或者邮箱"
            class="login-input mt-0"
          />
          <input
            type="password"
            placeholder="请输入密码"
            class="login-input mt-5"
          />
        </div>
        <button class="login-button mt-5">登录</button>

        <div class="flex justify-center gap-2 mt-5">
          <a href="#" class="fast-link">网站首页</a>
          <a href="#" class="fast-link">会员注册</a>
          <a href="#" class="fast-link">忘记密码</a>
        </div>
      </div>
      <div class="hidden md:block">
        <img src="/images/login.jpg" class="h-80 w-full object-cover" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import validate from "@/plugins/validate";
console.log(validate);
const {} = validate;
</script>

<style lang="scss" scoped>
.login-input {
  @apply w-full rounded-md py-1 px-2 outline-none border border-gray-200 focus:border-white placeholder:text-xs focus:ring-2 ring-offset-2 ring-blue-600 duration-300;
}
.login-button {
  @apply w-full py-2 rounded-md text-white tracking-widest bg-blue-600 hover:bg-blue-500 hover:text-gray-200 duration-300;
}
.fast-link {
  @apply text-xs text-gray-500 hover:text-gray-700 duration-300;
}
</style>
