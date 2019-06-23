/*弹出菜单*/
var oHover = document.getElementsByClassName('hover');
var oMenu = document.getElementsByClassName('header-nav-menu');
var oIndex = document.getElementsByClassName('index');
var oMulti = document.getElementsByClassName('multi');
for(var i=0;i<oHover.length;i++){
	oHover[i].onmouseover=function(){
		oMenu[0].style.display="block";
		if(i==0){
			oIndex[0].style.display="block";
			oMulti[0].style.display="none";
		}
		else{
			oIndex[0].style.display="none";
			oMulti[0].style.display="block";
		}
	}
	oHover[i].onmouseout=function (){
		oMenu[0].style.display="none";
	}	
}
oIndex[0].onmouseover=function(){
	oMenu[0].style.display="block";
}
oIndex[0].onmouseout=function(){
	oMenu[0].style.display="none";
}
oMulti[0].onmouseover=function(){
	oMenu[0].style.display="block";
}
oMulti[0].onmouseout=function(){
	oMenu[0].style.display="none";
}
/*banner区轮播图*/
var	ban=document.getElementById('banner');
var aLi=ban.getElementsByTagName('li');
var nav=document.getElementById('nav');
var bLi=nav.getElementsByTagName('li');
var oBox = document.getElementById('banner-box');
var oNext = document.getElementById('next');
var oPrve = document.getElementById('prve');
var index=0;
var time=null;
bLi[0].id="pitch";
aLi[0].style.display="block";
for(var i=0;i<bLi.length;i++)
{
	bLi[i].num=i;
	bLi[i].onmouseover=function(){
		index = this.num;
		change1();
		return false;
	}
}
oBox.onmouseover=function(){
	clearInterval(time);
}
oBox.onmouseout=function(){
	time = setInterval(lunbotu1,2000);
}
time = setInterval(lunbotu1,2000);
 function lunbotu1(){
 	index++;
 	if(index >= aLi.length){
 		index=0;
 	}
 	change1();
 }
 oNext.onclick=function(){
 	if(index!=2){index++;}
 	change1();
 	return false;
 }
 oPrve.onclick=function(){
 	if(index!=0){index--;}
 	change1();
 	return false;
 }
 function change1(){
 	for(var j=0;j<aLi.length;j++)
		{
			aLi[j].style.display="none";
			bLi[j].id="";
		}
		aLi[index].style.display="block";
		bLi[index].id="pitch";
 }
 /*main区轮播图*/
(function(){
	var oMain=document.getElementById('main-right-top');
	var oBd=document.getElementById('bd');
	var navBar=document.getElementById('nav-bar');
	var aLink=navBar.getElementsByTagName('a');
	var timer=null;
	var num=0;
	aLink[0].id="active";
	oMain.onmouseover=function(){
		clearInterval(timer);
	}
	oMain.onmouseout=function(){
		timer = setInterval(lunbotu2,2000);
	}
	timer = setInterval(lunbotu2,2000);
	function lunbotu2(){
		num++;
		if(num >= aLink.length){
			num=0;
		}
		change2();
	}
	for(var j=0;j<aLink.length;j++)
	{
		aLink[j].index = j;
		aLink[j].onmouseover=function(){
			num = this.index;
			change2();
			return false;
		}
	}
	function change2(){
		for(var i=0;i<aLink.length;i++)
		{
			aLink[i].id="";
		}
		aLink[num].id="active";
		oBd.style.left = -312 * num + "px";
	}
})();
/*所获奖项区*/
var icon=document.getElementById('icon');
var clear=document.getElementById('clear');
icon.onclick=function(){
	if(clear.style.height=="770px"){
		icon.style.background="url(images/sprites1.png) -453px -325px";
		clear.style.height="90px";
	}
	else{
		icon.style.background="url(images/sprites1.png) -100px -310px";
		clear.style.height="770px";
	}
	return false;
}
