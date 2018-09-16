<template>
  <div>
    <!-- <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h1> </h1>
    </div> -->
    <div class="tab">
      <div class="item" v-for="item,index in infos" :key="index" :class="{active:isactive==index}" @click="cgnum(index)">
        {{item.title}}
      </div>
      <!-- <div class="item">
        个股基础
      </div>
      <div class="item">
        股池基础
      </div>
      <div class="item">
        实战分享
      </div> -->
    </div>
    
      <router-view></router-view>
    
  </div>
</template>

<script>
import { Group, Cell } from 'vux'

export default {
  components: {
    Group,
    Cell,
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
      infos:[{
        title:"基础知识",
        param :"jczs"
      },{
        title:"个股基础",
        param :"ggjc"
      },{
        title:"股池基础",
        param :"gcjc"
      },{
        title:"实战分享",
        param :"szfx"
      },],
      isactive:0
    }
  },
  methods:{
    
    cgnum(num){
      this.isactive = num;
      //console.log(`imglist/${this.infos[num].param}`)
      this.$router.push(`${this.infos[num].param}`)
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}


.logo {
  width: 100px;
  height: 100px
}
.bar{
  height: 10px;
  background: rgb(33,33,33);
}
</style>
<style lang="less" scoped>
.tab{
  font-size: 14px;
  background: rgb(33,33,33);
  height:50px;
  width: 100%;
}
.tab .active{
  color:#fff;
  position: relative;
  &::before{
    content: "";
    height: 3px;
    background: #fff;
    width: 30%;
    position: absolute;
    display: block;
    border-radius: 3px;
    bottom: 15%;
    left: 50%;
    transform: translateX(-50%);
  }
}
.item{
  display: inline-block;
  box-sizing: border-box;
  text-align: center;
  width: 25%;
  line-height: 44px;
  height: 100%;
  color: #6e6e6e;
}
</style>



