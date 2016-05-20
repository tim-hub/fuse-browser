var Observable=require('FuseJS/Observable');

var link=Observable("https://bing.com");
var historyItems="";
var currentPage=0;

 function gotoUrl(){
 	if(link.value.indexOf("https://") ===0 ){
 		
 	}else if(link.value.indexOf("http://") ===0){
 		
 	}else{
 		link.value="http://"+link.value;
 	}

 	gotoUrl(link.value);

    console.log("goto: "+link.value);


    currentPage=historyItems.length-1;
}


function gotoUrl(String url){
	webView.goto(url);
}

function goBack(){

	if(historyItems.length>=2){
		currentPage=historyItems.length-2;
		gotoUrl(historyItems[currentPage]);

	}

}



 module.exports = {
    onPageLoaded : function(res) {
         console.log("WebView arrived at "+ JSON.parse(res.json).url);
         
         historyItems.add(JSON.parse(res.json).url);
    },
    link:link,
    gotoUrl:gotoUrl
};