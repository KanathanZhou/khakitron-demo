<template>
  <div>
    <div class="jtTabSection">
      <div style="padding: 16px 24px 8px; border-bottom: 1px solid #dadce0;">
        <div class="jtTitle">THEMES</div>
      </div>
    </div>

    <div class="mainActivity">
      <div style="text-align: center; margin: 64px 0; font-size: 16px;">
        Theme will be available very quickly
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'Themes',
})
export default class Themes extends Vue {
}
</script>

<style scoped lang="scss">
@import "../styles/main";
</style>
