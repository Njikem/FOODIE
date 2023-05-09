import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import AboutPage from '@/views/AboutPage.vue'
import MenuPage from '@/views/MenuPage.vue'
import LoginPage from '@/views/LoginPage.vue'
import SignUpPage from '@/views/SignUpPage.vue'
import FooterPage from '@/views/FooterPage.vue'
import ClientProfilePage from '@/views/ClientProfilePage.vue'
import RestaurantPage from '@/views/RestaurantPage.vue'





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
        name: 'description',
        content: 'This is the home page'
      },
    ]
  },


  {
    path: '/',
    component: AboutPage,
    Meta: [

      {
        title: 'AboutPage',
      },
      {
        name: 'description',
        component: 'This is my about page',
      },

    ]


  },

  {
    path: '/',
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
    component: RestaurantPage,

    meta: [
      {
        title: 'RestaurantPage',
      },

      {
        name: 'Restaurant',
        component: 'This is my restaurant page'
      },

    ]

  }



]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
