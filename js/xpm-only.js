(function () {
    console.log("xpm mode enabled.");
    $('.componentContainer *').not('.cycle-pager span, .cycle-prev, .cycle-next').unbind('click');
    $('.oHeroBanner .videoFrame').unbind('click');
    $('.oHeroBanner .videoButton').unbind('click');
    $('.oTable__table').removeClass('tablesorter');
    $(window).load(function(){    	
	    $('.slick-next').css('display','none');
	  	$('.slick-prev').css('display','none');
    });
})();