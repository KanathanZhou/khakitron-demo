<template>
  <div style="padding: 16px;">
    <div class="bContainers">

      <div>Basic Slides</div>
      <div style="margin-top: 40px;">
        <div style="background-color: #272a42; display: flex; justify-content: center;">
          <TSlides auto-play>
            <template v-slot:static>
              <div style="margin: 32px 0 0 32px;">
                <div style="color: white;">Slides</div>
              </div>
            </template>
            <TSlide>
              <img src="https://tutu.s3.cn-northwest-1.amazonaws.com.cn/gas/Registered/pic1%402x.png" alt="intro_image">
            </TSlide>
            <TSlide>
              <img src="https://tutu.s3.cn-northwest-1.amazonaws.com.cn/gas/Registered/pic2%402x.png" alt="intro_image">
            </TSlide>
            <TSlide>
              <img src="https://tutu.s3.cn-northwest-1.amazonaws.com.cn/gas/Registered/pic3%402x.png" alt="intro_image">
            </TSlide>
            <TSlide>
              <img src="https://tutu.s3.cn-northwest-1.amazonaws.com.cn/gas/Registered/pic4%402x.png" alt="intro_image">
            </TSlide>
            <TSlide>
              <img src="https://tutu.s3.cn-northwest-1.amazonaws.com.cn/gas/Registered/pic5%402x.png" alt="intro_image">
            </TSlide>
          </TSlides>
        </div>
      </div>

    </div>
    <div class="bContainers">

      <div>Slides w/ pager</div>
      <div style="margin-top: 40px;">
        <div style="background-color: #272a42; display: flex; justify-content: center;">
          <TSlides pager auto-play>
            <template v-slot:static>
              <div style="margin: 32px 0 0 32px;">
                <div style="color: white;">Slides w/ pager</div>
              </div>
            </template>
            <TSlide>
              <img src="https://tutu.s3.cn-northwest-1.amazonaws.com.cn/gas/Registered/pic1%402x.png" alt="intro_image">
            </TSlide>
            <TSlide>
              <img src="https://tutu.s3.cn-northwest-1.amazonaws.com.cn/gas/Registered/pic2%402x.png" alt="intro_image">
            </TSlide>
            <TSlide>
              <img src="https://tutu.s3.cn-northwest-1.amazonaws.com.cn/gas/Registered/pic3%402x.png" alt="intro_image">
            </TSlide>
            <TSlide>
              <img src="https://tutu.s3.cn-northwest-1.amazonaws.com.cn/gas/Registered/pic4%402x.png" alt="intro_image">
            </TSlide>
            <TSlide>
              <img src="https://tutu.s3.cn-northwest-1.amazonaws.com.cn/gas/Registered/pic5%402x.png" alt="intro_image">
            </TSlide>
          </TSlides>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'JTSlides',
})
export default class JTSlides extends Vue {
}
</script>

<style scoped lang="scss">
@import "component-styles";
</style>
