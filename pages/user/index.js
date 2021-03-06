// pages/user/user.js
const app = getApp()
var WxParse = require('../../wxParse/wxParse.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    avatarDefault: '/images/avatar-default.png',
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    about: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else {
      app.relateUser(this.getUserinfo)
    }
    
    wx.request({
      url: app.globalData.url + 'detail',
      data: {
        parent_id: 6,
        id: 1
      },
      success: (res) => {
        this.setData({
          about: res.data.name
        })
      }
    })
  },
  // 首次取消授权，再次拉取授权
  login: function (e) {
    app.relateUser(this.getUserinfo)
  },

  getUserinfo: function (data) {
    this.setData({
      userInfo: data,
      hasUserInfo: true
    })
  },

  onOrderTap: function () {
    if (app.globalData.userInfo) {
      wx.navigateTo({
        url: '/pages/orders/index',
      })
    } else {
      wx.showModal({
        title: '登录提示',
        content: '登录后才能查看哦！',
        showCancel: false
      })
    }
  },

  onCouponTap: function () {
    if (app.globalData.userInfo) {
      wx.navigateTo({
        url: '/pages/coupons/index',
      })
    } else {
      wx.showModal({
        title: '登录提示',
        content: '登录后才能查看哦！',
        showCancel: false
      })
    }
  },

  onAddrTap: function () {
    if (app.globalData.userInfo) {
      wx.navigateTo({
        url: '/pages/address/index',
      })
    } else {
      wx.showModal({
        title: '登录提示',
        content: '登录后才能查看哦！',
        showCancel: false
      })
    }
  },

  onAboutTap: function () {
    wx.showModal({
      title: '关于我们',
      content: this.data.about,
      showCancel: false
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // app.relateUser()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '华邦商城',
      path: '/pages/index/index'
    }
  }
})