import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/home';
import Message from '../pages/message';
import Dynamic from '../pages/dynamic';
import Mine from '../pages/mine';
Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [{
			path: '/',
			name: 'home',
			component: Home
        },
        {
			path: '/message',
			name: 'message',
			component: Message
        },
        {
			path: '/dynamic',
			name: 'dynamic',
			component: Dynamic
        },
        {
			path: '/mine',
			name: 'mine',
			component: Mine
		}	
	]
})
