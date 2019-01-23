# :zap:lightning
 一个基于vue2.0的:clapper:电影web app项目
 项目实现用户登录注册、电影资讯、文章评论、电影搜索、电影榜单、观影记录等功能。  
 (｡･∀･)ﾉﾞ:star:chrome浏览器下运行，Galaxy S5/iphone6/7/8效果最佳  
 如果喜欢或者对您有所帮助，欢迎star！:laughing:感谢！  
 ![logo](https://github.com/Cookie923/lightning/blob/master/dev-www/src/assets/img/lightning.png) 
### :wrench:开发环境
后端：Node.js 10.15.0  
服务器：express 4.16.4  
数据库：MongoDB 4.0.3   mongoose
前端：vue 2.9.6   
第三方接口：时光网资讯API，豆瓣电影API  
 
#### :electric_plug:使用的插件
+ axios
+ element-ui
+ vue-awesome-swiper
+ vue-calendar-component
+ vue-lazyload
+ vue-moment

### 项目安装&运行:open_file_folder:
下载代码
```
git clone https://github.com/Cookie923/lightning.git
```
安装全部依赖
```
npm install
```
运行前需要开启mongodb服务，在mongodb的bin目录下
```
mongod --dbpath"你数据库的所在地址"
```
整个项目运行在3000端口，前端部分在dev-www目录下（8080端口）
```
npm run start
```
请在开发者工具的移动端模式下查看效果哟！

### 效果展示 
热门部分：时光网影讯、院线热映和热门影评  
![热门](https://github.com/Cookie923/lightning/blob/master/screenshots/hot.gif)  
发现部分：电影榜单（豆瓣一周口碑、北美票房榜单）和电影搜索  
![发现-榜单](https://github.com/Cookie923/lightning/blob/master/screenshots/billboard.gif) 
![发现-电影搜索](https://github.com/Cookie923/lightning/blob/master/screenshots/search.gif)  
动态部分：（需要登录）所有用户的收藏和观影记录动态，用户可以对观影记录动态进行评论  
![动态-评论](https://github.com/Cookie923/lightning/blob/master/screenshots/dynamic&comment.gif)  
我的部分：可以查看观影记录（想看的和看过的），收藏列表（收藏的影讯和豆瓣影评），修改密码功能  
![我的](https://github.com/Cookie923/lightning/blob/master/screenshots/account.gif)  
电影详情页  
![电影详情页](https://github.com/Cookie923/lightning/blob/master/screenshots/film.gif)  
观影记录（想看、看过、删除记录）&豆瓣影评  
![观影记录&豆瓣影评](https://github.com/Cookie923/lightning/blob/master/screenshots/record&comment.gif)  
影讯详情页&评论功能  
![影讯详情页&评论功能](https://github.com/Cookie923/lightning/blob/master/screenshots/news&comment.gif)  
用户登录注册功能  
![动态-登录](https://github.com/Cookie923/lightning/blob/master/screenshots/login&dynamic.gif)  
修改密码  
![修改密码](https://github.com/Cookie923/lightning/blob/master/screenshots/login&changepsw.gif)  
打卡功能（需登录） 
![打卡](https://github.com/Cookie923/lightning/blob/master/screenshots/checkin.gif) 

### 项目结构
```
├─bin                         // 存放启动项目的脚本文件，默认www。
├─config                      // 数据库MongoDB配置文件&MD5加密
├─dev-www                     // 前端项目
│  ├─src                      // 项目基础组件
│  │  ├─api                   // axios请求，获取项目数据
│  │  ├─assets                // 静态文件：图片、css、iconfont
│  │  ├─pages                 // 所有页面和组件
│  │  │ ├─account             // “我的”
│  │  │ ├─activity            // “动态”
│  │  │ ├─components          // 公共组件
│  │  │ ├─film                // 电影相关页面
│  │  │ ├─hot                 // “热门”
│  │  │ └─search              // “发现”
│  │  ├─router                // vue-router路由管理
│  │  └─store                 // vuex状态管理
├─models                      // MongoDB数据模型
├─routes                      // 后端接口接口
│  ├─account-collection.js    // “我的”中收藏列表的接口
│  ├─account-record.js        // “我的”中观影记录的接口
│  ├─checkin.js               // 打卡功能的相关接口
│  ├─collection.js            // 收藏功能的相关接口
│  ├─dynamic.js               // “动态”中相关接口
│  ├─login.js                 // 登录注册功能相关接口
│  └─viewrecord.js            // 观影记录相关接口
├─schemas                     // MongoDB数据的结构
│  ├─CommentsSchemas.js       // 评论集合的结构
│  ├─UserSchemas.js           // 用户集合的结构
│  └─ViewrecordSchemas.js     // 用户收藏&观影记录集合结构
├─public                      // 项目打包目录
├─screenshots                 // 项目截图
├─views                       // 默认error.jade、index.jade、layout.jade
└─app.js                      // express入口文件
```

### 已完成功能
:heavy_check_mark: 用户登录&注册  
:heavy_check_mark: 修改密码  
:heavy_check_mark: 电影资讯首页轮播  
:heavy_check_mark: 电影资讯详情页  
:heavy_check_mark: 院线热映  
:heavy_check_mark: 电影榜单  
:heavy_check_mark: 搜索功能  
:heavy_check_mark: 首页显示三条长影评  
:heavy_check_mark: 电影详情页影评  
:heavy_check_mark: 观影记录功能  
:heavy_check_mark: 用户动态  
:heavy_check_mark: 影讯评论功能  
:heavy_check_mark: 用户动态区--观影记录评论功能  
:heavy_check_mark: 用户打卡功能 