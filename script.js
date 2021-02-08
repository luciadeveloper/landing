jQuery('.play-button').click(function(){
    jQuery('.video-iframe').html(' <iframe width="100%" height="500px" src="https://www.youtube.com/embed/mUGYPlAgJPw?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
    jQuery('.video-cover').hide();
    jQuery('.play-button').hide();
    
})