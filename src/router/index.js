import Vue from 'vue'
import VueRouter from 'vue-router'
//安装插件
Vue.use(VueRouter)

//懒加载
const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Shopping = () => import('../views/shopping/Shopping.vue')
const Profile = () => import('../views/profile/Profile.vue')
const Detail = () => import('../views/detail/Detail.vue')

const router = new VueRouter({
  routes: [
    {
      path: '',
      redirect:'/home'
    },
    {
      path: '/home',
      component:Home
    },
    {
      path: '/category',
      component:Category
    }, {
      path: '/shopping',
      component:Shopping
    },{
      path: '/profile',
      component:Profile
    },{
      path: '/detail/:id',
      component:Detail
    }
  ],
  mode:'history'
})

export default router
