import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Base from '@/base/Base.vue';
import Home from '@/views/Home.vue';
import News from '@/views/News.vue';
import {
  COMPONENTS_AVATAR,
  COMPONENTS_BREADCRUMB,
  COMPONENTS_BUTTON,
  COMPONENTS_CHECKBOX,
  COMPONENTS_CHIP,
  COMPONENTS_ICON,
  COMPONENTS_LINK,
  COMPONENTS_MENU,
  COMPONENTS_PAGINATION,
  COMPONENTS_RADIO,
  COMPONENTS_SELECT,
  COMPONENTS_SLIDES,
  COMPONENTS_SWITCH,
  COMPONENTS_TABLE,
  COMPONENTS_TABS,
  COMPONENTS_TEXTAREA,
  COMPONENTS_TEXTFIELD, COMPONENTS_TOOLTIP,
} from '@/router/routes';
import Installation from '@/views/Installation.vue';
import Components from '@/views/Components.vue';
import Themes from '@/views/Themes.vue';
import Walkthrough from '@/views/Walkthrough.vue';
import Icons from '@/views/Icons.vue';

Vue.use(VueRouter);

export const ROUTE_HOME: RouteConfig = {
  path: '/home',
  name: 'Home',
  component: Home,
};

export const ROUTE_INSTALLATION: RouteConfig = {
  path: '/installation',
  name: 'Installation',
  component: Installation,
};

export const ROUTE_COMPONENTS: RouteConfig = {
  path: '/components',
  name: 'Components',
  component: Components,
  redirect: COMPONENTS_BUTTON,
  children: [
    COMPONENTS_BUTTON,
    COMPONENTS_BREADCRUMB,
    COMPONENTS_ICON,
    COMPONENTS_MENU,
    COMPONENTS_SELECT,
    COMPONENTS_TEXTAREA,
    COMPONENTS_TEXTFIELD,
    COMPONENTS_CHECKBOX,
    COMPONENTS_CHIP,
    COMPONENTS_LINK,
    COMPONENTS_RADIO,
    COMPONENTS_SLIDES,
    COMPONENTS_TABS,
    COMPONENTS_TABLE,
    COMPONENTS_PAGINATION,
    COMPONENTS_SWITCH,
    COMPONENTS_AVATAR,
    COMPONENTS_TOOLTIP,
  ],
};

export const ROUTE_ICONS: RouteConfig = {
  path: '/icons',
  name: 'Icons',
  component: Icons,
};

export const ROUTE_THEMES: RouteConfig = {
  path: '/themes',
  name: 'Themes',
  component: Themes,
};

export const ROUTE_WALKTHROUGH: RouteConfig = {
  path: '/walkthrough',
  name: 'Walkthrough',
  component: Walkthrough,
};

export const ROUTE_NEWS: RouteConfig = {
  path: '/news',
  name: 'news',
  component: News,
};

const ROUTE_BASE: RouteConfig = {
  path: '*',
  name: 'base',
  redirect: ROUTE_HOME,
  component: Base,
  children: [
    ROUTE_HOME,
    ROUTE_INSTALLATION,
    ROUTE_COMPONENTS,
    ROUTE_ICONS,
    ROUTE_THEMES,
    ROUTE_WALKTHROUGH,
    ROUTE_NEWS,
  ],
};

const routes: RouteConfig[] = [
  ROUTE_BASE,
];

const router = new VueRouter({
  // mode: 'history',
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
