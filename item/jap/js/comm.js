// JavaScript Document

jQuery(document).ready(function() {
    var $ = jQuery;
    
	$("body").on("click", ".msKeimgBox li", function(){
        $(this).parents(".msKeimgBox").find(".big-tu").html($(this).find(".hidden1").html());
    });
 //    $(".msKeimgBox li").click(function () {
	// 	$(this).parents(".msKeimgBox").find(".big-tu").html($(this).find(".hidden1").html());
	// });
	
	$(".nav-menu").click(function () {
		$(this).parents(".nav").find(".nav-phone").fadeToggle();
	});
	
	$(".nav-close").click(function () {
		$(this).parents(".nav").find(".nav-phone").fadeOut();
	});
	
	$(".nav-phone").click(function () {
        if(!$(".nav-menu").is(":hidden")){
            $(this).parents(".nav").find(".nav-phone").fadeOut();
        }
		
	});
	

	$(function() {
		try{
			var detaH = $(".deta").offset().top;
			var detaL = $(".deta").offset().left;
			$(".calendar").css({"top":detaH + 50 ,"left":detaL});
		}catch(e){

		}
	  
    });
    // responsive
    $(window).resize(function() {
        var window_with = $(window).width();
        // console.log(window_with);
        if(window_with>767){
            // console.log($(".nav-phone").is(":hidden"));
            if($(".nav-phone").is(":hidden")){
                $(".nav-phone").removeAttr("style");
            }
        }
    });
   //切换
  $(".otop li").click(function () {
	  var thisli = $(this).parents(".otop").find("li");
	  var thisarc = $(this).parents(".cutover").find(".otopmain");
	  for(var i = 0; i<thisli.length; i++){
		  var num = $(this).index();
		  thisli[i].className = "";
		  thisarc[i].style.display="none";
		  thisli[num].className = "active";
		  thisarc[num].style.display="block";
	  }

  });
  	//导航条下拉菜单
  	if($(window).width()>750){
		$('.nav-down').mouseenter(function(){
				var h = $(this).height()
				var w =$(this).width()
				var vw = $(this).find('.drop-down').width()
				$(this).find('.drop-down').css({
					display: 'block',
					top: h + 2 + 'px',
					right: 0
				})
		})
		if(navigator.userAgent.indexOf('iPad') > -1 || navigator.userAgent.indexOf('Linux') > -1){
			$('.nav-down').unbind('mouseenter')
			$('.nav-down').click(function(){
				var h = $(this).height()
				var w =$(this).width()
				var vw = $(this).find('.drop-down').width()
				$(this).find('.drop-down').css({
					display: 'block',
					top: h + 'px',
					right: 0
				})
			})
		}
		$('.nav-down').mouseleave(function(){
		$(this).find('.drop-down').css({
			display: 'none'
		})
	})
	}else{
		$('.nav-down').unbind('mosennter')
	}
	
	
	
	
  	
  
    //按钮被点击后，滑动到顶部。
    $('#gototop').click(function(){
        $('html,body').animate({scrollTop: '0px'}, 800);
    });
});



// 添加讀取XML文件方法
// 加载xml文档
var loadXML = function (xmlFile) {
    var xmlDoc;
    // console.log( !!window.ActiveXObject  );
    if ( !!window.ActiveXObject || "ActiveXObject" in window ) {
        xmlDoc = new ActiveXObject('Microsoft.XMLDOM');//IE浏览器
        xmlDoc.async = false;
        xmlDoc.load(xmlFile);
    }
    else if (isFirefox=navigator.userAgent.indexOf("Firefox")>0) { //火狐浏览器
    //else if (document.implementation && document.implementation.createDocument) {//这里主要是对谷歌浏览器进行处理
        xmlDoc = document.implementation.createDocument('', '', null);
        xmlDoc.async = false; 
        xmlDoc.load(xmlFile);
    }
    else{ //谷歌浏览器
        var xmlhttp = new window.XMLHttpRequest();
        try{
            xmlhttp.open("GET",xmlFile,false);
            xmlhttp.send(null);
            if(xmlhttp.readyState == 4){
                xmlDoc = xmlhttp.responseXML.documentElement;
            }
        }catch(e){

        }
         
    }

    return xmlDoc;
}

// 首先对xml对象进行判断
var  checkXMLDocObj = function (xmlFile) {
    var xmlDoc = loadXML(xmlFile);
    if (xmlDoc == null) {
        //alert('您的浏览器不支持xml文件读取,于是本页面禁止您的操作,推荐使用IE5.0以上可以解决此问题!');
        // window.location.href = '../err.html';

    }
    return xmlDoc;
}

var getXMLNode = function(xmlFile, nodeName){
	var nodes;
	var xmlDoc = checkXMLDocObj(xmlFile);//读取到xml文件中的数据
    if(xmlDoc == null){
        return false;
    }
	var root = xmlDoc.documentElement
    try{
        var flag = $.browser.msie;
    }catch(e){
        flag = /msie/i.test(navigator.userAgent);
    }
    if(flag){ // 注意各个浏览器之间的区别
     nodes = xmlDoc.getElementsByTagName(nodeName)[0].childNodes; //读取XML文件中需要显示的数据
    } 
    else if (isFirefox=navigator.userAgent.indexOf("Firefox")>0){
        nodes = xmlDoc.getElementsByTagName(nodeName); //读取XML文件中需要显示的数据
    }
    else{
        nodes = xmlDoc.getElementsByTagName(nodeName);
    }
    return nodes;
}

// alert info
var INFO = {
    alert_info:function(data,selecter){
        // console.log(data);
        $(".alert-div .info").html(data);
        $(".alert-div").slideDown();
        window.setTimeout(function(){
            INFO.alert_hide();
        },2000); 
        // CART.loadcart();
    },
    alert_hide:function(){
        $(".alert-div").slideUp();
    },
    alert_msg:function(data,selecter){
        if(typeof(selecter)!="undefined"){
            $(selecter+" .info").html(data);
            $(selecter).slideDown();
        }else{
            $(".alert-div .info").html(data);
            $(".alert-div").slideDown(); 
        }
        
    },
    show_msg:function(data){
        if(typeof(data.responseText)!="undefined"){
            
            console.log(data.responseText);
        }else{
            console.log(data);
        }
    },
    modal:function(data,config,settings){
        $this = this;

        $(".default-modal .modal-body h2").html(data);
        if(config=='confirm'){
            $(".default-modal .modal-footer .btn").hide();
            $(".default-modal .modal-footer .confirm").show();
        }else{
            $(".default-modal .modal-footer .btn").hide();
            $(".default-modal .modal-footer .affirm").show();
            $(".default-modal .modal-footer .cancel").show();
        }
        try{
            // 注册函数
            if(typeof(settings.confirm)!="undefined"){
                
                $(".default-modal .confirm").one("click",settings.confirm);
            }
            if(typeof(settings.affirm)!="undefined"){
                
                $(".default-modal .affirm").one("click",settings.affirm);
            }
            if(typeof(settings.cancel)!="undefined"){
                
                $(".default-modal .cancel").one("click",settings.cancel);
            }
        }catch(e){
        }

        try{
            $(".default-modal").modal();
        }catch(e){
            $this.view(".default-modal");
        }
        
        
    },
    view:function(seleter,settings){
        try{
            // 注册函数
            if(typeof(settings.confirm)!="undefined"){
                
                $(seleter+" .confirm").one("click",settings.confirm);
            }
            if(typeof(settings.affirm)!="undefined"){
                
                $(seleter+" .affirm").one("click",settings.affirm);
            }
            if(typeof(settings.cancel)!="undefined"){
                
                $(seleter+" .cancel").one("click",settings.cancel);
            }
        }catch(e){
        }
        // console.log(seleter.length);
        $(seleter).fadeIn();
        $(seleter).find(".modal-content").fadeIn();
        try{
          $(seleter).find("[data-dismiss='modal']").on("click",function(){
            $(seleter).fadeOut("fast");
            $(seleter).find(".modal-content").fadeOut("fast");
          });
        }catch(e){

        }
        
    },
    showPage:function(page_id){
      var $this = this;
      $.ajax({
        type:"get",
        url: $this.getUrl() + "index.php?r=site/ajax&type=page&id="+page_id,
        success:function(data){
          $(".page-modal").find(".tan_pro").html(data);
          console.log(data);
          $this.view(".page-modal");
        }
      });
    },
    getUrl:function(){
      var $index = '';
      if(typeof(URL.flag)!="undefined" && URL.flag){
        $index = URL.base + '/';
      }
      return $index;
    }
}

// 判斷是否為JSON
function isjson(obj,callback){
    var isjson =false;
    try{
        json = JSON.parse(obj);
        if(typeof(callback)!="undefined"){
          callback = json;
        }
        isjson = true;
    }catch (e){
        isjson = false;
    }

    // var isjson = typeof(obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length; 
    return isjson;
}

var DB = {
    connect:"",
    init:function(){
        var filePath = location.href.substring(0, location.href.indexOf("index.html"));
        var path = filePath + "jpFestival.mdb";
        path = path.substring(8);
        var conn = new ActiveXObject("ADODB.Connection");
        conn.Open("DBQ="+path +";DRIVER={Microsoft Access Driver (*.mdb)};"); 
        this.connect = conn;
    },
    select:function(sql){
        var conn = this.connect;
        conn.open;
        var rs = new ActiveXObject("ADODB.Recordset");
        rs.open(sql, conn);
        while(!rs.eof){
            console.log(rs.Fields("ID"));
            rs.moveNext;
        }
        rs.close();
        rs = null;
        conn.close();
    }
}
// DB.init();
// DB.select("SELECT * FROM EventTable");

var PRODUCT = {
    listRow : function(row){
        var inner_html = '<li class="porduct-li"><div class="porduct-con">';
        inner_html += '<div class="index2-img"><a data-toggle="modal" href="#Event'+row.regNo+'" "><img src="../images/'+row.img+'" realsrc="../images/'+row.img+'"></a></div>';
        inner_html += '<div class="porduct-topic"><a data-toggle="modal" href="#Event'+row.regNo+'">'+row.title+'</a></div>';
        inner_html += '<div class="pop-s index2-number">'+ row.regNo +'</div>'
        inner_html += '<div class="porduct-name">'+row.category+'</div>';
        inner_html += '<div class="pop-s index2-date"><i class="iconfont icon-rili"></i><span>'+row.date+'</span></div>';
        inner_html += '<div class="pop-s index2-time"><i class="iconfont icon-33"></i><span>'+row.time+'</span></div>';
        inner_html += '<div class="pop-s index2-address"><i class="iconfont icon-address"></i><span>'+row.venue+'</span></div>';
        inner_html += '<div class="index2-a"><a data-toggle="modal"   href="#Event'+row.regNo+'" "><i class="iconfont icon-add1"></i></a></div>';
        inner_html += '</div></li>';
        return inner_html;
    },
    sortDate : function( list , sort ){

        return list.sort(function(a, b){
            var dateS1 = a.date.split("-");
            var dateS2 = b.date.split("-");
            var date1 = new Date(dateS1[0]);
            var date2 = new Date(dateS2[0]);
            // console.log(date1.getTime() + " - " + date2.getTime());

            if(sort=='asc'){
                return date1.getTime() - date2.getTime();
            }else{
                return date2.getTime() - date1.getTime();
            }
            
        });
    },
    toArray : function(list){
        var dataList = [];
        for (var i = 0; i < list.length; i++) {
            var resource = list[i];

			
			var title_ele = resource.getElementsByTagName('title')[0];
            var date_ele = resource.getElementsByTagName('date')[0];
            var time_ele = resource.getElementsByTagName('time')[0];
            var position_ele = resource.getElementsByTagName('position')[0];
            var link_ele = resource.getElementsByTagName('link')[0];
            var img_ele = resource.getElementsByTagName('img')[0];
            var category_ele = resource.getElementsByTagName('category')[0];
            var venue_ele = resource.getElementsByTagName('venue')[0];
            var subtitle_ele = resource.getElementsByTagName('description')[0];
            var organiser_ele = resource.getElementsByTagName('organiser')[0];
            var district_ele = resource.getElementsByTagName('district')[0];
            var cm_ele = resource.getElementsByTagName('cm')[0];

            var title = title_ele.textContent || title_ele.text;
            var date = date_ele.textContent || date_ele.text;
            var time = time_ele.textContent || time_ele.text;
            var position = position_ele.textContent || position_ele.text;
            var link = link_ele.textContent || link_ele.text;
            var category = category_ele.textContent || category_ele.text;
            try{
                // console.log(category_ele.getAttributeNode("value").nodeValue);
                var category_value = category_ele.getAttributeNode("value").nodeValue;
            }catch(e){
                category_value = "";
            }
            
            var img = img_ele.textContent || img_ele.text;
            var venue = venue_ele.textContent || venue_ele.text;
            try{
                // console.log(category_ele.getAttributeNode("value").nodeValue);
                var venue_value = venue_ele.getAttributeNode("value").nodeValue;
            }catch(e){
                venue_value = "";
            }

            var subtitle = subtitle_ele.textContent || subtitle_ele.text;

            var organiser = organiser_ele.textContent || organiser_ele.text;
            try{
                var district = typeof(district_ele)!="undefined" && district_ele!=null ? ( district_ele.textContent || district_ele.text ) : "";
            }catch(e){
                district = "";
            }
            try{
                var cm = typeof(cm_ele)!="undefined" && cm_ele!=null ? ( cm_ele.textContent || cm_ele.text ) : "";
            }catch(e){
                cm = "";
            }
            
            var regNo = resource.getAttributeNode("regNo").nodeValue;

            dataList[i] = {
                regNo:regNo,
                title:title,
                date:date,
                time:time,
                position:position,
                category:category,
                category_value:category_value,
                img:img,
                venue:venue,
                venue_value:venue_value,
                organiser:organiser,
                description:subtitle,
                link:link,
                district:district,
                cm:cm
              };

        };
        return dataList;
    },
    fliterDate:function( list , showTady ){
        var dataList = [];
        for (var i = 0; i < list.length; i++) {
            var dateS = list[i].date.split("-");
            var time_list;
            if(list[i].time=="All Day" || list[i].time=="全日" || list[i].time=="終日"){
                time_list = "0:00:00 - 23:59:59";
            }else{
                time_list = list[i].time;
            }
            var timeS = time_list.split("-");

            var date1 = typeof(dateS[1])!="undefined" ? dateS[1] : dateS[0];
            var time1 = typeof(timeS[1])!="undefined" ? timeS[1] : timeS[0];
            
            var date_now = new Date();
            var date_end = new Date(date1 + " " + time1);

            var date_s = new Date(dateS[0] + " 0:0:0");
            var date_e = new Date(date1 + " 0:0:0");

            if(date_now.getTime() <= date_end.getTime()){
                dataList.push(list[i]);
            }else if(date_s.getTime() == date_e.getTime()){
                if( typeof(showTady) !="undefined" && !showTady){

                }else{
                    // 當開始時間與結束時間相同時 加1天
                    var date_t =  date_end.setDate(date_end.getDate()+1);  
                    if(date_t>=date_now.getTime()){
                        dataList.push(list[i]);
                    }
                }
                
            }
        }

        return dataList;
    },
    filterCategory:function(category){
        category = category=='F B' ? 'F&B' : category;
        category = category=='ARTS CRAFTS' ? 'ARTS & CRAFTS' : category;
        category = category=='SEMINAR EDUCATION' ? 'SEMINAR & EDUCATION' : category;
        return category;
    },
    setSELECT:function(category, objSelect){
        objSelect.find("option").removeAttr("selected", false);
        objSelect.find("option[value='"+category+"']").attr("selected",true);       
    },
    search:function(dataList, category, venue, date, keyword){
        var self = this;
        var rs = self.searchByCategory(dataList, category);

        var rs2 = [];
        if(venue!=0){
            try{
                venue = venue.trim();
            }catch(e){
                venue = myTrim(venue);
            }

            var patt_venue = new RegExp(venue, "gi");
            // console.log( patt1.test(rs3[i].title) );
            for (var i = 0; i < rs.length; i++) {
                var flag_venue = patt_venue.test(rs[i].venue_value) || rs[i].venue_value==venue;
                if(flag_venue){
                  rs2.push(rs[i]);
                }
            }
        }else{
            rs2 = rs;
        }

        var rs3 = [];
        if(date!=""){

            for (var i = 0; i < rs2.length; i++) {
                var dateS = rs2[i].date.split("-");
                var dateS_end = dateS[1] ? dateS[1] : dateS[0];
                var date1 = new Date(date + " 0:0:0");

                if( isNaN(date1.getDate()) ){
                    date = date.replace(/-/g, '/');
                    // console.log(date);
                    date1 = new Date(date + " 0:0:0");
                }
                var date_start = new Date(dateS[0] + " 0:0:0");
                var date_end = new Date(dateS_end + " 23:59:59");
                // console.log(date + "|" + date1.getDate() + "|" + date_start.getDate());
                // (date2.getFullYear() == date1.getFullYear())  && date2.getMonth() == date1.getMonth() && date2.getDate() == date1.getDate()
                if( date1.getTime()>= date_start.getTime() && date1.getTime() <=date_end.getTime() ){
                    rs3.push(rs2[i]);
                }
            }
        }else{
            rs3 = rs2;
        }

        var rs4 = [];
        if(keyword!=""){
            try{
                keyword = keyword.trim();
            }catch(e){
                keyword = myTrim(keyword);
            }

            for (var i = 0; i < rs3.length; i++) {
            
                var patt1 = new RegExp(keyword, "gi");
                // console.log( patt1.test(rs3[i].title) );
                var flag_title = patt1.test(rs3[i].title);
                var flag_regNo = patt1.test(rs3[i].regNo) || rs3[i].regNo==keyword;

                var flag_description = patt1.test(rs3[i].description);
                var flag_organiser = patt1.test(rs3[i].organiser);
                if( flag_title || flag_regNo || flag_description || flag_organiser ){
                    rs4.push(rs3[i]);
                }
          }
        }else{
            rs4 = rs3;
        }
        return rs4;
    },
    searchByCategory:function(dataList, category){
        var rs = [];
        if(category!=0 && category!=null){

            category = PRODUCT.filterCategory(category);

            for (var i = 0; i < dataList.length; i++) {

                var patt1 = new RegExp(category, "gi");
                // console.log( patt1.test(rs3[i].title) );
                var flag_category = patt1.test( dataList[i].category_value ) || dataList[i].category_value==category;

                if( flag_category ){
                    rs.push(dataList[i]);
                }
            }
        }else{
            rs = dataList;
        }
        return rs;
    }
}

var lanren = {
    _default:12, //默认显示图片个数
    _loading:4,  //每次点击按钮后加载的个数
    _dataList: [],
    _content: [],
    init:function($list){
      var self = this;
      self._content = [];
      if(typeof($list)!="undefined"){
        self._dataList = $list;
      }else{
        self._dataList = [];
      }

      $(".product-ent ul.porduct-list .read").remove();
      $(".product-ent ul.porduct-list").html("");
      for (var i = 0; i < self._default; i++) {

        if( typeof(self._dataList[i])=="undefined"){
          break;
        }
        var inner_html = PRODUCT.listRow(self._dataList[i]);
        $(".product-ent ul.porduct-list").append(inner_html);
      };
      for(var i=self._default; i<self._dataList.length; i++){
        self._content.push(self._dataList[i]);
      }

      $("#no-result").hide();
      if(self._dataList.length == 0){

        $("#no-result").removeClass("hide");
        $("#no-result").show();
      }

      if(self._dataList.length <=12){
        $(".pro-more").hide();
      }else{
        $(".pro-more").show();
      }
      $(".product-ent .hide").html("");
    },
    loadMore:function(){
      var self = this;
      for(var i =0;i<lanren._loading;i++){

        var target = self._content.shift();
        if(!target){
          break;
        }        
        var inner_html = PRODUCT.listRow(target);
        $(".product-ent ul.porduct-list").append(inner_html);
      }
    }
  }

function getQueryString(name, $url) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    if( typeof($url) != "undefined" ){
        var queryStr,value; 
        var num=$url.indexOf("?"),
           $url=$url.substr(num+1); //取得所有参数   stringvar.substr(start [, length ]

           var arr=$url.split("&"); //各个参数放到数组里
           for(var i=0;i < arr.length;i++){
            num=arr[i].indexOf("=");
            if(num>0){
                queryStr=arr[i].substring(0,num);
                value=arr[i].substr(num+1);
                this[queryStr]=value;
            }
        }
        return typeof(this[name]) != "undefined" ? this[name] : null;
    }else{
       var r = window.location.search.substr(1).match(reg);
       if (r != null) return unescape(r[2]); return null;
    }
    
}
function myTrim(x) {
    return x.replace(/^\s+|\s+$/gm,'');
}

function showLangContent($url){
	var loc = window.location.href;
	var fileNamePart = loc.substr(0,loc.lastIndexOf('/') -6);
	console.log(fileNamePart);
	$url = fileNamePart + $url;
	
    try{
        var url = new URL($url);
        var Event = url.searchParams.get("Event");
        var Lang =  url.searchParams.get("Lang");
    }catch(e){
        Event = getQueryString("Event", $url);
        Lang = getQueryString("Lang", $url);
    }
    
    var sb = "#Event";
    // console.log(Event);
    var strFinal = sb.concat(Event);
    // console.log($url + " "+strFinal + " .pop-pro-con");
    $(".modal.in").modal("hide");
    $.ajaxSetup ({ cache: false });
    $url = $url + " "+strFinal + " .pop-pro-con";
	
	console.log($url);

    $("#Eventlanguage .show-content").load($url);
    $("#Eventlanguage").modal("show");
}
