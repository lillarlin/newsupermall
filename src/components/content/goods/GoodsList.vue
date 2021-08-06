<template>
  <div class="goodslist">
   <goods-list-item v-for="(item,index) in goods" :key="index" :goodslistitem="item"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'

export default {
  components: { GoodsListItem },
name:'GoodsList',
props:{
  goods:{
    type:Array,
    default(){
      return []
    }
  }
}
}
</script>

<style>
.goodslist{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}
</style>