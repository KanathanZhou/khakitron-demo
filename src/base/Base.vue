<template>
  <div id="base">
    <div id="appBar">
      <div class="appBarTitle">Khakitron</div>
<!--      <img src="../assets/logo.jpeg" alt="" class="appBarLogo">-->
      <div class="appBarTabBar">
        <div class="tabBarTab" v-for="tab in tabs" :key="tab.id">
          <router-link active-class="appBarLinkActive" class="appBarLink" :to="tab.to">
            {{ tab.text }}
          </router-link>
        </div>
      </div>
<!--      <TButton icon-button text color="basic" style="margin: 0 2px;">
        <TGIcon>icon-bulb</TGIcon>
      </TButton>
      <TButton icon-button text color="basic" style="margin: 0 2px;">
        <TGIcon>icon-download</TGIcon>
      </TButton>
      <TButton icon-button text color="basic" style="margin: 0 2px;">
        <TGIcon>icon-control</TGIcon>
      </TButton>-->
      <TMenu :items="languages" style="margin: 0 4px;">
        <template v-slot:trigger="{ on }">
          <TButton v-on="on" stroked color="basic" style="font-weight: 500;">
            English
            <TGIcon right>icon-down-color</TGIcon>
          </TButton>
        </template>
      </TMenu>
<!--      <TButton color="info" text style="font-weight: 500; margin: 0 4px;" @click="onSignIn()">
        Sign in
      </TButton>-->
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'Base',
})
export default class Base extends Vue {
  tabs = [
    { id: 0, text: 'What is Khakitron?', to: '/home' },
    { id: 1, text: 'Installation', to: '/installation' },
    // { id: 2, text: 'Walkthrough', to: '/walkthrough' },
    { id: 3, text: 'Components', to: '/components' },
    { id: 5, text: 'Icons', to: '/icons' },
    // { id: 6, text: 'Themes', to: '/themes' },
    // { id: 7, text: 'News', to: '/news' },
  ];

  languages = [
    { text: 'English', value: 'en-US' },
    // { text: '简体中文', value: 'zh-CN' },
  ];

  onSignIn(): void {
    // TODO
  }
}
</script>

<style scoped lang="scss">
@import "../styles/main";

#base {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

#appBar {
  display: flex;
  height: 48px;
  align-items: center;
  border-bottom: 1px solid #dadce0;
  box-sizing: content-box;
  padding: 0 24px;

  .appBarTitle {
    margin-right: 4px;
    cursor: default;
    font-weight: 600;
  }

  .appBarLogo {
    height: 100%;
    object-fit: cover;
  }

  .appBarTabBar {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0 24px;

    .tabBarTab {
      height: 100%;
    }
  }

  .appBarLink {
    position: relative;
    @include kansTransition;
    color: $info;
    text-decoration: none;
    font-weight: 500;
    font-size: 14px;
    padding: 0 24px;
    height: 100%;
    display: flex;
    align-items: center;

    &:hover {
      color: $dark;

      &:before {
        position: absolute;
        bottom: 0;
        left: 24px;
        right: 24px;

        display: block;
        content: "";
        border-top: 3px solid $dark-200;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
      }

    }
  }

  .appBarLinkActive {
    color: $dark;

    &:after {
      position: absolute;
      bottom: 0;
      left: 24px;
      right: 24px;

      display: block;
      content: "";
      border-top: 3px solid $primary;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
    }
  }
}
</style>
