<template>
    <div>
        <div class="header-img">
            <img :src="u11" >
        </div>
        <div class="btn-groups">
            <img :src="u3">
            <div class="btn-wrap">
                <div class="flex-btn">
                    <div class="btn">书友圈子</div>
                    <div class="btn">坚持排行</div>
                    <div class="btn">推荐书单</div>
                    <div class="btn">收藏图书</div>
                </div>
                
            </div>
            
        </div>
        <tabbar></tabbar>
    </div>
    
</template>
<script>
import tabbar from '../components/Tabbar';
import u11 from '../assets/images/u11.jpg';
import u3 from '../assets/images/u3.jpg';

console.log(u11);

export default {
    name:'home',
    components:{
        tabbar
    },
    data(){
        return {
            u11,
            u3
        }
    }
}
</script>
<style lang="scss" scoped>
.header-img img{
    display: block;
    width: 100%;
}
.btn-groups{
    position: relative;
}
.btn-groups img{
    display: block;
    width: 100%;
}
.btn-wrap{
    font-size:14px;
    position:absolute;
    padding-top:66px;
    top:0;
    width:100%;
}
.flex-btn{
    display:flex;
    justify-content: space-around;
}
</style>


