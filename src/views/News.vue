<template>
  <div>
    <div class="jtTabSection">
      <div style="padding: 16px 24px 8px;">
        <div class="jtTitle">NEWS</div>
      </div>
      <TTabBar v-model="tab" style="padding: 0 24px;">
        <TTab value="0" class="jtTab">General</TTab>
        <TTab value="3" class="jtTab">Khakitron</TTab>
      </TTabBar>
    </div>

    <div style="display: flex; align-items: center; flex-direction: column; margin: 120px 0;">
      <div style="margin-bottom: 24px;">
        更多精彩的新闻即将呈现
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'News',
})
export default class News extends Vue {
  tab = '0';
}
</script>

<style scoped lang="scss">
@import "../styles/main";
</style>
