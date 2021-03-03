# Aso
 校友会用户端


# 版本发布

## 1.8版本发布(2021-03-01)
- 历史记录页面点赞问题  OK
- 注册提示 问题  OK了
- 注册人脸录入语音提示 OK了
- 转发 问题x
- 搜索 问题x
- 圈子 问题x
- 评论 点赞 问题x
- 详情页显示UI 问题x
- 历史记录事件优化 问题x


## 1.7版本发布(2021-03-01)
- 架设CDN加速,防御

## 1.6版本发布(2021-03-01)
- 修复退出登录的bug
- 增加广告(望理解)
- 修复更新器显示问题
- 增加修改密码
- 修复更新器显示问题
- 修复注册的一些问题(后端)
- 修复意见反馈问题
- 增加新手指引

## 1.5版本发布(2021-02-20)
- 增加自动更新(√)
- 增加自动登录(√)
- 增加设置页面
- 增加账号退出
- 增加问题反馈
- 增加检测更新
- 增加用户协议
- 增加关于应用页面
- 增加彩蛋(自己寻找吧*_*)




## 1.4版本发布(2021-02-13)
- 增加图片预览功能()
- 优化聊天窗口打开速度(√)
- 聊天可以发送emoji表情啦(√)
- 修复emoji表情带来的一系列bug(√)
- 修复软件点击两次关闭问题(√)
- 增加私聊消息提示(√)
- 修复历史记录页面提示非法调用问题(√)
- 个人页面 修改个人信息不刷新(√)
- 增加自动更新(×)
- 增加自动登录(×)

## 1.3版本待发布 (2021-02-08)
- 个人页面 修改个人信息不刷新(×)
- 个人信息UI美化(√)
- 个人动态页面 前几条动态重复(√)
- 增加自动更新(×)
- 增加自动登录(×)
- 最近浏览出现非法调用(√)
- 优化粉丝界面打开速度(√)
- 优化关注页面打开速度(√)
- 更换全局字体(√)

## 1.2版本发布（2021-02-01）
- 修复注册时异常退出后账号登录出错问题(后端)
- 修复从个人主页跳转到聊天窗口时发送消息参数异常问题
- 修复从个人主页跳转到聊天窗口时获取历史记录异常问题(后端)
- 增加视频自动播放与自动暂停，人性化设计 还你手指一个美好的春天!
- 修复由于窗口特殊性导致部分页面视频播放器进度条拖动与点击位置不同问题
- 修复由视频自动播放功能带来的众多BUG
- 增加食堂实时温湿度监控系统(引用echarts)
- 发帖速度优化，使用多线程(后端)

## 1.1版本发布（2021-01-25）
> 上线服务器开启公测

- 修复上传多张图片时只能显示最后一张的问题
- 优化帖子显示UI
- 优化帖子单张图片显示UI
- 评论为零时 评论数量 显示异常问题
- 点赞为零时 点赞数量 显示异常问题
- 聊天中本人头像显示异常
- 修复刷帖版块上拉刷新异常
- 修复搜索页面中帖子显示异常问题
- 修复上传视频过大时上传错误问题
- 修复上传动态失败时进度条显示异常问题
- 动态版块切换自动加载数据
- 修复注册用户时人脸框卡顿问题
- 修复搜索结果中帖子的数据异常问题_(后端问题)
- 修复点赞的帖子获取时点赞情况异常问题*


## 1.0版本发布
> 初步功能已完善
- 所用功能编码完毕

# api文档


## 写在前面

### 命名规范

- 数据交互中的JSON 的键【key】 统一使用小写字母，不允许出现大写字母。

### 统一要求JSON格式进行数据交互
```json
{
    "code": "200",       //响应代码
    "msg": "请求成功",    //提示信息
    "data": {            //响应数据
        "name": "秋枫",
        "age": "18",
        "token": "awwerhsdvgsrhsdbhrwsdb51asffghjt"
    }
}
```
### 代码一览表

- 注意 上面json中的code字段 的代码一览表 可以自己往这个表里面添加错误代码，但是要注意错误代码的统一性。
- 错误返回的负数，正确返回是正数【200】。

| code | 解释 |
| ---- | ---- |
| 200  | 成功 |
|      |      |
|      |      |
|      |      |

# ①-----------------登录注册----------

## 注册

- 手机号注册
- 注意特殊字符

- 给手机发送验证码
- 发送时间判断，一分钟只能发送一次
- 注意是否注册过了

- 注意发送成功与否

URL

```
http：//127.0.0.1/api/user/sign
```

请求参数

|参数名|示例|解释|
|-|-|-|
|phone|16630916110|手机号|
|username|yasdsadsa|支持中文英文数字3位以上（需验证）|
|userpwd|yang2wew@@|支持中英文 (英文特殊符号）|
||||

响应示例

```json
{
    "code": "200",       //响应代码
    "msg": "请求成功",    //提示信息
}
```

错误示例

```json
{
    "code": "-1",       //响应代码
    "msg": "手机号有误",    //提示信息
}
```

## 注册-验证验证码

- 注意限制验证次数 6 次 则次验证失效 

URL

```
http：//127.0.0.1/api/user/signverify
```

请求参数

|参数名|示例|解释|
|-|-|-|
|phone|16630916110|手机号|
|code|a81d|验证码|

响应示例

```json
{
    "code": "200",       //响应代码
    "msg": "验证成功",    //提示信息
    "data":{
        "token":"sadassaddsadsasdasdsad"
    }
}
```

错误示例

```json
{
	"code":"-3",
	"msg":"验证次数超过六次，验证码已失效"
}
```


## 注册-录入人脸

- 注意是不是已经有人脸 本账号
- 最好多弄几张
- 没有就增加脸信息
- 有一张脸的信息就开始验证和增加  直到得到你想要的张数

URL

```
http：//127.0.0.1/api/user/setface
```

请求参数

|参数名|示例|解释|
|-|-|-|
|basedata|wasrwsffasfsfasfasfasfasf.....|人脸数据|
|token|sadassaddsadsasdasdsad|验证码|

响应示例

```json
{
    "code": "200",       //响应代码
    "msg": "验证成功",    //提示信息
    "data":{
        "isfase": true,  
        "verify": true,
        "isover": false,  //添加到指定张数完毕后 返回true
    }
}
```

错误示例

```json
{
	"code":"-1",
	"msg":"未检测到人脸"
}
```





## 注册-录入学校信息

URL

```
http：//127.0.0.1/api/user/setschool
```

请求参数

|参数名|示例|解释|
|-|-|-|
|token|sadassaddsadsasdasdsad|token|
|schoolid|1|学校id|
|auth|1|校内外|

响应示例

```json
{
    "code": "200",       //响应代码
    "msg": "录入成功",    //提示信息
}
```

错误示例

```json
{
	"code":"-1",
	"msg":"录入失败"
}
```




## 获取用户信息

- token 获取用户信息

```
http：//127.0.0.1/api/user/getuserinfo
```
请求参数

|参数名|示例|解释|
|-|-|-|
|token|asdasdasdasdasdasdsadas|token|

响应示例

```json
{
    "code": "200",       //响应代码
    "msg": "获取成功",    //提示信息
    "data":{
        "username":"秋枫ex"
        "phone":"16630916660"
        "":"".....
        
    }
}
```

错误示例

```json
{
	"code":"-1",
	"msg":"未登录"
}
```



## 登录验证

- 验证账号状态


```
http：//127.0.0.1/api/user/loginverify
```
请求参数

|参数名|示例|解释|
|-|-|-|
|username|sadasasd|可能是手机号 邮箱 或者是昵称|


响应示例

```json
{
    "code": 200,    //响应代码
    "msg": "账号正常",    //提示信息
	"data" : {
        "state" : 1,
        "img" : "http://qiufegn/12121"
    }
}

//失败
{
    "code" : -1,
    "msg":"未找到账号"
}


```








## 登录


- 有登录类型的
- 1 = 人脸登录
- 2 = 账号密码登录 

```
http：//127.0.0.1/api/user/login
```
请求参数

|参数名|示例|解释|
|-|-|-|
|type|1|1=人脸 2 = 账密|
|username|sadasasd|可能是手机号 邮箱 或者是昵称|
|userpwd|yangsadas11121..|密码 如果 type = 2 则有此表项|
|basedata|asdasdasdasdasdasdsadas.....|如果是人脸就有这个|

响应示例

```json
{
    "code": "200",       //响应代码
    "msg": "登录成功",    //提示信息
    "data":{
        "token":"asdassadsaasdasasassas"
        
    }
}
```

错误示例

```json
//1
{
	"code":"-1",
	"msg":"请输入密码"
}
//2
{
	"code":"-2",
	"msg":"账号未找到"  //记得验证账号对与否
}
//....
```

## 加载学校

```
http：//127.0.0.1/api/user/getschool
```
请求方式
```
POST
```

请求参数

|参数名|示例|解释|
|-|-|-|
|无|||
响应示例

```json
{
    "code": "200",
    "msg": "获取成功",
    "data": [
        {
            "code": "1",  //学校编号
            "name": "河北软件职业技术学院"  //学校名称
        },
        {
            "code": "2",   //学校编号
            "name": "河北大学"
        },
        {
            "code": "3",
            "name": "河北科技学院"
        }
    ]
}
```

错误示例

```json
//1
{
	"code":"-1",
	"msg":"获取失败"
}
```













# ②----------刷帖--------

## 帖子推荐获取

- 30%的几率随机插入一条广告
- 只推荐校外 或校内的版块
- 不能获取本人看过的(从历史记录表里查询)
- 假如数据不够用了则可以推荐重复内容
- 随机排序
- 优化速度算法推荐： 吧需要用到的表的数据全部先加载到内存中，在进行筛选

```
http://127.0.0.1/api/circle/hot
```
请求参数

|参数名|示例|解释|
|-|-|-|
|hottype|1|1=校内   2 = 校外|
|token|asdasdasdasdasdasdsadas|用户token|
|size|10|获取的数量  如果不传参 则为10|

响应示例

```json
{
    "code": "200",
    "msg": "获取成功",
    "data": [{
        "userinfo":{
            "uname":"秋枫",//发帖人姓名
            "useravatar":"http://file.qsub.cn/1b6ec965bf8a4bfda4b1039d000afb691608464547357.prifix"  // 用户头像
        },
        "postid":1,   //帖子ID
        "isgreat": true,  // 是否点赞
        "collect" : true,  //是否收藏
        "type":1,  //帖子的类型  1 = 文字帖   2 = 图片帖子  3  = 视频帖子
        "placa":{//帖子模块的信息---------------------------------------------
                "placaid":5,
                "placaname":"表白墙"
            }, 
        "createtime":"", //时间
        "posttext":"qiufeng发送的第一条数字", // 文本数值
        "postimg" :"http://file.qsub.cn/082cfad61e9a4461a93d786c9a248c111608481610394.jpg", //图片Url
        "postvideo":"http://file.qsub.cn/%E8%BF%85%E9%9B%B7%E5%BD%B1%E9%9F%B3%202020-12-05%2012-56-57.mp4"// 视频 如果有视频的话就没有图片了
    },{
        "userinfo":{
            "uname":"秋枫",//发帖人姓名
            "useravatar":"http://file.qsub.cn/1b6ec965bf8a4bfda4b1039d000afb691608464547357.prifix"  // 用户头像
        },
        "postid":1,   //帖子ID
        "isgreat": true,  // 是否点赞
        "collect" : true,  //是否收藏
        "type":1,  //帖子的类型  1 = 文字帖   2 = 图片帖子  3  = 视频帖子
        "placa":{//帖子模块的信息---------------------------------------------
                "placaid":5,
                "placaname":"表白墙"
            }, 
        "createtime":"", //时间
        "posttext":"qiufeng发送的第一条数字", // 文本数值
        "postimg" :"http://file.qsub.cn/082cfad61e9a4461a93d786c9a248c111608481610394.jpg", //图片Url
        "postvideo":"http://file.qsub.cn/%E8%BF%85%E9%9B%B7%E5%BD%B1%E9%9F%B3%202020-12-05%2012-56-57.mp4"// 视频 如果有视频的话就没有图片了
    },{
        "userinfo":{
            "uname":"秋枫",//发帖人姓名
            "useravatar":"http://file.qsub.cn/1b6ec965bf8a4bfda4b1039d000afb691608464547357.prifix"  // 用户头像
        },
        "postid":1,   //帖子ID
        "isgreat": true,  // 是否点赞
        "collect" : true,  //是否收藏
        "type":1,  //帖子的类型  1 = 文字帖   2 = 图片帖子  3  = 视频帖子
        "placa":{//帖子模块的信息---------------------------------------------
                "placaid":5,
                "placaname":"表白墙"
            }, 
        "createtime":"", //时间
        "posttext":"qiufeng发送的第一条数字", // 文本数值
        "postimg" :"http://file.qsub.cn/082cfad61e9a4461a93d786c9a248c111608481610394.jpg", //图片Url
        "postvideo":"http://file.qsub.cn/%E8%BF%85%E9%9B%B7%E5%BD%B1%E9%9F%B3%202020-12-05%2012-56-57.mp4"// 视频 如果有视频的话就没有图片了
    }]
}
```

## 获取单个板块的帖子

- 无广告
- 时间倒序 排列
- sql语句写好点   只需要吧用户信息表全部加载到内存中即可 做到速度最优

```
http://127.0.0.1/api/circle/plate
```
请求参数

|参数名|示例|解释|
|-|-|-|
|placaid|1|版块的id|
|token|asdasdasdasdasdasdsadas|用户token|
|size|10|获取的数量  如果不传参 则为10|
|page|2|页序号 如果不穿则为1|
响应示例

```json
{
    "code": "200",
    "msg": "获取成功",
    "data": [{
        "userinfo":{
            "uname":"秋枫",//发帖人姓名
            "useravatar":"http://file.qsub.cn/1b6ec965bf8a4bfda4b1039d000afb691608464547357.prifix"  // 用户头像
        },
        "postid":1,   //帖子ID
        "isgreat": true,  // 是否点赞
        "collect" : true,  //是否收藏
        "type":1,  //帖子的类型  1 = 文字帖   2 = 图片帖子  3  = 视频帖子
        "placa":{//帖子模块的信息---------------------------------------------
                "placaid":5,
                "placaname":"表白墙"
            }, 
        "createtime":"", //时间
        "posttext":"qiufeng发送的第一条数字", // 文本数值
        "postimg" :"http://file.qsub.cn/082cfad61e9a4461a93d786c9a248c111608481610394.jpg", //图片Url
        "postvideo":"http://file.qsub.cn/%E8%BF%85%E9%9B%B7%E5%BD%B1%E9%9F%B3%202020-12-05%2012-56-57.mp4"// 视频 如果有视频的话就没有图片了
    },{
        "userinfo":{
            "uname":"秋枫",//发帖人姓名
            "useravatar":"http://file.qsub.cn/1b6ec965bf8a4bfda4b1039d000afb691608464547357.prifix"  // 用户头像
        },
        "postid":1,   //帖子ID
        "isgreat": true,  // 是否点赞
        "collect" : true,  //是否收藏
        "type":1,  //帖子的类型  1 = 文字帖   2 = 图片帖子  3  = 视频帖子
        "placa":{//帖子模块的信息-----------------------------------------------------------
                "placaid":5,
                "placaname":"表白墙"
            }, 
        "createtime":"", //时间
        "posttext":"qiufeng发送的第一条数字", // 文本数值
        "postimg" :"http://file.qsub.cn/082cfad61e9a4461a93d786c9a248c111608481610394.jpg", //图片Url
        "postvideo":"http://file.qsub.cn/%E8%BF%85%E9%9B%B7%E5%BD%B1%E9%9F%B3%202020-12-05%2012-56-57.mp4"// 视频 如果有视频的话就没有图片了
    },{
        "userinfo":{
            "uname":"秋枫",//发帖人姓名
            "useravatar":"http://file.qsub.cn/1b6ec965bf8a4bfda4b1039d000afb691608464547357.prifix"  // 用户头像
        },
        "postid":1,   //帖子ID
        "isgreat": true,  // 是否点赞
        "collect" : true,  //是否收藏
        "type":1,  //帖子的类型  1 = 文字帖   2 = 图片帖子  3  = 视频帖子
        "placa":{//帖子模块的信息-------------------------------------------------
                "placaid":5,
                "placaname":"表白墙"
            }, 
        "createtime":"", //时间
        "posttext":"qiufeng发送的第一条数字", // 文本数值
        "postimg" :"http://file.qsub.cn/082cfad61e9a4461a93d786c9a248c111608481610394.jpg", //图片Url
        "postvideo":"http://file.qsub.cn/%E8%BF%85%E9%9B%B7%E5%BD%B1%E9%9F%B3%202020-12-05%2012-56-57.mp4"// 视频 如果有视频的话就没有图片了
    }]
}
```

# ③----------评论-----------

## 获取一级评论+帖子的详细信息 

- 无广告
- 时间倒序 排列
- sql语句写好点   只需要吧用户信息表全部加载到内存中即可 做到速度最优

```
http://127.0.0.1/api/circle/detailpage
```
请求参数

|参数名|示例|解释|
|-|-|-|
|postId|15|帖子的id|
|token|asdasdasdasdasdasdsadas|用户token|
|placaid|52|帖子id|
响应示例

```json
{
    "code": "200",
    "msg": "获取成功",
    "data": {
        "detailpage": {
            "userinfo": {
                "uid": "1",
                "uname": "秋枫",
                "useravatar": "http://file.qsub.cn/1b6ec965bf8a4bfda4b1039d000afb691608464547357.prifix"
            },
            "placa":{//帖子模块的信息
                "placaid":5,
                "placaname":"表白墙"
            }, 
            "type": 1,
            "isgreat": true,  // 是否点赞
        	"collect" : true,  //是否收藏
            "placaid": 1,
            "createtime": "2020-12-22",  //时间
            "posttext": "qiufeng发送的第一条数字",
            "postimg": "http://file.qsub.cn/082cfad61e9a4461a93d786c9a248c111608481610394.jpg",
            "postvideo": "http://file.qsub.cn/%E8%BF%85%E9%9B%B7%E5%BD%B1%E9%9F%B3%202020-12-05%2012-56-57.mp4",
            "postzan":52, //赞
            "postaos":353,//收藏数量
            "postshare":85,//分享数量
            "postos":852,//评论数量
            "postsee":5112,//观看量
            "hotcomments":[{  //热门评论   最多获取10条  最少没有 没有 则本字段为 []  不是null  按照赞排序 前俩 且 超过十个赞才算是热门评论
                    "userinfo": {
                        "uid": "1",
                        "uname": "秋枫",
                        "useravatar": "http://file.qsub.cn/1b6ec965bf8a4bfda4b1039d000afb691608464547357.prifix"
                    },
                	"osfirstid": 21 ,//评论id---------------------------------------------
                    "type":1,// 1 = 文字评论 2 = 图片评论 3 = 视频评论
                    "comment":"我感觉你说的很有道理啊！",  //评论内容
                    "postzan":20, //赞数量
                    "commenttime":"半小时之前",
                    "postos":152 //评论数量
                },{
                    "userinfo": {
                        "uid": "2",
                        "uname": "东风",
                        "useravatar": "http://file.qsub.cn/1b6ec965bf8a4bfda4b1039d000afb691608464547357.prifix"
                    },
                    "osfirstid": 1 ,//评论id---------------------------------------------
                    "type":1,// 1 = 文字评论 2 = 图片评论 3 = 视频评论
                    "comment":"这周日你有空吗?",  //评论内容
                    "postzan":20, //赞数量
                    "commenttime":"半小时之前",
                    "postos":15 //评论数量
                }
            ],
            "genecomments":[{  //普通评论  按照时间来排序 获取前十个
                    "userinfo": {
                        "uid": "1",
                        "uname": "秋枫",
                        "useravatar": "http://file.qsub.cn/1b6ec965bf8a4bfda4b1039d000afb691608464547357.prifix"
                    },
               		"osfirstid": 51 ,//评论id---------------------------------------------
                    "type":1,// 1 = 文字评论 2 = 图片评论 3 = 视频评论
                    "comment":"我感觉你说的很有道理啊！",  //评论内容
                    "postzan":20, //赞数量
                    "commenttime":"三天前",
                    "postos":152 //评论数量
                },{
                    "userinfo": {
                        "uid": "2",
                        "uname": "东风",
                        "useravatar": "http://file.qsub.cn/1b6ec965bf8a4bfda4b1039d000afb691608464547357.prifix"
                    },
                    "type":1,// 1 = 文字评论 2 = 图片评论 3 = 视频评论
                    "comment":"这周日你有空吗?",  //评论内容
                    "postzan":20, //赞数量
                    "commenttime":"一天前",
                    "postos":15 //评论数量
                }
            ]
        }
    }
}
```

## 获取评论

- 时间倒序
- 优化速度算法推荐：分页查询sql  加载全部用户信息到内存

```
http://127.0.0.1/api/circle/topcomment
```
请求参数

|参数名|示例|解释|
|-|-|-|
|token|asdasdasdasdasdasdsadas|用户token|
|size|10|获取的数量  如果不传参 则为10|
|page|2|页序号 如果不穿则为1|
|placaid|52|帖子id|

响应示例

```json
{
    "code": "200",
    "msg": "获取成功",
    "data": [{  //普通评论  按照时间来排序 
        "userinfo": {
            "uid": "1",
            "uname": "秋枫",
            "useravatar": "http://file.qsub.cn/1b6ec965bf8a4bfda4b1039d000afb691608464547357.prifix"
        },
        "osfirstid":2, //评论id----------------------
        "isgreat": true,  // 是否点赞
        "type":1,// 1 = 文字评论 2 = 图片评论 3 = 视频评论
        "comment":"我感觉你说的很有道理啊！",  //评论内容
        "postzan":20, //赞数量
        "commenttime":"三天前",
        "postos":152 //评论数量
    },{
        "userinfo": {
            "uid": "2",
            "uname": "东风",
            "useravatar": "http://file.qsub.cn/1b6ec965bf8a4bfda4b1039d000afb691608464547357.prifix"
        },
        "type":1,// 1 = 文字评论 2 = 图片评论 3 = 视频评论
        "comment":"这周日你有空吗?",  //评论内容
        "postzan":20, //赞数量
        "commenttime":"一天前",
        "postos":15 //评论数量
    }]
}
```

## 获取一级评论的详情

- 就是一级评论和他下面的所属的所有评论

```
http://127.0.0.1/api/circle/commentdetail
```



|参数|示例|解释|
|-|-|-|
|token|uikyugdfbsvafgdgjgjhfdsfadjgjhfds|token|
|comment |1|评论id|

```json
{
    "code": "200",
    "msg": "获取成功",
    "data": {
        "userinfo": {
            "uid": "1",
            "uname": "秋枫",
            "useravatar": "http://file.qsub.cn/1b6ec965bf8a4bfda4b1039d000afb691608464547357.prifix"
        },
        "osfirstid": 2,  //评论id
        "isgreat": true,  // 是否点赞
        "type": 1,
        "comment": "我感觉你说的很有道理啊！",
        "postzan": 20,
        "commenttime": "三天前",
        "postos": 152,
        "replyList": [
            {
                "userinfo": {
                    "uid": "2",
                    "uname": "东风",
                    "useravatar": "http://file.qsub.cn/1b6ec965bf8a4bfda4b1039d000afb691608464547357.prifix"
                },
                "osfirstid": 6,  //评论id
                "isgreat": true,  // 是否点赞
                "type": 1,
                "comment": "这周日你有空吗?",
                "postzan": 20,
                "commenttime": "一天前",
                "postos": 15,
                "superior":{   //有上级评论
                     "userinfo": {
                        "uname": "东风",
                        "useravatar": "http://file.qsub.cn/1b6ec965bf8a4bfda4b1039d000afb691608464547357.prifix"
                    },
                    "osfirstid": 6,  //评论id
                    "isgreat": true,  // 是否点赞
                    "type": 1,
                    "comment": "这周日你有空吗?",
                    "postzan": 20,
                    "commenttime": "一天前",
                    "postos": 15
                }
            },{
                "userinfo": {
                    "uid": "2",
                    "uname": "东风",
                    "useravatar": "http://file.qsub.cn/1b6ec965bf8a4bfda4b1039d000afb691608464547357.prifix"
                },
                "osfirstid": 7,  //评论id
                "isgreat": true,  // 是否点赞
                "type": 1,
                "comment": "这周日你有空吗?",
                "postzan": 20,
                "commenttime": "一天前",
                "postos": 15,
                "superior":{}  //没有上级评论是二级评论
            }
        ]
    }
}
```


## 获取一级评论的评论分页

- 一级评论下面的所属的所有评论

```
http://127.0.0.1/api/circle/pagecomment
```



|参数|示例|解释|
|-|-|-|
|token|uikyugdfbsvafgdgjgjhfdsfadjgjhfds|token|
|comment |1|评论id|
|page|2|页|
|count|10|数量|
```json
{
    "code": "200",
    "msg": "获取成功",
    "data": {[{
                "userinfo": {
                    "uid": "2",
                    "uname": "东风",
                    "useravatar": "http://file.qsub.cn/1b6ec965bf8a4bfda4b1039d000afb691608464547357.prifix"
                },
                "osfirstid": 6,  //评论id
        		"isgreat": true,  // 是否点赞
                "type": 1,
                "comment": "这周日你有空吗?",
                "postzan": 20,
                "commenttime": "一天前",
                "postos": 15,
                "superior":{   //有上级评论
                     "userinfo": {
                         "uid": "2",
                        "uname": "东风",
                        "useravatar": "http://file.qsub.cn/1b6ec965bf8a4bfda4b1039d000afb691608464547357.prifix"
                    },
                    "osfirstid": 6,  //评论id
                    "isgreat": true,  // 是否点赞
                    "type": 1,
                    "comment": "这周日你有空吗?",
                    "postzan": 20,
                    "commenttime": "一天前",
                    "postos": 15
                }
            },{
                "userinfo": {
                    "uid": "2",
                    "uname": "东风",
                    "useravatar": "http://file.qsub.cn/1b6ec965bf8a4bfda4b1039d000afb691608464547357.prifix"
                },
				"osfirstid": 7,  //评论id
				"isgreat": true,  // 是否点赞
                "type": 1,
                "comment": "这周日你有空吗?",
                "postzan": 20,
                "commenttime": "一天前",
                "postos": 15,
                "superior":{}  //没有上级评论是二级评论
            }
        ]
    }
}
```










## 发布评论

- 上级id可能没有  没有就是一级评论

```
http://127.0.0.1/api/circle/pushcomment
```

|字段|||
|-|-|-|
|token|asdsafasfsafsaasf|token|
|postid|1|帖子id|
|osfirstid|12|上级id 可能为空|
|comment|好利好的人啊|评论内容|

```json
//一级
{
    "msg": "发布成功",
    "code": "200",
    "data": {
        "commenttime": "不到1小时前",
        "postos": 0,
        "postzan": 0,
        "comment": "你说啥？",
        "userinfo": {
            "uid": "1",
            "uname": "jzh",
            "useravatar": "http://file.qsub.cn/1b6ec965bf8a4bfda4b1039d000afb691608464547357.prifix"
        },
        "osfirstid": "18",
        "isgreat": false
    }
}

//二级
{
    "msg": "发布成功",
    "code": "200",
    "data": {
        "superior": "",//上级评论信息，没有为二级评论
        "commenttime": "不到1小时前",
        "postos": "0",
        "postzan": "0",
        "comment": "你说啥？",
        "userinfo": {
            "uid": "1",
            "uname": "jzh",
            "useravatar": "http://file.qsub.cn/1b6ec965bf8a4bfda4b1039d000afb691608464547357.prifix"
        },
        "osfirstid": -29,
        "isgreat": false
    }
}

//二级以上
{
    "msg": "发布成功",
    "code": "200",
    "data": {
        "superior": {
            "commenttime": "不到1小时前",
            "postos": "1",
            "postzan": "0",
            "comment": "你说啥？",
            "userinfo": {
                "uid": "1",
                "uname": "jzh",
                "useravatar": "http://file.qsub.cn/1b6ec965bf8a4bfda4b1039d000afb691608464547357.prifix"
            },
            "osfirstid": -29,
            "isgreat": false
        },
        "commenttime": "不到1小时前",
        "postos": "0",
        "postzan": "0",
        "comment": "你说啥？",
        "userinfo": {
            "uid": "1",
            "uname": "jzh",
            "useravatar": "http://file.qsub.cn/1b6ec965bf8a4bfda4b1039d000afb691608464547357.prifix"
        },
        "osfirstid": -31,
        "isgreat": false
    }
}
```

## 帖子点赞
- 再次请求则取消赞

```
http://127.0.0.1/api/circle/postpraise
```

|字段|||
|-|-|-|
|token|asdsafasfsafsaasf|token|
|postid|1|帖子id|

```json
{
	"code":200,
    "msg":"点赞成功"
}
```

## 帖子收藏
- 再次请求则取消收藏

```
http://127.0.0.1/api/circle/postcollect
```

|字段|||
|-|-|-|
|token|asdsafasfsafsaasf|token|
|postid|1|帖子id|

```json
{
	"code":200,
    "msg":"收藏成功"
}
```

## 帖子分享
- 一个用户只计算一次分享的值 但不会取消分享

```
http://127.0.0.1/api/circle/postshare
```

|字段|||
|-|-|-|
|token|asdsafasfsafsaasf|token|
|postid|1|帖子id|

```json
{
	"code":200,
    "msg":"分享成功"
}
```

## 评论点赞

- 再次请求则取消赞

```
http://127.0.0.1/api/circle/ospraise
```

| 字段   |                   |        |
| ------ | ----------------- | ------ |
| token  | asdsafasfsafsaasf | token  |
| commentid | 1                 | 评论id |

```json
{
	"code":200,
    "msg":"点赞成功"
}
```



# ④----------聊天----------

-----

## 聊天-获取消息列表

- 按照最后的时间排序

```
http：//127.0.0.1/api/chat/getmesslist
```

请求参数

|参数名|示例|解释|
|-|-|-|
|token|asdsadasdasdasdsadasdassad|token|

响应参数

````json
{
    "code":200,
	"msg" :"获取成功",
	"data" :[{
        "targetname":"小绿帽",  //对方的用户名
        "targetid":"51",    //对方的 id
        "targetimg":"https://dummyimage.com/600x600/fff/000&text=%E7%BB%BF",  //对方的头像
        "lastonetime" : "20:18",//最后一条消息的 发送时间
        "lastone":"晚安，宝宝明天见！", //最后一条消息的 内容   可能是 我给他发的也可能是他给我发的
        "unread":21  //未读消息数
    },{
        "targetname":"茶一",  //对方的用户名
        "targetid":"58",    //对方的 id
        "targetimg":"https://dummyimage.com/600x600/fff/000&text=%E5%A9%8A%E5%AD%90",  //对方的头像
        "lastonetime" : "昨天",//最后一条消息的 发送时间
        "lastone":"爱你mpaim", //最后一条消息的 内容   可能是 我给他发的也可能是他给我发的
        "unread":1  //未读消息数
    }]
}
````







## 聊天-发送消息 & 发送图片

- 

- 获取自己的userid(以token的形式获取)

- 判断接受消息的账户是否存在

- 校验token,检查自身是否登录

- 获取自己的userid(以token的形式获取)

- 判断接受消息的账户是否存在

- 判断接受消息的人是否为自己的好友

- 表单类型为：multipart/form-data(特别注意查看此表单如何解析详见 聊天demo)

- contenttext与contentpic 可能有一个没内容也可能都有内容(都有内容就分两条发送)  （也可能全部没有则直接返回 消息为空）

- 请求成功的话 消息记录【存数据库】   消息发送给【前端 】 带上消息的id  然后 客户端如果接受到本条消息则消息置为 已读（这置为已读 是另一条api）

  

URL

```
http：//127.0.0.1/api/chat/send2usermsg
```

请求参数

| 参数名      | 示例                             | 解释                                |
| ----------- | -------------------------------- | ----------------------------------- |
| token       | e4a7e9cc592cee865eeb87ada7cf3c20 | 自己的token                         |
| targetid    | 51                               | 发送对象的id                        |
| contenttext | 你好，世界！                     | 发送的内容                          |
| contentpic  | 文件形式                         | 图片 注意判断类型  不是图片不让上传 |

响应示例

```json
//这种情况是因为 有消息内容也有图片 则返回 两条
{
    "code": "200",
    "msg": "发送成功",
    "data": [
        {
            "chatid": 21,  //这是本条消息的id
            "data": "你好",
            "type": 1 //类型为1 则事 文字内容
        },
        {
            "chatid": 22, //这是本条消息的id
            "data": "https://dummyimage.com/600x600/fff/000&text=%E7%A7%8B",
            "type": 2//类型为2 则是 图片内容
        }
    ]
}

//这种情况是只有消息内容
{
    "code": "200",
    "msg": "发送成功",
    "data": [
        {
            "chatid": 22, //这是本条消息的id
            "data": "你好啊",
            "type": 1
        }
    ]
}
```

错误示例

```json
(校验token,检查自身是否登录)
{
    "code": "-1",       //响应代码
    "msg": "未登录",    //提示信息
}


(判断发送的人是否是自己的好友)
{
    "code": "-2",       //响应代码
    "msg": "接受对象不是好友关系",    //提示信息
}

(判断接受消息的账户是否存在)
{
    "code": "-3",       //响应代码
    "msg": "接受对象不存在",    //提示信息
}

(判断图片类型)
{
    "code": "-4",       //响应代码
    "msg": "图片类型不支持",    //提示信息
}


```

### (服务端发送)发送给对应的用户  查看目录关系  本条属于上一个api的子处理

- 如何发送看 聊天demo  需要引用相关jar包

|参数|示例|解释|
|-|-|-|
|token|asdsadsadsdsaddsd| 这是发送消息的时候获取对方用户的token (不是发消息的人的而是接受消息的人的token) |
|data|{"chatid": 22, "data": "https://dummyimage.com/600x600/fff/000&text=%E7%A7%8B","type": 2}|发送的消息数据内容|

返回示例 

有服务端发送的客户端负责接收无返回值 不用管





----

## 聊天-消息置为已读

- 吧消息置为已读消息
- 可置多条也可置单条（单条则为单个消息的id  全部则为 all)

URL

```
http：//127.0.0.1/api/chat/messageread
```



请求参数
|参数|示例|解释|
|-|-|-|
|token|e4a7e9cc592cee865eeb87ada7cf3c20|自己的token|
|targetid|C10ECA3101EB706BE1E401CD85DE56F2|聊天对象的id|
|chatid|12|消息的id  全部则为all|

````json
{
    "code" : 200,
    "msg" : "设置成功"
}
````













----
## 聊天-查询历史聊天记录

- 校验token,检查自身是否登录
- 获取自己的userid(以token的形式获取)
- 判断接受消息的账户是否存在
- 判断发送的人是否是自己的好友

URL

```
http：//127.0.0.1/api/user/gethistory
```

请求参数

| 参数名   | 示例                             |                  |
| -------- | -------------------------------- | ---------------- |
| token    | e4a7e9cc592cee865eeb87ada7cf3c20 | 用户的token      |
| targetid | C10ECA3101EB706BE1E401CD85DE56F2 | 接受消息的用户id |

响应示例

```json
{
    "code": "200",
    "msg": "获取成功",
    "data": [
        {
            "data": {
                "chatid": 22, //这是本条消息的id
                "data": "你好啊",
                "type": 1  //这个是消息类型
            },
            "type": 1 //type是消息类型,外面的type是指谁发送的消息,0是本人,1是对方
        },
        {
            "data": {
                "chatid": 23, //这是本条消息的id
                "data": "恩在呢怎么了",
                "type": 1
            },
            "type": 0
        },
        {
            "data": {
                "chatid": 24, //这是本条消息的id
                "data": "https://dummyimage.com/600x600/fff/000&text=%E5%93%88%E5%93%88",
                "type": 2  //消息类型为图片
            },
            "type": 0 //0 则表示是自己发送的
        },
        {
            "data": {
                "chatid": 25, //这是本条消息的id
                "data": "你好",
                "type": 1
            },
            "type": 1
        }
    ]
}


```

错误示例

```json
(校验token,检查自身是否登录)
{
    "code": "-1",       //响应代码
    "msg": "未登录",    //提示信息
}

(判断发送的人是否是自己的好友)
{
    "code": "-2",       //响应代码
    "msg": "接受对象不是好友关系",    //提示信息
}

(判断接受消息的账户是否存在)
{
    "code": "-3",       //响应代码
    "msg": "接受对象不存在",    //提示信息
}
```



# ⑤--------------个人主页------------------

## 个人主页

- 获取所传id的个人主页

界面展示

![个人主页](https://s3.ax1x.com/2021/01/03/s9AjeO.png)

URL 

```
http：//127.0.0.1/api/user/userhome
```

请求参数

|参数|示例|解释|
|-|-|-|
|token|sadfasfasfwasfassfas|自己的token|
|userid|51|要展示主页的用户id|

响应示例

```json
{
    "code":200,
    "msg": "请求成功！",
    "data":{
        "userid": 51,  //用户id
        "username": "旅人在此",  // 昵称
        "uesrsign":"让世界变得更美好！", //签名  
        "isconcern": true,  //是否关注
        "useravatar":"http://file.qsub.cn/1b6ec965bf8a4bfda4b1039d000afb691608464547357.prifix"  // 用户头像
        "great": "411",  //获赞
        "fans" :"1万", //粉丝
        "concern " :"100", //关注
        "dynamiclist":[{   //先获取前20个------------------------------------------------------------------
            "userinfo":{
                "uname":"旅人在此",//发帖人姓名
                "useravatar":"http://file.qsub.cn/1b6ec965bf8a4bfda4b1039d000afb691608464547357.prifix"  // 用户头像
            },
            "postid":1,   //帖子ID
            "isgreat": true,  // 是否点赞  (token用户对本帖的)
            "great" : "1562", // 帖子点赞的数量
            "comment":"151",  //评论数量
            "share":"12", //分享数量
            "type":1,  //帖子的类型  1 = 文字帖   2 = 图片帖子  3  = 视频帖子
            "placa":{//帖子模块的信息---------------------------------------------
                    "placaid":5,
                    "placaname":"表白墙"
                }, 
            "createtime":"", //时间
            "posttext":"qiufeng发送的第一条数字", // 文本数值
            "postimg" :"http://file.qsub.cn/082cfad61e9a4461a93d786c9a248c111608481610394.jpg", //图片Url
            "postvideo":"http://file.qsub.cn/%E8%BF%85%E9%9B%B7%E5%BD%B1%E9%9F%B3%202020-12-05%2012-56-57.mp4"// 视频 如果有视频的话就没有图片了
        },{
            "userinfo":{
                "uname":"旅人在此",//发帖人姓名
                "useravatar":"http://file.qsub.cn/1b6ec965bf8a4bfda4b1039d000afb691608464547357.prifix"  // 用户头像
            },
            "postid":2,   //帖子ID
            "isgreat": true,  // 是否点赞
            "collect" : true,  //是否收藏
            "type":1,  //帖子的类型  1 = 文字帖   2 = 图片帖子  3  = 视频帖子
            "placa":{//帖子模块的信息-----------------------------------------------------------
                    "placaid":5,
                    "placaname":"寻物"
                }, 
            "createtime":"", //时间
            "posttext":"qiufeng发送的第二条数字", // 文本数值
            "postimg" :"http://file.qsub.cn/082cfad61e9a4461a93d786c9a248c111608481610394.jpg", //图片Url
            "postvideo":"http://file.qsub.cn/%E8%BF%85%E9%9B%B7%E5%BD%B1%E9%9F%B3%202020-12-05%2012-56-57.mp4"// 视频 如果有视频的话就没有图片了
        }]
    }
}
```

## 个人主页下滑数据

- 获取一个人的发帖

```
http：//127.0.0.1/api/user/userdynamiclist
```

请求参数

|参数名称|示例|解释|
|-|-|-|
|token|asddfasfsasfasas|token|
|userid|51|要获取的用户id|
|page|1|页数|
|size|20|每页的数量|

返回示例

```json
{
    "code":200,
    "msg": "请求成功！",
    "data":
        [{
            "userinfo":{
                "uname":"旅人在此",//发帖人姓名
                "useravatar":"http://file.qsub.cn/1b6ec965bf8a4bfda4b1039d000afb691608464547357.prifix"  // 用户头像
            },
            "postid":1,   //帖子ID
            "isgreat": true,  // 是否点赞
            "great" : "1562", // 帖子点赞的数量
            "comment":"151",  //评论数量
            "share":"12", //分享数量
            "type":1,  //帖子的类型  1 = 文字帖   2 = 图片帖子  3  = 视频帖子
            "placa":{//帖子模块的信息---------------------------------------------
                    "placaid":5,
                    "placaname":"表白墙"
                }, 
            "createtime":"", //时间
            "posttext":"qiufeng发送的第一条数字", // 文本数值
            "postimg" :"http://file.qsub.cn/082cfad61e9a4461a93d786c9a248c111608481610394.jpg", //图片Url
            "postvideo":"http://file.qsub.cn/%E8%BF%85%E9%9B%B7%E5%BD%B1%E9%9F%B3%202020-12-05%2012-56-57.mp4"// 视频 如果有视频的话就没有图片了
        },{
            "userinfo":{
                "uname":"旅人在此",//发帖人姓名
                "useravatar":"http://file.qsub.cn/1b6ec965bf8a4bfda4b1039d000afb691608464547357.prifix"  // 用户头像
            },
            "postid":2,   //帖子ID
            "isgreat": true,  // 是否点赞
            "collect" : true,  //是否收藏
            "type":1,  //帖子的类型  1 = 文字帖   2 = 图片帖子  3  = 视频帖子
            "placa":{//帖子模块的信息-----------------------------------------------------------
                    "placaid":5,
                    "placaname":"寻物"
                }, 
            "createtime":"", //时间
            "posttext":"qiufeng发送的第二条数字", // 文本数值
            "postimg" :"http://file.qsub.cn/082cfad61e9a4461a93d786c9a248c111608481610394.jpg", //图片Url
            "postvideo":"http://file.qsub.cn/%E8%BF%85%E9%9B%B7%E5%BD%B1%E9%9F%B3%202020-12-05%2012-56-57.mp4"// 视频 如果有视频的话就没有图片了
    }]
}
```



## 关注用户
- 再次请求则取消关注

```
http://127.0.0.1/api/user/focus
```

| 字段   |                   |        |
| ------ | ----------------- | ------ |
| token  | asdsafasfsafsaasf | token  |
| userid | 1                 | 用户id |

```json
{
	"code":200,
    "msg":"关注成功"
}

{
	"code":200,
    "msg":"取消关注成功"
}

{
	"code":-2,
    "msg":"请不要关注外星人~"
}

{
	"code":-3,
    "msg":"关注失败"
}

{
	"code":-3,
    "msg":"取消关注失败"
}
```





# ⑥----------------搜索模块----------------

---

## 搜索 - 获取热词



url

```
 http：//127.0.0.1/api/search/hot
```

请求参数
|请求参数|示例|解释|
|-|-|-|
|token|sdfasddasdsdasd|token|

返回示例

```json
{
    "code":200,
    "msg" : "请求成功",
    "data" :["java","身份证","水卡","秋枫","java怎么样","java就业前景","java牛逼吗","java和php谁简单","java可以干什么","java怎么学"]
}
```

## 搜索 -  获取搜索结果

界面

![搜索结果](https://s3.ax1x.com/2021/01/05/skJDTU.png)

url

```
 http：//127.0.0.1/api/search/getdata
```

请求参数
|请求参数|示例|解释|
|-|-|-|
|token|asdsaffasfsdgsdddsgf|token|
|wd|java|搜索词|
|type|all|all = 全部(包含后面三个)    user = 用户     dyn = 动态    cir = 圈子|

```json
{
	"code":200,
	"msg":"请求成功",
	"data":[
        {
            "searchdata": 1 ,//结果类型 。 1 = 帖子 2 = 用户 3 =圈子
             "userinfo":{
                "uname":"旅人在此",//发帖人姓名
 "useravatar":"http://file.qsub.cn/1b6ec965bf8a4bfda4b1039d000afb691608464547357.prifix"  // 用户头像
            },
            "postid":1,   //帖子ID
            "isgreat": true,  // 是否点赞
            "great" : "1562", // 帖子点赞的数量
            "comment":"151",  //评论数量
            "share":"12", //分享数量
            "type":1,  //帖子的类型  1 = 文字帖   2 = 图片帖子  3  = 视频帖子
            "placa":{//帖子模块的信息---------------------------------------------
                    "placaid":5,
                    "placaname":"表白墙"
                }, 
            "createtime":"", //时间
            "posttext":"qiufeng发送的第一条数字", // 文本数值
            "postimg" :"http://file.qsub.cn/082cfad61e9a4461a93d786c9a248c111608481610394.jpg", //图片Url
            "postvideo":"http://file.qsub.cn/%E8%BF%85%E9%9B%B7%E5%BD%B1%E9%9F%B3%202020-12-05%2012-56-57.mp4"// 视频 如果有视频的话就没有图片了
        },{
            "searchdata": 2 ,//结果类型 。 1 = 帖子 2 = 用户 3 =圈子
            "uid" : 21, //用户id
            "uname" :"日新乐毅", //用户名 
            "uavatar" : "http://file.qsub.cn/1b6ec965bf8a4bfda4b1039d000afb691608464547357.prifix",  // 用户头像
            "usign"  :  "让世界变得更美好",  //签名
            "isfocus" :true, //是否关注 token对uid
            "ufocus" ："12",  //关注
            "ufans":"100"   //粉丝
        },{
            "searchdata": 3 ,//结果类型 。 1 = 帖子 2 = 用户 3 = 圈子
            "pid":"21",  //圈子id
            "pname" :"就业局势",  //圈子名称
            "pinfo":"圈子介绍-这是一个关于就业的圈子",  //圈子介绍
            "puser":"5151", //圈子内发布动态的人数
            "pdynamic" : "212112",  //圈子内发布的动态数量
            "pavatar": "http://file.qsub.cn/1b6ec965bf8a4bfda4b1039d000afb691608464547357.prifix"  // 圈子的头像
	}]
}
```



# ⑦----------发帖--------------

------------------

## 发布帖子

- 格式为 multipart/form-data   (特别注意查看此表单如何解析详见 聊天demo)

API

```
/api/issue/dynamic
```

请求参数

|请求字段|演示||
|-|-|-|
|token|asdasdsdadadasasds|token|
|placaid|2|圈子id|
|content|这是我的大....|文字数据 可以为空|
|video|data|视频数据|
|image|data|他不会和视频同时出现但是需要注意的是它可能会有多个|

返回数据

```json
{
	"code":200,
	"msg" : "发布成功"
}
```





## 获取圈子信息

API

```
/api/issue/circle
```

请求参数
||||
|-|-|-|
|token|dasdasasdasdasd|token|

返回信息
```json
{
    "code": 200,
    "msg": "请求成功",
    "data": [
        {
            "placaid": "1",
            "placaname": "校内-表白墙"  //这哩的校内  需要自己进行字符串拼接 数据库字段里面不会有的
        },
        {
            "placaid": "2",
            "placaname": "校内-表白"
        },
        {
            "placaid": "5",
            "placaname": "校外-招聘"
        }
    ]
}
```

# ⑧--------个人信息--------

## 获取个人信息

- 只可以获取自己的

api

```
/api/info/getmyuserinfo
```

请求参数

|请求参数|示例|解释|
|-|-|-|
|token|asdfasfasasfsafas|token|
返回数据
```json
{
	"code":200,
	"msg" :"获取成功",
	"data":{
		"userid": 51,  //用户id
        "username": "旅人在此",  // 昵称
        "uesrsign":"让世界变得更美好！", //签名  
        "useravatar":"http://file.qsub.cn/1b7357.prifix"  // 用户头像
        "dynamic": "411",  //自己发送的所有帖子
        "fans" :"1万", //粉丝
        "concern " :"100", //关注
        "history"："522", //历史记录
        "usersex":"男",//性别
        "usermajor":"所学专业" ,//所学专业
        "userbir" :"2020-01-05",  //生日
        "ugraduate" : 0,//1 = 在校生  0 = 毕业生
        "uschool" : "河北软件职业技术学院",  // 这不可修改
	}
}


有的字段注册之后默认为空  在这里直接返回null
{
    "data": {
        "usersex": "null",
        "ugraduate": "null",
        "history": "1",
        "userid": "62",
        "fans": "1",
        "concern": "1",
        "uschool": "河北软件职业技术学院",
        "uesrsign": "null",
        "usermajor": "Java",
        "useravatar": "http://file.qsub.cn/userimg.png",
        "dynamic": "0",
        "userbir": "null",
        "username": "admin"
    },
    "code": "200",
    "msg": "获取成功"
}
```

## 修改个人信息

- 部分自动是接收空数据的

url

```
/api/info/modify
```

请求数据

|请求数据|示例|解释|
|-|-|-|
|token|asdsdas|token|
|uname|秋枫|用户名|
|usigntext|这是签名|个性签名|
|usex|外星人|性别|
|umajor|java|所选专业 用户自己填就彳亍|
|ubir|2020-12-7|生日  由日期选择器生成|
|ugraduate|0|0 = 在校生  1 = 毕业生|



返回结果

```json
{
	"code" : 200,
	"msg"  : "修改成功!"
}
```








## 修改头像---

- 格式为 multipart/form-data   (特别注意查看此表单如何解析详见 聊天demo)

url
```
/api/info/amenduseravatar
```

请求数据
|参数名|示例|解释|
|-|-|-|
|token|asdasdasasd|token|
|useravatar|data|头像的文件|


```json
{
	"code":200,
	"msg":"修改成功"
}
```






## 获取所有粉丝

api

```
/api/info/bean
```

|请求参数|示例|解释|
|-|-|-|
|token|asdfasfasasfsafas|token|



返回数据
```json
{
	"code":200,
	"msg" :"获取成功",
	"data":[{
		"userid": 12,
		"username" "阿基吃米",
		"useravatar":"http://file.qsub.cn/user.png",
		"usersign": "我其实是阿基米德"
	},{
		"userid": 1,
		"username" "jzh",
		"useravatar":"http://file.qsub.cn/user.png",
		"usersign": "我就是我谁也不是我"
	},{
		"userid": 2,
		"username" "lxq",
		"useravatar":"http://file.qsub.cn/user.png",
		"usersign": "我是我."
	}]
}
```

## 获取所有关注的人


api

```
/api/info/noticer
```

|请求参数|示例|解释|
|-|-|-|
|token|asdfasfasasfsafas|token|


返回数据
```json
{
	"code":200,
	"msg" :"获取成功",
	"data":[{
		"userid": 12,
		"username" "阿基吃米",
		"useravatar":"http://file.qsub.cn/user.png",
		"usersign": "我其实是阿基米德"
	},{
		"userid": 1,
		"username" "jzh",
		"useravatar":"http://file.qsub.cn/user.png",
		"usersign": "我就是我谁也不是我"
	},{
		"userid": 2,
		"username" "lxq",
		"useravatar":"http://file.qsub.cn/user.png",
		"usersign": "我是我."
	}]
}
```
## 获取浏览历史记录


api
```
/api/info/history
```
请求参数

|参数名称|示例|解释|
|-|-|-|
|token|asddfasfsasfasas|token|
|page|1|页数|
|size|20|每页的数量|

返回示例

```json
{
    "code":200,
    "msg": "请求成功！",
    "data":
        [{
            "userinfo":{
                "uname":"旅人在此",//发帖人姓名
               "uid":"1",  //userid
                "useravatar":"http://file.qsub.cn/1b67357.prifix"  // 用户头像
            },
            "postid":1,   //帖子ID
            "isgreat": true,  // 是否点赞
            "great" : "1562", // 帖子点赞的数量
            "comment":"151",  //评论数量
            "share":"12", //分享数量
            "type":1,  //帖子的类型  1 = 文字帖   2 = 图片帖子  3  = 视频帖子
            "placa":{//帖子模块的信息---------------------------------------------
                    "placaid":5,
                    "placaname":"表白墙"
                }, 
            "createtime":"", //时间
            "posttext":"qiufeng发送的第一条数字", // 文本数值
            "postimg" :"http://file.qsub.cn/082cfad61e9a4461a93d786c9a248c111608481610394.jpg", //图片Url
            "postvideo":"http://file.qsub.cn/%E8%BF%85%E9%9B%B7%E5%BD%B1%E9%9F%B3%202020-12-05%2012-56-57.mp4"// 视频 如果有视频的话就没有图片了
        },{
            "userinfo":{
                "uname":"旅人在此",//发帖人姓名
               "uid":"1",  //userid
                "useravatar":"http://file.qsub.cn/1b6ec965bf8357.prifix"  // 用户头像
            },
            "postid":2,   //帖子ID
            "isgreat": true,  // 是否点赞
            "collect" : true,  //是否收藏
            "type":1,  //帖子的类型  1 = 文字帖   2 = 图片帖子  3  = 视频帖子
            "placa":{//帖子模块的信息-----------------------------------------------------------
                    "placaid":5,
                    "placaname":"寻物"
                }, 
            "createtime":"", //时间
            "posttext":"qiufeng发送的第二条数字", // 文本数值
            "postimg" :"http://file.qsub.cn/082cfad61e9a4461a93d786c9a248c111608481610394.jpg", //图片Url
            "postvideo":"http://file.qsub.cn/%E8%BF%85%E9%9B%B7%E5%BD%B1%E9%9F%B3%202020-12-05%2012-56-57.mp4"// 视频 如果有视频的话就没有图片了
    }]
}
```

## 获取我的发帖

url

```
/api/info/getmepost
```

请求参数
|参数名称|示例|解释|
|-|-|-|
|token|asddfasfsasfasas|token|
|page|1|页数|
|size|20|每页的数量|

返回示例

```json
{
    "code":200,
    "msg": "请求成功！",
    "data":{
    	"userinfo":{
            "userid": 51,  //用户id
        "username": "旅人在此",  // 昵称
        "uesrsign":"让世界变得更美好！", //签名  
        "useravatar":"http://file.qsub.cn/1b6ec965bf8a4bfda4b1039d000afb691608464547357.prifix"  // 用户头像
        "great": "411",  //获赞
        "fans" :"1万", //粉丝
        "concern " :"100", //关注
        }
        "invitation":[{
            "userinfo":{
                "uname":"旅人在此",//发帖人姓名
               	"uid":"1",  //userid
                "useravatar":"http://file.qsub.cn/1b6ec965bf8a4547357.prifix"  // 用户头像
            },
            "postid":1,   //帖子ID
            "isgreat": true,  // 是否点赞
            "great" : "1562", // 帖子点赞的数量
            "comment":"151",  //评论数量
            "share":"12", //分享数量
            "type":1,  //帖子的类型  1 = 文字帖   2 = 图片帖子  3  = 视频帖子
            "placa":{//帖子模块的信息---------------------------------------------
                    "placaid":5,
                    "placaname":"表白墙"
                }, 
            "createtime":"", //时间
            "posttext":"qiufeng发送的第一条数字", // 文本数值
            "postimg" :"http://file.qsub.cn/082cfad61e9a4461a93d786c9a248c111608481610394.jpg", //图片Url
            "postvideo":"http://file.qsub.cn/%E8%BF%85%E9%9B%B7%E5%BD%B1%E9%9F%B3%202020-12-05%2012-56-57.mp4"// 视频 如果有视频的话就没有图片了
        },{
            "userinfo":{
                "uname":"旅人在此",//发帖人姓名
               "uid":"1",  //userid
                "useravatar":"http://file.qsub.cn/1b6ec965bf8a4bfda4b107.prifix"  // 用户头像
            },
            "postid":2,   //帖子ID
            "isgreat": true,  // 是否点赞
            "collect" : true,  //是否收藏
            "type":1,  //帖子的类型  1 = 文字帖   2 = 图片帖子  3  = 视频帖子
            "placa":{//帖子模块的信息-----------------------------------------------------------
                    "placaid":5,
                    "placaname":"寻物"
                }, 
            "createtime":"", //时间
            "posttext":"qiufeng发送的第二条数字", // 文本数值
            "postimg" :"http://file.qsub.cn/082cfad61e9a4461a93d786c9a248c111608481610394.jpg", //图片Url
            "postvideo":"http://file.qsub.cn/%E8%BF%85%E9%9B%B7%E5%BD%B1%E9%9F%B3%202020-12-05%2012-56-57.mp4"// 视频 如果有视频的话就没有图片了
    }]
   }
}

```
## 删除我的帖子

- 只能删除自己的帖子
- 删除就修改一个数据库字段  不是真正的 delete

api

```
/api/info/deletemepost
```

请求参数

|请求参数|示例|解释|
|-|-|-|
|token|asdsada|token|
|postid|1|帖子id|

返回数据
```json
{
	"code":200,
	"msg":"删除成功"
}

{
	"code":-2,
	"msg":"删除失败"
}
```

