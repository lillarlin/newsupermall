<template>
 <div id="home">
    <nav-bar><div slot="center">购物街</div></nav-bar>
  <childswiper :banner="banner"></childswiper>
  <recommend :recommend="recommends"></recommend>
  <feature></feature>
  <tab-control :title="['流行','新款','精选']" @goodclick="goodchoose"></tab-control>
  <goods-list :goods="showgoods"></goods-list>
  <ul>
    <li>222</li>
    <li>222</li>
    <li>222</li>
    <li>222</li>
    <li>222</li>
  </ul>
 </div>
</template>

<script>

import NavBar from '../../components/common/navbar/NavBar.vue'
import {getHomeMultidata,gethomegoods} from 'network/home.js'
import childswiper from './childcomps/childswiper.vue'
import Recommend from './childcomps/recommend.vue'
import Feature from './childcomps/feature.vue'
import TabControl from '../../components/content/tabcontrol/TabControl.vue'
import GoodsList from '../../components/content/goods/GoodsList.vue'
export default {
  name:'Home',
  components:{
    NavBar,
    getHomeMultidata,
    childswiper,
    Recommend,
    Feature,
    TabControl,
    GoodsList
  
  },
  data(){
       return {
         banner:[],
         recommends:[],
         titleindex:'pop',
         goods:{
           pop:{page:0,list:[]},
           new:{page:0,list:[]},
           sell:{page:0,list:[]},

         }
         
       }
  },
  computed:{
    showgoods(){
      return this.goods[this.titleindex].list
    }
  },
  methods:{
    goodchoose(index){
            const tabtitle=['pop','new','sell']
            this.titleindex=tabtitle[index]

    },
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
        this.banner=res.data.banner.list
        this.recommends=res.data.recommend.list
      })
    },
    gethomegoods(type){
      const page=this.goods[type].page+1
      gethomegoods(type,page).then(res=>{
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page+=1
      })
    }
  },
  created(){
    this.getHomeMultidata()
    this.gethomegoods('pop')
     this.gethomegoods('new')
      this.gethomegoods('sell')
  }
}
</script>

<style>

</style>