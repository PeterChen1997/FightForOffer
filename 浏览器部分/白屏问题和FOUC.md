### 白屏问题

1. 白屏的根本原因是浏览器在渲染的时候没有请求到或请求时间过长造成的。
2. 浏览器对于图片和CSS，在加载时会并发加载（比如一个域名下同时加载多个文件），浏览器对于JavaScript，在加载时会禁用并发，并且阻止其后的文件及组件的下载。所以将js放在页面的顶部也可能会导致白屏。
3. 不同浏览器的处理CSS和HTML的方式是不同的：
比如，IE、chrome浏览器的渲染机制，采用的是等CSS全部加载解析完后再渲染展示页面。
Firefox则是在CSS未加载前先展示html的内容，等CSS加载后重新对样式进行修改。

所以：白屏的出现情况往往因为CSS样式被置于底部（最后加载）,当新窗口打开,刷新等的时候，页面会出现白屏。
如果使用 @import标签,它引用的文件则会等页面全部下载完毕再被加载，也可能出现白屏。

> 因此，
> css使用 link 标签将样式表放在顶部，防止白屏问题出现。
> JS 的放置位置一般是在body的闭合标签之前。

#### 白屏不是bug，而是由于浏览器的渲染机制。
### FOUC

FOUC (Flash of Unstyled Content) 无样式内容闪烁：
如果把样式放在底部，对于IE浏览器,在某些场景下(点击链接,输入URL,使用书签进入等),会出现 FOUC 现象(逐步加载无样式的内容,等CSS加载后页面才突然展现出样式)。对于 Firefox 会一直表现出 FOUC 。

- 脚本会阻塞后面内容的呈现
- 脚本会阻塞其后组件的下载
- 对于图片和CSS, 在加载时会并发加载(如一个域名下同时加载两个文件)。但在加载 JavaScript 时,会禁用并发,并且阻止其他内容的下载。

> 所以尽量把 JavaScript 放入页面body底部。

