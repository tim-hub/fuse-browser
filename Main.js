var Observable=require('FuseJS/Observable');

var link=Observable("https://bing.com");
var historyItems=Observable('https://bing.com');
var currentPage=0;




function gotoUrl(){
 	if(link.value.indexOf("https://") ===0 ){
 		
 	}else if(link.value.indexOf("http://") ===0){
 		
 	}else{
 		link.value="http://"+link.value;
 	}

    console.log("goto: "+link.value);
 	webView.goto(link.value);
    console.log(historyItems.length);
}




function goBack(){

	if(historyItems.length>=3){
		lastPage=historyItems.length-2;

        console.log("go back to: "+historyItems.getAt(lastPage));
		webView.goto(historyItems.getAt(lastPage));

        historyItems.remove(historyItems.getAt(lastPage+1)); 
	}else{

        console.log("go back but no history");
    }

    console.log(historyItems.length);

}



 module.exports = {
    historyItems:historyItems,
    link:link,
    onPageLoaded : function(res) {
        var loadedUrl=JSON.parse(res.json).url;
         console.log("WebView arrived at "+ loadedUrl );
         


         if(link.value!==loadedUrl){
            
            historyItems.add(loadedUrl);
            console.log(historyItems.length);
         }

          link.value=loadedUrl; //show url at bar

            
    },
    
    gotoUrl:gotoUrl,
    goBack:goBack
};