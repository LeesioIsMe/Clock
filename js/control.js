//控件类，页面所有可见元素都从这里继承 （父类，基类）
//提供了创建元素功能（render方法）和布局功能（layout方法）
function Control(){
	this.render()
	this.layout()
}
//填充颜色
Control.prototype.fillColor = 'black'
//添加到页面上（实例方法：通过类或对象的个体来访问）
Control.prototype.render = function(){
	this.ele = document.createElement('div')
	this.ele.style.backgroundColor = this.fillColor
	this.ele.style.position = 'absolute'
	document.body.appendChild(this.ele)
}
//调整大小及在页面上的位置(目的：是子类重写此方法，实现不同的布局方式)
// 原型链上添加的方法，称为原型方法
Control.prototype.layout = function(){
	
}
//添加窗口工作区宽高数据到Control，以便子对象使用（静态方法：通过类或对象本身来访问）
Control.windowResized = function(){
	Control.clientWidth = document.documentElement.clientWidth
	Control.clientHeight = document.documentElement.clientHeight
	// 半径
	Control.radius = Math.min(Control.clientWidth, Control.clientHeight) / 2
	console.log('窗口工作区宽高：%d, %d', Control.clientWidth, Control.clientHeight)
}
Control.windowResized()

