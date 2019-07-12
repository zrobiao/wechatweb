<template>
  <div class="big-container">
    <top-bar :title="videoName" :show-user="isShowUser"/>
    <div :style="currentheight" class="video-topbox">
      <div
        v-if="videoName =='腾讯VIP'"
        :class="videoName == '腾讯VIP'?'tecent':''"
        class="video-cardbox"
      >
        <img src="../../static/images/vip.png" class="vipimg">
        <img src="../../static/images/card_bg.png" class="cardbgimg">
        <div class="video-txtcontent">
          <div class="video-iconbox tecent">
            <img src="../../static/images/tecent_big.png" alt="">
          </div>
          <h2>
            {{ videoName }}
            <span v-if="isPay">会员卡</span>
            <span v-else>充值卡</span>
          </h2>
        </div>
      </div>
      <div
        v-if="videoName =='爱奇艺VIP'"
        :class="videoName == '爱奇艺VIP'?'aqiyi':''"
        class="video-cardbox"
      >
        <img src="../../static/images/vip.png" class="vipimg">
        <img src="../../static/images/card_bg.png" class="cardbgimg">
        <div class="video-txtcontent">
          <div class="video-iconbox aqiyi">
            <img src="../../static/images/aqiyi_big.png" alt="">
          </div>
          <h2>
            {{ videoName }}
            <span v-if="isPay">会员卡</span>
            <span v-else>充值卡</span>
          </h2>
        </div>
      </div>
      <div
        v-if="videoName =='优酷VIP'"
        :class="videoName == '优酷VIP'?'youku':''"
        class="video-cardbox"
      >
        <img src="../../static/images/vip.png" class="vipimg">
        <img src="../../static/images/card_bg.png" class="cardbgimg">
        <div class="video-txtcontent">
          <div class="video-iconbox youku">
            <img src="../../static/images/youku_big.png" alt="">
          </div>
          <h2>
            {{ videoName }}
            <span v-if="isPay">会员卡</span>
            <span v-else>充值卡</span>
          </h2>
        </div>
      </div>
      <div
        v-if="videoName =='芒果TVVIP'"
        :class="videoName == '芒果TVVIP'?'mgtv':''"
        class="video-cardbox"
      >
        <img src="../../static/images/vip.png" class="vipimg">
        <img src="../../static/images/card_bg.png" class="cardbgimg">
        <div class="video-txtcontent">
          <div class="video-iconbox mgtv">
            <img src="../../static/images/mangg_big.png" alt="">
          </div>
          <h2>
            {{ videoName }}
            <span v-if="isPay">会员卡</span>
            <span v-else>充值卡</span>
          </h2>
        </div>
      </div>
      <div class="video-img">
        <img src="../../static/images/explain_bg1.png" alt="">
      </div>
    </div>
    <div class="video-middlebox">
      <div class="video-switch">
        <button :class="!isPay?'choosebtn':'currentbtn'" type="button" @click="tabBuy(0)">月卡</button>
        <button :class="isPay?'choosebtn':'currentbtn'" type="button" @click="tabBuy(1)">充值卡</button>
      </div>
      <div v-if="!isPay">
        <div class="video-phonebox">
          <input v-model="phoneNum" type="text" placeholder="请输入手机号码进行充值">
        </div>
        <div class="video-stepbox">
          <h5>
            <img src="../../static/images/time_icon.png" alt="">充值天数
          </h5>
          <div v-if="videoId == 0" class="choosebox">
            <div class="paybox">
              <h5>30天会员</h5>
              <h3>￥{{ tecentVipPay }}</h3>
              <p>原价{{ tecentPay }}</p>
            </div>
            <div class="paybox">
              <h5>7天会员</h5>
              <h3>￥{{ tecentVipPayWeek }}</h3>
              <p>原价{{ tecentPayWeek }}</p>
            </div>
          </div>
          <div v-if="videoId == 1" class="choosebox">
            <div class="paybox">
              <h5>30天会员</h5>
              <h3>￥{{ aqiyiVipPay }}</h3>
              <p>原价{{ aqiyiPay }}</p>
            </div>
            <div class="paybox">
              <h5>7天会员</h5>
              <h3>￥{{ aqiyiVipPayWeek }}</h3>
              <p>原价{{ aqiyiPayWeek }}</p>
            </div>
          </div>
          <div v-if="videoId == 2" class="choosebox">
            <div class="paybox">
              <h5>30天会员</h5>
              <h3>￥{{ youkuVipPay }}</h3>
              <p>原价{{ youkuPay }}</p>
            </div>
            <div class="paybox">
              <h5>7天会员</h5>
              <h3>￥{{ youkuVipPayWeek }}</h3>
              <p>原价{{ youkuPayWeek }}</p>
            </div>
          </div>
          <div v-if="videoId == 3" class="choosebox">
            <div class="paybox">
              <h5>30天会员</h5>
              <h3>￥{{ mgtvVipPay }}</h3>
              <p>原价{{ mgtvPay }}</p>
            </div>
            <div class="paybox">
              <h5>7天会员</h5>
              <h3>￥{{ mgtvVipPayWeek }}</h3>
              <p>原价{{ mgtvPayWeek }}</p>
            </div>
          </div>
        </div>
        <div class="video-stepbox">
          <h5>
            <img src="../../static/images/explain_icon.png" alt="">充值说明
          </h5>
          <p>1、腾讯视频VIP会员充值支持QQ号充值</p>
          <p>2、充值成功会员立即生效</p>
        </div>
      </div>
      <div v-else>
        <div v-if="videoId == 0" class="video-price">
          <h5>
            会员价
            <span>￥{{ tecentVipPay }}</span>
          </h5>
          <p>原价{{ tecentPay }}</p>
        </div>
        <div v-if="videoId == 1" class="video-price">
          <h5>
            会员价
            <span>￥{{ aqiyiVipPay }}</span>
          </h5>
          <p>原价{{ aqiyiPay }}</p>
        </div>
        <div v-if="videoId == 2" class="video-price">
          <h5>
            会员价
            <span>￥{{ youkuVipPay }}</span>
          </h5>
          <p>原价{{ youkuPay }}</p>
        </div>
        <div v-if="videoId == 3" class="video-price">
          <h5>
            会员价
            <span>￥{{ mgtvVipPay }}</span>
          </h5>
          <p>原价{{ mgtvPay }}</p>
        </div>
        <div class="video-stepbox">
          <h5>
            <img src="../../static/images/time_icon.png" alt="">有效期
          </h5>
          <p>购买成功即可获得兑换码，请在2019年12月31日前到指定页面进行兑换，兑换成功获得30天有效的VIP会员。</p>
        </div>
        <div class="video-stepbox">
          <h5>
            <img src="../../static/images/explain_icon.png" alt="">使用说明
          </h5>
          <p>购买成功，在订单详情页面复制兑换码，点击前往兑换按钮，到兑换页面进行兑换，兑换成功即可登录相应视频平台享受会员权益。</p>
          <div class="video-stepimg">
            <img src="../../static/images/explain.png" alt="">
          </div>
        </div>
      </div>
      <div class="video-btn">
        <button type="button">立即充值</button>
        <button type="button" style="color:#109044">会员购买</button>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
import topBar from '@/components/topback';
export default {
  components: {
    topBar
  },
  data() {
    return {
      videoId: '',
      msg: '视频介绍详情页！',
      topTitle: '视频',
      videoName: '',
      currentheight: {
        height: '',
        width: ''
      },
      isPay: true,
      isCurrentBtn: true,
      isShowUser: true,
      phoneNum: '',
      tecentVipPay: '15',
      tecentPay: '20',
      tecentVipPayWeek: '7.5',
      tecentPayWeek: '10',
      youkuVipPay: '13',
      youkuPay: '20',
      youkuVipPayWeek: '5.5',
      youkuPayWeek: '9',
      aqiyiVipPay: '15',
      aqiyiPay: '19.8',
      aqiyiVipPayWeek: '5',
      aqiyiPayWeek: '10',
      mgtvVipPay: '8',
      mgtvPay: '20',
      mgtvVipPayWeek: '4',
      mgtvPayWeek: '8'
    }
  },
  created() {
    this.getCurrentHeight()
    this.videoId = this.$route.query.videoId
    this.getVideoName(this.videoId)
  },
  methods: {
    getCurrentHeight() {
      const innerWidth = window.innerWidth
      this.currentheight.width = innerWidth + 'px';
      this.currentheight.height = innerWidth / 1.91 + 'px';
      console.log(this.currentheight)
    },
    tabBuy(e) {
      if (e === 0) {
        this.isPay = true
        this.isCurrentBtn = !this.isCurrentBtn
      } else {
        this.isCurrentBtn = !this.isCurrentBtn
        this.isPay = false
      }
    },
    getVideoName(id) {
      switch (this.videoId) {
        case '0':
          this.videoName = '腾讯VIP';
          Toast({
            message: '当前是腾讯视频！',
            duration: 2000
          })
          break;
        case '1':
          this.videoName = '爱奇艺VIP';
          Toast({
            message: '当前是爱奇艺视频！',
            duration: 2000
          })
          break;
        case '2':
          this.videoName = '优酷VIP';
          Toast({
            message: '当前是优酷视频！',
            duration: 2000
          })
          break;
        case '3':
          this.videoName = '芒果TVVIP';
          Toast({
            message: '当前是芒果TV视频！',
            duration: 2000
          })
          break;
      }
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.big-container {
  padding-top: 50px;
}
.video-topbox {
  width: 100%;
  background-image: url(../../static/images/explain_bg0.png);
  background-size: 100% auto;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  & .video-cardbox {
    border-radius: 30px;
    width: 90%;
    height: 90%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    & .vipimg {
      position: absolute;
      top: 15px;
      left: 20px;
      width: 40px;
      height: auto;
    }
    & .cardbgimg {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: auto;
    }
    & .video-txtcontent {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      width: 80%;
      & .video-iconbox {
        width: 50%;
        height: auto;
        & img {
          width: 100%;
          height: auto;
        }
      }
      & h2 {
        width: 100%;
        color: #fff;
        font-weight: 400;
        margin: 8px 0;
      }
    }
  }
  & .tecent {
    background: #3fcbee;
  }
  & .aqiyi {
    background: #6fbc22;
  }
  & .youku {
    background: #00baff;
  }
  & .mgtv {
    background: #ed6a00;
  }
  & .video-img {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    & img {
      width: 100%;
      height: auto;
    }
  }
}
.video-middlebox {
  background: #03c25b;
  padding-bottom: 60px;
  & .video-switch {
    padding: 5px 20px;
    border-bottom: 1px solid #0c9547;
    text-align: left;
    & button {
      border-radius: 8px;
      padding: 8px 15px;
    }
    & .choosebtn {
      border: 1px solid rgba(255, 255, 255, 1);
      background: #03c25b;
      color: #fff;
    }
    & .currentbtn {
      border: 1px solid rgba(255, 255, 255, 1);
      background: rgba(228, 218, 4, 0.3);
      color: #f6ed25;
    }
  }
  & .video-phonebox {
    height: 40px;
    width: 80%;
    background: #fff;
    border-radius: 20px;
    margin: 20px auto;
    & input {
      width: 90%;
      height: 36px;
      border: none;
    }
  }
  & .video-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    & h5 {
      color: #fff;
      font-size: 12px;
      font-weight: 500;
      & span {
        font-size: 18px;
        color: #ed1313;
      }
    }
    & p {
      font-size: 12px;
      letter-spacing: 1px;
      color: #dbdbdb;
      text-decoration: line-through;
    }
  }
  & .video-stepbox {
    padding: 10px 20px;
    & > h5 {
      width: 100%;
      font-size: 13px;
      color: #e4da04;
      display: flex;
      align-items: center;
      text-align: left;
      margin: 8px 0;
      & img {
        width: 14px;
        height: 14px;
        margin-right: 10px;
      }
    }
    & > p {
      color: #fff;
      font-size: 12px;
      margin: 5px 0;
      text-align: left;
    }
    & .choosebox {
      display: flex;
      justify-content: left;
      align-items: center;
      & .paybox {
        width: 30%;
        background: rgba(255, 255, 255, 0.58);
        border: 1px solid rgba(111, 188, 34, 1);
        border-radius: 10px;
        margin-right: 5%;
        padding: 5px 0;
        & h5 {
          text-align: center;
          margin: 5px 0;
          color: #323232;
        }
        & h3 {
          color: #ed1313;
          margin: 5px 0;
        }
        & p {
          color: #909090;
          text-decoration: line-through;
          margin: 5px 0;
          font-size: 10px;
        }
      }
    }
    & .video-stepimg {
      width: 100%;
      height: auto;
      & img {
        width: 100%;
        height: auto;
      }
    }
  }
  & .video-btn {
    margin: 15px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    & button {
      border: none;
      padding: 8px 15px;
      width: 45%;
      background: #fff;
      font-size: 18px;
      color: #323232;
      text-align: center;
      border-radius: 10px;
      font-weight: 700;
    }
  }
}
</style>

