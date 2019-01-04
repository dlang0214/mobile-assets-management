<!-- 选择资产类别 -->
<template>
  <div class="selectInventorCategory">
    <div class="navaBarBox">
      <NaveBar :colors="colors">
        <div class="naveBarContent">
          选择资产类别
        </div>
      </NaveBar>
    </div>
    <div class="categoryContent">
      <div class="content">
        <div class="contentList">
          <van-checkbox v-model="checkSN" @change="getCategory(1)">电子/办公设备</van-checkbox>
          <div class="snInput" v-if="checkSN">
            <van-field v-model="snNum" placeholder="请输入SN码（必填）" ref="sninput"/>
            <p>只能输入数字和字母，输入完成点击下一步之后不能修改</p>
          </div>
        </div>
        <div class="contentList">
          <van-checkbox v-model="checkCar"  @change="getCategory(2)">机动车辆</van-checkbox>
        </div>
        <div class="contentList">
          <van-checkbox v-model="checkOther"  @change="getCategory(3)">其他</van-checkbox>
        </div>
        <div class="submitBtn">
         <span @click="closeAddInventor">取消</span>
         <span @click="nextStep">下一步</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NaveBar from '@/components/NaveBar'
import {Toast} from 'vant'
export default {
  name: 'SelectInventorCategory',
  data () {
    return {
      colors: '#1989fa',
      checkSN: false,
      checkCar: false,
      checkOther: false,
      snNum: ''
    }
  },
  methods: {
    getCategory (type) {
      if (type === 1 && this.checkSN) {
        this.checkCar = this.checkOther = !this.checkSN
      }
      if (type === 2 && this.checkCar) {
        this.checkSN = this.checkOther = !this.checkCar
      }
      if (type === 3 && this.checkOther) {
        this.checkCar = this.checkSN = !this.checkOther
      }
    },
    closeAddInventor () {
      console.log('取消')
      this.$router.go(-1)
    },
    nextStep () {
      if (this.checkSN && this.snNum.trim() === '') {
        this.$refs.sninput.focus()
        Toast.fail('请填写资产SN码')
        return
      }
      this.$router.push('/addAsset')
    }
  },
  components: {
    NaveBar
  }
}
</script>

<style lang="scss">
  .selectInventorCategory{
    .van-cell:not(:last-child)::after{
      border-color: transparent;
    }
    .van-field__body{
      border: 1px solid #ddd;
      border-radius: .08rem;
      .van-field__control{
        padding: .06rem .1rem;
      }
    }
  }
</style>
<style scoped lang="scss" type="text/scss">
  .selectInventorCategory{
    width: 100%;
    height: 100%;
    .navaBarBox {
      box-sizing: border-box;
      width: 100%;
      height: 1rem;
      background: #fff;
      .naveBarContent{
        font-size: .4rem;
      }
    }
    .categoryContent{
      width: 100%;
      height: calc(100% - 1rem);
      padding: .2rem .3rem;
      box-sizing: border-box;
      .content{
        width: 100%;
        background: $BackgroundWhirt;
        padding: .3rem ;
        box-sizing: border-box;
        font-size: .36rem;
        color: $FontColor3;
        border-radius: .12rem;
        .snInput{
          margin-top: .3rem;
        }
        div{
          margin-top: .4rem;
        }
        p{
          margin-top: .15rem;
          font-size: .28rem;
          color: $BasicColor;
        }
        .submitBtn{
          margin: 1rem 0 .5rem;
          display: flex;
          padding: 0 .5rem;
          span{
            flex: 1;
            display: inline-block;
            padding: .15rem  .4rem;
            border: 1px solid #ccc;
            text-align: center;
            border-radius: .6rem;
            font-size: .34rem;
          }
          span:nth-of-type(1){
            margin-right: .3rem;
          }
          span:nth-of-type(2){
            background: $BasicColor;
            color: $fontColorWhirt;
          }
        }
      }
    }
  }
</style>
