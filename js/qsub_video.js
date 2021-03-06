function new_qsub_video(maindoc, videourl) {
	//新建 doc对象



	var doc_video = document.createElement("video");
	doc_video.src = videourl; //赋值url
	doc_video.type = "video/ogg";
	var doc_controls = document.createElement("div");
	doc_controls.className = "controls";
	var doc_qsub_video_play01 = document.createElement("i");
	doc_qsub_video_play01.className = "qsub_video_play"
	var doc_qsub_video_play02 = document.createElement("i");
	doc_qsub_video_play02.className = "qsub_video_play"
	doc_qsub_video_play02.style.display = "none";
	var doc_video_timer = document.createElement("div");
	doc_video_timer.className = "video_timer";
	var doc_currentTime = document.createElement("span");
	doc_currentTime.className = "qsub_currentTime"
	var doc_progress = document.createElement("div");
	doc_progress.className = "progress"
	var doc_timrBar = document.createElement("div");
	doc_timrBar.className = "timrBar"
	var qsub_duration = document.createElement("div");
	qsub_duration.className = "qsub_duration";
	var doc_quanping = document.createElement("div");
	doc_quanping.className = "qsub_quanping"



	doc_qsub_video_play01.innerHTML =
		'<svg t="1610701431593" class="qsub_video_play_true" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4181"> <path d="M885.0432 425.1648a102.4 102.4 0 0 1 0 174.08l-523.5712 327.68A102.4 102.4 0 0 1 204.8 839.68V184.32A102.4 102.4 0 0 1 361.472 97.8944z" p-id="4182" fill="#6964FF"></path></svg>';
	doc_qsub_video_play02.innerHTML =
		'<svg t="1610701595509" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1221">  <path d="M735.9 64.9c-51.2 0-96 44.7-96 95.8v702.6c0 51.1 44.8 95.8 96 95.8s96-44.7 96-95.8V160.7c0-51.1-44.8-95.8-96-95.8z m-447.8 0c-51.2 0-96 44.7-96 95.8v702.6c0 51.1 44.8 95.8 96 95.8s96-44.7 96-95.8V160.7c-0.1-51.1-44.9-95.8-96-95.8z" p-id="1222" fill="#6964FF"></path></svg>'

	doc_progress.appendChild(doc_timrBar);
	doc_video_timer.appendChild(doc_currentTime);
	doc_video_timer.appendChild(doc_progress);
	doc_video_timer.appendChild(qsub_duration);
	doc_video_timer.appendChild(doc_quanping);


	doc_controls.appendChild(doc_qsub_video_play01);
	doc_controls.appendChild(doc_qsub_video_play02);
	doc_controls.appendChild(doc_video_timer);


	maindoc.appendChild(doc_video);
	maindoc.appendChild(doc_controls);

	console.log(maindoc.offsetLeft);

	var v = {
		timer: doc_video_timer, //下面控件容器框
		video: doc_video, //容器框          --
		controls: doc_controls, //组件容器  --
		play: doc_qsub_video_play01, //播放按钮
		pause: doc_qsub_video_play02, //暂停按钮
		duration: qsub_duration, //总时长
		currentTime: doc_currentTime, //当前播放时间
		progress: doc_progress, //进度条容器
		timrBar: doc_timrBar, //进度条
		warp: maindoc, //视频区域距离左边距离
		soundPercent: 0, //音量百分比
		fullScreen: doc_quanping /*全屏按钮*/
	};

	// v.video.play();
	//可否停止
	var isstop = false;
	//手动暂停或者播放完毕
	var usersuspend = false;
	var winHeight; //屏幕高度
	var winWidth;  //屏幕宽度
	if (window.innerHeight) {
		winHeight = window.innerHeight;
	} else if ((document.body) && (document.body.clientHeight)) {
		winHeight = document.body.clientHeight;
	}
	if (window.innerWidth) {
		winWidth = window.innerWidth;
	} else if ((document.body) && (document.body.clientWidth)) {
		winWidth = document.body.clientWidth;
	}



	v.video.onloadedmetadata = function() {



		//播放
		v.play.onclick = function() {
			// if (v.video.paused || v.video.ended) {
			$('video').trigger('pause');
			v.video.play();
			this.style.display = "none";
			v.pause.style.display = "inline-block";
			// }
			isstop = true;
			console.log("开始执行了--");
			setTimeout(function() {
				// alert("Hello");
				if (isstop) {
					hides();
				}
			}, 3000);
		}





		//暂停
		v.pause.onclick = function() {
			if (!v.video.paused || !v.video.ended) {
				v.video.pause();
				this.style.display = "none";
				v.play.style.display = "inline-block";
				isstop = false;
				usersuspend = true;
			}
		}
		//获取时长
		v.duration.innerHTML = timer(v.video.duration);
		v.currentTime.innerHTML = timer(v.video.currentTime);
		//进度条跟随  判断滑出页面
		v.video.ontimeupdate = function() {
			var vesselleft = maindoc.getBoundingClientRect().left; //距离顶部边距
			// console.log(vesselleft);
			
			
			if (vesselleft<0 || vesselleft>winWidth-20) {
				usersuspend = false;
				//停止播放
				v.video.pause();
				v.pause.style.display = "none";
				v.play.style.display = "inline-block";
				isstop = false;
			}


			var currentTime = v.video.currentTime;
			var duration = v.video.duration;
			var percent = currentTime / duration * 100;
			v.timrBar.style.width = percent + "%";
			v.currentTime.innerHTML = timer(v.video.currentTime);
		}
		// //显示控件
		v.controls.onclick = function() {
			console.log("danj");
			if (v.pause.style.display == "none") {
				if (v.timer.style.display == "none") {
					console.log(v.timer.style.display);
					shows();
					setTimeout(function() {
						// alert("Hello");
						if (isstop) {
							hides();
						}
					}, 3000);
				}
			}
		}

		function getPoint(obj) { //获取某元素以浏览器左上角为原点的坐标
			var t = obj.offsetTop; //获取该元素对应父容器的上边距
			var l = obj.offsetLeft; //对应父容器的上边距
			//判断是否有父容器，如果存在则累加其边距
			while (obj = obj.offsetParent) { //等效 obj = obj.offsetParent;while (obj != undefined)
				t += obj.offsetTop; //叠加父容器的上边距
				l += obj.offsetLeft; //叠加父容器的左边距
			}
			console.log("top: " + t + " left: " + l);

		}


		function getX(obj) {
			// var parObj = obj;
			
			// var left = obj.offsetLeft;
			// while (parObj = parObj.offsetParent) {
			// 	left += parObj.offsetLeft;
			// }
			return obj.getBoundingClientRect().left; //距离左边边距;
		}

		//进度条获取坐标调用 拖拽实现方法
		var enableProgressDrag = function(e) {
			var progressDrag = false;
			v.progress.onmousedown = function(e) {
				progressDrag = true;
				updateprogress(e.pageX - getX(maindoc));
			}
			document.onmouseup = function(e) {
				if (progressDrag) {
					progressDrag = false;
					updateprogress(e.pageX - getX(maindoc));
				}

			}
			v.progress.onmousemove = function(e) {
				if (progressDrag) {
					updateprogress(e.pageX - getX(maindoc));
				}
			}
		};

		enableProgressDrag();
		//播放速率
		/*全屏*/
		var isScreen = false;
		v.fullScreen.addEventListener("click", function() {
			requestFullscreen(v.video);
			// exitFullscreen(v.video);
			// if (isScreen == false) {
			//     console.log("1");
			//     requestFullscreen(v.video);

			//     isScreen = true;
			// } else {
			//     console.log("2");
			//     exitFullscreen(v.video);
			//     isScreen = false;
			// }
		})
	}
	
	
	
	
	
	
	
	var ws =plus.webview.currentWebview();
	//窗口被显示
	
	ws.addEventListener("pause", function(){
		
		console.log("aadasdsa===================================");
	}, true);
	
	ws.addEventListener("show", function() {
		
		var vesselTop = maindoc.getBoundingClientRect().top; //距离顶部边距
		var vesselleft = maindoc.getBoundingClientRect().left; //距离左边边距
		console.log(vesselleft);
		console.log(vesselTop);
		if (vesselleft<2 || vesselleft>winWidth-20) {
			return;
			
		}
		if ((parseInt(vesselTop) < -10) || (parseInt(vesselTop) > parseInt(winHeight - 10))) {
			usersuspend = false;
			//停止播放
			v.video.pause();
			v.pause.style.display = "none";
			v.play.style.display = "inline-block";
			isstop = false;
		}
		
		console.log("过审的");
		console.log("left"+vesselleft);
		console.log("Top"+vesselTop);
		
		// console.log(vesselTop);
		if (vesselTop < 0) {
			return;
		}
		//判断是否在播放中  
		if (!v.video.paused) {
			//正在播放
			return;
		}
		
		
		//手动暂停的退出
		if (usersuspend) {
			return;
		}
		
		
		
		if (vesselTop < winHeight / 2) {
			//开始播放
			// if (v.video.paused || v.video.ended) {
			v.video.play();
			v.play.style.display = "none";
			v.pause.style.display = "inline-block";
			// }
			isstop = true;
			console.log("开始执行了--");
			setTimeout(function() {
				// alert("Hello");
				if (isstop) {
					hides();
				}
			}, 3000);
		}
	});
	
	//窗口被隐藏  全部视频暂停播放
	ws.addEventListener("hide", function() {
		// console.log(JSON.stringify(ws.Id))//获取参数
		// console.log("===========================///////==============================");
		usersuspend = false;
		//停止播放
		v.video.pause();
		v.pause.style.display = "none";
		v.play.style.display = "inline-block";
		isstop = false;
	});
	
	
	
	//自动播放监听事件  usersuspend =true;
	window.addEventListener('scroll', function() {
		var vesselTop = maindoc.getBoundingClientRect().top; //距离顶部边距
		var vesselleft = maindoc.getBoundingClientRect().left; //距离左边边距
		// console.log(vesselleft);
		if (vesselleft<1 || vesselleft>winWidth-20) {
			return;
		}
		if (vesselTop < -10 || vesselTop > winHeight - 10) {
			usersuspend = false;
			//停止播放
			v.video.pause();
			v.pause.style.display = "none";
			v.play.style.display = "inline-block";
			isstop = false;
		}

		// console.log(vesselTop);
		if (vesselTop < 0) {
			return;
		}
		//判断是否在播放中  
		if (!v.video.paused) {
			//正在播放
			return;
		}
		
		
		//手动暂停的退出
		if (usersuspend) {
			return;
		}
		 
		
		

		if (vesselTop < winHeight / 2) {
			//开始播放
			$('video').trigger('pause');  //暂停所有视频播放器
			console.log("=========================开始播放===============================")
			console.log(vesselTop)
			console.log("=========================开始播放输出完毕===============================")
			// if (v.video.paused || v.video.ended) {
			v.video.play();
			
			v.play.style.display = "none";
			v.pause.style.display = "inline-block";
			// }
			isstop = true;
			console.log("开始执行了--");
			setTimeout(function() {
				// alert("Hello");
				if (isstop) {
					hides();
				}
			}, 3000);
		}
		// console.log(vesselTop + "：" + winHeight);
	}, true);
	//隐藏控件
	function hides() {
		console.log("开始执行函数体--");
		//暂停//display: inline-block;
		v.pause.style.display = "none";
		//控键容器框 display: flex;
		v.timer.style.display = "none";
		//
	}

	//显示控件

	function shows() {
		//暂停//display: inline-block;
		v.pause.style.display = "inline-block";
		//控键容器框 display: flex;
		v.timer.style.display = "flex";
		//
	}
	// hides();


	function updateprogress(x) {
		var percent = 100 * (x - v.progress.offsetLeft) / v.progress.offsetWidth;
		if (percent > 100) {
			percent = 100;
		}
		if (percent < 0) {
			percent = 0;
		}
		v.timrBar.style.width = percent + "%";
		v.video.currentTime = v.video.duration * percent / 100;

	}
	//音量可拖拽实现
	function updatesound(x, n) {
		// sounding();
		if (n) {
			soundPercent = n;
		} else {
			soundPercent = 100 * (x - v.sound.offsetLeft) / v.sound.offsetWidth;
		}
		if (soundPercent > 100) {
			persoundPercentcent = 100;
		}
		if (soundPercent < 0) {
			soundPercent = 0;
		}
		// v.soundBar.style.width = soundPercent + "%";
		v.video.volume = soundPercent / 100;
	}
	//时间格式化            
	function timer(seconds) {
		var minute = Math.floor(seconds / 60);
		if (minute < 10) {
			minute = "0" + minute;
		}

		var second = Math.floor(seconds % 60);
		if (second < 10) {
			second = "0" + second;
		}
		return minute + ":" + second;
	}
	//是否静音
	// var sound = document.querySelector("#sound");
	// var muteSound = document.querySelector("#muteSound");

	// function sounding() {
	//     if (v.video.volume == 0) {
	//         sound.style.display = "none";
	//         muteSound.style.display = "inline-block";
	//     } else {
	//         sound.style.display = "inline-block";
	//         muteSound.style.display = "none";
	//     }
	// }
	//切换静音
	// sound.onclick = function() {
	//         showHide(sound, muteSound);
	//         v.video.volume = 0;
	//         v.soundBar.style.width = 0;
	//     }
	//     //去除静音 音量回到之前选定区域
	// muteSound.onclick = function() {
	//         showHide(muteSound, sound);
	//         v.soundBar.style.width = soundPercent + "%";
	//         v.video.volume = soundPercent / 100;
	//     }
	//显示与隐藏
	function showHide(a, b) {
		a.style.display = "none";
		b.style.display = "inline-block";
	}

	/*全屏*/
	// 全屏
	// ele:全屏的对象                        
	function requestFullscreen(ele) {
		// 全屏兼容代码
		if (ele.requestFullscreen) {
			ele.requestFullscreen();
		} else if (ele.webkitRequestFullscreen) {
			ele.webkitRequestFullscreen();
		} else if (ele.mozRequestFullScreen) {
			ele.mozRequestFullScreen();
		} else if (ele.msRequestFullscreen) {
			ele.msRequestFullscreen();
		}
	}

	// 取消全屏
	function exitFullscreen() {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		}
	}


}
