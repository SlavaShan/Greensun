
$(document).ready(function(){
  
  	$('.bxslider').bxSlider({
    nextSelector: '#slider-next',
 	prevSelector: '#slider-prev',
	captions: true,
    prevText: '<img src="assets/images/slider_left_arrow.png" height="173" width="55"/>',
    nextText: '<img src="assets/images/slider_right_arrow.png" height="173" width="55"/>'
	});
  


  	$(".dp_step2").mouseover(function() { 
  		$(".dp_text2").css('visibility','visible').show("fast");

  		$(".dp_step1").removeClass('dp_step_active1');
  		$(".dp_text1").css('visibility','hidden').hide("fast");
  		
  		$(".delivery_process_description").removeClass('d_arrow1');
  		$(".delivery_process_description").addClass('d_arrow2');

  	});

    $(".dp_step2").mouseout(function() { 
    	$(".dp_text2").css('visibility','hidden').hide("fast");

    	$(".dp_step1").addClass('dp_step_active1'); 
    	$(".dp_text1").css('visibility','visible').show("fast"); 

    	$(".delivery_process_description").addClass('d_arrow1');
    	$(".delivery_process_description").removeClass('d_arrow2');
    });


  	$(".dp_step3").mouseover(function() { 
  		$(".dp_text3").css('visibility','visible').show("fast");

  		$(".dp_step1").removeClass('dp_step_active1');
  		$(".dp_text1").css('visibility','hidden').hide("fast");;

  		$(".delivery_process_description").removeClass('d_arrow1');
  		$(".delivery_process_description").addClass('d_arrow3');

  	});

    $(".dp_step3").mouseout(function() { 
    	$(".dp_text3").css('visibility','hidden').hide("fast");;

    	$(".dp_step1").addClass('dp_step_active1'); 
    	$(".dp_text1").css('visibility','visible').show("fast"); 

    	$(".delivery_process_description").addClass('d_arrow1');
    	$(".delivery_process_description").removeClass('d_arrow3');
    });

  	$(".dp_step4").mouseover(function() { 
  		$(".dp_text4").css('visibility','visible').show("fast");

  		$(".dp_step1").removeClass('dp_step_active1');
  		$(".dp_text1").css('visibility','hidden').hide("fast");

  		$(".delivery_process_description").removeClass('d_arrow1');
  		$(".delivery_process_description").addClass('d_arrow4');

  	});

    $(".dp_step4").mouseout(function() { 
    	$(".dp_text4").css('visibility','hidden').hide("fast");

    	$(".dp_step1").addClass('dp_step_active1'); 
    	$(".dp_text1").css('visibility','visible').show("fast"); 

    	$(".delivery_process_description").addClass('d_arrow1');
    	$(".delivery_process_description").removeClass('d_arrow4');
    });

  
  	$(".dp_step5").mouseover(function() { 
  		$(".dp_text5").css('visibility','visible').show("fast");

  		$(".dp_step1").removeClass('dp_step_active1');
  		$(".dp_text1").css('visibility','hidden').hide("fast");

  		$(".delivery_process_description").removeClass('d_arrow1');
  		$(".delivery_process_description").addClass('d_arrow5');

  	});

    $(".dp_step5").mouseout(function() { 
    	$(".dp_text5").css('visibility','hidden').hide("fast");

    	$(".dp_step1").addClass('dp_step_active1'); 
    	$(".dp_text1").css('visibility','visible').show("fast"); 

    	$(".delivery_process_description").addClass('d_arrow1');
    	$(".delivery_process_description").removeClass('d_arrow5');
    });

   
  	$(".dp_step6").mouseover(function() { 
  		$(".dp_text6").css('visibility','visible').show("fast");

  		$(".dp_step1").removeClass('dp_step_active1');
  		$(".dp_text1").css('visibility','hidden').hide("fast");

  		$(".delivery_process_description").removeClass('d_arrow1');
  		$(".delivery_process_description").addClass('d_arrow6');

  	});

    $(".dp_step6").mouseout(function() { 
    	$(".dp_text6").css('visibility','hidden').hide("fast");

    	$(".dp_step1").addClass('dp_step_active1'); 
    	$(".dp_text1").css('visibility','visible').show("fast"); 

    	$(".delivery_process_description").addClass('d_arrow1');
    	$(".delivery_process_description").removeClass('d_arrow6');
    });

 
});






