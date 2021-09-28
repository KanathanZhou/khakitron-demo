<template>
  <div style="padding: 16px;">
    <div class="breadContainer">
      <div style="font-weight: 600;">Basic TextArea</div>
      <div style="margin-top: 40px; margin-bottom: 16px;">
        <TTextArea placeholder="Placeholder text"></TTextArea>
      </div>
    </div>
    <div class="breadContainer">
      <div style="font-weight: 600;">Basic TextArea Full Width</div>
      <div style="margin-top: 40px; margin-bottom: 16px;">
        <TTextArea block placeholder="Placeholder text"></TTextArea>
      </div>
    </div>
    <div class="breadContainer">
      <div style="font-weight: 600;">Basic TextArea User Defined Rows And Columns</div>
      <div style="margin-top: 40px; margin-bottom: 16px;">
        <TTextArea rows="12" cols="120" placeholder="Placeholder text"></TTextArea>
      </div>
    </div>
    <div class="breadContainer">
      <div style="font-weight: 600;">TextArea With Title</div>
      <div style="margin-top: 40px; margin-bottom: 16px;">
        <TTextArea title="Description" placeholder="Placeholder text"></TTextArea>
      </div>
    </div>
    <div class="breadContainer">
      <div style="font-weight: 600;">TextArea With Customized Title</div>
      <div style="margin-top: 40px; margin-bottom: 16px;">
        <TTextArea placeholder="Placeholder text">
          <template v-slot:title>
            <span style="color: #3eaf7c; background-color: beige;">
              I'm your Customized title
            </span>
          </template>
        </TTextArea>
      </div>
    </div>
    <div class="breadContainer">
      <div style="font-weight: 600;">TextArea With Hint</div>
      <div style="margin-top: 40px; margin-bottom: 16px;">
        <TTextArea placeholder="Placeholder text"
                   hint="Let me tell you a hint"></TTextArea>
      </div>
    </div>
    <div class="breadContainer">
      <div style="font-weight: 600;">TextArea With Error</div>
      <div style="margin-top: 40px; margin-bottom: 16px;">
        <TTextArea placeholder="Placeholder text"
                   error="Sorry you entered something wrong!"></TTextArea>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'JTTextarea',
})
export default class JTTextarea extends Vue {

}
</script>

<style scoped lang="scss">
@import "component-styles";
</style>
