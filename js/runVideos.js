//Javascript for running the memory pages

//WARNING this should be made adaptive
var thenFiles =  ["https://s3.amazonaws.com/mining-memory/Costello_Then_MollyMaguires.mp4",
"https://s3.amazonaws.com/mining-memory/Costello_Then_Patches.mp4",
"https://s3.amazonaws.com/mining-memory/Costello_Then_School.mp4"];
var coalFiles = "";
var churchFiles = "";
var nowFiles = ["https://s3.amazonaws.com/mining-memory/Costello_Now_Industry.mp4"];

//This function should "load up" the videos for the desired memory
function runMemPage(memType){

  var videoArr;
  switch (memType){
    case 'then':
      videoArr = thenFiles.slice(0);
      break;
    case 'coal':
      videoArr = coalFiles.slice(0);
      break;
    case 'church':
      videoArr = churchFiles.slice(0);
      break;
    case 'now':
      videoArr = nowFiles.slice(0);
      break;
  }


  $(document).ready(function(){
    for(var i=0 ; i< videoArr.length ; i++) {
      $('<div class="carousel-item embed-responsive-item"> <video onClick="pausePlay(this)" class="embed-responsive-item"> \
       <source src="'+videoArr[i]+'" type="video/mp4"> \
       </video> <div class="carousel-caption"> </div>   </div>').appendTo('.carousel-inner');
      $('<li data-target=""#carouselExampleIndicators" data-slide-to="'+i+'"></li>').appendTo('.carousel-indicators')

    }
    $('.carousel-item').first().addClass('active');
    $('.carousel-indicators > li').first().addClass('active');
    $('#carouselxExampleIndicators').carousel();
  });


}


function pausePlay(id){
  if (id.paused){
    id.play();
  }
  else {
    id.pause();
  }

}
