mui.init({swipeBack: false
,gestureConfig: {tap:true,doubletap:true,longtap:true,hold:true,release:true}});

var 标题栏1 = new 标题栏("标题栏1",null,标题栏1_右侧图标被单击,标题栏1_左侧图标被单击);
var 标签_最下广告 = new 标签("标签_最下广告",标签_最下广告_被单击);
var 按钮组1 = new 按钮组("按钮组1",按钮组1_被单击);
var 浏览器1 = new 浏览器("浏览器1",null,null,null,null,null,null,null,null,null);
var 菜单1 = new 菜单("菜单1",菜单1_菜单项被单击);
var 对话框1 = new 对话框("对话框1",null,null,null);
if(mui.os.plus){
    mui.plusReady(function() {
        窗口_首窗_创建完毕();
        
    });
}else{
    window.onload=function(){ 
        窗口_首窗_创建完毕();
        
    }
}

	var wwwtxtsc;

function 窗口_首窗_创建完毕(){

	wwwtxtsc = 读写设置.读取设置("wwwtxt");
	console.log("看看上传到服务器后能否将此变量传递过来吧");

	console.log(wwwtxtsc);



	部署窗口标题();



	部署最下广告标签();









	添加菜单();

}

function 部署窗口标题(){

	var tstr;

	var tstrs;

	tstrs = 文本操作.取指定文本(wwwtxtsc,"\\[标题开始\\]","\\[标题结束\\]");

	if(数组操作.取成员数(tstrs) != 0 ){

		tstr = tstrs[0];

		if(tstr != "" ){

			标题栏1.置标题(文本操作.删首尾空(tstr));

		}

	}

}

function 部署最下广告标签(){

	var tstr;

	var tstrs;

	if(wwwtxtsc == "" ){

		公用模块.trace("wwwtxtsc 为空");

		标签_最下广告.置标题("");

		标签_最下广告.置可视(false);

	}

	tstrs = 文本操作.取指定文本(wwwtxtsc, "\\[最下广告标签文本开始\\]","\\[最下广告标签文本结束\\]");

	if(数组操作.取成员数(tstrs) != 0 ){

		tstr = tstrs[0];

		公用模块.trace(tstr);

		if(tstr != "" ){

			标签_最下广告.置标题(tstr);

		}else{

			标签_最下广告.置标题("");

			标签_最下广告.置可视(false);

		}

	}

}

function 标签_最下广告_被单击(){

	var tstr;

	var tstrs;

	if(wwwtxtsc == "" ){

		公用模块.trace("wwwtxtsc 为空");

	}

	tstrs = 文本操作.取指定文本(wwwtxtsc, "\\[最下广告标签链接开始\\]","\\[最下广告标签链接结束\\]");

	if(数组操作.取成员数(tstrs) != 0 ){

		tstr = tstrs[0];

		公用模块.trace(tstr);

		if(tstr != "" ){

			窗口操作.打开指定网址(tstr, 2);



		}else{

			窗口操作.打开指定网址("http://apsoft.ys168.com", 2);

		}

	}

}

function 部署网页(){

	var tstr;

	var tstrs;

	tstrs = 文本操作.取指定文本(wwwtxtsc,"\\[最核心浏览框地址开始\\]","\\[最核心浏览框地址结束\\]");

	if(数组操作.取成员数(tstrs) != 0 ){

		tstr = tstrs[0];

		if(tstr != "" ){

			读写设置.保存设置("首页", tstr);

			浏览器1.跳转(tstr);

		}else{

			浏览器1.跳转("http://apsoft.ys168.com");

		}

	}

}

function 标题栏1_左侧图标被单击(){

	窗口操作.切换窗口("index.html");

}

function 标题栏1_右侧图标被单击(){

	菜单1.显示菜单();

}

function 添加菜单(){

	菜单1.添加菜单项("更多");

	菜单1.添加菜单项("第二条");

	菜单1.添加菜单项("第一条");

}

function 菜单1_菜单项被单击(菜单项标题){

	switch(菜单项标题){

		case "第一条" :

		break;
		case "第二条" :

		break;
		case "更多" :

			窗口操作.切换窗口("chuangkou2.html");

		break;
	}

}

function 按钮组1_被单击(按钮索引){

	switch(按钮索引){

		case 0 :

			浏览器1.后退();

		break;
		case 1 :

			浏览器1.前进();

		break;
		case 2 :

			浏览器1.初始化(读写设置.读取设置("首页"), "115px", "0px");

		break;
	}

}