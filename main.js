var pagesArr = ["introPage","explain", "menus","storyboard"]
var currPage = 0;



function changePage(){
   var pageDisp =  document.getElementById(pagesArr[currPage]);
   pageDisp.style.opacity = "0.0"; 

   currPage++; 
   pageDisp =  document.getElementById(pagesArr[currPage]);
   pageDisp.style.opacity = "1.0";
   

}

