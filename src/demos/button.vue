<template>
  <div class="main-wrapper">
    <div class="ant-row">
      <div class="ant-col-12 code-boxes-col-2-1" style="padding-left: 8px; padding-right: 8px;">
        <section class="code-box" id="components-button-demo-basic">
          <section class="code-box-demo">
            <a-button style='primary'  text='Primary'></a-button>
            <a-button style='default'  text='Default' ></a-button>
            <a-button style='ghost' text='Ghost'></a-button>
            <a-button style='dashed' text='Dashed'></a-button>
          </section>
        </section>
        <section class="code-box" id="components-button-demo-size">
          <section class="code-box-demo">
            <a-button style='primary'   size='large' text='Large'></a-button>
            <a-button style='primary'   text='Default'></a-button>
            <a-button style='primary'   size='small' text='Small'></a-button>
          </section>
        </section>

        <section class="code-box" id="components-button-demo-loading">
          <section class="code-box-demo">
            <a-button style='primary'   text='Loading' loading></a-button>
            <a-button style='primary'   size='small' text='Loading' loading></a-button>
            <br>
            <a-button style='primary'    text='Click me!' @click='loadingWithOutIcon' v-ref:loadingDemo1></a-button>
            <a-button style='primary'   icon='poweroff' text='Click me!' @click='loadingWithIcon' v-ref:loadingDemo2></a-button>
          </section>
        </section>

      </div>
      <div class="ant-col-12 code-boxes-col-2-1" style="padding-left: 8px; padding-right: 8px;">
        <section class="code-box" id="components-button-demo-icon">
          <section class="code-box-demo">
            <a-button style='primary'  icon='search' shape='circle'></a-button>
            <a-button style='primary'  icon='search' text='搜索' ></a-button>
            <br>
            <a-button style='ghost'  icon='search' shape='circle'></a-button>
            <a-button style='ghost'  icon='search' text='搜索' ></a-button>
          </section>
        </section>
        <section class="code-box" id="components-button-demo-disabled">
          <section class="code-box-demo">
            <a-button style='primary' text='Primary'></a-button>
            <a-button style='primary' text='Primary(disabled)' disabled></a-button>
            <br>
            <a-button  text='Default'></a-button>
            <a-button  text='Default(disabled)' disabled></a-button>
            <br>
            <a-button style='ghost'  text='Ghost'></a-button>
            <a-button style='ghost'  text='Ghost(disabled)' disabled ></a-button>
            <br>
            <a-button style='dashed'  text='Dashed'></a-button>
            <a-button style='dashed'  text='Dashed(disabled)' disabled ></a-button>
          </section>
        </section>
        <section class="code-box" id="components-button-demo-group">
          <section class="code-box-demo">
            <a-button-group>
              <a-button  text='Cancel'></a-button>
              <a-button style='primary' text='OK'></a-button>
            </a-button-group>
            <a-button-group>
              <a-button text='L' disabled></a-button>
              <a-button text='M' disabled></a-button>
              <a-button text='R' disabled></a-button>
            </a-button-group>
            <br>
            <a-button-group>
              <a-button style='primary'>
                <a-icon type='left'></a-icon>
                <span>Go back</span>
              </a-button>
              <a-button style='primary'>
                <span>Go forward</span>
                <a-icon type='right'></a-icon>
              </a-button>
            </a-button-group>
            <a-button-group>
              <a-button style='primary' icon='cloud'></a-button>
              <a-button style='primary' icon='cloud-download'></a-button>
            </a-button-group>
            <br>
            <a-button-group size='large'>
              <a-button style='ghost' text='Large'></a-button>
              <a-button style='ghost' text='Large'></a-button>
            </a-button-group>
            <a-button-group>
              <a-button style='ghost' text='Default'></a-button>
              <a-button style='ghost' text='Default'></a-button>
            </a-button-group>
            <a-button-group size='small'>
              <a-button style='ghost' text='Small'></a-button>
              <a-button style='ghost' text='Small'></a-button>
            </a-button-group>
          </section>
        </section>
      </div>


    </div>
  </div>

</template>
<script>
  import {AButton, AButtonGroup, AIcon} from '../components'
  export default {
    components: {
      AButton,
      AIcon,
      AButtonGroup
    },
    methods: {
      loadingWithOutIcon () {
        this.$refs.loadingdemo1.loading = true
      },
      loadingWithIcon () {
        this.$refs.loadingdemo2.loading = true
      }

    }
  }
</script>
<style>
  @import "index.css";
  [id^="components-button-demo-"] .ant-btn {
    margin-right: 8px;
    margin-bottom: 12px;
  }
  .code-box .code-box-demo {
    border-bottom: 1px solid #e9e9e9;
    padding: 42px 20px 50px;
  }
  #components-button-demo-group .ant-btn {
    margin-right: 0;
  }
  #components-button-demo-group .ant-btn-group {
    margin-right: 8px;
  }


</style>
