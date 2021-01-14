/**
 * @param {Object} tximg 头像
 * @param {Object} name 昵称
 * @param {Object} contents 信息
 * @param {Object} attentionnum 关注数量
 * @param {Object} fansnum 粉丝数量
 * @param {Object} isattention 是否关注
 */
function searchone(tximg,name,contents,attentionnum,fansnum,isattention){
	var search_uesr_list = document.createElement('div');
	search_uesr_list.className = "search-uesr-list";
	
	var search_uesr_list_left = document.createElement('div');
	search_uesr_list_left.className = "search-uesr-list-left";
	
	var img_tx = document.createElement('img');
	img_tx.src = tximg;
	
	var search_uesr_list_centr = document.createElement('div');
	search_uesr_list_centr.className = "search-uesr-list-centre";
	
	var search_uesr_list_centre_name = document.createElement('div');
	search_uesr_list_centre_name.className = "search-uesr-list-centre-name";
	
	var text = document.createElement('span');
	text.textContent = name;
	
	var search_uesr_list_centre_sign = document.createElement('div');
	search_uesr_list_centre_sign.className = "search-uesr-list-centre-sign";
	
	var content = document.createElement('span');
	content.textContent = contents;
	
	var search_uesr_list_centre_info = document.createElement('div');
	search_uesr_list_centre_info.className = "search-uesr-list-centre-info";
	
	var attention = document.createElement('span');
	attention.textContent = attentionnum + "关注";
	
	var fans = document.createElement('span');
	fans.textContent = " . " + fansnum +  "粉丝";
	
	var search_uesr_list_right = document.createElement('div');
	search_uesr_list_right.className = "search-uesr-list-right";
	
	var search_uesr_list_right_botton = document.createElement('button');
	search_uesr_list_right_botton.type = "button";
	search_uesr_list_right_botton.className = "search-uesr-list-right-botton";
	
	
	search_uesr_list.appendChild(search_uesr_list_left);
	search_uesr_list.appendChild(search_uesr_list_centr);
	search_uesr_list.appendChild(search_uesr_list_right);
	
	search_uesr_list_centr.appendChild(search_uesr_list_centre_name);
	search_uesr_list_centre_name.appendChild(text);
	search_uesr_list_centr.appendChild(search_uesr_list_centre_sign);
	search_uesr_list_centre_sign.appendChild(content)
	search_uesr_list_centr.appendChild(search_uesr_list_centre_info);
	search_uesr_list_centre_info.appendChild(attention);
	search_uesr_list_centre_info.appendChild(fans);
	
	search_uesr_list_left.appendChild(img_tx);
	
	search_uesr_list_right.appendChild(search_uesr_list_right_botton);
	
	if(isattention){
		search_uesr_list_right_botton.style.backgroundColor = "rgb(146, 146, 146)";
		search_uesr_list_right_botton.textContent = "-取关";
	}else{
		search_uesr_list_right_botton.style.backgroundColor = "rgb(105, 105, 255)";
		search_uesr_list_right_botton.textContent = "+关注";
	}
	
	console.log("wwwwwwwwww")
	search_uesr_list_right_botton.addEventListener("tap",function(){
		//mui.toast(search_uesr_list_right_botton.style.backgroundColor);
		
		var colors = search_uesr_list_right_botton.style.backgroundColor;
		console.log(colors);
		// console.log(colors == "rgb(105, 105, 255)");
		
		// if(colors == "rgb(105, 105, 255)"){
			
		// 	search_uesr_list_right_botton.style.backgroundColor = "rgb(146, 146, 146)";
		// 	search_uesr_list_right_botton.textContent = "-取关";
		// }else{
		// 	search_uesr_list_right_botton.style.backgroundColor ="rgb(105, 105, 255)";
		// 	search_uesr_list_right_botton.textContent = "+关注";
		// }
	});
	
	return search_uesr_list;
	
}

/**
 * @desc 用户
 * @param {Object} tximg 头像
 * @param {Object} name 昵称
 * @param {Object} contents 信息
 * @param {Object} attentionnum 关注数量
 * @param {Object} fansnum 粉丝数量
 * @param {Object} isattention 是否关注
 */
function ChoneToHTML(data){
	return searchone(
		data.uavatar,
		data.uname,
		data.usign,
		data.ufocus,
		data.ufans,
		data.isfocus
	);
}


/**
 * @desc  圈子
 * @param {Object} data
 */
function HtwoToHTML(data){
	return searchtwo(
		data.pavatar,
		data.pname,
		data.pinfo,
		data.puser,
		data.pdynamic
	);
	
}


/**
 * @param {Object} tximg 头像
 * @param {Object} name 昵称
 * @param {Object} contents 信息
 * @param {Object} attentionnumm 圈友
 * @param {Object} fansnum 粉丝数量
 */
function searchtwo(tximg,name,contents,attentionnumm,fansnum){
	var qsub_circle = document.createElement('div');
	qsub_circle.className = "qsub-circle";
	
	var qsub_circle_left = document.createElement('div');
	qsub_circle_left.className = "qsub-circle-left";
	
	var img_tx = document.createElement('img');
	img_tx.src = tximg;
	qsub_circle_left.appendChild(img_tx);
	
	var qsub_circle_right = document.createElement('div');
	qsub_circle_right.className = "qsub-circle-right";
	
	var qsub_circle_right_01 = document.createElement('div');
	qsub_circle_right_01.className = "qsub-circle-right-01";
	
	var span01 = document.createElement('span');
	span01.textContent = name;
	qsub_circle_right_01.appendChild(span01);
	
	var qsub_circle_right_02 = document.createElement('div');
	qsub_circle_right_02.className = "qsub-circle-right-02";
	
	var span02 = document.createElement('span');
	span02.textContent = attentionnumm + "圈友";
	
	var span03 = document.createElement('span');
	span03.textContent = fansnum + "动态";
	
	qsub_circle_right_02.appendChild(span02);
	qsub_circle_right_02.appendChild(span03);
	
	var qsub_circle_right_03 = document.createElement('div');
	qsub_circle_right_03.className = "qsub-circle-right-03";
	qsub_circle_right_03.textContent = contents;
	
	qsub_circle.appendChild(qsub_circle_left);
	qsub_circle.appendChild(qsub_circle_right);
	qsub_circle_right.appendChild(qsub_circle_right_01);
	qsub_circle_right.appendChild(qsub_circle_right_02);
	qsub_circle_right.appendChild(qsub_circle_right_03);
	
	return qsub_circle;
}
