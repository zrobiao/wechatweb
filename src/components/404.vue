<template>
  <div class="wscn-http404-container">
    <div class="bullshit">
      <div class="bullshit__oops">OOPS!</div>
      <div class="bullshit__headline">{{ message }}</div>
      <div class="bullshit__info">请检查您输入的网址是否正确，请点击以下按钮返回主页或者发送错误报告</div>
    </div>
    <div class="wscn-http404">
      <div class="pic-404">
        <img class="pic-404__parent" src="@/assets/404_images/404.png" alt="404">
        <img class="pic-404__child left" src="@/assets/404_images/404_cloud.png" alt="404">
        <img class="pic-404__child mid" src="@/assets/404_images/404_cloud.png" alt="404">
        <img class="pic-404__child right" src="@/assets/404_images/404_cloud.png" alt="404">
      </div>
    </div>
    <div class="backbtn">
      <p class="btn" @click="go()">返回首页</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page404',
  computed: {
    message() {
      // eslint-disable-next-line semi
      return '暂时发生了点错误......';
    }
  },
  methods: {
    go() {
      this.$router.push({
        path: '/index'
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.wscn-http404-container {
  transform: translate(-50%, -50%);
  position: absolute;
  top: 40%;
  left: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
}
.wscn-http404 {
  position: relative;
  width: 60%;
  padding: 0 0 0 30px;
  overflow: hidden;
  box-sizing: border-box;
  .pic-404 {
    position: relative;
    width: 100%;
    overflow: hidden;
    &__parent {
      width: 100%;
    }
    &__child {
      position: absolute;
      &.left {
        width: 20px;
        top: 5%;
        left: 45%;
        opacity: 0;
        animation-name: cloudLeft;
        animation-duration: 2s;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
        animation-delay: 1.2s;
        animation-iteration-count: 5;
      }
      &.mid {
        width: 16px;
        top: 10%;
        left: 55%;
        opacity: 0;
        animation-name: cloudMid;
        animation-duration: 2.5s;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
        animation-delay: 1s;
        animation-iteration-count: 5;
      }
      &.right {
        width: 22px;
        top: 15%;
        left: 65%;
        opacity: 0;
        animation-name: cloudRight;
        animation-duration: 2s;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
        animation-delay: 1.6s;
        animation-iteration-count: 5;
      }
      @keyframes cloudLeft {
        0% {
          top: 5%;
          left: 45%;
          opacity: 0;
        }
        20% {
          top: 15%;
          left: 35%;
          opacity: 1;
        }
        80% {
          top: 25%;
          left: 25%;
          opacity: 0.8;
        }
        100% {
          top: 45%;
          left: 15%;
          opacity: 0;
        }
      }
      @keyframes cloudMid {
        0% {
          top: 10%;
          left: 55%;
          opacity: 0;
        }
        20% {
          top: 20%;
          left: 45%;
          opacity: 1;
        }
        70% {
          top: 30%;
          left: 35%;
          opacity: 0.8;
        }
        100% {
          top: 40%;
          left: 25%;
          opacity: 0;
        }
      }
      @keyframes cloudRight {
        0% {
          top: 15%;
          left: 65%;
          opacity: 0;
        }
        20% {
          top: 30%;
          left: 55%;
          opacity: 1;
        }
        80% {
          top: 45%;
          left: 45%;
          opacity: 0.8;
        }
        100% {
          top: 55%;
          left: 35%;
          opacity: 0;
        }
      }
    }
  }
}
.bullshit {
  position: relative;
  width: 100%;
  padding: 30px 15px;
  box-sizing: border-box;
  overflow: hidden;
  &__oops {
    font-size: 32px;
    font-weight: bold;
    line-height: 40px;
    color: #1482f0;
    opacity: 0;
    margin-bottom: 20px;
    animation-name: slideUp;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
  }
  &__headline {
    font-size: 20px;
    line-height: 24px;
    color: #222;
    font-weight: bold;
    opacity: 0;
    margin-bottom: 10px;
    animation-name: slideUp;
    animation-duration: 0.5s;
    animation-delay: 0.1s;
    animation-fill-mode: forwards;
  }
  &__info {
    font-size: 13px;
    line-height: 21px;
    color: grey;
    opacity: 0;
    margin-bottom: 30px;
    animation-name: slideUp;
    animation-duration: 0.5s;
    animation-delay: 0.2s;
    animation-fill-mode: forwards;
  }
}
.backbtn {
  width: 100%;
  margin-top: 50px;
  .btn {
    display: block;
    width: 110px;
    margin: 0 auto;
    height: 36px;
    background: #1482f0;
    border-radius: 100px;
    text-align: center;
    color: #ffffff;
    opacity: 0;
    font-size: 14px;
    line-height: 36px;
    cursor: pointer;
    animation-name: slideUp;
    animation-duration: 0.5s;
    animation-delay: 0.3s;
    animation-fill-mode: forwards;
  }
}
@keyframes slideUp {
  0% {
    transform: translateY(60px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
