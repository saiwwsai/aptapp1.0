const myaudio = wx.createInnerAudioContext();
Page({

  data: {
    isplay: false,//是否播放
  },
  onShow: function () {
    myaudio.src = "/docs/story39b.mp3"

  },
  //播放
  play: function () {

    myaudio.play();
    console.log(myaudio.duration);
    this.setData({ isplay: true });
  },
  // 停止
  stop: function () {
    myaudio.pause();
    this.setData({ isplay: false });
  }
})