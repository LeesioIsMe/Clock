//分针
function Minute(color){
	Second.call(this, color || 'black')
}

Minute.prototype = Object.create(Second.prototype)
Minute.prototype.constructor = Minute

Minute.prototype.calcArgs = function(){
	var args = {}
	
	args.duration = 3600
	args.zIndex = 8
	
	var time = new Date();
    var s = time.getSeconds() * -1;
    var m = time.getMinutes() * -1;
    args.delay = (m * 60) - (15 * 60) + s;
	
	return args
}
Minute.prototype.calcLayoutArgs = function(){
	var args = {}
	
	args.radius = Control.radius * 0.8
	args.width = args.radius * 1.12
	args.height = args.radius * 0.03
	
	return args
}

