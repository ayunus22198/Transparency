import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Projects from '@/components/Projects/Projects'
import CreateProject from '@/components/Projects/CreateProject'
import HistoryComponent from '@/components/History/HistoryComponent'
import ProjectDetail from '@/components/Projects/projectDetail'
import PerformanceComponent from '@/components/Performance/PerformanceComponent'

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
    },
    {
      path: '/projectDetail/:mosqueID/:projectID',
      name: 'projectDetail',
      component: ProjectDetail
    },
    {
      path: '/performance',
      name: 'performanceComponent',
      component: PerformanceComponent
    }
  ]
})
