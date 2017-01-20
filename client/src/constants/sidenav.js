const sideNavArr = [
	{
		title: 'API自助平台',
		icon: 'list',
		child: [
			{
				path: '/home/abstract',
				ch: '平台信息',
				en: 'abstract'
			}, {
				path: '/home/raqapiagree',
				ch: 'API协议',
				en: 'raqapiagree'
			}, {
				path: '/home/raqapiguid',
				ch: 'API说明',
				en: 'raqapiguid'
			}
		]
	}, {
		title: '应用与接口',
		icon: 'list',
		child: [
			{
				path: '/home/application',
				ch: '已上架应用',
				en: 'application'
			}, {
				path: '/home/interface',
				ch: '已上架接口',
				en: 'interface'
			}
		]
	}, {
		title: '管理',
		icon: 'list',
		child: [
			{
				path: '/home/manageapp',
				ch: '应用管理',
				en: 'manageapp'
			}, {
				path: '/home/manageinter',
				ch: '接口管理',
				en: 'manageinter'
			}
		]
	}
]

exports.SideNavArr = sideNavArr