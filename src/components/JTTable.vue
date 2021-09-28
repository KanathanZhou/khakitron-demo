<template>
  <div style="padding: 16px;">
    <div class="bContainers">
      <div>Basic Table</div>
      <div style="margin-top: 40px;">
        <TTable :headers="tableHeaders" :items="tableItems">

          <template v-slot:header1="{ item }">
            <div style="color: red; display: flex; align-items: center;">{{ item.header1 }}
              <TChip stroked small>Default</TChip>
            </div>
          </template>
          <template v-slot:header7>
            <TButton>查看数据集</TButton>
          </template>

        </TTable>
      </div>
    </div>
    <div class="bContainers">
      <div>Basic Table w/ white header theme</div>
      <div style="margin-top: 40px;">
        <TTable :headers="tableHeaders" :items="tableItems" header-color-theme="white">

          <template v-slot:header1="{ item }">
            <div style="color: red; display: flex; align-items: center;">{{ item.header1 }}
              <TChip stroked small>Default</TChip>
            </div>
          </template>
          <template v-slot:header7>
            <TButton>查看数据集</TButton>
          </template>

        </TTable>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'JTTable',
})
export default class JTTable extends Vue {
  tableHeaders: any[] = [
    { text: '配置名称', value: 'header1' },
    { text: '存储方式', value: 'header2' },
    { text: '存储服务商', value: 'header3' },
    { text: '区域', value: 'header4' },
    { text: '存储容器', value: 'header5' },
    { text: '状态', value: 'header6' },
    { text: '操作', value: 'header7', width: '400px' },
  ];

  tableItems: any[] = [
    {
      header1: '1',
      header2: '2',
      header3: '3',
      header4: '4',
      header5: '5',
      header6: '6',
      header7: '7',
    },
    {
      header1: '1',
      header2: '2',
      header3: '3',
      header4: '4',
      header5: '5',
      header6: '6',
      header7: '7',
    },
  ];
}
</script>

<style scoped lang="scss">
@import "component-styles";
</style>
