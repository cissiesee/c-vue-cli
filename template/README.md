## 技术说明
1. ui框架: mint-ui + vue2 + vue-router + vuex
2. 打包工具: webpack3
3. 语言: js
4. node版本: 8+
5. 兼容到ie9及以上的主流浏览器

## 使用
### 安装依赖
    npm install
### 开发
    npm start

### 假数据mock
#### 可使用src目录中带有的js mock方式拦截ajax
#### 可使用mocker（express包）产生真实相应数据
1. 启动mock server: npm run mock
1. 具体使用查看 http://192.168.9.26:4873/#/detail/lk-mocker
### 打包
  npm run build