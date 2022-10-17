<template>
  <!-- 第一个 KuStyle -->
  <div>
    <div class="animated-border1">按钮1</div>
    <div class="animated-border2">按钮2</div>
    <div class="animated-border3">按钮3</div>
  </div>
</template>

<script>
import Driver from 'driver.js' // import driver.js
import 'driver.js/dist/driver.min.css' // import driver.js css
import steps from './steps'

export default {
  name: 'Guide',
  data() {
    return {
      driver: null
    }
  },
  mounted() {
    this.driver = new Driver()
  },
  methods: {
    guide() {
      this.driver.defineSteps(steps)
      this.driver.start()
    }
  }
}
</script>
<style lang="scss">
$button_width: 100px;
$border_width: 2px;
$clip_width: 30px;
$button_color: #fed75a;
$animate-duration: 10s;
/* // html{ height: 100% } */
body,
html {
  height: 100%;
}
body {
  background-color: #1d1d1d;
}
// 按钮1
.animated-border1 {
  // 按钮样式
  position: relative;
  display: block;
  width: $button_width;
  height: $button_width/2;
  margin: calc(50vh - #{$button_width} / 4) auto;
  box-sizing: border-box;
  text-align: center;
  font-size: 24px;
  line-height: $button_width/2;
  color: $button_color;
  cursor: pointer;
  // 边框样式
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    box-sizing: border-box;
    border: $border_width solid $button_color;
    // 过渡动画
    transition: clip-path 0.5s ease-in-out;
  }
  // 左上右下的边框
  &::before {
    clip-path: inset(
      0 $button_width - $clip-width $button_width/2 - $clip_width 0
    );
  }
  &::after {
    clip-path: inset(
      $button_width/2 - $clip_width 0 0 $button_width - $clip-width
    );
  }
  // 鼠标移入时改变剪切形状
  &:hover {
    &::before,
    &::after {
      clip-path: inset(0 0 0 0);
    }
  }
}
// 按钮2
@keyframes border-animate2 {
  0%,
  100% {
    clip-path: inset(0 0 $button_width - $border_width 0);
  }
  25% {
    clip-path: inset(0 $button_width - $border_width 0 0);
  }
  50% {
    clip-path: inset($button_width - $border_width 0 0 0);
  }
  75% {
    clip-path: inset(0 0 0 $button_width - $border_width);
  }
}

.animated-border2 {
  position: relative;
  display: block;
  width: $button_width;
  height: $button_width;
  margin: calc(50vh - #{$button_width} / 2) auto 0;
  box-sizing: border-box;
  text-align: center;
  font-size: 24px;
  line-height: $button_width;
  color: $button-color;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    box-sizing: border-box;
    // background: rgba($button-color, 0.3);
    border: $border_width solid $button-color;
    animation: border-animate2 $animate-duration linear infinite;
  }

  &::after {
    animation-delay: $animate-duration * -0.5;
  }
}
// 按钮3
// 边框旋转动画
@keyframes border-animate3 {
  0%,
  100% {
    clip-path: inset(0 0 $button_width/2 - $border-width 0);
  }
  25% {
    clip-path: inset(0 $button_width - $border-width 0 0);
  }
  50% {
    clip-path: inset($button_width/2 - $border-width 0 0 0);
  }
  75% {
    clip-path: inset(0 0 0 $button_width - $border-width);
  }
}
.animated-border3 {
  // 按钮样式
  position: relative;
  display: block;
  width: $button_width;
  height: $button_width / 2;
  margin: calc(50vh - #{$button_width} / 2) auto;
  box-sizing: border-box;
  text-align: center;
  font-size: 24px;
  line-height: $button_width / 2;
  color: $button_color;
  // 边框样式
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    box-sizing: border-box;
    border: $border_width solid $button-color;
    // background: rgba($button-color, 0.3);
    animation: border-animate3 $animate-duration linear infinite;
  }
  //顺时针旋转
  &::after {
    animation-delay: $animate-duration * -0.5;
  }
}
</style>
