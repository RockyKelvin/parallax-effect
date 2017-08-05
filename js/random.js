
/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/
/** 
 *  @file    random.js
 *  @author  Gang Luo
 *  @Last updated    09/01/2017  
 *  
 */
  
$(document).ready(function() {
//get list of divs
  var rand = $(".random");

  for(var i = 0; i < rand.length; i++){
      var target = Math.floor(Math.random() * rand.length -1) + 1;
      var target2 = Math.floor(Math.random() * rand.length -1) +1;

      rand.eq(target).before(rand.eq(target2));
  }

  var img = $(".img");
  var text=$(".text");
  for(var i = 0; i < rand.length; i++){
     
    if (i%2==0)
      text.eq(i).before(img.eq(i));
    else
      img.eq(i).before(text.eq(i));
  }

});


    
