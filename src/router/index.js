import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import MenuPage from '@/views/MenuPage.vue'
import LoginPage from '@/views/LoginPage.vue'
import SignUpPage from '@/views/SignUpPage.vue'
import FooterPage from '@/views/FooterPage.vue'
import ClientProfilePage from '@/views/ClientProfilePage.vue'
import RestaurantSignUpPage from '@/views/RestaurantSignUpPage.vue'
import RestaurantLoginPage from '@/views/RestaurantLoginPage.vue'
import RestaurantProfilePage from '@/views/RestaurantProfilePage.vue'
import RestaurantHomePage from '@/views/RestaurantHomePage.vue'
import OrderPage from '@/views/OrderPage.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HomePage,
    meta: [
      {
        title: 'HomePage',
      },
      {
        name: 'HomePage',
        content: 'This is the home page'
      },
    ]
  },

  {
    path: '/Menu',
    component: MenuPage,

    Meta: [
      {
        title: 'MenuPage',
      },
      {
        name: 'Menu',
        component: 'This is my menu page'
      },
    ]
  },
  {
    path: '/Login',
    component: LoginPage,

    Meta: [
      {
        title: 'LoginPage',
      },
      {
        name: 'Login',
        component: 'This is my login page'
      },
    ]
  },

  {
    path: '/SignUp',
    component: SignUpPage,

    Meta: [
      {
        title: 'SignUpPage',
      },
      {
        name: 'signUp',
        component: 'This is my client signup page'
      },
    ]
  },


  {
    path: '/Footer',
    component: FooterPage,

    Meta: [
      {
        title: 'FooterPage',
      },
      {
        name: 'Footer',
        component: 'this is my footer page',
      },
    ]
  },

  {
    path: '/ClientProfile',
    component: ClientProfilePage,

    Meta: [
      {
        title: 'ClientProfilePage',
      },

      {
        name: 'Profile',
        component: 'This is my client profile page'
      },
    ]
  },

  {
    path: '/Restaurant',
    component: RestaurantSignUpPage,

    meta: [
      {
        title: 'RestaurantPage',
      },

      {
        name: 'Restaurant',
        component: 'This is my restaurant page'
      },

    ]

  },

  {
  path: '/RestLogin',
  component: RestaurantLoginPage,

  meta: [
    {
    title: 'RestaurantPage',
    },
    {
      name: 'RestaurantLoginPage',
      component: 'This is my restaurant page'
    },
  ]

  },

  {
    path: '/RestProfile',
    component: RestaurantProfilePage,
  
    meta: [
      {
      title: 'RestaurantPage',
      },
      {
        name: 'RestaurantProfilePage',
        component: 'This is my restaurant profile page'
      },
    ]
  
    },
    {
    path: '/RestHomePage',
    component: RestaurantHomePage,
  
    meta: [
      {
      title: 'RestaurantHomePage',
      },
      {
        name: 'RestaurantHomePage',
        component: 'This is my restaurant home page'
      },
    ]
  
    },


    {
      path: '/OrderPage',
      component: OrderPage,
    
      meta: [
        {
        title: 'OrderPage',
        },
        {
          name: 'OrderPage',
          component: 'This is my rder page'
        },
      ]
    
      },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
