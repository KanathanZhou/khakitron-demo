<template>
  <div>
    <div class="jtTabSection">
      <div style="padding: 16px 24px 8px; border-bottom: 1px solid #dadce0;">
        <div class="jtTitle">Components</div>
      </div>
    </div>

    <div id="outer-container">
      <div id="kans-drawer">
        <div v-for="c in components" :key="c.id">
          <router-link class="drawerItem" :to="c.to" active-class="drawerItemActivated">
            {{ c.text }}
          </router-link>
        </div>
      </div>
      <div id="kans-content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable class-methods-use-this */
import { Component, Vue } from 'vue-property-decorator';
import {
  COMPONENTS_AVATAR,
  COMPONENTS_BREADCRUMB,
  COMPONENTS_BUTTON,
  COMPONENTS_CHECKBOX,
  COMPONENTS_CHIP,
  COMPONENTS_ICON,
  COMPONENTS_LINK,
  COMPONENTS_MENU, COMPONENTS_PAGINATION,
  COMPONENTS_RADIO,
  COMPONENTS_SELECT,
  COMPONENTS_SLIDES, COMPONENTS_SWITCH,
  COMPONENTS_TABLE,
  COMPONENTS_TABS,
  COMPONENTS_TEXTAREA,
  COMPONENTS_TEXTFIELD,
  COMPONENTS_TOOLTIP,
} from '@/router/routes';

@Component({
  name: 'Components',
})
export default class Components extends Vue {
  components: any[] = [
    { id: 0, text: 'Button', to: COMPONENTS_BUTTON },
    { id: 1, text: 'Breadcrumb', to: COMPONENTS_BREADCRUMB },
    { id: 2, text: 'Icon', to: COMPONENTS_ICON },
    { id: 3, text: 'Menu', to: COMPONENTS_MENU },
    { id: 4, text: 'Select', to: COMPONENTS_SELECT },
    { id: 5, text: 'Textarea', to: COMPONENTS_TEXTAREA },
    { id: 6, text: 'Textfield', to: COMPONENTS_TEXTFIELD },
    { id: 7, text: 'Checkbox', to: COMPONENTS_CHECKBOX },
    { id: 8, text: 'Chip', to: COMPONENTS_CHIP },
    { id: 9, text: 'Link', to: COMPONENTS_LINK },
    { id: 10, text: 'Radio', to: COMPONENTS_RADIO },
    { id: 11, text: 'Slides', to: COMPONENTS_SLIDES },
    { id: 12, text: 'Tabs', to: COMPONENTS_TABS },
    { id: 13, text: 'Table', to: COMPONENTS_TABLE },
    { id: 14, text: 'Pagination', to: COMPONENTS_PAGINATION },
    { id: 15, text: 'Switch', to: COMPONENTS_SWITCH },
    { id: 16, text: 'Avatar', to: COMPONENTS_AVATAR },
    { id: 17, text: 'Tooltip', to: COMPONENTS_TOOLTIP },
  ];
}
</script>

<style scoped lang="scss">
@import "../styles/main";

$DRAWER_EXPAND_WIDTH: 244;
$DRAWER_SHRINK_WIDTH: 56;

#outer-container {
  position: absolute;
  top: 134px;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  z-index: 100;
  display: flex;
}

#kans-drawer {
  flex: none;
  flex-basis: #{$DRAWER_EXPAND_WIDTH}px;
  //width: #{$DRAWER_EXPAND_WIDTH}px;
  overflow: auto;
  z-index: 100;
  border-right: 1px solid #dadce0;
  height: 100%;
  padding: 16px 0;

  .drawerItem {
    padding-left: 16px;
    @include kansTransition;
    color: $dark-200;
    font-weight: 500;
    font-size: 14px;
    border-top-right-radius: 999px;
    border-bottom-right-radius: 999px;
    display: flex;
    align-items: center;
    height: 36px;
    background-color: white;
    text-decoration: none;
    width: calc(#{$DRAWER_EXPAND_WIDTH}px - 16px);

    .router-link-active {
      color: $dark;
      font-weight: 500;
      background-color: $primary;
    }

    .drawerItemActivated {
      color: $dark;
      background-color: $primary;
    }

    &:hover {
      color: $dark;
      background-color: $primary;
    }
  }

  .drawerItemActivated {
    color: $dark;
    font-weight: 500;
    background-color: $primary;
  }
}

#kans-content {
  flex: 1;
  overflow: auto;
}
</style>
