/*-------------------------------------------------
title       : main
Author      : plani
Last date : 2020-12-16
-------------------------------------------------*/
var slider;
$(function() {
    setTimeout(function() {
		$('body').addClass('active');
	}, 50);
    
    // 비주얼
    $visual = $('#visual .list');
    $visual.bxSlider  ({
    	autoStart : false,
		auto : true,
		speed : 1000,
		pause : 7000,
		mode: 'fade',
        pager : false,
        autoControls : false,
        autoHover  : true,
		randomStart:false,
        onSliderLoad : function(currentIndex) {
            $visual.find('li').eq(currentIndex + 1).addClass('active');
        },
        onSlideBefore   : function($slideElement, oldIndex, newIndex) {
            $visual.find('li').removeClass('active');
            $visual.find('li').eq(newIndex + 1).addClass('active');
        }
    });
    
    // 최신뉴스
    var latestCont = $(".latest_news .latest_list > li").length;
    /*$('.latest_news .latest_list').bxSlider ({
		 controls        : false,
	     autoControls    : true,
	     auto            : true,
	     autoHover       : true,
	     pager: false
    });    */
    var $latest = $('.latest_news .latest_list ');
	if (latestCont > 1 ) {
		$latest.bxSlider ({
			auto : true,
			autoControls: true,
			autoStart : true,
			autoHover : true,
			speed : 800,
			pause : 4000,
			//mode: 'fade',
	        maxSlides   : 1,
	        moveSlides  : 1,
			controls: true,
			infiniteLoop: false,
			pager: false,
		    touchEnabled : (navigator.maxTouchPoints > 0),
		    ariaHidden : false,
	    });
	}

	$('.latest_news .latest_list li a').focusin(function () {
        $('.latest_news .latest_list li').removeClass('focus');
        $(this).parents('li').addClass('focus');
        $latest.stopAuto();
        if($('.latest_news .latest_list li:first-child').hasClass('focus')){
        	$latest.css('transform', 'translate3d(0, 0px, 0px)');
         }
     });
	
    // 공지사항, 입찰정보, 채용공고, 과제공모
	$(".tabnews_area .tab_tit a").click(function() {
		$(".tabnews_area .tab_tit a").removeClass("active");
		$(this).addClass("active");
		$(".news_cont").hide();
		var activeDetail = $(this).attr("href");
		$(activeDetail).fadeIn();
		return false;
	});
 
	// 홍보, 팝업    
	var popupcount = $(".publicity_slide  > li").length;
	$('.popup_area .count').text(popupcount);	
	
	$popup = $('.publicity_slide');
	$popup.bxSlider    ({
		autoStart : true,
		auto : true,
		autoControls: true,
		speed : 800,
		pause : 4000,
		mode: 'fade',
		maxSlides   : 1,
        moveSlides  : 1,
		pager: true, 
		controls: true,
		infiniteLoop: true,
		autoControls: true,
        ariaHidden : false,
		touchEnabled : navigator.maxTouchPoints > 0,
		pagerType: 'short',
    });
    
	 /*$(window).on('load resize', function() {
		 if ($(window).width() > 1200 && popupcount > 2){
			$popup.reloadSlider ({
				autoStart : true,
    			auto : true,
    			speed : 1000,
    			pause : 4000,
    	        maxSlides   : 1,
    	        moveSlides  : 1,
    			pager: true, 
    			controls: true,
    			infiniteLoop: true,
    			autoControls: true,
    	        ariaHidden : false,
    			touchEnabled : navigator.maxTouchPoints > 0,
    			pagerType: 'short',
        	})
        }
		 if ($(window).width() <= 1200 && $(window).width() > 520 ){
			$popup.reloadSlider ({
				autoStart : true,
    			auto : true,
    			speed : 1000,
    			pause : 4000,
    	        maxSlides   : 1,
    	        moveSlides  : 1,
    			pager: true, 
    			controls: true,
    			infiniteLoop: true,
    			autoControls: true,
    	        ariaHidden : false,
    			touchEnabled : navigator.maxTouchPoints > 0,
    			pagerType: 'short',
        	})
        }
		else if ($(window).width() <= 520){
			$popup.reloadSlider ({
				autoStart : true,
    			auto : true,
    	        maxSlides   : 1,
    	        moveSlides  : 1,
    			pager: true, 
    			controls: true,
    			infiniteLoop: true,
    			autoControls: true,
    	        ariaHidden : false,
    			touchEnabled : navigator.maxTouchPoints > 0,
    			pagerType: 'short',
            });
        }
    });*/
	
	
	
	// 포럼 및 행사
    $forum = $('.second_forum');
    $forum.bxSlider    ({
        pager           : false,
        autoHover       : true,
		infiniteLoop     : false,
		touchEnabled : true,
        maxSlides       : 4,
        minSlides       : 1,
        moveSlides      : 1,
        ariaHidden : false,
    }).destroySlider();
    
	 $(window).on('load resize', function() {
		if ($(window).width() <= 1110 && $(window).width() > 630){
        	$forum.reloadSlider ({
				mode				: 'horizontal',
                pager           : false,
    			controls        : true,
                autoHover     : true,
        		infiniteLoop    : false,
        		touchEnabled : true,
                maxSlides       : 2,
                minSlides        :  2,
                moveSlides      : 1,
    	        ariaHidden : false,
        	})
        }
		else if ($(window).width() <= 630){
			$forum.reloadSlider ({
        		mode: 'fade',
                pager           : false,
    			controls        : true,
                autoHover       : true,
        		infiniteLoop     : false,
        		touchEnabled : true,
                maxSlides       : 1,
                minSlides       :  1,
                moveSlides      : 1,
            });
        }
        else {
        	$forum.destroySlider();
        	$forum.find('li').css('width', '');
        }
    });
	 
    //연구보고서, 정기간행물
    var $publication_tabTit = $('.publication_area .tab_tit a'),
    $publication_nav = $('.publication_nav a'),
    $publication_cont = $('.publication_cont'),
    $publication_slide = $('.list').length;
   
    
    $(".publication_area .tab_tit a").click(function() {
		$(".publication_area .tab_tit a").removeClass("active");
		$(this).addClass("active");
		$(".publication_area .tab_cont").removeClass("active").hide();
		var activeDetail = $(this).attr("href");
		$(activeDetail).addClass("active").fadeIn();
		$(activeDetail).find(".publication_nav li:first a").click()
		bxReInit();
		return false;
	});
	$(".publication_nav a").click(function() {
		$(".publication_nav a").removeClass("active").attr("title","");
		$(this).addClass("active").attr("title","선택된 메뉴");
		$(".publication_cont").removeClass("active").hide().attr("title","");
		var activeDetail = $(this).attr("href");
		$(activeDetail).addClass("active").fadeIn();
		bxReInit();
		
		// 간행물 수정에 따른 more버튼 링크 변경
		if(activeDetail == '#publication2_2') { // 뉴스레터
			$('#publication_link').attr('href', '/menu.es?mid=a10206010100');
		} else if(activeDetail == '#publication2_3') { // 연차보고서
			$('#publication_link').attr('href', '/menu.es?mid=a10201060000');
		} else if(activeDetail == '#publication2_4') { // KISTEP INI
			$('#publication_link').attr('href', '/menu.es?mid=a10203020000');
		}
		return false;
	});
	
    $publication = $('.tab_cont.active .active .list');
    $publication.bxSlider    ({
        pager           : false,
        autoHover       : true,
		infiniteLoop     : false,
		touchEnabled : true,
		ariaHidden : false,
        maxSlides       : 4,
        minSlides       : 1,
        moveSlides      : 1,
    }).destroySlider();

    $(window).on('load resize', function() {
    	if ($(window).width() <= 835 && $(window).width() > 425 ){
        	$publication.reloadSlider ({
                pager           : false,
                autoHover       : true,
        		infiniteLoop     : false,
        		touchEnabled : true,
        		slideWidth       :  275,
                maxSlides       : 4,
                minSlides       :  1,
                moveSlides      : 1,
    	        ariaHidden : false,
            });
        }
    	else if ($(window).width() <= 425){
        	$publication.reloadSlider ({
        		mode: 'fade',
                pager           : false,
                autoHover       : true,
        		infiniteLoop     : false,
        		touchEnabled : true,
                maxSlides       : 1,
                minSlides       :  1,
                moveSlides      : 1,
            });
        }
        else {
        	$publication.destroySlider();
        	$publication.find('li').css('width', '');
        }
    });

});
function bxReInit(){
	if ( $(window).width() <= 835 && $(window).width() > 425 ){
		try {
			$publication.destroySlider();
			} catch(e) {
		}
		$publication = $(".publication_cont.active .list");	
	    $publication.bxSlider    ({
	        pager           : false,
	        autoHover       : true,
			infiniteLoop     : false,
    		touchEnabled : true,
    		slideWidth       :  275,
	        maxSlides       : 4,
	        minSlides       : 1,
	        moveSlides      : 1
	    });
	} else if ($(window).width() <= 425){
		try {
			$publication.destroySlider();
			} catch(e) {
		}
		$publication = $(".publication_cont.active .list");	
    	$publication.bxSlider ({
    		mode: 'fade',
            pager           : false,
            autoHover       : true,
    		infiniteLoop     : false,
    		touchEnabled : true,
            maxSlides       : 1,
            minSlides       :  1,
            moveSlides      : 1
        });
    } else {
    	$publication.destroySlider();
    	$publication.find('li').css('width', '');
    }
}

