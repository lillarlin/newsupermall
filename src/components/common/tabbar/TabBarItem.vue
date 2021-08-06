<template>
  <div class="tab-bar-item" @click="itemclick">
    <slot name="item-icon"></slot>
    <slot name="text"></slot>
  </div>
</template>

<script>
export default {
 name:'tabbaritem',
 props:{
   path:String
 },
 methods:{
   itemclick(){
     this.$router.push(this.path)
   }
 }
}
</script>

<style>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
}
.tab-bar-item img{
  height: 24px;
  width: 24px;
}
</style>