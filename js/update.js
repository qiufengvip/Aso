function getupdate() {
	//检测版本更新
	var retu = true;
	// $.ajax(servers + url_appinfo_getversion, {
	// 	type: 'get', //请求方式,一般情况get和post都可以
	// 	async: false,
	// 	timeout: 5000, //10秒超时
	// 	dataType: "json", //本次跨域请求实现获取数据
	// 	//请求完毕
	// 	success: function(data) {
	// 		if (isnull(data)) {
	// 			if (data.code == 200) {
	// 				newversion = data.data.version; //服务器版本
	// 				version = plus.runtime.version; //本地app 版本
	// 				console.log("newversion：" + newversion);
	// 				console.log("version：" + version);
	// 				if (version > newversion) {
	// 					//该更新了
	// 					retu = false;
	// 					console.log("可更新");
	// 					mui.confirm("发现新版本：\n更新内容\n更新内容\n更新内容\n更新内容", 'Hello MUI', ["手动更新", "快速更新"], function(e) {
	// 						if (e.index == 1) {
	// 							console.log("手动更新");
	// 							plus.runtime.openURL("aso.qiufengvip.top", function() {
	// 								mui.toast("打开浏览器失败")
	// 							}, "cn.qsub");
	// 						} else {


	// 							console.log("自动");
	// 						}
	// 					});

	// 				}


	// 			} else {
	// 				mui.toast("检查版本信息出错");
	// 			}
	// 		}
	// 	}
	// });

	$.ajax({
		type: "GET",
		url: servers + url_appinfo_getversion,
		dataType: "json",
		async: false,
		success: function(data) {
			if (isnull(data)) {
				if (data.code == 200) {
					newversion = data.data.version; //服务器版本
					version = plus.runtime.version; //本地app 版本
					appupdate = data.data.appupdate; //应用公告
					appurl = data.data.url; //应用下载地址

					console.log("newversion：" + newversion);
					console.log("version：" + version);
					if (version < newversion) {
						//该更新了
						retu = false;
						console.log("可更新");
						conffinfo = appupdate.replace(/<br>/g, '\n'),
						mui.confirm("发现新版本：" + newversion + "\n" + conffinfo,  '校友会', ["快速更新", "手动更新"],
							function(e) {
								if (e.index == 1) {
									console.log("手动更新");
									plus.runtime.openURL(officialwebsite, function() {
										mui.alert('请手动打开网址:'+officialwebsite, '打开网址失败', function() {
									
									
										});
									});
									
								} else {
									console.log("自动");
									document.getElementById("text").innerHTML = appupdate;
									var dtask = plus.downloader.createDownload(
										appurl, {},
										function(d, status) {
											if (status == 200) {
												clearInterval(i);

												$('#jindutiao').css("display", "block");
												plus.nativeUI.toast("正在准备环境，请稍后！");
												var path = d.filename; //_downloads yijietong.apk
												console.log(d.filename);
												plus.runtime.install(path); // 安装下载的apk文件
											} else {
												mui.alert('Download failed:' + status);
											}
										});
									dtask.start();
									//进度监听器
									var i = setInterval(function() {
										var totalSize = dtask.totalSize;
										var downloadedSize = dtask.downloadedSize;
										$('#jindutiao').css("display", "block");
										var daxiaoa = downloadedSize / totalSize
										var baifenbiw = (Math.round(daxiaoa * 100) / 100) * 100
										var baifenbi = (Math.round(daxiaoa * 100) / 100) * 100 + "%"
										
										if(!isNaN(baifenbi)){
											baifenbi = "0%"
										}
										console.log(baifenbi);
										// mui("#demo1").progressbar({
										// 	progress: baifenbiw
										// }).show();

										$("#plan").css("width", baifenbiw+"%");
										$("#jindutiaoneirong").text("正在下载新版本....(" + baifenbi + ")");
									}, 1000); //1000为1秒钟
								}
							});
					} else {
						mui.toast("最新版本");
					}
				}
			}
		},
		error: function(xhr, type, errorThrown) {
			retu = false;
			mui.alert('请检查网络', 'Aso校友会', function() {

				plus.runtime.quit();
			});
		},

	});

	return retu;


}

// mui('body').on('tap', '#shegnji', function() {
// 	$("#shegnji").prop("disabled", "disabled");
// 	$("#canren").text("点击进行后台下载")
// 	var dtask = plus.downloader.createDownload(
// 		res.result.data.url, res.result.data.pakagesize, {},
// 		function(d, status) {
// 			if (status == 200) {
// 				clearInterval(i);
// 				$('#jindutiao').css("display", "block");
// 				plus.nativeUI.toast("正在准备环境，请稍后！");
// 				var path = d.filename; //_downloads yijietong.apk
// 				console.log(d.filename);
// 				plus.runtime.install(path); // 安装下载的apk文件
// 			} else {
// 				mui.alert('Download failed:' + status);
// 			}
// 		});
// 	dtask.start();
// 	var i = setInterval(function() {
// 		var totalSize = dtask.totalSize;
// 		var downloadedSize = dtask.downloadedSize;
// 		$("#jindutiao").css("display", "block")  //等
// 		var daxiaoa = downloadedSize / totalSize
// 		var baifenbiw = (Math.round(daxiaoa * 100) / 100) * 100
// 		var baifenbi = (Math.round(daxiaoa * 100) / 100) * 100 + "%"
// 		console.log(baifenbi);
// 		mui("#demo1").progressbar({
// 			progress: baifenbiw
// 		}).show();
// 		$("#jindutiaow").css("width", baifenbiw)
// 		$("#jindutiaoneirong").text(baifenbi)
// 	}, 100); //1000为1秒钟
// })
