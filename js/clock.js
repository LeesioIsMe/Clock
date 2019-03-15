function Clock(){
	//添加样式表
	var i = 0
	var style = document.createElement('style')
	document.head.appendChild(style)
	
	// 向创建的style元素中添加样式规则
	
	style.sheet.insertRule('html{height:100%}', i++)
	style.sheet.insertRule('body{margin:0;height:100%}', i++)
	style.sheet.insertRule('*{box-sizing:border-box}', i++)
	style.sheet.insertRule('@keyframes rotate{from{ transform: rotate(0); } to{ transform: rotate(360deg); }}', i++)

	
	//创建时钟
	var dot = new Dot()
	var second = new Second()
	var minute = new Minute('blue')
	var hour = new Hour('green')
	
	var diamonds = []
	for(var i = 0; i < 60; i++){
		var sizeRadio = i % 5 == 0 ? 0.02 : 0
		diamonds.push(new Diamond(i, sizeRadio))
	}

	// 窗口尺寸变化时重新布局
	window.onresize = function(){
		Control.windowResized()
		dot.layout()
		second.layout()
		minute.layout()
		hour.layout()
		
		for(var i = 0; i < 60; i++){
			diamonds[i].layout()
		}
	}
}
