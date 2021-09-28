<template>
  <div style="padding: 16px;">
    <div class="breadContainer">
      <div style="font-weight: 600;">Basic Select</div>
      <div style="margin-top: 40px; margin-bottom: 16px;">
        <TSelect v-model="selectedOption"
                 :items="selectItems">
        </TSelect>
      </div>
    </div>
    <div class="breadContainer">
      <div style="font-weight: 600;">Basic Select With Title</div>
      <div style="margin-top: 40px; margin-bottom: 16px;">
        <TSelect v-model="selectedOption"
                 title="I am a title"
                 :items="selectItems">
        </TSelect>
      </div>
    </div>
    <div class="breadContainer">
      <div style="font-weight: 600;">Basic Select With Error</div>
      <div style="margin-top: 40px; margin-bottom: 16px;">
        <TSelect v-model="selectedOption"
                 error="Wrong Select!"
                 :items="selectItems">
        </TSelect>
      </div>
    </div>
    <div class="breadContainer">
      <div style="font-weight: 600;">Disabled Basic Select</div>
      <div style="margin-top: 40px; margin-bottom: 16px;">
        <TSelect v-model="selectedOption"
                 disabled
                 :items="selectItems">
        </TSelect>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'JTSelect',
})
export default class JTSelect extends Vue {
  selectItems = [
    { text: 'foo1', value: '1' },
    { text: 'foo2', value: '2' },
  ];

  selectedOption = '1';
}
</script>

<style scoped lang="scss">
@import "component-styles";
</style>
