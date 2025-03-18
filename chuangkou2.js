mui.init({swipeBack: false
,gestureConfig: {tap:true,doubletap:true,longtap:true,hold:true,release:true}});

var 标题栏1 = new 标题栏("标题栏1",null,标题栏1_右侧图标被单击,标题栏1_左侧图标被单击);
var 按钮1 = new 按钮("按钮1",按钮1_被单击,null,null);
var 按钮2 = new 按钮("按钮2",按钮2_被单击,null,null);
var 按钮3 = new 按钮("按钮3",按钮3_被单击,null,null);
var 按钮4 = new 按钮("按钮4",按钮4_被单击,null,null);
var 按钮5 = new 按钮("按钮5",按钮5_被单击,null,null);
var 按钮组1 = new 按钮组("按钮组1",按钮组1_被单击);
var 图片框1 = new 图片框("图片框1",图片框1_被单击);
var 菜单1 = new 菜单("菜单1",菜单1_菜单项被单击);
var 微信分享1 = new 微信分享("微信分享1",null,null);
var 对话框1 = new 对话框("对话框1",null,null,null);
if(mui.os.plus){
    mui.plusReady(function() {
        窗口_设置_创建完毕();
        
    });
}else{
    window.onload=function(){ 
        窗口_设置_创建完毕();
        
    }
}

var wwwtxtsz;

function 窗口_设置_创建完毕(){

	wwwtxtsz = 读写设置.读取设置("wwwtxt");



	部署窗口标题();

	部署三个广告按钮();

	部署上边五个按钮();

	部署图片广告();

	添加菜单();

}

function 标题栏1_左侧图标被单击(){

	窗口操作.切换窗口("chuangkou1.html");

}

function 标题栏1_右侧图标被单击(){

	菜单1.显示菜单();

}

function 添加菜单(){

	菜单1.添加菜单项("京东阅读");

	菜单1.添加菜单项("今日封面");

	菜单1.添加菜单项("分享");

	菜单1.添加菜单项("检查更新");

	菜单1.添加菜单项("退出");

}

function 菜单1_菜单项被单击(菜单项标题){

	switch(菜单项标题){

		case "京东阅读" :

			窗口操作.打开指定网址("https://union-click.jd.com/jdc?e=618%7Cpc%7C&p=JF8BAJkJK1olXDYDZBoCUBVIMzZNXhpXVhgcBwADUlRMVnBaRQcLbUdxFRwqVTgWZj1uTA8UBFRZCj0ZUA0bD18IHVwRXwYyUVpcDksWBl84G1glFmgDZF1cDEoUCmsAGlglXQACVV1dCE0XAWwIEmsSXQ8yBB8fVhxSbTM4K2sWbQECXUpbegpFF2l6K2sUbQUyZFxcCU8eM184K2s");

		break;
		case "今日封面" :

			窗口操作.切换窗口("index.html");

		break;
		case "分享" :

			微信分享1.分享到微信朋友圈("http://doc88.ys168.com", "软件分享", "下载地址：http://doc88.ys168.com", "", "");

		break;
		case "检查更新" :

			菜单_检查更新();

		break;
		case "退出" :

			应用操作.结束程序();

		break;
	}

}

function 部署窗口标题(){

	var tstr;

	var tstrs;

	if(wwwtxtsz == "" ){

		标题栏1.置标题("更多");

		return;

	}

	tstrs = 文本操作.取指定文本(wwwtxtsz, "\\[设置窗口标题开始\\]","\\[设置窗口标题结束\\]");

	if(数组操作.取成员数(tstrs) != 0 ){

		tstr = tstrs[0];

		公用模块.调试输出(tstr);

		if(tstr != "" ){

			标题栏1.置标题(tstr);

		}else{

			标题栏1.置标题("更多");

		}

	}

}

function 菜单_检查更新(){

	var tstr;

	var tstrs;

	if(wwwtxtsz == "" ){

		对话框1.信息框_全局("请洽 QQ 1790042182 垂询新版。");

	}else{

		tstrs = 文本操作.取指定文本(wwwtxtsz, "\\[版本开始\\]", "\\[版本结束\\]");

		if(数组操作.取成员数(tstrs) != 0 ){

			tstr = tstrs[0];

			if(tstr != "" ){

				if(文本操作.删首尾空(tstr) == 文本操作.删首尾空(读写设置.读取设置("版本")) ){

					对话框1.信息框_全局("您使用的已经是最新版本！");

				}else{

					对话框1.信息框_全局("已发布新版，确定后为您打开网盘。如网页打不开，请洽 QQ 1790042182 垂询新版。");

				}

			}else{

				对话框1.信息框_全局("请洽 QQ 1790042182 垂询新版。");

			}

		}else{

			对话框1.信息框_全局("请洽 QQ 1790042182 垂询新版。");

		}

	}

}

function 部署三个广告按钮(){

	var tstr;

	if(wwwtxtsz == "" ){

		按钮组1.可视 = false;

	}else{

		tstr = 公用模块.str_getmid(wwwtxtsz, "\\[广告1文本开始\\]", "\\[广告1文本结束\\]");

		if(tstr != "" ){

			按钮组1.置标题(0, tstr);

		}else{

			按钮组1.置标题(0, "备用");

		}

		tstr = 公用模块.str_getmid(wwwtxtsz, "\\[广告2文本开始\\]", "\\[广告2文本结束\\]");

		if(tstr != "" ){

			按钮组1.置标题(1, tstr);

		}else{

			按钮组1.置标题(1, "备用");

		}

		tstr = 公用模块.str_getmid(wwwtxtsz, "\\[广告3文本开始\\]", "\\[广告3文本结束\\]");

		if(tstr != "" ){

			按钮组1.置标题(2, tstr);

		}else{

			按钮组1.置标题(2, "备用");

		}

	}

}

function 按钮组1_被单击(按钮索引){

	var tstr;

	switch(按钮索引){

		case 0 :

			tstr = 公用模块.str_getmid(wwwtxtsz, "\\[广告1信息框开始\\]", "\\[广告1信息框结束\\]");

			if(tstr != "" ){

				对话框1.信息框_全局(tstr);

			}

			tstr = 公用模块.str_getmid(wwwtxtsz, "\\[广告1链接开始\\]", "\\[广告1链接结束\\]");

			if(tstr != "" ){

				窗口操作.打开指定网址(tstr);

			}

		break;
		case 1 :

			tstr = 公用模块.str_getmid(wwwtxtsz, "\\[广告2信息框开始\\]", "\\[广告2信息框结束\\]");

			if(tstr != "" ){

				对话框1.信息框_全局(tstr);

			}

			tstr = 公用模块.str_getmid(wwwtxtsz, "\\[广告2链接开始\\]", "\\[广告2链接结束\\]");

			if(tstr != "" ){

				窗口操作.打开指定网址(tstr);

			}

		break;
		case 2 :

			tstr = 公用模块.str_getmid(wwwtxtsz, "\\[广告3信息框开始\\]", "\\[广告3信息框结束\\]");

			if(tstr != "" ){

				对话框1.信息框_全局(tstr);

			}

			tstr = 公用模块.str_getmid(wwwtxtsz, "\\[广告3链接开始\\]", "\\[广告3链接结束\\]");

			if(tstr != "" ){

				窗口操作.打开指定网址(tstr);

			}

		break;
	}

}

function 部署图片广告(){

	var tstr;

	tstr = 公用模块.str_getmid(wwwtxtsz, "\\[图片SRC开始\\]", "\\[图片SRC结束\\]");

	if(tstr != "" ){

		图片框1.置图片(tstr);

	}

}

function 图片框1_被单击(){

	var tstr;

	tstr = 公用模块.str_getmid(wwwtxtsz, "\\[图片单击时打开网址开始\\]", "\\[图片单击时打开网址结束\\]");

	if(tstr != "" ){

		窗口操作.打开指定网址(tstr);

	}

}

function 部署上边五个按钮(){

	var tstr;

	tstr = 公用模块.str_getmid(wwwtxtsz, "\\[上方按钮1文本开始\\]", "\\[上方按钮1文本结束\\]");

	if(tstr != "" ){

		按钮1.置标题(tstr);

	}else{

		按钮1.置可视(false);

	}

	tstr = 公用模块.str_getmid(wwwtxtsz, "\\[上方按钮2文本开始\\]", "\\[上方按钮2文本结束\\]");

	if(tstr != "" ){

		按钮2.置标题(tstr);

	}else{

		按钮2.置可视(false);

	}

	tstr = 公用模块.str_getmid(wwwtxtsz, "\\[上方按钮3文本开始\\]", "\\[上方按钮3文本结束\\]");

	if(tstr != "" ){

		按钮3.置标题(tstr);

	}else{

		按钮3.置可视(false);

	}

	tstr = 公用模块.str_getmid(wwwtxtsz, "\\[上方按钮4文本开始\\]", "\\[上方按钮4文本结束\\]");

	if(tstr != "" ){

		按钮4.置标题(tstr);

	}else{

		按钮4.置可视(false);

	}

	tstr = 公用模块.str_getmid(wwwtxtsz, "\\[上方按钮5文本开始\\]", "\\[上方按钮5文本结束\\]");

	if(tstr != "" ){

		按钮5.置标题(tstr);

	}else{

		按钮5.置可视(false);

	}

}

function 按钮1_被单击(){

	var tstr;

	tstr = 公用模块.str_getmid(wwwtxtsz, "\\[上方按钮1信息框开始\\]", "\\[上方按钮1信息框结束\\]");

	if(tstr != "" ){

		对话框1.信息框_全局(tstr);

	}

	tstr = 公用模块.str_getmid(wwwtxtsz, "\\[上方按钮1链接开始\\]", "\\[上方按钮1链接结束\\]");

	if(tstr != "" ){

		窗口操作.打开指定网址(tstr);

	}

}

function 按钮2_被单击(){

	var tstr;

	tstr = 公用模块.str_getmid(wwwtxtsz, "\\[上方按钮2信息框开始\\]", "\\[上方按钮2信息框结束\\]");

	if(tstr != "" ){

		对话框1.信息框_全局(tstr);

	}

	tstr = 公用模块.str_getmid(wwwtxtsz, "\\[上方按钮2链接开始\\]", "\\[上方按钮2链接结束\\]");

	if(tstr != "" ){

		窗口操作.打开指定网址(tstr);

	}

}

function 按钮3_被单击(){

	var tstr;

	tstr = 公用模块.str_getmid(wwwtxtsz, "\\[上方按钮3信息框开始\\]", "\\[上方按钮3信息框结束\\]");

	if(tstr != "" ){

		对话框1.信息框_全局(tstr);

	}

	tstr = 公用模块.str_getmid(wwwtxtsz, "\\[上方按钮3链接开始\\]", "\\[上方按钮3链接结束\\]");

	if(tstr != "" ){

		窗口操作.打开指定网址(tstr);

	}

}

function 按钮4_被单击(){

	var tstr;

	tstr = 公用模块.str_getmid(wwwtxtsz, "\\[上方按钮4信息框开始\\]", "\\[上方按钮4信息框结束\\]");

	if(tstr != "" ){

		对话框1.信息框_全局(tstr);

	}

	tstr = 公用模块.str_getmid(wwwtxtsz, "\\[上方按钮4链接开始\\]", "\\[上方按钮4链接结束\\]");

	if(tstr != "" ){

		窗口操作.打开指定网址(tstr);

	}

}

function 按钮5_被单击(){

	var tstr;

	tstr = 公用模块.str_getmid(wwwtxtsz, "\\[上方按钮5信息框开始\\]", "\\[上方按钮5信息框结束\\]");

	if(tstr != "" ){

		对话框1.信息框_全局(tstr);

	}

	tstr = 公用模块.str_getmid(wwwtxtsz, "\\[上方按钮5链接开始\\]", "\\[上方按钮5链接结束\\]");

	if(tstr != "" ){

		窗口操作.打开指定网址(tstr);

	}

}