<template>
  <div class="top-container">
    <mt-header :title="title" fixed class="header">
      <div slot="left" @click="backPage(0)">
        <mt-button icon="back"/>
      </div>
      <div v-if="showUser" slot="right" class="right-box" @click="backPage(1)">
        <img src="../../static/images/user.png" alt="">
      </div>
    </mt-header>
  </div>
</template>
<script>
import { Header } from 'mint-ui';
export default {
  components: {
    Header
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    showUser: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      topTt: '视频'
    }
  },
  methods: {
    backPage(e) {
      if (e == 0) {
        this.$router.go(-1)
      }
      this.$router.push({
        path: '/usercenter'
      })
    }
  }
}
</script>
<style scoped>
.top-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.header {
  background: #08c556;
  /* border-bottom: 1px solid #06321d; */
  height: 50px;
}
.right-box {
  width: 100%;
  height: auto;
}
.right-box img {
  width: 24px;
  height: 24px;
}
</style>

