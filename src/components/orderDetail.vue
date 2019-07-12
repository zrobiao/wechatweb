<template>
  <div :style="bigContainer" class="big-container">
    <top-bar :title="topTitle" :show-user="isShowUser"/>
    <div class="">
      <div class="order-listbox">
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
            <h3>{{ videoName+videoType }}</h3>
            <p>
              <span>会员价：￥{{ vipPrice }}</span>
            </p>
          </div>
        </div>
        <div class="order-listrht">
          <p>原价{{ nomalPrice }}</p>
        </div>
      </div>
      <div class="price-list">
        <div v-if="orderType === 'pay'" class="price">
          <p>时间</p>
          <p>{{ payDay }}天</p>
        </div>
        <div class="price">
          <p>单价</p>
          <p>￥{{ nomalPrice }}</p>
        </div>
        <div class="price">
          <p>优惠</p>
          <p>-￥{{ minusPrice }}</p>
        </div>
        <div class="price">
          <p>合计</p>
          <h5>￥{{ payPrice }}</h5>
        </div>
      </div>
      <div class="price-list">
        <div class="price">
          <p>
            订单编号:
            <span>{{ orderDetial.orderNum }}</span>
          </p>
        </div>
        <div class="price">
          <p>
            下单时间:
            <span>{{ orderDetial.orderTime }}</span>
          </p>
        </div>
        <div class="price">
          <p>
            订单状态:
            <span v-if="orderDetial.orderStatus == 0" class="green">已完成</span>
            <span v-if="orderDetial.orderStatus == 1" class="red">已关闭</span>
          </p>
        </div>
      </div>
    </div>
    <div v-if="orderType === 'buy'" class="convert-content">
      <div class="convert-box">
        <p>
          兑换码：
          <span>{{ orderDetial.convertNum }}</span>
        </p>
        <button
          :data-clipboard-text="orderDetial.convertNum"
          type="button"
          class="copybtn"
          @click="copyConvertNum()"
        >复制</button>
      </div>
      <div class="order-explain">
        <h5>使用说明:</h5>
        <p>购买成功，在订单详情页面复制兑换码，点击前往兑换按钮，到兑换页面进行兑换，兑换成功即可登录相应视频平台享受会员权益。</p>
      </div>
      <button type="button" class="convert-btn" @click="goConvertUrl()">前往兑换</button>
    </div>
  </div>
</template>
<script>
import topBar from '@/components/topback';
import { Toast } from 'mint-ui';
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
      orderType: '',
      videoName: '腾讯视频',
      topTitle: '订单详情',
      isShowUser: true,
      videoType: '会员卡',
      vipPrice: 15,
      payDay: 7,
      nomalPrice: 20,
      payPrice: 15,
      minusPrice: 0,
      orderDetial: {
        orderNum: '1345678952223',
        orderTime: '2019-09-09 15:30:29',
        orderStatus: 0,
        convertNum: '369852147'
      }
    }
  },
  created() {
    this.getCurrentHeight()
    this.getUrlQuery()
  },
  methods: {
    getCurrentHeight() {
      const innerWidth = window.innerWidth
      const innerHeight = window.innerHeight
      this.bigContainer.width = innerWidth + 'px';
      this.bigContainer.height = innerHeight + 'px';
    },
    getUrlQuery() {
      this.orderType = this.$route.query.orderType
      if (this.orderType === 'buy') {
        this.topTitle = '订单详情';
        this.videoType = '会员卡';
      } else {
        this.topTitle = '充值详情';
        this.videoType = '充值卡';
      }
    },
    copyConvertNum() {
      const clipboard = new this.clipboard('.copybtn')
      clipboard.on('success', function() {
        Toast({
          message: '复制成功',
          duration: 1000
        })
      })
      clipboard.on('error', function() {
        Toast({
          message: '复制失败',
          duration: 1000
        })
      })
    },
    goConvertUrl() {
      window.location.href = 'https://www.baidu.com';
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
            color: #909090;
          }
        }
      }
    }
    & .order-listrht {
      width: auto;
      height: auto;
      display: flex;
      align-items: bottom;
      & p {
        font-size: 14px;
        letter-spacing: 1px;
        color: #909090;
        text-decoration: line-through;
      }
    }
  }
  & .price-list {
    background: #fff;
    padding: 10px 15px;
    margin-top: 10px;
    & .price {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 6px 0;
      & p {
        color: #909090;
        font-size: 14px;
        margin: 0;
        & span {
          color: #323232;
        }
        & .green {
          color: #00af55;
        }
        & .red {
          color: #da2a13;
        }
      }
      & h5 {
        color: #da2a13;
        font-size: 14px;
        margin: 0;
      }
    }
  }
  & .convert-content {
    margin-top: 10px;
    & .convert-box {
      padding: 10px 15px;
      background: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      & p {
        font-size: 14px;
        color: #909090;
        & span {
          color: #323232;
        }
      }
      & button {
        border: 1px solid rgba(0, 175, 85, 1);
        border-radius: 6px;
        background: #fff;
        padding: 4px 12px;
        color: #00af55;
      }
    }
    & .order-explain {
      text-align: left;
      color: #909090;
      font-size: 12px;
      padding: 15px;
      & h5 {
        font-size: 12px;
        color: #646464;
        margin: 10px 0;
      }
    }
    & .convert-btn {
      margin-top: 30px;
      width: 80%;
      background: rgba(0, 175, 85, 1);
      box-shadow: 0px 8px 14px 0px rgba(6, 50, 29, 0.3);
      border-radius: 44px;
      color: #fff;
      padding: 15px 0;
      border: none;
      font-size: 16px;
      letter-spacing: 2px;
      font-weight: 500;
    }
  }
}
</style>

