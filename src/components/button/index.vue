<template>
  <button :class='clazz' :type='type' :disabled='disabled'>
    <slot>
    <a-icon v-if='showIcon' :type='iconType'></a-icon>
    <span v-if='!!text'>{{innerText}}</span>
    </slot>
  </button>
</template>
<script type="text/javascript">
  import AIcon from '../icon'
  const PREFIXCLS = 'ant-btn'
  const STYLE = ['primary', 'default', 'ghost', 'dashed']
  const SHAPE = ['circle', 'circle-outline']
  const SIZE = ['large', 'small']
  const CSS_LOADING = 'loading'
  const CSS_ONLYICON = 'icon-only'
  const HTMLTYPE = ['submit', 'button', 'reset']
  const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/
  const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar)
  export default{
    props: {
      style: {
        type: String,
        validator: function (value) {
          if (value) return STYLE.indexOf(value) !== -1
        },
        default: 'default'
      },
      'type': {
        type: String,
        default: 'button',
        validator: function (value) {
          return HTMLTYPE.indexOf(value) !== -1
        }
      },
      icon: String,
      shape: {
        type: String,
        validator: function (value) {
          return SHAPE.indexOf(value) !== -1
        }
      },
      size: {
        type: String,
        validator: function (value) {
          return SIZE.indexOf(value) !== -1
        }

      },
      loading: {
        type: Boolean,
        default: false
      },
      text: String,
      disabled: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      clazz () {
        let classArray = [PREFIXCLS]
        if (this.style !== STYLE[1]) classArray.push(PREFIXCLS + '-' + this.style)
        if (this.shape) classArray.push(PREFIXCLS + '-' + this.shape)
        if (this.size) classArray.push(PREFIXCLS + '-' + (this.size === SIZE[0] ? 'lg' : 'sm'))
        if (this.loading) classArray.push(PREFIXCLS + '-' + CSS_LOADING)
        if (!this.text && this.icon) classArray.push(PREFIXCLS + '-' + CSS_ONLYICON)
        return classArray
      },
      showIcon () {
        let flag = false
        if (this.loading) flag = true
        if (this.icon) flag = true
        return flag
      },
      iconType () {
        let type = ''
        if (this.loading) type = 'loading'
        if (this.icon && !this.loading) type = this.icon
        return type
      },
      innerText () {
        if (this._isString(this.text)) {
          if (isTwoCNChar(this.text)) {
            this.text = this.text.split('').join(' ')
          }
        }
        return this.text
      }
    },
    components: {
      AIcon
    },
    methods: {
      _isString (str) {
        return typeof str === 'string'
      }
    }
  }
</script>
<style lang="less">
  @import '../button-group/style/index.less';
  @import '../button-group/style/mixin.less';
</style>
