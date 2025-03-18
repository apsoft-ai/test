    function 浏览器(name,event1,event2,event3,event4,event5,event6,event7,event8,event9){   
        //name表示组件在被创建时的名称，event表示组件拥有的事件
        //如果组件有多个事件，可以在后面继续填写这些事件名称
        //例如：function 浏览器(name,event1,event2,event3){
        
        //组件内部属性，仅供组件内部使用：
        //this.名称 = name;
        this.web = null;
		
        //组件命令：
        this.初始化 = function (网址,顶边,底边){
             var style = {top:顶边,bottom:底边,videoFullscreen:"landscape"};
			 this.web = plus.webview.create(网址, 网址, style);	
			 if(event1 != null){ 
			 	if(mui.os.android){        
	         		this.web.overrideUrlLoading({mode:"reject"}, function(e){	//reject模式在IOS系统里会卡死,所以这个事件只能在安卓系统里监听	         
				     	event1(e.url);	//事件1：即将跳转(网址 为 文本型)				 
             		});
				}
			 }	
			 if(event2 != null){
             	this.web.addEventListener("loading", function(e){		         
				     event2();	//事件2：正在加载
             	}, false);	
			 }	
			 if(event3 != null){
             	this.web.addEventListener("error", function(e){		         
				     event3();	//事件3：加载出错				 	
             	}, false);	
			 }
			 if(event4 != null){
             	this.web.addEventListener("progressChanged", function(e){		         
				     event4(e.progress);	//事件4：加载进度(进度 为 数值型)				 
             	}, false);	
			 }	
			 if(event5 != null){			 
             	this.web.addEventListener("titleUpdate", function(e){		         
				     event5(e.title);	//事件5：获得标题(标题 为 文本型)				 	
             	}, false);	
			 }		
			 if(event6 != null){	 	
             	this.web.addEventListener("loaded", function(e){		         
				     event6();	//事件6：加载完毕				 	
             	}, false);	
			 }				 		 		 
			 this.web.show();			 
        } 

        //组件命令：
        this.跳转 = function (url){
            this.web.loadURL(url);
        }  

        //组件命令：
        this.跳转2 = function (data){
            this.web.loadData(data);//html
        }  

        //组件命令：
        this.查询后退 = function (){
	        this.web.canBack(function(e){
				if(event7 !=null){
					event7(e.canBack); //事件7：获得后退
				}
	        });
		}

        //组件命令：
        this.后退 = function (){
		    this.web.back();
		}

        //组件命令：
        this.查询前进 = function (){
	        this.web.canForward(function(e){
				if(event8 !=null){
					event8(e.canForward);//事件8：获得前进
				}
	        });
		}

        //组件命令：
        this.前进 = function (){
		    this.web.forward();
		}

        //组件命令：
        this.刷新 = function (value){
		    this.web.reload(value);//不使用缓存
		}
        
        //组件命令：
        this.取标题 = function (){
           return this.web.getTitle();
        }  

        //组件命令：
        this.取地址 = function (){
             return this.web.getURL();
        }  

        //组件命令：
        this.执行代码 = function (js){
		    this.web.evalJS(js);
		}

        //组件命令：
        this.置下拉刷新 = function (value){
			if(value==false){
				this.web.setPullToRefresh({support:false});
			}else{
                this.web.setPullToRefresh({support:true,
                    height:"50px",
                    range:"200px",
                    contentdown:{
                       caption:"下拉可以刷新"
                    },
                    contentover:{
                        caption:"释放立即刷新"
                    },
                    contentrefresh:{
                        caption:"正在刷新..."
                    }
                },onRefresh);
			}
        }
	    
		function onRefresh(){
			if(event9 != null){
			     event9();//事件9：下拉刷新()
			}
		}

        //组件命令：
        this.开始下拉刷新 = function (){
             this.web.beginPullToRefresh();
        }  

        //组件命令：
        this.停止下拉刷新 = function (){
             this.web.endPullToRefresh();
        } 

        //组件命令：
        this.置位置尺寸 = function (t,b){
		    this.web.setStyle({top:t,bottom:b});
		}

        //组件命令：
        this.置缩放模式 = function (value){
		    this.web.setStyle({scalable:value});//true false
		}

        //组件命令：
        this.置滚动条样式 = function (value){
		    this.web.setStyle({scrollIndicator:value}); //"all"  "vertical"  "horizontal"  "none"
		}
		
        //组件命令：
        this.置可视 = function (value){
            if(value==true){
                this.web.show();            
            }else{
                this.web.hide();            
            }
        } 
        
    }