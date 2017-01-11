<template>
  <button :class='clazz' :type='htmlType' :disabled='disabled' @click='handleClick'>
    <a-icon v-if='showIcon' :type='iconType'></a-icon>
    <span v-if='!onlyIcon'>
      <slot></slot>
    </span>
  </button>
</template>
<script type="text/javascript">
  import AIcon from '../icon'
  import {oneOf} from '../../utils'
  const PREFIXCLS = 'ant-btn'
  const TYPE = ['primary', 'default', 'ghost', 'dashed']
  const SHAPE = ['circle', 'circle-outline']
  const SIZE = ['lg', 'sm']
  const CSS_LOADING = 'loading'
  const CSS_ONLYICON = 'icon-only'
  const HTMLTYPE = ['submit', 'button', 'reset']
  // const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/
  // const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar)
  export default {
    beforeMount () {
      this.onlyIcon = this.$slots.default === undefined
    },
    props: {
      type: {
        type: String,
        validator: function (value) {
          return oneOf(value, TYPE)
        },
        default: 'default'
      },
      htmlType: {
        type: String,
        default: 'button',
        validator: function (value) {
          return oneOf(value, HTMLTYPE)
        }
      },
      icon: String,
      shape: {
        type: String,
        validator: function (value) {
          return oneOf(value, SHAPE)
        }
      },
      size: {
        type: String,
        validator: function (value) {
          return oneOf(value, SIZE)
        }
      },
      loading: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        clicked: false,
        onlyIcon: false
      }
    },
    mounted () {
      if (this.clickedTimeout) {
        clearTimeout(this.clickedTimeout)
      }
      if (this.timeout) {
        clearTimeout(this.timeout)
      }
    },
    computed: {
      clazz () {
        return [
          `${PREFIXCLS}`,
          {
            [`${PREFIXCLS}-${this.type}`]: this.type,
            [`${PREFIXCLS}-${this.shape}`]: this.shape,
            [`${PREFIXCLS}-${this.size}`]: this.size,
            [`${PREFIXCLS}-${CSS_LOADING}`]: this.loading,
            [`${PREFIXCLS}-clicked`]: this.clicked,
            [`${PREFIXCLS}-${CSS_ONLYICON}`]: this.onlyIcon && (this.icon || this.loading)
          }
        ]
      },
      showIcon () {
        return this.loading || this.icon
      },
      iconType () {
        return this.loading ? CSS_LOADING : this.icon
      }
    },
    components: {
      AIcon
    },
    methods: {
      _isString (str) {
        return typeof str === 'string'
      },
      handleClick () {
        this.clicked = false
        this.clickedTimeout = setTimeout(() => {
          this.clicked = true
        }, 10)
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.clicked = false
        }, 500)
        this.$emit('click')
      }
    }
  }
</script>
<style lang="less">
  @import '../button-group/style/index.less';
  @import '../button-group/style/mixin.less';
</style>
