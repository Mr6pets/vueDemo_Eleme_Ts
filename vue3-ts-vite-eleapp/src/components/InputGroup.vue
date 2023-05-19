
<template>

  <div class="text-group">
    <div class="input-group" :class="{'is-invalid':true}">
      <input :type="type" :value="modelValue" :placeholder="placeholder">
      <button v-if="btnTitle" :disabled="disabled">{{ btnTitle }}</button>
    </div>
  </div>

  <div v-if="error" class="invalid-feedback">{{ error }}</div>

</template>

<script setup lang="ts">
interface PropsType{
  modelValue: string,
  type: string,
  placeholder: string,
  btnTitle:string,
  disabled: boolean,
  error:string,//报错信息
}
withDefaults(defineProps<PropsType>(), {
  type: "",
  modelValue: "",
  placeholder: "",
  btnTitle: "",
  disabled: false,
  error: "",
  
  })
</script>

<style lang="scss" scoped>

</style>