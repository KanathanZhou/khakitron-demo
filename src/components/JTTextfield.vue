<template>
  <div style="padding: 16px;">
    <div class="breadContainer">
      <div style="font-weight: 600;">Basic Textfield</div>
      <div style="margin-top: 40px; margin-bottom: 16px;">
        <TTextField placeholder="Please enter"></TTextField>
      </div>
    </div>
    <div class="breadContainer">
      <div style="font-weight: 600;">Textfield With Default Title</div>
      <div style="margin-top: 40px; margin-bottom: 16px;">
        <TTextField title="Username"
                    placeholder="Please enter your username">
        </TTextField>
      </div>
    </div>
    <div class="breadContainer">
      <div style="font-weight: 600;">Textfield With Customized Title</div>
      <div style="margin-top: 40px; margin-bottom: 16px;">
        <TTextField placeholder="Please enter your username">
          <template v-slot:title>
            <span style="color: #3eaf7c; background-color: beige;">
              I'm your Customized title
            </span>
          </template>
        </TTextField>
      </div>
    </div>
    <div class="breadContainer">
      <div style="font-weight: 600;">Textfield Full Width</div>
      <div style="margin-top: 40px; margin-bottom: 16px;">
        <TTextField
          placeholder="Please enter"
          block>
        </TTextField>
      </div>
    </div>
    <div class="breadContainer">
      <div style="font-weight: 600;">Textfield With Hint</div>
      <div style="margin-top: 40px; margin-bottom: 16px;">
        <TTextField
          placeholder="Please enter"
          hint="Let me tell you a hint"
        >
        </TTextField>
      </div>
    </div>
    <div class="breadContainer">
      <div style="font-weight: 600;">Textfield With Error</div>
      <div style="margin-top: 40px; margin-bottom: 16px;">
        <TTextField
          placeholder="Please enter"
          error="Woops! You entered wrong thing"
        >
        </TTextField>
      </div>
    </div>
    <div class="breadContainer">
      <div style="font-weight: 600;">Textfield Disabled</div>
      <div style="margin-top: 40px; margin-bottom: 16px;">
        <TTextField
          placeholder="This textfield is disabled"
          disabled
        >
        </TTextField>
      </div>
    </div>
    <div class="breadContainer">
      <div style="font-weight: 600;">Textfield With Customized Right Position Content</div>
      <div style="margin-top: 40px; margin-bottom: 16px;">
        <TTextField
          placeholder="This textfield is disabled"
        >
          <template v-slot:right>
            <div style="cursor: pointer; display: flex; align-items: center;">
              click me!<TGIcon style="margin-left: 4px;">icon-control</TGIcon>
            </div>
          </template>
        </TTextField>
      </div>
    </div>
    <div class="breadContainer">
      <div style="font-weight: 600;">
        Textfield With Customized Right Position Content plus Error
      </div>
      <div style="margin-top: 40px; margin-bottom: 16px;">
        <TTextField
          placeholder="This textfield is disabled"
          error="Sorry you entered something wrong!"
        >
          <template v-slot:right>
            <div style="cursor: pointer; display: flex; align-items: center;">
              click me!<TGIcon style="margin-left: 4px;">icon-control</TGIcon>
            </div>
          </template>
        </TTextField>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'JTTextfield',
})
export default class JTTextfield extends Vue {
}
</script>

<style scoped lang="scss">
@import "component-styles";
</style>
