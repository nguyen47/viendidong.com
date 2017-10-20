// JavaScript Document
$(document).ready(function() {

    $(window).load(function() {
				h_subVS();
        h_MainVS();
				setPos();
				
    });

    $(window).bind('orientationchange', function() {
				h_subVS();
        h_MainVS();
				setPos();
    });

    var cachedWidth = $(window).width();
    $(window).bind('resize', function() {
        var newWidth = $(window).width();
        if (newWidth !== cachedWidth) {
            cachedWidth = $(window).width();
		  		h_subVS();
          h_MainVS();
					setPos();
        }
    });

		//Header
		$(function () {
			$(window).scroll(function () {
				if ($(this).scrollTop() > 100) {
					$('header').addClass('bg-fix');
				} else {
					$('header').removeClass('bg-fix');
				}
			});
		});
		
		
		
		 // hide #back-top first
   // $("#Pagetop").hide();

    // fade in #back-top

    $('#Pagetop a').click(function() {
			
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
		


        //Height for sub visual
		var h_subVS = function() {
			var h_subvs = $("header").height();
			$('#Subvisual').css('padding-top', h_subvs);     // h_subvs
		}

        //Height for Mainvisual
        var h_MainVS = function() {
            var  w = $(window).width();
            var h_mainvs = $("header").height();
            if( w > 767){
                $('#Mainvisual').css('padding-top', h_mainvs);
            }else{
                $('#Mainvisual').css('padding-top',h_mainvs);
            }
                 
        }

	 /*Set position for sns*/
	 var setPos = function(){
		 	var h_window = $(window).height();
			 $(".social-list").css("top" , h_window/2);
		}
		
		// smooth scroll
		$(function() {
				var h_block_fixed = $(".block-fixed").height();
				
			$('.list-item-sp a[href*="#"]:not([href=#])').click(function() {
				$('.list-item-sp').hide();
				$('.panelBtnAboutus').removeClass('open');
				spmenu_aboutusflg = "close";
					if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
							var target = $(this.hash);
							target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
							if (target.length) {
									$('html,body').animate({
											scrollTop: target.offset().top - 136 - h_block_fixed -20
									}, 1000);
									return false;
							}
					}
			});
			
			$('.list-item-pc a[href*="#"]:not([href=#])').click(function() {
				spmenu_aboutusflg = "close";
					if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
							var target = $(this.hash);
							target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
							if (target.length) {
									$('html,body').animate({
											scrollTop: target.offset().top - 79 - h_block_fixed  - 20
									}, 1000);
									return false;
							}
					}
			});
		});

   


    // spmenu
    var spmenuflg = "close";
    $(".spMenu").click(function(e) {
        e.preventDefault();
        if (spmenuflg == "close") {
            $('.globalNavi').fadeIn("slow");
            $('.panelBtnIcon').addClass('open');
            spmenuflg = "open";
        } else {
            $('.globalNavi').fadeOut("slow");
            $('.panelBtnIcon').removeClass('open');
            spmenuflg = "close";
        }
    });
		
		
		
		var spmenu_aboutusflg = "close";
    $(".spMenu-Aboutus").click(function(e) {
        e.preventDefault();
        if (spmenu_aboutusflg == "close") {
            $('.list-item-sp').fadeIn("slow");
            $('.panelBtnAboutus').addClass('open');
            spmenu_aboutusflg = "open";
        } else {
            $('.list-item-sp').fadeOut("slow");
            $('.panelBtnAboutus').removeClass('open');
            spmenu_aboutusflg = "close";
        }
    });


    // Scroll button

    $('.btn-scroll img').click(function() {
        $('body,html').animate({
            scrollTop: ($('	#Content').offset().top)
        }, 800);
        return false;
    });


    // Tel link Mobile


    $(function() {
        var browser = navigator.userAgent;
        var touchDevice = browser.indexOf('iPhone') > 0 || browser.indexOf('iPad') > 0 || browser.indexOf('Android') > 0;

        if (!touchDevice) {
            jQuery(function($) {
                $('a[href*="tel:"]').click(function(event) {
                    event.preventDefault();
                });
            });
        }
    });



   


});




// Body IE8 
if (navigator.userAgent.match(/MSIE 8/) !== null) {
    $('body').addClass('bodyIE8');
}




    function show_box_mail() {
        $("#box_mail1").show();
        $("#username").focus();
        $("#bgpopupct").css({
            "display":"block"
        });
				var w_window =$(window).width();
				if(w_window < 768){
						var w_box_mail = w_window - 40;		
						var h_box_mail = $(window).height() -100;	
				}else{
					 var w_box_mail = 500;			
					 var h_box_mail = 500;
				}
				
        $("#box_mail").css({
            "background": "#1e8c16",
						"width": w_box_mail,
						"height": h_box_mail,
						"border": "medium none",
						"color": "#FFFFFF",
        "top": ($(window).height()-h_box_mail) / 2,
        "position": "fixed",
        "left": ($(window).width() - w_box_mail) / 2,
        "border-radius": "15px"
            
   		 })
			 
			  $(window).bind('resize', function() {
						if(w_window < 768){
								var w_box_mail = w_window - 40;		
								var h_box_mail = $(window).height() -100;	
						}else{
							 var w_box_mail = 500;			
							 var h_box_mail = 500;
						}
							var h_box_mail = $("#box_mail").height();
							$("#box_mail").css({
							    "background": "#1e8c16",
									"width": w_box_mail,
									"height": h_box_mail,
									"border": "medium none",
									"color": "#FFFFFF",
							"top": ($(window).height()-h_box_mail) / 2,
							"position": "fixed",
							"left": ($(window).width() - w_box_mail) / 2,
							"border-radius": "15px"
									
						 })
				});
        // "block" == $("#box_mail").css("display") ? (createCookie("boxmail", "1", 14400), $("#box_mail").hide()) : ($("#box_mail").show(), $("#username").focus());
    };
		
function showPopup(id) {
		$('#popup'+id).fadeIn('slow');
		
		var w_window = $(window).click();
			if(w_window < 768){
					var w_box_mail = w_window - 40;		
					var h_box_mail = $(window).height() -100;	
			}else{
				 var w_box_mail = 500;			
				 var h_box_mail = 500;
			}
		//centering  
		$("#popup" + id).css({
				"background": "#FFF",
				"width": w_box_mail,
				"height": h_box_mail,
				"position": "fixed",
				"left": ($(window).width()-w_box_mail) / 2,
				"top": ($(window).height()-h_box_mail) / 2,
				"z-index": '2',
				"display": 'block',
				"border-radius":'6px'
		});
		$(window).ready('resize', function () {
						if(w_window < 768){
								var w_box_mail = w_window - 40;		
								var h_box_mail = $(window).height() -100;	
						}else{
							 var w_box_mail = 500;			
							 var h_box_mail = 500;
						}
							//centering  
						$("#popup" + id).css({
								"background": "#FFF",
								"width": w_box_mail,
								"height": h_box_mail,
								"position": "fixed",
								"left": ($(window).width()-w_box_mail) / 2,
								"top": ($(window).height()-h_box_mail) / 2,
								"z-index": '2',
								"display": 'block',
								"border-radius":'6px'
						});
				});
		$("#bgpopup" + id).css({
				"width": '100%',
				"height": '100%',
				"background-color": '#111111',
				"opacity": '0.85',
				"position": 'fixed',
				"z-index": '1',
				"top": '0',
				"left": '0',
				"display": 'block'
		});
	}
	function hidepopup(id) {
		$('#popup' + id).fadeIn('slow');
		$("#popup" + id).css({
				"display": 'none'
		});
		$("#bgpopup" + id).css({
				"display": 'none'
		});
}