<template>
  <div style="padding: 16px;">
    <div class="breadContainer">
      <div style="font-weight: 600;">Basic Menu</div>
      <div style="margin-top: 40px; margin-bottom: 16px;">
        <TMenu :items="menuItems" options-width="200px">
          <template v-slot:trigger="{ on }">
            <TButton v-on="on">Click me!</TButton>
          </template>
        </TMenu>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'JTMenu',
})
export default class JTMenu extends Vue {
  menuItems = [
    { text: '312', value: 'dsad' },
    { text: '312', value: 'dsadxx' },
  ];
}
</script>

<style scoped lang="scss">
@import "component-styles";
</style>
