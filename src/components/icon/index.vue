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
      title: String
    },
    computed: {
      clazz () {
        let classArray = [this.className, PREFIXCLS]
        classArray.push(PREFIXCLS + '-' + this.type)
        return classArray
      }
    }
  }
</script>
<style lang="less">
  @import '../../style/index.less';
</style>
