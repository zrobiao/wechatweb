<template>
  <div :style="bigContainer" class="big-container">
    <top-bar :title="topTitle" :show-user="isShowUser"/>
    <div v-if="orderType === 'buy'">
      <div v-if="showList" class="order-listbox" @click="jumpDetail(orderType,orderId)">
        <div class="order-listlft">
          <div v-if="videoName === '腾讯视频'" class="order-imgbox tecentbtn">
            <div class="btn-icon">
              <img src="../../static/images/tecent.png">
            </div>
            <div class="btn-bgbox">
              <img src="../../static/images/btn_bg.png">
            </div>
          </div>
          <div v-if="videoName === '爱奇艺视频'" class="order-imgbox aqiyibtn">
            <div class="btn-icon">
              <img src="../../static/images/aqiyi.png">
            </div>
            <div class="btn-bgbox">
              <img src="../../static/images/btn_bg.png">
            </div>
          </div>
          <div v-if="videoName === '优酷视频'" class="order-imgbox youkubtn">
            <div class="btn-icon">
              <img src="../../static/images/youku.png">
            </div>
            <div class="btn-bgbox">
              <img src="../../static/images/btn_bg.png">
            </div>
          </div>
          <div v-if="videoName === '芒果TV视频'" class="order-imgbox mgtvbtn">
            <div class="btn-icon">
              <img src="../../static/images/mangg.png">
            </div>
            <div class="btn-bgbox">
              <img src="../../static/images/btn_bg.png">
            </div>
          </div>
          <div class="order-txtbox">
            <h3>{{ videoName }}</h3>
            <p>
              <span>￥{{ videoPrice }}</span>
              &nbsp;&nbsp;
              {{ orderTime }}
            </p>
          </div>
        </div>
        <div class="order-listrht">
          <img src="../../static/images/right.png" alt="">
        </div>
      </div>
      <div v-else class="order-null">
        <p>当前没有相关交易数据</p>
      </div>
    </div>
    <div v-if="orderType === 'pay'">
      <div v-if="showList" class="order-listbox" @click="jumpDetail(orderType,orderId)">
        <div class="order-listlft">
          <div v-if="videoName === '腾讯视频'" class="order-imgbox tecentbtn">
            <div class="btn-icon">
              <img src="../../static/images/tecent.png">
            </div>
            <div class="btn-bgbox">
              <img src="../../static/images/btn_bg.png">
            </div>
          </div>
          <div v-if="videoName === '爱奇艺视频'" class="order-imgbox aqiyibtn">
            <div class="btn-icon">
              <img src="../../static/images/aqiyi.png">
            </div>
            <div class="btn-bgbox">
              <img src="../../static/images/btn_bg.png">
            </div>
          </div>
          <div v-if="videoName === '优酷视频'" class="order-imgbox youkubtn">
            <div class="btn-icon">
              <img src="../../static/images/youku.png">
            </div>
            <div class="btn-bgbox">
              <img src="../../static/images/btn_bg.png">
            </div>
          </div>
          <div v-if="videoName === '芒果TV视频'" class="order-imgbox mgtvbtn">
            <div class="btn-icon">
              <img src="../../static/images/mangg.png">
            </div>
            <div class="btn-bgbox">
              <img src="../../static/images/btn_bg.png">
            </div>
          </div>
          <div class="order-txtbox">
            <h3>{{ videoName }}</h3>
            <p>
              <span>￥{{ videoPrice }}</span>
              &nbsp;&nbsp;
              {{ orderTime }}
            </p>
          </div>
        </div>
        <div class="order-listrht">
          <img src="../../static/images/right.png" alt="">
        </div>
      </div>
      <div v-else class="order-null">
        <p>当前没有相关交易数据</p>
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
      bigContainer: {
        height: '',
        width: ''
      },
      topTitle: '我的订单',
      isShowUser: true,
      showList: true,
      videoName: '芒果TV视频',
      videoPrice: '15',
      orderTime: '2019-09-09 15:30:29',
      orderType: 'buy',
      orderList: [],
      orderId: 0
    }
  },
  created() {
    this.getCurrentHeight()
    this.getUrlQuery()
  },
  methods: {
    getUrlQuery() {
      this.orderType = this.$route.query.orderType
      if (this.orderType === 'buy') {
        this.topTitle = '我的订单';
      } else {
        this.topTitle = '我的充值';
      }
    },
    getCurrentHeight() {
      const innerWidth = window.innerWidth
      const innerHeight = window.innerHeight
      this.bigContainer.width = innerWidth + 'px';
      this.bigContainer.height = innerHeight + 'px';
    },
    jumpDetail(type, id) {
      if (type === 'buy') {
        console.log('跳转购买详情')
        this.$router.push({
          path: '/orderdetail',
          query: {
            orderType: type,
            orderId: id
          }
        })
      } else {
        console.log('跳转充值详情')
        this.$router.push({
          path: '/orderdetail',
          query: {
            orderType: type,
            orderId: id
          }
        })
      }
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.big-container {
  padding-top: 50px;
  background: #f2f2f2;
  & .order-listbox {
    margin-top: 10px;
    background: #fff;
    padding: 12px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & .order-listlft {
      display: flex;
      justify-content: left;
      align-items: center;
      & .order-imgbox {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        padding: 20px 16px;
        border-radius: 6px;
        & .btn-icon {
          width: 80px;
          height: auto;
          & > img {
            width: 100%;
            height: auto;
          }
        }
        & .btn-bgbox {
          position: absolute;
          top: 1px;
          right: 1px;
          width: 15%;
          height: auto;
          & > img {
            width: 100%;
            height: auto;
          }
        }
      }
      & .tecentbtn {
        background: rgba(63, 203, 238, 1);
        box-shadow: 0px 2px 3px 0px rgba(6, 144, 91, 0.35);
      }
      & .aqiyibtn {
        background: rgba(104, 187, 55, 1);
        box-shadow: 0px 5px 12px 0px rgba(55, 13, 128, 0.35);
      }
      & .youkubtn {
        background: rgba(0, 186, 255, 1);
        box-shadow: 0px 5px 12px 0px rgba(7, 92, 64, 0.35);
      }
      & .mgtvbtn {
        background: rgba(237, 106, 0, 1);
        box-shadow: 0px 5px 12px 0px rgba(101, 10, 51, 0.35);
      }
      & .order-txtbox {
        margin-left: 10px;
        text-align: left;
        & h3 {
          margin: 5px 0;
          font-size: 14px;
          color: #323232;
        }
        & p {
          color: #909090;
          font-size: 12px;
          margin: 8px 0;
          & span {
            font-size: 14px;
            color: #da2a13;
          }
        }
      }
    }
    & .order-listrht {
      width: 10px;
      height: auto;
      & img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>

