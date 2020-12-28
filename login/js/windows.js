//打开新页面 不传参 页面全屏
function newWebview(urls,id) {
	mui.openWindow({
		url: urls,
		id: id,
		styles: {
			top: 0,
			bottom: 0
		},
		extras: {
			
		},
		createNew: false, //是否重复创建同样id的webview，默认为false:不重复创建，直接显示
		show: {
			autoShow: true,
			aniShow: "slide-in-right",
			duration: 100
		},
		waiting: {
			autoShow: true,
			title: '正在加载...',
			options: {
	
			}
		},
	});
};



function newWedViewData(url,id,data){
	mui.openWindow({
		url: url,
		id: id,
		styles: {
			top: 0,
			bottom: 0
		},
		extras: data,
		createNew: false, //是否重复创建同样id的webview，默认为false:不重复创建，直接显示
		show: {
			autoShow: true,
			aniShow: "none",
			duration: 100
		},
		waiting: {
			autoShow: true,
			title: '正在加载...',
			options: {
	
			}
		},
	});
}


