/*　アコーディオン　*/



$(".side-nav .sp-collapse").click(function(){
		if( $(this).next().css('display') == "none"){
				$(this).find("i").removeClass("fa-plus-circle");
				$(this).find("i").addClass("fa-minus-circle");
			}else{
				$(this).find("i").removeClass("fa-minus-circle");
				$(this).find("i").addClass("fa-plus-circle");
			};
});

$(function() {
	var width = $(window).width();
	
	if(width < 768){			
			
			$(".hidden-sp").css("display","none");
			$(".accordione-sp").hover(function(){
				$(this).css({"cursor":"pointer","pointer-events":"all"}); 
			});
			
				$(".show-defaul").css("display","block");
				$(".accordione-sp").click(function(){
					var width = $(window).width();
					if(width < 768){			
						if( $(this).next().css('display') == "none"){
							$(this).next().slideDown("medium");
							$(this).parent().find(".accordione-sp span i").removeClass("fa-arrow-circle-down ");
							$(this).parent().find(".accordione-sp span i").addClass("fa-arrow-circle-up");
						}else{
							$(this).next().hide("medium");
							$(this).parent().find(".accordione-sp span i").removeClass("fa-arrow-circle-up");
							$(this).parent().find(".accordione-sp span i").addClass("fa-arrow-circle-down ");
						};
					}	
			
		});
	}else{
			$(".hidden-sp").css("display","block");
			$(".accordione-sp").css({"cursor":"default","pointer-events":"none"}); 
		}
	
	$(window).resize(function() {
		var width = $(window).width();		
		if(width < 768){		
				
					$(".hidden-sp").css("display","none");
					$(".accordione-sp").hover(function(){
						console.log("a")
						$(this).css({"cursor":"pointer","pointer-events":"all"}); 
					});
				
					//$(".show-defaul").css("display","block");
					$(".accordione-sp").click(function(){
						var width = $(window).width();
						if(width < 768){			
							if( $(this).next().css('display') == "none"){
								$(this).next().slideDown("medium");
								$(this).parent().find(".accordione-sp span i").removeClass("fa-plus-circle");
								$(this).parent().find(".accordione-sp span i").addClass("fa-minus-circle");
							}else{
								$(this).next().hide("medium");
								$(this).parent().find(".accordione-sp span i").removeClass("fa-minus-circle");
								$(this).parent().find(".accordione-sp span i").addClass("fa-plus-circle");
							};
						}	
				
			});
		}else{
			$(".hidden-sp").css("display","block");
			$(".accordione-sp").css({"cursor":"default","pointer-events":"none"}); 
		}
		
	});
	
});

