# :zap:lightning
 一个基于vue2.0的:clapper:电影web app项目
 项目实现用户登录注册、电影资讯、文章评论、电影搜索、电影榜单、观影记录等功能。
 (｡･∀･)ﾉﾞ:star:chrome浏览器下运行，Galaxy S5/iphone6/7/8效果最佳
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