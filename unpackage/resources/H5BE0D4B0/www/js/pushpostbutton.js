function addpushbutton(){
	var body= document.getElementsByClassName("mui-content")[0];
	var qsub_publish   = document.createElement("div");
	qsub_publish.className = "qsub-publish";
	qsub_publish.innerHTML = '<svg t="1610783434608" class="qsub-publish-ico" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2531" ><path d="M512 1024C229.238154 1024 0 794.761846 0 512S229.238154 0 512 0s512 229.238154 512 512-229.238154 512-512 512z m236.307692-551.384615H551.384615V275.692308a39.384615 39.384615 0 1 0-78.76923 0v196.923077H275.692308a39.384615 39.384615 0 1 0 0 78.76923h196.923077v196.923077a39.384615 39.384615 0 1 0 78.76923 0V551.384615h196.923077a39.384615 39.384615 0 0 0 0-78.76923z" fill="#6964FF" p-id="2532"></path></svg>'
	body.appendChild(qsub_publish);
	qsub_publish.style.right = "-30px"
	//tabindex="0" outline=0" hidefocus="true"
	//设置属性
	qsub_publish.setAttribute('tabindex', "0");
	qsub_publish.setAttribute('outline', "0");
	qsub_publish.setAttribute('hidefocus', "true");
	
	qsub_publish.addEventListener('tap',function(){
		
		
		
		console.log("asdsa");
		console.log(this.style.right);
		if(this.style.right == "-30px"){
			qsub_publish.style.right = "30px";
			// mui.toast("执行")
		}else{
			// mui.toast("开始工作")
			$('video').trigger('pause');
			mui.openWindow({
				url: "uploadpost.html",
				id: "uploadpost",
			});
			
			
			
			
		}
	});
	
	qsub_publish.addEventListener('blur',function(){
			console.log("失去焦点");
		qsub_publish.style.right = "-30px";
		
	});
	
	
	
	
}


// <div class="qsub-publish" id="qsub-publish">
			// 	</div>