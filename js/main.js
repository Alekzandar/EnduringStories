var currPage = 0;
var currTab="";


/**
Used to move between different div classes on index.html
Accepts: dive class name of page to be routed to

If on a "memory" page, runs new function that structures the memory page
**/
function changePage(currPage, newPage, memType){

  if(currPage == 'explain'){
    deExpandAll();
  }

   $('#'+currPage).fadeOut("10000");

   $('#'+newPage).css({'display':'block', 'opacity':'1.0'});


   if (memType != undefined){
       runMemPage(memType);
   }

}


/*This function expands the story tabs by adjusting the flex column size
much thanks to bootstrap xoxo

Accepts tabID, header ID, and text ID to adjust visibility
*/
function expandStory(tabID, hID, expID){

  console.log(currTab);

  //This elaborate system of checks and balances ensures that the wrong tabID
  // is not clicked
	if ((tabID != currTab) && ((currTab != "") && (currTab != "jc")) ){
		return;
	}

    //This is a really dumb work around but basically when I would change
    //currTab to "" in deExpandStory(), it would then run through
    //expandStory again, as clicking on the crossX button is technically
    //Also clicking on the entire column
    if (currTab == "jc"){
	     currTab = "";
	      return;
    }

   $('.expandedText').hide();
   $("h1").hide();

    $(tabID).removeClass("col-sm");
    $(tabID).addClass("col-6");
    currTab = tabID;
    $(expID).show();
    $(hID).show();
}

function deExpandStory(tabID, hID, expID){
    $('.expandedText').hide();
    $("h1").show();
    $(tabID).removeClass("col-6");
    $(tabID).addClass("col-sm");
    //Stands for "just clicked" not our lord and savior Jesus Christ
    currTab = "jc";
    //$(tabID).bind( "onclick", expandStory );

}

//Hard reset!
function deExpandAll(){
    console.log(currTab);
    if (currTab == ""){
      return;
    }
    else{
      $(currTab).removeClass("col-6");
      $(currTab).addClass("col-sm");
      $('.expandedText').hide();
      $("h1").show();

      //Reset!!!!!
      currTab = "jc";
    }

 }
