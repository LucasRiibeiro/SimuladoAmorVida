


	function rollIn(el)
	{
		var ms = navigator.appVersion.indexOf("MSIE")
		ie4 = (ms>0) && (parseInt(navigator.appVersion.substring(ms+5, ms+6)) >= 4)
		if(ie4)
		{
			el.initstyle=el.style.cssText;
			var newStyle=el.style.cssText+";"+el.fprolloverstyle;
			el.style.cssText=newStyle
		}
	}
	function rollOut(el)
	{
		var ms = navigator.appVersion.indexOf("MSIE")
		ie4 = (ms>0) && (parseInt(navigator.appVersion.substring(ms+5, ms+6)) >= 4)
		if(ie4)
		{
			el.style.cssText=el.initstyle
		}
	}


