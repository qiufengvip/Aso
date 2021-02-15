var headimg = "./img/x18.png"; //头像
var username = "秋枫"; //用户昵称
var contents = "我发布的第一条说说";
var Circlename = "表白";
var imgurl = ""; //图片url
var id = ""; //说说id
var postzan = "0" //点赞数量
var postos = "0" //评论数量
var postshare = "" // 分享数量
var Circleid = "1" //圈子的id
var videourl = ""; //视频url
var isgreat = ""; //点赞

function dynamiclist(headimg, username, contents, Circlename, imgurl, id, postzan, postos, postshare, Circleid,
	videourl, userid, isgreat) {
	//全部的
	var topic_test = document.createElement('div');
	topic_test.className = "topic-test";
	//顶部
	var topic_test_top = document.createElement('div');
	//中部
	var topic_test_content = document.createElement('div');
	//底部
	var topic_test_bottom = document.createElement('div');

	//顶部开始生成
	topic_test_top.className = "topic-test-top";
	//顶部头像
	var topic_img = document.createElement('img');
	topic_img.className = "topic-test-top-img";
	topic_img.src = headimg;
	//顶部昵称
	var topic_span = document.createElement('span');
	topic_span.className = "topic-test-top-span";
	topic_span.textContent = username;

	topic_test_top.appendChild(topic_img);
	topic_test_top.appendChild(topic_span);


	//中部开始
	var content_text = document.createElement('div');
	content_text.className = "topic-test-content-text";
	content_text.textContent = contents;
	topic_test_content.appendChild(content_text);

	//加入图片
	if (isnull(imgurl)) {
		console.log(imgurl);
		try {
			imgurl = eval(imgurl);
			console.log(imgurl);
		} catch (err) {
			console.log("炸了");
			imgurl = [imgurl];
		}
		console.log(imgurl);






		//获取时间戳
		var timestamp=new Date().getTime();
		//图片分组标记
		var preview_group = timestamp+"-"+id+"-"+"qsub"
		
		
		//一张图片
		if (imgurl.length == 1) {
			var topic_test_content_img = document.createElement('img');
			topic_test_content_img.className = "topic-test-content-img-1";
			console.log(imgurl);
			topic_test_content_img.src = imgurl[0];
			//设置图片预览的组
			topic_test_content_img.setAttribute('data-preview-group', preview_group);
			topic_test_content_img.setAttribute('data-preview-src', "");
			topic_test_content.appendChild(topic_test_content_img);
		} else {
			console.log("多张图开始工作" + imgurl);
			for (var i = 0; i < imgurl.length; i++) {
				var topic_test_content_img = document.createElement('img');
				topic_test_content_img.className = "topic-test-content-img-2";
				topic_test_content_img.src = imgurl[i];
				topic_test_content_img.setAttribute('data-preview-group', preview_group);
				topic_test_content_img.setAttribute('data-preview-src', "");
				topic_test_content.appendChild(topic_test_content_img);
			}
		}
	} else if (isnull(videourl)) {
		var topic_test_content_video = document.createElement('div');
		topic_test_content_video.className = "topic-test-content-video";
		new_qsub_video(topic_test_content_video, videourl)
		// topic_test_content_img.src=imgurl[i];
		topic_test_content.appendChild(topic_test_content_video);
	}
	topic_test_content.className = "topic-test-content";



	//底部开始
	var test_bottom_left = document.createElement('div');
	test_bottom_left.className = "topic-test-bottom-left";
	test_bottom_left.textContent = Circlename;

	//右边
	var topic_test_bottom_img = document.createElement('div');
	topic_test_bottom_img.className = "topic-test-bottom-img";
	var topic_test_bottom_img_nr01 = document.createElement('div');
	topic_test_bottom_img_nr01.className = "topic-test-bottom-img-nr";
	topic_test_bottom_img_nr01.innerHTML =
		'<svg t="1608599593239" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6449" ><path d="M677.51936 192.03072c113.1008 0 204.8 91.6992 204.8 204.77952 0 186.91072-370.3296 435.15904-370.3296 435.15904S141.68064 592.67072 141.68064 396.81024c0-140.78976 91.6992-204.77952 204.77952-204.77952 68.11648 0 128.28672 33.40288 165.5296 84.55168C549.24288 225.4336 609.41312 192.03072 677.51936 192.03072z" p-id="6450" ></path></svg>';
	var topic_test_bottom_img_nr01_dianzan = document.createElement('div');
	if (postzan == 0 || postzan == undefined) {
		topic_test_bottom_img_nr01_dianzan.textContent = "0";
	} else {
		topic_test_bottom_img_nr01_dianzan.textContent = postzan;
	}


	if (isgreat) {
		topic_test_bottom_img_nr01.style.fill = "#6968ff"
	} else {
		topic_test_bottom_img_nr01.style.fill = "#000"
	}






	var topic_test_bottom_img_nr02 = document.createElement('div');
	topic_test_bottom_img_nr02.className = "topic-test-bottom-img-nr";
	topic_test_bottom_img_nr02.innerHTML =
		'<svg t="1608599744819" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7359"><path d="M512 799.44c-24.12586667 0-48.2816-2.19413333-71.33546667-6.58453333l-167.84 102.048v-168.96c-87.7888-61.45386667-143.712-155.792-143.712-261.12106667 0-185.41226667 171.1232-335.72693333 382.8864-335.72693333 211.73013333 0 382.88533333 150.31466667 382.88533334 335.72693333S723.72906667 799.44 512 799.44z m0-622.0608c-185.42826667 0-335.7408 128.36693333-335.7408 287.44426667 0 97.6384 57.06133333 183.21493333 142.64 234.78186666V811.52l113.01973333-68.02133333c26.30186667 5.48053333 52.64213333 8.7616 81.18506667 8.7616 185.39946667 0 335.712-128.36693333 335.712-287.43786667C847.7056 305.74506667 697.39413333 177.3792 512 177.3792z m167.8368 263.30026667H344.12906667c-13.16693333 0-24.12693333-10.976-24.12693334-24.12693334 0-13.16693333 10.95893333-24.13866667 24.128-24.13866666h335.70666667c13.20213333 0 24.16106667 10.9728 24.16106667 24.13866666-0.00106667 13.152-10.96 24.128-24.16 24.128z m-287.42613333 95.44533333h239.17546666c13.168 0 24.12586667 10.98986667 24.12586667 24.14186667 0 13.16906667-10.9568 24.1408-24.12586667 24.1408H392.41066667c-13.1648 0-24.1248-10.97173333-24.1248-24.1408 0-13.152 10.96106667-24.14293333 24.1248-24.14293334z m0 0" p-id="7360"></path></svg>';
	var topic_test_bottom_img_nr02_pinglun = document.createElement('div');
	if (postos == 0 || postos == undefined) {
		topic_test_bottom_img_nr02_pinglun.textContent = "0";
	} else {
		topic_test_bottom_img_nr02_pinglun.textContent = postos;
	}
	var topic_test_bottom_img_nr03 = document.createElement('div');
	topic_test_bottom_img_nr03.className = "topic-test-bottom-img-nr";
	topic_test_bottom_img_nr03.innerHTML =
		'<svg t="1608599855472" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8275"><path d="M71.9 909.8c-2.2 8.4-12.5 5.9-11.9-2.9 13.1-187 71.1-284.1 128.1-352.8C274.7 449.9 469.8 352.7 604 341.3c10.6-0.9 18.9-11.7 18.9-24.8V157.9c0-21.7 21.1-32.9 34.1-18.2l299.5 339.5c9 10.2 8.6 27.6-0.8 37.2L662 817.6c-13.2 13.5-33.3 2-33.3-19V604.3c0-12.9-8.1-23.7-18.6-24.7-85.7-8.5-287.5 10.3-369.1 70.2-34.8 25.4-129.8 112.4-169.1 260z" p-id="8276" ></path></svg>';
	var topic_test_bottom_img_nr03_zhuanfa = document.createElement('div');
	if (postshare == 0 || postshare == undefined) {
		topic_test_bottom_img_nr03_zhuanfa.textContent = "0";
	} else {
		topic_test_bottom_img_nr03_zhuanfa.textContent = postshare;
	}

	topic_test_bottom_img_nr01.appendChild(topic_test_bottom_img_nr01_dianzan);
	topic_test_bottom_img_nr02.appendChild(topic_test_bottom_img_nr02_pinglun);
	topic_test_bottom_img_nr03.appendChild(topic_test_bottom_img_nr03_zhuanfa);
	topic_test_bottom_img.appendChild(topic_test_bottom_img_nr01);
	topic_test_bottom_img.appendChild(topic_test_bottom_img_nr02);
	topic_test_bottom_img.appendChild(topic_test_bottom_img_nr03);

	topic_test_bottom.className = "topic-test-bottom";

	topic_test_bottom.appendChild(test_bottom_left);
	topic_test_bottom.appendChild(topic_test_bottom_img)



	//顶部 -
	topic_test_top.addEventListener('tap', function() { /*tap表示单击屏幕，此处可换双击，滑动等等事件*/
		mui.toast(userid + "的顶部提示"); // mui弹出提示
		var videoss = topic_test_content.getElementsByTagName('video')[0];
		if (videoss != undefined) {
			videoss.pause();
		}
		mui.openWindow({
			url: '../user/mepage.html',
			id: 'mepage',
			extras: {
				"userid": userid
			}
		});


	});

	/***
	 * 获得根目录
	 * @returns
	 */
	var patas = function() {
		var strFullPath = window.document.location.href;
		var strPath = window.document.location.pathname;
		var pos = strFullPath.indexOf(strPath);
		var prePath = strFullPath.substring(0, pos);
		var postPath = strPath.substring(0, strPath.substr(1).indexOf('/') + 1);
		return (prePath + postPath);
	}

	//中部 - 
	// topic_test_content.addEventListener('tap',function(){/*tap表示单击屏幕，此处可换双击，滑动等等事件*/
	// 	// mui.toast(id+"的中部提示");  // mui弹出提示



	// });

	//圈子
	test_bottom_left.addEventListener('tap', function() { /*tap表示单击屏幕，此处可换双击，滑动等等事件*/
		var videoss = topic_test_content.getElementsByTagName('video')[0];
		if (videoss != undefined) {
			videoss.pause();
		}
		mui.toast(id + "的圈子id为：" + Circleid); // mui弹出提示

	});

	//点赞 
	topic_test_bottom_img_nr01.addEventListener('tap', function() {
		if (topic_test_bottom_img_nr01.style.fill == "rgb(0, 0, 0)") {
			topic_test_bottom_img_nr01.style.fill = "#6968ff";
			var dianzhan = Number(topic_test_bottom_img_nr01_dianzan.textContent);
			console.log(dianzhan);
			if (!(isNaN(dianzhan))) {
				topic_test_bottom_img_nr01_dianzan.textContent = dianzhan + 1;
			}
		} else {
			topic_test_bottom_img_nr01.style.fill = "#000000";
			var dianzhan = Number(topic_test_bottom_img_nr01_dianzan.textContent); +
			console.log(dianzhan);
			if (!(isNaN(dianzhan))) {
				topic_test_bottom_img_nr01_dianzan.textContent = dianzhan - 1;
			}
		};


		httpPost(url_circle_postpraise, {
			"token": localStorage.getItem("token"),
			"postid": id
		}, function(data) {
			console.log(JSON.stringify(data))
		});

		// mui.toast(topic_test_bottom_img_nr01.style.fill+id+"的点赞");  // mui弹出提示
	});

	//评论
	topic_test_bottom_img_nr02.addEventListener('tap', function() {
		// mui.toast(id+"的评论");  // mui弹出提示
		// .getElementsByTagName('li');

		var videoss = topic_test_content.getElementsByTagName('video')[0];
		if (videoss != undefined) {
			videoss.pause();
		}




		mui.openWindow({
			url: "../home/postdetails.html",
			id: "postdetails",
			extras: {
				"postid": id
			},
			createNew: false, //是否重复创建同样id的webview，默认为false:不重复创建，直接显示
			show: {
				autoShow: true,
				aniShow: "slide-in-right",
				duration: 100
			},
		});
	});

	//点赞
	topic_test_bottom_img_nr03.addEventListener('tap', function() {
		mui.toast(id + "的转发"); // mui弹出提示
	});





	//顶部
	topic_test.appendChild(topic_test_top);
	//中部
	topic_test.appendChild(topic_test_content);
	//底部
	topic_test.appendChild(topic_test_bottom);
	return topic_test;
}



/**
 * @description  从json 解析到 html
 * @param {Object} data 
 * @
 */
function Parsepost(data) {
	console.log(JSON.stringify(data));
	console.log("解析数据");
	if (data != undefined & data != null & data != "") {
		if (data.type != undefined & data.type != null & data.type != "") {
			if (data.type == 1) { //文字帖
				return dynamiclist(
					data.userinfo.useravatar,
					data.userinfo.uname,
					data.posttext,
					data.placa.placaname,
					undefined,
					data.postid,
					data.postzan,
					data.postos,
					data.postshare,
					data.placa.placaid,
					undefined,
					data.userinfo.uid,
					data.isgreat
				)
			} else if (data.type == 2) { //图片帖子
				return dynamiclist(
					data.userinfo.useravatar,
					data.userinfo.uname,
					data.posttext,
					data.placa.placaname,
					data.postimg,
					data.postid,
					data.postzan,
					data.postos,
					data.postshare,
					data.placa.placaid,
					undefined,
					data.userinfo.uid,
					data.isgreat
				)
			} else if (data.type == 3) { //视频
				return dynamiclist(
					data.userinfo.useravatar,
					data.userinfo.uname,
					data.posttext,
					data.placa.placaname,
					undefined,
					data.postid,
					data.postzan,
					data.postos,
					data.postshare,
					data.placa.placaid,
					data.postvideo,
					data.userinfo.uid,
					data.isgreat
				)
			}
		}
	}
	return undefined;
}







// <div class="topic-test" id="">
// 	<div class="topic-test-top">
// 		<img class="topic-test-top-img" src="./img/x18.png">
// 		<span class="topic-test-top-span" id="">
// 			秋枫
// 		</span>
// 	</div>
// 	<div class="topic-test-content">
// 		<div class="topic-test-content-text" id="">
// 			方尚未发生的格式帝国sadsa时代gas多尴尬上大哥高大上根深蒂固撒大声地根深s蒂固十多个十啊实打实大飒飒打算啊实s打实大师的多个撒大声地
// 		</div>
//		<img class="topic-test-content-img" src="../img/shengri.jpg">
// 	</div>

// 	<div class="topic-test-bottom">
// 		<div class="topic-test-bottom-left" id="">
// 			啊实打实的撒
// 		</div>

// 		<div class="topic-test-bottom-img" id="">
// 			<div class="topic-test-bottom-img-nr">
// 				<svg t="1608599593239" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6449" ><path d="M677.51936 192.03072c113.1008 0 204.8 91.6992 204.8 204.77952 0 186.91072-370.3296 435.15904-370.3296 435.15904S141.68064 592.67072 141.68064 396.81024c0-140.78976 91.6992-204.77952 204.77952-204.77952 68.11648 0 128.28672 33.40288 165.5296 84.55168C549.24288 225.4336 609.41312 192.03072 677.51936 192.03072z" p-id="6450" ></path></svg>
// 			</div>
// 			<div class="topic-test-bottom-img-nr">
// 				<svg t="1608599744819" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7359"><path d="M512 799.44c-24.12586667 0-48.2816-2.19413333-71.33546667-6.58453333l-167.84 102.048v-168.96c-87.7888-61.45386667-143.712-155.792-143.712-261.12106667 0-185.41226667 171.1232-335.72693333 382.8864-335.72693333 211.73013333 0 382.88533333 150.31466667 382.88533334 335.72693333S723.72906667 799.44 512 799.44z m0-622.0608c-185.42826667 0-335.7408 128.36693333-335.7408 287.44426667 0 97.6384 57.06133333 183.21493333 142.64 234.78186666V811.52l113.01973333-68.02133333c26.30186667 5.48053333 52.64213333 8.7616 81.18506667 8.7616 185.39946667 0 335.712-128.36693333 335.712-287.43786667C847.7056 305.74506667 697.39413333 177.3792 512 177.3792z m167.8368 263.30026667H344.12906667c-13.16693333 0-24.12693333-10.976-24.12693334-24.12693334 0-13.16693333 10.95893333-24.13866667 24.128-24.13866666h335.70666667c13.20213333 0 24.16106667 10.9728 24.16106667 24.13866666-0.00106667 13.152-10.96 24.128-24.16 24.128z m-287.42613333 95.44533333h239.17546666c13.168 0 24.12586667 10.98986667 24.12586667 24.14186667 0 13.16906667-10.9568 24.1408-24.12586667 24.1408H392.41066667c-13.1648 0-24.1248-10.97173333-24.1248-24.1408 0-13.152 10.96106667-24.14293333 24.1248-24.14293334z m0 0" p-id="7360"></path></svg>
// 			</div>
// 			<div class="topic-test-bottom-img-nr" id="">
// 				<svg t="1608599855472" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8275"><path d="M71.9 909.8c-2.2 8.4-12.5 5.9-11.9-2.9 13.1-187 71.1-284.1 128.1-352.8C274.7 449.9 469.8 352.7 604 341.3c10.6-0.9 18.9-11.7 18.9-24.8V157.9c0-21.7 21.1-32.9 34.1-18.2l299.5 339.5c9 10.2 8.6 27.6-0.8 37.2L662 817.6c-13.2 13.5-33.3 2-33.3-19V604.3c0-12.9-8.1-23.7-18.6-24.7-85.7-8.5-287.5 10.3-369.1 70.2-34.8 25.4-129.8 112.4-169.1 260z" p-id="8276" ></path></svg>
// 			</div>
// 		</div>
// 	</div>
// </div>
