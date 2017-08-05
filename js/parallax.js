/** 
 *  @file    parallax.js
 *  @author  Gang Luo
 *  @Last updated    09/01/2017  
 *  
 */

(function(){

  var parallax = document.querySelectorAll(".parallax"),
      speed = 0.3;
  if((navigator.userAgent.match(/Android/i))){}
  else{

	  	window.onscroll = function(){
	    [].slice.call(parallax).forEach(function(el,i){

	      var windowYOffset = window.pageYOffset,
	          elBackgrounPos = "0 " + (windowYOffset * speed) + "px";
	      
	      el.style.backgroundPosition = elBackgrounPos;

	    });
	  };
  }
 

})();