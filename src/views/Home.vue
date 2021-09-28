<template>
  <div>
    <div class="jtTabSection">
      <div style="padding: 16px 24px 8px; border-bottom: 1px solid #dadce0;">
        <div class="jtTitle">WHAT IS KHAKITRON?</div>
      </div>
    </div>

    <div class="mainActivity">
      <div style="text-align: center; margin: 64px 0; font-size: 20px;">
        Khakitron is a Vue.js 2.0 UI Framework
      </div>
      <div class="para">
        Designed by
        <TChip tag color-theme="info"
               style="margin-left: 12px; font-weight: 500;">
          KK Han
        </TChip>
        <TChip tag color-theme="info"
               style="margin-left: 12px; font-weight: 500;">
          Mingming Ge
        </TChip>
      </div>
      <div class="para">
        Crafted with <span style="color: red; margin: 0 4px;">❤</span> by
        <TChip tag color-theme="info"
               style="margin-left: 12px; font-weight: 500;">
          Kan Zhou
        </TChip>
      </div>
    </div>


  </div>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'Home',
})
export default class Home extends Vue {
}
</script>

<style scoped lang="scss">
@import "../styles/main";

.para {
  margin: 16px 0;
  display: flex;
  align-items: center;
  justify-content: center;;
}
</style>
