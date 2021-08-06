<template>
  <div>
    <Swiper>
      <SwiperItem v-for="(item,index) in banner" :key="index">
         <a :href="item.link">
           <img :src="item.image" alt="">
         </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import Swiper from 'components/common/swiper/Swiper.vue'
import SwiperItem from 'components/common/swiper/SwiperItem.vue'
export default {
    name:"childswiper",
    components:{
      Swiper,
      SwiperItem
    },
    props:{
      banner:{
        type:Array,
        default(){
          return []
        }
      }
    }
}
</script>

<style>

</style>