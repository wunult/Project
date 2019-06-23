
		var oUl=document.getElementById('random-color');
		var aLink=oUl.getElementsByClassName('main-border');
		var aI=oUl.getElementsByTagName('i');

		var oUL=document.getElementById('seach-tab');
		var aLi=oUL.getElementsByClassName('seach-font-color');

		var oForm=document.getElementById('form');
		var aDiv=oForm.getElementsByClassName('form-input');

		/*var oInput=document.getElementById('current-focus');
		var oDiv=document.getElementById('search-recommend');*/

		var col=["rgb(0,139,255)","rgb(250,70,51)","rgb(255,148,0)","rgb(108,210,12)","rgb(0,207,221)","rgb(255,197,22)","rgb(104,108,209)","rgb(0,139,255)"];
		var fontColor=["rgb(0,139,255)","rgb(0,207,221)","rgb(250,70,51)","rgb(255,148,0)"]
		
		var timer=0;
		/*aLink[0].style.color=col[0];*/
		for(var i=0;i<aLink.length;i++)
		{
			aLink[i].index=i;
			aLink[i].onmouseover=function()
			{
				for(var j=0;j<aI.length;j++)
				{
					aI[j].style.display="none";
				}
				aLink[this.index].style.color=col[this.index];/*
				aI[this.index].style.display="block";
				aI[this.index].style.border="1px solid col[this.index]";*/
			}
		}
		for(var i=0;i<aLink.length;i++)
		{
			aLink[i].num=i;
			aLink[i].onmouseout=function()
			{
				aLink[this.num].style.color="rgb(102,102,102)";
				return false;
			}
		}

		/*for(var i=0;i<aLi.length;i++)
		{
			aLi[i].index=i;
			aLi[i].onmouseover=function()
			{
				aLi[this.index].style.color=fontColor[this.index];
			}
		}
		for(var i=0;i<aLi.length;i++)
		{
			aLi[i].num=i;
			aLi[i].onmouseout=function()
			{
				aLi[this.num].style.color="rgb(153,153,153)";
				return false;
			}
		}*/

		aLi[0].style.color="rgb(0,138,255)";
		for(var i=0;i<aLi.length;i++)
		{
			aLi[i].index=i;
			aLi[i].onclick=function()
			{
				for(var j=0;j<aLi.length;j++)
				{
					aLi[j].id="";
					aDiv[j].style.display="none";
					/*aLi[j].num=j;
					aLi[j].onhover=function()
					{
						aLi[this.num].style.color=fontColor[this.num];
					}*/
					/*aLi[j].onmouseout=function()
					{
						aLi[this.num].style.color="rgb(153,153,153)";
					}*/
					aLi[j].style.color="rgb(153,153,153)";
				}
				aDiv[this.index].style.display="block";
				aLi[this.index].id="current";
				aLi[this.index].style.color=fontColor[this.index];
			}
		}

		var	oBox=document.getElementById('qk-banner');
		var oBul=document.getElementById('Broadcast');
		var aBli=oBul.getElementsByClassName('broadcast-img'); 
		var oPrve=document.getElementById('banner-tab-prve');
		var oNext=document.getElementById('banner-tab-next');
		var oTabs=document.getElementById('tabs');
		var aTlink=oTabs.getElementsByTagName('a');
		/*var oTab=document.getElementById('tab-current');*/
		var num=0;

		for(var i=0;i<aBli.length;i++)
		{
			aBli[i].style.opacity="0";
		}
		aBli[0].style.opacity="1";

		oBox.onmouseover=function()
		{
			clearInterval(timer);
		}
		oBox.onmouseout=function()
		{
			timer = setInterval(broadcast,3000);
		}

		timer = setInterval(broadcast,3000);
		function broadcast()
		{
			num++;
			if(num>=aBli.length){num=0;}
			changeImg();
			return false;
		}
		oPrve.onclick=function()
		{
			num--;
			if(num == -1){num=aBli.length - 1;}
			changeImg();
			return false;
		}
		oNext.onclick=function()
		{
			num++;
			if(num == aBli.length){num=0;}
			changeImg();
			return false;
		}
		
		for(var i=0;i<aTlink.length;i++)
		{
			aTlink[i].index=i;
			aTlink[i].onclick=function()
			{
				for(var j=0;j<aTlink.length;j++)
				{
					aTlink[j].id="";
				}
				aTlink[this.index].id="tab-current";
				num=this.index;
				changeImg();
				return false;
			}
		}
		function changeImg()
		{
			for(var i=1;i<aBli.length;i++)
			{
				aBli[i].style.opacity="0";
			}
			aBli[num].style.opacity="1";
			aBli[num].style.transition="opacity 2s";
			for(var j=0;j<aTlink.length;j++)
			{
				aTlink[j].id="";
			}
			aTlink[num].id="tab-current";
		}

		var oWx=document.getElementById('wx');
		var aIMG=oWx.getElementsByTagName('img');
		oWx.onmouseover=function()
		{
			aIMG[0].style.display="block";
		}
		oWx.onmouseout=function()
		{
			aIMG[0].style.display="none";
		}
		aIMG.onmouseover=function()
		{
			aIMG.style.display="block";
		}