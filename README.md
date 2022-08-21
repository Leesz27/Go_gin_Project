## 项目启动方式

1. 当前目录下运行go build

2. 然后运行给ginessential.exe即可

3. 需要创建一个数据库用于存放数据

   1. 在common/database.go文件下，对InitDB文件中的端口号账号密码进行修改即可

4. 还没写好前端页面，只有后端，请求通过postman进行请求

5. 相关接口地址在routes.go文件中

### 各个文件作用
1. `common`文件夹
   1. database.go  连接数据库操作，具体的数值映射到`config`下的application.yml中
   2. jwt.go  


### 前端vue版本
1. npm install -g add @vue/cli@4.5.13