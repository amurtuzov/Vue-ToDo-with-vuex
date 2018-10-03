import Vue from 'vue'
import VueRouter from 'vue-router'
import About_me from '../components/About-me.vue'
import Projects from '../components/Projects.vue'
import Contacts from '../components/Contacts.vue'

Vue.use(VueRouter);

export default new VueRouter({
routes: [
  { 
  	path: '/',
  	name: 'about-me',
  	component: About_me 
  },
  { 
  	path: '/Projects',
  	name: 'projects',
  	component: Projects 
  },
  { 
  	path: '/Contacts',
  	name: 'contacts', 
  	component: Contacts 
  }
]
});
