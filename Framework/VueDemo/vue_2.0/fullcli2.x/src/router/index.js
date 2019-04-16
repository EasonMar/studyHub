import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TestComponentView from '@/views/TestComponentView'
import MyCkeditor from '@/views/MyCkeditor'
import iview from "iview";
import formCreate from "form-create";

Vue.use(Router);
Vue.use(iview);
Vue.use(formCreate);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/components',
      name: 'TestComponentView',
      component: TestComponentView
    },
    {
      path: '/editor',
      name: 'MyCkeditor',
      component: MyCkeditor
    }
  ]
})
