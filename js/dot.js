// 时钟中央的圆点
// 构造函数继承
function Dot(){
	// 子类Dot继承父类Control
	Control.call(this)

	// apply和call功能一样。只是传参的方式不一样。
}

// 原型链继承
// 使用父类的原型链，创建一个临时的对象，赋值给子类的原型链
// 但会产生一个问题：子类的构造函数也指向了父类的构造函数
// 在语言中每一个类和对象的构造函数是唯一的，不能两个不同类或对象拥有同一个构造函数，这是说不通的。矛盾出现了，所以要纠正构造函数指向。
Dot.prototype = Object.create(Control.prototype)
// 纠正构造函数的指向，让子类的构造函数指向自己，不再指向父类
Dot.prototype.constructor = Dot

// 重写（override)父类的同名方法
// 在JS中重写只需要在子类中起一个和父类继承过来的方法一样的名称，就可以把父类继承的方法覆盖掉。
Dot.prototype.render = function(){
	// 调用父类的render()
	// 用this去冒充Control去调用Control对象中的render
	Control.prototype.render.call(this)

	this.ele.style.borderRadius = '50%'
	this.ele.style.zIndex = 10
}
Dot.prototype.layout = function(){
	var radius = Control.radius * 0.04
	this.ele.style.width = radius * 2 + 'px'
	this.ele.style.height = radius * 2 + 'px'
	this.ele.style.top = Control.clientHeight / 2 - radius + 'px'
	this.ele.style.left = Control.clientWidth / 2 - radius + 'px'
}
