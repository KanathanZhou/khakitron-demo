<template>
  <div style="padding: 16px;">
    <div class="bContainers">
      <div style="font-weight: 600;">Basic tooltip</div>
      <div style="margin-top: 40px; margin-bottom: 16px;">
        <TTooltip bottom-right>
          <template v-slot:trigger="{ on }">
            <TButton v-on="on" color-theme="primary">hover me to show tooltip</TButton>
          </template>
          <div>
            Hello, I'm a tooltip
          </div>
        </TTooltip>
      </div>
    </div>
    <div class="bContainers">
      <div style="font-weight: 600;">Tooltip click to show</div>
      <div style="margin-top: 40px; margin-bottom: 16px;">
        <TTooltip click-to-show bottom-right>
          <template v-slot:trigger="{ on }">
            <TButton v-on="on">click me to show tooltip</TButton>
          </template>
          <div>
            Hello, I'm a tooltip
          </div>
        </TTooltip>
      </div>
    </div>
    <div class="bContainers">
      <div style="font-weight: 600;">Tooltip with various positioning</div>
      <div style="margin-top: 40px; margin-bottom: 16px; display: flex; flex-wrap: wrap;">
        <TTooltip top-right style="margin-right: 16px;">
          <template v-slot:trigger="{ on }">
            <TButton v-on="on">top right</TButton>
          </template>
          <div style="white-space: nowrap;">
            Hello, I'm a tooltip
          </div>
        </TTooltip>
        <TTooltip top style="margin-right: 16px;">
          <template v-slot:trigger="{ on }">
            <TButton v-on="on">top</TButton>
          </template>
          <div style="white-space: nowrap;">
            Hello, I'm a tooltip
          </div>
        </TTooltip>
        <TTooltip top-left style="margin-right: 16px;">
          <template v-slot:trigger="{ on }">
            <TButton v-on="on">top left</TButton>
          </template>
          <div style="white-space: nowrap;">
            Hello, I'm a tooltip
          </div>
        </TTooltip>
      </div>
      <div style="margin-top: 40px; margin-bottom: 16px; display: flex; flex-wrap: wrap;">
        <TTooltip right-bottom style="margin-right: 16px;">
          <template v-slot:trigger="{ on }">
            <TButton v-on="on" height="120">right top</TButton>
          </template>
          <div style="white-space: nowrap;">
            Hello, I'm a tooltip
          </div>
        </TTooltip>
        <TTooltip right style="margin-right: 16px;">
          <template v-slot:trigger="{ on }">
            <TButton v-on="on" height="120">right</TButton>
          </template>
          <div style="white-space: nowrap;">
            Hello, I'm a tooltip
          </div>
        </TTooltip>
        <TTooltip right-top style="margin-right: 16px;">
          <template v-slot:trigger="{ on }">
            <TButton v-on="on" height="120">right bottom</TButton>
          </template>
          <div style="white-space: nowrap;">
            Hello, I'm a tooltip
          </div>
        </TTooltip>
        <TTooltip left-bottom style="margin-right: 16px;">
          <template v-slot:trigger="{ on }">
            <TButton v-on="on" height="120">left top</TButton>
          </template>
          <div style="white-space: nowrap;">
            Hello, I'm a tooltip
          </div>
        </TTooltip>
        <TTooltip left style="margin-right: 16px;">
          <template v-slot:trigger="{ on }">
            <TButton v-on="on" height="120">left</TButton>
          </template>
          <div style="white-space: nowrap;">
            Hello, I'm a tooltip
          </div>
        </TTooltip>
        <TTooltip left-top style="margin-right: 16px;">
          <template v-slot:trigger="{ on }">
            <TButton v-on="on" height="120">left bottom</TButton>
          </template>
          <div style="white-space: nowrap;">
            Hello, I'm a tooltip
          </div>
        </TTooltip>
      </div>
      <div style="margin-top: 40px; margin-bottom: 16px; display: flex; flex-wrap: wrap;">
        <TTooltip bottom-right style="margin-right: 16px;">
          <template v-slot:trigger="{ on }">
            <TButton v-on="on">bottom right</TButton>
          </template>
          <div style="white-space: nowrap;">
            Hello, I'm a tooltip
          </div>
        </TTooltip>
        <TTooltip bottom style="margin-right: 16px;">
          <template v-slot:trigger="{ on }">
            <TButton v-on="on">bottom</TButton>
          </template>
          <div style="white-space: nowrap;">
            Hello, I'm a tooltip
          </div>
        </TTooltip>
        <TTooltip bottom-left style="margin-right: 16px;">
          <template v-slot:trigger="{ on }">
            <TButton v-on="on">bottom left</TButton>
          </template>
          <div style="white-space: nowrap;">
            Hello, I'm a tooltip
          </div>
        </TTooltip>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'JTTooltip',
})
export default class JTTooltip extends Vue {
}
</script>

<style scoped lang="scss">
@import "component-styles";
</style>
