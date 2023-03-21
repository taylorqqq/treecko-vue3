<template>
  <Form
    class="bg-slate-300 h-screen flex justify-center items-center p-5"
    @submit="handleLogin"
    :validation-schema="schema"
    #default="{ errors }"
  >
    <!-- {{ errors }} -->
    <div
      class="w-[720px] bg-white md:grid grid-cols-2 rounded-md shadow-md overflow-hidden"
    >
      <div class="p-6 flex flex-col justify-between">
        <div>
          <h2 class="text-center text-gray-700 text-lg">会员登录</h2>
          <div class="mt-8">
            <Field
              name="account"
              label="账号"
              placeholder="请输入手机号或者邮箱"
              class="login-input mt-0"
              value="treecko@163.com"
            ></Field>
            <!-- <ErrorMessage name="account" as="div" class="validate-error" /> -->
            <div v-if="errors.account" class="validate-error">
              请输入手机号或者邮箱
            </div>
            <Field
              name="password"
              label="密码"
              placeholder="请输入密码"
              class="login-input mt-5"
              type="password"
              value="123456"
            ></Field>
            <ErrorMessage name="password" as="div" class="validate-error" />
          </div>
          <button class="login-button mt-5">登录</button>

          <div class="flex justify-center mt-3">
            <i
              class="fa-brands fa-weixin bg-green-600 text-white rounded-full p-1 cursor-pointer"
            ></i>
          </div>
        </div>

        <div class="flex justify-center gap-2 mt-5">
          <a href="#" class="fast-link">网站首页</a>
          <a href="#" class="fast-link">会员注册</a>
          <a href="#" class="fast-link">忘记密码</a>
        </div>
      </div>
      <div class="hidden md:block relative">
        <img
          src="/images/login.jpg"
          class="w-full h-full object-cover absolute"
        />
      </div>
    </div>
  </Form>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import validate from "@/plugins/validate";
import "@/style/global.scss";
import { useUserStore } from "@/store/userStore";
import { useRouter } from "vue-router";
import { local } from "@/utils";
import { CacheEnum } from "@/enum/cacheEnum";
const router = useRouter();
const { Form, Field, ErrorMessage } = validate;

/**
 * 1. 使用yup验证
 */
const schema = validate.yup.object({
  account: validate.yup
    .string()
    .required()
    .matches(
      /^1[3456789]\d{9}$|^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
      "请输入手机号或者邮箱"
    )
    .label("账号"),
  password: validate.yup.string().required().min(6).label("密码"),
});

/**
 * 2. 使用vee-validate验证
 */
// const schema = {
//   account: {
//     required: true,
//     // 邮箱或者手机号
//     regex:
//       /^1[3456789]\d{9}$|^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
//   },
//   password: {
//     required: true,
//     min: 6,
//   },
// };

const handleLogin = async (values: any) => {
  const code = await useUserStore().toLogin(values);
  const name = local.get(CacheEnum.REDIRECT_ROUTE_KEY) ?? "home";
  if (code == 200) router.push({ name });
  local.remove(CacheEnum.REDIRECT_ROUTE_KEY);
};
</script>

<style lang="scss" scoped></style>
