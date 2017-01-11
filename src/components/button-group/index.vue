<template>
  <div :class='clazz'>
    <slot></slot>
  </div>
</template>
<script>
  import {oneOf} from '../../utils'
  const PREFIXCLS = 'ant-btn-group'
  const GROUP_SIZE = ['sm', 'lg']
  export default{
    props: {
      size: {
        type: String,
        validator: function (value) {
          return oneOf(value, GROUP_SIZE)
        }
      }
    },
    computed: {
      clazz () {
        return [
          `${PREFIXCLS}`,
          {
            [`${PREFIXCLS}-${this.size}`]: this.size
          }
        ]
      }
    }
  }
</script>
<style lang="less">
  @import 'style/index.less';
  @import 'style/mixin.less';
</style>
