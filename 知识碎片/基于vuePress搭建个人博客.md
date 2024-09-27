# 基于vuePress搭建个人博客详细教程

如果图片加载不出来，可以点击这里查看[基于vuePress搭建个人博客详细教程](https://blog.csdn.net/weixin_41201231/article/details/142588770)

## 前言：
        如果你想搭建个人博客却毫无想法，那么告诉你来对地方啦。在这个卷出花样的大环境中（说出卷出花样让我想起了达美乐的各种卷边😍😍😍每周二、三七折哟，所谓接二连三，达美乐打钱。抱歉扯远了哈😁）如果你还没有一个个人的技术博客那可是会大大减分的哦。今天大波就手把手带你搭建一个漂亮的个人博客。
## 背景：
        这几天表弟找我要我帮他弄一个个人博客，于是乎帮他找了一套模板，顺便改版了一下自己的个人博客[前端大波](https://zhaoxiaozhao1.github.io/)，目前正在持续上传文档，欢迎大家来探讨学习。
## 正题：
 ### 前期准备

 		开发工具：Vscode、WebStorm等等，开心就好。
 		开发环境：git、node、npm；注意：node和npm的版本好尽量和下图大差不差
 		![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/8dc56f8794484214862005a58525527b.png)
 		拥有自己的github账户，没有的话请前往[github官网](https://github.com/)自行注册。

### 正式开始
		这里已经为大家筛选出了一套很优秀的项目模版，大家完全不用操心前期的项目搭建，只需要全身心的投入到文章创作中即可
#### clone项目模版（下载zip包）
 		大家可以打开这个[开源地址](https://github.com/liyupi/codefather/tree/template)。这款模版是大佬鱼皮总结开发，一直有在维护大家放心使用。
 		操作步骤如下：
 		
 - 页面打开后，点击Download ZIP，下载模版。
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/bb94b166ce0f48dc85cbe1e6325edd34.png)
		
 - 解压codefather-template压缩包，这里使用vscode工具打开解压后的codefather-template项目。
 - 使用vscode终端进入到项目根目录，确认node版本号后，执行npm i 下载依赖。
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/ba88934ffa484bc88120280a1ef99b7a.png =500x)
 - 接着打开package.json，找到scripts，就能看到运行命令**docs:dev**和打包命令**docs:build**
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/2fefed2ab96944f5aefb24efa53877b6.png =500x)
 - 终端中执行 **npm run docs:dev** , 稍后我们可以看到命令行中出现如下内容
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/1a454dfb82974bacaf340c09fbc00e33.png)
 
 - 按住cmd点击终端中的地址，便可在浏览器中打开博客首页啦。如果你已经达到这一步，此刻恭喜你已经成功了80%。
 
 
#### 项目目录分析
如果你了解vuepress的话，那应该清楚**README.md**或者**index.md**在更目录下是相当于入口文件的存在，默认会打开此文件作为网站首页，但是**两者不要同时存在于根目录**哦。
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/0ddf9fedb0be4076a7ce67a98f3b1bf1.png#pic_center =200x)
 - 根目录下有**学习路线**、**.vuepress**、**作者.md**、**README.md**以及一些配置文件。其中在根目录中的md文件，我们可以直接通过**http://localhost:8080/作者**访问，以及README.md是默认路径你会发现我们打开**http://localhost:8080/**的时候就是readme.md的内容。所以，一些公共的文章我们可以直接放到根目录中，作为一级目录，便于访问。
 
 - **学习路线**文件夹其实就是我们的文章归类，我们还可以创建一些其他的类型文件夹，比如散文、学习碎片、常见问题等等，把对应的文章放入即可。
  
 
 - **.vuepress**文件夹
 	1、**public**文件夹内存放的是我们的项目中用到的图片、icon等
 	2、**sidebars**文件夹存放的是刚才提到的**学习路线**这种归类文件夹的配置文件，每当我们新创建一个类型文件夹比如**常见问题**就需要在sidebars中对应创建一个example.ts,文件内容如下图：
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/d81d6b73ca9c4fe6997542a07d8656be.png =x400)

	⚠️注意：第一：需要我们创建一个**入口文件README.md**用来做页面显示如图
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/aed3426aba8b4330b2ac4cbc2808af20.png =600x)
		⚠️第二：我们创建的**常见问题.md**中文章开头一定要使用**#大标题作为首行**，因为在编译的过程中，脚本会获取md文件中的title内容。
	3、**theme**文件夹中存放的是博客主题以及一些页面组建，比如：导航栏、底部、侧边栏、右侧固定栏目等等。styles中方的是样式。
	4、**etraSideBar.ts**存放的是固定在右侧边栏的配置文件，如图：![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/f432b0cfe4ad47cebcf5ac8e638a0152.png)

	5、**footer.ts**是底部版权信息配置文件。
	6、**navbar.ts**是导航配置文件，如图![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/5c2d6a726898473f93b9a7066b6e4e18.png)
	7、**sidebar.ts**是侧边栏配置文件，上边我们在根目录创建的类型文件**常见问题**就需要在这里配置如图：
	![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/9d3c4c8e107249b9ab9c6112aa4265b4.png =500x)
	接着我们需要在根目录的README.md文件中添加如下内容，我们就可以再网站首页看到新增的内容块儿了
	![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/2101728d1e6d40849ce29ae00ca83a67.png =500x)
	这样我们得常见问题就出来啦。
	![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/7574295d7d0f47e0ad6c359abd0f6d03.png)
	点击常见问题会跳转到这里
	![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/1c8a0cea47144e8bb3a44ed8f2e65318.png)

这样我们得本地建设就ok啦，大家学废了吗？接着就是大家可以在上边无限创作了

**下一期教大家如何把本地项目放到github静态站点上。**

