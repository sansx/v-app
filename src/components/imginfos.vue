<template>
    <div class="contain">
        {{id}}
        <Swiper :list="imglist" style="height:120%;margin:0 auto;" height=100% :aspect-ratio="750/1200" :show-desc-mask="mask"></Swiper>
    </div>
</template>


<script>
import { Swiper } from 'vux'
export default {
    props:['id','num','nimg'],
    data(){
        return {
            imglist:[],
            mask:false
        }
    },
    components: {
        Swiper
    },
    created(){
        // console.log(this.id)
        // console.log(this.num)
        this.imglist = []
        
        for (let index = 0; index < this.nimg; index++) {
            // let img = new Image()
            // //img.src = `/static/images/${this.id}/${this.num}/${index}.jpg`
            // img.onload = ()=>{
                
            //     this.imglist[index].img = img.src
            // }
            this.imglist.push({
                url: 'javascript:',
                img: `/static/images/${this.id}/${this.num}/${index}.jpg`,
                index : index
            })
            
        }
        
    }
}
</script>

<style lang="less" scoped>
    .contain{
        height:76%;
        
    }
    
</style>
<style>
#app{
    height:100%;
    overflow: hidden;
}
#app .vux-swiper{
        height: 100%;
    }
#app .vux-img{
    background-size: contain;
}
#app .vux-indicator-right{
        position: fixed;
        display: flex;
        width: 100%;
        justify-content: center;
        bottom: 6px;
        left: 50%;
        transform:translateX(-50%); 
    }
</style>

