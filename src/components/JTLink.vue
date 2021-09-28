<template>
  <div style="padding: 16px;">
    <div class="bContainers">
      <div style="font-weight: 600;">Basic Link</div>
      <div style="margin-top: 40px;">
        <TLink href="https://www.google.com" text="Let me google that for you">
          <template v-slot:left>
            <TGIcon>icon-control</TGIcon>
          </template>
        </TLink>
      </div>
    </div>
    <div class="bContainers">
      <div style="font-weight: 600;">6 Size Options</div>
      <div style="margin-top: 40px;">
        <TLink href="https://www.google.com" text="Let me google that for you" x-small>
          <template v-slot:left>
            <TGIcon>icon-control</TGIcon>
          </template>
        </TLink>
      </div>
      <div style="margin-top: 40px;">
        <TLink href="https://www.google.com" text="Let me google that for you" small>
          <template v-slot:left>
            <TGIcon>icon-control</TGIcon>
          </template>
        </TLink>
      </div>
      <div style="margin-top: 40px;">
        <TLink href="https://www.google.com" text="Let me google that for you" medium>
          <template v-slot:left>
            <TGIcon>icon-control</TGIcon>
          </template>
        </TLink>
      </div>
      <div style="margin-top: 40px;">
        <TLink href="https://www.google.com" text="Let me google that for you" large>
          <template v-slot:left>
            <TGIcon>icon-control</TGIcon>
          </template>
        </TLink>
      </div>
      <div style="margin-top: 40px;">
        <TLink href="https://www.google.com" text="Let me google that for you" x-large>
          <template v-slot:left>
            <TGIcon>icon-control</TGIcon>
          </template>
        </TLink>
      </div>
      <div style="margin-top: 40px;">
        <TLink href="https://www.google.com" text="Let me google that for you" xx-large>
          <template v-slot:left>
            <TGIcon>icon-control</TGIcon>
          </template>
        </TLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'JTLink',
})
export default class JTLink extends Vue {
}
</script>

<style scoped lang="scss">
@import "component-styles";
</style>
