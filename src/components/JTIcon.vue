<template>
  <div style="padding: 16px;">
    <div class="breadContainer">
      <div style="font-weight: 600;">Basic Icon</div>
      <div style="margin-top: 40px; margin-bottom: 16px;">
        <TGIcon>icon-control</TGIcon>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'JTIcon',
})
export default class JTIcon extends Vue {
}
</script>

<style scoped lang="scss">
@import "component-styles";
</style>
