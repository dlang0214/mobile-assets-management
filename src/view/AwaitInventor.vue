<template>
  <div class="awaitInventor">
    <div class="single" v-for="item in inventorylist" :key="item.id">
      <InventorPplanning
        :inventoryInfo = "item">
      </InventorPplanning>
    </div>
  </div>
</template>

<script>
import InventorPplanning from '@/components/InventorPplanning'
export default {
  name: 'AwaitInventor',
  data () {
    return {
      inventorylist: [
        {
          id: '1',
          type: '笔记本电脑',
          brand: '戴尔',
          model: 'DAIERP（i5/8G/256G/SSD硬盘',
          tagNum: '10-120300201808070001',
          SN: 'SFVFX13P8HV2D',
          characteristic: '陕A·NB888',
          checked: false
        },
        {
          id: '2',
          type: '手机',
          brand: '华为',
          model: 'HUAWEI P20 Pro（6GB+128GB）',
          tagNum: '10-120300201808070001',
          SN: 'SFVFX13P8HV2D',
          characteristic: '',
          checked: false
        },
        {
          id: '3',
          type: '鼠标',
          brand: '罗技',
          model: 'DAIERP（i5/8G/256G/SSD硬盘',
          tagNum: '10-120300201808070001',
          SN: 'SFVFX13P8HV2D',
          characteristic: '',
          checked: false
        },
        {
          id: '4',
          type: '键盘',
          brand: 'IKBC',
          model: 'DAIERP（i5/8G/256G/SSD硬盘',
          tagNum: '10-120300201808070001',
          SN: 'SFVFX13P8HV2D',
          characteristic: '',
          checked: false
        },
        {
          id: '5',
          type: '沙发',
          brand: '斯佳蒙',
          model: 'STRANDMON 斯佳蒙 脚凳',
          tagNum: '10-120300201808070001',
          SN: 'SFVFX13P8HV2D',
          characteristic: '',
          checked: false
        },
        {
          id: '6',
          type: '汽车',
          brand: '特斯拉',
          model: 'Model S（2017款 改款 Model S 100D',
          tagNum: '10-120300201808070001',
          SN: '',
          characteristic: '陕A·NB888',
          checked: false
        }
      ]
    }
  },
  components: {
    InventorPplanning
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  .awaitInventor{
    width: 100%;
    .single{
      width: 100%;
      box-sizing: border-box;
      margin-bottom: .2rem;
    }
  }
</style>
