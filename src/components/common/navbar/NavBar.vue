<template>
  <div class="nav-bar">
      
 <div class="left"> <slot name="left"></slot></div>
 <div class="center"> <slot name="center"></slot></div>
 <div class="right"> <slot name="right"></slot></div>
  </div>
</template>

<script>
// 在插槽外面包装一个div，这样来对插槽进行布局

export default {
  name:'NavBar'
}
</script>

<style>
.nav-bar{
    display: flex;
    height:44px ;
    line-height: 44px;
    text-align: center;
    background-color: pink;
    box-shadow:0 1px 3px rgba(100, 100, 100, 0.3) ;
}
.left,.right{
   width: 60px;
  
}
.center{
    flex: 1;
   color: white;
   font-size: 16px;
}
</style>