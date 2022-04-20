function changefunction(direction) {
    var currentImg = $(".active");
    var nextImg = currentImg.next();
    var previousImg = currentImg.prev();
        
    if( direction == "next") {
        if(nextImg.length) {
            nextImg.addClass("active");
        } else {
            $(".pics img").first().addClass("active");
        }
    } else {
        if(previousImg.length) {
            previousImg.addClass("active");
        } else {
            $(".pics img").last().addClass("active");
        }
    }

    currentImg.removeClass("active");
}
