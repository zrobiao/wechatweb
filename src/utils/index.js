import axios from 'axios'
import util from './index'

export default {
  /**
   * 获取cookie
   * @param {String} name 名称
   * @param {String} value 内容
   * @param {String} minutes 多少分钟后失效
   */
  setCookie: function(name, value, minutes) {
    minutes = minutes || 20
    var dateNow = new Date()
    dateNow.setMinutes(dateNow.getMinutes() + minutes)
    document.cookie = name + '=' + escape(value) + ';expires=' + dateNow.toGMTString()
  },
  /**
   * 获取cookie
   * @param {String} name 要获取的cookie的名称
   */
  getCookie: function(name) {
    var arr, reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')

    if (arr = document.cookie.match(reg)) return unescape(arr[2])

    return null
  },
  /**
   * 清除 cookie
   * @param {String} name 要清除的cookie的名称
   */
  removeCookie: function(name) {
    util.setCookie(name, '', -1)
  },
  /**
   * 获取 token
   */
  getToken: function() {
    var token = util.getQueryString('Token')
    return token || 'default'
  },
  /**
   * 根据请求参数名称 获取请求参数值
   * @param {String} name 参数名称
   */
  getQueryString: function(name) { // 获取浏览器参数 name为参数名
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    var r = window.location.href.substr(window.location.href.indexOf('?') + 1)
    r = r.match(reg)
    if (r != null) return unescape(r[2])
    return null
  },
  /**
   * 根据请求参数名称 获取请求参数值
   * @param {Object} router 路由对象
   * @param {String} path 路由名称
   * @param {Object} queryParams 请求参数
   */
  pushRouter: function(router, path, queryParams) { // 获取浏览器参数 name为参数名
    queryParams = queryParams || {}
    if (!queryParams.Token) queryParams.Token = util.getToken()
    router.push({
      path: path,
      query: queryParams
    })
  },
  /**
   * 去除字符串空格
   * @param {String} str 要处理的内容
   * @param {String} is_global 是否所有 1是 0只去除前后空格
   */
  trimStr: function(str, is_global) {
    var result
    result = str.replace(/(^\s+)|(\s+$)/g, '')
    if (is_global) {
      result = result.replace(/\s/g, '')
    }
    return result
  },
  /**
   * 设置ajax请求
   * @param {String} reqPath 请求的接口地址
   * @param {Object} paramArray 请求的对象，包含请求头，请求参数等
   * @param {function} successCallBack 成功的回调函数
   * @param {function} failuredCallBack 失败的回调函数
   */
  Ajax: function(reqPath, paramArray, successCallBack, failuredCallBack) {
    var reqPath = reqPath + (reqPath.indexOf('?') == -1 ? '?' : '&') + 'timeSerialize=' + (new Date()).getTime()
    // var baseUrl = 'http://localhost:8080', //请求地址http://192.168.0.141:8080
    //          reqPath=baseUrl+reqPath;
    const Type = getMethod(reqPath, '_method')

    function getMethod(reqPath, name) { // 获取_method参数类型
      var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
      var r = reqPath.substr(reqPath.indexOf('?') + 1)
      r = r.match(reg)
      if (r != null) return unescape(r[2])
      return 'GET'
    }
    if (Type == 'GET') {
      axios.get(reqPath, {
        params: paramArray
      })
        .then(function(response) {
          //			      if (response.status == 200) {
          //			                successCallBack(response);
          //			            }else{
          //			                Toast("服务器打盹了,再试一次叫醒它！");
          //			            }
          successCallBack(response)
        })
        .catch(function(error) {
          var resp = error.response
          successCallBack(error.response)
          // console.log(error.response);
        })
    } else {
      console.log('Post')
      axios.post(reqPath, paramArray).then(function(response) {
        //				     if (response.status == 200) {
        //			                successCallBack(response);
        //			            }else{
        //			                Toast("服务器打盹了,再试一次叫醒它！");
        //			            }
        successCallBack(response)
      }).catch(function(error) {
        var resp = error.response
        // status报错！！！
        // switch (resp.status) {
        //     case 500:
        //         Toast("服务器错误！");
        //         break;
        //     default:
        //         Toast(resp.data.message);
        //         break;
        // }
        successCallBack(error.response)
      })
    }
  },
  isEmpty: function(str) {
    if (str == '' || str == 'null' || str == 'undefined' || str == null || str == undefined) {
      return true
    } else {
      return false
    }
  },
  // 获取用户信息
  getUser: function() {
    axios.get('/api/user/me', {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function(resp) {
      if (resp) {
        window.user = resp.data
        window.location.reload()
      }
    })
  }

}
