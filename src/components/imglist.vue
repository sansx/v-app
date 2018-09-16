<template>
    <div>
        <div class="contain">
        
            <div v-for="item,index in boxlist" :key="index" class="box" @click="jumpinfo(index)">
                <img :src="item.imgurl"/>
            </div>
            
            
            
        </div>
        <loading :show="loading"></loading>
    </div>
    
    
</template>

<script>
export default {
    props:['id'],
    data(){
        return {
            boxlist:[

            ],
            loading:true,
            lists:{
                    jczs:[13,17,11,11,11,9,10,23,20,9],
                    ggjc:[12,8,16,11,8,8,11,15,10,13],
                    gcjc:[17,16,15,17,21,13,11,11,12,17],
                    szfx:[15,18,17,15,20,15,13,23,16,14]
                }
            
        }
    },
    mounted(){
        if(this.id){
            setTimeout(()=>{
                
                    this.loading=false
                },1000)
            for (let index = 1; index < 11; index++) {
                
                this.boxlist.push({"imgurl":`/static/images/${this.id}/${index}/header.jpg`})
                
            }
        }
        
    },
    watch:{
        id:function(){
            if(this.id){
                this.boxlist = []
                this.loading=true
                setTimeout(()=>{
                    this.loading=false
                },500)
                for (let index = 1; index < 11; index++) {
                    
                    this.boxlist.push({"imgurl":`/static/images/${this.id}/${index}/header.jpg`})
                    
                }
            }
            
            
        }
    },
    methods:{
        jumpinfo(num){
            
            this.$router.push(`/imginfo/${this.id}/${num+1}/${this.lists[this.id][num]}`)
        }
    }
}
</script>

<style   scoped>
.contain{
    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    position: relative;
    width: 90%;
    left: 5%;
    top:20px;
    align-content: space-between;
    justify-content: space-between;
}

.box{
    padding: 24.6% 0 0;
    position:relative;
    width: 48%;
    overflow: hidden;
    
    background: #eee;
    margin-bottom: 20px;
    border-radius: 5px;
}
.box img{
    position:absolute;
	top:0;
	bottom:0;
	left:0;
	right:0;
	max-height:100%;
    margin:auto;
    height: 100%;
	*zoom:1;

}

@media screen and (min-width: 750px){
    .box{
        padding: 22% 0 0;
        position:relative;
        width: 48%;
        background: #eee;
        margin-bottom: 20px;
        border-radius: 5px;
    }
}
</style>