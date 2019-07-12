<template>
  <div style="padding-bottom:40px;">
    <div :style="currentheight" class="index-content">
      <div class="user-box" @click="jumpPage(4)">
        <img src="../../static/images/user.png">
        <p>个人中心</p>
      </div>
      <div class="toptt-box">
        <img src="../../static/images/font_bg.png">
        <h3>{{ htitle }}</h3>
        <h3>{{ ptitle }}</h3>
      </div>
      <div class="btn-content">
        <div class="btn-box">
          <div class="btn tecentbtn" @click="jumpPage(0)">
            <div class="btn-icon">
              <img src="../../static/images/tecent.png">
            </div>
            <div class="btn-text">
              <h4>会员价￥{{ tecentVipPay }}</h4>
              <p>￥{{ tecentPay }}</p>
            </div>
            <div class="btn-bgbox">
              <img src="../../static/images/btn_bg.png">
            </div>
          </div>
          <div class="btn aqiyibtn" @click="jumpPage(1)">
            <div class="btn-icon">
              <img src="../../static/images/aqiyi.png">
            </div>
            <div class="btn-text">
              <h4>会员价￥{{ aqiyiVipPay }}</h4>
              <p>￥{{ aqiyiPay }}</p>
            </div>
            <div class="btn-bgbox">
              <img src="../../static/images/btn_bg.png">
            </div>
          </div>
        </div>
        <div class="btn-box">
          <div class="btn youkubtn" @click="jumpPage(2)">
            <div class="btn-icon">
              <img src="../../static/images/youku.png">
            </div>
            <div class="btn-text">
              <h4>会员价￥{{ youkuVipPay }}</h4>
              <p>￥{{ youkuPay }}</p>
            </div>
            <div class="btn-bgbox">
              <img src="../../static/images/btn_bg.png">
            </div>
          </div>
          <div class="btn mgtvbtn" @click="jumpPage(3)">
            <div class="btn-icon">
              <img src="../../static/images/mangg.png">
            </div>
            <div class="btn-text">
              <h4>会员价￥{{ mgtvVipPay }}</h4>
              <p>￥{{ mgtvPay }}</p>
            </div>
            <div class="btn-bgbox">
              <img src="../../static/images/btn_bg.png">
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-box">
        <img src="../../static/images/car.png">
      </div>
    </div>
    <div class="bottom-btn">
      <button type="button">开通会员</button>
    </div>
  </div>
</template>
<script>
import { Button } from 'mint-ui';

export default {
  name: 'Index',
  components: {
    Button
  },
  data() {
    return {
      htitle: '尊享四大视频优惠价',
      ptitle: '7天充值 时间灵活',
      currentheight: {
        height: '',
        width: ''
      },
      tecentVipPay: '15',
      tecentPay: '20',
      youkuVipPay: '13',
      youkuPay: '20',
      aqiyiVipPay: '15',
      aqiyiPay: '19.8',
      mgtvVipPay: '8',
      mgtvPay: '20'
    }
  },
  created() {
    const innerWidth = window.innerWidth
    this.currentheight.width = innerWidth + 'px';
    this.currentheight.height = innerWidth * 1.78 + 'px';
  },
  methods: {
    jumpPage(e) {
      switch (e) {
        case 0:
          this.$router.push({
            path: '/videoDetail',
            query: {
              videoId: '0'
            }
          })
          break;
        case 1:
          this.$router.push({
            path: '/videoDetail',
            query: {
              videoId: '1'
            }
          })
          break;
        case 2:
          this.$router.push({
            path: '/videoDetail',
            query: {
              videoId: '2'
            }
          })
          break;
        case 3:
          this.$router.push({
            path: '/videoDetail',
            query: {
              videoId: '3'
            }
          })
          break;
        case 4:
          this.$router.push({
            path: '/usercenter'
          })
          break;
        default:
          break
      }
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.index-content {
  width: 100%;
  background-image: url(../../static/images/index_bg.png);
  background-size: 100% auto;
  position: relative;
}
.user-box {
  position: absolute;
  top: 20px;
  right: 0px;
  width: 110px;
  z-index: 999;
  & > img {
    width: 35px;
    height: 35px;
    margin: 0 auto;
  }
  & > p {
    color: #fff;
    text-align: center;
    margin: 0;
    font-size: 12px;
  }
}
.toptt-box {
  padding: 100px 20px 20px;
  position: relative;
  & > img {
    width: 80%;
    height: auto;
    margin-bottom: 10px;
  }
  & > h3 {
    color: #fff;
    margin: 8px 0;
    letter-spacing: 2px;
  }
}
.btn-content {
  width: 90%;
  padding: 10px;
  margin: 0 atuo;
  & .btn-box {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    padding: 5px;
    & .btn {
      position: relative;
      width: 45%;
      border-radius: 10px;
      padding: 12px 0;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      & .btn-icon {
        width: 90px;
        height: 32px;
        & > img {
          width: 100%;
          height: auto;
        }
      }
      & .btn-text {
        display: flex;
        justify-content: space-around;
        width: 80%;
        align-items: center;
        color: #fff;
        & > h4 {
          margin: 6px 0 0;
          font-size: 12px;
        }
        & > p {
          font-size: 12px;
          margin: 6px 0 0;
          color: #d4d4d4;
          text-decoration: line-through;
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
      box-shadow: 0px 5px 12px 0px rgba(6, 144, 91, 0.35);
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
  }
}
.bottom-box {
  position: relative;
  width: 100%;
  top: 20px;
  & > img {
    width: 100%;
    height: auto;
  }
}
.bottom-btn {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  & > button {
    background: rgba(0, 175, 85, 1);
    border: none;
    width: 100%;
    text-align: center;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    padding: 12px 0;
    letter-spacing: 2px;
  }
}
</style>
