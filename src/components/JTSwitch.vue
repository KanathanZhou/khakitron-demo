<template>
  <div style="padding: 16px;">
    <div class="bContainers">
      <div style="font-weight: 600;">Basic Switch</div>
      <div style="margin-top: 40px; margin-bottom: 16px;">
        <TSwitch></TSwitch>
      </div>
    </div>
    <div class="bContainers">
      <div style="font-weight: 600;">Switch w/ label</div>
      <div style="margin-top: 40px; margin-bottom: 16px;">
        <TSwitch label="label at the right"></TSwitch>
      </div>
      <div style="margin-top: 40px; margin-bottom: 16px;">
        <TSwitch label="label at the left" rtl></TSwitch>
      </div>
    </div>
    <div class="bContainers">
      <div style="font-weight: 600;">Disabled Switch</div>
      <div style="margin-top: 40px; margin-bottom: 16px;">
        <TSwitch label="label" disabled></TSwitch>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'JTSwitch',
})
export default class JTSwitch extends Vue {
}
</script>

<style scoped lang="scss">
@import "component-styles";
</style>
