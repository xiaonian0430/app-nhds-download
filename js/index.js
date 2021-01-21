! function(n) {
	var e = n.document,
		t = e.documentElement,
		i = 720,
		d = i / 100,
		o = "orientationchange" in n ? "orientationchange" : "resize",
		a = function() {
			var n = t.clientWidth || 320;
			n > 720 && (n = 720);
			t.style.fontSize = n / d + "px";
		};
	e.addEventListener && (n.addEventListener(o, a, !1), e.addEventListener("DOMContentLoaded", a, !1));
}(window);

function checkUA() {
	var ua = navigator.userAgent.toLowerCase();
	if (/(iPhone|iPad|iPod|iOS)/i.test(ua)) {
		hideAND();
		showIOS();
	} else if (/(Android)/i.test(ua)) {
		hideIOS();
		showAND();
	} else {
		showAND();
		showIOS();
	}
	if(ua.match(/MicroMessenger/i)=="micromessenger") {
		showTips();
	}else if (ua.match(/MQQBrowser/i) == "mqqbrowser") {
		hideTips();
	}else if (ua.match(/QQ/i) == "qq") {
		showTips();
	}else{
		hideTips();
	}
}

function hideAND() {
	document.getElementById("app-android").style.display = "none";
}

function showAND() {
	document.getElementById("app-android").style.display = "block";
}

function hideIOS() {
	document.getElementById("app-ios").style.display = "none";
}

function showIOS() {
	document.getElementById("app-ios").style.display = "block";
}
function hideTips(){
	document.getElementById("tips").style.display = "none";
}
function showTips(){
	document.getElementById("tips").style.display = "block";
}
window.onload = function() {
	checkUA();
	window.onresize = function() {
		window.location.reload();
	}
};
