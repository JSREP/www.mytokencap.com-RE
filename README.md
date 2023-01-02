# MyToken

目标网址：

```
https://www.mytokencap.com/
```

请求的参数上都带着一个`code`：

![image-20221229221314765](README.assets/image-20221229221314765.png)

观察请求的Initiator：

![image-20221229221404297](README.assets/image-20221229221404297.png)

像这种请求的Initiator中有个.request的一看就是axios发送的请求，它在request中会调用设置的请求拦截器响应拦截器，直接跟进去request然后打断点触发：

![image-20221229222945752](README.assets/image-20221229222945752.png)

可以看到设置了一个请求拦截器，跟进去它的代码：

![image-20221229223523759](README.assets/image-20221229223523759.png)

主要是下面几行：

```js
, n = Date.now().toString()
    , r = o()(n + "9527" + n.substr(0, 6));
if (e.data.timestamp = n,
    e.data.code = r,
```

`n`就是获取当前时间，然后`o()`的整个输入都是从n得到的，没啥好看的就，当然这个时间戳通过`e.data.timestamp`传给了服务器，因为服务器要做校验的需要输入相同，然后再来看`o()`是啥，跟进去目测是MD5，验证一下：

![image-20221229225505239](README.assets/image-20221229225505239.png)

![image-20221229225555682](README.assets/image-20221229225555682.png)

分析结束。

















