import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Projects from '@/components/Projects/Projects'
import CreateProject from '@/components/Projects/CreateProject'
import HistoryComponent from '@/components/History/HistoryComponent'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/projects/new',
      name: 'CreateProject',
      component: CreateProject
    },
    {
      path: '/history',
      name: 'history',
      component: HistoryComponent
    }
  ]
})
