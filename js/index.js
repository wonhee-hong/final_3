$(document).ready(function(){
 
for(var i = 0; i < 680; i++){
		$(".background").append("<div class='lego1'number='" + i + "''></div>")
} 
for(var i = 0; i < 680; i++){
		$(".background").append("<div class='lego2'number='" + i + "''></div>")
} 	
for(var i = 0; i < 680; i++){
		$(".background").append("<div class='lego'number='" + i + "''></div>")
}  
		$( ".lego" ).on('click',function() {
         if ($(".lego2").css("display") == "none") {
          $( ".lego2" ).css("display","block")
        var number = $(this).attr("number");
      } 
 })
		$( ".lego" ).on('click',function() {
         if ($(".lego1").css("display") == "none") {
          $( ".lego1" ).css("display","block")
              console.log(this).attr("number");
         var number = $(this).attr("number");
      } 
 })
})


