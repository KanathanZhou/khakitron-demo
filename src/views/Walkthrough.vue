<template>
  <div>
    <div class="jtTabSection">
      <div style="padding: 16px 24px 8px; border-bottom: 1px solid #dadce0;">
        <div class="jtTitle">WALKTHROUGH</div>
      </div>
    </div>

    <div class="mainActivity">
      <div style="text-align: center; margin: 64px 0; font-size: 16px;">
        Walkthrough will be available very quickly
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'Walkthrough',
})
export default class Walkthrough extends Vue {
}
</script>

<style scoped lang="scss">
@import "../styles/main";
</style>
