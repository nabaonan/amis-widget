/*
 * @Author: nbn
 * @Date: 2023-09-08 23:33:30
 * @LastEditors: nbn
 * @LastEditTime: 2023-09-12 22:00:48
 * @FilePath: /amis-widget/src/router.ts
 * @Description: 
 */

import { createRouter, createWebHashHistory } from 'vue-router'


const Editor = () => import('./components/AmisEditor.vue')
const App = () => import('@/App.vue')
const Home = () => import('@/Home.vue')
const Intr = () => import('@/Intr.vue')
const List = () => import('@/components/WidgetList.vue')
const Diff = () => import('@/components/Diff.vue')
const Playground = () => import('@/components/Playground.vue')

const router = createRouter({
  history: createWebHashHistory(),
  routes: [

    {
      path: '/',
      component: App,
      redirect: '/intr',
      children: [
        {
          path: '',
          component: Home,
          children: [
            {
              path: '',
              component: Intr
            },
            {
              path: '/list',
              component: List
            },
            {
              path: '/editor',
              component: Editor,
            },
            {
              path: '/playground',
              component: Playground,
            },
            {
              path: '/diff',
              component: Diff,
            },
            {
              path: ':pathMatch(.*)*',
              component: () => import('./404.vue')
            }
          ]
        },

      ]
    },
    // {
    //   path: '/intr',
    //   component: Intr
    // },


  ],
  strict: true,
})

export default router