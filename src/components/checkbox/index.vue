<template>
  <label class="{{PREFIXCLS}}-wrapper">
    <span class="ant-checkbox" :class="{'ant-checkbox-checked': checked, 'ant-checkbox-checked-1': checked, 'ant-checkbox-disabled': disabled}">
      <span class="{{PREFIXCLS}}-inner"></span>
      <input type="checkbox" class="{{PREFIXCLS}}-input" v-model='checked' :checked="checked" :disabled="disabled">
    </span>
    <span><slot></slot></span>
  </label>
</template>
<script>
  export default{
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      checked: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        PREFIXCLS: 'ant-checkbox'
      }
    },
    watch: {
      checked (newValue) {
        this.$emit('on-change', newValue)
      }
    },
    methods: {
      getValue () {
        return this.checked
      },
      toggle () {
        this.checked = !this.checked
      }
    }

  }
</script>
<style lang="less">
  @import 'style/index.less';
  @import 'style/mixin.less';
</style>