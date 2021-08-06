<template>
  <div class="recommend">
    <div v-for="(item,index) in recommend" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
      </div>    
  </div>
</template>

<script>
export default {
   name:'Recommend',
   props:{
     recommend:{
       type:Array,
       default(){
         return []
       }
     }
   }
}
</script>

<style>
.recommend{
  display: flex;
  text-align: center;
   padding: 10px 0 20px;
     border-bottom: 3px solid #eee;
}
.recommend-item{
  flex: 1;
}
.recommend-item img{
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
}
</style>