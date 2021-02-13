
function addlist(uid,handleimg,username,usersign){
	var qsub_infonews = document.createElement('div');
	qsub_infonews.className = "qsub-infonews";
	
	var qsub_infonews_img = document.createElement('img');
	qsub_infonews_img.className = "qsub-infonews-img";
	qsub_infonews_img.src = handleimg;
	var qsub_infonews_left = document.createElement('div');
	qsub_infonews_left.className = "qsub-infonews-left";
	
	var qsub_infonews_left_top = document.createElement('div');
	qsub_infonews_left_top.className = "qsub-infonews-left-top";
	
	var qsub_infonews_username = document.createElement('div');
	qsub_infonews_username.className = "qsub-infonews-username";
	qsub_infonews_username.textContent = username;
	
	qsub_infonews_left_top.appendChild(qsub_infonews_username);
	qsub_infonews_left.appendChild(qsub_infonews_left_top);
	var qsub_infonews_left_bottom = document.createElement('div');
	qsub_infonews_left_bottom.className = "qsub-infonews-left-bottom";
	
	var qsub_infonews_info = document.createElement('div');
	qsub_infonews_info.className = "qsub-infonews-info";
	qsub_infonews_info.textContent = usersign;
	
	qsub_infonews_left_bottom.appendChild(qsub_infonews_info)
	qsub_infonews_left.appendChild(qsub_infonews_left_bottom);
	
	qsub_infonews.appendChild(qsub_infonews_img);
	qsub_infonews.appendChild(qsub_infonews_left);
	// qsub_infonews.appendChild(qsub_infonews_left_bottom);
	qsub_infonews.addEventListener("tap",function(){
		mui.openWindow({
			url: "../user/mepage.html",
			id: "page",
			extras: {
				"userid":uid
			},
			createNew: false, //是否重复创建同样id的webview，默认为false:不重复创建，直接显示
			show: {
				autoShow: true,
				aniShow: "slide-in-right",
				duration: 100
			},
		});
	});
	return qsub_infonews;
}
/*<div class="qsub-infonews" id="">
	<img class="qsub-infonews-img" src="http://file.qsub.cn/1672813b53be4b1fa8a2c9e69559df301608468083664.prifix">
	
	<div class="qsub-infonews-left" id="">
		
		<div class="qsub-infonews-left-top">
			<div class="qsub-infonews-username">
				秋枫
			</div>
		</div>
		
		<div class="qsub-infonews-left-bottom">
			<div class="qsub-infonews-info">
				你号我是的hi大撒法你号我是的hi大撒法你号我是的hi大撒法你号我是的hi大撒法你号我是的hi大撒法
			</div>
		
		</div>
	
	</div>
</div>*/