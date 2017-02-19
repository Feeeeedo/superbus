import Home from '../views/Application'
import Login from '../views/login/Login'
import Abstract from '../views/manage/abstract/Abstract'
import RaqAPIGuid from '../views/manage/raqAPIGuid/RaqAPIGuid'
import RaqAPIAgree from '../views/manage/raqAPIAgree/RaqAPIAgree'
import Interface from '../views/manage/interface/Interface'
import Application from '../views/manage/application/Application'
import ManageApp from '../views/manage/manageapp/ManageApp'
import ManageInter from '../views/manage/manageinter/ManageInter'
import Document from '../views/document/Document'
import Manage from '../views/manage/Manage'
import AppList from '../views/document/applist/AppList'
import InterfaceList from '../views/document/interfacelist/InterfaceList'

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
				component: Document,
				children: [
					{
						path: '',
						component: AppList
					},
					{
						path: 'app',
						component: AppList
					},
					{
						path: 'interface',
						component: InterfaceList
					}
				]
			},
			{
				path: 'document',
				component: Document,
				children: [
					{
						path: '',
						component: AppList
					},
					{
						path: 'app',
						component: AppList
					},
					{
						path: 'interface',
						component: InterfaceList
					}
				]
			},
			{
				path: 'manage',
				component: Manage,
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
						path: 'raqapiguid',
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
	}
]
export default routerArr