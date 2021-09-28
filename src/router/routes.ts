import { RouteConfig } from 'vue-router';
import JTButton from '@/components/JTButton.vue';
import JTBreadcrumb from '@/components/JTBreadcrumb.vue';
import JTIcon from '@/components/JTIcon.vue';
import JTMenu from '@/components/JTMenu.vue';
import JTSelect from '@/components/JTSelect.vue';
import JTTextarea from '@/components/JTTextarea.vue';
import JTTextfield from '@/components/JTTextfield.vue';
import JTCheckbox from '@/components/JTCheckbox.vue';
import JTChip from '@/components/JTChip.vue';
import JTLink from '@/components/JTLink.vue';
import JTRadio from '@/components/JTRadio.vue';
import JTSlides from '@/components/JTSlides.vue';
import JTTabs from '@/components/JTTabs.vue';
import JTTable from '@/components/JTTable.vue';
import JTPagination from '@/components/JTPagination.vue';
import JTSwitch from '@/components/JTSwitch.vue';
import JTAvatar from '@/components/JTAvatar.vue';
import JTTooltip from '@/components/JTTooltip.vue';

export const COMPONENTS_BREADCRUMB: RouteConfig = {
  path: '/components/breadcrumb',
  name: 'components-breadcrumb',
  component: JTBreadcrumb,
};

export const COMPONENTS_BUTTON: RouteConfig = {
  path: '/components/button',
  name: 'components-button',
  component: JTButton,
};

export const COMPONENTS_ICON: RouteConfig = {
  path: '/components/icon',
  name: 'components-icon',
  component: JTIcon,
};

export const COMPONENTS_MENU: RouteConfig = {
  path: '/components/menu',
  name: 'components-menu',
  component: JTMenu,
};

export const COMPONENTS_SELECT: RouteConfig = {
  path: '/components/select',
  name: 'components-select',
  component: JTSelect,
};

export const COMPONENTS_TEXTAREA: RouteConfig = {
  path: '/components/textarea',
  name: 'components-textare',
  component: JTTextarea,
};

export const COMPONENTS_TEXTFIELD: RouteConfig = {
  path: '/components/textfield',
  name: 'components-textfield',
  component: JTTextfield,
};

export const COMPONENTS_CHECKBOX: RouteConfig = {
  path: '/components/checkbox',
  name: 'components-checkbox',
  component: JTCheckbox,
};

export const COMPONENTS_CHIP: RouteConfig = {
  path: '/components/chip',
  name: 'components-chip',
  component: JTChip,
};

export const COMPONENTS_LINK: RouteConfig = {
  path: '/components/link',
  name: 'components-link',
  component: JTLink,
};

export const COMPONENTS_RADIO: RouteConfig = {
  path: '/components/radio',
  name: 'components-radio',
  component: JTRadio,
};

export const COMPONENTS_SLIDES: RouteConfig = {
  path: '/components/slides',
  name: 'components-slides',
  component: JTSlides,
};

export const COMPONENTS_TABS: RouteConfig = {
  path: '/components/tabs',
  name: 'components-tabs',
  component: JTTabs,
};

export const COMPONENTS_TABLE: RouteConfig = {
  path: '/components/table',
  name: 'components-table',
  component: JTTable,
};

export const COMPONENTS_PAGINATION: RouteConfig = {
  path: '/components/pagination',
  name: 'components-pagination',
  component: JTPagination,
};

export const COMPONENTS_SWITCH: RouteConfig = {
  path: '/components/switch',
  name: 'components-switch',
  component: JTSwitch,
};

export const COMPONENTS_AVATAR: RouteConfig = {
  path: '/components/avatar',
  name: 'components-avatar',
  component: JTAvatar,
};

export const COMPONENTS_TOOLTIP: RouteConfig = {
  path: '/components/tooltip',
  name: 'components-tooltip',
  component: JTTooltip,
};
