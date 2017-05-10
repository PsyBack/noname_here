jQuery(document).ready(function() {

    $(".info-sep").not(":first").hide();
    $(".tab").click(function() {
    $(".tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".info-sep").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");
    
});


