<template>
  <div :class='clazz'>
    <slot></slot>
  </div>
</template>
<script>
  const PREFIXCLS = 'ant-btn-group'
  const GROUP_SIZE = ['small', 'large']
  export default{
    props: {
      size: {
        type: String,
        validator: function (value) {
          return GROUP_SIZE.indexOf(value) !== -1
        }
      }
    },
    computed: {
      clazz () {
        let classArray = [PREFIXCLS]
        if (this.size) classArray.push(PREFIXCLS + '-' + (this.size === GROUP_SIZE[0] ? 'sm' : 'lg'))
        return classArray
      }
    }
  }
</script>
<style lang="less">
  @import 'style/index.less';
  @import 'style/mixin.less';
</style>