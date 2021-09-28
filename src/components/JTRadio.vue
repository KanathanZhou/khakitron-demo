<template>
  <div style="padding: 16px;">
    <div class="bContainers">
      <div style="font-weight: 600;">Basic Radios</div>
      <div style="margin-top: 40px;">
        <TRadioGroup>
          <TRadioButton label="China" value="china"></TRadioButton>
          <TRadioButton label="England" value="england"></TRadioButton>
          <TRadioButton label="US" value="us"></TRadioButton>
        </TRadioGroup>
      </div>
    </div>

    <div class="bContainers">
      <div style="font-weight: 600;">v-model binding</div>
      <div style="margin-top: 40px; margin-bottom: 24px;">
        <TRadioGroup v-model="country">
          <TRadioButton label="China" value="china"></TRadioButton>
          <TRadioButton label="England" value="england"></TRadioButton>
          <TRadioButton label="US" value="us"></TRadioButton>
        </TRadioGroup>
      </div>
      <div>Your binding value: {{ country }}</div>
    </div>

    <div class="bContainers">
      <div style="font-weight: 600;">Disabled</div>
      <div style="margin-top: 40px; margin-bottom: 24px;">
        <TRadioGroup disabled>
          <TRadioButton label="China" value="china"></TRadioButton>
          <TRadioButton label="England" value="england"></TRadioButton>
          <TRadioButton label="US" value="us"></TRadioButton>
        </TRadioGroup>
        <TRadioGroup style="margin-top: 24px;">
          <TRadioButton label="China" value="china"></TRadioButton>
          <TRadioButton label="England" value="england" disabled></TRadioButton>
          <TRadioButton label="US" value="us"></TRadioButton>
        </TRadioGroup>
      </div>
    </div>

    <div class="bContainers">
      <div style="font-weight: 600;">Horizontal direction</div>
      <div style="margin-top: 40px; margin-bottom: 24px;">
        <TRadioGroup v-model="rg" horizontal>
          <TRadioButton label="True" :value="true"></TRadioButton>
          <TRadioButton label="False" :value="false"></TRadioButton>
        </TRadioGroup>
      </div>
    </div>

    <div class="bContainers">
      <div style="font-weight: 600;">Custom radio label</div>
      <div style="margin-top: 40px; margin-bottom: 24px;">
        <TRadioGroup>
          <TRadioButton label="China" value="china"></TRadioButton>
          <TRadioButton label="England" value="england"></TRadioButton>
          <TRadioButton label="US" value="us"></TRadioButton>
          <TRadioButton label="Custom" value="custom">
            <template v-slot:label>
              <div>
                <TGIcon>icon-control</TGIcon>
                <TGIcon>icon-control</TGIcon>
              </div>
              <div>I am a custom label</div>
            </template>

          </TRadioButton>
        </TRadioGroup>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'JTRadio',
})
export default class JTRadio extends Vue {
  country = 'china';

  rg = true;
}
</script>

<style scoped lang="scss">
@import "component-styles";
</style>
