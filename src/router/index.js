import Vue from 'vue'
import router from 'vue-router'
const Home=()=>import ('../views/home/Home.vue')
const Cart=()=>import ('views/cart/Cart.vue')
const Category=()=>import('views/category/Category.vue')
const Profile=()=>import('views/profile/Profile.vue')
Vue.use(router)
const originalPush = router.prototype.push
   router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

export default new router({
  routes:[
     {
       path:'',
      redirect:'/home'
     },
     {
       path:'/home',
       component:Home
     },
     {
       path:'/cart',
       component:Cart
     },
     {
       path:'/category',
       component:Category
     },
     {
       path:'/profile',
       component:Profile
     }
  ]
})