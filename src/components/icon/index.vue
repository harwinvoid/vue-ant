<template>
  <i :class="clazz" :title='title'></i>
</template>
<script>
  const PREFIXCLS = 'anticon'
  export default{
    props: {
      'type': {
        type: String,
        required: true
      },
      className: String,
      title: String,
      spin: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      clazz () {
        return [
          `${PREFIXCLS}`,
          {
            [`${PREFIXCLS}-spin`]: this.spin || this.type === 'loading',
            [`${PREFIXCLS}-${this.type}`]: this.type
          }
        ]
      }
    }
  }
</script>
<style lang="less">
  @import '../../style/index.less';
</style>
