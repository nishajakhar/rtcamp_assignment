document.querySelector('.search_btn').addEventListener('click', function () {
    document.querySelector('.header_searchbox-input').style.display = 'block';
    document.querySelector('.header_searchbox-input').focus();
    document.querySelector('.search_btn').style.display = 'none';
});


document.querySelector('.about_welcome--btn').addEventListener('click', function () {
    document.querySelector('.popup').style.display = 'block';
});

document.querySelector('.close_btn').addEventListener('click', function () {
    document.querySelector('.popup').style.display = 'none';
});


var slideIndex = 0;

function next() {
    showImage(slideIndex += 1);
}

function prev() {
    showImage(slideIndex -= 1);
}

function showImage(si) {
    var count = document.getElementsByClassName("about_carousel--image");
    console.log(count);
    if (si > count) {
        slideIndex = 0;
    }
    if (si < 1) {
        slideIndex = count.length - 1;
    }
    for (var i = 0; i < count.length; i++) {
        count[i].style.display = "none";
    }
    count[slideIndex].style.display = "block";
}

carousel();

function carousel() {
    var i;
    var count = document.getElementsByClassName("about_carousel--image");
    console.log(count);
    for (i = 0; i < count.length; i++) {
      count[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex >= count.length) {slideIndex = 0} 
    count[slideIndex].style.display = "block"; 
    setTimeout(carousel, 2000); // Change image every 2 seconds
}
