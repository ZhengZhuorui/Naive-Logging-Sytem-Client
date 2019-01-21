## Program Description 

Written by Zhuorui Zheng.

### introduction and pre-knowledge

  Before reading and modifying the code, please make sure that you know the base knowledege about html, css, js, especially the js. you have better learn the [vue.js](https://cn.vuejs.org/) framework, and know the MVC(model-view-controller) framework. It's good for you understand how to write not only the wechat applet but a webpage.

### program index:

first page, select city: new_index

​	index

​		record

​			residence

​			worker

​		comment

​			mutualcomment

​				mutualcomment_begin

​				mutualcomment_middle

​				mutualcomment_end

​			self_evaluation

​			expert

​				expert_begin

​				expert_middle

​				expert_end

​			serviceobject



### Components:

  A page contain a lot of components, components purpose is code reuse that reduce the number of bugs and reduce the code.Now the components are these:

###### organzation:

​	to show a organzation selecting view, the code have some defect in somewhere because the author write the component firstly and know less about component. 

​	properties: labelName(show the label),contentName (show the placeholder)

​	event handler: organizationChangeEvent (the name is bad,so if you have time you can change it)	

###### picker-city:

​	you don't mind it, it's not written by me and you don't use it.

###### score-page:

​	because the program have lots of page which should user to give the score about something, so I make it as a components.

​	properties: questions(a list, show questions)

​	event handler: change(return a list named score,  e.detail.score)

### Wxss

​	Wxss is like css. I am not good at UI design and I seldom write wxss myself. I use [WeUI](https://github.com/Tencent/weui) and [Wux](https://github.com/wux-weapp/wux-weapp/), so read these document directlly. To be honest, I don't know these, and the program UI, emm...the most wxml and wxss isn't written by me, please ask the other people writed it before.



The document left are not written by me.

# 文档

​		

## 注意：

1.小程序上传视频不可过大，最好在几十秒中

2.小程序图片的上传暂时不能在相册里面多次以前点选，只能一张一张选，然后上传

3.支持同一活动多点多次上传，但请保证一些选项相同（工作流中有详细解释）





## 建议工作流： 



小程序二维码：

## ![Screen Shot 2017-09-05 at 10.04.10 PM](截图/Screen Shot 2017-09-05 at 10.04.10 PM.png)

### 阿姨：

1.扫描上述二维码, 进入小程序（发布之后可以搜索，不用搜索，目前是测试阶段）

 ![居民](截图/居民.png)





2.在小程序首页点击***绿色居民图标***进入对应页面填写

3.选择组织名称和日期，要求必填自己姓名和活动感受，其他可以自行填写

（**注意组织名称和日期决定同一个活动，所以在补充同一个活动的时候，记得保持组织名称和日期一致！！！！！！**）

（注意只要选择相同的组织名称和日期，则评论人可以归结到同一个活动中）



### 工作人员：

1.扫描上述二维码, 进入小程序（发布之后可以搜索，不用搜索，目前是测试阶段）

2.在小程序首页点击***蓝色工作人员图标***进入对应页面填写

 ![居民](截图/居民.png)





3.选择活动名称（hdmc）日期（date）开始时间（beginTime）结束时间（endTime）跟访人姓名（gfrxm），

（**注意上述五个变量决定同一个活动，所以要补充同一个活动的时候，记得保持上述五个变量一致！！！！！！**）

要求至少上传一张图片，其他可以自行填写





4.（可选）如果需要补充很长的日志，

1.可以登录网站 http://www.hazelnutsgz.com:5000/log/worker,

 ![Screen Shot 2017-09-05 at 10.32.00 PM](截图/Screen Shot 2017-09-05 at 10.32.00 PM.png)

2.在下图的查找框内搜索自己名字， ![Screen Shot 2017-09-05 at 10.34.54 PM](截图/Screen Shot 2017-09-05 at 10.34.54 PM.png)

3.点击补充完成日志的补充，再在页面左下角点击提交按钮，完成提交

 ![Screen Shot 2017-09-05 at 10.37.12 PM](截图/Screen Shot 2017-09-05 at 10.37.12 PM.png)





### 系统管理员



#### 查看文本数据

利用软件**studio 3T**查看数据库数据



#### 查看多媒体数据

1.登录网站：http://www.hazelnutsgz.com:1001/

![Screen Shot 2017-09-05 at 10.57.41 PM](截图/Screen Shot 2017-09-05 at 10.57.41 PM.png)

根据**文本数据库**中的路径在这个可视化目录下查看相应的资料



