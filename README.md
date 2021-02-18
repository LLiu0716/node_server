# `node.js` 本地服务器

## 介绍

- 简单高效 , 扩展性强 , 可根据自己的需求来定制相应的功能
- 使用`ts`来编写
- `ts`由于编译原因 , 会自动生成一个`/dist`文件夹 , 且生成的`node服务器`根地址会变成`/dist` , 将无法读取到`/data`中的文件

  > => 当前解决办法 : 复制`data`文件夹到`/dist`中
  > 或者不使用绝对路径

- 由于`mock`提供的`img`链接太慢 , 本项目使用别的图片来代替

  > `https://img.yzcdn.cn/vant/apple-${'@integer(1,8)'}.jpg`

## 准备工作

1. 如果选择使用`ts`来编写 , 需要全局安装`typescript`才可以使用`tsc`命令来编译
   > ```js
   > npm i -D typescript
   > ```
2. `npm run dev`命令可自动执行`ts`编译和`node`服务器启动

   > ```js
   > npm run dev
   > ```

3. 主要使用`mock.js`和`express` , 如果需要拓展功能可以查看相应的文档

## `mock.js`模板

```js
Mock.mock({
	// 生成一个数组 , 长度 5-10
	'list|5-10': [
		{
			// 自增
			'id|+1': 1,
			// 字符串 id
			is_id: '@id',
			// name: '@FIRST', // 英文
			name: '@cname', // 中文
			// email
			email: '@email',
			// 地址
			// site: '@county()' // 市区
			site: '@county(true)', // 省 市 详细
			// 随机 boolen
			dome: '@boolean(1, true)',
			// 随机 数字
			age: '@integer(18, 45)',
			look: '@integer(60, 1000)',
			// 日期 YYYY-MM-DD
			time: '@date',
			// 日期 YYYY-MM-DD hh:mm:ss
			// time: '@datetime',
			// 当前时间 YYYY-MM-DD hh:mm:ss
			// time: '@now',
			// Random.image( size, background, foreground, format, text )
			img: "@image('200x100', '#894FC4', '#FFF', 'png', 'Hello')",
			// 长文章
			text: '@csentence', // 中文
			cn_text: '@cparagraph(5,10)', // 中文
			en_text: '@paragraph(5,12)' // 英文
			// 单词
			// text: '@sentence(3,7)', // 英文
			// text: '@csentence(3,7)', // 中文
		}
	]
})
```
