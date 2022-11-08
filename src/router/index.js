import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/MyLogin.vue'
import Home from '@/components/MyHome.vue'
import Goods from '@/components/menus/MyGoods.vue'
import Orders from '@/components/menus/MyOrders.vue'
import Rights from '@/components/menus/MyRights.vue'
import Settings from '@/components/menus/MySettings.vue'
import Users from '@/components/menus/MyUsers.vue'
import Detil from '@/components/user/MyUserDetail.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
    // 重定向 输入 '/' 也跳转到login组件中
    {path:'/',redirect:'/login'},
    {path:'/login',component:Login},
    {path:'/home',component:Home,redirect:'/home/users',children:[
      {path:'users',component:Users},
      {path:'goods',component:Goods},
      {path:'orders',component:Orders},
      {path:'rights',component:Rights},
      {path:'settings',component:Settings},
      
      // 因为用户详情 和 侧边栏一样，都在右侧展示，所以他们是平级，都是home的子路由
      {path:'userinfo/:id',component:Detil}
    ]}
  ]
})

// 定义全局前置守卫
router.beforeEach((to,from,next) => {
  if(to.path === '/home'|| to.path==='/home/users'){
    // 如果想去后台主页，就判断有没有token
    const token = localStorage.getItem('token')
    if(token){
      next()
    }else{
      localStorage.removeItem('token')
      next('/login')
    }
  }else{
    next()
  }
})

export default router
