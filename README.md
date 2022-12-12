# hitokoto-to-dom
（水项目警告）只需要给 DOM 元素加上一个 id 属性，就能显示 Hitokoto 一言的内容！

# 项目还没做完！咱先别用！

### 项目初衷
~~水一个项目，没事儿做~~  
很多曾经和云萧一样的萌新们，想要在自己的网页中使用 Hitokoto 的一言功能，但不是很会使用对应的 Json 处理和 Ajax 工具，导致他们无法完成这种操作。  
因此，云萧希望帮助更多像曾经的我一样的小伙伴一起体验 Hitokoto 的快乐 (◦˙▽˙◦)  

### 食用方法
1. 在 HTML 中引入本项目  
由于考虑到会用 module 的人也一定会用上述技术了，故本项目不提供 module 的引入。
```html
<script src="https://res.crrashh.cn/htd-dist/1.0.0/htd.min.js">
```
2. 确定你要引入的元素，以及各种接口的参数  
```javascript
htd.elementId = "hitokoto";
htd.parameter = {
   // ...
}
```
同时在页面中插入：  
```html
<div id="hitokoto"></div>
```
3. 在上述步骤配置完成之后，执行函数  
```javascript
htd.use();
```

### Q&A
~~懒得写~~
