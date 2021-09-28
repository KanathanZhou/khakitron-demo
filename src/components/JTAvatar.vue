<template>
  <div style="padding: 16px;">
    <div class="bContainers">
      <div style="font-weight: 600;">Basic Avatar</div>
      <div style="margin-top: 40px; margin-bottom: 16px;">
        <TAvatar text="G"></TAvatar>
      </div>
    </div>
    <div class="bContainers">
      <div style="font-weight: 600;">Avatar w/ 6 size options</div>
      <div style="margin-top: 40px; margin-bottom: 16px;">
        <TAvatar x-small text="G"></TAvatar>
        <TAvatar small text="G"></TAvatar>
        <TAvatar medium text="G"></TAvatar>
        <TAvatar large text="G"></TAvatar>
        <TAvatar x-large text="G"></TAvatar>
        <TAvatar xx-large text="G"></TAvatar>
      </div>
    </div>
    <div class="bContainers">
      <div style="font-weight: 600;">Avatar w/ customized size</div>
      <div style="margin-top: 40px; margin-bottom: 16px;">
        <TAvatar size="66" text="G"></TAvatar>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'JTAvatar',
})
export default class JTAvatar extends Vue {
}
</script>

<style scoped lang="scss">
@import "component-styles";
</style>
