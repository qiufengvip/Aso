var url_user_loginverify = "/api/user/loginverify";  //账号验证 获取头像
var url_user_login_face = "/api/user/login"; //登录-密码登录-人脸登录
var url_uesr_sign = "/api/user/sign";    //注册新账号
var url_user_sign_verify_phone ="/api/user/signverify";  //注册 验证手机验证码
var url_user_sign_verify_face = "/api/user/setface";  //注册  录入人脸
var url_user_getchool = "/api/user/getschool"; //加载学校
var url_user_setchool = "/api/user/setschool"; //录入学校信息



mui.init();
function httpPost(urls,data,returnfun){
	var url = "http://10.203.19.3:8080/FriendAssociation"+urls;
	console.log(url)
	console.log(JSON.stringify(data))
	mui.ajax(url, {
		data: data,
		headers: {
				"content-type": "application/x-www-form-urlencoded;charset=UTF-8",
				"Access-Control-Allow-Origin": "*",
			},
		type: 'post', //请求方式,一般情况get和post都可以
		timeout: 10000, //10秒超时
		dataType: "json",   //本次跨域请求实现获取数据
		// jsonp: "callback",   // 就是回调函数的名称 默认值为callback
		//请求完毕
		success: returnfun,  // 回调函数
		//错误处理
		error: function(xhr, type, errorThrown) {
			// mui.toast("服务器内部错误!");
			console.log("服务器内部错误!");
			console.log('error:' + type);
		}
	})
}