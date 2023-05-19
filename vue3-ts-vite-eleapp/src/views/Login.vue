<script setup>
import { ref } from "vue";
import InputGroup from "@/components/InputGroup.vue";
const typeNumber = ref("number");
const phone = ref("");
const placeholder = ref("手机号");
const btnTitle = ref("获取验证码");
const disabled = ref(false);
const phoneError = ref("手机号输入有误");

</script>


<template>
  <div class="login-component">
    <div class="logo">
      <img src="../assets/logo.jpg" alt="">
    </div>
   
    <InputGroup :type="typeNumber" v-model="phone" :placeholder="手机号" :btnTitle="btnTitle
    " :disabled="disabled" :error="phoneError" />

    <div class="text-group">
      <div class="input-group">
        <input type="text" placeholder="验证码">
      </div>
    </div>

    <div class="login-des">
      <p>新用户登录即自动登录，表示已同意<span>《用户服务协议》</span></p>
    </div>

    <div class="login-btn">
      <button>登录</button>
    </div>

  </div>
</template>



<style lang="scss" scoped>

</style>