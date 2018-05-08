var currPage = 0;
var currTab=0;


/**
Used to move between different div classes on index.html
Accepts: dive class name of page to be routed to

If on a "memory" page, runs new function that structures the memory page
**/
function changePage(currPage, newPage, memNum){

   $('#'+currPage).fadeOut("10000");

   $('#'+newPage).css({'display':'block', 'opacity':'1.0'});
   
   if (memNum != undefined){
       //runMemPage(memNum);
   }
   
}


/*This function expands the story tabs by adjusting the flex column size
much thanks to bootstrap xoxo

Accepts tabID, header ID, and text ID to adjust visibility
*/
function expandStory(tabID, hID, expID){
    if (currTab != 0){
	return;
	//$(currTab).removeClass("col-6");
	//$(currTab).addClass("col-sm");
	//$(expID).show();
	//$(hID).show();
    }

   $('.expandedText').hide();
   $("h1").hide();
 
    if( $(tabID).hasClass("col-sm")){
	$(tabID).removeClass("col-sm");
	$(tabID).addClass("col-6");
	currTab = 1;
	$(expID).show();
	$(hID).show();
    }
    else{
	$(tabID).removeClass("col-6");
	$(tabID).addClass("col-sm");
    }
}

function deExpandStory(tabID, hID, expID){
    $('.expandedText').hide();
    $("h1").show();
    $(tabID).removeClass("col-6");
    $(tabID).addClass("col-sm");
    currTab = 0;

}



var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-placeholder', {
        width: 600,
        height: 400,
        videoId: '9WbCfHutDSE',
        playerVars: {
            color: 'white',
            playlist: '1ekZEVeXwek,23e702UuOFg'
        },
        events: {
            onReady: initialize
        }
    });
}


function initialize(){

    // Update the controls on load
    updateTimerDisplay();
    updateProgressBar();

    // Clear any old interval.
    clearInterval(time_update_interval);

    // Start interval to update elapsed time display and
    // the elapsed part of the progress bar every second.
    time_update_interval = setInterval(function () {
        updateTimerDisplay();
        updateProgressBar();
    }, 1000)

}

function nextVideo(){
    player.nextVideo();

}

function prevVideo(){
    player.previousVideo();

}
