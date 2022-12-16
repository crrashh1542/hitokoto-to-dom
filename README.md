# hitokoto-to-dom
（水项目警告）配置好指定的 DOM 元素，就能显示 Hitokoto 一言的内容！


### 项目初衷
~~水一个项目，没事儿做~~  
Hitokoto 官方虽然提供了 `Javascript` 版本的调用，但是仅能单一的显示句子，而无法显示作者等等其他数据。同时因为有很多像我一样的萌新，这也算是一点小小的帮助吧~

### 食用方法
1. 在 HTML 中引入本项目  
  
由于考虑到会用 module 的人也大概会使用上述技术了，故本项目不提供 module 的引入。
```html
<script src="js/htd.min.js">
```
2. 确定各种接口的参数  
```javascript
htd.c = "";
htd.charset = "utf-8";
htd.maxLength = ""
htd.minLength = ""
```
同时在页面中插入：  
```html
<div id="hitokoto"></div>
```
3. 在上述步骤配置完成之后，启动！  
```javascript
htd.use();
```

### Q&A
~~懒得写~~
