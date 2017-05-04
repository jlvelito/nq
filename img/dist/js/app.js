

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
global.YouTubePlayer;
global.onYouTubePlayerAPIReady;
global.xpm = 0;

$(document).ready(function() {
    var player;

  setTimeout(function() {

        $('body').animate({scrollTop: 0},1);
      }, 1);
  

  $('.oAngleRibbon__cto').each(function(){
    var widthWin = $(window).width();
    if(widthWin>=993){
      var heightPar = $(this).parent().find('.oAngleRibbon__content').height() + 54;
      $(this).css('min-height',heightPar+'px');
    }else{
      $(this).css('min-height','10px');
    }
  });

  $('.container-fluid .parent-row ul li.active').on('click',function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop: 0},300);
  });

  /* table sorter */

  $(window).load(function(){

    $('#sticky_showed .child-row div, #sticky_show .child-row div').find('.item').each(function(){
      var indexar = $(this).index();
      $(this).find('a').addClass('item-'+indexar);
    });

    $('.cycle-pager').each(function(){
      var widthpager = $(this).width();
      var widthchildrens = 0;
      $(this).children().each(function(){
        var thiswidth = $(this).width();
        widthchildrens = widthchildrens + thiswidth;
        if(widthpager<widthchildrens){
          $(this).parent().children().addClass('more');
          $(this).parent().addClass('more');
        }else{
          $(this).parent().removeClass('more');
        }
      });
    });

    $(window).resize(function(){
          $('.cycle-pager').each(function(){
            var widthpager = $(this).width();
            var widthchildrens = 0;
            $(this).children().each(function(){
              var thiswidth = $(this).width();
              widthchildrens = widthchildrens + thiswidth;
              if(widthpager<widthchildrens){
                $(this).parent().children().addClass('more');
                $(this).parent().addClass('more');
              }else{
                $(this).parent().children().removeClass('more');
                $(this).parent().removeClass('more');
              }
            });
          });
    });

    /* scroll on anchor enter */
		if(window.location.hash) {
  
        var elem = window.location.hash.replace('#', '');
        
        var elemhi = $('[id="' + elem + '"]').offset().top; 
        var menhi = $('#sticky_show').height();
        if(elem) {
             $('body').animate({
              scrollTop: elemhi - menhi - 67
             },200);
        }
		}

    /* scroll on anchor enter */

 



    $('.child-row .item a[href*=#]').click(function(event){
        var url = $(this).attr('href');
        var url2 = url.slice(1);

        if(url.slice(0, 1) == "#"){
          event.preventDefault();
        }
          
          // $('.item').find('a').removeClass('active');
          // var indexado = $(this).parent().index();
          // $('.item-'+indexado).addClass('active');
		  
		  var heightSticked = $('#sticky_show').height();

          if (url.slice(0, 1) == "#") {
                var distance = parseInt($('[id="' + url2 + '"]').offset().top);
                $('body,html').animate({ 'scrollTop': distance-heightSticked-63},300);
            }
          
          // $(this).addClass('active');

    });
	
	

	
	

    $('.tablesorter').tablesorter();
      
  });
  
  $('.oImageSlider').each(function(){
    var h2width = $(this).find('h2').width() + 80;
    if(h2width >= 220){
      $(this).find('.backtopGround').css('border-width','490px '+h2width+'px 0 0');
    }
  });



 $(window).load(function(){

  if($('#sticky_showed').length >0){
    var ofsetsticky = $('#sticky_showed').offset().top;
    var heightstick = $('#sticky_showed').height();
    var ofsetstick = ofsetsticky + heightstick;
    var ofsetstickede = $(window).scrollTop();
  }


  if(ofsetstickede >= ofsetstick){
        $('#sticky_show').addClass('stickeded');
      }else{
        $('#sticky_show').removeClass('stickeded');
        $('#sticky_show').css('visibility','visible');
      }



       

    $(window).scroll(function(){
      var ofsetsticked = $(this).scrollTop();
      if(ofsetsticked >= ofsetstick){
        $('#sticky_show').addClass('stickeded');
      }else{
        $('#sticky_show').removeClass('stickeded');
        $('#sticky_show').css('visibility','visible');
      }
    })


 });


    $('.oImageSlider').each(function(){
      var current = $(this).data("cycle.opts").currSlide+1;
        var altodesc3 = $(this).find('.oImageSlider__image').height();
        var altos = [];
        var alto;
        $(this).find('.oImageSlider__description').each(function(){
          var altodesc = $(this).height();
          altos.push(altodesc); 
          alto = Math.max.apply(Math,altos);
        });
        $(this).css('height', 30+altodesc3+alto+20+'px');
     });

    /* table sorter */
  $('.oTable__wrapper').each(function(){
    var ancho = $(this).width();
    var ancho2 = $(this).children('table').width();
    if(ancho < ancho2){
      $(this).parent().addClass('fader');
      $(this).parent().append('<div class="fade__after"></div>');
    }else{
      $(this).parent().removeClass('fader');
      $(this).parent().children('.fade__after').remove();
    }
    $(this).scroll(function(){
      scrolleado = $(this).scrollLeft();
      // $(this).children('.fade__after').css('right','-'+scrolleado+'px');
    });




  });



  $(window).resize(function(){

       $('.oAngleRibbon__cto').each(function(){
    var widthWin = $(window).width();
    if(widthWin>=993){
      var heightPar = $(this).parent().find('.oAngleRibbon__content').height() + 10;
      $(this).css('min-height',heightPar+'px');
    }else{
      $(this).css('min-height','10px');
    }
  });

     $('.oImageSlider').each(function(){
      var current = $(this).data("cycle.opts").currSlide+1;
        var altodesc3 = $(this).find('.oImageSlider__image').height();
        var altos = [];
        var alto;
        $(this).find('.oImageSlider__description').each(function(){
          var altodesc = $(this).height();
          altos.push(altodesc); 
          alto = Math.max.apply(Math,altos);
        });
        $(this).css('height', 30+altodesc3+alto+20+'px');
     });


     $('.oTable__wrapper').each(function(){
    var ancho = $(this).width();
    var ancho2 = $(this).children('table').width();
    if(ancho < ancho2){
      $(this).parent().addClass('fader');
      $(this).parent().append('<div class="fade__after"></div>');
    }else{
      $(this).parent().removeClass('fader');
      $(this).parent().children('.fade__after').remove();
    }
    $(this).scroll(function(){
      scrolleado = $(this).scrollLeft();
      /*$(this).children('.fade__after').css('right','-'+scrolleado+'px');*/
    });
  });
  });

  createModal($('.oImageBox')); // ImageBox modal
  createModal2($('.oImageSlider')); // ImageBox modal
  createModal_Video_p($('.oPromo')); //Promo component with video
  createModal_Video_b($('.videoButton')); //Promo component with video
  createModal_Video_v($('.oVideoBox').not('.fw')); // Video boxes
  createmodaliframe();

  // if(xpm != 0){ disableModals(); }

  hoverChange();
  slickSlider(); //heroBanner

  $('.uEyebrowTitle').each(function(){
      var animatebrow = $(this).width();
      $(this).parent().children('.brow').css('margin-left',animatebrow+22);
  });

  $(window).resize(function(){
    $('.uEyebrowTitle').each(function(){
      var animatebrow = $(this).width();
      $(this).parent().children('.brow').css('margin-left',animatebrow+22);
    });
  });


});

function disableModals() {
  $('.componentContainer *').unbind('click');
}


function slickSlider() {
  var $heroBanner = $('.oHeroBanner__slider');


if( window.self !== window.top ){

}else{

  $(window).resize(function() {
    var lastCurrentSlide = $heroBanner.find('.slick-active').attr('data-slick-index');
    $heroBanner.slick('unslick');
    $heroBanner.slick({
      mobileFirst: true,
      dots: true,
      lazyLoad: 'ondemand',
      draggable: false,
      accessibility: false,
      adaptiveHeight: true
    });
    $heroBanner.slick('slickGoTo', lastCurrentSlide, true);
  });

};

  $heroBanner.on('init', function(e){
    var $current = $('.slick-current');
    var video = $current.find('video')[0];
    if(video){
      video.onloadeddata = function(){
        video.play();
      }
    }
  });

  $heroBanner.slick({
    mobileFirst: true,
    dots: true,
    lazyLoad: 'ondemand',
    draggable: false,
    accessibility: false,
    adaptiveHeight: true
  });


  $heroBanner.on('afterChange', function(e, slick, currentSlide, nextSlide){
    var $current = $(e.currentTarget);
    var $currentVideo = $( $current.find('.oHeroBanner__slide')[currentSlide + 1] );
    var $allVideos = $('.oHeroBanner__video');

    if ($allVideos.length > 0) {
      $allVideos.each(function(index, el) {        if($allVideos[index].currentTime){
          $allVideos[index].currentTime=0;
        }
      });
    }

    if ($currentVideo.find('video').length > 0 ) {
      $currentVideo.find('video').get(0).play();
    }
  });
}

function hoverChange(){
  $('.aHeadline a, .aHeading a').hover(function(){
    var parental = $(this).parent().parent().parent();
    parental.find('.mImage a').addClass('hov');
    parental.find('.blocker span').addClass('hov');
  },function(){
    var parental = $(this).parent().parent().parent();
    parental.find('.mImage a').removeClass('hov');
    parental.find('.blocker span').removeClass('hov');
  })
  $('.blocker span').hover(function(){
    var parental = $(this).parent().parent().parent().parent().parent();
    parental.find('.mImage a').addClass('hov');
    parental.find('.aHeadline a').addClass('hov');
    parental.find('.aHeading a').addClass('hov');
  },function(){
    var parental = $(this).parent().parent().parent().parent().parent();
    parental.find('.mImage a').removeClass('hov');
    parental.find('.aHeadline a').removeClass('hov');
    parental.find('.aHeading a').removeClass('hov');
  })
}

function oModalVideoBoxPlay() {
  var $modal = $('.modal');
  var $videoBox = $modal.find('.oVideoBox');
  var $btnPlay = $videoBox.find('.oVideoBox mVideoContainer');
  var $video = $('.oVideoBox mVideoContainer video').get(0);
  $btnPlay.on('click', function (e) {
    var $video = $(e.target).get(0); //individual playing video
    if ($video.paused) {
      $video.play();
    } else {
      $video.pause();
    }
  });
}

function oVideoBoxPlay() {
  var $videoBox = $('.oVideoBox');
  var $btnPlay = $videoBox.find('.oVideoBox mVideoContainer');
  var $video = $('.oVideoBox mVideoContainer video').get(0);
  $btnPlay.on('click', function (e) {
    var popup = $(e.target).parent().parent().parent().hasClass('m33');
    if(popup == 0){
      var $video = $(e.target).get(0); //individual playing video
      if ($video.paused) {
        $video.play();
      } else {
        $video.pause();
      }
    }
  });
}

function oPromoVideoPlay() {
  var $videoBox = $('.oPromo mVideo');
  var $btnPlay = $videoBox.find('.oPromo mVideoContainer');
  var $video = $('.oPromo mVideoContainer video').get(0);
  $btnPlay.on('click', function (e) {
    var $video = $(e.target).get(0); //individual playing video
    if ($video.paused) {
      $video.play();
    } else {
      $video.pause();
    }
  });
}

function htmlSubstring(s, n) {
  var m, r = /<([^>\s]*)[^>]*>/g,
    stack = [],
    lasti = 0,
    result = '';

  //for each tag, while we don't have enough characters
  while ((m = r.exec(s)) && n) {
    //get the text substring between the last tag and this one
    var temp = s.substring(lasti, m.index).substr(0, n);
    //append to the result and count the number of characters added
    result += temp;
    n -= temp.length;
    lasti = r.lastIndex;

    if (n) {
      result += m[0];
      if (m[1].indexOf('/') === 0) {
        //if this is a closing tag, than pop the stack (does not account for bad html)
        stack.pop();
      } else if (m[1].lastIndexOf('/') !== m[1].length - 1) {
        //if this is not a self closing tag than push it in the stack
        stack.push(m[1]);
      }
    }
  }

  //add the remainder of the string, if needed (there are no more tags in here)
  result += s.substr(lasti, n);

  //fix the unclosed tags
  while (stack.length) {
    result += '</' + stack.pop() + '>';
  }
  return result;
}

function createModal_Video_v (component) {
  var description = '';
  if(component.html()) {
    if(component.find('.blocker').html()){
      component.find('i').on('click', function (event) {
        var $videobox = $($(this).parents()[5]);
        var youtubeId = $videobox.find('.video-embedded').attr('data-videoid');
        var title = ""; // $videobox.find('.aHeading').html();
        var videoUrl = $videobox.find('iframe').attr('src') + "&autoplay=1";
        if($videobox.find('.aBody').html()) {
          description = $videobox.find('.aBody').html();
        } else {
          description = '';
        }
        createPopUpVideo (videoUrl, title, description, youtubeId);
      });
    }
  }
}

/* video button cta */




/* botones */
function createModal_Video_b (component) {
  var description = '';
        $('.videoButton').on('click', function(event){
          event.preventDefault();
          var youtubeId = $(this).attr('data-videoid');
          var title = $(this).attr('data-title');
          var videoUrl = $(this).attr('src') + "&autoplay=1";
            $.ajax({
           url:"https://www.googleapis.com/youtube/v3/videos?part=snippet&id="+youtubeId+"&key=AIzaSyBK33TDNSvGqvJZ0RbFIqqi8LRrViYAf9U",
           dataType: 'jsonp', // Notice! JSONP <-- P (lowercase)
           success:function(json){
               // do stuff with json (in this case an array)
               title = json.items[0].snippet.title;
               var description = json.items[0].snippet.description;
               createPopUpVideo (videoUrl, title, description, youtubeId);
             },
           error:function(){
               console.log("Error");
           }      
        });
          // createPopUpVideo (videoUrl, title, description, youtubeId);
        });
};

function createmodaliframe (){
  $('.videoFrame').on('click', function(event){
    event.preventDefault();
    var iframeUrl = $(this).attr('href');
    $('body').append('<div class="modaliframe noViewables"><span class="b-closer">X</span><div class="iframecontainer"><iframe src="'+iframeUrl+'"></iframe></div></div>');
    $('body').delay(1).queue(function(next) {
      $('.modaliframe').removeClass('noViewables');
      next();
    });
  });
  $('body').on('click','.b-closer',function(){
    $('.modaliframe').remove();
  });
  $('body').on('click','.modaliframe',function(){
    $('.modaliframe').remove();
  });

};

/* fin botones */
function createModal_Video_p (component) {
  var description = '';
  if(component.html()) {
    if(component.find('.blocker').html()){
      component.find('i').on('click', function (event) {
        var $videobox = $($(this).parents()[5]);
        var youtubeId = $videobox.find('.video-embedded').attr('data-videoid');
        var title = $videobox.find('.aHeadline').html();
        var videoUrl = $videobox.find('iframe').attr('src') + "&autoplay=1";

        if($videobox.find('.aDescription').html()) {
          description = $videobox.find('.aDescription').html();
        } else {
          description = '';
        }
        createPopUpVideo (videoUrl, title, description, youtubeId);
      });
    }
  }
}

// video nuevo inicio

function callYoutubeApi(iframeId, videoId) {
  /**
   * Global Variables for YouTube
   */

  onYouTubePlayerAPIReady = function() {
    // create the global player from the specific iframe (#video)
    YouTubePlayer = new YT.Player(String(iframeId), {
      videoId: videoId,
      events: {
        // call this function when player is ready to use
        'onReady': onPlayerReady
      }
    });
  }
  var onPlayerReady = function (e) {
    YouTubePlayer.playVideo();
  }

  // Inject YouTube API script
  var tag = document.createElement('script');
  tag.src = "//www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  if ( typeof onYouTubePlayerAPIReady === 'function') {
    onYouTubePlayerAPIReady();
  }

}

// video nuevo fin

function createPopUpVideo(videoUrl, title, description, youtubeId, iframeId) {
  if(title) {
    var info_title = '<h2 class= "aHeading">'+title+'</h2>';
  } else {
    info_title = "";
  }

  // var info_title = title;
  var info_content = description;
  var mSpaces = [119, 45, 45, 45];

  var youtubeEmbed = '<div class="video-embedded" style="height: 522px;"><div id="'+iframeId+'"></div></div>';

  var modalContent = '<div class="modal-backdrop  in" modal-backdrop="" style="z-index: 1040;"></div><div tabindex="-1" role="dialog" class="modal  in" style="z-index: 1050; display: none; opacity: 1; background-color: rgba(0, 0, 0, 0.901961);"><span class="loader loader-white-50px" style="display:none"></span><div class="modal-dialog modal-video" style="visibility: visible; opacity: 1; display: block;"><div class="modal-content" modal-transclude=""><span class="b-close ">X</span><div class="modal-body "><div class="modal-inner"><span class="loader-white-50px  velocity-animating" data-fade="false" style="display: inline-block; transform: rotateZ(272.88deg); opacity: 0;"></span>'+youtubeEmbed+'</div>'+info_title+'<div class="popup_des">'+description+'</div><div class="background"></div></div></div></div></div>';

  $('body').addClass('loaded modal-open').append(modalContent);
  var modal = $('.modal');
  var alto = $(window).height();
  modal.margin = 50;
  modal.top = alto;
  // $('.modal-content').css('margin-top',alto*0.5);

  $(window).on('resize',function(){
    var alto = $(window).height();
    // $('.modal-content').css('margin-top',alto*0.5);
  });

  var modal_image = modal.find('img');
  var modal_dialog = modal.find('.modal-dialog');
  var modal_backdrop = $('.modal-backdrop');
  var infoblock = modal.find('.inf-block__idesc');

  modal.fadeIn('slow', function() {
    //hide the loader
    modal.find('.loader').remove();
    modal.find('.loader-white-50px').remove();
    modal_backdrop.css({
      'z-index': '1040',
      display: 'none'
    });
  });

  function closeModal() {
    modal_backdrop.remove();

    modal.remove();



    $('body').removeClass('loaded modal-open');
  }

  $(document).keyup(function(event) {
    if(event.keyCode == 27) {
      closeModal();
    }
  });

  $('span.b-close').on('click', function(event) {
    closeModal();
  });

  modal.on('click', function(event) {
    if($(event.target).is('.modal')) {
      closeModal();
    }
  });

  callYoutubeApi(iframeId, youtubeId);

}

// video popup fin
function createModal (component) {

  var aImage = component.find('.mLink-block__img > .mImage img.aImage');
  var expandIcon = component.find('.mLink-block__img i');

  aImage.parent().on('click', function(event) {
    var altopre = $(window).height();
    var id = 'modal';
    var mSpaces = [119, 45, 45, 45]; // [top, right, bottom, left]
    var $modal = $(this).parent().parent().parent().parent().find('.'+id);
    $modal.find('.modal-inner > img').remove();
    var $dialog = $modal.find('.modal-dialog');
    var $info = $modal.find('.inf-block__idesc');

    $modal.find('.modal-inner  :first-child').after('<img class="img-responsive" src="" alt="">');
    var $img = $('.'+id+' .modal-dialog').find('.modal-inner > img');

    var $backdrop = $('.modal-backdrop');

    var img = $(this).children('img');

    var image_url = img.attr('src');
    var imge_url_2 = img.attr('data-image');
    var image_alt = img.attr('alt');

    var info_content = '';
    var infoContent = '';

    if($(this).parents('.mImage-block').find('.mInf-block__idesc').html()) {
      info_content = $(this).parents('.mImage-block').find('.mInf-block__idesc').html();
      $info.html(info_content);
    }

    $img.attr({
      src: imge_url_2,
      alt: image_alt
    });

    $('body').addClass('loaded modal-open');


    var alto = $(window).height();


    $img.on('load', function(event) {
      $modal.fadeIn('slow', function() {
        //hide the loader
        $modal.find('.loader').remove();
        $dialog.css({
          width: 'auto',
          // top: $modal.top + 'px',
          display: 'table',
          visibility: 'visible'
          // margin: $modal.margin + 'px'
        });

        $info.css('visibility', 'visible');

        $dialog.on('mouseover', function(event) {
          $info.fadeIn('slow');
        });

        $dialog.on('mouseleave', function(event) {
          $info.fadeOut('slow');
        });

        $backdrop.css({
          'z-index': '1040',
          display: 'none'
        });

        $modal.css({
          'z-index': '1050',
          display: 'block',
          opacity: '1',
          'background-color': 'rgba(0,0,0,0.9)'
        });
      });

      $(window).on('resize',function(){
        var alto = $(window).height();
        // $('.modal-dialog').css('top',alto*0.5);
      });
    });

    function closeModal() {
      $modal.hide();
      $('body').removeClass('loaded modal-open');
      $('.modal-dialog').css('margin-top','50px');
      $('.modal-dialog').css('visibility','hidden');
      $('.modal').css('display','none');
      $('.modal').css('z-index','0');
    }

    $(document).keyup(function(event) {
      if(e.which == 27) {
        $('.b-close').trigger('click');
      }

    });

    $('span.b-close').on('click', function(event) {
      closeModal();
    });

    $modal.on('click', function(event) {
      if($(event.target).is('.modal')) {
        closeModal();
      }
    });

  });

  if(expandIcon) {
    expandIcon.on('click', function(event) {
      $(this).parent().parent().find('.mImage').trigger('click');
    });
  }
}
// video popup fin
function createModal2 (component) {

  $('.oImageSlider__image').on('click', function(event) {
    var $component = $(this).parent().parent();
    var $parent = $(this).parent();
    var $modal = $component.next('.modalWrapperIn');
    var $slid = $modal.find('.min');
    var $_index = $component.children('.oImageSlider__item').index($parent);
    var _arr = [];
    $(this).parent().parent().find('.oImageSlider__item').each(function(){
        var $_image = $(this).find('.oImageSlider__image img').attr('data-image');
        var $_description = $(this).find('.oImageSlider__description').html();
        if($_description == undefined){
          $_description = "";
        }
        if($_description != ""){
          var $_using = '<div class="oImageSlider__item"> <div class="oImageSlider__image"> <img src="'+$_image+'" alt="" /></div> <div class="oImageSlider__description">'+$_description+'</div></div>';
        }else{
          var $_using = '<div class="oImageSlider__item"> <div class="oImageSlider__image"> <img src="'+$_image+'" alt="" /></div> </div>';
        }
        
        _arr.push($_using);
    });

    var itemElements = $modal.find('.oImageSlider__item').size();

    if (itemElements <= 0) {
        var element;
      for(element=1; element < _arr.length; element++ ){
        $slid.cycle('add', _arr[element]);
      }
    }else{

    }

    $modal.css('display','block');
    $slid.cycle('goto',$_index - 1);
    $modal.append('<div class="overlayBack spin"></div>');
    $('body').css('overflow','hidden');
    $modal.delay(600).queue(function(next) {
      $('.overlayBack').removeClass('spin');
      $(this).removeClass('noViewable');
      var containerWidth = $(window).width();
      var heightPar = $(this).parent().children('.oImageSlider').height();
      if(containerWidth <= 768){
        $(this).find('.oImageSlider').css('height',heightPar+20+'px');
      }
      if(containerWidth <= 560){
        $(this).find('.oImageSlider').css('height',heightPar+20+'px');
      }
      var compare = $(this).children('.modal__slider.in').height();
      var compare2 = $(window).height()-50;
      if(compare>=compare2){
        $(this).children('.modal__slider.in').addClass('overflowed');
      }
      
      next();
    });

  });

  $('body').on('click','.overlayBack, .b-close',function(){
    var $modal = $('.modalWrapperIn');
    $('.overlayBack').remove();
    $modal.css('display','none');
    $modal.addClass('noViewable');
    $('body').css('overflow','visible');
  });

    $(document).keyup(function(e){

        if(e.which == 27){

    $('.b-close').trigger('click');
            
        }
    });

}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}]},{},[1])

