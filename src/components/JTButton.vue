<template>
  <div style="padding: 16px;">

    <div class="bContainers">
      <div style="font-weight: 600;">Basic Buttons</div>
      <div style="margin-top: 40px;">

        <div style="display: flex; align-items: center;" class="inlineButtons">
          <div>Default</div>
          <TButton color="basic">Basic</TButton>
          <TButton>Primary</TButton>
          <TButton color="secondary">Secondary</TButton>
          <TButton color="info">info</TButton>
          <TButton color="success">Success</TButton>
          <TButton color="warning">Warning</TButton>
          <TButton color="danger">Danger</TButton>
          <TButton color="basic" disabled>Disabled</TButton>
        </div>

        <TDivider></TDivider>

        <div style="display: flex; align-items: center;" class="inlineButtons">
          <div>Outlined</div>
          <TButton color="basic" outlined>Basic</TButton>
          <TButton outlined>Primary</TButton>
          <TButton color="secondary" outlined>Secondary</TButton>
          <TButton color="info" outlined>info</TButton>
          <TButton color="success" outlined>Success</TButton>
          <TButton color="warning" outlined>Warning</TButton>
          <TButton color="danger" outlined>Danger</TButton>
          <TButton color="basic" disabled outlined>Disabled</TButton>
        </div>

        <TDivider></TDivider>

        <div style="display: flex; align-items: center;" class="inlineButtons">
          <div>Text</div>
          <TButton color="basic" text>Basic</TButton>
          <TButton text>Primary</TButton>
          <TButton color="secondary" text>Secondary</TButton>
          <TButton color="info" text>info</TButton>
          <TButton color="success" text>Success</TButton>
          <TButton color="warning" text>Warning</TButton>
          <TButton color="danger" text>Danger</TButton>
          <TButton color="basic" disabled text>Disabled</TButton>
        </div>

        <TDivider></TDivider>

        <div style="display: flex; align-items: center;" class="inlineButtons">
          <div>Stroked</div>
          <TButton color="basic" stroked>Basic</TButton>
          <TButton stroked>Primary</TButton>
          <TButton color="secondary" stroked>Secondary</TButton>
          <TButton color="info" stroked>info</TButton>
          <TButton color="success" stroked>Success</TButton>
          <TButton color="warning" stroked>Warning</TButton>
          <TButton color="danger" stroked>Danger</TButton>
          <TButton color="basic" disabled stroked>Disabled</TButton>
        </div>

      </div>
    </div>

    <div class="bContainers">
      <div style="font-weight: 600;">Button With Icon</div>
      <div style="margin-top: 40px;">
        <div class="inlineButtons">
          <div>Icon at the left</div>
          <TButton>
            <TGIcon left>icon-control</TGIcon>
            Settings
          </TButton>
          <TButton outlined>
            <TGIcon left>icon-control</TGIcon>
            Settings
          </TButton>
          <TButton text>
            <TGIcon left>icon-control</TGIcon>
            Settings
          </TButton>
          <TButton stroked>
            <TGIcon left>icon-control</TGIcon>
            Settings
          </TButton>
          <TButton disabled>
            <TGIcon left>icon-control</TGIcon>
            Settings
          </TButton>
          <TButton outlined disabled>
            <TGIcon left>icon-control</TGIcon>
            Settings
          </TButton>
          <TButton text disabled>
            <TGIcon left>icon-control</TGIcon>
            Settings
          </TButton>
          <TButton stroked disabled>
            <TGIcon left>icon-control</TGIcon>
            Settings
          </TButton>
        </div>

        <TDivider></TDivider>

        <div class="inlineButtons">
          <div>Icon at the right</div>
          <TButton>
            Settings
            <TGIcon right>icon-control</TGIcon>
          </TButton>
          <TButton outlined>
            Settings
            <TGIcon right>icon-control</TGIcon>
          </TButton>
          <TButton text>
            Settings
            <TGIcon right>icon-control</TGIcon>
          </TButton>
          <TButton stroked>
            Settings
            <TGIcon right>icon-control</TGIcon>
          </TButton>
          <TButton disabled>
            Settings
            <TGIcon right>icon-control</TGIcon>
          </TButton>
          <TButton outlined disabled>
            Settings
            <TGIcon right>icon-control</TGIcon>
          </TButton>
          <TButton text disabled>
            Settings
            <TGIcon right>icon-control</TGIcon>
          </TButton>
          <TButton stroked disabled>
            Settings
            <TGIcon right>icon-control</TGIcon>
          </TButton>
        </div>
      </div>
    </div>

    <div class="bContainers">
      <div style="font-weight: 600;">6 Size Options</div>
      <div style="margin-top: 40px;">
        <div class="inlineButtons">
          <div>Default</div>
          <TButton x-small style="margin-right: 24px;">x-small</TButton>
          <TButton small style="margin-right: 24px;">small</TButton>
          <TButton medium style="margin-right: 24px;">medium</TButton>
          <TButton large style="margin-right: 24px;">large</TButton>
          <TButton x-large style="margin-right: 24px;">x-large</TButton>
          <TButton xx-large style="margin-right: 24px;">xx-large</TButton>
        </div>
        <TDivider></TDivider>
        <div class="inlineButtons">
          <div>Outlined</div>
          <TButton x-small style="margin-right: 24px;" outlined>x-small</TButton>
          <TButton small style="margin-right: 24px;" outlined>small</TButton>
          <TButton medium style="margin-right: 24px;" outlined>medium</TButton>
          <TButton large style="margin-right: 24px;" outlined>large</TButton>
          <TButton x-large style="margin-right: 24px;" outlined>x-large</TButton>
          <TButton xx-large style="margin-right: 24px;" outlined>xx-large</TButton>
        </div>
        <TDivider></TDivider>
        <div class="inlineButtons">
          <div>Text</div>
          <TButton x-small style="margin-right: 24px;" text>x-small</TButton>
          <TButton small style="margin-right: 24px;" text>small</TButton>
          <TButton medium style="margin-right: 24px;" text>medium</TButton>
          <TButton large style="margin-right: 24px;" text>large</TButton>
          <TButton x-large style="margin-right: 24px;" text>x-large</TButton>
          <TButton xx-large style="margin-right: 24px;" text>xx-large</TButton>
        </div>
        <TDivider></TDivider>
        <div class="inlineButtons">
          <div>Stroked</div>
          <TButton x-small style="margin-right: 24px;" stroked>x-small</TButton>
          <TButton small style="margin-right: 24px;" stroked>small</TButton>
          <TButton medium style="margin-right: 24px;" stroked>medium</TButton>
          <TButton large style="margin-right: 24px;" stroked>large</TButton>
          <TButton x-large style="margin-right: 24px;" stroked>x-large</TButton>
          <TButton xx-large style="margin-right: 24px;" stroked>xx-large</TButton>
        </div>
      </div>
    </div>

    <div class="bContainers">
      <div style="font-weight: 600;">Loading Buttons</div>
      <div style="margin-top: 40px;">
        <div class="inlineButtons">
          <div>Loading</div>
          <TButton loading>Button</TButton>
          <TButton loading outlined>Button</TButton>
          <TButton loading text>Button</TButton>
          <TButton loading stroked>Button</TButton>
        </div>
      </div>
    </div>

    <div class="bContainers">
      <div style="font-weight: 600;">Icon Buttons</div>
      <div style="margin-top: 40px;">
        <div class="inlineButtons">
          <div>Icon Buttons</div>
          <TButton icon-button>
            <TGIcon>icon-control</TGIcon>
          </TButton>
          <TButton icon-button outlined>
            <TGIcon>icon-control</TGIcon>
          </TButton>
          <TButton icon-button text>
            <TGIcon>icon-control</TGIcon>
          </TButton>
          <TButton icon-button stroked>
            <TGIcon>icon-control</TGIcon>
          </TButton>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'JTButton',
})
export default class JTButton extends Vue {
}
</script>

<style scoped lang="scss">
@import "component-styles";

@mixin buttonsGroup {
  &:first-child {
    font-weight: 500;
    flex: none;
    flex-basis: 200px;
  }

  &:not(:first-child) {
    margin-right: 16px;
  }
}

.inlineButtons {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  div, button {
    @include buttonsGroup;
  }
}

</style>
