<!-- 主页 -->
<template>
    <div class="indexApp">
      <div class="bgImg"></div>
      <div class="contentPage">
        <!-- 页面头部 -->
        <div class="navaBarBox">
          <NaveBar>
            <div class="naveBarContent">
              <div class="title" @click="isShowSelectNaveBar = !isShowSelectNaveBar">
                <span>{{title}}</span>
                <van-icon name="arrow-down" size=".35rem" color="#fff"/>
              </div>
            </div>
          </NaveBar>
          <div class="selectOption" v-if="isShowSelectNaveBar">
            <p v-for="item in naveBarRouterList" :key="item.path" @click="togglePageRouter(item)">{{item.title}}</p>
          </div>
        </div>
        <!-- 导航栏（搜索） -->
        <div class="tabSearchBox">
          <TagSearch></TagSearch>
        </div>
        <!-- 通知 -->
        <div class="noticeBarBox">
          <Notification
            :notification="notificationInfo"
            @closeNotifiDialog="isNotifi = false"
          ></Notification>
        </div>
        <!-- 资产列表 -->
        <div class="inventoryListBox" :class="isNotifi?'paddingBtmHasNotifi':'paddingBtmNoHasNotifi'">
          <router-view></router-view>
        </div>
      </div>
      <!-- 底部按钮 -->
      <div class="footerBtn">
        <FooterBtn></FooterBtn>
      </div>
      <!-- 添加资产 -->
      <div class="addInventorBtn">
        <AddIneventor></AddIneventor>
      </div>
    </div>
</template>

<script>
import NaveBar from '@/components/NaveBar'
import TagSearch from '@/components/TagSearch'
import Notification from '@/components/Notification'
import FooterBtn from '@/components/FooterBtn'
import AddIneventor from '@/components/AddInventor'
import api from '@/api'
export default {
  name: 'index',
  data () {
    return {
      notificationInfo: {
        text: '年终盘点开始了，请大家及时去人资产信息！',
        id: 1
      },
      isShowNotifi: true,
      isShowSelectNaveBar: false,
      title: '个人盘点',
      naveBarRouterList: [
        {
          title: '个人盘点',
          path: '/personal'
        },
        {
          title: '协作盘点',
          path: '/collaborative'
        }
      ],
      isNotifi: true
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      api.test.getContacts().then(res => {
        console.log(res, 'uuuuuuuu')
      })
    },
    togglePageRouter (item) {
      console.log(5555555)
      this.title = item.title
      this.isShowSelectNaveBar = false
      this.$router.push(item.path)
    }
  },
  components: {
    NaveBar,
    TagSearch,
    Notification,
    FooterBtn,
    AddIneventor
  }
}
</script>

<style scoped lang="scss" type="text/scss">
.indexApp{
  width: 100%;
  height: 100%;
  position: relative;
  .bgImg{
    width: 100%;
    height: 4rem;
    background: $BasicColor;
    position: absolute;
    top: 0;
    left: 0;
  }
  .contentPage{
    width: 100%;
    height: 100%;
    position: relative;
    /*z-index: 3;*/
    padding: .1rem .25rem;
    box-sizing: border-box;
    padding-top: 0;
    .navaBarBox{
      width: 100%;
      height: 1rem;
      position: relative;
      .naveBarContent{
        width: 100%;
        height: 100%;
        color: $fontColorWhirt;
        font-size: .4rem;
        .title{
          text-align: center;
          padding-top: .04rem;
          span{
            margin-left: .4rem;
          }
        }
      }
      .selectOption{
        width: 2rem;
        height: 1.4rem;
        background: #fff;
        position: absolute;
        top: .85rem;
        left: 50%;
        transform: translateX(-50%);
        z-index: 999;
        border-radius: .1rem;
        padding: 0 .2rem;
        box-sizing: border-box;
        box-shadow: 0px 6px 15px $fontColorGrey;
        p{
          text-align: center;
          font-size: .32rem;
          color: $fontColorGrey;
          line-height: .7rem;
        }
        p:nth-of-type(1){
          border-bottom: 1px solid #ccc;
        }
      }
    }
    .tabSearchBox{
      width: 100%;
      height: 1.12rem;
    }
    .noticeBarBox{
      width: 100%;
      border-radius: .06rem;
    }
    .inventoryListBox{
      width: 100%;
      height: calc(100% - 3.2rem);
      overflow-y: scroll;
      margin-top: .2rem;
      box-sizing: border-box;
      border-radius: .16rem;
    }
    .paddingBtmHasNotifi{
      padding-bottom: 1rem;
    }
    .paddingBtmNoHasNotifi{
      padding-bottom: .3rem;
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
  .addInventorBtn{
    width: 1rem;
    height: 1rem;
    position: fixed;
    bottom: 2rem;
    right: .3rem;
    z-index: 8;
    border-radius: 100%;
    background: $BasicColor;
  }
}
</style>
