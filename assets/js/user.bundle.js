$('.collapse-list-heading').click(function(){var arrow_down=$(this).children('.arrow').attr('class').includes('down');$(this).children('.arrow').removeClass('up down');$(this).children('.arrow').addClass('down');$(this).siblings('.collapse-list-heading').children('.arrow').removeClass('up down');$(this).siblings('.collapse-list-heading').children('.arrow').addClass('down');if(arrow_down){$(this).children('.arrow').removeClass('up down');$(this).children('.arrow').addClass('up');}});function resizeImages(){var doc_width=$(document).width();if(getMediaCheck()==='sm'){$(".full-width-img").each(function(){if($(this).is(":visible")&&$(this).parent().is(":visible")){$(this).parent().css("width","100%");$(this).parent().css("margin-left","0%");var width=$(this).width();var scale=100.*doc_width/width+2.;var margin=(scale-100.)/2.+1;$(this).parent().css("width",scale.toString()+"%");$(this).parent().css("margin-left","-"+margin.toString()+"%");$(this).css("max-height","400px");$(this).css("object-fit","cover");$('.site__content').css("overflow","hidden");}});}else $(".full-width-img").each(function(){$(this).parent().css("width","100%");$(this).parent().css("margin-left","0%");$(this).css("max-height","");$('.site__content').css("overflow","");});}$(document).ready(function(){resizeImages();});$(window).resize(function(){resizeImages();});$('.collapse').on('shown.bs.collapse',function(){resizeImages();});function clearToggledHeaders(){$(".header__toggled").children(".header__links-wrapper").css("display","none");$(".header__toggled").removeClass("header__toggled");$('.header__link').find('.arrow').removeClass("up down");$('.header__link').find('.arrow').addClass("down");}$('.header__item').click(function(){var is_toggled=this.className.includes("header__toggled");clearToggledHeaders();var child_id=this.id.replace("_parent","_child");if($("#"+child_id).length)if(is_toggled){$(this).removeClass("header__toggled");$("#"+child_id).css("display","none");$(this).find(".arrow").removeClass("up down");$(this).find(".arrow").addClass("down");}else{$(this).addClass("header__toggled");$("#"+child_id).css("display","block");$("#"+child_id).css("height","auto");$(this).find(".arrow").removeClass("up down");$(this).find(".arrow").addClass("up");}});$('html').click(function(){clearToggledHeaders();});$('.header__item').click(function(event){event.stopPropagation();});function getMediaCheck(){var test=$(".media-test").css("width");if(test=='1px')return 'sm';if(test=='2px')return 'md';if(test=='3px')return 'lg';if(test=='4px')return 'xl';return 'none';}$(document).ready(function(){$("body").removeClass("preload");});