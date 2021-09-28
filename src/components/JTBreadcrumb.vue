<template>
  <div style="padding: 16px;">
    <div class="bContainers">
      <div style="font-weight: 600;">Basic Breadcrumbs</div>
      <div style="margin-top: 40px;">
        <TBreadcrumbs :items="breadcrumbs"></TBreadcrumbs>
      </div>
      <div style="margin-top: 40px; margin-bottom: 40px;">
        <TBreadcrumbs :items="breadcrumbs2"></TBreadcrumbs>
      </div>
      <div style="margin-top: 40px; margin-bottom: 40px;">
        <TBreadcrumbs :items="breadcrumbs3"></TBreadcrumbs>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'JTBreadcrumb',
})
export default class JTBreadcrumb extends Vue {
  breadcrumbs = [
    { text: 'Top-Level-Page', href: '/' },
    { text: 'Second-Level-Page', href: '/' },
    { text: 'Third-Level-Page', href: '/' },
  ];

  breadcrumbs2 = [
    { text: 'Dashboard', href: '/' },
    { text: 'Button', href: '/' },
    { text: 'Breadcrumbs', href: '/' },
  ];

  breadcrumbs3 = [
    { text: '1', href: '/' },
    { text: '2', href: '/' },
    { text: '3', href: '/' },
  ];
}
</script>

<style scoped lang="scss">
@import "component-styles";
</style>
