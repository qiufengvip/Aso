var commentid = "1";  //评论id
var imgurl = "img/x18.png";  //评论人头像
var username = "秋枫";  //评论人昵称
var time = "2021-1-5 9:12"; //评论时间
var commentinfo = "我来装逼了"; //评论内容
var reply = "21"; //回复数量
var isgive = true; //是否点赞
var givequantity = "544";  //点赞数量
var userid = ""  //用户id

function yicomment(commentid,imgurl,username,time,commentinfo,reply,isgive,givequantity,userid){
	var comment =  document.createElement('div');  //总div
	comment.className = "comment";
	var comment_info_top = document.createElement("div");  //顶部数据
	comment_info_top.className = "comment-info-top";
	var comment_info_img = document.createElement("img");  //顶部数据 -头像
	comment_info_img.className = "comment-info-img";
	var comment_info_username = document.createElement("div");  //顶部数据 -昵称
	comment_info_username.className = "comment-info-username";
	var comment_info_time = document.createElement("div");  //顶部数据 -时间
	comment_info_time.className = "comment-info-time";
	
	var comment_info_content = document.createElement("div");  //中部数据
	comment_info_content.className = "comment-info-content";
	
	var comment_info_bottom = document.createElement("div");  //底部数据
	comment_info_bottom.className = "comment-info-bottom";  
	var comment_info_bottom_zuo = document.createElement("div");  //底部数据-回复显示
	comment_info_bottom_zuo.className = "comment-info-bottom-zuo"; 
	var comment_info_you = document.createElement("div");  //底部数据 点赞图标
	comment_info_you.className = "comment-info-you"; 
	comment_info_you.innerHTML = '<svg class="comment-info-zan" t="1608606012309" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10020"> <path d="M884.875894 423.143253 646.970506 423.143253c92.185562-340.464205-63.516616-357.853247-63.516616-357.853247-65.993017 0-52.312436 52.182476-57.3031 60.881602 0 166.502152-176.849824 296.971645-176.849824 296.971645l0 472.171899c0 46.607504 63.516616 63.393819 88.433098 63.393819l357.452111 0c33.641191 0 61.036122-88.224344 61.036122-88.224344 88.434122-300.70569 88.434122-390.177444 88.434122-390.177444C944.657442 418.179195 884.875894 423.143253 884.875894 423.143253L884.875894 423.143253 884.875894 423.143253zM884.875894 423.143253" p-id="10021"></path> <path d="M251.671415 423.299819 109.214912 423.299819c-29.420053 0-29.873378 28.89612-29.873378 28.89612l29.420053 476.202703c0 30.309306 30.361495 30.309306 30.361495 30.309306L262.420223 958.707948c25.686009 0 25.458835-20.049638 25.458835-20.049638L287.879058 459.411271C287.879058 422.837284 251.671415 423.299819 251.671415 423.299819L251.671415 423.299819 251.671415 423.299819zM251.671415 423.299819" p-id="10022"></path></svg>';
	var comment_info_zan_int = document.createElement("div");  //底部数据-点赞数
	comment_info_zan_int.className = "comment-info-zan-int"; 
	
	comment_info_username.textContent = username;  // 名称
	comment_info_img.src = imgurl;  //头像
	comment_info_time.textContent = time;  //时间
	comment_info_content.textContent = commentinfo; //内容
	
	//显示回复的条数   不等于空
	if(reply != undefined & reply != "" & reply != "0" & reply != null){
		comment_info_bottom_zuo.textContent = reply + "条回复";
	}else{
		comment_info_bottom_zuo.className = "";
		comment_info_bottom_zuo.innerHTML = "";
	}
	
	
	
	
	//是否点赞   点赞了
	if(isgive){   // 是否点赞
		//topic_test_bottom_img_nr01.style.fill = "#000"
		comment_info_you.style.fill = "#6968FF";
	}else{
		comment_info_you.style.fill = "#000000";
	}
	
	
	//givequantity
	comment_info_zan_int.textContent = givequantity;
	
	comment.appendChild(comment_info_top);
	comment.appendChild(comment_info_content);
	comment.appendChild(comment_info_bottom);
	comment_info_top.appendChild(comment_info_img);
	comment_info_top.appendChild(comment_info_username);
	comment_info_top.appendChild(comment_info_time);
	comment_info_bottom.appendChild(comment_info_bottom_zuo);
	comment_info_bottom.appendChild(comment_info_you);
	comment_info_you.appendChild(comment_info_zan_int);
	return comment;
}

// var commentid = "1";  //评论id
// var imgurl = "img/x18.png";  //评论人头像
// var username = "秋枫";  //评论人昵称
// var time = "2021-1-5 9:12"; //评论时间
// var commentinfo = "我来装逼了"; //评论内容
// var reply = "21"; //回复数量
// var isgive = true; //是否点赞
// var givequantity = "544";  //点赞数量
// var userid = ""  //用户id



function yicommenttoHTML(data){
	return yicomment(
	data.osfirstid,
	data.userinfo.useravatar,
	data.userinfo.uname,
	data.commenttime,
	data.comment,
	data.postos,
	data.isgreat,
	data.oszan,
	data.userinfo.id
	)
}

/**
<div class="comment" id="comment">
	<div class="comment-info-top" id="">
		<img class="comment-info-img" src="img/x18.png">
		<div class="comment-info-username" id="">
			秋枫
		</div>
		&nbsp; &nbsp;
		<div class="comment-info-time" id="">
			12-22
		</div>
	</div>

	<div class="comment-info-content" id="">
		卧槽，牛逼啊兄弟，你可真的太他吗的顶级了，哈哈哈哈哈哈哈哈
	</div>

	<div class="comment-info-bottom" id="">
		<div class="comment-info-bottom-zuo" id="">
			10条回复
		</div>

		<div class="comment-info-you" id="">
			<svg class="comment-info-zan" t="1608606012309" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
			 p-id="10020">
				<path d="M884.875894 423.143253 646.970506 423.143253c92.185562-340.464205-63.516616-357.853247-63.516616-357.853247-65.993017 0-52.312436 52.182476-57.3031 60.881602 0 166.502152-176.849824 296.971645-176.849824 296.971645l0 472.171899c0 46.607504 63.516616 63.393819 88.433098 63.393819l357.452111 0c33.641191 0 61.036122-88.224344 61.036122-88.224344 88.434122-300.70569 88.434122-390.177444 88.434122-390.177444C944.657442 418.179195 884.875894 423.143253 884.875894 423.143253L884.875894 423.143253 884.875894 423.143253zM884.875894 423.143253"
				 p-id="10021"></path>
				<path d="M251.671415 423.299819 109.214912 423.299819c-29.420053 0-29.873378 28.89612-29.873378 28.89612l29.420053 476.202703c0 30.309306 30.361495 30.309306 30.361495 30.309306L262.420223 958.707948c25.686009 0 25.458835-20.049638 25.458835-20.049638L287.879058 459.411271C287.879058 422.837284 251.671415 423.299819 251.671415 423.299819L251.671415 423.299819 251.671415 423.299819zM251.671415 423.299819"
				 p-id="10022"></path>
			</svg>
			<div class="comment-info-zan-int" id="">
				51512
			</div>
		</div>
	</div>
</div>

**/