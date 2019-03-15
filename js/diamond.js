//时钟周围的小圆点
function Diamond(minute, sizeRadio){
	this.minute = minute
	this.sizeRadio = sizeRadio || 0.01
	// 根据相应的公式得到圆上某个点的角度。
	this.arc = 6 * (this.minute - 15) * 2 * Math.PI / 360
	Control.call(this)
}

Diamond.prototype = Object.create(Control.prototype)
Diamond.prototype.constructor = Diamond

Diamond.prototype.render = function(){
	Control.prototype.render.call(this)
	this.ele.style.borderRadius = '50%'
	this.ele.style.zIndex = 5
}
Diamond.prototype.layout = function(){
	var size = Control.radius * this.sizeRadio
	this.ele.style.width = size * 2 + 'px'
	this.ele.style.height = size * 2 + 'px'
	
	var radius = Control.radius * 0.9
	// 根据相应的公式取圆周围的点坐标
	var left = radius * Math.cos(this.arc)
	var top = radius * Math.sin(this.arc)
	
	this.ele.style.top = Control.clientHeight / 2 + top - size + 'px'
	this.ele.style.left = Control.clientWidth / 2 + left - size + 'px'
}
