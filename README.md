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
为了方便查看数据库里的数据，使用了mongodb的可视化工具Robo3T

#### :electric_plug:使用的库and插件
+ axios
+ stylus
+ element-ui
+ vue-awesome-swiper 轮播图
+ vue-calendar-component 日历
+ vue-lazyload  图片懒加载
+ vue-moment  时间过滤

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
#### 热门部分
时光网影讯、院线热映和热门影评  
![热门](https://github.com/Cookie923/lightning/blob/master/screenshots/hot.gif)  
#### 发现部分
电影榜单（豆瓣一周口碑、北美票房榜单）和电影搜索  
![发现-榜单](https://github.com/Cookie923/lightning/blob/master/screenshots/billboard.gif) 
![发现-电影搜索](https://github.com/Cookie923/lightning/blob/master/screenshots/search.gif)  
#### 动态部分
（需要登录）所有用户的收藏和观影记录动态，用户可以对观影记录动态进行评论  
![动态-评论](https://github.com/Cookie923/lightning/blob/master/screenshots/dynamic&comment.gif)  
#### 我的部分
可以查看观影记录（想看的和看过的），收藏列表（收藏的影讯和豆瓣影评），修改密码功能  
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

### 遇到的一些坑
#### 老生常谈的跨域问题！
前端需要在config目录下的index.js中进行配置proxyTable，*changeOrigin: true*这句很重要……之前忘了写这句，导致跨域问题根本没解决……
```
'/news': { // 时光网咨资讯的接口
            target: 'http://m.mtime.cn/Service/callback.mi/News/',
            changeOrigin: true,
            pathRewrite: {
                '^/news': '/'
            }
        }
```
后端需要用到http-proxy-middleware，进行代理转发  
```
var proxy = require('http-proxy-middleware');
var timesOptions = {
    target: 'http://m.mtime.cn/Service/callback.mi/News/',
    changeOrigin: true,
    ws: true,
    pathRewrite: {
        '^/news': '/'
    }
};

var timesProxy = proxy(timesOptions);
```

#### 跨域了咋还图片403？！
豆瓣有对一些图片进行防盗链处理，所以我们对图片的请求都被禁止访问了。  
一般防盗链是根据HTTP请求Header中的Referrer字段的值来判断是否正常应答。而我采取的解决办法是通过第三方网站来处理图片地址.
```
https://images.weserv.nl/?url=imgurl
```
时光网是在视频上做了防盗链……目前还没有解决。

#### 关于时间过滤
moment在vue入口文件进行配置的时候locale('zh-cn')并没有起作用…但vue-moment配置全局的时候就可以……所有两者本来就是差不多的东西，选一个就好了。（moment我是为了数据存入库的时候时间方便查看，所以用它来过滤了一下）

#### build
每次修改完前端部分都要重新build一下，这样整个项目运行的时候才是修改过代码

#### 接口
写完后端的接口一定要在postman是测试一下，确保接口无误之后，前端再接接口处理数据，进行联调。

#### 返回的json里有标签怎么办
在vue里直接用v-html就好了

### 后记
这个项目其实是我的毕设啦，参考了很多别人做过demo（e.g.登录注册demo、使用express和mongodb实现增删改查、基于vue的豆瓣电影等等）  
满打满算从设计思路、做原型、搭建环境、写前端页面、后端接口再到前后端联调，用了31天……中间电脑还坏了两次（p.s.使用电脑良好的习惯真重要呀…之前好多太不注意了…）还有各种拖延症……导致周期有点长。不过整体做下来还是收获颇丰的。  
自学前端大概是在去年的三月份，六月到八月在一家公司进行前端实习，九月十月奋战秋招（不过大多都是停留在了二面……果然我还是很菜呀），十一月底开始着手做毕设，同时继续准备接下来的春招。加油吧！