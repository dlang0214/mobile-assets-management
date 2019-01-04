<template>
  <div class="uploadPhoto">
    <div class="image" v-if="imageList.length > 0" v-for="item in imageList" :key="item">
      <img :src="item" alt="">
      <span class="delete">
        <van-icon name="delete" size=".48rem" color="#fff"/>
      </span>
    </div>
    <div class="uploadBtn" v-if="imageList.length < 3" @click="$refs.uploadFile.click()">
      <van-icon name="plus" size=".5rem" color="#1989fa"/>
      <span>上传图片</span>
    </div>
    <!--<input type="file" accept="image/*" capture="camera" ref="uploadFile" class="uploadInput" @change="getUploadFile">-->
    <input type="file" ref="uploadFile" class="uploadInput" @change="getUploadFile">
  </div>
</template>

<script>
export default {
  name: 'Upload',
  data () {
    return {
      imageList: []
    }
  },
  methods: {
    getUploadFile (e) {
      let file = e.target.files[0]
      console.log(file)
      alert(file.size)
    }
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  .uploadPhoto{
    width: 100%;
    display: flex;
    .uploadInput{
      width: 0;
      height: 0;
    }
    .uploadBtn{
      border: 1px dashed #ddd;
      text-align: center;
      padding-top: .4rem;
      box-sizing: border-box;
      max-width: 30%;
      span{
        display: block;
        font-size: .32rem;
        color: $BasicColor;
      }
    }
    .image{
      max-width: 30%;
      position: relative;
      overflow: hidden;
      .delete{
        position: absolute;
        top: -.4rem;
        right: -.4rem;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        background: rgba(8, 8, 8, 0.7);
        padding-top: .4rem;
        padding-left: .1rem;
        box-sizing: border-box;
      }
    }
    div{
      height: 1.9rem;
      flex: 1;
      border-radius: .12rem;
      img{
        width: 100%;
        height: 100%;
        display: block;
        background: red;
        border-radius: .12rem;
      }
    }
    div:nth-of-type(2){
      margin: 0 .2rem;
    }
  }
</style>
