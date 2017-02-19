const sideNavArr = [
	{
		title: 'API自助平台',
		icon: 'list',
		child: [
			{
				path: '/home/manage/abstract',
				ch: '平台信息',
				en: 'abstract'
			}, {
				path: '/home/manage/raqapiagree',
				ch: 'API协议',
				en: 'raqapiagree'
			}, {
				path: '/home/manage/raqapiguid',
				ch: 'API说明',
				en: 'raqapiguid'
			}
		]
	}, {
		title: '应用与接口',
		icon: 'list',
		child: [
			{
				path: '/home/manage/application',
				ch: '已上架应用',
				en: 'application'
			}, {
				path: '/home/manage/interface',
				ch: '已上架接口',
				en: 'interface'
			}
		]
	}, {
		title: '管理',
		icon: 'list',
		child: [
			{
				path: '/home/manage/manageapp',
				ch: '应用管理',
				en: 'manageapp'
			}, {
				path: '/home/manage/manageinter',
				ch: '接口管理',
				en: 'manageinter'
			}
		]
	}
]

exports.SideNavArr = sideNavArr