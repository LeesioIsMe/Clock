//时针
function Hour(color){
	Second.call(this, color || 'black')
}

Hour.prototype = Object.create(Second.prototype)
Hour.prototype.constructor = Hour

Hour.prototype.calcArgs = function(){
	var args = {}
	
	args.duration = 43200
	args.zIndex = 8
	
	var time = new Date(); 
    var s = time.getSeconds() * -1;
    var m = time.getMinutes() * -1;
    var h = time.getHours();
    h = h > 12 ? h - 12 : h;
    h = h * -1;
    args.delay = (h * 60 * 60) - (3 * 60 * 60) + (m * 60) + s
	
	return args
}
Hour.prototype.calcLayoutArgs = function(){
	var args = {}
	
	args.radius = Control.radius * 0.6
	args.width = args.radius * 1.13
	args.height = args.radius * 0.05
	
	return args
}