//秒针
function Second(color){
	this.fillColor = color || 'red'
	Control.call(this)
}

Second.prototype = Object.create(Control.prototype)
Second.prototype.constructor = Second

// 每走一秒的角度
Second.prototype.calcArgs = function(){
	var args = {}

	args.duration = 60
	args.zIndex = 9
	
	var time = new Date();
    var s = time.getSeconds() * -1;
    args.delay = s - 15;
	
	return args
}
// 窗口改变时重新计算每走一秒的角度
Second.prototype.calcLayoutArgs = function(){
	var args = {}
	
	args.radius = Control.radius * 0.9
	args.width = args.radius * 1.15
	args.height = args.radius * 0.01
	
	return args
}
Second.prototype.render = function(){
	var args = this.calcArgs()
	
	Control.prototype.render.call(this)
	this.ele.style.backgroundColor = 'initial'
	this.ele.style.animationName = 'rotate'
	this.ele.style.animationTimingFunction = 'linear'
	this.ele.style.animationIterationCount = 'infinite'
	this.ele.style.animationDuration = args.duration + 's'
	this.ele.style.animationDelay = args.delay + 's'
	this.ele.style.zIndex = args.zIndex
	
	this.el = document.createElement('span')
	this.el.style.display = 'block'
	this.el.style.backgroundColor = this.fillColor
	this.ele.appendChild(this.el)

	// div>span
}
Second.prototype.layout = function(){
	var args = this.calcLayoutArgs()
	
	this.ele.style.width = args.radius * 2 + 'px'
	this.ele.style.height = 10 + 'px'
	this.ele.style.top = Control.clientHeight / 2 - 5 + 'px'
	this.ele.style.left = Control.clientWidth / 2 - args.radius + 'px'
	
	this.el.style.width = args.width + 'px'
	this.el.style.height = args.height + 'px'
	this.el.style.marginTop = 5 - args.height / 2 + 'px'
	this.el.style.borderRadius = args.height / 2 + 'px'
}
