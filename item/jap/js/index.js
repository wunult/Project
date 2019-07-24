$(document).ready(function() {
	
	var url_string = window.location.href;
	try{
		var url = new URL(url_string);
		var Event = url.searchParams.get("Event");
		var Lang =  url.searchParams.get("Lang");
	}catch(e){
		Event = getQueryString("Event");
		Lang = getQueryString("Lang");
	}
	
	var sb = "#Event";
	var strFinal = sb.concat(Event);
	//alert(Lang);
	//strFinal = sb.concat(strFinal)
	$(strFinal).modal('show');
	
	$(".change").click(function(){
		$('#changeMe').attr('src', this.src);
        //alert("The paragraph was clicked.");
    });

    try{
        // index Events列表設置
    	var nodes = getXMLNode('indexeven.xml', "event");
    	
    	var event_html = '<ul>';
        var list = PRODUCT.toArray(nodes);
        list = PRODUCT.sortDate(list, 'asc');
        list = PRODUCT.fliterDate(list, false);
        
        var indexNum = list.length >10 ? 10 : list.length;


    	for (var j = 0; j < indexNum; j++) {
            var resource = list[j];

            var inner_html = '<li>';
    		
            inner_html += "<div class='index2-topic'><a href='#Event"+resource.regNo+"' data-toggle='modal'>"+resource.title+"</a></div>";
    		
    	   inner_html += '<div class="index2-s index2-date"><i class="iconfont icon-rili"></i><span>'+resource.date+'</span></div>';
            inner_html += '<div class="index2-s index2-time"><i class="iconfont icon-33"></i><span>'+resource.time+'</span></div>';
            inner_html += '<div class="index2-s index2-address"><i class="iconfont icon-address"></i><span>'+resource.venue+'</span></div>';
            inner_html += '<div class="index2-a"><a href="#Event'+resource.regNo+'  " data-toggle="modal"><i class="iconfont icon-add1"></i></a></div>';
            inner_html += '</li>';
            event_html += inner_html;
        }
        event_html += '</ul>';
        $("#index2-list").html(event_html);
    }catch(e){
        
    }
    // Announcement內容設置
    try{
        nodes = getXMLNode('announcement.xml', "content");
        if(nodes.length>0){
            event_html = '<ul>';
            for (var j = 0; j < nodes.length; j++) {
                var resource = nodes[j];
                var title_ele = resource.getElementsByTagName('title')[0];
                var date_ele = resource.getElementsByTagName('date')[0];
                
                var title = title_ele.textContent || title_ele.text;
                var date = date_ele.textContent || date_ele.text;

                var inner_html = '<li>';
                inner_html += "<div class='index3-date'>"+date+"</div>";
                inner_html += '<div class="index3-word">'+title+'</div>';
                inner_html += '</li>';
                event_html += inner_html;
            }
            event_html += '</ul>';
            $(".index3-list").html(event_html);
        }
    	
    }catch(e){
        // console.log(e);
    }
});
	