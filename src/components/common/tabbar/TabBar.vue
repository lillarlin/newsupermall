<template>
  <div>
   <div id="tab-bar">
     <slot></slot>
   </div>
  </div>
</template>

<script>
export default {
  name:'TabBar'
}
</script>

<style>
#tab-bar{
  display: flex;
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: pink;
}
</style>