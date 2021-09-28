<template>
  <div style="padding: 16px;">
    <div class="bContainers">
      <div style="font-weight: 600;">Basic Tabs</div>
      <div style="margin-top: 40px;">
        <TTabBar v-model="tabModel" block>
          <TTab :value="'1'">
            <div>What's Khakitron?</div>
          </TTab>
          <TTab :value="'2'">
            <div>Installation</div>
          </TTab>
          <TTab :value="'3'">
            <div>Walkthrough</div>
          </TTab>
          <TTab :value="'4'">
            <div>Components</div>
          </TTab>
          <TTab :value="'5'">
            <div>Icons</div>
          </TTab>
          <TTab :value="'6'">
            <div>Themes</div>
          </TTab>
        </TTabBar>
        <div>
          binding value: {{ tabModel }}
        </div>

      </div>
    </div>

    <div class="bContainers">
      <div style="font-weight: 600;">Outlined Tabs</div>
      <div style="margin-top: 40px;">
        <TTabBar v-model="tabModel2" block outlined>
          <TTab :value="'branches'">
            <div>Branches</div>
          </TTab>
          <TTab :value="'tags'">
            <div>Tags</div>
          </TTab>
        </TTabBar>
        <div>
          binding value: {{ tabModel2 }}
        </div>

      </div>
    </div>

    <div class="bContainers">
      <div style="font-weight: 600;">Disabled Tabs</div>
      <div style="margin-top: 40px;">
        <TTabBar v-model="tabModel3" block>
          <TTab :value="'1'">
            <div>What's Khakitron?</div>
          </TTab>
          <TTab :value="'2'">
            <div>Installation</div>
          </TTab>
          <TTab :value="'3'" disabled>
            <div>Walkthrough</div>
          </TTab>
          <TTab :value="'4'" disabled>
            <div>Components</div>
          </TTab>
        </TTabBar>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'JTTabs',
})
export default class JTTabs extends Vue {
  tabModel = '1';

  tabModel2 = 'tags';

  tabModel3 = '1';
}
</script>

<style scoped lang="scss">
@import "component-styles";
</style>
