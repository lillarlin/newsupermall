<template>
  <div class="tabcontrol">
      <div v-for="(item,index) in title" :key="index" class="tabcontrol-item" :class="{isactive:currentindex===index}" @click="itemclick(index)">
        <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
 name:'TabControl',
 props:{
       title:{
          type:Array,
        default(){
          return []
        }
       }
 },
 data(){
   return {
    
     currentindex:0
   }
 },
 methods:{
   itemclick(index){
          this.currentindex=index
          this.$emit('goodclick',index)
   }
 }
}
</script>

<style>
.tabcontrol{
  display: flex;
  text-align:center
}
.tabcontrol-item{
  flex: 1;
}
.isactive{
  color: red;
}
.isactive span{
  border-bottom: 1px solid red;
  padding: 5px;
}
</style>