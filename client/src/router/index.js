import Home from '../views/Application'
import Login from '../views/login/Login'
import Abstract from '../views/abstract/Abstract'
import RaqAPIGuid from '../views/raqAPIGuid/RaqAPIGuid'
import RaqAPIAgree from '../views/raqAPIAgree/RaqAPIAgree'
import Interface from '../views/interface/Interface'
import Application from '../views/application/Application'
import ManageApp from '../views/manageapp/ManageApp'
import ManageInter from '../views/manageinter/ManageInter'

const routerArr = [
	{
		path: '/',
		component: Home
	}, {
		path: '/login',
		component: Login
	}, {
		path: '/home',
		component: Home,
		children: [
			{
				path: '',
				component: Abstract
			}, {
				path: 'abstract',
				component: Abstract
			}, {
				path: 'raqapiagree',
				component: RaqAPIAgree
			}, {
				path: 'raqapiaguid',
				component: RaqAPIGuid
			}, {
				path: 'application',
				component: Application
			}, {
				path: 'interface',
				component: Interface
			}, {
				path: 'manageapp',
				component: ManageApp
			}, {
				path: 'manageinter',
				component: ManageInter
			}
		]
	}
]
export default routerArr