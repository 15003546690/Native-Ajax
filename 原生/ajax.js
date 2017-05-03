function ajax(opt){
	//1.创建ajax对象
	var xml=null;
	if(window.XMLHttpRequest){//ie6以上
		xml=new XMLHttpRequest()
	}else{//ie6以下
		xml=new ActiveXObject("Microsoft.XMLHTTP")
	}
	//2.连接服务器
	xml.open(opt.type,opt.url,true);
	if(opt.type=="post"){
		xml.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	} 
	//4.响应数据
	xml.onreadystatechange=function(){
		if(xml.readyState==4){
			if(xml.status==200){
				opt.success(xml.responseText)
			}else{
				if(opt.error) opt.error()
			}
		}
	}
	//3.发送请求
	var data=opt.data?opt.data:null;
	xml.send(data);
}