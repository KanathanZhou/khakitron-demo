<template>
  <div style="padding: 16px;">
    <div class="bContainers">
      <div style="font-weight: 600;">Basic Chips</div>
      <div style="margin-top: 40px;">
        <TChip color-theme="basic">basic chip</TChip>
        <TChip color-theme="primary">primary chip</TChip>
        <TChip color-theme="secondary">secondary chip</TChip>
        <TChip color-theme="info">info chip</TChip>
        <TChip color-theme="success">success chip</TChip>
        <TChip color-theme="warning">warning chip</TChip>
        <TChip color-theme="danger">danger chip</TChip>
        <TChip color-theme="gray">gray chip</TChip>
      </div>
      <div style="margin-top: 40px;">
        <TChip color-theme="basic" contrast>basic contrast chip</TChip>
        <TChip color-theme="primary" contrast>primary contrast chip</TChip>
        <TChip color-theme="secondary" contrast>secondary contrast chip</TChip>
        <TChip color-theme="info" contrast>info contrast chip</TChip>
        <TChip color-theme="success" contrast>success contrast chip</TChip>
        <TChip color-theme="warning" contrast>warning contrast chip</TChip>
        <TChip color-theme="danger" contrast>danger contrast chip</TChip>
        <TChip color-theme="gray" contrast>gray contrast chip</TChip>
      </div>
      <div style="margin-top: 40px;">
        <TChip color-theme="basic" outlined>basic outlined chip</TChip>
        <TChip color-theme="primary" outlined>primary outlined chip</TChip>
        <TChip color-theme="secondary" outlined>secondary outlined chip</TChip>
        <TChip color-theme="info" outlined>info outlined chip</TChip>
        <TChip color-theme="success" outlined>success outlined chip</TChip>
        <TChip color-theme="warning" outlined>warning outlined chip</TChip>
        <TChip color-theme="danger" outlined>danger outlined chip</TChip>
        <TChip color-theme="gray" outlined>gray outlined chip</TChip>
      </div>
      <div style="margin-top: 40px;">
        <TChip color-theme="basic" stroked>basic stroked chip</TChip>
        <TChip color-theme="primary" stroked>primary stroked chip</TChip>
        <TChip color-theme="secondary" stroked>secondary stroked chip</TChip>
        <TChip color-theme="info" stroked>info stroked chip</TChip>
        <TChip color-theme="success" stroked>success stroked chip</TChip>
        <TChip color-theme="warning" stroked>warning stroked chip</TChip>
        <TChip color-theme="danger" stroked>danger stroked chip</TChip>
        <TChip color-theme="gray" stroked>gray stroked chip</TChip>
      </div>
    </div>

    <div class="bContainers">
      <div style="font-weight: 600;">Chip w/ icons</div>
      <div style="margin-top: 40px;">
        <TChip color-theme="basic">
          <TGIcon left>icon-control</TGIcon>
          Icon at the left
        </TChip>
        <TChip color-theme="basic">
          Icon at the right
          <TGIcon right>icon-control</TGIcon>
        </TChip>
        <TChip color-theme="basic">
          <TGIcon left>icon-control</TGIcon>
          Icon at both sides
          <TGIcon right>icon-control</TGIcon>
        </TChip>
      </div>
    </div>

    <div class="bContainers">
      <div style="font-weight: 600;">2 size options</div>
      <div style="margin-top: 40px;">
        <TChip color-theme="basic" small>
          Small Size
        </TChip>
        <TChip color-theme="basic">
          Default Size
        </TChip>
      </div>
    </div>

    <div class="bContainers">
      <div style="font-weight: 600;">Chip looks like tag</div>
      <div style="margin-top: 40px;">
        <TChip color-theme="basic" tag>
          Tag Chip
        </TChip>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'JTChip',
})
export default class JTChip extends Vue {
}
</script>

<style scoped lang="scss">
@import "component-styles";
</style>
