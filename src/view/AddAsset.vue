<!-- 添加资产 -->
<template>
  <div class="addAsset">
    <div class="navaBarBox">
      <NaveBar :colors="colors">
        <div class="naveBarContent">
          盘盈
        </div>
      </NaveBar>
    </div>
    <div class="addInventorInfo">
      <div class="content">
        <div class="infoTitle">
          <p>资产信息</p>
          <span v-if="false">待盘点</span>
        </div>
        <div class="infoContent">
          <div class="selectBox">
            <van-field
              type="text"
              label="盘点计划"
              required
            />
            <p class="selectOption" @click="showInventorPlan">
              <span v-if="content.InventoryPlanning === ''">请选择盘点计划</span>
              <span v-if="content.InventoryPlanning !== ''">{{content.InventoryPlanning}}</span>
              <van-icon name="arrow-down" size=".28rem" class="icon"/>
            </p>
            <p class="period"><span>盘点周期：</span><span>2018/10/20 - 2018/11/20</span></p>
          </div>
          <div class="selectBox selectBoxNomal">
            <van-field
              type="text"
              label="资产类别"
              required
            />
            <p class="selectOption" @click="selectInventorCatrgory">
              <span v-if="content.InventorCategory === ''">请选择资产类别</span>
              <span v-if="content.InventorCategory !== ''">{{content.InventorCategory}}</span>
              <van-icon name="arrow-down" size=".28rem" class="icon"/>
            </p>
          </div>
           <van-field
             v-model="content.name"
             type="text"
             label="资产名称"
             placeholder="请输入资产名称"
             required
           />
           <van-field
             v-model="content.name"
             type="text"
             label="品牌"
             placeholder="请输入品牌"
             required
           />
           <van-field
             v-model="content.name"
             type="text"
             label="型号"
             placeholder="请输入资产型号"
             required
           />
           <van-field
             v-model="content.name"
             type="text"
             label="规格/配置"
             placeholder="请输入规格/配置"
           />
           <van-field
             v-model="content.name"
             type="text"
             label="资产标签号"
             placeholder="请输入资产标签号"
           />
           <van-field
             v-model="content.name"
             type="text"
             label="特性值"
             placeholder="请输入特性值（车牌号）"
           />
           <van-field
             v-model="content.name"
             type="text"
             label="SN码"
             placeholder="请输入SN码"
           />
          <van-field
            v-model="content.name"
            type="text"
            label="责任人"
            placeholder="请选择责任人"
          />
          <div class="selectBox selectBoxNomal">
            <van-field
              type="text"
              label="存放地点"
              required
            />
            <p class="selectOption" @click="selectInventorCatrgory">
              <span v-if="content.address === ''">请选择存放地点</span>
              <span v-if="content.address !== ''">{{content.address}}</span>
              <van-icon name="arrow-down" size=".28rem" class="icon"/>
            </p>
          </div>
           <van-field
             v-model="content.name"
             type="text"
             label="具体位置"
             placeholder="请输入具体位置"
           />
          <div class="uploadPhotoBox">
            <p>上传实物照片</p>
            <Upload></Upload>
          </div>
          <div class="remorkBox">
            <Remork></Remork>
          </div>
        </div>
      </div>
    </div>
    <div class="footerBtn">
      <FooterBtn></FooterBtn>
    </div>
  </div>
</template>

<script>
import NaveBar from '@/components/NaveBar'
import FooterBtn from '@/components/FooterBtn'
import Upload from '@/components/Upload'
import Remork from '@/components/RremorkText'
export default {
  name: 'AddAsset',
  data () {
    return {
      colors: '#1989fa',
      content: {
        name: '',
        InventoryPlanning: '',
        InventorCategory: '',
        address: ''
      }
    }
  },
  methods: {
    showInventorPlan () {
      console.log(222)
    },
    selectInventorCatrgory () {
      console.log(333)
    }
  },
  components: {
    NaveBar,
    FooterBtn,
    Upload,
    Remork
  }
}
</script>

<style lang="scss">
  .addAsset{
    .infoContent{
      .selectBox{
        .van-cell{
          border-bottom: none;
          .van-field__control{
            display: none;
          }
        }
      }
      .van-cell{
        padding: .25rem 0;
        font-size: .32rem;
        border-bottom: 1px solid #eee;
      }
      .van-cell--required::before{
        left: 0;
      }
      .van-cell:not(:last-child)::after{
        border-color: transparent;
      }
      .van-cell--required{
        padding-left: .2rem;
        box-sizing: border-box;
      }
      .van-field__control{
        text-align: right;
      }
    }
  }

</style>
<style scoped lang="scss" type="text/scss">
  .addAsset{
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
    .addInventorInfo{
      width: 100%;
      height: calc(100% - 1rem);
      padding: .2rem .3rem;
      box-sizing: border-box;
      overflow-y: scroll;
      padding-bottom: 1.5rem;
      .content{
        width: 100%;
        background: $BackgroundWhirt;
        padding: .3rem ;
        box-sizing: border-box;
        font-size: .36rem;
        color: $FontColor3;
        border-radius: .12rem;
        .infoTitle{
          font-size: .4rem;
          position: relative;
          p{
            padding-left: .16rem;
            box-sizing: border-box;
            position: relative;
            letter-spacing: .02rem;
            &:before{
              content: '';
              position: absolute;
              left: -.06rem;
              top: 50%;
              transform: translateY(-50%);
              width: .04rem;
              height: .36rem;
              background: $BasicColor;
            }
          }
          span{
            position: absolute;
            background-color: $BasicColor;
            color: $fontColorWhirt;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            font-size: .28rem;
            padding: .05rem .1rem;
            border-radius: .6rem;
          }
        }
        .infoContent{
          margin-top: .1rem;
          .selectBox{
            border-bottom: 1px solid #eee;
            position: relative;
            .selectOption{
              max-width: 4rem;
              padding: .1rem 0;
              position: absolute;
              right: 0;
              top: 31%;
              transform: translateY(-50%);
              text-align: right;
              font-size: .32rem;
              overflow: hidden;
              text-overflow:ellipsis;
              white-space: nowrap;
              .icon{
                margin-left: .15rem;
              }
            }
            .period{
              color: $BasicColor;
              text-align: right;
              margin-bottom: .2rem;
              font-size: .28rem;
              padding-right: .1rem;
              box-sizing: border-box;
            }
          }
          .selectBoxNomal{
            .selectOption{
              top: 50%;
              transform: translateY(-50%);
            }
          }
          .uploadPhotoBox{
            border-bottom: 1px solid #eee;
            padding-bottom: .3rem;
            p{
              padding: .3rem 0;
              font-size: .34rem;
            }
          }
          .remorkBox{
            padding: .3rem 0;
            height: 2rem;
            padding-bottom: 0;
          }
        }
      }
    }
    .footerBtn{
      width: 100%;
      height: 1.2rem;
      position: fixed;
      left: 0;
      bottom: 0;
      box-shadow:0px -3px 15px #d5d5d5;
      z-index: 8;
      background: #fff;
    }
  }
</style>
