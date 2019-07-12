<template>
  <div :style="bigContainer" class="big-container">
    <top-bar :title="topTitle" :show-user="isShowUser"/>
    <div :style="currentheight" class="user-topbox">
      <div class="user-content">
        <div class="user-avatar">
          <img src="../../static/images/avatar.png" alt="">
        </div>
        <div class="user-txt">
          <h4>{{ userName }}</h4>
          <p>{{ userPhone }}</p>
        </div>
      </div>
      <div class="user-edit" @click="goEdit(userPhone)">编辑</div>
    </div>
    <div class="user-middlebox">
      <div class="user-bar" @click="jumpOrderList(0)">
        <div class="user-barlft">
          <img src="../../static/images/order_icon.png" alt="">
          <p>我的订单</p>
        </div>
        <div class="user-barrgt">
          <img src="../../static/images/right.png" alt="">
        </div>
      </div>
      <div class="user-bar" @click="jumpOrderList(1)">
        <div class="user-barlft">
          <img src="../../static/images/order_icon.png" alt="">
          <p>充值记录</p>
        </div>
        <div class="user-barrgt">
          <img src="../../static/images/right.png" alt="">
        </div>
      </div>
      <div class="user-bar">
        <div class="user-barlft">
          <img src="../../static/images/kefu_icon.png" alt="">
          <p>客服电话</p>
        </div>
        <div class="user-barrgt">
          <p>4001096138</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import topBar from '@/components/topback.vue';
export default {
  components: {
    topBar
  },
  data() {
    return {
      currentheight: {
        height: '',
        width: ''
      },
      bigContainer: {
        height: '',
        width: ''
      },
      topTitle: '个人中心',
      isShowUser: false,
      userName: '张先生',
      userPhone: '13639254520'
    }
  },
  created() {
    this.getCurrentHeight()
  },
  methods: {
    getCurrentHeight() {
      const innerWidth = window.innerWidth
      const innerHeight = window.innerHeight
      this.currentheight.width = innerWidth + 'px';
      this.bigContainer.width = innerWidth + 'px';
      this.bigContainer.height = innerHeight + 'px';
      this.currentheight.height = innerWidth / 2.34 + 'px';
    },
    jumpOrderList(type) {
      if (type == 0) {
        this.$router.push({
          path: '/orderlist',
          query: {
            orderType: 'buy'
          }
        })
      } else {
        this.$router.push({
          path: '/orderlist',
          query: {
            orderType: 'pay'
          }
        })
      }
    },
    goEdit(phone) {
      this.$router.push({
        path: '/edit',
        query: {
          phone: phone
        }
      })
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.big-container {
  padding-top: 50px;
  background: #f2f2f2;
  & .user-topbox {
    background-image: url(../../static/images/user_bg.png);
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    & .user-content {
      width: 70%;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      & .user-avatar {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        margin-right: 10px;
        & img {
          width: 100%;
          height: 100%;
        }
      }
      & .user-txt {
        color: #fff;
        text-align: left;
        & h4 {
          font-size: 14px;
          margin: 6px;
        }
        & p {
          margin: 0;
          font-size: 14px;
        }
      }
    }
    & .user-edit {
      color: #fff;
      font-size: 12px;
    }
  }
  & .user-middlebox {
    & .user-bar {
      margin-top: 10px;
      background: #fff;
      padding: 8px 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      & .user-barlft {
        display: flex;
        justify-content: center;
        align-items: center;
        & img {
          width: auto;
          height: 22px;
          margin-right: 10px;
        }
        & p {
          color: #323232;
          font-size: 14px;
        }
      }
      .user-barrgt {
        & img {
          width: 10px;
          height: 18px;
        }
        & p {
          color: #00af55;
          font-size: 16px;
          font-weight: 700;
          margin: 0;
        }
      }
    }
  }
}
</style>

