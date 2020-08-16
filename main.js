$(function(){
    $('#experience-click ').click(function(){
        swal({
            title: "Oowps!",
            text: "We're getting ready...",
            button: "I'll be back",
        })　
    });
});

$(function(){
    var backimg = $('#backimg');
        backimg.hide().fadeIn(2000,'easeInQuad')
});

$(function(){
    var effect_pos = 180; 
    var effect_move = 50; 
    var effect_time = 800; 

    $(window).on('scroll load', function(){
        var scroll_top = $(this).scrollTop();
        var scroll_btm = scroll_top + $(this).height();
        effect_pos = scroll_btm - effect_pos;

        $('.imgwrap').each( function() {
            var this_pos = $(this).offset().top;
            if ( effect_pos > this_pos ) {
                $(this).css({
                    opacity: 1,
                    transform: 'translateY(0)',
                    transition: effect_time + 'ms'
                });
            }
        });
    });
});

$(function(){

    var effect_btm = 300; 
    var effect_move = 130; 
    var effect_time = 1700; 

    $('#cardwrap').css({
        opacity: 0
    });
    $('#cardwrap').children().each(function(){
        $(this).css({
            opacity: 0,
            transform: 'translateY('+ effect_move +'px)',
            transition: effect_time + 'ms'
        });
    });

    $(window).on('scroll load', function(){
        var scroll_top = $(this).scrollTop();
        var scroll_btm = scroll_top + $(this).height();
        var effect_pos = scroll_btm - effect_btm;

        $('#cardwrap').each(function() {
            var this_pos = $(this).offset().top;
            if ( effect_pos > this_pos ) {
                $(this).css({
                    opacity: 1,
                    transform: 'translateY(0)'
                });
                $(this).children().each(function(i){
                    $(this).delay(100 + i*200).queue(function(){
                        $(this).css({
                            opacity: 1,
                            transform: 'translateY(0)'
                        }).dequeue();
                    });
                });
            }
        });
    });

});

$(function(){
    var hov = $('#musiccard');
    hov.on("mouseover",function() {
            $('#musiccard h3').html('なりたい自己表現と言葉にできない電撃');
        });

        hov.on("mouseout",function(){
            $('#musiccard h3').html('<img src="icon_music.png">Music');
    });
});

$(function(){
    var hov = $('#overseacard');
        hov.on("mouseover",function() {
            $('#overseacard h3').html('外に出て気づく内側の強みと弱み');
        });

        hov.on("mouseout",function(){
            $('#overseacard h3').html('<img src="icon_oversea.png">Oversea');
    });
});

$(function(){
    var hov = $('#programmingcard');
        hov.on("mouseover",function() {
            $('#programmingcard h3').html('未来に広がる可能性と伴う努力');
        });

        hov.on("mouseout",function(){
            $('#programmingcard h3').html('<img src="icon_program.png">Oversea');
    });
});

$(function(){
    $('.card a').click(function(){
        swal({
            title: "Oowps!",
            text: "We're getting ready...",
            button: "I'll be back",
        })　
    });
});


