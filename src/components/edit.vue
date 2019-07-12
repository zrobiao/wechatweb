<template>
  <div class="big-container">
    <top-bar :title="topTitle"/>
    <div class="edit-content">
      <div>
        <mt-field
          v-model="phoneNum"
          label="手机号"
          type="tel"
          placeholder="请输入电话"
          class="field-input"
        />
      </div>
      <mt-button class="button infoButton" type="primary" size="large" @click="saveClick">保存</mt-button>
    </div>
  </div>
</template>
<script>
// import utils from './../utils';
import utils from '@/utils/index';
import { Button, Field } from 'mint-ui';
import topBar from '@/components/topback';
export default {
  components: {
    Button,
    Field,
    topBar
  },
  data() {
    return {
      msg: '这里是编辑电话号码页！',
      phoneNum: '',
      topTitle: '编辑手机号'
    }
  },
  created() {
    this.phoneNum = this.$route.query.phone
  },
  methods: {
    saveClick() {
      const trimPhone = utils.trimStr(this.phoneNum, 1)
      console.log('保存信息' + trimPhone)
    }
  }
}
</script>
<style scoped>
.big-container {
  padding: 50px 0 0;
}
.edit-content {
  padding: 10px 15px;
}
.edit-content > div {
  margin-bottom: 10px;
}
.field-input {
  border: 1px solid #f7f7f7;
}
</style>

