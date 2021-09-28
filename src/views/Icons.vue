<template>
  <div>
    <div class="jtTabSection">
      <div style="padding: 16px 24px 8px; border-bottom: 1px solid #dadce0;">
        <div class="jtTitle">ICONS</div>
      </div>
    </div>

    <div class="mainActivity">
      <div style="text-align: center; margin: 32px 0; font-size: 16px;">
        Khakitron use alibaba's icon library. You can browse the link below to get all icon options
      </div>
      <div style="text-align: center; margin: 32px 0; font-size: 16px;">
        <a href="https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=2197273&keyword=&project_type=&page=" target="_blank">Alibaba svg library</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'Icons',
})
export default class Icons extends Vue {
}
</script>

<style scoped lang="scss">
@import "../styles/main";
</style>
