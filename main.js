document.querySelector('.search-btn').addEventListener('click', function () {
    document.querySelector('.header__searchbox--input').style.display = 'block';
    document.querySelector('.header__searchbox--input').focus();
    document.querySelector('.search-btn').style.display = 'none';
});


document.querySelector('.about__welcome--btn').addEventListener('click', function () {
    document.querySelector('.popup').style.display = 'block';
});

document.querySelector('.close-btn').addEventListener('click', function () {
    document.querySelector('.popup').style.display = 'none';
});


var slideIndex = 0;

function showImage(si) {
    var count = document.getElementsByClassName("about__carousel--image");
    var i;
    if (si > count) {
        slideIndex = 0;
    }
    if (si < 1) {
        slideIndex = count.length - 1;
    }
    for (i = 0; i < count.length; i++) {
        count[i].style.display = "none";
    }
    count[slideIndex].style.display = "block";
}

function next() {
    showImage(slideIndex += 1);
}

function prev() {
    showImage(slideIndex -= 1);
}

carousel();

function carousel() {
    var i;
    var count = document.getElementsByClassName("about__carousel--image");
    for (i = 0; i < count.length; i++) {
      count[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex >= count.length) {slideIndex = 0} 
    count[slideIndex].style.display = "block"; 
    setTimeout(carousel, 2000); // Change image every 2 seconds
}


function addzero(j){
    if(j < 10){
        j = "0"+j;
    }
    return j;
}

function showtime(){
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    hours = addzero(hours);
    minutes= addzero(minutes);
    seconds = addzero(seconds);
    
    var day = today.getDay();
    switch(day){
        case 1 : day = "Monday";
            break;
        case 2 : day = "Tusday";
            break;
        case 3 : day = "Wednesday";
            break;
        case 4 : day = "Thursday";
            break;
        case 5 : day = "Friday";
            break;
        case 6 : day = "Saturday";
            break;
        case 7 : day = "Sunday";
            break;
    }
    var d = today.getDate();
    var month = today.getMonth();
    switch(month){
        case 0 : month = "January";
            break;
        case 1: month = "February";
            break;
        case 2 : month = "March";
            break;
        case 3 : month = "April";
            break;
        case 4 : month = "May";
            break;
        case 5 : month = "June";
            break;
        case 6 : month = "July";
            break;
        case 7 : month = "August";
            break;
        case 8 : month = "September";
            break;
        case 9 : month = "October";
            break;
        case 10 : month = "November";
            break;
        case 11 : month = "December";
            break;
    }
    
    document.getElementById("today-time").innerHTML = hours +"<blink>:</blink>"+ minutes + "<blink>:</blink>" + seconds;
     document.getElementById("today-date").innerHTML = day+", "+ d +" "+month;
    t = setTimeout(function() {
    showtime()
  }, 1000);
}

showtime(); 