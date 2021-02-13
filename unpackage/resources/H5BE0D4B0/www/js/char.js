/**
 * handleimg 头像图片
 * msg 文本消息
 * msgimg 发送的图片
 */
function meMsgAdd(handleimg,msg,msgimg){
	var qsub_chat_me = document.createElement('div');
	qsub_chat_me.className="qsub-chat-me"
	
	var qsub_tx_img = document.createElement('img');
	qsub_tx_img.className = "qsub-chat-img"
	
	var qsub_chat_msg = document.createElement('div');
	qsub_chat_msg.className = "qsub-chat-msg"
	
	//这里己方消息发送的文本
	var qsub_chat_reply = document.createElement('span');
	qsub_chat_reply.className = "qsub-chat-reply";
	
	//这里己方发送的的图片消息
	var qsub_chat_reply_img = document.createElement('img');
	qsub_chat_reply_img.className = "qsub-chat-reply-img";
	
	qsub_tx_img.src = handleimg;
	
	qsub_chat_me.appendChild(qsub_tx_img);
	qsub_chat_me.appendChild(qsub_chat_msg);
	
	qsub_tx_img.src = handleimg;
	
	
	
	if(isnull(msgimg)){
		//图片
		qsub_chat_msg.appendChild(qsub_chat_reply_img);
		qsub_chat_reply_img.src = msgimg;
	}else{
		qsub_chat_msg.appendChild(qsub_chat_reply);
		qsub_chat_reply.textContent = msg;
	}
	return qsub_chat_me;
}

function userMsgAdd(handleimg,msg,msgimg){
	var qsub_chat_user = document.createElement('div');
	qsub_chat_user.className = "qsub-chat-user";
	
	var qsub_chat_img = document.createElement('img');
	qsub_chat_img.className = "qsub-chat-img";
	
	var qsub_chat_msg = document.createElement('div');
	qsub_chat_msg.classList = "qsub-chat-msg qsub-user";
	
	//文本
	var qsub_chat_user_reply = document.createElement('span');
	qsub_chat_user_reply.className = "qsub-chat-user-reply";
	
	//图片
	var qsub_chat_reply_img = document.createElement('img')
	qsub_chat_reply_img.className = "qsub-chat-reply-img";
	
	qsub_chat_user.appendChild(qsub_chat_img);
	qsub_chat_user.appendChild(qsub_chat_msg);
	
	qsub_chat_img.src = handleimg;
	
	if(isnull(msgimg)){
		//图片
		qsub_chat_msg.appendChild(qsub_chat_reply_img);
		qsub_chat_reply_img.src = msgimg;
	}else{
		qsub_chat_msg.appendChild(qsub_chat_user_reply);
		qsub_chat_user_reply.textContent = msg;
	}
	return qsub_chat_user;
}



// (handleimg,msg,msgimg)
function MsgtoHTML(data){
	console.log(JSON.stringify(data));
	if(data.type==1){
		//对方发送的消息
		if(data.data.type == 1){
			//这里是文字
			return userMsgAdd(
				userimg,
				data.data.data
			);
		}else if(data.data.type == 2){
			//图片
			return userMsgAdd(
				userimg,
				undefined,
				data.data.data
			);
		}
	};
	var useravatar = localStorage.getItem("useravatar");
	if(data.type == 0){
		//自己的消息
		if(data.data.type ==1){
			//这里是文字
			return meMsgAdd(
				useravatar,
				data.data.data
			);
		}else if(data.data.type == 2){
			//图片
			return meMsgAdd(
				useravatar,
				undefined,
				data.data.data
			);
		}
	}
	return undefined;
}







// <div class="qsub-chat-user ">
// 	<img class="qsub-chat-img" src="./img/qq.png">
// 	<div class="qsub-chat-msg qsub-user">
// 		<span class="qsub-chat-user-reply ">卧槽，尊类</span>
// 	</div>
// </div>

// <div class="qsub-chat-user">
// 	<img class="qsub-chat-img" src="./img/qq.png">
// 	<div class="qsub-chat-msg qsub-user">
// 		<img class="qsub-chat-reply-img" src="http://file.qsub.cn/082cfad61e9a4461a93d786c9a248c111608481610394.jpg" alt="">
// 	</div>
// </div>
