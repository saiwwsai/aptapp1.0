Page({
  data: {
    // header 
    node1: `
    <h1> Real-time Location<\h1>
    `,
    node2: `<h2>How to share your real-time location with your friend(s)?<\h2>`,
/*
    node2: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 60px; color: black;'
      },
      children: [{
        type:'text',
        text: 'test test'
      }]
    }],
*/
// <image src="/docs/rtl_1.jpg" class="img" mode='widthFix'> </image>
    node3:  
    `
    <ol>
   <li>Open up your friend's chat, click on the "+" button at the bottom right corner</li>
   <img src="/docs/rtl_1.jpg" width="100%">
   <li>Click on "Location"</li>
    <img src="/docs/rtl_2.jpg" width="100%">
   <li>Click on "Real-time Location"</li>
    <img src="/docs/rtl_3.jpg" width="100%">
    </ol>
    ` ,
    poster: '/docs/logo.png ',
    name: 'Real-time Location',
    src: '/docs/story39b.mp3',
  },
  tap() {
    console.log('tap')
  },

  onShow: function () {
    innerAudioContext.src = "/docs/story39b.mp3"
    //音频的数据链接，用于直接播放。支持云文件ID（2.2.3起）。

  },
  //点击播放,(如果要一进来就播放放到onload即可)
  play: function () {
    innerAudioContext.play();
  },
  //点击 停止
  stop: function () {
    innerAudioContext.pause();
  }
})