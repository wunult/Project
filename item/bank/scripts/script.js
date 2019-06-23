	//搜索栏
	var oInput=document.getElementById('input');
	oInput.onfocus=function(){
		oInput.placeholder="";
	}
	oInput.onblur=function(){
		oInput.placeholder="我要看...";
	}

	//选项卡
	var oXxk=document.getElementById('xxk');
	var aXli=oXxk.getElementsByTagName('li');
	var oXxknr=document.getElementById('xxknr');
	var aNrli=oXxknr.getElementsByClassName('alink');
	var index=0;
	for(var i=0; i<aXli.length; i++){
		aXli[i].index=i;
		aXli[i].onclick=function(){
			for(var j=0; j<aNrli.length; j++){
				aNrli[j].style.display="none";
				aXli[j].id="";
			}
			aNrli[this.index].style.display="block";
			aXli[this.index].id="active";
			return false;
		}
	}

	//轮播图
	var oLbt=document.getElementById('lbt');
	var aLi=oLbt.getElementsByTagName('li');
	var oDian=document.getElementById('lbtdian');
	var aLink=oDian.getElementsByTagName('li');
	var aI=oDian.getElementsByTagName('i');
	var timer=0;
	var num=0;
	timer=setInterval(lunbo,3000);
	function lunbo(){
		if(num==5){num=0;}
		changeImg();
		num++;
	}
	function changeImg(){
		for(var i=0; i<aLi.length; i++){
			aLi[i].style.zIndex="0";
			aLi[i].style.opacity="0";
			aI[i].id="";
		}
		aLi[num].style.zIndex="1";
		aLi[num].style.opacity="1";
		aLi[num].style.transition="opacity 2s";
		aI[num].id="lblist";

	}
	oLbt.onmouseover=function(){
		clearInterval(timer);
	}
	oLbt.onmouseout=function(){
		timer=setInterval(lunbo,3000);
	}
	oDian.onmouseover=function(){
		clearInterval(timer);
	}
	oDian.onmouseout=function(){
		timer=setInterval(lunbo,3000);
	}

	for(var i=0; i<aLink.length; i++)
	{
		aLink[i].index=i;
		aLink[i].onclick=function()
		{
			num=this.index;
			changeImg();
		}
	}


	//热点功能
	var oOneDl=document.getElementById('onedl');
	var aOneDlI=oOneDl.getElementsByTagName('i')[0];
	var oTwoDl=document.getElementById('twodl');
	var aTwoDlI=oTwoDl.getElementsByTagName('i')[0];

	aOneDlI.onclick=function(){
		oOneDl.style.opacity="0";
		oTwoDl.style.opacity="1";
		oOneDl.style.zIndex="-1";
		oTwoDl.style.zIndex="2";
		oTwoDl.style.transition="opacity 1s";
	}
	aTwoDlI.onclick=function(){
		oTwoDl.style.opacity="0";
		oOneDl.style.opacity="1";
		oTwoDl.style.zIndex="-1";
		oOneDl.style.zIndex="2";
		oOneDl.style.transition="opacity 1s";
	}
