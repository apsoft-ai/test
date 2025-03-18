mui.init({swipeBack: false
,gestureConfig: {tap:true,doubletap:true,longtap:true,hold:true,release:true}});

var 按钮_进入软件 = new 按钮("按钮_进入软件",按钮_进入软件_被单击,null,null);
var 图片框_主页图片 = new 图片框("图片框_主页图片",图片框_主页图片_被单击);
var 仔仔1 = new 仔仔("仔仔1",null,null,null,null,null,仔仔1_取网页源码完毕2,仔仔1_取网页源码完毕3,仔仔1_取网页源码完毕4,仔仔1_取网页源码完毕5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null);
var 加密操作1 = new 加密操作("加密操作1");
var 时钟_看结果 = new 时钟("时钟_看结果",时钟_看结果_周期事件);
var 对话框1 = new 对话框("对话框1",null,null,null);
if(mui.os.plus){
    mui.plusReady(function() {
        主窗口_创建完毕();
        
    });
}else{
    window.onload=function(){ 
        主窗口_创建完毕();
        
    }
}

	var wwwtxt;

	var campustxt;

	var startpic= "https://files.cnblogs.com/files/rjfb/xiajiacun.bmp";

	var onlinepage= "https://files.cnblogs.com/files/rjfb/bbpmoban.css?t=1725622583&download=true";




	var ver= "v1.0.240814";


function 主窗口_创建完毕(){



	图片框_主页图片.置图片(startpic);




	wwwtxt = 公用模块.str_cnblogsurl(onlinepage);

	仔仔1.网络_取网页源码2(wwwtxt);




	仔仔1.网络_取网页源码3("https://book.duxiu.com/advsearch?bstype=1&Book=&Author=&Word=&publish=&ISBN=9787302613664");











	读写设置.保存设置("版本", ver);



	时钟_看结果.开始执行(5000, false);

}

function 仔仔1_取网页源码完毕2(结果, 返回信息){



	if(结果 == true && 返回信息 != "" ){

		wwwtxt = net_getmid(返回信息);

		公用模块.trace(wwwtxt);



		读写设置.保存设置("wwwtxt", wwwtxt);

		return wwwtxt;

	}else{





		仔仔1.网络_取网页源码4(wwwtxt);


	}

}

function 仔仔1_取网页源码完毕4(结果, 返回信息){



	if(结果 == true && 返回信息 != "" ){

		wwwtxt = net_getmid(返回信息);



		读写设置.保存设置("wwwtxt", wwwtxt);

	}else{



		对话框1.信息框_全局("请联网后再试！");

		应用操作.结束程序();

	}

}

function net_getmid(str){





	var tstr;

	var tstrs;

	if(str == "" ){

		return "";

	}

	tstrs = 文本操作.取指定文本(str, "\\[ONLINEHOME\\]","\\[ONLINEEND\\]");

	if(数组操作.取成员数(tstrs) != 0 ){

		tstr = tstrs[0];

		tstr = 公用模块.str_decrypt(tstr, "fucksjg");

		return tstr;

	}

}

function 仔仔1_取网页源码完毕3(结果, 返回信息){



	if(结果 == true && 返回信息 != "" ){

		campustxt = 返回信息;

	}else{

		仔仔1.网络_取网页源码5("https://book.duxiu.com/advsearch?bstype=1&Book=&Author=&Word=&publish=&ISBN=9787302613664");

	}

}

function 仔仔1_取网页源码完毕5(结果, 返回信息){



	if(结果 == true && 返回信息 != "" ){

		campustxt = 返回信息;

	}else{



		console.log(campustxt);

	}

}

function net_iscampus(){









	var tstr;

	var tstrs;

	var tlogstr= "否";

	tstr = campustxt;

	if(tstr != "" ){

		公用模块.trace("取到的超星源码不为空");

		tstrs = 文本操作.取指定文本(tstr, "找到相关的", "种");

		if(数组操作.取成员数(tstrs) != 0 ){

			tstr = tstrs[0] + "种";

			tstrs = 文本操作.取指定文本(tstr, "<b>", "种");

			if(数组操作.取成员数(tstrs) != 0 ){

				tstr = tstrs[0];

				tstr = 文本操作.删首尾空(tstr);

				if(tstr != "" ){

					tlogstr = "是";

				}

			}

		}

	}else{

		tlogstr = "否";

	}

	读写设置.保存设置("校园网", tlogstr);

	return tlogstr;

}

function 时钟_看结果_周期事件(){

	var tstr;

	var tstrs;

	时钟_看结果.停止执行();



	公用模块.trace(wwwtxt);



	tstrs = 文本操作.取指定文本(wwwtxt, "\\[是否显示开屏开始\\]", "\\[是否显示开屏结束\\]");

	if(数组操作.取成员数(tstrs) != 0 ){

		tstr = tstrs[0];







		if(tstr != "是" ){



		}else{



			tstrs = 文本操作.取指定文本(wwwtxt,"\\[开屏图片SRC开始\\]","\\[开屏图片SRC结束\\]");

			if(数组操作.取成员数(tstrs) != 0 ){

				tstr = tstrs[0];

				if(tstr != "" ){





				图片框_主页图片.置图片(tstr);

				}

			}

		}

	}



	按钮_进入软件.置可视(true);

}

function 图片框_主页图片_被单击(){

	var tstr;

	var tstrs;

	tstrs = 文本操作.取指定文本(wwwtxt,"\\[开屏图片链接开始\\]","\\[开屏图片链接结束\\]");

	if(数组操作.取成员数(tstrs) != 0 ){

		tstr = tstrs[0];

		if(tstr != "" ){



			窗口操作.打开指定网址(tstr);

		}

	}

}

function 按钮_进入软件_被单击(){

	窗口操作.切换窗口("chuangkou1.html");



}