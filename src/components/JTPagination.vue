<template>
  <div style="padding: 16px;">
    <div class="bContainers">
      <div style="font-weight: 600;">Basic Pagination</div>
      <div style="margin-top: 40px; margin-bottom: 16px;">
        <TPagination v-model="page2"
                     :length="12">
        </TPagination>
      </div>
    </div>

    <div class="bContainers">
      <div style="font-weight: 600;">Basic Pagination</div>
      <div style="margin-top: 40px; margin-bottom: 16px;">
        <TPagination v-model="page1"
                     outlined
                     :length="12">
        </TPagination>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'JTPagination',
})
export default class JTPagination extends Vue {
  page1 = 10;

  page2 = 5;
}
</script>

<style scoped lang="scss">
@import "component-styles";
</style>
