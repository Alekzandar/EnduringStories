var pagesArr = ["introPage","explain", "menus","storyboard"]
var currPage = 0;
var currTab;



function changePage(){

   var pageDisp =  document.getElementById(pagesArr[currPage]);
  var  pageJQ = "#" + pagesArr[currPage];
   $(pageJQ).fadeOut("10000");

   currPage++; 
   pageDisp =  document.getElementById(pagesArr[currPage]);
   pageDisp.style.opacity = "1.0";
   pageDisp.style.display = "block"; 
   
}


/* This function will be useful for the button at the top of the "slidedown" menu
*/
function returnHome(){
   var pageDisp =  document.getElementById(pagesArr[currPage]);
   pageDisp.style.opacity = "0.0";
   pageDisp.style.display = "none"; 

   currPage = 0; 
   pageDisp =  document.getElementById(pagesArr[currPage]);
  var  pageJQ = "#" + pagesArr[currPage];
   $(pageJQ).fadeIn("10000"); 
   pageDisp.style.opacity = "1.0";
   pageDisp.style.display = "block"; 
}


/*This function expands the story tabs by adjusting the flex column size
much thanks to bootstrap xoxo
*/
function expandStory(tabID){
    $("h1").hide();
    if (currTab != undefined){
	$(currTab).removeClass("col-6");
	$(currTab).addClass("col-sm");
    }
 
    if( $(tabID).hasClass("col-sm")){
	$(tabID).removeClass("col-sm");
	$(tabID).addClass("col-6");
	currTab = tabID;
    }
    else{
	$(tabID).removeClass("col-6");
	$(tabID).addClass("col-sm");
    }


}

