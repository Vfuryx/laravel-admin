##  admin spa 

### 简介

在Vfuryx/laravel-api的项目基础上，添加后台spa。
spa 基于lin-xin/vue-manage-system（Vue.js 2.x系列 + Element UI 的后台管理系统）修改。

### 使用的扩展

- dingo/api - 构建 RESTful API 服务的完整解决方
- liyu/dingo-serializer-switch - 序列化
- tymon/jwt-auth - json web token
- gregwar/captcha - 验证码
- itsgoingd/clockwork - Clockwork 调试工具
- barryvdh/laravel-ide-helper - 代码提示工具
- barryvdh/laravel-cors - 跨域中间件

### 安装
1、下载扩展

`
composer update
`

2、复制 .env.example 重命名为 .env

3、生成密钥

`
php artisan key:generate
`

4、生成jwt签名

`
php artisan jwt:secret
`

5、加载包

`
npm install (或者 cnpm install)
`


