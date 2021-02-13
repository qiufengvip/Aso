// userid = 1;
// username  = "秋枫";
// userimg ="https:wwww.baidu.com/"
// infonumber = "99+" //消息数量
// time = "16:03"  //时间
// infotest = "gun爸" 最后一条内容


function NewMessageDoc(userid,userimg,username,infotest,infonumber,time){
	var qsub_infonews = document.createElement('div');  //总的
	qsub_infonews.className  = "qsub-infonews"
	
	var qsub_infonews_img =document.createElement('img');  //这是左边的头像
	qsub_infonews_img.className = "qsub-infonews-img";
	
	var qsub_infonews_left = document.createElement("div");  //这是右边的总div
	qsub_infonews_left.className = "qsub-infonews-left";
	var qsub_infonews_left_top = document.createElement("dic");  //这是 右边的上班部分的包裹div
	qsub_infonews_left_top.className = "qsub-infonews-left-top";
	var qsub_infonews_username = document.createElement("div");  //这是 昵称
	qsub_infonews_username.className = "qsub-infonews-username";
	var qsub_infonews_number = document.createElement("div");//这是消息个数 如果没消息直接 display:none;  就OK
	qsub_infonews_number.className = "qsub-infonews-number";
	
	var  qsub_infonews_left_bottom = document.createElement("div");  // 右边 下面的 总div
	qsub_infonews_left_bottom.className = "qsub-infonews-left-bottom";
	var qsub_infonews_info = document.createElement("div");  //这是消息内容
	qsub_infonews_info.className = "qsub-infonews-info";
	var qsub_infonews_time  = document.createElement("div");   //这是时间
	qsub_infonews_time.className = "qsub-infonews-time";
	
	qsub_infonews_img.src= userimg;   //头像
	qsub_infonews_username.textContent = username;  //名称
	
	if(isnull(infonumber)){  //是否有消息 真 则事有
		qsub_infonews_number.textContent = infonumber;
	}else{
		qsub_infonews_number.style.display = "none";
	}
	
	// qsub_infonews_info.textContent=infotest;  //聊天内容
	if(checkHtmlTag(infotest)){
		qsub_infonews_info.textContent = infotest;
	}else{
		
		qsub_infonews_info.innerHTML = infotest;
	}
	
	
	
	
	
	qsub_infonews_time.textContent =time;  //时间
	qsub_infonews.appendChild(qsub_infonews_img);
	qsub_infonews.appendChild(qsub_infonews_left);
	qsub_infonews_left.appendChild(qsub_infonews_left_top);
	qsub_infonews_left.appendChild(qsub_infonews_left_bottom);
	qsub_infonews_left_top.appendChild(qsub_infonews_username);
	qsub_infonews_left_top.appendChild(qsub_infonews_number);
	qsub_infonews_left_bottom.appendChild(qsub_infonews_info);
	qsub_infonews_left_bottom.appendChild(qsub_infonews_time);
	
	
	qsub_infonews.addEventListener('tap',function(){/*tap表示单击屏幕，此处可换双击，滑动等等事件*/
		mui.openWindow({
				url: "chat.html",
				id: "chat",
				extras: {
					"unread":userid,//对方的id
					"userimg":userimg,
					"username":username,
				},
				createNew: false, //是否重复创建同样id的webview，默认为false:不重复创建，直接显示
				show: {
					autoShow: true,
					aniShow: "slide-in-right",
					duration: 100
				}
			});
	});
	return qsub_infonews;
}

function checkHtmlTag(htmlStr) {
	var  reg = /<[^>]+>/g;
	return reg.test(htmlStr);
}



// userid = 1;
// username  = "秋枫";
// userimg ="https:wwww.baidu.com/"
// infonumber = "99+" //消息数量
// time = "16:03"  //时间
// infotest = "gun爸" 最后一条内容
function NewMessageDocToHTML(data){
	return NewMessageDoc(
		data.targetid,
		data.targetimg,
		data.targetname,
		entitiestoUtf16(data.lastone),
		data.unread,
		data.lastonetime,
	);
}





