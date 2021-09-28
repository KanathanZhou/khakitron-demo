<template>
  <div style="padding: 16px;">
    <div class="bContainers">
      <div style="font-weight: 600;">Basic Checkbox</div>
      <div style="margin-top: 40px;">
        <TCheckBox v-model="cb" :label="cb.toString()" :value="true"></TCheckBox>
      </div>
    </div>

    <div class="bContainers">
      <div style="font-weight: 600;">Disabled Checkbox</div>
      <div style="margin-top: 40px;">
        <TCheckBox :label="'disable checked'" :value="true" disabled></TCheckBox>
      </div>
      <div style="margin-top: 40px;">
        <TCheckBox :label="'disabled unchecked'" :value="false" disabled></TCheckBox>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'JTCheckbox',
})
export default class JTCheckbox extends Vue {
  cb = true;

  cb2 = true;
}
</script>

<style scoped lang="scss">
@import "component-styles";
</style>
